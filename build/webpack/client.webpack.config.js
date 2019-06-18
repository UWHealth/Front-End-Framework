/**
 * @fileoverview - Webpack configuration.
 * Written in CommonJS (require/module).
 */

const CWD = process.cwd();
const PATHS = require(`${CWD}/config/paths.config.js`);
const MODE = require(`${CWD}/build/helpers/mode.js`);

const webpack = require('webpack');
const OfflinePlugin = require('offline-plugin');
const glob = require('fast-glob');
const path = require('path');

const baseConfig = require(`./base.webpack.config.js`);
const babelLoader = require(`./helpers/loader-configs.js`).babel;
const svelteLoader = require(`./helpers/loader-configs.js`).svelte;
const config = baseConfig({ target: 'web', name: 'Client' });
const jsPath = path.posix.relative(PATHS.folders.dist, PATHS.js.dest);

const isDev = MODE.development;

config.recordsPath = `${PATHS.folders.pub}/js-records.json`;

config.entry = {
    main: addHMR(path.resolve(PATHS.js.entry.main)),
};

config.output = Object.assign(config.output, {
    library: 'uwhealth',
    libraryTarget: 'umd',

    publicPath: '/',
    pathinfo: isDev,
    path: path.resolve(PATHS.folders.dist),

    filename: `${jsPath}/[name].bundle.js`,
    chunkFilename: !isDev
        ? `${jsPath}/[name].[chunkhash:3].js`
        : `${jsPath}/[name].js`,
    hotUpdateChunkFilename: '[id].hot-update.js',
    hotUpdateMainFilename: 'main.hot-update.js',
});

// Add "svelte" key to the front of package resolution
config.resolve.mainFields.unshift('svelte', 'browser');

/*
 * Client Plugins
 */
config.plugins = config.plugins.concat(
    [
        // Hot module replacement
        // isDev && new webpack.HotModuleReplacementPlugin(),

        // Keep module.id stable when vendor modules do not change
        isDev && new webpack.HashedModuleIdsPlugin(),

        // Ensure chunk order stays consistent
        new webpack.optimize.OccurrenceOrderPlugin(),

        // Allow fenced developer code to be tree-shaken
        !isDev &&
            new webpack.DefinePlugin({
                'typeof window': '"object"',
                'process.env.NODE_ENV': "'production'",
                'module.hot': 'false',
            }),

        // new OfflinePlugin({
        //     excludes: ['**/.*', '**/*.map', '**/*.gz', '**/*.hot-update*'],
        //     externals: ['/public/css/main.css', '/demo/button.demo.js'],
        //     rewrites: (asset) => asset,
        // }),
    ].filter(Boolean)
);

// Prefetch components, for quicker compile times
glob.sync(PATHS.js.entry.components).forEach((component) => {
    config.plugins.push(new webpack.PrefetchPlugin(path.resolve(component)));
});

/*
 * Client loaders
 */
config.module.rules.push(
    // Svelte Loader
    svelteLoader(config.target),

    // Babel JS files
    babelLoader(config.target)
);

/*
 * Client optimizations
 * 1. Always create a runtime entry point (dev and prod)
 * 2. Remove Node polyfills (prod)
 * 3. Uglify (prod)
 * 4. Merge extracted CSS (prod)
 * 5. Split & merge chunks (prod)
 */

// [1] Simplify chunks to rely on webpack runtime for loading
config.optimization.runtimeChunk = { name: 'runtime' };

// [2] Take all extracted CSS and concatenate it into one .css file
// This might need to be changed or disabled depending on the project
// In many cases, component/route-based CSS is actually faster
config.optimization.splitChunks.cacheGroups = {
    styles: {
        name: 'styles',
        test: /\.css$/,
        chunks: 'all',
        enforce: true,
    },
};

// Allow/disallow output of errored files
config.optimization.noEmitOnErrors = false;

if (!isDev) {
    // [3] Remove unecessary Node faking
    config.node = {
        setImmediate: false,
        process: 'mock',
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty',
    };

    // [4] Uglification options
    // const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
    //config.optimization.minimize = false;
    // config.optimization.minimizer = [
    //     new UglifyJsPlugin({
    //         uglifyOptions: {
    //             ecma: 6,
    //             ie8: false,
    //             beautify: true,
    //             mangle: true,
    //             compress: true,
    //             comments: false,
    //         },
    //         parallel: true,
    //         sourceMap: true,
    //     }),
    // ];

    // [5] Split chunks optimally
    // Probably needs to be tweaked based on project needs
    config.optimization.concatenateModules = true;
    config.optimization.mergeDuplicateChunks = true;

    // config.optimization.splitChunks = Object.assign(
    //     config.optimization.splitChunks,
    //     {
    //         chunks: 'all',
    //         automaticNameDelimiter: '+',
    //         minSize: 15000,
    //         minChunks: 1,
    //         maxAsyncRequests: 5,
    //         maxInitialRequests: 3,
    //         cacheGroups: {
    //             vendors: false,
    //             default: {
    //                 minChunks: 2,
    //                 priority: 0,
    //                 reuseExistingChunk: true,
    //             },
    //             routing: {
    //                 name: 'routing',
    //                 test: /[\\/]node_modules[\\/](svelte|history)/,
    //                 chunks: 'all',
    //                 minChunks: 3,
    //                 priority: -20,
    //             },
    //             commons: {
    //                 name: 'shared',
    //                 chunks: 'all',
    //                 minChunks: 2,
    //                 reuseExistingChunk: true,
    //             },
    //         },
    //     }
    // );
}

/**
 * Adds Hot Module Replacement to entry points when necessary
 * @link https://webpack.js.org/concepts/hot-module-replacement/
 * @param {String|Array} entry - entrypoint path(s).
 * @returns {Array} entrypoint with HMR js added to the front
 */
function addHMR(entry) {
    // Never add HMR to production code
    if (MODE.production || MODE.localProduction) {
        return entry;
    }

    // Make sure we're dealing with an array
    if (!Array.isArray(entry)) {
        entry = [entry];
    }
    entry.unshift(
        require.resolve(`webpack-hot-middleware/client`) +
            `?name=${config.name}&reload=false`
    );

    return entry;
}

module.exports = config;
