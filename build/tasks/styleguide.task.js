const styleguide = require('markdown-documentation-generator');

const Logger = require('../helpers/logger.js');
const PATHS = require(`${process.cwd()}/config/paths.config.js`);
const SG_CONFIG = require(PATHS.styleGuide.entry.config);

module.exports = () => {
    return styleguide.create(SG_CONFIG).catch(() => null);
};
