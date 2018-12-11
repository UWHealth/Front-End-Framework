const PATHS = require('./paths.config.js');
const SG = PATHS.styleGuide.entry;

module.exports = {
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
    htmlOutput: PATHS.styleGuide.dest,
    jsonOutput: false,
    handlebarsPartials: {
        jquery: SG.jquery,
        toc: SG.toc,
        head: PATHS.hbs.entry.header,
        footer: PATHS.hbs.entry.footer,
    },
    sections: {
        'getting started': 'Setup:',
        patterns: '',
        development: 'DEV:',
    },
    highlightStyle: 'rainbow',
    highlightFolder: process.cwd() + '/node_modules/highlight.js/styles/',
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
