/**
 * @fileoverview - Provides all webpack configs at once.
 **/

const MODE = require('./helpers/mode.js');

module.exports = !MODE.production
    ? // DEV
      [
          require('./webpack/client.webpack.config.js'),
          require('./webpack/server.webpack.config.js'),
      ]
    : // PROD/LOCAL PROD
      [
          require('./webpack/client.webpack.config.js'),
          require('./webpack/server.webpack.config.js'),
          //require('./tasks/webpack/t4.webpack.config.js'),
      ];
