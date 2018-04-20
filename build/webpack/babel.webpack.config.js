const BROWSERS = require(process.cwd() + '/package.json').browserslist;
const MODE = require(process.cwd() + '/build/tools/mode');

module.exports = function(isNode) {
    const targets = isNode ?
    { "node": "current" }
    :
    { "browsers": BROWSERS };

    const config = {
        cacheDirectory: true,
        auxiliaryCommentBefore: "Babel»",
        presets: [
            ["@babel/preset-env", {
                "targets": targets,
                "loose": true,
                "modules": false,
                "useESModules": MODE.production ? true : false,
                "ignoreBrowserslistConfig": true,
                "debug": false,
            }]
        ],
        plugins: [
            ["@babel/plugin-transform-runtime", {
                "useBuiltIns": 'entry',
                "helpers": false,
                "polyfill": false,
                "loose": true,
                "modules": false,
                "useESModules": MODE.production ? true : false
            }]
            // ["transform-runtime", {
            //     "helpers": false,
            //     "polyfill": true,
            //     "regenerator": false,
            //     "loose": true,
            //     "modules": false,
            //     "useESModules": true,
            //     "useBuiltIns": true
            // }]
        ]
    };

    if (!isNode) {
        config.plugins.push(["syntax-dynamic-import"])
    }
    else {
        config.plugins.push(["dynamic-import-node"])
    }

    return config;
};
