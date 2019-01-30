const path = require('path');
const CWD = process.cwd();
const MODE = require(`${CWD}/build/helpers/mode.js`);
const history = require('connect-history-api-fallback');
// const PATHS = require(`${CWD}/config/paths.config.js`);
// const webpackLogger = require('./webpack-logger.js');
// const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackIsoMiddleware = require('webpack-isomorphic-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const watchOptions =
    MODE.dev || MODE.localProduction
        ? { poll: 1000, ignored: /(node_modules|dist|public)/ }
        : null;

module.exports = function(client, server, LOG) {
    return [
        // Force express-like res.locals
        // webpackIsoMiddleware depends on it
        function(req, res, next) {
            res.locals = res.locals || {};
            next();
        },

        webpackIsoMiddleware(client, server, {
            watchOptions,
            notify: true,
            findServerAssetName: (stats) => {
                const assetName = stats.assetsByChunkName['base'];
                return stats.assets
                    .map((asset) => asset.name)
                    .find((name) => name === assetName);
            },
            report: {
                stats: 'once',
                write: (str) => {
                    if (str) {
                        let log = LOG;
                        if (Array.isArray(str)) {
                            log = LOG[str[1]];
                            str = str[0];
                        } else {
                            log = LOG.info;
                        }
                        log(str);
                    }
                },
                printStart: () => {
                    // const method = firstRun ? 'info' : 'spinner';
                    // firstRun = false;
                    return 'Compiling...';
                },
                printSuccess: ({ duration }) => [
                    `Compiled in ${duration}ms`,
                    'success',
                ],
            },
        }),

        webpackHotMiddleware(client, {
            noInfo: true,
            log: false,
            silent: true,
        }),

        demoMiddleware,

        history(),
    ];
};

async function demoMiddleware(req, res, next) {
    const parsed = require('url').parse(req.url);
    const { compilation, exports } = res.locals.isomorphic;


    // Only allow /demo/:something || /demo/:something/:file.html
    //
    // /:path(demo)/:key([\w]*)*/:file([\w\-]*)?:ext(\.html?)?
    // http://forbeslindesay.github.io/express-route-tester/
    if (
        parsed.pathname.match(/^\/((?:[^/]+?)(?:\/(?:[^/]+?))*)(?:\/(?=$))?$/i)
    ) {
        let render = '';
        // console.log(JSON.stringify(exports));
        try {
            render = await exports.default(req, res, next);
        } catch(e) {
            console.error(e);
        }
        if (!render) {
            return next();
        }
        res.setHeader('Content-Type', 'text/html');
        res.end(render);
    } else {
        next();
    }
        // const { compilation, exports } = res.locals.isomorphic;

        // const serverStats = compilation.serverStats.toJson();
        // // const baseName = path.basename(parsed.pathname);
        // // const entryName = path.posix.join(parsed.href, baseName);
        // const entryName = parsed.pathname.replace('/', '');
        // // console.log(entryName);
        // const pathFromStats =
        //     serverStats.assetsByChunkName[entryName] ||
        //     serverStats.assetsByChunkName['/' + entryName];

        // // console.log(pathFromStats);
        // if (!pathFromStats) {
        //     return next();
        // }
        // const filePath = path.posix.join(
        //     serverStats.outputPath,
        //     serverStats.publicPath,
        //     pathFromStats
        // );
        // const serverFS =
        //     compilation.serverStats.compilation.compiler.outputFileSystem;

        // try {
        //     const file = await new Promise((resolve, reject) =>
        //         serverFS.readFile(filePath, (err, buffer) => {
        //             if (err) {
        //                 reject(err);
        //             } else {
        //                 resolve(buffer.toString());
        //             }
        //         })
        //     );

        //     const asset = await requireFromString(file, filePath);
        //     const generatedHead = asset.render({}).head;

        //     const clientFiles = require('./get-initial-webpack-files.js')(
        //         res.locals.isomorphic.compilation.clientStats
        //     );
        //     render = exports.default({
        //         asset,
        //         manifest: { initial: clientFiles },
        //         compilation: compilation.clientStats.compilation,
        //         publicPath: `${serverStats.publicPath}`,
        //         head: {
        //             pageTitle: '',
        //             headExtra: generatedHead,
        //         },
        //         fromServer: {
        //             request: req,
        //             pathname: `${serverStats.publicPath}${pathFromStats}`,
        //             componentPath: `${path.basename('/' + entryName)}`,
        //         },
        //     }).html;
        // } catch (err) {
        //     render = `
        //     <html>
        //     <head><title>Error</title></head>
        //     <body>
        //         <pre>${err.message} \n ${err.stack}</pre>
        //     </body>
        //     </html>`;
        // }
}

