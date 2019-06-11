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
            memoryFs: true,
            watchDelay: 300,
            report: {
                stats: 'once',
                write: (str) => {
                    if (!str || typeof str !== 'string') return false;
                    process.stdout.write(str);
                },
                printStart: () => false, // Handled by webpackbar
                printSuccess: (/*{ duration }*/) => false,
                printFailure: (err) => false, //LOG.error(err),
                printStats: ({ stats }) => false, //LOG.info(stats)
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
        const renderer = findExport(exports);
        const compilation = res.locals.isomorphic.compilation;
        render = await renderer({ req, res, next, compilation });
    } catch (e) {
        console.error(e);
    }
    if (!render) {
        return next();
    }
    if (!res.hasHeader('content-type')) {
        res.setHeader('Content-Type', 'text/html');
    }
    res.end(render);
}

function findExport(mod) {
    return mod && typeof mod === 'object' && (mod['default'] || mod.__esModule)
        ? mod['default']
        : mod;
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
