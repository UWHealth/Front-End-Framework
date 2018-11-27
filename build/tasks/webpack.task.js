/**
 * @fileoverview Starts webpack file watching and compilation. Compiles client-side JS and sample files.
 * Also handles webpack logging.
 **/

const webpack = require('webpack');
const fs = require('fs');
const path = require('path');

const CWD = process.cwd();
const PATHS = require(`${CWD}/config/paths.config.js`);
const MODE = require(`${CWD}/build/helpers/mode.js`);
const STATS = require(`${CWD}/build/helpers/webpack-stats.js`);
const ARGS = require(`${CWD}/build/helpers/args.js`);
const Logger = require(`${CWD}/build/helpers/logger.js`);

const watchOptions =
    MODE.localProduction || !MODE.production
        ? { poll: 1000, ignored: /(node_modules|dist|public)/ }
        : null;

function createManifestFolders() {
    const folders = PATHS.demos.entry.manifest
        .replace(/\\/g, '/')
        .replace(/.*dist\/(.*)(\/.*\.json)/gi, '$1')
        .split('/');

    return folders.reduce((prev, folder) => {
        try {
            fs.mkdirSync(path.join(prev, folder));
        } catch (e) {} // eslint-disable-line
        return path.join(prev, folder);
    }, PATHS.folders.dist);
}

module.exports = function startWebpack(runImmediately, done) {
    const LOG = new Logger('Webpack');
    const webpackConfigs = require(`${CWD}/build/webpack.build.js`);

    const compiler = webpack(webpackConfigs);

    // Write out a temporary manifest so we can avoid errors on startup
    const folders = createManifestFolders();
    fs.writeFileSync(
        PATHS.demos.entry.manifest,
        '{ "folders":"' + folders + '"}'
    );

    // Allow for immediate run
    if (runImmediately || (!MODE.local && MODE.production)) {
        LOG.spinner('Compiling');
        compiler.run((err, stats) => webpackLogger(LOG, err, stats, done));
    }
    else {

        const webpackDevMiddleware = require('webpack-dev-middleware');
        const webpackHotMiddleware = require('webpack-hot-middleware');

        compiler.hooks.watchRun.tap('Log Compilation', () => {
            throttle(LOG.spinner('Compiling'), 5000);
        });

        const middleware = [
            webpackDevMiddleware(compiler, {
                publicPath: '/',
                stats: require(`${CWD}/build/helpers/webpack-stats.js`)(),
                writeToDisk: true,
                // logLevel: 'error',
                serverSideRender: true,
                reporter: (middlewareOptions, options) => {
                    throttle(webpackLogger(LOG, null, options.stats), 5000);
                },
                watchOptions,
            }),
            function(req, res, next) {
                const parsed = require('url').parse(req.url);
                console.log(
                    parsed.pathname,
                    parsed.pathname.match(
                        /\/?demo\/(?:.*\/){1,2}((?:.*\.){0,2}(html|js))?/gim
                    )
                );
                if (
                    parsed.pathname.match(
                        /\/?demo\/(?:.*\/){1,2}((?:.*\.){0,2}(html|js))?/gim
                    )
                ) {
                    console.log(parsed);
                    const assetsByChunkName = res.locals.webpackStats
                        .toJson()
                        .children.map((compilation) => {
                            return normalizeAssets(
                                compilation.assetsByChunkName
                            ).filter((asset) => path.extname(asset) === '.js');
                        });
                    //console.log('Assets', flattenArray(assetsByChunkName));
                    console.log(
                        path.resolve(`${PATHS.folders.dist}`, `${parsed.pathname}`)
                    );
                    const content = require(path.resolve(
                        `${PATHS.folders.dist}`,
                        `${parsed.pathname}`
                    ));
                    res.render(content.render());
                }
                next();
            },

            webpackHotMiddleware(compiler, {
                noInfo: true,
                log: false,
                silent: true,
            }),
        ];

        return { middleware, compiler };
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

            return LOG.success('Compiled ' + statsString);
        });
    }
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
