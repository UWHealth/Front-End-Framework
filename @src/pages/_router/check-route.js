const pages = require(`val-loader?{"returnPages": true}!@/helpers/create-nav.js`);

export default function(path) {
    //console.log('PAGES\n', pages, '\nPATH\n', path);
    path = path.replace('.svelte', '.html');
    if (path.indexOf('index.html') < 0) {
        if (path.substring(path.length - 1) !== '/') {
            path += '/';
        }
        path += 'index.html';
    }
    path = path.indexOf('/') === 0 ? path.replace('/', '') : path;

    //console.log('evaledPages', pages, path);
    if (!pages[path]) return false;

    const file = pages[path].file.replace('.html', '').replace('.svelte', '');
    let folder = pages[path].folder;
    let root_offset = 0;

    //console.log(pages[path]);
    if (folder === '.') {
        folder = 'pages/';
        root_offset = folder.length;
    }

    let folder_index = file.indexOf(folder) + root_offset;
    const page = file.substring(folder_index);

    //console.log(page);

    return page;
}
