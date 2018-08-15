/**
 * @fileoverview Starts webpack file watching and compilation. Compiles client-side JS and sample files.
 * Also handles webpack logging.
 **/

const webpack = require('webpack');
const fs = require('fs');
const path = require('path');

const PATHS = require(`${process.cwd()}/config/paths.config.js`);
const MODE = require('../helpers/mode.js');
const STATS = require('../webpack/helpers/webpack-stats.js');
const Logger = require('../helpers/logger.js');
const ARGS = require('../helpers/args.js');

const LOG = new Logger('Webpack');

const watchOptions =
    MODE.localProduction || !MODE.production
        ? { poll: 1000, ignored: /node_modules/ }
        : null;

let watching = false;

function startWebpack(done) {
    // Write out a temporary manifest so we can avoid errors on startup
    const folders = path
        .relative(PATHS.folders.dist, PATHS.js.dest)
        .replace(/\\/g, '/')
        .split('/');

    folders.reduce((prev, folder) => {
        try {
            fs.mkdirSync(path.join(prev, folder));
        } catch (e) {} // eslint-disable-line
        return path.join(prev, folder);
    }, PATHS.folders.dist);

    fs.writeFileSync(PATHS.demos.entry.manifest, '{}');

    const webpackConfigs = require('../webpack.build.js');
    const compiler = webpack(webpackConfigs);

    // Restart if already watching
    if (watching) {
        LOG.info('Restarted', true);
        watching.close(() => {
            watching = false;
            startWebpack(done);
        });
    } else {
        if (watchOptions) {
            compiler.hooks.watchRun.tap('Log Compilation', () => {
                LOG.spinner('Compiling');
                return true;
            });

            watching = compiler.watch(watchOptions, (err, stats) =>
                webpackLogger(err, stats, done)
            );
        } else {
            LOG.spinner('Compiling');
            compiler.run((err, stats) => webpackLogger(err, stats, done));
        }
    }
}

/* eslint-disable-next-line */
function webpackLogger(err, stats, done) {
    if (err) {
        LOG.error(err.stack || err);
        if (err.details) {
            LOG.error(err.details);
        }
    } else if (stats) {
        const statLogs = stats.stats !== undefined ? stats.stats : [stats];

        statLogs.forEach((stats) => {
            // Find the correct stat config, and get its name
            const name = '(' + stats.compilation.compiler.options.name + ')';

            const info = stats.toJson();

            if (stats.hasErrors()) {
                debugger;
                return info.errors.forEach((err) => {
                    if (!MODE.production && !ARGS.stats) {
                        const errArray = err.split('\n');
                        err =
                            errArray[0] +
                            '\n' +
                            errArray[1] +
                            '\n' +
                            errArray[2];
                    }
                    LOG.error(name + err);
                });
            }

            if (stats.hasWarnings()) {
                LOG.info(name + ' Warning');
                return LOG.info(stats.toString('minimal'));
            }

            const statsString =
                !MODE.production && !ARGS.stats
                    ? `${stats
                          .toString('minimal')
                          .replace(/\s+(\d*)(.*)/, ` $1 ${name}$2 `)}`
                    : stats.toString(STATS());

            return LOG.success('Compiled' + statsString);
        });
    }

    if (typeof done === 'function') done();
}

module.exports = startWebpack;
