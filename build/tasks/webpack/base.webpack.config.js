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

// const TimeFixPlugin = require('time-fix-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (target) => {
    // Set the threshold for base64/inlined file size
    const inlineFileSizeLimit = 4096;

    /*
     * Base settings
     */

    const config = {
        target: target,
        context: __dirname,
        mode: process.env.NODE_ENV,
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
                '.mjs',
                '.jsx',
                '.json',
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

    // if (MODE.dev || MODE.localProduction) {
    //     config.plugins.push(
    //         // Ensures only one compilation happens per file change
    //         new TimeFixPlugin()
    //     );
    // }

    // Re-usable CSS output path
    const cssPath = path.posix.relative(PATHS.folders.dist, PATHS.style.dest);

    if (MODE.production && target === 'web') {
        // Extract CSS to its own file in --production mode
        config.plugins.push(
            new MiniCssExtractPlugin({
                filename: `${cssPath}/[name].[contenthash:8].css`,
                chunkFilename: `${cssPath}/[name].[contenthash:8].css`,
            })
        );
    }

    /*
     * Base Loaders
     */

    // Base CSS Loaders
    // Order of operations (loaders work from bottom to top):
    // 1. Process with postcss
    // 2. Convert to string with css-loader
    // 3a. Web targets: add the style string to the dom.
    // 3c. Non-web targets: extract (remove it from JS file) the string
    // 4. Save the string to a file.
    const cssLoaders = [
        target !== 'web' && {
            loader: 'file-loader',
            options: {
                name: `${cssPath}/[name].[hash:8].css`,
            },
        },

        MODE.dev || target !== 'web'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,

        {
            loader: 'css-loader',
            options: {
                modules: false,
                url: true,
                import: true,
                localIdentName: '[name]_[local]_[hash:base64:5]',
            },
        },

        {
            loader: 'postcss-loader',
            options: {
                plugins: [
                    require('autoprefixer')({ grid: true }),

                    // Minify for production
                    MODE.production &&
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
        },
    ].filter(Boolean);

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
            test: /\.(css)(\?.*)?$/,
            oneOf: [
                // Inline CSS (use foo.css?inline)
                {
                    resourceQuery: /\?inline/,
                    use: 'raw-loader',
                },

                // Normal CSS
                {
                    use: cssLoaders,
                },
            ],
        },

        /* Sass */
        // Add sass to the beginning of the cssLoaders chain
        {
            test: /\.(s[ca]ss)(\?.*)?$/,
            use: cssLoaders.concat([
                {
                    loader: 'sass-loader',
                    options: require(`${
                        PATHS.folders.build
                    }/helpers/sass-config.js`),
                },
            ]),
        },

        /* Text files */
        {
            test: /\.txt(\?.*)?$/,
            use: 'raw-loader',
        },

        /* App Manifests */
        {
            test: /(manifest\.webmanifest|browserconfig\.xml)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: `${relativePubPath}/[name].[ext]`,
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
                        name: `${staticAssetPath}/[folder]/[name].[hash:8].[ext]`,
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
                                name: `${staticAssetPath}/[folder]/[name].[hash:8].[ext]`,
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
                                name: `${staticAssetPath}/[folder]/[name].[hash:8].[ext]`,
                            },
                        },
                    },
                },
            ],
        },
    ];

    return config;
};
