/**
 * @fileoverview Starts webpack file watching and compilation. Compiles client-side JS and sample files.
 * Also handles webpack logging.
**/

const webpack = require('webpack');

const MODE = require('../tools/mode.js');
const STATS = require('../webpack/helpers/webpack-stats.js');
const Logger = require('../tools/logger.js');
const ARGS = require('../tools/args.js');

const LOG = new Logger('Webpack');

const webpackLogger = function(err, stats, done) { // eslint-disable-line

    if (err) {
        LOG.error(err.stack || err);
        if (err.details) {
            LOG.error(err.details);
        }
    }
    else if (stats) {
        const statLogs = stats.stats !== undefined ? stats.stats : [stats];

        statLogs.forEach((stats) => {
            // Find the correct stat config, and get its name
            const name = '(' + stats.compilation.compiler.options.name + ')';

            const info = stats.toJson();

            if (stats.hasErrors()) {
                return info.errors.forEach(err => {
                    LOG.error(name + err);
                });
            }

            // if (stats.hasWarnings()) {
            //     LOG.info(name + ' Warning');
            //     return LOG.info(stats.toString('minimal'));
            // }

            const statsString = (!MODE.production && !ARGS.stats) ?
                `${stats.toString('minimal').replace(/\s+(\d*)(.*)/, ` $1 ${name}$2 `)}`
                :
                stats.toString(STATS());


            return LOG.success('Compiled' + statsString);
        });
    }

    if (typeof done === 'function') done();
};


const watchOptions = (MODE.localProduction || !MODE.production) ?
    { poll: 1000, ignored: /node_modules/ }
    : null;

let watching = false;

function startWebpack(done) {
    const webpackConfigs = require('../webpack.build.js');
    const compiler = webpack(webpackConfigs);

    // Restart if already watching
    if (watching) {
        LOG.info('Restarted', true);
        watching.close(() => {
            watching = false;
            startWebpack(done);
        });
    }
    else {

        if (watchOptions) {
            compiler.hooks.watchRun.tap('Log Compilation', () => {
                LOG.spinner('Compiling');
                return true;
            });

            watching = compiler.watch(watchOptions, (err, stats) => webpackLogger(err, stats, done));
        }
        else {
            LOG.spinner('Compiling');
            compiler.run((err, stats) => webpackLogger(err, stats, done));
        }
    }
}

module.exports = startWebpack;
