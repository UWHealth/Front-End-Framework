/**
 * @fileoverview - Base webpack configuration, used for template generation and JS bundling.
 * Includes some configuration for development and production.
 * Most configuration lives in build/webpack/
 *
 */

const path = require('path');
const CWD = process.cwd();

const PATHS = require(`${CWD}/config/paths.config.js`);
const MODE = require(`${CWD}/build/helpers/mode.js`);
const TimeFixPlugin = require('time-fix-plugin');

const config = {
    context: __dirname,
    mode: process.env.NODE_ENV,
    devtool: MODE.production ? 'source-map' : 'cheap-source-map',
    resolve: {
        symlinks: false,
        modules: [
            path.resolve(PATHS.folders.root, 'node_modules'),
            'node_modules',
        ],
        mainFields: ['svelte', 'module', 'main'],
        alias: PATHS.aliases,
        extensions: ['.js', '.jsx', '.json', '.html', '.hbs', '.handlebars'],
    },
    watchOptions: {
        ignored: /(node_modules|dist)/,
    },
    entry: {},
    output: {},
    plugins: [
        new TimeFixPlugin()
    ],
    module: {},
    optimization: {
        nodeEnv: process.env.NODE_ENV,
        splitChunks: {
            chunks: 'async',
        },
    },
};

/*
 * Base Loaders
 */
config.module.rules = [
    {
        test: /\.(hbs|handlebars|hbs\.svg)$/,
        include: PATHS.folders.src,
        use: [
            {
                loader: 'handlebars-loader',
                query: {
                    runtime: 'handlebars/runtime',
                    helperDirs: [],
                    partialsDirs: [PATHS.hbs.folders.root],
                    precompileOptions: {
                        preventIndent: true,
                    },
                },
            },
        ],
    },
];

module.exports.config = config;
