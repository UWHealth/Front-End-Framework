const CWD = process.cwd();
const MODE = require(`${CWD}/build/helpers/mode.js`);
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
                let assetName =
                    stats.assetsByChunkName['main'] ||
                    stats.assetsByChunkName['server'] ||
                    stats.assetsByChunkName[0];

                assetName = Array.isArray(assetName) ? assetName[0] : assetName;
                return stats.assets
                    .map((asset) => asset.name)
                    .find((name) => name === assetName);
            },
            watchDelay: 300,
            report: {
                stats: 'once',
                write: (str) => {
                    if (!str || typeof str !== 'string') return '';
                    process.stdout.write(str);
                },
                printStart: () => false, // Handled by webpackbar
                printSuccess: (/*{ duration }*/) => false,
                printFailure: (err) => '', //LOG.error(err),
                printStats: ({ stats }) => '', //LOG.info(stats)
            },
        }),

        webpackHotMiddleware(client, {
            noInfo: true,
            log: false,
            silent: true,
        }),

        pageMiddleware,
    ];
};

async function pageMiddleware(req, res, next) {
    const { /*compilation,*/ exports } = res.locals.isomorphic;

    let render = '';
    try {
        render = await exports.default({ req, res, next });
    } catch (e) {
        console.error(e);
    }
    if (!render) {
        return next();
    }
    res.setHeader('Content-Type', 'text/html');
    res.end(render);
}

function requireFromString(
    code,
    filename = '',
    opts = { appendPaths: [], prependPaths: [] }
) {
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
