/**
 * @fileoverview - File paths imported by gulp and webpack
**/

const path = require('path');
const process = require('process');
const root = process.cwd();

const bin  = __dirname;
const dist = path.resolve(root, "dist");
const pub = path.join(dist, "public");
const src  = path.resolve(root, "_src");
const docs = path.resolve(root, "docs");

const PATHS = {
    root: {
        "root": path.resolve(root),
        "bin": path.resolve(__dirname),
        "dist": dist,
        "pub": pub,
        "src": src,
        "docs": docs
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
            "components": `${src}/components/**/[!_]*.scss`,
            "styleguide": `${src}/styleguide/styleguide.scss`
        },
        "watch": {
            "all": String.raw`./_src/**/*.scss`,
            "main": `${src}/sass/**/*.scss`,
            "styleguide": `${src}/styleguide/styleguide.scss`,
            "components": `${src}/components/**/*.scss`
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
            "samples": `${src}/_samples/**/*.js`
        },
        "dest": `${pub}/js`
    },
    hbs: {
        "folders": {
            "root": `${src}/components`
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
    samples: {
        "folders": {
            "root": `${src}/_samples/`
        },
        "entry": {
            "base": `${src}/_samples/base.hbs`
        },
        "watch": {
            "base": `${src}/_samples/**/*.js`
        },
        "dest": `${dist}/samples`
    },
    styleGuide: {
        "entry": {
            "config": `${bin}/styleguide.config.js`,
            "templateFile": `${src}/styleguide/template.hbs`,
            "themeFile": `${pub}/css/styleguide.css`,
            "jquery": `${src}/styleguide/imports/jquery.js`,
            "toc": `${src}/styleguide/imports/toc.js`,
            "htmlOutput": `${path.relative(root, pub)}/styleguide/index.html`,
        },
        "watch": {
            "imports": `${src}/styleguide/**/*.*`,
            "style": `${pub}/css/styleguide.css`,
            "config": `${bin}/styleguide.conf.js`
        },
        "dest": `${pub}/styleguide/index.html`
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
    browserSync: {
        "entry": {
            "serve": dist
        },
        "port": 8080,
        "watch": {
            "css": `${pub}/css/*.css`,
            "js": `${pub}/js/**/*.js`,
            "samples": `${dist}/samples/**/*.html`,
            "exclude": [`!${dist}/**/*.map`]
        }
    }
});


/**
 * Adds "array" entry to path objects, allowing for a selection like `browsersync.watch.array`. Will convert
 * @return {Object} PATHS object with "array" keys added
 */
const getPaths = function() {
    Object.keys(PATHS).forEach((target) => {
        Object.keys(PATHS[target]).forEach((group) => {
            let currentGroup = PATHS[target][group];

            if (typeof currentGroup === "object") {
                let array = [];

                Object.keys(currentGroup).forEach((file) => {
                    if (Array.isArray(currentGroup[file])) {
                        currentGroup[file] = currentGroup[file].map(globNormalize);
                        array = array.concat(currentGroup[file]);
                    }
                    else {
                        currentGroup[file] = globNormalize(currentGroup[file]);
                        array.push(currentGroup[file]);
                    }
                });

                currentGroup["array"] = array;
            }
            else if (typeof currentGroup === 'string') {
                currentGroup = globNormalize(currentGroup);
            }
        });
    });


    return PATHS;
};

/**
 * Normalize paths, including globs, replacing backslashes with forward slashes
 * @param  {String} item path string
 * @return {String}      normalize path string, if a glob, normalized to a POSIX path
 */
const globNormalize = function(item) {
    return (item.indexOf("*") > -1) ? item.replace(/\\/g, '/') : path.normalize(item);
};

module.exports = getPaths();
