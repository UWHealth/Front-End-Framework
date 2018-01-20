import webpack from 'webpack';
import parallelWebpack from 'parallel-webpack';

import webpackConfig from '../../webpack.config.js';
import webpackConfig2 from '../webpack.samples.config.js';

import MODE from '../helpers/mode.js';
import STATS from '../webpack.stats.config.js';

const webpackLogger = function(err, stats, done) { //eslint-disable-line
    if (err) {
        console.log(err.stack || err);
        if (err.details) {
            console.log(err.details);
        }
        return;
    }

    // const info = stats.toJson(STATS);
    //
    // if (stats.hasErrors()) {
    //     console.log(info.errors);
    // }
    //
    // if (stats.hasWarnings()) {
    //     console.warn(info.warnings);
    // }
    //
    // console.log(stats.toString(STATS));

    done();
};

export default (done) => {
    if (MODE.production && !MODE.local) {
        webpack(
            webpackConfig,
            (err, stats) => webpackLogger(err, stats, done)
        );
    }
    else {
        // webpack(
        //     webpackConfig2,
        //     (err, stats) => webpackLogger(err, stats, done)
        // );
        parallelWebpack.run(require.resolve('../webpack.samples.config.js'),
            {
                watch: false,
                maxRetries: 1,
                stats: true, // defaults to false
                maxConcurrentWorkers: 2 // use 2 workers
            },
            (err, stats) => webpackLogger(err, stats, done)
        );
    }
};
