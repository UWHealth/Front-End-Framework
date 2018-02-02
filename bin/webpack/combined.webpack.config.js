/**
 * @fileoverview - provides all webpack configs at once.
**/

const baseConfig = require('../../webpack.config.js');
const sampleConfig = require('./samples.webpack.config.js');
const demosConfig = require('./demos.webpack.config.js');

module.exports = [baseConfig, sampleConfig, demosConfig];
