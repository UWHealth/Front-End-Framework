/**
 * @fileoverview Starts webpack file watching and compilation. Compiles client-side JS and sample files.
 * Also handles webpack logging.
 **/

const fs = require('fs');
const path = require('path');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const CWD = process.cwd();
const PATHS = require(`${CWD}/config/paths.config.js`);
const MODE = require(`${CWD}/build/helpers/mode.js`);
const STATS = require(`${CWD}/build/helpers/webpack-stats.js`);
const ARGS = require(`${CWD}/build/helpers/args.js`);
const Logger = require(`${CWD}/build/helpers/logger.js`);
const LOG = new Logger('Webpack');

const webpackConfigs = require(`${CWD}/build/webpack.build.js`);
const compiler = webpack(webpackConfigs);

const watchOptions =
    !MODE.production || MODE.localProduction
        ? { poll: 1000, ignored: /(node_modules|dist|public)/ }
        : null;

const middleware = [
    webpackDevMiddleware(compiler, {
        publicPath: '/',
        stats: require(`${CWD}/build/helpers/webpack-stats.js`)(),
        writeToDisk: (filepath) => filepath.indexOf('hot-update') < 0,
        logLevel: 'silent',
        serverSideRender: true,
        reporter: (middlewareOptions, options) => {
            throttle(webpackLogger(LOG, null, options.stats), 5000);
        },
        watchOptions,
    }),

    customMiddleware,

    webpackHotMiddleware(compiler, {
        noInfo: true,
        log: false,
        silent: true,
    }),
];

function createManifestFolders(pathToManifest) {
    const folders = path.dirname(pathToManifest);
    try {
        return fs.mkdirSync(folders, { recursive: true });
    } catch (e) {
        return folders;
    }
}

module.exports.restart = function(done) {
    middleware[0].invalidate();
    return done;
};

module.exports.start = function startWebpack(runImmediately, done) {
    // Write out a temporary manifest (if needed), so we can avoid errors on startup
    if (!fs.existsSync(PATHS.demos.entry.manifest)) {
        const folders = createManifestFolders(PATHS.demos.entry.manifest);
        fs.writeFileSync(
            PATHS.demos.entry.manifest,
            '{ "initial":["runtime.bundle.js", "main.js"], "folders":"' +
                folders +
                '"}'
        );
    }

    // Allow for immediate run (essentially, non-watch mode)
    // Primarily used for --production mode
    if (runImmediately || (!MODE.local && MODE.production)) {
        LOG.spinner('Compiling');
        compiler.run((err, stats) => webpackLogger(LOG, err, stats, done));
    } else {
        compiler.hooks.watchRun.tap('Log Compilation', () => {
            throttle(LOG.spinner('Compiling'), 5000);
        });

        return {
            middleware,
            compiler,
        };
    }
};

/* eslint-disable-next-line */
function webpackLogger(LOG, err, stats, done) {
    if (err) {
        LOG.error(err.stack || err);
        if (err.details) {
            LOG.error(err.details);
        }
    } else if (stats) {
        const statLogs = stats.stats !== undefined ? stats.stats : [stats];

        statLogs.forEach((stats) => {
            // Find the correct stat config, and get its name
            const name = '(' + stats.compilation.compiler.options.name + ')';

            const info = stats.toJson();

            if (stats.hasErrors()) {
                return info.errors.forEach((err) => {
                    if (!MODE.production && !ARGS.stats) {
                        const errArray = err.split('\n');
                        err =
                            errArray[0] +
                            '\n' +
                            errArray[1] +
                            '\n' +
                            errArray[2];
                    }
                    LOG.error(name + err);
                });
            }

            if (stats.hasWarnings()) {
                LOG.info(name + ' Warning');
                return LOG.info(stats.toString('minimal'));
            }

            const statsString =
                !MODE.production && !ARGS.stats
                    ? `${stats
                          .toString('minimal')
                          .replace(/\s+(\d*)(.*)/, `$1 ${name}$2 `)}`
                    : stats.toString(STATS());

            LOG.success('Compiled ' + statsString);
        });
    }
    if (typeof done === 'function') done();
}

function throttle(func, delay) {
    let inDebounce;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(inDebounce);
        inDebounce = setTimeout(() => func.apply(context, args), delay);
    };
}

function customMiddleware(req, res, next) {
    const parsed = require('url').parse(req.url);
    // console.log(
    //     parsed.pathname,
    //     parsed.pathname.match(
    //         /\/?demo\/(?:.*\/){1,2}((?:.*\.){0,2}(html|js))?/gim
    //     )
    // );
    if (
        parsed.pathname.match(
            /\/?demo\/(?:.*\/){1,2}((?:.*\.){0,2}(html|js))?/gim
        )
    ) {
        // console.log(parsed);
        let compilations = [];
        const assetsByChunkName = res.locals.webpackStats
            .toJson()
            .children.map((compilation) => {
                compilations.push(compilation);
                return normalizeAssets(compilation.assetsByChunkName).filter(
                    (asset) => path.extname(asset) === '.js'
                );
            });
        const baseName = path.basename(parsed.pathname);
        const entryName = path.posix.join(baseName, baseName);
        const demoPath = path.posix.relative(
            PATHS.folders.dist,
            PATHS.demos.dest
        );

        const resolved = path.resolve(`${PATHS.demos.dest}`, `base.demo.js`);
        const content = require(resolved);
        const htmlWebpackPlugin = {
            options: {
                pageTitle: path.basename(parsed.pathname),
                //Template-specific data
                render: {
                    internalTemplate: `${demoPath}/${entryName}.demo.js`,
                    pathname: `/${demoPath}/${baseName}/`,
                    componentPath: `${baseName}`,
                    addon: '',
                },
            },
        };
        const asset = require(path.resolve(`${PATHS.demos.dest}`, `${entryName}.demo.js`));
        delete require.cache[require.resolve(resolved)];
        res.setHeader('Content-Type', 'text/html');
        res.end(
            content.render({
                asset,
                assetContent: fs.readFileSync(
                    path.resolve(`${PATHS.demos.dest}`, `${entryName}.demo.js`)
                ),
                compilation: compilations[0],
                htmlWebpackPlugin,
            }).html
        );
    } else {
        next();
    }
}

function normalizeAssets(assets) {
    if (assets === Object(assets)) {
        return flattenArray(Object.values(assets));
    }
    return Array.isArray(assets) ? assets : [assets];
}

function flattenArray(arr1) {
    return arr1.reduce(
        (acc, val) =>
            Array.isArray(val)
                ? acc.concat(flattenArray(val))
                : acc.concat(val),
        []
    );
}
