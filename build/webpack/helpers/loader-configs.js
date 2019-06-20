const CWD = process.cwd();
const PATHS = require(`${CWD}/config/paths.config.js`);
const MODE = require(`${CWD}/build/helpers/mode.js`);
const path = require('path');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const sveltePreprocess = require('svelte-preprocess');

const cacheIdentifier = require(`${CWD}/build/helpers/cache-identifier.js`);
const sassOpts = require(`${CWD}/build/helpers/sass-config.js`);
const postCssOpts = require(`${CWD}/config/postcss.config.js`);

const isDev = !MODE.production;

const BABEL_COMMON = {
    // Extend initial babel config
    extends: require.resolve(`${CWD}/config/babel.config.js`),
    // We use cache-loader for this
    cacheDirectory: false,
};

module.exports.svelteLoader = function(target) {
    const isSSR = target !== 'web';
    // eslint-disable-next-line complexity
    function svelteLoader(target) {
        const isSSR = target !== 'web';

        // https://svelte.dev/docs#svelte_compile
        return {
            loader: 'svelte-loader',
            options: {
                accessors: true,
                css: !isSSR,
                format: 'esm',
                generate: isSSR ? 'ssr' : 'dom',
                hydratable: true,
                legacy: !isDev && !isSSR,
                preserveWhitespace: isDev,
                preserveComments: isDev,

                // loader-specific options
                hotReload: false, //isDev,
                emitCss: !isDev && !isSSR,
                externalDependencies: PATHS.style.entry.array,
                preprocess: sveltePreprocess({
                    transformers: {
                        scss: sassOpts,
                        postcss: isDev && postCssOpts,
                    },
                }),
            },
        };
    }

    const babelLoader = (target) => {
        return {
            loader: 'babel-loader',
            options: {
                ...BABEL_COMMON,
                envName: target,
            },
        };
    };

    const cacheLoader = {
        loader: 'cache-loader',
        options: {
            cacheDirectory: path.resolve(
                PATHS.folders.cache,
                target,
                `svelte-loader`
            ),
            cacheIdentifier: cacheIdentifier(),
        },
    };

    return {
        test: /\.(svelte)(\?.*)?$/,
        exclude: [
            /node_modules[\\/]core-js/,
            /node_modules[\\/]regenerator-runtime/,
            /node_modules[\\/]@?babel/,
        ],
        oneOf: [
            // Forced SSR loading using ?ssr
            {
                resourceQuery: /\?ssr/,
                use: [svelteLoader('node')],
            },
            {
                use: [
                    // Cache svelte-babel transforms during development
                    isDev && cacheLoader,
                    !isSSR && babelLoader(target),
                    svelteLoader(target),
                ].filter(Boolean),
            },
        ],
    };
};

module.exports.babelLoader = (target = 'web') => {
    return {
        test: /\.(mjs|js|jsx)(\?.*)?$/,
        enforce: 'post',
        exclude: [
            /\.css$/,
            /node_modules[\\/]core-js/,
            /node_modules[\\/]regenerator-runtime/,
            /node_modules[\\/]@?babel/,
        ],
        oneOf: [
            // Load with ./something?eval with val-loader
            // Avoid caching
            {
                resourceQuery: /\?e?val/,
                loader: 'val-loader',
            },
            // Use cache-loader to speed up babel recompilations
            isDev && {
                loader: 'cache-loader',
                options: {
                    cacheDirectory: path.resolve(
                        PATHS.folders.cache,
                        target,
                        `babel-loader`
                    ),
                    cacheIdentifier: cacheIdentifier(),
                },
            },
            {
                loader: 'babel-loader',
                options: {
                    ...BABEL_COMMON,
                    envName: target,
                },
            },
        ].filter(Boolean),
    };
};

// Base CSS Loaders
// Order of operations (loaders work from bottom to top):
// 1. Process with postcss
// 2. Convert to string with css-loader
// 3a. Web targets: add the style string to the dom.
// 3c. Non-web targets: extract (remove it from JS file) the string
// 4. Save the string to a file.
module.exports.styleLoader = (target) => {
    const isSSR = target !== 'web';
    const cssLoader = {
        loader: 'css-loader',
        options: {
            modules: false,
            url: true,
            import: true,
            //localIdentName: '[name]_[local]_[hash:base64:5]',
        },
    };
    const postcssLoader = {
        loader: 'postcss-loader',
        options: postCssOpts,
    };
    const sassLoader = { loader: 'sass-loader', options: sassOpts };
    const extractLoader = {
        loader: ExtractCssChunks.loader,
        options: {
            hmr: !!isDev && !isSSR,
            reloadAll: !!isDev,
        },
    };

    return [extractLoader, cssLoader, postcssLoader, sassLoader];
};
