/**
 * @fileoverview - Webpack configuration for generating sample/demo pages. Uses ./webpack.config.js as a base. Saves all files to dist/samples/
**/

const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

const fs = require('fs');
const path = require('path');
const cloneDeep = require('lodash.clonedeep');

const PATHS = require('../paths.config.js');
const WP_CONFIG = require('../../webpack.config.js');

const config = cloneDeep(WP_CONFIG);

config.context = __dirname;
config.output.path = PATHS.samples.dest;
config.output.publicPath = '/' + path.relative(PATHS.root.dist, PATHS.samples.dest) + '/';
config.entry = {};
config.devtool = 'none';
config.output.filename = '[name].sample.js';
config.output.library = 'sample';

const staticPaths = [];

fs.readdirSync(PATHS.samples.folders.root)
    .forEach((file) => {
        if (path.extname(file) === '.js') {
            const name = path.basename(file, '.js');
            config.entry[name + '/' + name] = path.resolve(PATHS.samples.folders.root, file);
            staticPaths.push(name + '/index.html');
        }
    });

config.plugins.push(
    new StaticSiteGeneratorPlugin({
        paths: staticPaths,
        locals: {
            'variable': 'thing'
        }
    })
);

config.module.rules.push({
    test: /\.demo\.css$/,
    use: 'raw-loader'
});

module.exports = config;
