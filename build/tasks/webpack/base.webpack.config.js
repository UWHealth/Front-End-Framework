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
const STATS = require(`${CWD}/build/helpers/webpack-stats-config.js`);

const TimeFixPlugin = require('time-fix-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Set the threshold for base64/inlined file size
const inlineFileSizeLimit = 4096;

/* eslint-disable complexity */
module.exports = (target) => {
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
                '.jsx',
                '.json',
                '.html',
                '.hbs',
                '.handlebars',
            ],
        },
        entry: {},
        output: {},
        plugins: [],
        module: {},
        optimization: {
            nodeEnv: process.env.NODE_ENV,
            removeAvailableModules: !!MODE.production,
            removeEmptyChunks: !!MODE.production,
            splitChunks: !MODE.production && {
                chunks: 'async',
            },
        },
    };

    /*
     * Base plugins
     */
    if (!MODE.production || MODE.local) {
        config.plugins.push(
            // Ensures only one compilation happens per file change
            new TimeFixPlugin()
        );
    }

    // Re-usable CSS output path
    const cssPath = path.posix.relative(PATHS.folders.dist, PATHS.style.dest);

    if (MODE.production) {
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
    const cssLoaders = [
        /* Output file for SSR */
        !MODE.production &&
            target !== 'web' && {
                loader: 'file-loader',
                options: {
                    name: `${cssPath}/[name].[hash:base64:5].css`,
                },
            },

        !MODE.production
            ? target === 'web'
                ? 'style-loader'
                : 'extract-loader'
            : MiniCssExtractPlugin.loader,

        {
            loader: 'css-loader',
            options: {
                modules: false,
                url: false,
                import: false,
                localIdentName: '[name]_[local]_[hash:base64:5]',
            },
        },

        {
            loader: 'postcss-loader',
            options: {
                plugins: [
                    require('autoprefixer')({ grid: true }),

                    // Minify for production
                    MODE.production
                        ? require('cssnano')({
                              preset: [
                                  'default',
                                  {
                                      mergeLonghand: false,
                                      cssDeclarationSorter: false,
                                  },
                              ],
                          })
                        : false,
                ].filter(Boolean),
            },
        },
    ].filter(Boolean);

    const staticAssetPath = path.posix.relative(
        PATHS.folders.dist,
        PATHS.folders.assets
    );

    config.module.rules = [
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
                                name: `${staticAssetPath}/img/[name].[hash:8].[ext]`,
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
                    use: 'raw-loader'
                },
                {
                    loader: 'file-loader',
                    options: {
                        name: `${staticAssetPath}/img/[name].[hash:8].[ext]`,
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
                                name: `${staticAssetPath}/media/[name].[hash:8].[ext]`,
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
                                name: `${staticAssetPath}/fonts/[name].[hash:8].[ext]`,
                            },
                        },
                    },
                },
            ],
        },
    ];

    return config;
};
