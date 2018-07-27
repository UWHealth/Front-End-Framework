/**
 * @fileoverview - Webpack configuration for generating demo pages. Uses base.webpack.config.js as a base. Saves all files to dist/demos/
 **/

const CWD = process.cwd();
const path = require('path');

const glob = require('fast-glob');
const cloneDeep = require('lodash.clonedeep');

const MODE = require(`${CWD}/build/helpers/mode.js`);
const PATHS = require(`${CWD}/config/paths.config.js`);

const baseConfig = require('./base.webpack.config.js');
const babelConfig = require(`${CWD}/config/babel.config.js`);
const HtmlPlugin = require('html-webpack-plugin');

const config = cloneDeep(baseConfig.config);

config.name = 'Demo';

config.devtool = MODE.production ? 'source-map' : false;
config.target = 'node';

config.output = {
    path: PATHS.folders.dest,
    publicPath: '/public/js/',
    libraryTarget: 'commonjs',
    filename: `[name].demo.js`,
};

config.module.rules.push(
    // Svelte as server-side
    {
        test: /\.(html|sv\.html|svelte)$/,
        use: [
            {
                loader: 'babel-loader',
                options: babelConfig('node'),
            },
            {
                loader: 'svelte-loader',
                options: {
                    format: 'cjs',
                    generate: 'ssr',
                    dev: !MODE.production,
                    hydratable: true,
                    store: true,
                    preserveComments: false,
                },
            },
        ],
    },

    // Babelify
    {
        test: /\.(js|jsx)$/,
        enforce: 'post',
        exclude: [
            /node_modules\/core-js\//,
            /node_modules\/regenerator-runtime\//,
            /node_modules\/@?babel/,
        ],
        use: {
            loader: 'babel-loader',
            options: babelConfig('node'),
        },
    },

    // Allow for css to be inlined
    {
        test: /\.demo\.css$/,
        use: 'raw-loader',
    }
);

const demos = glob.sync(PATHS.demos.entry.all);

// Add all demo
demos.forEach((file) => {
    const baseName = path.basename(file, '.demo.html');
    const entryName = path.join('demo', baseName, baseName);

    config.entry[entryName] = file;

    config.plugins.push(
        new HtmlPlugin({
            template: PATHS.demos.entry.main,
            filename: path.join(entryName, '..', 'index.html'),
            inject: false,
            cache: true,
            showErrors: true,
            pageTitle: baseName,
            // Template-specific data
            svelte: {
                internalTemplate: `${entryName}.demo.js`,
                pathname: `/demo/${baseName}/`,
                componentPath: `${baseName}`,
                addon: '',
            }
        })
    );
});

// Create "index" demo page
const demoLinks = demos.reduce((string, file) => {
    const name = path.basename(file, '.demo.html');
    return string + `<li><a href="/demo/${name}/">${name}</a></li>`;
}, '');

config.plugins.push(
    new HtmlPlugin({
        template: PATHS.demos.entry.main,
        filename: 'index.html',
        inject: false,
        cache: true,
        showErrors: true,
        pageTitle: 'Demos',
        // Template-specific data
        svelte: {
            internalTemplate: false,
            addon: `<ul>${demoLinks}</ul>`,
        }
    })
);

module.exports = config;
