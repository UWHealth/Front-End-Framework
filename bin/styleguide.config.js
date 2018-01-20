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
    "htmlOutput": SG.htmlOutput,
    "jsonOutput": SG.jsonOutput,
    "handlebarsPartials": {
        "jquery": SG.jquery,
        "toc": SG.toc
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
        "pageTitle": "FEF - Documentation"
    },
    "markedOptions": {
        "gfm": true,
        "breaks": true
    }
}
