/**
 * @fileoverview - provides all webpack configs at once.
**/

const baseConfig = require('../webpack.config.js');
const sampleConfig = require('./webpack.samples.config.js');

module.exports = [baseConfig, sampleConfig];
