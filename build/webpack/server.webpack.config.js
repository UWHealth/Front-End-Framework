/**
 * @fileoverview - Webpack configuration for generating demo pages. Uses base.webpack.config.js as a base. Saves all files to dist/demos/
 **/

const CWD = process.cwd();
const PATHS = require(`${CWD}/config/paths.config.js`);
const path = require('path');

const webpack = require('webpack');
const babelConfig = require(`${CWD}/config/babel.config.js`)('node');
const babelLoader = require(`./helpers/babel-loader-config.js`);
const svelteLoader = require(`./helpers/svelte-loader-config.js`);

const config = require(`./base.webpack.config.js`)({
    target: 'node',
    name: 'Dev Server',
});

const outPath = '';

/*
 * Demo-specific output
 * Making stuff consumable by Node
 */
config.devtool = false;
config.mode = 'development';
config.output = {
    path: path.resolve(PATHS.folders.dist),
    publicPath: '/',
    libraryTarget: 'commonjs2',
    filename: `${outPath}[name].js`,
};

config.entry = () => {
    const entries = {};
    entries['server'] = PATHS.pages.entry.server;
    // Dynamically add pages/** files as entry points
    // Allowing new ones to be added while webpack runs
    // const getPages = require(`${CWD}/build/helpers/get-pages.js`);

    return entries;
};

// Cross-config aliases
// config.resolve.alias['__manifest__'] = path.resolve(PATHS.pages.entry.manifest);

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
    svelteLoader(config.target, babelConfig),

    // Babel JS files
    babelLoader(config.name, babelConfig)
);

config.optimization.concatenateModules = false;
config.optimization.mergeDuplicateChunks = false;
config.optimization.splitChunks = false;

// config.plugins.push(
//     new HtmlPlugin({
//         template: path.resolve(PATHS.demos.entry.main),
//         // filename: path.posix.join(demoPath, baseName, 'index.html'),
//         inject: false,
//         cache: true,
//         showErrors: true,
//         render: { addon: ' ' }
//         // pageTitle: baseName,
//         // Template-specific data
//         // render: {
//         //     internalTemplate: `${demoPath}/${entryName}.demo.js`,
//         //     pathname: `/${demoPath}/${baseName}/`,
//         //     componentPath: `${baseName}`,
//         //     addon: '',
//         // },
//     })
// );

// Create HTML pages from *.demo.html files
// glob.sync(PATHS.demos.entry.src).forEach((file) => {
//     const baseName = path.basename(file, '.demo.html');
//     const entryName = path.posix.join(baseName);

//     config.plugins.push(
//         new HtmlPlugin({
//             template: path.resolve(PATHS.demos.entry.main),
//             filename: path.posix.join(demoPath, baseName, 'index.html'),
//             inject: false,
//             cache: true,
//             showErrors: true,
//             pageTitle: baseName,
//             // Template-specific data
//             render: {
//                 internalTemplate: `${demoPath}/${entryName}.demo.js`,
//                 pathname: `/${demoPath}/${baseName}/`,
//                 componentPath: `${baseName}`,
//                 addon: '',
//             },
//         })
//     );
// });

// Create "index" demo page
// const demoLinks = demos.reduce((string, file) => {
//     const name = path.basename(file, '.demo.html');
//     return string + `<li><a href="/demo/${name}/">${name}</a></li>`;
// }, '');
//
// config.plugins.push(
//     new HtmlPlugin({
//         template: PATHS.demos.entry.main,
//         filename: 'index.html',
//         inject: false,
//         cache: true,
//         showErrors: true,
//         pageTitle: 'Demo Index',
//         // Template-specific data
//         svelte: {
//             internalTemplate: false,
//             addon: `<ul>${demoLinks}</ul>`,
//         },
//     })
// );

module.exports = config;
