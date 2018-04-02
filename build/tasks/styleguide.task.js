const styleguide   = require('markdown-documentation-generator');

const Logger       = require('../tools/logger.js');
const PATHS        = require(`${process.cwd()}/config/paths.config.js`);
const SG_CONFIG    = require(PATHS.styleGuide.entry.config);

const LOG = new Logger('Style Guide');

module.exports = () =>
    styleguide
        .create(SG_CONFIG)
        .catch(LOG.error);
