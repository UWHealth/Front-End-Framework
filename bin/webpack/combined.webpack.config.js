/**
 * @fileoverview - Provides all webpack configs at once.
**/

const MODE = require('../tools/mode.js');


module.exports = (MODE.production && !MODE.localProduction) ?
    [require('./js.webpack.config.js')]
    :
    [
        require('./js.webpack.config.js'),
        require('./samples.webpack.config.js'),
        require('./demos.webpack.config.js')
    ];
