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

const seed = Object.create(null);
const manifestPath = path.resolve(PATHS.folders.dist, 'manifest.json')
    .replace('C:', '')
    .replace(/\\/g, '/')

const sanitizePaths = function(entry, original, manifest, asset) {
    // Filter out source maps
    if ( entry.key.toLowerCase().endsWith('.map') ) {
        return false;
    }

    // De-duplicate weird repeating names (button-button-demo-html.js)
    const newKey = entry.key.replace(/(.*)?([a-z]*)(-)\1+(?:-?)(.*)/gi, 'components/$1.js')

    return {
        key: newKey,
        value: entry.value
    }
};

module.exports.manifestConfig = function(publicPath, customize) {

    return {
        assets: seed,
        output: manifestPath,
        entryPoints: true,
        publicPath: publicPath,
        writeToDisk: true,
        customize: customize ? sanitizePaths : null
    }
};

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

module.exports.config = config;
