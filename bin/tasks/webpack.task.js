const webpack = require('webpack');
const parallelWebpack = require('parallel-webpack');

const baseConfig = require('../../webpack.config.js');
const sampleConfig = require('../webpack.samples.config.js');

const MODE = require('../helpers/mode.js');
const STATS = require('../webpack.stats.config.js');
const LOG = require('../helpers/logger.js');

const webpackLogger = function(err, stats, done) { //eslint-disable-line
    if (err) {
        new LOG('Webpack', err.stack || err).error();
        if (err.details) {
            new LOG('Webpack', err.details).error();
        }
    }
    else if (stats) {
        const info = stats.toJson("minimal");

        if (stats.hasWarnings()) {
            new LOG('Webpack warning', info.warnings).info();
        }

        if (stats.hasErrors()) {
            new LOG('Webpack', new Error(info.errors)).error();
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
            (err, stats) => webpackLogger(err, stats, done)
        );
    }
    else {
        baseConfig.watch = true;
        sampleConfig.watch = true;

        webpack(
            [
                baseConfig,
                sampleConfig

            ],
            (err, stats) => webpackLogger(err, stats, done)
        );

        // parallelWebpack.run(require.resolve('../webpack.combined.config.js'),
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
