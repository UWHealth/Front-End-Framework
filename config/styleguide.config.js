const PATHS = require('./paths.config.js');
const SG = PATHS.styleGuide.entry;
const path = require('path');

module.exports = {
    rootFolder: PATHS.folders.src,
    sgComment: 'SG',
    exampleIdentifier: 'html_example',
    sortCategories: true,
    excludeDirs: ['node_modules', '.git', 'dist'],
    fileExtensions: {
        scss: true,
        sass: false,
        css: false,
        md: true,
    },
    templateFile: SG.templateFile,
    themeFile: SG.themeFile,
    htmlOutput: path.resolve(PATHS.styleGuide.dest),
    jsonOutput: path.resolve(
        PATHS.styleGuide.folders.root,
        'dist/styleguide.json'
    ),
    handlebarsPartials: {
        jquery: SG.jquery,
        toc: SG.toc,
        head: PATHS.hbs.entry.header,
    },
    sections: {
        'getting started': 'Setup:',
        patterns: '',
        development: 'DEV:',
    },
    highlightStyle: 'rainbow',
    highlightFolder: path.resolve(
        process.cwd(),
        'node_modules/highlight.js/styles/'
    ),
    customVariables: {
        tocMenu: true,
        pageTitle: PATHS.folders.project + ' Styleguide',
    },
    markedOptions: {
        gfm: true,
        breaks: true,
    },
    logging: {
        prefix: 'Style Guide',
        level: 'minimal',
    },
};
