/**
 * @fileoverview - Base webpack configuration, used for template generation and JS bundling.
 * Includes some configuration for development and production.
 * Most configuration lives in bin/webpack/
 *
 */

const webpack = require('webpack');

const PATHS    = require('./bin/paths.config.js');
const MODE     = require('./bin/tools/mode.js');
const BROWSERS = require('./package.json').browserslist;

const config = {
    context: __dirname,
    resolve: {
        symlinks: false,
        modules: ['node_modules'],
        alias: {
            // Allow for local imports without relative paths
            '@': PATHS.root.src
        }
    },
    watchOptions: {
        ignored: /node_modules/
    },
    output: {},
    plugins: [],
    module: {}
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
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),

        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development',
            DEBUG: false
        }),

        // Improve re-compilation speeds by caching the manifest
        new webpack.optimize.CommonsChunkPlugin({
            name: "manifest",
            minChunks: Infinity,
            async: true
        })
    );
}

if (MODE.production) {
    config.devtool = "none";

    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'production',
            DEBUG: false
        })
    );
}

module.exports = config;
