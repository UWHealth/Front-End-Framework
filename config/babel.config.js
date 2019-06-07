/**
 * @fileoverview - Configures babel based on the passed in target ("web", "node", "t4").
 *               - If adding to this file, be sure consider which target your change applies to.
 *               - Babel/preset-env should take care of most polyfilling,
 *               - Anything targeting t4 needs to be considered carefully (and tested).
 **/

const CWD = process.cwd();
const MODE = require(`${CWD}/build/helpers/mode`);

module.exports = (api) => {
    const webOrNodePresets = [
        [
            '@babel/preset-env',
            {
                targets: api.env('node')
                    ? { node: true, browsers: ['last 1 Chrome versions'] }
                    : MODE.development
                    ? { browsers: ['last 1 Chrome versions'] }
                    : {},
                loose: true,
                corejs: 3,
                modules: false,
                useBuiltIns: 'usage',
                debug: false,
            },
        ],
    ];

    return {
        // Prevent babel from polyfilling itself
        exclude: [/@?babel/g, /core-js/g],
        sourceType: 'unambiguous',
        auxiliaryCommentBefore: 'Babel»',
        env: {
            web: {
                presets: webOrNodePresets,
                plugins: [
                    ['@babel/plugin-syntax-dynamic-import'],
                    // [
                    //     '@babel/plugin-transform-runtime',
                    //     {
                    //         helpers: true,
                    //         corejs: 3,
                    //         loose: true,
                    //         useESModules: true,
                    //     },
                    // ],
                ],
            },
            node: {
                presets: webOrNodePresets,
                plugins: ['@babel/plugin-syntax-dynamic-import'],
            },
            t4: {
                presets: ['@uwhealth/babel-preset-t4'],
            },
        },
    };
};
