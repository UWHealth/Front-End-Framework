/**
 * @fileoverview - Webpack configuration.
 * Written in CommonJS (require/module).
 */

const webpack = require('webpack');
const cloneDeep = require('lodash.clonedeep');
const glob = require('fast-glob');
const path = require('path');

const CWD = process.cwd();

const PATHS = require(`${CWD}/config/paths.config.js`);
const STATS = require('./helpers/webpack-stats.js')();
const MODE = require('../helpers/mode.js');

const baseConfig = require(`./base.webpack.config.js`);
const babelConfig = require(`${CWD}/config/babel.config.js`)('web');
const svelteConfig = require('./helpers/svelte-config.js')('web', babelConfig);
const TimeFixPlugin = require('time-fix-plugin');

const config = cloneDeep(baseConfig.config);

config.stats = STATS;
config.target = 'web';

config.name = 'Client';

config.recordsPath = `${PATHS.folders.pub}/js-records.json`;

const components = glob.sync(PATHS.js.entry.components);

config.entry = {
    main: [PATHS.js.entry.main],
};

if (MODE.localProduction || !MODE.production) {
    Object.keys(config.entry).forEach((entry) => {
        config.entry[entry].unshift(
            'webpack-hot-middleware/client?name=Client&reload=false'
        );
    });
}

components.forEach((component) => {
    // config.entry[path.basename(component, '.html')] = component
    config.plugins.push(new webpack.PrefetchPlugin(component));
});

config.plugins.push(
    new TimeFixPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
);

config.output = {
    path: PATHS.folders.dist,
    publicPath: '/',
    pathinfo: !MODE.production,

    filename: 'public/js/[name].bundle.js',
    chunkFilename: MODE.production
        ? 'public/js/[name].[chunkhash:3].js'
        : 'public/js/[name].js',

    libraryTarget: 'umd',
    library: 'uwhealth',
};

config.resolve.mainFields.unshift('svelte', 'browser');

// Using Vue's manifest plugin for its formatting
const VueManifestPlugin = require('./helpers/vue-ssr-client-plugin.js');
const manifestName = path.basename(PATHS.demos.entry.manifest);

config.plugins.push(
    new VueManifestPlugin({
        filename: `public/${manifestName}`,
    })
);

config.optimization.portableRecords = true;
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

config.module.rules.push(
    // Svelte-generation, with babel
    svelteConfig,

    // Babelify
    {
        test: /\.(js|jsx)$/,
        enforce: 'post',
        exclude: [
            /node_modules\/babel-/m,
            /node_modules\/core-js\//m,
            /node_modules\/regenerator-runtime\//m,
            /node_modules\/@?babel/,
            /node_modules\/webpack/m
        ],
        use: {
            loader: 'babel-loader',
            options: babelConfig,
        },
    }
);

if (MODE.production) {
    // const ClosureCompilerPlugin = require('webpack-closure-compiler');
    const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

    config.node = false;

    config.plugins.push(
        new webpack.DefinePlugin({
            'typeof window': '"object"',
            'process.env.NODE_ENV': "'production'",
        })
    );

    config.optimization.minimizer = [
        // new ClosureCompilerPlugin({
        //     compiler: {
        //         language_in: 'ECMASCRIPT_2017',
        //         language_out: 'ECMASCRIPT5_STRICT',
        //         compilation_level: 'SIMPLE',
        //         dependency_mode: 'LOOSE',
        //         rewrite_polyfills: true,
        //         create_source_map: true,
        //     },
        //     concurrency: 3
        // }),

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

    config.plugins.push(
        // Keep module.id stable when vendor modules do not change
        new webpack.HashedModuleIdsPlugin()

        // Remove module.hot code from modules
        // new webpack.NoHotModuleReplacementPlugin(),
    );
}

module.exports = config;
