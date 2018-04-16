/**
 * @fileoverview - Webpack configuration.
 * Written in CommonJS (require/module).
 */

const webpack   = require('webpack');
const cloneDeep = require('lodash.clonedeep');

const cwd    = process.cwd();

const PATHS = require(`${cwd}/config/paths.config.js`);
const STATS = require('./helpers/webpack-stats.js')();
const MODE  = require('../tools/mode.js');
const baseConfig = require(`./base.webpack.config.js`);

const config = cloneDeep(baseConfig);

config.stats = STATS;
config.target = "web";

config.name = "Javascript";

config.recordsPath = cwd + '/dist/public/js/js-records.json';

config.entry = {
    main: PATHS.js.entry.main,
    plugins: PATHS.js.entry.plugins
};

const ManifestPlugin = require('webpack-manifest-plugin');

config.plugins.push(new ManifestPlugin({seed: {name: 'My Manifest'}}));

config.output = {
    path: PATHS.js.dest,
    publicPath: '/public/js/',
    pathinfo: MODE.production ? false : true,

    filename: '[name].bundle.js',
    chunkFilename: MODE.production ? '[name].[chunkhash:3].js' : '[name].js',

    libraryTarget: 'umd',
    library: 'uwhealth',
};

// config.optimization.runtimeChunk = "single"

config.optimization.concatenateModules = MODE.production;

config.optimization.portableRecords = true;

config.resolve.mainFields.unshift("browser");

config.optimization.splitChunks = {
    chunks: "async",
    automaticNameDelimiter: ".",
    cacheGroups: {
        svelteShared: {
            test: /svelte[\\/](shared|store)/,
            priority: 1,
            minChunks: 1,
            filename: "svelteShared.js",
            chunks: "async"
        },
    }
};

config.module.rules.push(
    {
        test: /\.(html|sv\.html|svelte)$/,
        use: [
            {
                loader: 'svelte-loader',
                options: {
                    generate: 'dom',
                    hydratable: true,
                    dev: !MODE.production,
                    store: true,
                    shared: true
                }
            }
        ]
    }
);

if (MODE.production) {
    const ClosureCompilerPlugin = require('webpack-closure-compiler');
    // const ClosurePlugin = require('closure-webpack-plugin');
    const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

    config.node = false;

    config.optimization = {
        splitChunks: {
            chunks: "async"
        },
        runtimeChunk: {
            name: "main",
        },
        mergeDuplicateChunks: true,
        portableRecords: true,
        minimizer: [

            new ClosureCompilerPlugin({
                compiler: {
                    language_in: 'ECMASCRIPT_2017',
                    language_out: 'ECMASCRIPT5_STRICT',
                    compilation_level: 'SIMPLE',
                    dependency_mode: 'LOOSE',
                    rewrite_polyfills: true,
                    create_source_map: true,
                },
                concurrency: 3
            }),

            new UglifyJsPlugin({
                uglifyOptions: {
                    ecma: 5,
                    ie8: false,
                    beautify: false,
                    mangle: true,
                    compress: true,
                    comments: false,
                    // exclude: /\/(t4|hbs)./
                },
                parallel: true,
                sourceMap: true
            })
        ]
    };

    config.plugins.push(

        // Keep module.id stable when vendor modules do not change
        new webpack.HashedModuleIdsPlugin(),

        // Remove module.hot code from modules
        // new webpack.NoHotModuleReplacementPlugin(),
    );
}

module.exports = config;
