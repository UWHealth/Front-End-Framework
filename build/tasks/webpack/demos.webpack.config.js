/**
 * @fileoverview - Webpack configuration for generating demo pages. Uses base.webpack.config.js as a base. Saves all files to dist/demos/
 **/

const CWD = process.cwd();
const PATHS = require(`${CWD}/config/paths.config.js`);
const path = require('path');
const glob = require('fast-glob');

const webpack = require('webpack');
//const HtmlPlugin = require('html-webpack-plugin');
const babelConfig = require(`${CWD}/config/babel.config.js`)('node');
const babelLoader = require(`${CWD}/build/helpers/babel-loader-config.js`);
const svelteLoader = require(`${CWD}/build/helpers/svelte-loader-config.js`);
const config = require(`./base.webpack.config.js`)('node');

const demoPath = path.posix.relative(PATHS.folders.dist, PATHS.demos.dest);

config.name = 'Demo';

/*
 * Demo-specific output
 * Making stuff consumable by Node
 */
config.devtool = false;
config.output = {
    path: path.resolve(PATHS.folders.dist),
    publicPath: '/',
    libraryTarget: 'commonjs',
    filename: `${demoPath}/[name].demo.js`,
    chunkFilename: `${demoPath}/[id].[ext]`,
    hotUpdateChunkFilename: '[id].hot-update.js',
    hotUpdateMainFilename: 'main.hot-update.js',
};

config.entry = () => {
    const entries = {};
    entries['base'] = path.resolve(PATHS.folders.src, 'demos.js');

    // Dynamically add .demo files as entry points
    // Allowing new ones to be added while webpack runs
    glob.sync(PATHS.demos.entry.src).forEach((file) => {
        const baseName = path.basename(file, '.demo.html');
        const entryName = path.posix.join(baseName);
        entries[entryName] = file;
    });
    return entries;
};

// Cross-config aliases
config.resolve.alias['__manifest__'] = path.resolve(PATHS.demos.entry.manifest);

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
//     const entryName = path.posix.join(baseName, baseName);
//
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
