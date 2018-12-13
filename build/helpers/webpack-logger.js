const CWD = process.cwd();
const MODE = require(`${CWD}/build/helpers/mode.js`);
const STATS = require(`${CWD}/build/helpers/webpack-stats.js`);

/* eslint-disable complexity */
/**
 * Handles webpack logging, keeping it simple
 * But also giving more info in --production mode
 */
module.exports = function(LOG, err, stats, done) {
    const ARGS = require(`${CWD}/build/helpers/args.js`);

    if (err) {
        LOG.error(err.stack || err);
        if (err.details) {
            LOG.error(err.details);
        }
    } else if (stats) {
        // Make sure stats come in array form
        const normalizedStats =
            stats.stats !== undefined ? stats.stats : [stats];

        normalizedStats.forEach((stats) => {
            // Find the correct stat config, and get its name
            const name = '(' + stats.compilation.compiler.options.name + ')';

            const info = stats.toJson({ errorDetails: true });

            if (stats.hasErrors()) {
                return info.errors.forEach((err) => {
                    // Show the first 5 lines of an error
                    // in non stats mode
                    if (!MODE.production && !ARGS.stats) {
                        const errArray = err.split('\n');
                        err =
                            errArray[0] +
                            '\n' +
                            errArray[1] +
                            '\n' +
                            errArray[2];
                        err += (errArray[3] && '\n' + errArray[3]) || '';
                        err += (errArray[4] && '\n' + errArray[4]) || '';
                    }
                    LOG.error(name + ' ' + err);
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
                          .replace(/\s+(\d*)(.*)/, `$1 ${name}$2 `)}`
                    : stats.toString(STATS());

            LOG.success('Compiled ' + statsString);
        });
    }
    if (typeof done === 'function') done();
};
