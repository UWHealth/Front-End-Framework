const CWD = process.cwd();
const PATHS = require(`${CWD}/config/paths.config.js`);
const MODE = require(`${CWD}/build/helpers/mode.js`);
const cacheIdentifier = require(`${CWD}/build/helpers/cache-identifier.js`);
const sassOpts = require(`${CWD}/build/helpers/sass-config.js`);
const postCssOpts = require(`${CWD}/config/postcss.config.js`);

const MiniCssExtractPlugin = require('extract-css-chunks-webpack-plugin');
const path = require('path');
const sveltePreprocess = require('svelte-preprocess');

const isDev = !MODE.production;

const babelOpts = {
    // Extend initial babel config
    extends: require.resolve(`${CWD}/config/babel.config.js`),
    // We use cache-loader for this
    cacheDirectory: false,
};

module.exports.svelte = function(target) {
    const isSSR = target !== 'web';

    function svelteOpts(isSSR) {
        const defaultSvelteConfig = {
            hydratable: true,
            store: true,
            preserveComments: isDev,
            skipIntroByDefault: true,
            nestedTransitions: true,
            externalDependencies: [PATHS.style.entry.config],
            preprocess: sveltePreprocess({
                transformers: {
                    scss: sassOpts,
                    postcss: isDev && postCssOpts,
                },
            }),
        };

        return Object.assign(
            {},
            {
                emitCss: !isSSR && !isDev,
                format: isSSR ? 'cjs' : 'es',
                hotReload: isDev,
                generate: isSSR ? 'ssr' : 'dom',
                legacy: false,
            },
            defaultSvelteConfig
        );
    }

    return {
        test: /\.(html|svelte)(\?.*)?$/,
        exclude: [
            /node_modules[\\/]core-js/,
            /node_modules[\\/]regenerator-runtime/,
            /node_modules[\\/]@?babel/,
        ],
        oneOf: [
            // SSR loading in a non-ssr environment
            {
                resourceQuery: /\?ssr/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            ...babelOpts,
                            envName: 'node',
                        },
                    },
                    {
                        loader: 'svelte-loader',
                        options: svelteOpts(true),
                    },
                ],
            },
            {
                use: [
                    isDev && {
                        loader: 'cache-loader',
                        options: {
                            cacheDirectory: path.resolve(
                                PATHS.folders.cache,
                                target,
                                `svelte-loader`
                            ),
                            cacheIdentifier: cacheIdentifier(),
                        },
                    },
                    {
                        loader: 'babel-loader',
                        options: {
                            ...babelOpts,
                            envName: target,
                        },
                    },
                    {
                        loader: 'svelte-loader',
                        options: svelteOpts(isSSR),
                    },
                ].filter(Boolean),
            },
        ],
    };
};

module.exports.babel = (target = 'web') => {
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
                    ...babelOpts,
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
module.exports.style = (target) => {
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
        loader: MiniCssExtractPlugin.loader,
        options: {
            hmr: isDev,
            reloadAll: isDev,
        },
    };

    return isSSR
        ? [cssLoader, postcssLoader, sassLoader]
        : [
              //!isDev &&
              //'file-loader',
              //isDev ? 'style-loader' :
              extractLoader,
              cssLoader,
              postcssLoader,
              sassLoader,
          ].filter(Boolean);
};
