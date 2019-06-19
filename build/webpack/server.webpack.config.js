/**
 * @fileoverview - Webpack configuration for generating demo pages. Uses base.webpack.config.js as a base. Saves all files to dist/demos/
 **/

const CWD = process.cwd();
const PATHS = require(`${CWD}/config/paths.config.js`);
const path = require('path');

const webpack = require('webpack');
const babelLoader = require(`./helpers/loader-configs.js`).babel;
const svelteLoader = require(`./helpers/loader-configs.js`).svelte;

const config = require(`./base.webpack.config.js`)({
    target: 'node',
    name: 'Dev Server',
});

const outPath = '';

/*
 * Demo-specific output
 * Making stuff consumable by Node
 */
config.devtool = 'source-map';
config.mode = 'development';
config.output = Object.assign(
    {
        path: PATHS.folders.dist,
        publicPath: '/',
        library: 'uwhealth',
        libraryTarget: 'commonjs-module',
        filename: `${outPath}[name].js`,
    },
    config.output
);

config.entry = {
    server: [
        require.resolve(`webpack-hot-middleware/client`) +
            `?name=${config.name}&reload=false`,
        PATHS.pages.entry.server,
    ],
};

// config.entry = () => {
//     const entries = {};
//     entries['server'] = PATHS.pages.entry.server;

//     return entries;
// };

/*
 * Demo plugins
 */
config.plugins.push(
    // Ensure window is undefined
    new webpack.DefinePlugin({
        'typeof window': '"undefined"',
        'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`,
    })
);

/*
 * Demo loaders
 */
config.module.rules.push(
    // Svelte as server-side renderer
    svelteLoader(config.target),

    // Babel JS files
    babelLoader(config.target)
);

config.optimization.concatenateModules = false;
config.optimization.mergeDuplicateChunks = false;
config.optimization.splitChunks = false;

module.exports = config;
