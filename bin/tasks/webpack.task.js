const webpack = require('webpack');
const parallelWebpack = require('parallel-webpack');

const base_config = require('../../webpack.config.js');
const sample_config = require('../webpack.samples.config.js');

const MODE = require('../helpers/mode.js');
const STATS = require('../webpack.stats.config.js');

const webpackLogger = function(err, stats, done) { //eslint-disable-line
    if (err) {
        console.log(err.stack || err);
        if (err.details) {
            console.log(err.details);
        }
        return;
    }

    if (stats) {
        const info = stats.toJson();

        if (stats.hasErrors()) {
            if (Array.isArray(info.errors)) {
                info.errors.forEach((error) => {
                    console.error(error);
                });
            }
            else {
                console.error(info.error);
            }
        }

        console.log(stats.toString(STATS));
    }

    done();
};

module.exports = (done) => {
    if (MODE.production && !MODE.local) {
        webpack(
            base_config,
            (err, stats) => webpackLogger(err, stats, done)
        );
    }
    else {
        base_config.watch = true;
        sample_config.watch = true;

        webpack(
            [
                base_config,
                sample_config

            ],
            (err, stats) => webpackLogger(err, stats, done)
        );

        // parallelWebpack.run(require.resolve('../webpack.combined.config.js'),
        //     {
        //         watch: true,
        //         maxRetries: 1,
        //         stats: true, // defaults to false
        //         maxConcurrentWorkers: 2 // use 2 workers
        //     },
        //     (err) => webpackLogger(err, undefined, done)
        // );
    }
};
