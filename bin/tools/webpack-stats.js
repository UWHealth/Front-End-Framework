/* eslint indent: "off" */
const MODE = require('./mode.js');

module.exports = function(minimalist = false) {
    // Exclude js assets from minimalist logs
    const excludes = minimalist ? /(\.js$|\.map$)/ : /(\.map$)/;
    const maximum = !minimalist;

    return {
        // Fallback
        all: false,

        // Meta/Styling
        env: maximum,
        version: maximum,
        colors: true,
        timings: true,
        performance: maximum ? MODE.production : false,
        publicPath: maximum ? MODE.production : false,

        // Files
        assets: true,
            cachedAssets: true,
            hash: maximum ? MODE.production : false,
        cached: true,
        children: false,

        // Imports/Dependencies
        chunks: maximum,
        //     entrypoints: true,

        // modules: maximum ? MODE.production : false,
        //     source: true,
        //     moduleTrace: true,
        //     maxModules: 10,
        //optimizationBailout: MODE.production,
        warnings: true,

        excludeAssets: excludes,
        excludeModules: excludes,
        exclude: excludes
    };
};
