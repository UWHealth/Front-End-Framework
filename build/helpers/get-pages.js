const fs = require('fs');
const path = require('path');
const glob = require('fast-glob');

function getPages(files, context) {
    const entries = {};
    glob.sync(files).forEach((file) => {
        let is_index = true; // Assume index
        let folder = path.posix.dirname(path.relative(context, file)) || '';
        let ext = path.extname(file);
        let basename = path.basename(file, ext);
        if (basename !== 'index') {
            folder = path.posix.join(folder, basename);
            is_index = false;
        }
        const entryName = path.posix.join(folder, 'index.html');
        entries[entryName] = {
            basename,
            file,
            folder,
            is_index,
        };
    });

    return entries;
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
