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

//const webpack = require('webpack');
const TimeFixPlugin = require('time-fix-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Set the threshold for base64/inlined file size
const inlineFileSizeLimit = 4096;

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
    plugins: [],
    module: {},
    optimization: {
        nodeEnv: process.env.NODE_ENV,
        splitChunks: {
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

if (MODE.production) {
    config.plugins.push(
        new MiniCssExtractPlugin({
            filename: 'public/css/[name].[contenthash:8].css',
            chunkFilename: 'public/css/[name].[contenthash:8].css',
        })
    );
}

/*
 * Base Loaders
 */

const cssLoading = [
    process.env.NODE_ENV !== 'production'
        ? 'style-loader'
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
            plugins: [require('autoprefixer')({ grid:true })],
        },
    },
];

config.module.rules = [
    /* handlebars */
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

    {
        test: /\.css(\?.*)?$/,
        use: cssLoading,
    },

    /* Sass */
    {
        test: /\.s[ca]ss(\?.*)?$/,
        use: cssLoading.concat([
            {
                loader: 'sass-loader',
                options: require(PATHS.folders.build +
                    `/helpers/sass-config.js`),
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
                            name: 'public/static/img/[name].[hash:8].[ext]',
                        },
                    },
                },
            },
        ],
    },

    /* svg */
    {
        test: /\.(svg)(\?.*)?$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: 'public/static/img/[name].[hash:8].[ext]',
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
                            name: 'public/static/media/[name].[hash:8].[ext]',
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
                            name: 'public/static/fonts/[name].[hash:8].[ext]',
                        },
                    },
                },
            },
        ],
    },
];

module.exports.config = config;
