const CWD = process.cwd();
const PATHS = require(`${CWD}/config/paths.config.js`);
const MODE = require(`${CWD}/build/helpers/mode.js`);
const path = require('path');

module.exports = (name, babelConfig) => ({
    test: /\.(js|jsx)(\?.*)?$/,
    enforce: 'post',
    exclude: [
        /node_modules[\\/]core-js/,
        /node_modules[\\/]regenerator-runtime/,
        /node_modules[\\/]@?babel/,
    ],
    oneOf: [
        // Load with ./something?eval with val-loader
        // Avoid caching
        {
            resourceQuery: /\?e?val/,
            loader: 'val-loader',
        },
        !MODE.production && {
            loader: 'cache-loader',
            options: {
                cacheDirectory: path.resolve(
                    PATHS.folders.cache,
                    name,
                    `babel-loader`
                ),
                cacheIdentifier: require(`${CWD}/build/helpers/cache-identifier.js`),
            },
        },
        {
            loader: 'babel-loader',
            options: babelConfig,
        },
    ].filter(Boolean),
});
