const PATHS = require('./paths.config.js');
const SG = PATHS.styleGuide.entry;

module.exports = {
    "sgComment": "SG",
    "exampleIdentifier": "html_example",
    "sortCategories": true,
    "excludeDirs": [
        "target",
        "node_modules",
        ".git",
        "dist"
    ],
    "fileExtensions": {
        "scss": true,
        "sass": false,
        "css": false,
        "less": true,
        "md": true
    },
    "templateFile": SG.templateFile,
    "themeFile": SG.themeFile,
    "htmlOutput": PATHS.styleGuide.dest,
    "jsonOutput": false,
    "handlebarsPartials": {
        "jquery": SG.jquery,
        "./_header.seo.hbs": PATHS.hbs.folders.root + '/header/_header.seo.hbs',
        "./_header.app.hbs": PATHS.hbs.folders.root + '/header/_header.app.hbs',
        "./_header.social.hbs": PATHS.hbs.folders.root + '/header/_header.social.hbs',
        "toc": SG.toc,
        "head": PATHS.hbs.entry.header,
        "footer": PATHS.hbs.entry.footer
    },
    "sections": {
        "getting started": "Setup:",
        "patterns": "",
        "development": "[[dev]]"
    },
    "highlightStyle": "rainbow",
    "highlightFolder": "./node_modules/highlight.js/styles/",
    "customVariables": {
        "tocMenu": true,
        "pageTitle": "UW Health Styleguide"
    },
    "markedOptions": {
        "gfm": true,
        "breaks": true
    }
};
