/**
 * @fileoverview - Webpack configuration.
 * Written in CommonJS (require/module).
 */

// Webpack Plugins
const webpack = require('webpack');
const ClosureCompilerPlugin = require('webpack-closure-compiler');
const ShakePlugin = require('webpack-common-shake').Plugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const PATHS    = require('./bin/paths.config.js');
const MODE     = require('./bin/tools/mode.js');
const STATS    = require('./bin/webpack/stats.webpack.config.js');
const BROWSERS = require('./package.json').browserslist;


const config = {
    context: __dirname,
    entry: {
        main: PATHS.js.entry.main,
        plugins: PATHS.js.entry.plugins
    },
    target: "web",
    devtool: 'cheap-source-map',
    output: {
        path: PATHS.js.dest,
        publicPath: '/public/js/',

        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js',

        libraryTarget: 'umd',
        library: 'uwhealth',
    },
    resolve: {
        symlinks: false,
        modules: ['node_modules']
    },
    stats: STATS(),
    module: {},
    plugins: [],
    watchOptions: {
        ignored: /node_modules/
    }
};

/*
 * Loaders
 * 1. Babel
 * 2. Handlebars
 */
config.module.rules = [
    {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: [{
            loader: 'babel-loader',
            options: {
                cacheDirectory: true,
                auxiliaryCommentBefore: "Babel»",
                presets: [
                    ["env", {
                        "browsers": BROWSERS,
                        "loose": true,
                        "modules": false
                    }]
                ],
                plugins: [
                    ["syntax-dynamic-import"],
                    ["transform-imports"],
                    ["transform-runtime", {
                        "helpers": true,
                        "polyfill": true,
                        "regenerator": false,
                        "loose": true,
                        "modules": false
                    }]
                ]
            }
        }]
    },

    {
        test: /\.(hbs|hbs\.svg)$/,
        include: PATHS.root.src,
        use: [{
            loader: 'handlebars-loader',
            query: {
                runtime: 'handlebars/runtime',
                helperDirs: [],
                partialsDirs: [
                    PATHS.hbs.folders.root
                ],
                precompileOptions: {
                    preventIndent: true
                }
            }
        }]
    }
];

if (MODE.development) {
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        // Make output easier to read
        new webpack.NamedModulesPlugin(),

        // Improve re-compilation speeds by caching the manifest
        new webpack.optimize.CommonsChunkPlugin({
            name: "manifest",
            minChunks: Infinity,
            async: true
        }),

        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development',
            DEBUG: false
        })
    );
}

if (MODE.production) {
    config.devtool = "none";

    config.plugins.push(
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'production',
            DEBUG: false
        }),

        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),

        new ShakePlugin(),

        new ClosureCompilerPlugin({
            compiler: {
                language_in: 'ECMASCRIPT6',
                language_out: 'ECMASCRIPT5',
                compilation_level: 'SIMPLE',
                dependency_mode: 'LOOSE',
                rewrite_polyfills: false
            },
            concurrency: 3
        }),

        new UglifyJsPlugin({
            uglifyOptions: {
                ie8: false,
                beautify: false,
                mangle: true,
                compress: true,
                comments: false,
                // exclude: /\/(t4|hbs)./
            }
        })
    );
}

module.exports = config;
