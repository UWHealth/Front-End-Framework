/* eslint indent: "off" */
const MODE = require('../tools/mode.js');

module.exports = function(minimalist = false) {
    // Exclude js assets from minimalist logs
    const excludes = minimalist ? /(\.js$|\.map$)/ : /(\.map$)/;
    const maximum = !minimalist;

    return {
        // Fallback
        all: false,

        // Meta/Styling
        env: maximum,
        colors: true,
        timings: true,
        version: maximum,
        performance: MODE.production,
        publicPath: MODE.production,

        // Files
        assets: true,
            cachedAssets: true,
            // hash: MODE.production,
        cached: true,
        children: false,

        // Imports/Dependencies
        chunks: maximum,
        //     entrypoints: true,

        modules: maximum ? MODE.production : false,
        //     source: true,
        //     moduleTrace: true,
        //     maxModules: 10,
        //optimizationBailout: MODE.production,

        excludeAssets: excludes,
        excludeModules: excludes,
        exclude: excludes
    };
};
