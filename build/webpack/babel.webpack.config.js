const BROWSERS = require(process.cwd() + '/package.json').browserslist;

module.exports = function(isNode) {
    const targets = isNode ?
    {"node": true}
    :
    {"browsers": BROWSERS };



    return {
        cacheDirectory: true,
        auxiliaryCommentBefore: "Babel»",
        presets: [
            ["env", {
                "targets": targets,
                "useBuiltIns": true,
                "loose": true,
                "modules": false,
                // "debug": true
            }]
        ],
        plugins: [
            [isNode ? "dynamic-import-node" : "syntax-dynamic-import"],
            ["transform-runtime", {
                "helpers": true,
                "polyfill": true,
                "regenerator": false,
                "loose": true,
                "modules": false
            }],
        ]
    };
};
