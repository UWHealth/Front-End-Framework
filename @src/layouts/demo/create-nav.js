const glob = require('fast-glob');
const CWD = process.cwd();
const path = require('path');
const PATHS = require(`${CWD}/config/paths.config.js`);
const getPages = require(`${CWD}/build/helpers/get-pages.js`);

module.exports = ({ publicPath = '/', filePath = '', returnPages = false }) => {
    const pages = getPages(PATHS.pages.entry.src, PATHS.pages.folders.root);
    if (returnPages) {
        return {
            code: `module.exports = ${JSON.stringify(pages)}`,
            cacheable: false,
            dependencies: glob.sync(PATHS.pages.entry.src),
        };
    }
    return {
        code: `module.exports = ${JSON.stringify(pages)}`,
        cacheable: false,
        dependencies: glob.sync(PATHS.pages.entry.src),
    };
};
