const CWD = process.cwd();
const MODE = require(`${CWD}/build/helpers/mode.js`);
const Logger = require(`./logger.js`);
const webpack = require('webpack');
const webpackIsoMiddleware = require('webpack-isomorphic-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const LOG = new Logger('Middleware');

const watchOptions =
    MODE.development || MODE.localProduction
        ? { poll: 1000, ignored: /(node_modules|dist)/ }
        : null;

module.exports = function(client, server) {
    const compiler = webpack([client, server]);
    // Clear compiler cache
    compiler.purgeInputFileSystem();

    return [
        // Force express-like res.locals
        // webpackIsoMiddleware depends on it
        function(req, res, next) {
            res.locals = res.locals || {};
            next();
        },

        webpackIsoMiddleware(compiler, {
            watchOptions,
            watch: true,
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
            memoryFs: !MODE.debug,
            report: {
                stats: MODE.debug ? 'once' : false,
                write: (str) => {
                    //if (MODE.debug) {
                    return str && process.stdout.write(str);
                    //}
                   // return false;
                },
                printSuccess: () => false,
                printInvalidate: () => false,
                printStart: () => false,
            },
        }),

        webpackHotMiddleware(compiler, {
            noInfo: !MODE.debug,
            quiet: !MODE.debug,
            log: false,
        }),

        pageMiddleware,
    ];
};

async function pageMiddleware(req, res, next) {
    let render = '';
    try {
        const { compilation, exports } = res.locals.isomorphic;
        const renderer = findExport(exports);
        render = await renderer({ req, res, next, compilation });
    } catch (e) {
        console.log('middleware error');
        LOG.error(e);
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

/* Unused at the moment
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
}*/
