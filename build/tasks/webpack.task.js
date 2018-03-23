/**
 * @fileoverview Starts webpack file watching and compilation. Compiles client-side JS and sample files.
 * Also handles webpack logging.
**/

const webpack = require('webpack');

const webpackConfigs = require('../webpack.build.js');

const MODE = require('../tools/mode.js');
const PATHS = require(`${process.cwd()}/config/paths.config.js`);
const logger = require('../tools/logger.js');

const compiler = webpack(webpackConfigs);
const LOG = new logger('Webpack');

const watchOptions = (MODE.local || !MODE.production) ? { poll: 1000, ignored: /node_modules/ } : null;
let watching = false;

const webpackLogger = function(err, stats, done) { //eslint-disable-line

    if (err) {
        LOG.error(err.stack || err);
        if (err.details) {
            LOG.error(err.details);
        }
    }
    else if (stats) {
        const statLogs = stats.stats !== undefined ? stats.stats : [stats];

        statLogs.forEach((stats) => {
            // Find the correct stat config
            const statsConfig = stats.compilation.compiler.options.stats;

            const info = stats.toJson();

            if (stats.hasErrors()) {
                LOG.error(new Error(info.errors));
                return;
            }

            if (stats.hasWarnings()) {
                console.log('warning');
                //new LOG('Webpack', info.warnings).info();
            }

            LOG.success('Compiled ' + stats.toString('minimal'));
            //LOG.info(stats.toString(statsConfig));
        });
    }

    done();
};

function startWebpack(done) {
    if (watching) {
        LOG.info('restarting', true);
        watching.close(() => {
            watching = false;
            startWebpack(done);
        });
    }
    else {
        LOG.spinner('Compiling\n');
        if (watchOptions) {
            watching = compiler.watch(watchOptions, (err, stats) => webpackLogger(err, stats, done));
        }
        else {
            compiler.run((err, stats) => webpackLogger(err, stats, done));
        }
    }
}

module.exports = startWebpack;

// module.exports = (done) => {
//     startWebpack(compiler, watchOptions, done);


    // const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
    // const compiler = webpack(webpackConfigs);
    //
    // compiler.apply(new FriendlyErrorsWebpackPlugin({
    //     compilationSuccessInfo: {
    //         // messages: ['You application is running here http://localhost:3000'],
    //         // notes: ['Some additional notes to be displayed unpon successful compilation']
    //     },
    //     onErrors: function (severity, errors) {},
    //     // default is true
    //     clearConsole: false,
    //     additionalFormatters: [],
    //     additionalTransformers: []
    //
    // }));
    //
    // compiler.run(() => done());

    // NOTE: Parallel webpack is great for performance,
    //  but has an issue with killing its own processes, causing very expensive memory leaks.
    // If a project is large enough, this tradeoff might be worth it.
    // See https://github.com/trivago/parallel-webpack/issues/57

    // require('parallel-webpack').run(require.resolve('../webpack/webpack.combined.config.js'),
    //     {
    //         watch: true,
    //         silent: true,
    //         maxRetries: 1,
    //         stats: true, // defaults to false
    //         maxConcurrentWorkers: 2 // use 2 workers
    //     },
    //     done
    // );
// };
