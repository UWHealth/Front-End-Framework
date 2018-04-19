const BROWSERS = require(process.cwd() + '/package.json').browserslist;

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
                "useBuiltIns": false,
                "helpers": true,
                "polyfill": true,
                "loose": true,
                "modules": false,
                "useESModules": true,
                "ignoreBrowserslistConfig": true,
                "debug": false,
            }]
        ],
        plugins: [
            ["@babel/plugin-transform-runtime", {
                "useBuiltIns": false,
                "helpers": true,
                "polyfill": true,
                "loose": true,
                "modules": false,
                "useESModules": true
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
