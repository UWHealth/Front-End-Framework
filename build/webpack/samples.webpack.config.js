/**
 * @fileoverview - Webpack configuration for generating sample/demo pages. Uses ./webpack.config.js as a base. Saves all files to dist/samples/
**/

const htmlConfig = require('../tools/webpack-html-configurator.js');
const PATHS = require("../../config/paths.config.js");

const config = htmlConfig({
    src: PATHS.samples.entry.all,
    template: PATHS.samples.entry.template,
    dest: PATHS.samples.dest,
    nameSpace: "sample",
    sourceExtension: ".sample.js",
    baseConfig: require('../../webpack.config.js')
});

module.exports = config;
