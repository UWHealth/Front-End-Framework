const BROWSERS = require(process.cwd() + '/package.json').browserslist;
const MODE = require(process.cwd() + '/build/helpers/mode');

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
        ]
    };

    if (!isNode) {
        config.plugins.push(["syntax-dynamic-import"], ["transform-object-assign"])
    }
    else {
        config.plugins.push(["dynamic-import-node"])
    }

    return config;
};
