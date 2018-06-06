/**
 * @fileoverview - Provides all webpack configs at once.
 **/

const MODE = require('./helpers/mode.js');

module.exports =
    MODE.production && !MODE.localProduction
        ? [
              require('./webpack/js.webpack.config.js'),
              require('./webpack/demos.webpack.config.js'),
              require('./webpack/t4.webpack.config.js'),
          ]
        : [
              require('./webpack/js.webpack.config.js'),
              require('./webpack/demos.webpack.config.js'),
              require('./webpack/t4.webpack.config.js'),
          ];
