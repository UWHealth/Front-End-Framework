const CWD = process.cwd();
const MODE = require(`${CWD}/build/helpers/mode.js`);
const PATHS = require(`${CWD}/config/paths.config.js`);
const sassConfig = require(`${CWD}/build/helpers/sass-config.js`);
const babelOpts = require(`${CWD}/config/babel.config.js`);
const cssNanoOpts = require(`${CWD}/build/helpers/cssnano-config.js`);

const sveltePreprocess = require('svelte-preprocess');
const path = require('path');

const defaultSvelteConfig = {
    hydratable: true,
    store: true,
    preserveComments: !MODE.production,
    skipIntroByDefault: true,
    nestedTransitions: true,

    hotReload: true,
    externalDependencies: [PATHS.style.entry.config],
    preprocess: sveltePreprocess({
        transformers: {
            scss: sassConfig,
            postcss: {
                plugins: [
                    require('autoprefixer')({ grid: 'autoplace' }),
                    MODE.production && require('cssnano')(cssNanoOpts),
                ].filter(Boolean),
            },
        },
    }),
};

const svelteConfig = (ssr) =>
    Object.assign(
        {},
        {
            emitCss: MODE.production && !ssr,
            format: ssr ? 'cjs' : 'es',
            generate: ssr ? 'ssr' : 'dom',
            legacy: false,
        },
        defaultSvelteConfig
    );

module.exports = function(target, babelConfig) {
    const ssr = target !== 'web';
    const nodeLoaders = [
        {
            loader: 'babel-loader',
            options: babelOpts('node'),
        },
        {
            loader: 'svelte-loader',
            options: svelteConfig(true),
        },
    ];

    return {
        test: /\.(html|sv\.html|svelte)(\?.*)?$/,
        exclude: [
            /node_modules[\\/]core-js/,
            /node_modules[\\/]regenerator-runtime/,
            /node_modules[\\/]@?babel/,
        ],
        oneOf: [
            {
                resourceQuery: /\?ssr/,
                use: nodeLoaders,
            },
            // {
            //     issuer: /server\.js/,
            //     use: nodeLoaders,
            // },
            {
                use: [
                    !MODE.production && {
                        loader: 'cache-loader',
                        options: {
                            cacheDirectory: path.resolve(
                                PATHS.folders.cache,
                                target,
                                `svelte-loader`
                            ),
                            cacheIdentifier: require(`${CWD}/build/helpers/cache-identifier.js`),
                        },
                    },
                    {
                        loader: 'babel-loader',
                        options: babelConfig,
                    },
                    {
                        loader: 'svelte-loader',
                        options: svelteConfig(ssr),
                    },
                ].filter(Boolean),
            },
        ],
    };
};
