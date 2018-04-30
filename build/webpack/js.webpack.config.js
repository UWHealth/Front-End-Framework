/**
 * @fileoverview - Webpack configuration.
 * Written in CommonJS (require/module).
 */

const webpack   = require('webpack');
const cloneDeep = require('lodash.clonedeep');
const glob      = require('fast-glob');

const cwd    = process.cwd();

const PATHS = require(`${cwd}/config/paths.config.js`);
const STATS = require('./helpers/webpack-stats.js')();
const MODE  = require('../tools/mode.js');
const baseConfig = require(`./base.webpack.config.js`);
const babelConfig = require(`./babel.webpack.config.js`);

const config = cloneDeep(baseConfig.config);

config.stats = STATS;
config.target = "web";

config.name = "Javascript";

config.recordsPath = cwd + '/dist/public/js/js-records.json';

config.entry = {
    "main": PATHS.js.entry.main,
    "components": glob.sync(PATHS.js.entry.components),
}

config.output = {
    path: PATHS.js.dest,
    publicPath: '/public/js/',
    pathinfo: MODE.production ? false : true,

    filename: '[name].bundle.js',
    chunkFilename: MODE.production ? '[name].[chunkhash:3].js' : '[name].js',

    libraryTarget: 'umd',
    library: 'uwhealth',
};

const ManifestPlugin = require('webpack-assets-manifest');

config.plugins.push(new ManifestPlugin(
    baseConfig.manifestConfig(config.output.publicPath, true)
));

// config.optimization.runtimeChunk = "single"

config.optimization.concatenateModules = MODE.production;

config.optimization.portableRecords = true;

config.resolve.mainFields.unshift("svelte", "browser");

config.optimization.splitChunks = {
    chunks: "async",
    automaticNameDelimiter: "."
};

config.module.rules.push(
    {
        test: /\.(js|jsx)$/,
        exclude: (mod) => {
            !MODE.production ? /(node_modules)/.test(mod) : false
        },
        use: {
            loader: 'babel-loader',
            options: babelConfig(false),
        }
    },

    {
        test: /\.(html|sv\.html|svelte)$/,
        use: [
            {
                loader: 'babel-loader',
                options: babelConfig(false)
            },
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
