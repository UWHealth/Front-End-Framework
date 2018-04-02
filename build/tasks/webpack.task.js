/**
 * @fileoverview Starts webpack file watching and compilation. Compiles client-side JS and sample files.
 * Also handles webpack logging.
**/

const webpack = require('webpack');

const MODE = require('../tools/mode.js');
const STATS = require('../webpack/helpers/webpack-stats.js');
const Logger = require('../tools/logger.js');

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
                return LOG.error(name + ' ' + new Error(info.errors));
            }

            // if (stats.hasWarnings()) {
            //     LOG.info(name + ' Warning');
            //     return LOG.info(stats.toString('minimal'));
            // }

            const statsString = (!MODE.production) ?
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

    if (watching) {
        LOG.info('restarting', true);
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
