/**
 * @fileoverview - Configures babel based on the passed in target ("web", "node", "t4").
 *               - If adding to this file, be sure consider which target your change applies to.
 *               - Babel/env should take care of most polyfilling,
 *               - but anything targeting t4 needs to be considered carefully (and tested).
 **/

const CWD = process.cwd();
const MODE = require(`${CWD}/build/helpers/mode`);
const getTargets = require('./helpers/string-to-babel-target.js');

const baseConfig = {
    cacheDirectory: true,
    configFile: false,
    babelrc: false,
    ignore: [/@?babel/g, /core-js/g],
    sourceType: 'unambiguous',
    auxiliaryCommentBefore: 'Babel»',
};

/* eslint complexity: "off" */
module.exports = function(target) {
    const config = {
        presets: [
            [
                require('@babel/preset-env'),
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
            [require('babel-plugin-preval')],
            [
                require('@babel/plugin-transform-runtime'),
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
        config.plugins.push([require('@babel/plugin-syntax-dynamic-import')]);
    } else if (target === 't4') {
        config.plugins.push(
            [require('@babel/plugin-transform-arrow-functions')],
            [require('babel-plugin-dynamic-import-node')],
            [require('babel-plugin-transform-es3-property-literals')],
            [require('babel-plugin-transform-es3-member-expression-literals')]
        );
    } else if (target === 'node') {
        config.plugins.push([require('babel-plugin-dynamic-import-node')]);
    }

    return Object.assign(config, baseConfig);
};
