/**
 * @fileoverview - Provides all webpack configs at once.
**/

const MODE = require('./tools/mode.js');


module.exports = (MODE.production && !MODE.localProduction) ?
    [require('./webpack/js.webpack.config.js')]
    :
    [
        require('./webpack/js.webpack.config.js'),
        require('./webpack/samples.webpack.config.js'),
        require('./webpack/demos.webpack.config.js')
    ];
