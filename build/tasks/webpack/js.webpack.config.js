/**
 * @fileoverview - Webpack configuration.
 * Written in CommonJS (require/module).
 */

const CWD = process.cwd();
const PATHS = require(`${CWD}/config/paths.config.js`);
const STATS = require(`${CWD}/build/helpers/webpack-stats.js`)();
const MODE = require(`${CWD}/build/helpers/mode.js`);

const webpack = require('webpack');
const cloneDeep = require('lodash.clonedeep');
const glob = require('fast-glob');
const path = require('path');

const baseConfig = require(`./base.webpack.config.js`);
const babelConfig = require(`${CWD}/config/babel.config.js`)('web');
const svelteConfig = require(`${CWD}/build/helpers/svelte-loader-config.js`);
const VueManifestPlugin = require(`${CWD}/build/helpers/vue-ssr-client-plugin.js`);
const config = cloneDeep(baseConfig.config);
const jsPath = path.posix.relative(PATHS.folders.dist, PATHS.js.dest);

config.name = 'Client';
config.stats = STATS;
config.target = 'web';
config.recordsPath = `${PATHS.folders.pub}/js-records.json`;

config.entry = {
    main: addHMR(path.resolve(PATHS.js.entry.main)),
};

config.output = {
    library: 'uwhealth',
    libraryTarget: 'umd',

    publicPath: '/',
    pathinfo: !MODE.production,
    path: path.resolve(PATHS.folders.dist),

    filename: `${jsPath}/[name].bundle.js`,
    chunkFilename: MODE.production
        ? `${jsPath}/[name].[chunkhash:3].js`
        : `${jsPath}/[name].js`,
};

// Add "svelte" key to the front of package resolution
config.resolve.mainFields.unshift('svelte', 'browser');
config.resolve.alias['@manifest'] = PATHS.demos.entry.manifest;

/*
 * Client Plugins
 */
config.plugins = config.plugins.concat(
    [
        // Using Vue's manifest plugin so we can reference it in SSR config
        new VueManifestPlugin({
            filename: `${path.posix.relative(
                PATHS.folders.dist,
                PATHS.demos.entry.manifest
            )}`,
        }),
        // Ensure chunk order stays consistent
        new webpack.optimize.OccurrenceOrderPlugin(),
        // Hot module replacement
        new webpack.HotModuleReplacementPlugin(),

        // Keep module.id stable when vendor modules do not change
        MODE.production ? new webpack.HashedModuleIdsPlugin() : false,

        // Allow non-production code to be removed
        MODE.production
            ? new webpack.DefinePlugin({
                  'typeof window': '"object"',
                  'process.env.NODE_ENV': "'production'",
                  'module.hot': 'false',
              })
            : false,
    ].filter(Boolean)
);

// Prefetch components, for quicker compile times
glob.sync(PATHS.js.entry.components).forEach((component) => {
    config.plugins.push(new webpack.PrefetchPlugin(path.resolve(component)));
});

/*
 * Client loaders
 */
config.module.rules.unshift(
    // Svelte-generation, with babel
    svelteConfig('web', babelConfig),

    // Babelify
    {
        test: /\.(js|jsx)$/,
        enforce: 'post',
        exclude: [
            /node_modules[\\/]core-js/,
            /node_modules[\\/]regenerator-runtime/,
            /node_modules[\\/]@?babel/,
        ],
        use: [
            {
                loader: 'cache-loader',
                options: {
                    cacheDirectory: path.resolve(
                        PATHS.folders.cache,
                        config.name,
                        `babel-loader`
                    ),
                },
            },
            {
                loader: 'babel-loader',
                options: babelConfig,
            },
        ],
    }
);

/*
 * Client optimizations
 */
// Always create a runtime entry point
config.optimization.runtimeChunk = { name: 'runtime' };

if (MODE.production) {
    const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

    // Remove unecessary node faking
    config.node = {
        setImmediate: false,
        process: 'mock',
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty',
    };

    config.optimization.minimizer = [
        new UglifyJsPlugin({
            uglifyOptions: {
                ecma: 5,
                ie8: false,
                beautify: true,
                mangle: true,
                compress: true,
                comments: false,
                // exclude: /\/(t4|hbs)./
            },
            parallel: true,
            sourceMap: true,
        }),
    ];

    // Split chunks optimally
    // Might need to be tweaked based on project needs

    config.optimization.concatenateModules = true;
    config.optimization.mergeDuplicateChunks = true;

    config.optimization.splitChunks = {
        chunks: 'all',
        automaticNameDelimiter: '+',
        minSize: 15000,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        cacheGroups: {
            vendors: false,
            default: {
                minChunks: 2,
                priority: 0,
                reuseExistingChunk: true,
            },
            routing: {
                name: 'routing',
                test: /[\\/]node_modules[\\/](svelte|history)/,
                chunks: 'all',
                minChunks: 3,
                priority: -20,
            },
            commons: {
                name: 'shared',
                chunks: 'all',
                minChunks: 2,
                reuseExistingChunk: true,
            },
        },
    };
}

/**
 * Adds Hot Module Replacement to entry points when necessary
 * @link https://webpack.js.org/concepts/hot-module-replacement/
 */
function addHMR(entry) {
    // Never add HMR to production code
    if (MODE.production && !MODE.localProduction) {
        return entry;
    }

    // Make sure we're dealing with an array
    if (!Array.isArray(entry)) {
        entry = [entry];
    }
    entry.unshift(
        `webpack-hot-middleware/client?name=${config.name}&reload=false`
    );

    return entry;
}

module.exports = config;
