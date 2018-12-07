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
    root: root,
    src: path.resolve(root, '@src'),
    assets: path.resolve(root, '@src', 'static'),
    build: path.resolve(root, 'build'),
    config: path.resolve(root, 'config'),
    dist: path.resolve(root, 'dist'),
    pub: path.resolve(root, 'dist', 'public'),
    cache: path.resolve(root, 'node_modules', '.cache'),

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
            exclude: `!${_.assets}/img/**.*`,
        },
        watch: {
            src: `${_.assets}/**/*.*`,
            fonts: `${_.assets}/fonts/*.*`,
            meta: `${_.assets}/meta/*.*`,
            exclude: [`!${_.assets}/img/**.*`],
        },
        dest: `${_.pub}/static/`,
    },
    // Files to create demos from
    demos: {
        folders: {
            root: `${_.src}/`,
            components: `${_.src}/components/`,
            modules: `${_.src}/modules/`,
        },
        entry: {
            src: `${_.src}/components/**/*.demo.html`,
            main: `${_.src}/demos.js`,
            manifest: MODE.production
                ? `${_.pub}/module-map-manifest.json`
                : `${_.cache}/module-map-manifest.json`,
        },
        dest: `${_.dist}/demo`,
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
            header: `${_.src}/components/header/_header.hbs`,
            footer: `${_.src}/components/footer/_footer.hbs`,
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
        dest: `${_.pub}/static/img`,
    },
    js: {
        folders: {
            root: `${_.src}`,
            components: `${_.src}/components`,
            modules: `${_.src}/modules`,
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
            modules: `${_.src}/modules/**/[!_]*.scss`,
            styleguide: `${_.src}/modules/styleguide/styleguide.scss`,
        },
        watch: {
            src: `${_.src}/**/*.scss`,
            config: `${_.config}/sass.config.scss`,
        },
        dest: `${_.pub}/css`,
    },
    styleGuide: {
        entry: {
            config: `${_.config}/styleguide.config.js`,
            templateFile: `${_.src}/modules/styleguide/styleguide.hbs`,
            themeFile: `${_.pub}/css/styleguide/styleguide.css`,
            jquery: `${_.src}/modules/styleguide/imports/jquery.js`,
            toc: `${_.src}/modules/styleguide/imports/toc.js`,
        },
        watch: {
            imports: `${_.src}/modules/styleguide/**/*.*`,
            style: `${_.pub}/css/styleguide/styleguide.css`,
            config: `${_.config}/styleguide.config.js`,
        },
        dest: `${_.pub}/styleguide/index.html`,
    },
    browserSync: {
        port: 8080,
        entry: {
            serve: `${_.dist}`,
        },
        watch: {
            css: `${_.pub}/css/*.css`,
            js: `${_.pub}/js/**/*.js`,
            components: `${_.dist}/components/**/*.html`,
            exclude: [`!${_.dist}/**/*.map`, `!${_.pub}/styleguide/*.html`],
        },
    },
};

// Ensure all paths are exported predictably
module.exports = normalizePaths(PATHS);
