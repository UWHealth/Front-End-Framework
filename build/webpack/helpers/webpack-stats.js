/* eslint indent: "off" */
const MODE = require('../../helpers/mode.js');

module.exports = function(minimalist = false) {
    // eslint-disable-line
    // Exclude js assets from minimalist logs
    const excludes = minimalist ? /(\.js$|\.map$)/ : /(\.map$)/;
    const maximum = !minimalist;
    const prod = MODE.production === true;

    // if (!prod && minimalist) {
    //     return 'minimal';
    // }

    return {
        // Fallback
        all: false,

        // Meta/Styling
        env: maximum,
        version: maximum,
        colors: true,
        timings: true,
        performance: maximum ? prod : false,
        publicPath: maximum ? prod : false,

        // Files
        assets: true,
        cachedAssets: prod,
        hash: maximum ? prod : false,
        cached: prod,
        children: false,

        // Imports/Dependencies
        chunks: maximum,
        //     entrypoints: true,

        // modules: maximum ? MODE.production : false,
        //     source: true,
        //     moduleTrace: true,
        //     maxModules: 10,
        // optimizationBailout: MODE.production,
        warnings: true,

        excludeAssets: excludes,
        excludeModules: excludes,
        exclude: excludes,
    };
};
