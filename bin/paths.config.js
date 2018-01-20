const path = require('path');
const process = require('process');
const root = process.cwd();
const bin = __dirname;
const dist = path.resolve(root, "dist");
const src  = path.resolve(root, "__src__");
const docs = path.resolve(root, "docs");


/* File Paths imported by gulp and webpack */
/* Note that the "exclude" key should always be listed last */

const paths = {
    root: {
        "root": path.resolve(root),
        "dist": dist,
        "src": src,
        "docs": docs
    },
    clean: {
        "entry": {
            "dist": `${dist}/*`,
            "docs": `${docs}/*`
        }
    },
    sass: {
        "root": `${src}/sass`,
        "watch": {
            "main": `${src}/sass/**/*.scss`,
            "styleguide": `${src}/styleguide/styleguide.scss`,
            "components": `${src}/components/**/*.scss`,
            "exclude": []
        },
        "entry": {
            "main": `${src}/sass/main.scss`,
            "styleguide": `${src}/styleguide/styleguide.scss`
        },
        "dest": `${dist}/css`
    },
    js: {
        "root": `${src}/js`,
        "watch": {
            "main": `${src}/**/*.js`,
            "samples": src + '/components/__samples__/**/*.js',
            "exclude": []
        },
        "entry": {
            "main": `${src}/js/main.js`,
            "plugins": `${src}/js/plugins.js`
        },
        "dest": `${dist}/js`
    },
    hbs: {
        "root": `${src}/components/`,
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
        "root": `${src}/components/__samples__`,
        "entry": {
            "base": `${src}/components/__samples__/base.hbs`
        },
        "watch": {
            "base": `${src}/components/__samples__/base.hbs`
        }
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
            "html": `*.html`,
            "exclude": [`!**.map`, `!./gulpfile.babel.js`, `!./**/*.min.*`]
        }
    }
};

const getPaths = function() {
    Object.keys(paths).forEach((target) => {
        Object.keys(paths[target]).forEach((group) => {
            if (typeof paths[target][group] === "object") {
                let all = [];

                Object.keys(paths[target][group]).forEach((file) => {
                    if (Array.isArray(paths[target][group][file])) {
                        all = all.concat(paths[target][group][file]);
                    }
                    else {
                        all.push(paths[target][group][file]);
                    }
                });

                paths[target][group]["array"] = all;
            }
        });
    });


    return paths;
};

module.exports = getPaths();
