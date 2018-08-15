const CWD = process.cwd();
const MODE = require(`${CWD}/build/helpers/mode.js`);
const sassConfig = require(`${CWD}/build/helpers/sass-config`);

const sass = require('node-sass');
const path = require('path');

const cacheConfig = {
    dev: !MODE.production,
    hydratable: true,
    store: true,
    preserveComments: !MODE.production,
    preprocess: {
        style: processSass,
    },
};

module.exports = function(target, babelConfig) {
    const ssr = target !== 'web';

    return {
        test: /\.(html|sv\.html|svelte)$/,
        exclude: [
            'node_modules/babel',
            'node_modules/@babel/',
            path.resolve(CWD, 'node_modules', '@babel'),
            path.resolve(CWD, 'node_modules', 'babel'),
            path.resolve(CWD, 'node_modules', 'core-js'),
        ],
        use: [
            {
                loader: 'babel-loader',
                options: babelConfig,
            },
            {
                loader: 'svelte-loader',
                options: Object.assign(
                    {
                        format: ssr ? 'cjs' : 'es',
                        generate: ssr ? 'ssr' : 'dom',
                        legacy: false,
                    },
                    cacheConfig
                ),
            },
        ],
    };
};

function processSass(value) {
    const content = value.content;
    const attributes = value.attributes;

    if (attributes.type !== 'text/scss' && attributes.type !== 'text/sass') {
        return;
    }
    try {
        sassConfig.data = content;
        const result = sass.renderSync(sassConfig);

        return {
            code: result.css,
            map: result.map,
        };
    } catch (e) {
        return new Error(e);
    }
}
