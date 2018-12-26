/**
 * @fileoverview - Configures babel based on the passed in target ("web", "node", "t4").
 *               - If adding to this file, be sure consider which target your change applies to.
 *               - Babel/preset-env should take care of most polyfilling,
 *               - but anything targeting t4 needs to be considered carefully (and tested).
 **/

const CWD = process.cwd();
const MODE = require(`${CWD}/build/helpers/mode`);
const getTargets = require('./helpers/string-to-babel-target.js');

const baseConfig = {
    ignore: [/@?babel/g, /core-js/g],
    sourceType: 'unambiguous',
    auxiliaryCommentBefore: 'Babel»',
    // We use cache-loader for this
    cacheDirectory: false,
    // This is our config and babelrc file
    configFile: false,
    babelrc: false,
};

/* eslint complexity: "off" */
module.exports = function(target) {
    const config = {
        presets: [
            [
                require('@babel/preset-env'),
                {
                    targets: getTargets(target),
                    ignoreBrowserslistConfig: true,
                    loose: true,
                    modules: false,
                    useBuiltIns: 'usage',
                    debug: false,
                },
            ],
        ],
        plugins: [
            [
                require('@babel/plugin-transform-runtime'),
                {
                    helpers: true,
                    corejs: false,
                    loose: true,
                    useESModules: !!MODE.production,
                },
            ],
        ],
    };

    if (target === 'web') {
        config.plugins.push([require('@babel/plugin-syntax-dynamic-import')]);
    } else if (target === 'node') {
        config.plugins.push([require('babel-plugin-dynamic-import-node')]);
    } else if (target === 't4') {
        config.plugins.push(
            [require('@babel/plugin-transform-arrow-functions')],
            [require('babel-plugin-dynamic-import-node')],
            [require('babel-plugin-transform-es3-property-literals')],
            [require('babel-plugin-transform-es3-member-expression-literals')]
        );
    }

    return Object.assign(config, baseConfig);
};
