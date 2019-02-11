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

function restart() {
    LOG.info('Restarting...');
    delete require.cache[require.resolve('../helpers/webpack-middleware.js')];
    delete require.cache[require.resolve(`${CWD}/build/webpack.build.js`)];
    // Invalidate webpack-dev-middleware
    devMiddleware();
};

function runImmediately(done) {
    LOG.spinner('Compiling');
    webpack(webpackConfigs).run((err, stats) =>
        webpackLogger(LOG, err, stats, done)
    );
}

function startWebpack(done) {
    // Create webpack compiler instance

    // Write out a temporary manifest (if needed), so we can avoid errors on startup
    // if (!fs.existsSync(PATHS.demos.entry.manifest)) {
    //     const folders = createManifestFolders(PATHS.demos.entry.manifest);
    //     fs.writeFileSync(
    //         PATHS.demos.entry.manifest,
    //         `{ "initial":["runtime.bundle.js", "main.js"],` +
    //             `"folders":"${folders}"}`
    //     );
    // }

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

            // compiler.hooks.watchRun.tap('Log Compilation', () => {
            //     if (firstRun) {
            //         LOG.info('Started');
            //         firstRun = false;
            //     } else {
            //         LOG.spinner('Compiling');
            //     }
            // });

            return middleware;
        };
    }
};

module.exports = startWebpack;
module.exports.run = runImmediately;
module.exports.restart = restart;

/**
 * Creates the folders for the manifest in case they don't already exist.
 * This is necessary since you Node's fs.writeFile doesn't create a file
 *  unless folders the folders already exist.
 * @returns {Array} folders
 */
function createManifestFolders(pathToManifest) {
    const folders = path.dirname(pathToManifest);
    try {
        return fs.mkdirSync(folders, { recursive: true });
    } catch (e) {
        return folders;
    }
}
