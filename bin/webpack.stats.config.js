/* eslint indent: "off" */

module.exports = {
    // Fallback
    all: false,

    // Meta/Styling
    env: true,
    colors: true,
    publicPath: true,
    timings: false,
    performance: false,

    // Files
    assets: true,
        cachedAssets: true,
        hash: false,
    cached: true,
    entrypoints: false,

    // Imports/Dependencies
    chunks: true,
        chunkModules: true,
    modules: false,
        source: true,
        moduleTrace: true,
        maxModules: 10,

    excludeAssets: /(\.html$|\.hbs|\.map$)/,
    excludeModules: /(\.html$|\.hbs|\.map$)/,
    exclude: /(\.html$|\.hbs|\.map$)/,
    children: false,
};
