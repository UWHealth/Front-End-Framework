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

config.name = 'Client';
config.stats = STATS;
config.target = 'web';
config.recordsPath = `${PATHS.folders.pub}/js-records.json`;

config.entry = {
    main: [PATHS.js.entry.main],
};

const jsFolder = path.relative(PATHS.folders.dist, PATHS.js.dest);

config.output = {
    library: 'uwhealth',
    libraryTarget: 'umd',

    publicPath: '/',
    pathinfo: !MODE.production,
    path: PATHS.folders.dist,

    filename: `${jsFolder}/[name].bundle.js`,
    chunkFilename: MODE.production
        ? `${jsFolder}/[name].[chunkhash:3].js`
        : `${jsFolder}/[name].js`,
};

// Add "svelte" key to package resolver
config.resolve.mainFields.unshift('svelte', 'browser');

/* JS Plugins */
config.plugins.push(
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
);

// Using Vue's manifest plugin for its formatting
const manifestName = path.basename(PATHS.demos.entry.manifest);

config.plugins.push(
    new VueManifestPlugin({
        filename: `../${path.relative(
            PATHS.folders.root,
            PATHS.demos.entry.manifest
        )}`,
    })
);

// Add hot-module reloading to all entry points
if (MODE.localProduction || !MODE.production) {
    Object.keys(config.entry).forEach((entry) => {
        config.entry[entry].unshift(
            'webpack-hot-middleware/client?name=Client&reload=false'
        );
    });
}

// Prefetch components
glob.sync(PATHS.js.entry.components).forEach((component) => {
    config.plugins.push(new webpack.PrefetchPlugin(component));
});

config.optimization.concatenateModules = MODE.production;
config.optimization.mergeDuplicateChunks = MODE.production;
config.optimization.runtimeChunk = { name: 'runtime' };

if (MODE.production) {
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

config.module.rules.unshift(
    // Svelte-generation, with babel
    svelteConfig('web', babelConfig),

    // Babelify
    {
        test: /\.(js|jsx)$/,
        enforce: 'post',
        exclude: [
            /node_modules\/babel-/m,
            /node_modules\/core-js\//m,
            /node_modules\/regenerator-runtime\//m,
            /node_modules\/@?babel/,
            /node_modules\/webpack/m,
        ],
        use: [
            {
                loader: 'cache-loader',
                options: {
                    cacheDirectory: path.resolve(
                        `${CWD}/node_modules/.cache/${config.name}/babel-loader`
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

    config.plugins.push(
        // Keep module.id stable when vendor modules do not change
        new webpack.HashedModuleIdsPlugin(),

        // Allow non-production code to be removed
        new webpack.DefinePlugin({
            'typeof window': '"object"',
            'process.env.NODE_ENV': "'production'",
            'module.hot': 'false',
        })
    );

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
}

module.exports = config;
