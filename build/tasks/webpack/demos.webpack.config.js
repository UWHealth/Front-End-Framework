/**
 * @fileoverview - Webpack configuration for generating demo pages. Uses base.webpack.config.js as a base. Saves all files to dist/demos/
 **/

const CWD = process.cwd();
const PATHS = require(`${CWD}/config/paths.config.js`);
const path = require('path');
const glob = require('fast-glob');

const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const babelConfig = require(`${CWD}/config/babel.config.js`)('node');
const svelteConfig = require(`${CWD}/build/helpers/svelte-loader-config.js`);

const baseConfig = require(`./base.webpack.config.js`);
const config = baseConfig();

const demoPath = path.posix.relative(PATHS.folders.dist, PATHS.demos.dest);

config.name = 'Demo';
config.target = 'node';
config.devtool = false;
config.entry = () => {
    const entries = {
        base: path.resolve(PATHS.demos.folders.modules, 'base', 'index.html'),
    };
    glob.sync(PATHS.demos.entry.src).forEach((file) => {
        const baseName = path.basename(file, '.demo.html');
        const entryName = path.posix.join(baseName, baseName);
        entries[entryName] = file;
    });
    return entries;
};

config.output = {
    path: path.resolve(PATHS.folders.dist),
    publicPath: '/',
    libraryTarget: 'commonjs',
    filename: `${demoPath}/[name].demo.js`,
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
config.module.rules.unshift(
    // Svelte as server-side renderer
    svelteConfig('node', babelConfig),

    // Babel JS files
    {
        test: /\.(js|jsx)$/,
        enforce: 'post',
        exclude: [
            /node_modules[\\/]core-js/,
            /node_modules[\\/]regenerator-runtime/,
            /node_modules[\\/]@?babel/,
        ],
        use: [
            {
                loader: 'cache-loader',
                options: {
                    cacheDirectory: path.resolve(
                        PATHS.folders.cache,
                        config.name,
                        `babel-loader`
                    ),
                    cacheIdentifier: require(`${CWD}/build/helpers/cache-identifier.js`),
                },
            },
            {
                loader: 'babel-loader',
                options: babelConfig,
            },
        ],
    }
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
