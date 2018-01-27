const path = require('path');
const process = require('process');
const root = process.cwd();
const bin  = __dirname;

/* @fileoverview - File Paths imported by gulp and webpack */

const dist = path.resolve(root, "dist/");
const pub = path.join(dist, "public");
const src  = path.resolve(root, "__src__");
const docs = path.resolve(root, "docs");

const PATHS = {
    root: {
        "root": path.resolve(root),
        "bin": path.resolve(__dirname),
        "dist": dist,
        "pub": pub,
        "src": src,
        "docs": docs,
    }
};

/*
    CONVENTIONS:
    Structure should follow:

    topic/concern
     ┞─"folders"
        ┖─"name": "folder path"
     ┞─"entry"
        ┖─"name": "glob/file path"
     ┖─"watch"
        ┞─"name": "glob/file"
        ┖─"exclude": ["!glob", "!file"]

    • "folders" should not contain file paths
    • "entry" and "watch" keys should be file paths (or globs)
    • "exclude" key should be the only array
    • "exclude" should always be listed last
*/

Object.assign(PATHS, {
    clean: {
        "entry": {
            "dist": `${dist}/*`,
            "docs": `${docs}/*`
        }
    },
    sass: {
        "folders": {
            "components": `${src}/components`,
            "root": `${src}/sass`
        },
        "entry": {
            "main": `${src}/sass/main.scss`,
            "print": `${src}/sass/print.scss`,
            "styleguide": `${src}/styleguide/styleguide.scss`
        },
        "watch": {
            "main": `${src}/sass/**/*.scss`,
            "styleguide": `${src}/styleguide/styleguide.scss`,
            "components": `${src}/components/**/*.scss`,
            "exclude": []
        },
        "dest": `${pub}/css`
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
            "samples": `${src}/__samples__/**/*.js`,
            "exclude": []
        },
        "dest": `${pub}/js`
    },
    hbs: {
        "folders": {
            "root": `${src}/components/`
        },
        "watch": {
            "main": `${src}/components/**/*.hbs`,
            "exclude": []
        },
        "entry": {
            "main": `${src}/components/**/*.hbs`,
            "head": `${src}/components/head/_head.hbs`,
            "footer": `${src}/components/footer/_footer.hbs`
        },
        "dest": `${pub}/components/`
    },
    samples: {
        "folders": {
            "root": `${src}/__samples__/`
        },
        "entry": {
            "base": `${src}/__samples__/base.hbs`,
            "render": `${src}/js/dev/render-samples.js`
        },
        "watch": {
            "base": `${src}/__samples__/**/*.js`
        },
        "dest": `${dist}/samples`
    },
    kits: {
        "watch": {
            "main": `${src}/**/*.kit`,
            "exclude": []
        },
        "entry": {
            "main": `${src}/**/*.kit`,
            "exclude": [`!${src}/**/_*.kit`]
        },
        "dest": dist
    },
    styleGuide: {
        "entry": {
            "config": `${bin}/styleguide.config.js`,
            "templateFile": `${src}/styleguide/template.hbs`,
            "themeFile": `${pub}/css/styleguide.min.css`,
            "jquery": `${src}/styleguide/imports/jquery.js`,
            "toc": `${src}/styleguide/imports/toc.js`,
            "jsonOutput": false,
            "htmlOutput": `${path.relative(root, pub)}/styleguide/index.html`,
        },
        "watch": {
            "imports": `${src}/styleguide/**/*.*`,
            "style": `${pub}/**/styleguide.min.css`,
            "config": `${bin}/styleguide.conf.js`,
            "exclude": []
        },
        "dest": `${pub}/styleguide/index.html`
    },
    fonts: {
        "entry": {
            "asap": `${src}/assets/fonts/Asap*.*`,
            "open": `${src}/assets/fonts/opensans*.*`
        },
        "watch": {
            "all": `${src}/assets/fonts/**/*.*`
        },
        "dest": `${pub}/fonts`
    },
    images: {
        "entry": {
            "main": `${src}/assets/img/**/*.(jpg|jpeg|png|gif)`,
            "svg": `${src}/assets/img/svg/**/*.svg`
        },
        "watch": {
            "main": `${src}/assets/img/**/*.(jpg|jpeg|png|gif)`,
            "jpeg": `${src}/assets/img/**/*.(jpg|jpeg)`,
            "png": `${src}/assets/img/**/*.png`,
            "gif": `${src}/assets/img/**/*.gif`,
            "svg": `${src}/assets/img/svg/**/*.svg`
        },
        "dest": `${pub}/img`
    },
    browserSync: {
        "entry": {
            "serve": dist
        },
        "port": 8080,
        "watch": {
            "css": `${pub}/css/*.css`,
            "js": `${pub}/js/**/*.js`,
            "samples": `${pub}/samples/**/*.html`,
            "html": `*.html`,
            "exclude": [`!**.map`]
        }
    }
});


/**
 * Adds "array" entry to path objects, allowing for a selection like `browsersync.watch.array`
 * @return {Object} PATHS object with "array" keys added
 */
const getPaths = function() {
    Object.keys(PATHS).forEach((target) => {
        Object.keys(PATHS[target]).forEach((group) => {
            const currentGroup = PATHS[target][group];

            if (typeof currentGroup === "object") {
                let array = [];

                Object.keys(currentGroup).forEach((file) => {
                    if (Array.isArray(currentGroup[file])) {
                        array = array.concat(currentGroup[file]);
                    }
                    else {
                        array.push(currentGroup[file]);
                    }
                });

                currentGroup["array"] = array;
            }
        });
    });


    return PATHS;
};

module.exports = getPaths();