function requireFromString(
    code,
    filename = '',
    opts = { appendPaths: [], prependPaths: [] }
) {
    // const fs = require('fs');
    const path = require('path');
    const Module = require('module');

    opts.appendPaths = opts.appendPaths || [];
    opts.prependPaths = opts.prependPaths || [];

    const paths = Module._nodeModulePaths(path.dirname(filename));

    const parent = module.parent;
    const m = new Module(filename, parent);
    m.filename = filename;
    m.paths = []
        .concat(opts.prependPaths)
        .concat(paths)
        .concat(opts.appendPaths);
    m._compile(code, filename);

    const exports = m.exports;
    parent &&
        parent.children &&
        parent.children.splice(parent.children.indexOf(m), 1);

    return exports;
}

/*
module.exports = [
    webpackDevMiddleware(compiler, {
        publicPath: '/',
        stats: require(`${CWD}/build/helpers/webpack-stats-config.js`)(),
        writeToDisk: (filepath) => filepath.indexOf('hot-update') < 0,
        logLevel: 'silent',
        serverSideRender: true,
        reporter: (middlewareOptions, options) => {
            throttle(webpackLogger(LOG, null, options.stats), 5000);
        },
        watchOptions,
    }),
]

function customMiddleware(req, res, next) {
    const parsed = require('url').parse(req.url);

    // Only allow /demo/:something || /demo/:something/:file.html
    //
    // /:path(demo)/:key([\w]*)* ?/:file([\w\-]*)?:ext(\.html?)?
    // http://forbeslindesay.github.io/express-route-tester/
    if (
        parsed.pathname.match(
            /^\/((?:demo))(?:\/((?:[\w]*)(?:\/(?:[\w]*))*))?\/((?:[\w-]*))?(?:((?:\.html?)))?(?:\/(?=$))?$/i
        )
    ) {
        // console.log(parsed);
        let compilations = [];
        const assetsByChunkName = res.locals.isomorphic.compilation.stats
            .toJson()
            .children.map((compilation) => {
                compilations.push(compilation);
                return normalizeAssets(compilation.assetsByChunkName).filter(
                    (asset) => path.extname(asset) === '.js'
                );
            });

        const initialFiles = require('./get-initial-webpack-files.js')(
            res.locals.webpackStats
        )[0];
        const baseName = path.basename(parsed.pathname);
        const entryName = path.posix.join(baseName, baseName);
        const demoPath = path.posix.relative(
            PATHS.folders.dist,
            PATHS.demos.dest
        );

        const basePath = path.resolve(`${PATHS.demos.dest}`, `base.demo.js`);
        const assetPath = path.resolve(
            `${PATHS.demos.dest}`,
            `${entryName}.demo.js`
        );

        // Recreate HTML webpack plugin options object
        const htmlWebpackPlugin = {
            options: {
                pageTitle: false,
                //Template-specific data
                render: {
                    internalTemplate: `${demoPath}/${entryName}.demo.js`,
                    pathname: `/${demoPath}/${baseName}/`,
                    componentPath: `${baseName}`,
                },
            },
        };

        let render;
        try {
            const content = require(basePath);
            const asset = require(assetPath);
            const headExtra = asset.render({}).head;

            render = content.render({
                asset,
                assetsByChunkName,
                headExtra,
                manifest: { initial: initialFiles },
                compilation: compilations[0],
                htmlWebpackPlugin,
            }).html;
        } catch (err) {
            render = `<pre>${err.message} \n ${err.stack}</pre>`;
        }

        try {
            // Remove assets from Node cache
            delete require.cache[require.resolve(basePath)];
            delete require.cache[require.resolve(PATHS.demos.entry.manifest)];
            delete require.cache[require.resolve(assetPath)];
        } catch (err) {
            // Ignore these errors
            () => null;
        }

        res.setHeader('Content-Type', 'text/html');
        res.end(render);
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

/**
 * Throttles function calls. Used for throttling over-aggressive webpack logging.

function throttle(func, delay) {
    let inDebounce;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(inDebounce);
        inDebounce = setTimeout(() => func.apply(context, args), delay);
    };
}
*/
