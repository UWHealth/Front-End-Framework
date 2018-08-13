/**
 * @fileoverview - Configures babel based on the passed in target ("web", "node", "t4").
 *               - If adding to this file, be sure consider which target your change applies to.
 *               - Babel/env should take care of most polyfilling,
 *               - but anything targeting t4 needs to be considered carefully (and tested).
 **/

const CWD = process.cwd();
const MODE = require(`${CWD}/build/helpers/mode`);

/* eslint complexity: "off" */
module.exports = function(target) {
    const config = {
        cacheDirectory: true,
        auxiliaryCommentBefore: 'Babel»',
        presets: [
            [
                '@babel/env',
                {
                    targets: getTargets(target),
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
                    helpers: false,
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
    } else if (target === 'node') {
        config.plugins.push(['dynamic-import-node']);
    }
    return config;
};

/**
 * Takes a target and converts it to a babel-preset-env-compatible object.
 * @param  {String} target - Accepts "web", "t4", or "node".
 * @return {Object}        - Babel-compatible targets object.
 */
function getTargets(target) {
    const BROWSERS = require(`${CWD}/package.json`).browserslist;

    switch (target) {
        case 'node':
            return { node: 'current' };

        case 't4':
            return { browsers: ['ff 2'] }; // ECMA/JS version 1.7 (Rhino-like)

        case 'web':
            return { browsers: BROWSERS };

        default:
            return { browsers: BROWSERS };
    }
}
