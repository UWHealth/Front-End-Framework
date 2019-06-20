const glob = require('fast-glob');
const CWD = process.cwd();
const PATHS = require(`${CWD}/config/paths.config.js`);
const getPages = require(`./get-pages.js`);

/**
 * Meant as a wrapper for get-pages.js, to be used through val-loader.
 * Since this function relies on the file system and imports configuration files, it should only be loaded through a build step and never included in a client bundle.
 * @link https://github.com/webpack-contrib/val-loader#return-object-properties
 */
module.exports = (options) => {
    const pages = getPages(
        Object.assign(
            {
                files: PATHS.pages.entry.all,
                context: PATHS.pages.folders.root,
            },
            options
        )
    );

    return {
        code: `module.exports = ${JSON.stringify(pages)}`,
        cacheable: false,
        dependencies: glob
            .sync(PATHS.pages.watch.array)
            .concat([
                `${CWD}/config/paths.config.js`,
                `${CWD}/@src/helpers/get-pages.js`,
            ]),
    };
};
