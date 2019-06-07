/**
 * @fileoverview - Base webpack configuration, used for template generation and JS bundling.
 * Includes some configuration for development and production.
 * Most configuration lives in build/webpack/
 *
 */
/* eslint-disable complexity */

const path = require('path');

const CWD = process.cwd();
const PATHS = require(`${CWD}/config/paths.config.js`);
const MODE = require(`${CWD}/build/helpers/mode.js`);
const STATS = require(`./helpers/stats-config.js`);
const cssLoaders = require('./helpers/loader-configs.js').style;

const webpack = require('webpack');
const WebpackBar = require('webpackbar'); // Webpack progress bars
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = ({ target, name }) => {
    // Set the threshold for base64/inlined file size
    const inlineFileSizeLimit = 4096;

    /*
     * Base settings
     */

    const config = {
        name,
        target,
        context: __dirname,
        mode: process.env.NODE_ENV || 'development',
        stats: STATS(),
        devtool: MODE.production ? 'source-map' : 'cheap-source-map',
        resolve: {
            symlinks: false,
            modules: [
                path.resolve(PATHS.folders.root, 'node_modules'),
                'node_modules',
            ],
            mainFields: ['svelte', 'module', 'main'],
            alias: PATHS.aliases,
            extensions: [
                '.js',
                '.json',
                '.mjs',
                '.jsx',
                '.html',
                '.svelte',
                '.hbs',
                '.handlebars',
            ],
        },
        entry: {},
        output: {
            hotUpdateChunkFilename: '[id].hot-update.js',
            hotUpdateMainFilename: '[id].hot-update.js',
        },
        plugins: [],
        module: {},
        optimization: {
            nodeEnv: process.env.NODE_ENV,
            removeAvailableModules: MODE.production,
            removeEmptyChunks: MODE.production,
            splitChunks: MODE.production &&
                target === 'web' && {
                    automaticNameDelimiter: '+',
                    chunks: 'all',
                },
        },
    };

    /*
     * Base plugins
     */

    // Re-usable CSS output path
    const cssPath = path.posix.relative(PATHS.folders.dist, PATHS.style.dest);

    // Extract CSS to its own file (depends upon the existence of its loader)
    config.plugins.push(
        new MiniCssExtractPlugin({
            filename: `${cssPath}/[name].[contenthash:8].css`,
            chunkFilename: `${cssPath}/[name].[contenthash:8].css`,
        }),

        new WebpackBar({
            name: name || target,
            color: target === 'node' ? 'green' : 'orange',
            reporters: ['fancy'],
        }),

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        })
    );

    /*
     * Base Loaders
     */

    const relativePubPath = path.posix.relative(
        PATHS.folders.dist,
        PATHS.folders.pub
    );
    const staticAssetPath = path.posix.join(
        relativePubPath,
        path.posix.relative(PATHS.folders.src, PATHS.folders.assets)
    );

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

                {
                    issuer: /server\.js/,
                    use: cssLoaders('node'),
                },

                // Normal (s)CSS
                {
                    use: cssLoaders(target),
                },
            ],
        },

        /* Text files */
        {
            test: /\.txt(\?.*)?$/,
            use: 'raw-loader',
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
                                    ? `${staticAssetPath}/[folder]/[name].[hash:8].[ext]`
                                    : `${staticAssetPath}/[folder]/[name].[ext]`,
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
                        name: `${staticAssetPath}/[folder]/[name].[hash:3].[ext]`,
                    },
                },
            ],
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
                                name: `${staticAssetPath}/[folder]/[name].[hash:3].[ext]`,
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
                                name: `${staticAssetPath}/[folder]/[name].[hash:3].[ext]`,
                            },
                        },
                    },
                },
            ],
        },
    ];

    return config;
};
