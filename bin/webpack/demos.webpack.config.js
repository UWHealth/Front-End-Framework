/**
 * @fileoverview - Webpack configuration for generating demo pages. Uses ./webpack.config.js as a base. Saves all files to dist/samples/
**/

const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const webpack = require('webpack');

const fs = require('fs');
const glob = require('glob');
const path = require('path');
const cloneDeep = require('lodash.clonedeep');

const PATHS = require('../paths.config.js');
const WP_CONFIG = require('../../webpack.config.js');

const config = cloneDeep(WP_CONFIG);

config.context = __dirname;
config.output.path = PATHS.demos.dest;
config.output.publicPath = './dist/components/';
config.target = "node";
config.devtool = false;
config.output.filename = '[name].demo.js';
config.output.library = 'render';
config.output.libraryTarget = "umd";
config.resolve.modules = ["node_modules", PATHS.demos.dest];
config.entry = {
    handlebars: 'handlebars/runtime',
    index: path.resolve(__dirname, '../tools/demo-router.js'),
};

const staticPaths = [];

const demos = glob.sync(PATHS.demos.entry.all);

// fs.readdirSync(PATHS.demos.folders.root)
//     .forEach((folder) => {
//         const folderPath = path.resolve(PATHS.demos.folders.root, folder);
//         fs.readdirSync(folderPath).forEach((file) => {
//             if (file.indexOf('.demo.js') > -1) {
//                 const name = path.basename(file, '.demo.js');
//                 staticPaths.push(name + '/index.html');
//             }
//         });
//     });

config.plugins.push(
    new StaticSiteGeneratorPlugin({
        //paths: staticPaths,
        entry: 'index',
        locals: {
            'variable': 'thing'
        }
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: "handlebars",
        minChunks: Infinity,
        async: 'handlebars.js'
    }),

);

config.module.rules.push(
    {
        test: /\.demo\.css$/,
        use: 'raw-loader'
    },
    {
        test: /\.demo\.js$/,
        use: [
        // {
        //     loader: 'bundle-loader',
        //     options: {
        //         lazy: true
        //     }
        // },
        {
            loader: 'babel-loader',
            options: {
                plugins: ["dynamic-import-node"]
            }
        }]
    }
);

module.exports = config;
