/**
 * @fileoverview - File paths imported by gulp and webpack (or other build scripts)
 *
 * CONVENTIONS:
 * Structure should follow:

    topic/concern
      ┞─ folders
         ┖─"name": `folder path`
      ┞─ entry
         ┖─"name": `glob/file path`
      ┞─ watch
         ┞─name: `glob/file`
         ┖─exclude: [`!glob/*`, `!file`]
      ┖─ dest : `folder path`

    Notes:
    • Use template literals (``) instead of strings where possible.
    • "folders" should not contain paths to files.
    • "entry" and "watch" keys should be file paths (or globs).
    • "exclude" key should be the only array.
    • "exclude" must be listed last.
    • Once compiled, an "array" key with a combination of all paths will be added to each topic.
**/

const path = require('path');
const normalizePaths = require('./helpers/normalize-paths.js');

const root = process.cwd();

const src = path.resolve(root, '@src');
const config = path.resolve(root, 'config');
const build = path.resolve(root, 'build');
const dist = path.resolve(root, 'dist');
const pub = path.join(dist, 'public');
const docs = path.resolve(root, 'docs');
const assets = path.resolve(src, 'static');
const dirArray = root.split(path.delimiter);

const PATHS = {
    folders: {
        project: dirArray[dirArray.length - 1], // Project Name or root folder name
        // All paths from here on are absolute
        root: root, // Root folder
        config: config, // Config folder
        build: build, // Build folder
        dist: dist, // Built files
        dest: dist, // Built files alias
        pub: pub, // Published (public) folder
        static: assets, // Static assets
        src: src, // Files to be built
        docs: docs, // Documentation folder
    },
};

Object.assign(PATHS, {
    /* eslint-disable no-useless-escape */

    // Allow for path aliases
    aliases: {
        '@': src,
        '>': root,
        CWD: root,
        NODE: path.resolve(root, 'node_modules'),
    },
    // Folders/files that should be cleaned before build
    clean: {
        entry: {
            dist: `${dist}/*`,
            docs: `${docs}/*`,
        },
    },
    // Folders and files that should be copied directly
    copy: {
        folders: {
            root: `${assets}`,
        },
        entry: {
            all: `${assets}/**/*.*`,
            exclude: `!${assets}/img/**.*`,
        },
        watch: {
            all: `${assets}/**/*.*`,
            fonts: `${assets}/fonts/*.*`,
            meta: `${assets}/meta/*.*`,
            exclude: [`!${assets}/img/**.*`],
        },
        dest: `${pub}/static/`,
    },
    // Files to create demos from
    demos: {
        folders: {
            root: `${src}/`,
            components: `${src}/components/`,
            modules: `${src}/modules/`,
        },
        entry: {
            all: `${src}/components/**/*.demo.html`,
            main: `${src}/demos.js`,
            manifest: `${pub}/module-map-manifest.json`,
        },
        dest: `${dist}/demo`,
    },
    fonts: {
        entry: {
            asap: `${assets}/fonts/Asap*.*`,
            open: `${assets}/fonts/opensans*.*`,
        },
        watch: {
            all: `${assets}/fonts/**/*.*`,
        },
        dest: `${pub}/static/fonts`,
    },
    hbs: {
        folders: {
            root: `${src}/components`,
            components: `${src}/components`,
        },
        watch: {
            main: `${src}/components/**/*.hbs`,
        },
        entry: {
            main: `${src}/components/**/*.hbs`,
            header: `${src}/components/header/_header.hbs`,
            footer: `${src}/components/footer/_footer.hbs`,
        },
        dest: `${pub}/components/`,
    },
    images: {
        entry: {
            all: `${assets}/img/**/*.+(jpe?g|png|gif|ico|svg)`,
            main: `${assets}/img/**/*.+(jpe?g|png|gif|ico)`,
            svg: `${assets}/img/svg/**/*.svg`,
        },
        watch: {
            all: `${assets}/img/**/*.+(jpe?g|png|gif|ico|svg)`,
            svg: `${assets}/img/svg/**/*.svg`,
        },
        dest: `${pub}/static/img`,
    },
    js: {
        folders: {
            root: `${src}`,
            components: `${src}/components`,
            modules: `${src}/modules`,
            helpers: `${src}/helpers`,
        },
        entry: {
            main: `${src}/main.js`,
            components: `${src}/components/**/*[!demo].html`,
        },
        watch: {
            all: `${src}/**/*.js`,
        },
        dest: `${pub}/js`,
    },
    sass: {
        folders: {
            components: `${src}/components`,
            root: `${src}/sass`,
        },
        entry: {
            main: `${src}/main.scss`,
            print: `${src}/print.scss`,
            components: `${src}/components/**/[!_]*.scss`,
            modules: `${src}/modules/**/[!_]*.scss`,
            styleguide: `${src}/modules/styleguide/styleguide.scss`,
        },
        watch: {
            all: `${src}/**/*.scss`,
            config: `${config}/sass.config.scss`,
            main: `${src}/*.scss`,
        },
        dest: `${pub}/css`,
    },
    styleGuide: {
        entry: {
            config: `${config}/styleguide.config.js`,
            templateFile: `${src}/modules/styleguide/styleguide.hbs`,
            themeFile: `${pub}/css/styleguide/styleguide.css`,
            jquery: `${src}/modules/styleguide/imports/jquery.js`,
            toc: `${src}/modules/styleguide/imports/toc.js`,
        },
        watch: {
            imports: `${src}/modules/styleguide/**/*.*`,
            style: `${pub}/css/styleguide/styleguide.css`,
            config: `${config}/styleguide.config.js`,
        },
        dest: `${pub}/styleguide/index.html`,
    },
    browserSync: {
        port: 8080,
        entry: {
            serve: dist,
        },
        watch: {
            css: `${pub}/css/*.css`,
            js: `${pub}/js/**/*.js`,
            components: `${dist}/components/**/*.html`,
            exclude: [`!${dist}/**/*.map`, `!${pub}/styleguide/*.html`],
        },
    },
});

module.exports = normalizePaths(PATHS);
