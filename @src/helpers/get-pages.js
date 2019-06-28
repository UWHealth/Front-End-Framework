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

        // File normalization:
        // Add non-index file names to the end of the folder path
        // path/button.html => path/button/
        if (basename !== 'index') {
            folder = path.posix.join(folder, basename);
            is_index = false;
        }

        // Folders identified as '.' mean root
        // We don't need a folder name in that case
        folder = folder === '.' ? '' : folder;

        // Append index.html to the normalized folder path
        const pagePath = path.posix.join(folder, 'index.html');

        // Error check
        if (pages[pagePath]) {
            const pageFolder = folder || pagePath;
            console.warn(
                new Error(
                    `Warning: Duplicate pages named "${pagePath}". This is likely caused by having both a folder named "${pageFolder}" and a file named "${pageFolder}.svelte."\n` +
                        `Only one of the files will be generated.`
                )
            );
        }

        // Add details to pages object
        pages[pagePath] = {
            path: pagePath,
            file: path.posix.relative(context, file),
            folder,
            basename,
            route: folder,
            is_index,
            ext,
        };
    });

    return pages;
}

module.exports = getPages;
