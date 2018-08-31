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

function processSass(input) {
    const content = input.content;
    const attributes = input.attributes;
    const filename = input.filename;

    if (
        attributes.type !== 'text/scss' &&
        attributes.type !== 'text/sass' &&
        attributes.lang !== 'scss' &&
        attributes.lang !== 'sass'
    ) {
        return;
    }
    try {
        sassConfig.data = content;
        sassConfig.outFile = filename;
        sassConfig.includePaths = [path.dirname(filename)];
        const result = sass.renderSync(sassConfig);

        return {
            code: result.css.toString('utf-8'),
            map: result.map,
        };
    } catch (e) {
        console.error(filename + '\n', new Error(e));
        return;
    }
}
