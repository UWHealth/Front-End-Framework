/**
 * @fileoverview - Generic webpack setup for html page generation. Centralizes the redundant parts of sample/demo page configurations.
**/

const HtmlPlugin = require('html-webpack-plugin');
const EvalTemplatePlugin = require('./evaluate-template-webpack-plugin');

const glob = require('fast-glob');
const path = require('path');
const cloneDeep = require('lodash.clonedeep');

const cwd = process.cwd();
const STATS = require("./webpack-stats.js");
const PATHS = require(`${cwd}/config/paths.config.js`);
const MODE = require(`${cwd}/build/tools/mode.js`);


/**
 * Generates a webpack configuration specifically tailored for making html pages from JS files using html-webpack-plugin and our evaluate-template-webpack-plugin. Creates folders and sub-folders (with index.html) for each page.
 * @param  {object} options
 * @param  {String} options.src             File glob pattern to collect templates.
 * @param  {String} options.template        path to the base template for html-webpack-plugin.
 * @param  {String} options.nameSpace       What string should be added to js files outputs.
 * @param  {String} options.sourceExtension Passed directly to path.basename to determine the folder name of each page.
 * @param  {String} options.dest Base output path.
 * @param  {Object} baseConfig   Webpack config that should serve as a basis for the new config.
 * @return {Object}              Webpack configuration object with correct plugins/settings.
 */
function createHtmlConfig(options) {
    options = Object.assign({}, {
        src: '',
        template: PATHS.demos.entry.main,
        nameSpace: "html",
        sourceExtension: ".html.js",
        assetExtension: '.js',
        dest: PATHS.root.dist,
        baseConfig: {},
        debug: false
    }, options);

    options.folderName = path.relative(PATHS.root.dist, options.dest).replace(/\\/g, '/');
    options.files = glob.sync(options.src);

    const config = boostrapConfig(options);
    config.entry = addEntryPoints(options);
    config.plugins = addHtmlPlugins(options);

    return config;
};


/**
 * Clones base config and sets standard options for any html-generating webpack config.
 * @param  {Object} options    generateHtmlConfig watchOptions
 * @param  {String} folderName Name of the destination folder
 * @return {Object}            Cloned and modified config object
 */
function boostrapConfig(options, folderName) {
    // Clone base webpack config
    const config = cloneDeep(options.baseConfig);

    // Unify paths
    config.context = path.resolve(__dirname, '..');
    config.output.publicPath = PATHS.root.dist;
    config.output.path = PATHS.root.dist;
    config.resolve.modules = ["node_modules"];

    // Make logging simpler (excluding chunks and js from logging)
    config.stats = STATS(true);

    // Make node compatible so we can evaluate templates in memory
    //config.devtool = false;
    config.target = "node";
    config.output.libraryTarget = "umd";

    // Give js files a namespace
    config.output.filename = `[name].${options.nameSpace}.js`;

    // Give html imports Svelte powers
    config.module.rules.push(
        {
            test: /\.(html|sv\.html|svelte)$/,
            use: {
                loader: 'svelte-loader',
                options: {
                    generate: 'ssr',
                    dev: !MODE.production,
                    hydratable: true,
                    store: true
                }
            }
        }
    );

    return config;
}


/**
 * Loops through files and creates an entry point for each. All entry points are named with a relative path from dist for a clearer log.
 * @param {Object} options generateHtmlConfig options
 * @return {Object} Entry points for each file, namespaced by their folder
 */
function addEntryPoints(options) {
    const entryPoints = {};

    options.files.forEach((file) => {
        const baseName = path.basename(file, options.sourceExtension);
        const entryName = path.join(options.folderName, baseName, baseName);
        entryPoints[entryName] = file;
    });

    return entryPoints;
}


/**
 * Loops through files and adds a new HTML plugin for each. Ultimately, this generates a new html file for each file input. Each file is output to something like dist/[options.dest]/[filename]/index.html
 * @param {Object} options generateHtmlConfig options
 * @return {Array} A series of calls to the html-webpack-plugin for each file and a single call to the evaluate-template-plugin to create the inner Html of each page.
 */
function addHtmlPlugins(options) {
    const plugins = [];

    // Loop through files, adding html pages for each
    options.files.forEach((file) => {
        const baseName = path.basename(file, options.sourceExtension);
        const entryName = path.join(options.folderName, baseName, baseName);

        plugins.push(
            new HtmlPlugin({
                template: options.template,
                filename: path.join(entryName, '..', 'index.html'),
                inject: false,
                cache: true,
                showErrors: true,
                pageTitle: baseName,
                evalPlugin: {
                    assetName: `${entryName}.${options.nameSpace}.js`
                }
            })
        );
    });

    plugins.push(
        // Add evaluated demo to html data
        new EvalTemplatePlugin({
            templating: function(source) { // eslint-disable-line
                if (options.debug) {
                    console.log(source);
                }
                const render = (source && typeof source.render !== 'undefined') ? source.render || source.toString() : source;
                return (typeof render === 'function') ? render() : render;
            }
        })
    );

    return plugins;
}

module.exports = createHtmlConfig;
