/**
 * @fileoverview - Webpack configuration.
 */

// Webpack & Plugins
const webpack = require('webpack');
const ClosureCompilerPlugin = require('webpack-closure-compiler');
const ShakePlugin = require('webpack-common-shake').Plugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const path = require('path');

const PATHS = require('./bin/paths.config.js');
const MODE  = require('./bin/helpers/mode.js');
const STATS = require('./bin/webpack.stats.config.js');

const pkg          = require('./package.json');
const BROWSERS     = pkg.browserslist;


const config = {
    context: path.resolve(__dirname),
    entry: {
        main: PATHS.js.entry.main,
        plugins: PATHS.js.entry.plugins
    },
    devtool: 'cheap-source-map',
    output: {
        path: PATHS.js.dest,
        publicPath: path.relative(PATHS.root.dist, PATHS.js.dest),

        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js',

        libraryTarget: 'umd',
        library: 'fef',
    },
    stats: STATS,
    plugins: []
};

config.module = {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules)/,
            use: [{
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    auxiliaryCommentBefore: "Babel",
                    presets: [
                        ["env", {
                            "browsers": BROWSERS,
                            "loose": true,
                            "modules": false
                        }]
                    ],
                    plugins: [
                        ["syntax-dynamic-import"],
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
            test: /\.(handlebars|hbs|svg)$/,
            include: PATHS.root.src,
            use: [{
                loader: 'handlebars-loader',
                query: {
                    runtime: 'handlebars/runtime',
                    helperDirs: [],
                    partialsDirs: [
                        PATHS.hbs.root
                    ],
                    precompileOptions: {
                        preventIndent: true
                    }
                }
            }]
        }
    ]
};

if (MODE.production) {
    config.devtool = "none";

    config.plugins.push(
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
                // exclude: /\/(t4|hbs)./ // Exclude handlebars and t4 files
            }
        }),

        new ShakePlugin()
    );
}

module.exports = config;
