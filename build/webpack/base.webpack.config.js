/**
 * @fileoverview - Base webpack configuration, used for template generation and JS bundling.
 * Includes some configuration for development and production.
 * Most configuration lives in build/webpack/
 *
 */

const path     = require('path');
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
        modules: [
            path.resolve(cwd, 'node_modules'),
            'node_modules'
        ],
        mainFields: ["svelte", "module", "main"],
        alias: {
            // Allow for local imports without relative paths
            '@': PATHS.folders.src,
        }
    },
    watchOptions: {
        ignored: /(node_modules|dist)/
    },
    output: {},
    plugins: [],
    module: {},
    optimization: {
        nodeEnv: 'development',
        splitChunks: {
            chunks: "async"
        }
    }
};

module.exports.manifestSeed = {seed: {name: 'Webpack Manifest'}};

/*
 * Loaders
 * 1. Babel
 * 2. Handlebars
 */
config.module.rules = [

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
    config.optimization.nodeEvn = 'production';
}

module.exports = config;
