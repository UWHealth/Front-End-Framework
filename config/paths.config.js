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
const normalizePaths = require('./tools/normalize-paths.js');

const root = process.cwd();
const bin  = path.resolve(__dirname);
const config = bin;
const build = path.resolve(root, "build");
const dist = path.resolve(root, "dist");
const pub  = path.join(dist, "public");
const src  = path.resolve(root, "_src");
const docs = path.resolve(root, "docs");

const PATHS = {
    root: {
        "root": root,
        "bin": bin,
        "config": bin,
        "build": build,
        "dist": dist,
        "pub": pub,
        "src": src,
        "docs": docs
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
            "all": `${src}/static/**/*.*`,
            "exclude": `!${src}/static/images/**.*`
        },
        "watch": {
            "fonts": `${src}/static/fonts/*.*`,
            "meta": `${src}/static/meta/*.*`
        },
        "dest": `${dist}/public/`
    },
    demos: {
        "folders": {
            "root": `${src}/components/`
        },
        "entry": {
            "all": `${src}/components/**/*.demo.js`,
            "template": `${src}/components/demo/_demo.base.hbs`
        },
        "dest": `${dist}/components`
    },
    fonts: {
        "entry": {
            "asap": `${src}/static/fonts/Asap*.*`,
            "open": `${src}/static/fonts/opensans*.*`
        },
        "watch": {
            "all": `${src}/static/fonts/**/*.*`
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
            "footer": `${src}/components/footer/_footer.hbs`
        },
        "dest": `${pub}/components/`
    },
    images: {
        "entry": {
            "all": `${src}/static/img/**/*.+(jpg|jpeg|png|gif|ico|svg)`,
            "main": `${src}/static/img/**/*.+(jpg|jpeg|png|gif|ico)`,
            "svg": `${src}/static/img/svg/**/*.svg`
        },
        "watch": {
            "all": `${src}/static/img/**/*.+(jpg|jpeg|png|gif|ico|svg)`,
            "jpeg": `${src}/static/img/**/*.+(jpg|jpeg)`,
            "png": `${src}/static/img/**/*.png`,
            "gif": `${src}/static/img/**/*.gif`,
            "svg": `${src}/static/img/svg/**/*.svg`
        },
        "dest": `${pub}/img`
    },
    js: {
        "folders": {
            "root": `${src}/js`,
            "components": `${src}/components`
        },
        "entry": {
            "main": `${src}/js/main.js`,
            "plugins": `${src}/js/plugins.js`
        },
        "watch": {
            "main": `${src}/**/*.js`,
            "samples": `${src}/_samples/**/*.js`
        },
        "dest": `${pub}/js`
    },
    sass: {
        "folders": {
            "components": `${src}/components`,
            "root": `${src}/sass`
        },
        "entry": {
            "main": `${src}/sass/main.scss`,
            "print": `${src}/sass/print.scss`,
            "components": `${src}/components/**/[!_]*.scss`,
            "styleguide": `${src}/styleguide/styleguide.scss`
        },
        "watch": {
            "all": `${src}/**/*.scss`,
            "config": `${config}/sass.config.scss`,
            "main": `${src}/sass/**/*.scss`,
            "styleguide": `${src}/styleguide/styleguide.scss`,
            "components": `${src}/components/**/*.scss`
        },
        "dest": `${pub}/css`
    },
    samples: {
        "folders": {
            "root": `${src}/_samples/`
        },
        "entry": {
            "all": `${src}/_samples/**/*.html`,
            "template": `${src}/_samples/_samples.base.hbs`
        },
        "dest": `${dist}/samples`
    },
    styleGuide: {
        "entry": {
            "config": `${config}/styleguide.config.js`,
            "templateFile": `${src}/styleguide/styleguide.hbs`,
            "themeFile": `${pub}/css/styleguide.css`,
            "jquery": `${src}/styleguide/imports/jquery.js`,
            "toc": `${src}/styleguide/imports/toc.js`,
        },
        "watch": {
            "imports": `${src}/styleguide/**/*.*`,
            "style": `${pub}/css/styleguide.css`,
            "config": `${config}/styleguide.conf.js`
        },
        "dest": `${path.relative(root, pub)}/styleguide/index.html`
    },
    browserSync: {
        "entry": {
            "serve": dist
        },
        "port": 8080,
        "watch": {
            "css": `${pub}/css/*.css`,
            "js": `${pub}/js/**/*.js`,
            "samples": `${dist}/samples/**/*.html`,
            "components": `${dist}/components/**/*.html`,
            "exclude": [`!${dist}/**/*.map`, `!${pub}/styleguide/*.html`]
        }
    }
});

module.exports = normalizePaths(PATHS);
