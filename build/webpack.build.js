/**
 * @fileoverview - Provides all webpack configs at once.
 **/

const MODE = require('./helpers/mode.js');

module.exports = !MODE.production
    ? // DEV
      [
          require('./tasks/webpack/js.webpack.config.js'),
          require('./tasks/webpack/demos.webpack.config.js'),
      ]
    : // PROD/LOCAL PROD
      [
          require('./tasks/webpack/js.webpack.config.js'),
          require('./tasks/webpack/demos.webpack.config.js'),
          require('./tasks/webpack/t4.webpack.config.js'),
      ];
