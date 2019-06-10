/**
 * @fileoverview Starts webpack file watching and compilation. Compiles client-side JS and sample files.
 * Also handles webpack logging.
 **/

const fs = require('fs');
const path = require('path');
const CWD = process.cwd();

const customMiddleware = require(`${CWD}/build/helpers/middleware.js`);
const webpackLogger = require(`${CWD}/build/helpers/webpack-logger.js`);

const PATHS = require(`${CWD}/config/paths.config.js`);
const MODE = require(`${CWD}/build/helpers/mode.js`);
const Logger = require(`${CWD}/build/helpers/logger.js`);
const LOG = new Logger('Webpack');

const webpack = require('webpack');
const webpackConfigs = require(`${CWD}/build/webpack.build.js`);

let devMiddleware = {
    invalidate: () => null,
};

function runImmediately(done) {
    webpack(webpackConfigs).run((err, stats) =>
        webpackLogger(LOG, err, stats, done)
    );
}

function startWebpack(done) {
    // Allow for immediate run (essentially, non-watch mode)
    // Primarily used for --production mode
    if (!MODE.local && MODE.production) {
        runImmediately(done);
    } else {
        return () => {
            // let firstRun = true;
            const middleware = customMiddleware(
                webpack(webpackConfigs[0]),
                webpack(webpackConfigs[1]),
                LOG
            );

            // Expose webpack-dev-middleware
            devMiddleware = middleware[1];

            return middleware;
        };
    }
};

function restart() {
    LOG.info('Restarting...');
    delete require.cache[require.resolve('../helpers/webpack-middleware.js')];
    delete require.cache[require.resolve(`${CWD}/build/webpack.build.js`)];
    // Invalidate webpack-dev-middleware
    devMiddleware();
};

module.exports = startWebpack;
module.exports.create = startWebpack;
module.exports.run = runImmediately;
module.exports.restart = restart;
