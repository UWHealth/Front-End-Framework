const del = require('del');
const path = require('path');
const Logger = require('../helpers/logger.js');
const PATHS = require(`${process.cwd()}/config/paths.config.js`);
const ARGS = require('../helpers/args.js');
const MODE = require('../helpers/mode.js');

/**
 * Delete the files in PATHS.clean.entry and (optionally) PATHS.cache
 * @param {Function} done - Gulp task "done" function
 */
module.exports = function(done) {
    const LOG = new Logger('Clean');
    LOG.spinner('deleting ./dist contents');

    let paths = PATHS.clean.entry.array;
    paths =
        ARGS.cache || MODE.production
            ? paths.concat([PATHS.folders.cache + '/*'])
            : paths;

    return del(paths)
        .then(() => {
            paths = paths.map(
                (p) => path.relative(PATHS.folders.root, p) + ' '
            );
            LOG.success(paths + 'deleted.');
            return done;
        })
        .catch((err) => {
            if (err.code === 'EPERM' || err.code === 'EACCES') {
                LOG.info(
                    'Cannot clean ' +
                        paths +
                        ' due to permissions. Make sure the folder or its contents is not open by another program or process.',
                    true
                );
            }
            LOG.error(err);
        });
};

/**
 * Delete specific files
 * @param {Array} fileArray - Array of files or folders to delete
 * @param {Function} callback - Called after deletion
 */
module.exports.specific = function(fileArray, callback) {
    const LOG = new Logger('Clean');
    return del(fileArray)
        .then(() => {
            callback();
        })
        .catch((err) => {
            if (err.code === 'EPERM' || err.code === 'EACCES') {
                LOG.info(
                    'Cannot clean ' +
                        fileArray +
                        ' folder due to permissions. Make sure the folder or its contents is not open by another program or process.',
                    true
                );
            }
            LOG.error(err);
            callback();
        });
};
