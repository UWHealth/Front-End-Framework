const del          = require('del');
const Logger       = require('../tools/logger.js');
const PATHS        = require(`${process.cwd()}/config/paths.config.js`);

const LOG = new Logger('Clean');

module.exports = function(done) {
    LOG.spinner('deleting ./dist contents');

    return del(PATHS.clean.entry.array)
        .then(() => {
            LOG.success('./dist contents deleted.');
            return done;
        })
        .catch((err) => {
            if (err.code === 'EPERM' || err.code === 'EACCES') {
                LOG.info('Cannot clean "dist" folder due to permissions. Make sure the folder or its contents is not open by another program or process.');
            }
            LOG.error(err);
        });
};
