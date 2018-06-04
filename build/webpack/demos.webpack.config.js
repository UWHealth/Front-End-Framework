/**
 * @fileoverview - Webpack configuration for generating demo pages. Uses ./webpack.config.js as a base. Saves all files to dist/samples/
 **/

const CWD = process.cwd();
const path = require('path');

const glob = require('fast-glob');
const cloneDeep = require('lodash.clonedeep');

const MODE = require(`${CWD}/build/helpers/mode.js`);
const PATHS = require(`${CWD}/config/paths.config.js`);

const baseConfig = require('./base.webpack.config.js');
const babelConfig = require('./babel.webpack.config.js');
const HtmlPlugin = require('html-webpack-plugin');

const config = cloneDeep(baseConfig.config);

config.name = 'Demo';

config.devtool = MODE.production ? 'source-map' : false;
config.target = 'node';

config.output = {
    publicPath: '/public/js/',
    libraryTarget: 'commonjs2',
    filename: `[name].demo.js`,
};

config.module.rules.push(
    // Svelte as server-side
    {
        test: /\.(html|sv\.html|svelte)$/,
        use: {
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
    },

    // Babelify
    {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
            loader: 'babel-loader',
            options: babelConfig(true),
        },
    },

    // Allow for css to be inlined
    {
        test: /\.demo\.css$/,
        use: 'raw-loader',
    }
);

// Add all demo
glob.sync(PATHS.demos.entry.all).forEach((file) => {
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
            // Template-specific data
            pageTitle: baseName,
            internalTemplate: `${entryName}.demo.js`,
            pathname: `/demo/${baseName}/`,
            componentPath: `${baseName}`,
        })
    );
});

module.exports = config;
