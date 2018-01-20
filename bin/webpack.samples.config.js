// import webpack from 'webpack';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
const fs = require('fs');
const path = require('path');
const cloneDeep = require('lodash.clonedeep');

// import MODE from './helpers/mode.js';
const PATHS = require('./paths.config.js');
const WP_CONFIG = require('../webpack.config.js');

const config = cloneDeep(WP_CONFIG);
config.context = path.resolve(__dirname);
config.entry = {
    base: PATHS.hbs.root + '__samples__/base.js'
};
config.output.filename = '[name].sample.js';
config.stats = {all: false};

const files = fs.readdirSync(PATHS.samples.root);

files.forEach((file) => {
    config.entry[file.replace('.js', '')] = path.resolve(PATHS.samples.root, file);
});

module.exports = [config, WP_CONFIG];
