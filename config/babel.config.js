const CWD = process.cwd();
const BROWSERS = require(`${CWD}/package.json`).browserslist;
const MODE = require(`${CWD}/build/helpers/mode`);

/* eslint complexity: "off" */
module.exports = function(target) {
    const targets = getTargets(target);

    const config = {
        cacheDirectory: true,
        auxiliaryCommentBefore: 'Babel»',
        presets: [
            [
                '@babel/env',
                {
                    targets: targets,
                    loose: true,
                    modules: false,
                    ignoreBrowserslistConfig: true,
                    debug: false,
                },
            ],
        ],
        plugins: [
            [
                '@babel/transform-runtime',
                {
                    useBuiltIns: target !== 't4' ? 'usage' : false,
                    helpers: false,
                    polyfill: Boolean(target === 't4'),
                    loose: true,
                    modules: target === 'web' ? false : 'umd',
                    include: target === 't4' ? ['es6.set', 'es6.map'] : [],
                    useESModules: Boolean(MODE.production),
                    // exclude: ['es6.typed.array-buffer', 'es6.array.slice'],
                },
            ],
        ],
    };

    if (target === 'web') {
        config.plugins.push(
            ['@babel/transform-arrow-functions'],
            ['syntax-dynamic-import'],
            ['transform-object-assign'],
            [
                '@babel/transform-template-literals',
                {
                    loose: true,
                },
            ]
        );
    } else if (target === 'node') {
        config.plugins.push(['dynamic-import-node']);
    } else if (target === 't4') {
        config.presets = ['@babel/es2015'];
        config.plugins.push(
            ['dynamic-import-node'],
            ['@babel/transform-arrow-functions'],
            ['transform-es3-property-literals'],
            ['transform-es3-member-expression-literals'],
            [
                '@babel/transform-template-literals',
                {
                    loose: true,
                },
            ]
        );
    }
    return config;
};

function getTargets(target) {
    return target === 'node'
        ? { node: 'current' }
        : target === 't4'
            ? { browsers: ['ff 2'] } // ECMA/JS version 1.7
            : { browsers: BROWSERS };
}