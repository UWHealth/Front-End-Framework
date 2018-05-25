/**
 * @fileoverview Processes scss, adds browser prefixes, and minifies before saving to the destination folder.
 **/

const CWD = process.cwd();
const BROWSERS = require(`${CWD}/package.json`).browserslist;
const Logger = require("../helpers/logger.js");
const MODE = require("../helpers/mode");
const PATHS = require(`${CWD}/config/paths.config.js`);

/**
 * Allows for sass imports to use aliases to represent the folder paths (similar to webpack)
 * @reference            - https://github.com/sass/node-sass#importer
 * @return {Object}      - Resolved path to url, with aliases replaced
 */
function aliasPath(url, prev, done) {
    const path = require("path");

    const aliases = Object.keys(PATHS.aliases);
    const match = aliases.filter(alias => url.indexOf(alias) > -1);
    return {
        file: match[0]
            ? path.resolve(
                  PATHS.aliases[match[0]],
                  url.replace(match[0] + "/", "")
              )
            : url
    };
}

const sass_config = {
    outputStyle: "expanded",
    errLogToConsole: true,
    includePaths: [PATHS.folders.src, PATHS.folders.config],
    importer: aliasPath
};

const nano_config = {
    discardComments: { removeAll: true },
    zindex: false
};

module.exports = done => {
    const gulp = require("gulp");
    const autoprefixer = require("gulp-autoprefixer");
    const cssnano = require("gulp-cssnano");
    const plumber = require("gulp-plumber");
    const rename = require("gulp-rename");
    const sass = require("gulp-sass");
    const sourcemaps = require("gulp-sourcemaps");

    const LOG = new Logger("Sass");
    LOG.spinner("Compiling ");

    return new Promise((resolve, reject) => {
        if (MODE.production) {
            gulp
                .src(PATHS.sass.entry.array)
                .pipe(plumber(LOG.notify))
                .pipe(sass(sass_config))

                // Autoprefix
                .pipe(autoprefixer({ browsers: BROWSERS }))

                // Minify
                .pipe(cssnano(nano_config))

                // Output minified CSS
                .pipe(plumber.stop())
                .pipe(gulp.dest(PATHS.sass.dest))

                .on("error", err => reject(LOG.error(err)))
                .on("end", () => {
                    LOG.success("Compiled");
                    resolve();
                });
        } else {
            gulp
                .src(PATHS.sass.entry.array)
                .pipe(plumber(LOG.notify))
                .pipe(sourcemaps.init())
                .pipe(sass(sass_config))

                // Autoprefix
                .pipe(autoprefixer({ browsers: BROWSERS }))

                // Output non-minified
                .pipe(gulp.dest(PATHS.sass.dest))

                // Minify
                .pipe(cssnano(nano_config))
                .pipe(rename({ suffix: ".min" }))

                // Write out sourcemaps
                .pipe(sourcemaps.write("./maps"))

                // Output minified CSS
                .pipe(plumber.stop())
                .pipe(gulp.dest(PATHS.sass.dest))

                .on("error", err => reject(LOG.error(err)))
                .on("end", () => {
                    LOG.success("Compiled");
                    resolve(done);
                });
        }

        done();
    });
};
