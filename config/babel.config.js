/**
 * @fileoverview - Configures babel based on the passed in target ("web", "node", "t4").
 *               - If adding to this file, be sure consider which target your change applies to.
 *               - Babel/preset-env should take care of most polyfilling,
 *               - but anything targeting t4 needs to be considered carefully (and tested).
 **/

const CWD = process.cwd();
const MODE = require(`${CWD}/build/helpers/mode`);

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
    const webOrNodeEnv = [
        require('@babel/preset-env'),
        {
            targets: target === 'node' ? { node: true } : {},
            ignoreBrowserslistConfig: target !== 'web',
            loose: true,
            modules: false,
            useBuiltIns: 'usage',
            debug: false,
        },
    ];

    const config = {
        presets: [
            target === 't4'
                ? [require('@uwhealth/babel-preset-t4')]
                : webOrNodeEnv,
        ],
    };

    if (target === 'web') {
        config.plugins = [
            [require('@babel/plugin-syntax-dynamic-import')],
            [
                require('@babel/plugin-transform-runtime'),
                {
                    helpers: true,
                    corejs: false,
                    loose: true,
                    useESModules: !!MODE.production,
                },
            ],
        ];
    }
    if (target === 'node') {
        config.plugins = [require('babel-plugin-dynamic-import-node')];
    }

    return Object.assign(config, baseConfig);
};
