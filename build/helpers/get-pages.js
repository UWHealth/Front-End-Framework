const path = require('path');
const glob = require('fast-glob');
const PATHS = require(`${process.cwd()}/config/paths.config.js`);

function getPages({
    files = PATHS.pages.entry.src,
    context = PATHS.pages.folders.root,
}) {
    const pages = {};
    glob.sync(files).forEach((file) => {
        let is_index = true; // Assume index
        let folder = path.posix.dirname(path.relative(context, file)) || '';
        if (folder === '.' || folder === '') {
            pages['index.html'] = {
                basename: 'index',
                path: '/index.html',
                file: '@src/pages/index.html',
            };
        }
        let ext = path.extname(file);
        let basename = path.basename(file, ext);
        process.stdout.write('basename', basename);
        if (basename !== 'index') {
            folder = path.posix.join(folder, basename);
            is_index = false;
        }
        if(folder === '.') folder = '';
        const pagePath = path.posix.join(folder, 'index.html');
        pages[pagePath] = {
            basename,
            path: pagePath,
            file: path.posix.relative(context, file),
            folder,
            is_index,
            ext
        };
    });

    return pages;
}

module.exports = getPages;

// function walk(dir, parent_segments, ) {
//     const items = fs
//         .readdirSync(dir)
//         .map((basename) => {
//             const resolved = path.join(dir, basename);
//             const file = path.relative(cwd, resolved);
//             const is_dir = fs.statSync(resolved).isDirectory();

//             const ext = path.extname(basename);
//             if (!is_dir && !/^\.[a-z]+$/i.test(ext)) return null; // filter out tmp files etc

//             const is_index = is_dir ? false : basename.startsWith('index.');
//             const is_page = component_extensions.indexOf(ext) !== -1;

//             return {
//                 basename,
//                 ext,
//                 file: posixify(file),
//                 is_dir,
//                 is_index,
//                 is_page,
//             };
//         })
//         .filter(Boolean);

//     items.forEach((item) => {
//         if (item.basename[0] === '_') return;
//         if (item.basename[0] === '.') return;

//         if(item.is_dir) {
//             const
//         }
//     });
// }

// function posixify(str) {
//     return str.replace(/\\/g, '/');
// }
