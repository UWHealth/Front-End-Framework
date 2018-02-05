/**
 * @fileoverview Starts webpack file watching and compilation. Compiles client-side JS and sample files.
 * Also handles webpack logging.
**/

const webpack = require('webpack');

const webpackConfigs = require('../webpack/combined.webpack.config.js');
const baseConfig = webpackConfigs[0];

const MODE = require('../tools/mode.js');
const STATS = require('../webpack/stats.webpack.config.js');
const LOG = require('../tools/logger.js');

const webpackLogger = function(err, stats, done, compiler) { //eslint-disable-line
    if (err) {
        new LOG('Webpack', err.stack || err).error();
        if (err.details) {
            new LOG('Webpack', err.details).error();
        }
    }
    else if (stats) {
        //stats = compiler.getStats();
        const info = stats.toJson("verbose");

        if (stats.hasWarnings()) {
            new LOG('Webpack warning', new Error(info.warnings)).info();
        }

        if (stats.hasErrors()) {
            //new LOG('Webpack', new Error(info.errors)).error();
            console.error(new Error(info.errors));
            return done();
        }

        new LOG('Webpack', stats.toString(STATS)).info();
    }

    done();
};

module.exports = (done) => {
    if (MODE.production && !MODE.local) {
        webpack(
            baseConfig,
            (err, stats) => webpackLogger(err, stats, done, webpack)
        );
    }
    else {
        webpackConfigs.forEach((config) => { config.watch = true; });

        webpack(
            webpackConfigs,
            (err, stats) => webpackLogger(err, stats, done, webpack)
        );

        // NOTE: Parallel webpack is great for performance,
        //  but has an issu with killing its own processes, causing massive cpu overhead.
        // If a project is large enough, this tradeoff might be worth it.
        // See https://github.com/trivago/parallel-webpack/issues/57

        // require('parallel-webpack').run(require.resolve('../webpack.combined.config.js'),
        //     {
        //         watch: true,
        //         silent: true,
        //         maxRetries: 1,
        //         stats: true, // defaults to false
        //         maxConcurrentWorkers: 2 // use 2 workers
        //     },
        //     done
        // );
    }
};
