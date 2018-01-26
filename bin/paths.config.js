const path = require('path');
const process = require('process');
const root = process.cwd();
const bin  = __dirname;
const dist = path.resolve(root, "dist");
const src  = path.resolve(root, "__src__");
const docs = path.resolve(root, "docs");


/* @fileoverview - File Paths imported by gulp and webpack */

const PATHS = {
    root: {
        "root": path.resolve(root),
        "bin": path.resolve(__dirname),
        "dist": dist,
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
        "dest": `${dist}/css`
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
        "dest": `${dist}/js`
    },
    hbs: {
        "folders": {
            "root": `${src}/components/`,
        },
        "watch": {
            "main": `${src}/components/**/*.hbs`,
            "exclude": []
        },
        "entry": {
            "main": `${src}/components/**/*.hbs`
        },
        "dest": `${dist}/components/`
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
            "templateFile": `${src}/styleguide/imports/template.hbs`,
            "themeFile": `${dist}/css/styleguide.min.css`,
            "htmlOutput": `${src}/styleguide/_styleguide.kit`,
            "jsonOutput": `${dist}/styleguide/index.json`,
            "jquery": `${src}/styleguide/imports/jquery.js`,
            "toc": `${src}/styleguide/imports/toc.js`
        },
        "watch": {
            "imports": `${src}/styleguide/imports/*.*`,
            "style": `dist/**/styleguide.min.css`,
            "config": `${bin}/styleguide.conf.js`,
            "exclude": []
        },
        "dest": path.resolve(root, 'docs/styleguide')
    },
    fonts: {
        "entry": {
            "asap": `${src}/assets/fonts/Asap*.*`,
            "open": `${src}/assets/fonts/opensans*.*`
        },
        "watch": {
            "all": `${src}/assets/fonts/**/*.*`
        },
        "dest": `${dist}/fonts`
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
        "dest": `${dist}/img`
    },
    browserSync: {
        "entry": {
            "serve": dist
        },
        "port": 8080,
        "watch": {
            "css": `${dist}/css/*.css`,
            "js": `${dist}/js/**/*.js`,
            "samples": `${dist}/demo/**/*.*`,
            "html": `*.html`,
            "exclude": [`!**.map`]
        }
    }
});

const getPaths = function() {
    Object.keys(PATHS).forEach((target) => {
        Object.keys(PATHS[target]).forEach((group) => {
            if (typeof PATHS[target][group] === "object") {
                let all = [];

                Object.keys(PATHS[target][group]).forEach((file) => {
                    if (Array.isArray(PATHS[target][group][file])) {
                        all = all.concat(PATHS[target][group][file]);
                    }
                    else {
                        all.push(PATHS[target][group][file]);
                    }
                });

                PATHS[target][group]["array"] = all;
            }
        });
    });


    return PATHS;
};

module.exports = getPaths();
