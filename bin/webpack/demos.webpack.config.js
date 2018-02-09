/**
 * @fileoverview - Webpack configuration for generating demo pages. Uses ./webpack.config.js as a base. Saves all files to dist/samples/
**/

const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const webpack = require('webpack');

const glob = require('glob');
const path = require('path');
const cloneDeep = require('lodash.clonedeep');

const PATHS = require("../paths.config.js");
const WP_CONFIG = require("../../webpack.config.js");
const DEMOS = glob.sync(PATHS.demos.entry.all);

const config = cloneDeep(WP_CONFIG);

config.output.publicPath = "./dist/components/";
config.output.filename = "[name].demo.js";
config.output.chunkFilename = "[name].[id].demo.js";
config.output.path = PATHS.demos.dest;
config.resolve.modules = ["node_modules"];
config.entry = {
    index: path.resolve(__dirname, "../tools/demo-router.js"),
    handlebars: "handlebars/runtime",
};

config.context = __dirname;
config.target = "node";
config.devtool = false;
config.output.library = "render";
config.output.libraryTarget = "umd";

const staticPaths = [];

DEMOS.forEach((file) => {
    const name = path.basename(file, ".demo.js");
    staticPaths.push('/' + name + '/');
});

// console.log(staticPaths);

config.plugins.push(
    new StaticSiteGeneratorPlugin({
        paths: staticPaths,
        entry: "index",
        locals: {
            "variable": "thing"
        }
    }),
    // Make handlebars its own chunk for quicker compilation
    new webpack.optimize.CommonsChunkPlugin({
        name: "handlebars",
        minChunks: Infinity,
        async: "handlebars.js"
    })
);

config.module.rules.push(
    {
        // Allow for css to be inlined
        test: /\.demo\.css$/,
        use: 'raw-loader'
    },
    {
        // Convert import() statements to regular node requires
        // Allows handlebars templates to be loaded dynamically
        test: /\.demo\.js$/,
        use: [
            {
                loader: 'babel-loader',
                options: {
                    plugins: ["dynamic-import-node"]
                }
            }
        ]
    }
);

module.exports = config;
