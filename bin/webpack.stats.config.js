/* eslint indent: "off" */
const MODE = require('./helpers/mode.js');

module.exports = {
    // Fallback
    all: false,

    // Meta/Styling
    env: true,
    colors: true,
    timings: true,
    version: true,
    performance: MODE.production,
    publicPath: MODE.production,

    // Files
    assets: true,
        cachedAssets: true,
        // hash: MODE.production,
    cached: true,
    // entrypoints: false,

    // Imports/Dependencies
    chunks: true,

    modules: MODE.production,
    //     source: true,
    //     moduleTrace: true,
    //     maxModules: 10,

    excludeAssets: /(\.hbs|\.map$)/,
    excludeModules: /(\.hbs|\.map$)/,
    exclude: /(\.hbs|\.map$)/,

    // children: true,
};
