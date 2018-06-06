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
const babelConfig = require(`./babel.webpack.config.js`);

const config = cloneDeep(baseConfig.config);

config.stats = STATS;
config.target = 'web';

config.name = 'Client';

config.recordsPath = `${PATHS.folders.pub}/js-records.json`;

const components = glob.sync(PATHS.js.entry.components);

config.entry = {
    main: PATHS.js.entry.main,
};

components.forEach((component) => {
    // config.entry[path.basename(component, '.html')] = component
    config.plugins.push(new webpack.PrefetchPlugin(component));
});

config.output = {
    path: PATHS.js.dest,
    publicPath: '/public/js/',
    pathinfo: !MODE.production,

    filename: '[name].bundle.js',
    chunkFilename: MODE.production ? '[name].[chunkhash:3].js' : '[name].js',

    libraryTarget: 'umd',
    library: 'uwhealth',
};

config.resolve.mainFields.unshift('svelte', 'browser');

// Using Vue's manifest plugin for its formatting
const VueManifestPlugin = require('./helpers/vue-ssr-client-plugin.js');
const manifestName = path.basename(PATHS.demos.entry.manifest);

config.plugins.push(
    new VueManifestPlugin({
        filename: `../${manifestName}`,
    })
);

config.optimization.concatenateModules = MODE.production;
config.optimization.mergeDuplicateChunks = MODE.production;

config.optimization.portableRecords = true;

config.optimization.runtimeChunk = { name: 'runtime' };

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

config.module.rules.push(
    {
        test: /\.(html|svelte|js|jsx)$/,
        enforce: 'post',
        exclude: [
            /node_modules\/babel-/m,
            /node_modules\/core-js\//m,
            /node_modules\/regenerator-runtime\//m,
            /node_modules\/@babel/,
        ],
        use: {
            loader: 'babel-loader',
            options: babelConfig('web'),
        },
    },

    {
        test: /\.(html|sv\.html|svelte)$/,
        use: [
            {
                loader: 'babel-loader',
                options: babelConfig('web'),
            },
            {
                loader: 'svelte-loader',
                options: {
                    generate: 'dom',
                    hydratable: true,
                    dev: !MODE.production,
                    store: true,
                    shared: true,
                },
            },
        ],
    }
);

if (MODE.production) {
    // const ClosureCompilerPlugin = require('webpack-closure-compiler');
    const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

    config.node = false;

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
