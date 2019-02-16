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
const STATS = require(`${CWD}/build/helpers/webpack-stats-config.js`);

const isProd = MODE.production;

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
        devtool: false, //MODE.production ? 'source-map' : 'cheap-source-map',
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
        }),

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        })
    );

    /*
     * Base Loaders
     */

    const sassOpts = require(`${PATHS.folders.build}/helpers/sass-config.js`);

    // Base CSS Loaders
    // Order of operations (loaders work from bottom to top):
    // 1. Process with postcss
    // 2. Convert to string with css-loader
    // 3a. Web targets: add the style string to the dom.
    // 3c. Non-web targets: extract (remove it from JS file) the string
    // 4. Save the string to a file.
    const cssLoaders = (isSSR) => {
        isSSR = isSSR || (target !== 'web' || isProd);
        const cssLoader = {
            loader: 'css-loader',
            options: {
                modules: false,
                url: true,
                import: true,
                localIdentName: '[name]_[local]_[hash:base64:5]',
            },
        };
        const postcssLoader = {
            loader: 'postcss-loader',
            options: {
                plugins: [
                    require('autoprefixer')({ grid: true }),

                    // Minify for production
                    isProd &&
                        require('cssnano')({
                            preset: [
                                'default',
                                {
                                    mergeLonghand: false,
                                    cssDeclarationSorter: false,
                                },
                            ],
                        }),
                ].filter(Boolean),
            },
        };

        return isSSR
            ? [
                  cssLoader,
                  postcssLoader,
                  { loader: 'sass-loader', options: sassOpts },
              ].filter(Boolean)
            : [
                  isProd && 'file-loader',
                  isProd ? MiniCssExtractPlugin.loader : 'style-loader',
                  cssLoader,
                  postcssLoader,
                  { loader: 'sass-loader', options: sassOpts },
              ].filter(Boolean);
    };

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
                    use: cssLoaders,
                },

                // Normal (s)CSS
                {
                    use: cssLoaders(),
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
