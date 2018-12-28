/**
 * @fileoverview Starts webpack file watching and compilation. Compiles client-side JS and sample files.
 * Also handles webpack logging.
 **/

const fs = require('fs');
const path = require('path');

const customMiddleware = require('../helpers/webpack-middleware.js');
const webpackLogger = require('../helpers/webpack-logger.js');

const CWD = process.cwd();
const PATHS = require(`${CWD}/config/paths.config.js`);
const MODE = require(`${CWD}/build/helpers/mode.js`);
const Logger = require(`${CWD}/build/helpers/logger.js`);
const LOG = new Logger('Webpack');

const webpack = require('webpack');
const webpackConfigs = require(`${CWD}/build/webpack.build.js`);

module.exports.devMiddleware = {
    invalidate: () => null,
};

module.exports.restart = function(done) {
    LOG.info('Restarting...');
    // Invalidate webpack-dev-middleware
    module.exports.devMiddleware.invalidate();
    return done;
};

module.exports.start = function startWebpack(runImmediately, done) {
    // Create webpack compiler instance
    const compiler = webpack(webpackConfigs);

    // Write out a temporary manifest (if needed), so we can avoid errors on startup
    if (!fs.existsSync(PATHS.demos.entry.manifest)) {
        const folders = createManifestFolders(PATHS.demos.entry.manifest);
        fs.writeFileSync(
            PATHS.demos.entry.manifest,
            `{ "initial":["runtime.bundle.js", "main.js"],` +
                `"folders":"${folders}"}`
        );
    }

    // Allow for immediate run (essentially, non-watch mode)
    // Primarily used for --production mode
    if (runImmediately || (!MODE.local && MODE.production)) {
        LOG.spinner('Compiling');
        compiler.run((err, stats) => webpackLogger(LOG, err, stats, done));
    } else {
        const middleware = () => {
            let firstRun = true;
            const middleware = customMiddleware(webpack(webpackConfigs[0]), webpack(webpackConfigs[1]), LOG);

            // Expose webpack-dev-middleware
            module.exports.devMiddleware = middleware[0];

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

        return {
            middleware,
            compiler,
        };
    }
};

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
