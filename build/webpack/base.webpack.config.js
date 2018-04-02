/**
 * @fileoverview - Base webpack configuration, used for template generation and JS bundling.
 * Includes some configuration for development and production.
 * Most configuration lives in build/webpack/
 *
 */

const cwd      = process.cwd();
const PATHS    = require(cwd + '/config/paths.config.js');
const MODE     = require(cwd + '/build/tools/mode.js');
const BROWSERS = require(cwd + '/package.json').browserslist;


const config = {
    context: __dirname,
    mode: process.env.NODE_ENV,
    devtool: 'cheap-source-map',
    resolve: {
        symlinks: false,
        modules: ['node_modules'],
        alias: {
            // Allow for local imports without relative paths
            '@': PATHS.folders.src
        }
    },
    watchOptions: {
        ignored: /node_modules/
    },
    output: {},
    plugins: [],
    module: {},
    optimization: {
        splitChunks: {
            chunks: "async"
        }
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
                    ["transform-runtime", {
                        "helpers": true,
                        "polyfill": true,
                        "regenerator": false,
                        "loose": true,
                        "modules": false
                    }],
                    // MODE.production ? ["transform-imports"] : null,
                    // MODE.production ? ["syntax-dynamic-import"] : null
                ]
            }
        }]
    },

    {
        test: /\.(hbs|handlebars|hbs\.svg)$/,
        include: PATHS.folders.src,
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

if (MODE.production) {
    config.devtool = "source-map";
}

module.exports = config;
