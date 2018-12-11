const path = require('path');
const fs = require('fs');
const CWD = process.cwd();
const PATHS = require(`${CWD}/config/paths.config.js`);
const MODE = require(`${CWD}/build/helpers/mode.js`);

const webpackLogger = require('./webpack-logger.js');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const watchOptions =
    !MODE.production || MODE.localProduction
        ? { poll: 1000, ignored: /(node_modules|dist|public)/ }
        : null;

module.exports = function(compiler, LOG) {
    return [
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
};

function customMiddleware(req, res, next) {
    const parsed = require('url').parse(req.url);

    // Only allow /demo/
    if (
        parsed.pathname.match(/^\/demo\/([^/]+?)\/?$/gim) ||
        parsed.pathname.match(/index\.html/gim)
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
        // Recreate HTML webpack plugin options object
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

        const assetPath = path.resolve(
            `${PATHS.demos.dest}`,
            `${entryName}.demo.js`
        );
        const assetContent = fs.readFileSync(
            path.resolve(`${PATHS.demos.dest}`, `${entryName}.demo.js`)
        );
        res.setHeader('Content-Type', 'text/html');
        res.end(
            content.render({
                asset: require(assetPath),
                assetContent,
                assetsByChunkName,
                manifest: require(PATHS.demos.entry.manifest),
                compilation: compilations[0],
                htmlWebpackPlugin,
            }).html
        );
        delete require.cache[require.resolve(resolved)];
        delete require.cache[require.resolve(PATHS.demos.entry.manifest)];
        delete require.cache[require.resolve(assetPath)];
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
 */
function throttle(func, delay) {
    let inDebounce;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(inDebounce);
        inDebounce = setTimeout(() => func.apply(context, args), delay);
    };
}
