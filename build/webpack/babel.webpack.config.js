const BROWSERS = require(process.cwd() + '/package.json').browserslist;

module.exports = function(isNode) {
    const targets = isNode ?
    {"node": "current" }
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
            ["syntax-dynamic-import"],
            ["transform-imports"],
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
