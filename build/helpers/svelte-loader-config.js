const CWD = process.cwd();
const MODE = require(`${CWD}/build/helpers/mode.js`);
const PATHS = require(`${CWD}/config/paths.config.js`);
const sassConfig = require(`${CWD}/build/helpers/sass-config`);

const sass = require('node-sass');
const path = require('path');
const postcss = require('postcss');

const svelteConfig = {
    hydratable: true,
    store: true,
    preserveComments: !MODE.production,
    skipIntroByDefault: true,
    nestedTransitions: true,
    hotReload: true,
    // hotOptions: {
    //     // Refresh state on reload
    //     noPreserveState: true,
    // },
    externalDependencies: [PATHS.style.entry.config],
    preprocess: {
        style: processSass,
    },
};

module.exports = function(target, babelConfig) {
    const ssr = target !== 'web';

    return {
        test: /\.(html|sv\.html|svelte)$/,
        exclude: [
            /node_modules[\\/]core-js/,
            /node_modules[\\/]regenerator-runtime/,
            /node_modules[\\/]@?babel/,
        ],
        use: [
            !MODE.production
                ? {
                      loader: 'cache-loader',
                      options: {
                          cacheDirectory: path.resolve(
                              PATHS.folders.cache,
                              target,
                              `svelte-loader`
                          ),
                          cacheIdentifier: require(`${CWD}/build/helpers/cache-identifier.js`),
                      },
                  }
                : false,
            {
                loader: 'babel-loader',
                options: babelConfig,
            },
            {
                loader: 'svelte-loader',
                options: Object.assign(
                    {
                        emitCss: MODE.production && !ssr,
                        format: ssr ? 'cjs' : 'es',
                        generate: ssr ? 'ssr' : 'dom',
                        legacy: false,
                    },
                    svelteConfig
                ),
            },
        ].filter(Boolean),
    };
};

function processSass(input) {
    const content = input.content;
    const attributes = input.attributes;
    const filename = input.filename;

    // Autoprefixer
    function runPostCss(css) {
        return postcss([require('autoprefixer')({ grid: 'autoplace' })])
            .process(css, { from: filename, to: filename })
            .then((result) => ({
                code: result.css,
                map: result.map,
            }));
    }

    // Assume input is sass,
    // unless something else is specified
    if (
        attributes.type !== 'text/scss' &&
        attributes.type !== 'text/sass' &&
        attributes.lang !== 'scss' &&
        attributes.lang !== 'sass'
    ) {
        return runPostCss(content);
    }
    try {
        sassConfig.data = content;
        sassConfig.outFile = filename;
        sassConfig.includePaths = [path.dirname(filename)];
        const result = sass.renderSync(sassConfig);

        return runPostCss(result.css.toString('utf-8'));
    } catch (e) {
        console.error(filename + '\n', new Error(e));
        return;
    }
}
