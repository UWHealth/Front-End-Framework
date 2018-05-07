/**
 * @fileoverview - Webpack configuration for generating demo pages. Uses ./webpack.config.js as a base. Saves all files to dist/samples/
**/

const cwd = process.cwd();
const path = require('path');

const htmlConfig = require('./helpers/create-html-config.js');
const PATHS = require(`${cwd}/config/paths.config.js`);
const baseConfig = require(`./base.webpack.config.js`);
const babelConfig = require(`./babel.webpack.config.js`);

const config = htmlConfig({
    baseConfig: baseConfig.config,
    src: PATHS.demos.entry.svelte,
    template: PATHS.demos.entry.template,
    dest: PATHS.demos.dest,
    nameSpace: "demo",
    sourceExtension: ".demo.html",
    debug: false,
    assetName: "auto"
});

config.name = "Demo";

const ManifestPlugin = require('webpack-assets-manifest');

config.plugins.push(new ManifestPlugin(
    baseConfig.manifestConfig(
        '/' + path.relative(PATHS.folders.dist, config.output.publicPath),
        false /* customization */
    )
));


config.module.rules.push(
    {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
            loader: 'babel-loader',
            options: babelConfig(true)
        }
    },

    // Allow for css to be inlined
    {
        test: /\.demo\.css$/,
        use: 'raw-loader'
    }
);

module.exports = config;
