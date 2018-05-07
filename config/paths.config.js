/**
 * @fileoverview - File paths imported by gulp and webpack (or other build scripts)
 *
 * CONVENTIONS:
 * Structure should follow:

    topic/concern
      ┞─"folders"
         ┖─"name": `folder path`
      ┞─"entry"
         ┖─"name": `glob/file path`
      ┖─"watch"
         ┞─"name": `glob/file`
         ┖─"exclude": ["!glob", "!file"]

    Notes:
    • Use template literals (``) instead of strings where possible.
    • "folders" should not contain file paths.
    • "entry" and "watch" keys should be file paths (or globs).
    • "exclude" key should be the only array.
    • "exclude" must be listed last.
**/

const path = require('path');
const normalizePaths = require('./helpers/normalize-paths.js');

const root     = process.cwd();
const config   = path.resolve(root, "config");
const build    = path.resolve(root, "build");
const dist     = path.resolve(root, "dist");
const pub      = path.join(dist, "public");
const src      = path.resolve(root, "src");
const docs     = path.resolve(root, "docs");
const dirArray = root.split(path.delimiter);

const PATHS = {
    folders: {
        "project": dirArray[dirArray.length - 1], // Project Name or root folder name
        // All paths from here on are absolute
        "root": root,     // Root folder
        "config": config, // Config folder
        "build": build,   // Build folder
        "dist": dist,     // Built files
        "pub": pub,       // Published (public) folder
        "src": src,       // Files to be built
        "docs": docs,     // Documentation folder
    }
};


Object.assign(PATHS, {
    clean: {
        "entry": {
            "dist": `${dist}/*`,
            "docs": `${docs}/*`
        }
    },
    copy: {
        "folders": {
            "root": `${src}/static`
        },
        "entry": {
            "all": `${root}/static/**/*.*`,
            "exclude": `!${root}/static/img/**.*`
        },
        "watch": {
            "all": `${root}/static/**/*.*`,
            "fonts": `${root}/static/fonts/*.*`,
            "meta": `${root}/static/meta/*.*`,
            "exclude": [`!${root}/static/img/**.*`]
        },
        "dest": `${dist}/public/`
    },
    demos: {
        "folders": {
            "root": `${src}/components/`
        },
        "entry": {
            "handlebars": `${src}/components/**/*.demo.js`,
            "svelte": `${src}/components/**/*.demo.html`,
            "template": `${src}/components/base/_base.hbs`
        },
        "dest": `${dist}/components`
    },
    fonts: {
        "entry": {
            "asap": `${root}/static/fonts/Asap*.*`,
            "open": `${root}/static/fonts/opensans*.*`
        },
        "watch": {
            "all": `${root}/static/fonts/**/*.*`
        },
        "dest": `${pub}/fonts`
    },
    hbs: {
        "folders": {
            "root": `${src}/components`,
            "components": `${src}/components`
        },
        "watch": {
            "main": `${src}/components/**/*.hbs`,
            "exclude": []
        },
        "entry": {
            "main": `${src}/components/**/*.hbs`,
            "header": `${src}/components/header/_header.hbs`,
            "footer": `${src}/components/footer/_footer.hbs`,
        },
        "dest": `${pub}/components/`
    },
    images: {
        "entry": {
            "all": `${root}/static/img/**/*.+(jpe?g|png|gif|ico|svg)`,
            "main": `${root}/static/img/**/*.+(jpe?g|png|gif|ico)`,
            "svg": `${root}/static/img/svg/**/*.svg`,
        },
        "watch": {
            "all": `${root}/static/img/**/*.+(jpe?g|png|gif|ico|svg)`,
            "jpeg": `${root}/static/img/**/*.+(jpe?g)`,
            "png": `${root}/static/img/**/*.png`,
            "gif": `${root}/static/img/**/*.gif`,
            "svg": `${root}/static/img/svg/**/*.svg`,
        },
        "dest": `${pub}/img`
    },
    js: {
        "folders": {
            "root": `${src}`,
            "components": `${src}/components`,
            "modules": `${src}/modules`,
            "globals": `${src}/globals`
        },
        "entry": {
            "main": `${src}/main.js`,
            "components": `${src}/components/**/*[!demo].html`
        },
        "watch": {
            "all": `${src}/**/*.js`,
        },
        "dest": `${pub}/js`
    },
    sass: {
        "folders": {
            "components": `${src}/components`,
            "root": `${src}/sass`,
        },
        "entry": {
            "main": `${src}/main.scss`,
            "print": `${src}/print.scss`,
            "components": `${src}/components/**/[!_]*.scss`,
            "modules": `${src}/modules/**/[!_]*.scss`,
            "styleguide": `${src}/modules/styleguide/styleguide.scss`,
        },
        "watch": {
            "all": `${src}/**/*.scss`,
            "config": `${config}/sass.config.scss`,
            "main": `${src}/*.scss`,
            "styleguide": `${src}/modules/styleguide/styleguide.scss`,
            "components": `${src}/components/**/*.scss`,
        },
        "dest": `${pub}/css`
    },
    styleGuide: {
        "entry": {
            "config": `${config}/styleguide.config.js`,
            "templateFile": `${src}/modules/styleguide/styleguide.hbs`,
            "themeFile": `${pub}/css/styleguide/styleguide.css`,
            "jquery": `${src}/modules/styleguide/imports/jquery.js`,
            "toc": `${src}/modules/styleguide/imports/toc.js`,
        },
        "watch": {
            "imports": `${src}/modules/styleguide/**/*.*`,
            "style": `${pub}/css/styleguide/styleguide.css`,
            "config": `${config}/styleguide.config.js`,
        },
        "dest": `${pub}/styleguide/index.html`
    },
    browserSync: {
        "entry": {
            "serve": dist
        },
        "port": 8080,
        "watch": {
            "css": `${pub}/css/*.css`,
            "js": `${pub}/js/**/*.js`,
            "components": `${dist}/components/**/*.html`,
            "exclude": [`!${dist}/**/*.map`, `!${pub}/styleguide/*.html`],
        }
    }
});

module.exports = normalizePaths(PATHS);
