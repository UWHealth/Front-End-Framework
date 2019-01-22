const glob = require('fast-glob');
const path = require('path');
const PATHS = require(process.cwd() + '/config/paths.config.js');
const files = glob.sync(PATHS.demos.entry.src);
const links = [];

module.exports = ({ publicPath, filePath }) => {
    files.forEach((file) => {
        const filename = path.basename(file, '.demo.html');
        links.push([filename + 's', publicPath + filePath + filename]);
    });
    return {
        code: `module.exports = ${JSON.stringify(links)}`,
        cacheable: false,
        dependencies: files,
    };
};
