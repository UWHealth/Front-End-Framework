/**
 * @fileoverview - Base webpack configuration, used for template generation and JS bundling.
 * Includes some configuration for development and production.
 * Most configuration lives in build/webpack/
 *
 */
/* eslint-disable complexity */

const path = require('path');

const { styleLoader } = require('./helpers/loader-configs.js');

const webpack = require('webpack');
const WebpackBar = require('webpackbar'); // Webpack progress bars
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');

const CWD = process.cwd();
const PATHS = require(`${CWD}/config/paths.config.js`);
const MODE = require(`${CWD}/build/helpers/mode.js`);
const STATS = require(`./helpers/stats-config.js`);

// Re-usable, relative output paths
const CSS_PUB_PATH = path.posix.relative(PATHS.folders.dist, PATHS.style.dest);
const REL_PUB_PATH = path.posix.relative(PATHS.folders.dist, PATHS.folders.pub);
const STATIC_PUB_PATH = path.posix.join(
    REL_PUB_PATH,
    path.posix.relative(PATHS.folders.src, PATHS.folders.assets)
);

const isProd = !!MODE.production;

// Set the threshold for base64/inlined file size
const inlineFileSizeLimit = 4096;

module.exports = ({ target, name }) => {
    /*
     * Base settings
     */
    const config = {
        name,
        target,
        context: process.cwd(),
        mode: process.env.NODE_ENV || 'development',
        stats: STATS(),
        devtool: isProd ? 'source-map' : 'cheap-source-map',
        resolve: {
            symlinks: false,
            modules: [
                path.resolve(PATHS.folders.root, 'node_modules'),
                'node_modules',
            ],
            mainFields: ['svelte', 'module', 'main'],
            alias: PATHS.aliases,
            extensions: [
                '.mjs',
                '.js',
                '.json',
                '.svelte',
                '.jsx',
                '.html',
                '.hbs',
                '.handlebars',
            ],
        },
        output: {
            hotUpdateChunkFilename: '[id].hot-update.js',
            hotUpdateMainFilename: 'main.hot-update.js',
        },
        optimization: {
            nodeEnv: process.env.NODE_ENV,
            removeAvailableModules: isProd,
            removeEmptyChunks: isProd,
            splitChunks: isProd &&
                target === 'web' && {
                    automaticNameDelimiter: '+',
                    chunks: 'all',
                },
        },
        watchOptions: {
            poll: 1000,
        },
        performance: {},
        plugins: [],
        module: {},
        entry: {},
    };

    /*
     * Base plugins
     */

    config.plugins.push(
        // Extract CSS to its own file
        // (depends upon the existence of its cooresponding loader)
        new ExtractCssChunks({
            filename: `${CSS_PUB_PATH}/[name]${
                isProd ? '.[contenthash:4]' : '.bundle'
            }.css`,
            chunkFilename: `${CSS_PUB_PATH}/[name]${
                isProd ? '.[contenthash:4]' : '.chunk'
            }.css`,
        }),

        // Show progress bars during compilation
        !MODE.debug &&
            new WebpackBar({
                name: name || target,
                color: target === 'node' ? 'green' : 'magenta',
                reporters: ['fancy', isProd && 'stats'].filter(Boolean),
            }),

        // https://webpack.js.org/plugins/hashed-module-ids-plugin/
        isProd && new webpack.HashedModuleIdsPlugin(),

        // Inject environment variables into files
        new webpack.DefinePlugin({
            'typeof window': target === 'web' ? 'Object' : '"undefined"',
            'module.hot': JSON.stringify(isProd),
            'process.env': {
                PRODUCTION: JSON.stringify(isProd),
                MODE: JSON.stringify(MODE.mode),
                WEBPACK: JSON.stringify(true),
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                DEBUG: JSON.stringify(MODE.debug),
            },
        })
    );

    config.plugins = config.plugins.filter(Boolean);

    /*
     * Base Loaders
     */
    config.module.rules = [
        /* Plain CSS */
        {
            test: /\.(s?[ca]ss)(\?.*)?$/,
            oneOf: [
                // Inline CSS (use foo.css?inline)
                {
                    resourceQuery: /\?inline/,
                    use: 'raw-loader',
                },

                // Normal (s)CSS
                {
                    use: styleLoader(target),
                },
            ],
        },

        /* handlebars */
        {
            test: /\.(hbs|handlebars|hbs\.svg)(\?.*)?$/,
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

        /* images */
        {
            test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: inlineFileSizeLimit,
                        fallback: {
                            loader: 'file-loader',
                            options: {
                                name: MODE.production
                                    ? `${STATIC_PUB_PATH}/[folder]/[name].[hash:8].[ext]`
                                    : `${STATIC_PUB_PATH}/[folder]/[name].[ext]`,
                            },
                        },
                    },
                },
            ],
        },

        /* svg */
        {
            test: /\.(svg)(\?.*)?$/,
            oneOf: [
                {
                    resourceQuery: /\?inline/,
                    use: 'raw-loader',
                },
                {
                    loader: 'file-loader',
                    options: {
                        name: `${STATIC_PUB_PATH}/[folder]/[name].[hash:3].[ext]`,
                    },
                },
            ],
        },

        /* Text files */
        {
            test: /\.txt(\?.*)?$/,
            use: 'raw-loader',
        },

        /* various media */
        {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: inlineFileSizeLimit,
                        fallback: {
                            loader: 'file-loader',
                            options: {
                                name: `${STATIC_PUB_PATH}/[folder]/[name].[hash:3].[ext]`,
                            },
                        },
                    },
                },
            ],
        },

        /* fonts */
        {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: inlineFileSizeLimit,
                        fallback: {
                            loader: 'file-loader',
                            options: {
                                name: `${STATIC_PUB_PATH}/[folder]/[name].[hash:3].[ext]`,
                            },
                        },
                    },
                },
            ],
        },

        /* App Manifests */
        {
            test: /(manifest\.(webmanifest|json)|browserconfig\.xml)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: `[name].[ext]`,
                    },
                },
                {
                    loader: 'app-manifest-loader',
                },
            ],
        },
    ];

    return config;
};
