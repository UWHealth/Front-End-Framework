/**
 * @fileoverview - Webpack configuration for generating demo pages. Uses base.webpack.config.js as a base. Saves all files to dist/demos/
 **/

const CWD = process.cwd();
const path = require('path');

const glob = require('fast-glob');
const cloneDeep = require('lodash.clonedeep');
const webpack = require('webpack');

const HtmlPlugin = require('html-webpack-plugin');

const MODE = require(`${CWD}/build/helpers/mode.js`);
const PATHS = require(`${CWD}/config/paths.config.js`);

const baseConfig = require(`./base.webpack.config.js`);
const babelConfig = require(`${CWD}/config/babel.config.js`)('node');
const svelteConfig = require(`${CWD}/build/helpers/svelte-loader-config.js`);

const config = cloneDeep(baseConfig.config);

config.name = 'Demo';
config.target = 'node';

config.devtool = MODE.production ? 'source-map' : false;

config.output = {
    path: PATHS.folders.dest,
    publicPath: '/',
    libraryTarget: 'commonjs',
    filename: `demo/[name].demo.js`,
};

config.plugins.push(
    new webpack.DefinePlugin({
        'typeof window': '"undefined"',
        'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`,
    })
);

config.module.rules.unshift(
    // Svelte as server-side
    svelteConfig('node', babelConfig),

    // Babel JS files
    {
        test: /\.(js|jsx)$/,
        enforce: 'post',
        exclude: [
            /node_modules\/core-js\//,
            /node_modules\/regenerator-runtime\//,
            /node_modules\/@?babel/,
        ],
        use: [
            {
                loader: 'cache-loader',
                options: {
                    cacheDirectory: path.resolve(
                        `${CWD}/node_modules/.cache/${config.name}/babel-loader`
                    ),
                },
            },
            {
                loader: 'babel-loader',
                options: babelConfig,
            },
        ],
    },

    // Allow for css to be inlined
    {
        test: /\.demo\.css$/,
        use: 'raw-loader',
    }
);

const demos = glob.sync(PATHS.demos.entry.src);

// Add all demo
demos.forEach((file) => {
    const baseName = path.basename(file, '.demo.html');
    const entryName = path.join(baseName, baseName);

    config.entry[entryName] = [file];

    config.plugins.push(
        new HtmlPlugin({
            template: PATHS.demos.entry.main,
            filename: path.join('demo', baseName, 'index.html'),
            inject: false,
            cache: true,
            showErrors: true,
            pageTitle: baseName,
            // Template-specific data
            svelte: {
                internalTemplate: `demo/${entryName}.demo.js`,
                pathname: `/demo/${baseName}/`,
                componentPath: `${baseName}`,
                addon: '',
            },
        })
    );
});

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
