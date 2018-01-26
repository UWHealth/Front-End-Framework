/* eslint indent: "off" */

module.exports = {
    // Fallback
    all: false,

    // Meta/Styling
    env: true,
    colors: true,
    timings: true,
    version: true,
    performance: false,
    publicPath: false,

    // Files
    assets: true,
        cachedAssets: true,
        hash: false,
    cached: true,
    // entrypoints: false,

    // Imports/Dependencies
    chunks: true,
    //     chunkModules: false,
    // modules: true,
    //     source: true,
    //     moduleTrace: true,
    //     maxModules: 10,

    excludeAssets: /(\.hbs|\.map$)/,
    excludeModules: /(\.hbs|\.map$)/,
    exclude: /(\.hbs|\.map$)/,

    // children: true,
};
