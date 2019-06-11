const glob = require('fast-glob');
const CWD = process.cwd();
const PATHS = require(`${CWD}/config/paths.config.js`);
const getPages = require(`./get-pages.js`);

module.exports = ({ publicPath = '/', filePath = '' }) => {
    filePath = filePath || PATHS.pages.entry.src;
    const pages = getPages(PATHS.pages.entry.src, PATHS.pages.folders.root);
    //console.log('CREATE NAV', pages);
    //console.log(glob.sync(PATHS.pages.entry.src));
    return {
        code: `module.exports = ${JSON.stringify(pages)}`,
        cacheable: false,
        dependencies: glob
            .sync(PATHS.pages.entry.array)
            .concat([
                `${CWD}/config/paths.config.js`,
                `${CWD}/build/helpers/get-pages.js`,
            ]),
    };
};
