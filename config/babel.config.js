/**
 * @fileoverview - Configures babel based on the passed in target ("web", "node", "t4").
 *               - If adding to this file, be sure consider which target your change applies to.
 *               - Babel/env should take care of most polyfilling,
 *               - but anything targeting t4 needs to be considered carefully (and tested).
 **/

const CWD = process.cwd();
const MODE = require(`${CWD}/build/helpers/mode`);
const getTargets = require('./helpers/string-to-babel-target.js');

/* eslint complexity: "off" */
module.exports = function(target) {
    const config = {
        cacheDirectory: true,
        configFile: false,
        babelrc: false,
        ignore: [/@?babel/g, /core-js/g],
        sourceType: 'unambiguous',
        auxiliaryCommentBefore: 'Babel»',
        presets: [
            [
                '@babel/env',
                {
                    targets: getTargets(target),
                    loose: true,
                    modules: false,
                    useBuiltIns: 'usage',
                    ignoreBrowserslistConfig: true,
                    // debug: target === 't4',
                    debug: false,
                },
            ],
        ],
        plugins: [
            [
                '@babel/transform-runtime',
                {
                    helpers: true,
                    corejs: false,
                    loose: true,
                    useESModules: Boolean(MODE.production),
                },
            ],
        ],
    };

    if (target === 'web') {
        config.plugins.push(
            ['@babel/transform-arrow-functions'],
            ['@babel/plugin-syntax-dynamic-import'],
            ['transform-object-assign'],
            ['@babel/transform-template-literals']
        );
    } else if (target === 't4') {
        config.plugins.push(
            // ['@babel/plugin-syntax-dynamic-import'],
            ['dynamic-import-node'],
            ['@babel/transform-arrow-functions'],
            ['transform-es3-property-literals'],
            ['transform-es3-member-expression-literals']
        );
    } else if (target === 'node') {
        config.plugins.push(['dynamic-import-node']);
    }

    return config;
};
