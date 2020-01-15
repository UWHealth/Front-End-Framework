/**
 * @fileoverview - Base webpack configuration, used for template generation and JS bundling.
 * Includes some configuration for development and production.
 * Most configuration lives in build/webpack/
 *
 */
/* eslint-disable complexity */

const webpack = require('webpack');
const WebpackBar = require('webpackbar'); // Webpack progress bars
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const path = require('path');
const { styleLoader } = require('./helpers/loader-configs.js');
const statOpts = require(`./helpers/stats-config.js`);

const CWD = process.cwd();
const PATHS = require(`${CWD}/config/paths.config.js`);
const MODE = require(`${CWD}/build/helpers/mode.js`);

// Re-usable path constants
const SRC_PATH = PATHS.folders.src;
const DIST_PATH = PATHS.folders.dist;
const CSS_PUB_PATH = path.posix.relative(DIST_PATH, PATHS.style.dest);
const REL_PUB_PATH = path.posix.relative(DIST_PATH, PATHS.folders.pub);
const STATIC_PUB_PATH = path.posix.join(
    REL_PUB_PATH,
    path.posix.relative(SRC_PATH, PATHS.folders.assets)
);

// Re-usable Environment variables
const IS_PROD = !!MODE.production;
const NODE_ENV = process.env.NODE_ENV || 'development';

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
        mode: NODE_ENV,
        stats: statOpts ? statOpts() : {},
        devtool: IS_PROD ? 'source-map' : 'cheap-source-map',
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
            nodeEnv: NODE_ENV,
            removeAvailableModules: IS_PROD,
            removeEmptyChunks: IS_PROD,
            splitChunks: IS_PROD &&
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
                IS_PROD ? '.[contenthash:4]' : ''
            }.bundle.css`,
            chunkFilename: `${CSS_PUB_PATH}/[name]${
                IS_PROD ? '.[contenthash:4]' : ''
            }.chunk.css`,
        }),

        // Show progress bars during compilation
        !MODE.debug &&
            new WebpackBar({
                name: name || target,
                color: target === 'node' ? 'green' : 'magenta',
                reporters: ['fancy', IS_PROD && 'stats'].filter(Boolean),
            }),

        // https://webpack.js.org/plugins/hashed-module-ids-plugin/
        IS_PROD && new webpack.HashedModuleIdsPlugin(),

        // Inject environment variables into files
        new webpack.DefinePlugin({
            'typeof window': target === 'web' ? 'object' : '"undefined"',
            'process.env': {
                PRODUCTION: JSON.stringify(IS_PROD),
                //WEBPACK: JSON.stringify(true),
                NODE_ENV: JSON.stringify(NODE_ENV),
                //DEBUG: JSON.stringify(MODE.debug),
            },
        }),

        !IS_PROD && new webpack.HotModuleReplacementPlugin()
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
            include: SRC_PATH,
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
                                name: `${STATIC_PUB_PATH}/[folder]/[name]${
                                    IS_PROD ? '.[hash:4]' : ''
                                }.[ext]`,
                                esModule: target !== 'node',
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
                        name: `${STATIC_PUB_PATH}/[folder]/[name]${
                            IS_PROD ? '.[hash:4]' : ''
                        }.[ext]`,
                        esModule: target !== 'node',
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
                                name: `${STATIC_PUB_PATH}/[folder]/[name]${
                                    IS_PROD ? '.[hash:4]' : ''
                                }.[ext]`,
                                esModule: target !== 'node',
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
                                name: `${STATIC_PUB_PATH}/[folder]/[name]${
                                    IS_PROD ? '.[hash:4]' : ''
                                }.[ext]`,
                                esModule: target !== 'node',
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
                        esModule: target !== 'node',
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
