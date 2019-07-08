/**
 * @fileoverview - Webpack configuration for generating demo pages. Uses base.webpack.config.js as a base. Saves all files to dist/demos/
 **/

const { babelLoader, svelteLoader } = require(`./helpers/loader-configs.js`);
const config = require(`./base.webpack.config.js`)({
    target: 'node',
    name: 'Dev Server',
});

const CWD = process.cwd();
const PATHS = require(`${CWD}/config/paths.config.js`);
const DIST_PATH = PATHS.folders.dist;
const OUT_PATH = '';

/*
 * Dev-server-specific output
 * Making stuff consumable by Node
 */
config.devtool = 'source-map';
config.output = Object.assign(
    {
        path: DIST_PATH,
        publicPath: '/',
        library: 'uwhealth',
        libraryTarget: 'commonjs-module',
        filename: `${OUT_PATH}[name].js`,
    },
    config.output
);

config.entry = () => ({
    server: [PATHS.pages.entry.server],
});

// We don't care about how big files are for the dev server
config.performance.hints = false;

/*
 * Dev server plugins
 */
//config.plugins.push();

/*
 * Dev server loaders
 */
config.module.rules.push(
    // Svelte as server-side renderer
    svelteLoader(config.target),

    // Babel JS files
    babelLoader(config.target)
);

// Stuff we don't need in a server environment
config.optimization.concatenateModules = false;
config.optimization.mergeDuplicateChunks = false;
config.optimization.splitChunks = false;

module.exports = config;
