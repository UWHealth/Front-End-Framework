const path = require('path');
const glob = require('fast-glob');
const PATHS = require(`${process.cwd()}/config/paths.config.js`);

/**
 * Gather markup from a folder and create a data structure that can be used
 * in client (components) or server routes
 * @param {Object} options
 * @param {String|Array} options.files [PATHS.pages.entry.src] - glob of svelte/html files to gather
 * @param {String} options.context [PATHS.pages.folders.root] - path that should be used for returning path.relative calls.
 * @returns {Object} - An object containing keys based on relative paths, with nested objects describing those keys.
 *
 * @example
 *  let pages = getPages({
 *   files: ['pages/index.html', 'pages/foo.html', 'pages/bar/index.html'],
 *   content: 'pages'}
 *  );
 *  pages === {
 *   'index.html': { basename, path, file, folder, is_index, ext},
 *   'foo/index.html': { ... }
 *   'bar/index.html': { ... }
 * };
 */
function getPages({
    files = PATHS.pages.entry.src,
    context = PATHS.pages.folders.root,
}) {
    const pages = {};
    // eslint-disable-next-line complexity
    glob.sync(files).forEach((file) => {
        let is_index = true; // Assume index
        let folder = path.posix.dirname(path.relative(context, file)) || '';
        let ext = path.extname(file);
        let basename = path.basename(file, ext);

        // Create root index.html file
        if (folder === '.' || folder === '') {
            pages['index.html'] = {
                basename: 'index',
                path: '/index.html',
                file: `${PATHS.pages.folders.root}/${file}`,
                route: 'button',
                folder: 'button',
                is_index: true,
                ext,
            };
        }

        // File normalization: Remove index.html
        if (basename !== 'index') {
            folder = path.posix.join(folder, basename);
            is_index = false;
        }

        folder = folder === '.' ? '' : folder;

        const pagePath = path.posix.join(folder, 'index.html');

        if (pages[pagePath]) {
            console.warn(
                `Warning: Duplicate pages named "${pagePath}". This is likely caused by having both a folder named "${folder}" and a file named "${folder}.svelte."\n` +
                    `Only one of the files will be generated.`
            );
        }

        pages[pagePath] = {
            basename,
            path: pagePath,
            file: path.posix.relative(context, file),
            route: folder,
            folder,
            is_index,
            ext,
        };
    });

    return pages;
}

module.exports = getPages;
