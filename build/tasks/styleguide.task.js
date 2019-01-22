const styleguide = require('markdown-documentation-generator');

const Logger = require('../helpers/logger.js');
const PATHS = require(`${process.cwd()}/config/paths.config.js`);
const SG_CONFIG = require(PATHS.styleGuide.entry.config);

const LOG = new Logger('Style Guide');

module.exports = () => {
    try {
        return styleguide.create(SG_CONFIG).catch(LOG.error);
    } catch(e) {
        return LOG.error(e);
    }
};
