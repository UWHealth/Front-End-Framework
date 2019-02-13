const glob = require('fast-glob');
const CWD = process.cwd();
const path = require('path');
const PATHS = require(`${CWD}/config/paths.config.js`);
const files = glob.sync(PATHS.pages.folders.root + '/demos/*.html');
const links = [];
const getPages = require(`${CWD}/build/helpers/get-pages.js`);

module.exports = ({ publicPath = '/', filePath = '', returnPages = false }) => {
    if (returnPages) {
        const pages = getPages(PATHS.pages.entry.src, PATHS.pages.folders.root);
        return {
            code: `module.exports = ${JSON.stringify(pages)}`,
            cacheable: false,
            dependencies: glob.sync(PATHS.pages.entry.src),
        };
    }
    files.forEach((file) => {
        const filename = path.basename(file, path.extname(file));
        links.push([filename + 's', publicPath + filePath + filename]);
    });
    return {
        code: `module.exports = ${JSON.stringify(links)}`,
        cacheable: false,
        dependencies: files,
    };
};
