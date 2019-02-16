/**
 * @fileoverview - File paths imported by gulp and webpack (or other build scripts)
 *
 * CONVENTIONS:
 * Structure should follow:

    topic/concern
     ┞─ "folders"
        ┖─"name": `folder path`
     ┞─ "entry"
        ┖─"name": `glob/file path`
     ┞─ "watch"
        ┞─"name": `glob/file`
        ┖─"exclude": [`!glob/*`, `!file`]
     ┖─ "dest": `folder path`

    Notes:
    • Use template literals (``) instead of strings where possible.
    • "folders" should not contain paths to files.
    • "entry" and "watch" keys should be file paths (or globs).
    • "dest" should always be a single folder (and not a file or glob).
    • "exclude" key should be the only array.
    • "exclude" must be listed last.
    • Once compiled, an "array" key with a combination of all paths will be added to each topic.
**/

const path = require('path');
const normalizePaths = require('./helpers/normalize-paths.js');
const MODE = require('../build/helpers/mode.js');

const root = process.cwd();

// Base folders
const _ = {
    // Root of the project
    root: root,
    // Source
    src: path.resolve(root, '@src'),
    // Media assets
    assets: path.resolve(root, '@src', 'assets'),
    // Build scripts
    build: path.resolve(root, 'build'),
    // Config files
    config: path.resolve(root, 'config'),
    // Base Distribution folder
    dist: path.resolve(root, 'dist'),
    // Public folder (usually nested in dist)
    pub: path.resolve(root, 'dist', 'public'),
    // Base Cache location
    cache: path.resolve(root, 'node_modules', '.cache'),
    // Documentation
    docs: path.resolve(root, 'docs'),
    dirArray: root.split(path.delimiter),
};

const PATHS = {
    folders: _,
    // Aliases used in webpack and sass
    aliases: {
        '@': _.src,
        '>': root,
        CWD: root,
        '~': path.resolve(root, 'node_modules'),
        '@sassConfig': `${_.config}/sass.config.scss`,
    },
    // Folders/files that should be cleaned before build
    clean: {
        entry: {
            dist: `${_.dist}/*`,
            docs: `${_.docs}/*`,
        },
    },
    // Folders and files that should be copied directly
    copy: {
        folders: {
            root: `${_.assets}`,
        },
        entry: {
            src: `${_.assets}/**/*.*`,
            exclude: `!${_.assets}/images/**.*`,
        },
        watch: {
            src: `${_.assets}/**/*.*`,
            fonts: `${_.assets}/fonts/*.*`,
            meta: `${_.assets}/meta/*.*`,
            exclude: [`!${_.assets}/images/**.*`],
        },
        dest: `${_.pub}/assets/`,
    },
    // Files to create pages from
    pages: {
        folders: {
            root: `${_.src}/pages`,
            demos: `${_.src}/pages/demos/`,
        },
        entry: {
            src: [`${_.src}/pages/[!_]**/[!_]*.(html|svelte)`,
                `${_.src}/pages/[!_]*.(html|svelte)`
            ],
            server: `${_.src}/server.js`,
            exclude: [`!${_.src}/pages/**/_*.*`, `!${_.src}/pages/_**/*`],
        },
        watch: {
            all: `${_.src}/pages/**/*`,
        },
        dest: `${_.dist}/`,
    },
    hbs: {
        folders: {
            root: `${_.src}/components`,
            components: `${_.src}/components`,
        },
        watch: {
            main: `${_.src}/components/**/*.hbs`,
        },
        entry: {
            main: `${_.src}/components/**/*.hbs`,
            header: `${_.src}/components/head/index.hbs`,
            footer: `${_.src}/components/footer/index.hbs`,
        },
        dest: `${_.pub}/components/`,
    },
    images: {
        entry: {
            src: `${_.assets}/img/**/*.+(jpe?g|png|gif|ico|svg)`,
            main: `${_.assets}/img/**/*.+(jpe?g|png|gif|ico)`,
            svg: `${_.assets}/img/svg/**/*.svg`,
        },
        watch: {
            src: `${_.assets}/img/**/*.+(jpe?g|png|gif|ico|svg)`,
            svg: `${_.assets}/img/svg/**/*.svg`,
        },
        dest: `${_.pub}/assets/img`,
    },
    js: {
        folders: {
            root: `${_.src}`,
            components: `${_.src}/components`,
            modules: `${_.src}/layouts`,
            helpers: `${_.src}/helpers`,
        },
        entry: {
            main: `${_.src}/main.js`,
            components: `${_.src}/components/**/*[!demo].html`,
        },
        watch: {
            src: `${_.src}/**/*.js`,
        },
        dest: `${_.pub}/js`,
    },
    style: {
        folders: {
            components: `${_.src}/components`,
            root: `${_.src}/sass`,
        },
        entry: {
            main: `${_.src}/main.scss`,
            config: `${_.config}/sass.config.scss`,
            print: `${_.src}/print.scss`,
            components: `${_.src}/components/**/[!_]*.scss`,
            layouts: `${_.src}/layouts/**/[!_]*.scss`,
            styleguide: `${_.src}/pages/styleguide/styleguide.scss`,
        },
        watch: {
            src: `${_.src}/**/*.scss`,
            config: `${_.config}/sass.config.scss`,
        },
        dest: `${_.pub}/css`,
    },
    styleGuide: {
        folders: {
            root: `${_.src}/pages/styleguide/`,
        },
        entry: {
            config: `${_.config}/styleguide.config.js`,
            templateFile: `${_.src}/pages/styleguide/styleguide.hbs`,
            themeFile: `${_.pub}/css/styleguide/styleguide.css`,
            jquery: `${_.src}/pages/styleguide/imports/jquery.js`,
            toc: `${_.src}/pages/styleguide/imports/toc.js`,
        },
        watch: {
            imports: `${_.src}/pages/styleguide/**/*.*`,
            style: `${_.pub}/css/styleguide/styleguide.css`,
            config: `${_.config}/styleguide.config.js`,
        },
        dest: `${_.pub}/styleguide/index.html`,
    },
    browserSync: {
        entry: {
            serve: `${_.dist}`,
        },
        watch: {
            css: `${_.pub}/css/*.css`,
        },
    },
};

// Ensure all paths are exported predictably
module.exports = normalizePaths(PATHS);
