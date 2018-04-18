const BROWSERS = require(process.cwd() + '/package.json').browserslist;

module.exports = function(isNode) {
    const targets = isNode ?
    {"node": "current" }
    :
    {"browsers": BROWSERS };

    const config = {
        cacheDirectory: true,
        auxiliaryCommentBefore: "Babel»",
        presets: [
            ["env", {
                "targets": targets,
                "useBuiltIns": true,
                "loose": true,
                "modules": false,
                "babelrc": isNode ? false : true
                // "debug": true
            }]
        ],
        plugins: [
            ["transform-runtime", {
                "helpers": true,
                "polyfill": true,
                "regenerator": false,
                "loose": true,
                "modules": false
            }]
        ]
    };

    if (!isNode) {
        config.plugins.unshift(["syntax-dynamic-import"])
    }
    //"dynamic-import-node"

    return config;
};
