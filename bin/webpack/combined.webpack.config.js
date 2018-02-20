/**
 * @fileoverview - provides all webpack configs at once.
**/

module.exports = [
    require('../../webpack.config.js'),
    require('./samples.webpack.config.js'),
    require('./demos.webpack.config.js')
];
