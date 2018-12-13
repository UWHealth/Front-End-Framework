const glob = require('fast-glob');
const path = require('path');
const PATHS = require(process.cwd() + '/config/paths.config.js');
const files = glob.sync(PATHS.demos.entry.src);
const links = [];
files.forEach((file) => {
    const filename = path.basename(file, '.demo.html');
    links.push([filename + 's', '/demo/' + filename]);
});

module.exports = () => ({
    code: `module.exports = ${JSON.stringify(links)}`,
    cacheable: false,
});
