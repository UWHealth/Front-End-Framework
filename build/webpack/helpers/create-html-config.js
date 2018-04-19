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
 * Generates a webpack configuration specifically tailored for making html pages from
 * JS files using html-webpack-plugin and our evaluate-template-webpack-plugin.
 * Creates folders and sub-folders (with index.html) for each page.
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
        dest: PATHS.folders.dist,
        baseDist: PATHS.folders.dist,
        baseConfig: {},
        debug: false,
        assetName: "auto"
    }, options);

    options.folderName = path.relative(options.baseDist, options.dest).replace(/\\/g, '/');
    options.outputPath = options.dest.replace(`${options.folderName}`, '');
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
    config.context = path.resolve(process.cwd());
    config.output.publicPath = path.resolve(options.baseDist, options.outputPath) + '/';
    config.output.path = options.outputPath;
    config.resolve.modules = ["node_modules"];

    // Make logging simpler (excluding chunks and js from logging)
    config.stats = STATS(true);

    config.optimization.minimize = false;
    config.optimization.splitChunks.chunks = "initial";
    config.optimization.splitChunks.minSize = Infinity;
    // Make node compatible so we can evaluate templates in memory
    config.devtool = MODE.production ? 'source-map' : false;
    config.target = "node";
    config.output.libraryTarget = "commonjs2";
    config.output.library = options.nameSpace;
    config.node = {
        console: false,
        __dirname: true,
        __filename: true,
        Buffer: false,
        setImmediate: false
    };
    // config.output.globalObject = "this";

    // Give js files a namespace
    config.output.filename = `[name].${options.nameSpace}.js`;

    // Give html imports Svelte powers
    config.module.rules.push(
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
                    preserveComments: true,
                    prerender: true
                }
            }
        }
    );

    return config;
}


/**
 * Loops through files and creates an entry point for each.
 * All entry points are named with a relative path from dist for a clearer log.
 * @param {Object} options generateHtmlConfig options
 * @return {Object} Entry points for each file, namespaced by their folder
 */
function addEntryPoints(options) {
    const entryPoints = {};

    options.files.forEach((file) => {
        const baseName = path.basename(file, options.sourceExtension);
        const entryName = path.join(options.folderName, baseName, baseName);
        //console.log(entryName);

        entryPoints[entryName] = file;
    });

    return entryPoints;
}


/**
 * Loops through files and adds a new HTML plugin for each.
 * Ultimately, this generates a new html file for each file input.
 * Each file is output to something like dist/[options.dest]/[filename]/index.html
 * @param {Object} options generateHtmlConfig options
 * @return {Array} A series of calls to the html-webpack-plugin for each file and a single call to the evaluate-template-plugin to create the inner Html of each page.
 */
function addHtmlPlugins(options) {
    const plugins = [];

    const ManifestPlugin = require('webpack-manifest-plugin');

    plugins.push(
        new ManifestPlugin({seed: {name: 'My Manifest'}})
    );
    // Loop through files, adding html pages for each
    options.files.forEach((file) => {
        const baseName = path.basename(file, options.sourceExtension);
        const entryName = path.join(options.folderName, baseName, baseName);
        const assetName = options.assetName !== "auto" ? options.assetName : `${entryName}.${options.nameSpace}.js`;

        if (options.debug) { console.log('ASSET NAME', `/${options.folderName}/${baseName}/`); }

        plugins.push(
            new HtmlPlugin({
                template: options.template,
                filename: path.join(entryName, '..', 'index.html'),
                inject: false,
                cache: true,
                showErrors: true,
                pageTitle: baseName,
                evalPlugin: {
                    assetName: assetName,
                    assetPath: path.resolve(process.cwd(), 'dist', assetName),
                    context: {
                        window: undefined,
                        document: undefined,
                        __dirname: path.resolve(process.cwd(), 'dist'),
                        __filename: path.resolve(process.cwd(), 'dist', assetName),
                        __APP_STATE__: {
                            pathname: `/${options.folderName}/${baseName}/`,
                            componentPath: `${baseName}`,
                            pageTitle: baseName
                        }
                    }
                }
            })
        );
    });

    plugins.push(
        // Add evaluated demo to html data
        new EvalTemplatePlugin({
            templating: function(source, raw, htmlPluginData, compilation) { // eslint-disable-line
                if (options.debug) { console.log('SOURCE', source); }

                const render = (source && typeof source.render !== 'undefined') ? source.render || source.toString() : source;

                const page = (typeof render === 'function') ? render() : render;
                const opts = htmlPluginData.plugin.options.evalPlugin;

                htmlPluginData.plugin.options.sourceScript = `
                <script>
                    var __APP_STATE__ = {
                        initialRoute: '${opts.context.__APP_STATE__.pathname}',
                        componentPath: '${opts.context.__APP_STATE__.componentPath}'
                    }
                </script>`;

                htmlPluginData.plugin.options.unevaledScript = `<script>\n window.parsedObject = function(global){\n\t` +
                    `${raw.replace(/<\/script>/g, '<\\/script>').replace('pathname: history.location.pathname', 'pathname: window.location.pathname')}\n return ${options.nameSpace}}</script>`;

                return page;
            }
        })
    );

    return plugins;
}

const reviver = "window.parsedObject = JSON.parse(serialized, function(key, value){\n\t" +
  "if (typeof value === 'string'" +
      "&& value.indexOf('function ') === 0) {\n\t\t"+
    "let functionTemplate = 'return ' + value;\n\t\t" +
    "return new Function(functionTemplate);\n\t\t" +
  "} return value;}\n" +
"\n );";

function replacer (key, value) {
  // if we get a function, give us the code for that function
  if (typeof value === 'function') {
    return value.toString().replace(/<\/script>/g, '<\\/script>');
  }
  return value;
}

module.exports = createHtmlConfig;
