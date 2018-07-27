/**
 * @fileoverview Processes scss, adds browser prefixes, and minifies before saving to the destination folder.
 *
 **/
/* eslint "compat/compat": "off" */

const CWD = process.cwd();
const BROWSERS = require(`${CWD}/package.json`).browserslist;
const Logger = require('../helpers/logger.js');
const MODE = require('../helpers/mode');
const PATHS = require(`${CWD}/config/paths.config.js`);

/**
 * Allows for sass imports to use aliases to represent the folder paths (similar to webpack)
 * @reference            - https://github.com/sass/node-sass#importer
 * @return {Object}      - Resolved path to url, with aliases replaced
 */
function aliasPath(url, prev, done) {
    const path = require('path');

    const aliases = Object.keys(PATHS.aliases);
    const match = aliases.filter(
        (alias) => url.indexOf(alias) > -1 && url.indexOf(alias) < 2
    );
    return {
        file: match[0]
            ? path.resolve(
                  PATHS.aliases[match[0]],
                  url.replace(match[0] + '/', '')
              )
            : url,
    };
}

const sassConfig = {
    outputStyle: 'expanded',
    errLogToConsole: true,
    includePaths: [PATHS.folders.src, PATHS.folders.config],
    importer: aliasPath,
};

const nanoConfig = {
    discardComments: { removeAll: true },
    zindex: false,
};

const LOG = new Logger('Sass');

function handleError(err) {
    LOG.error(err);
    this.emit('end');
}

module.exports = () => {
    const gulp = require('gulp');
    const autoprefixer = require('gulp-autoprefixer');
    const cssnano = require('gulp-cssnano');
    const plumber = require('gulp-plumber');
    const rename = require('gulp-rename');
    const sass = require('gulp-sass');
    const sourcemaps = require('gulp-sourcemaps');

    LOG.spinner('Compiling ');

    if (MODE.production) {
        return (
            gulp
                .src(PATHS.sass.entry.array)
                .pipe(plumber(LOG.error))
                .pipe(sass.sync(sassConfig))
                // Autoprefix
                .pipe(autoprefixer({ browsers: BROWSERS }))

                // Minify
                .pipe(cssnano(nanoConfig))

                .pipe(plumber.stop())
                .pipe(gulp.dest(PATHS.sass.dest))

                // .on('error', LOG.error)
                .on('end', () => {
                    return LOG.success('Compiled');
                })
        );
    } else {
        return (
            gulp
                .src(PATHS.sass.entry.array)
                .pipe(sourcemaps.init())

                .pipe(plumber(LOG.error))
                .pipe(sass.sync(sassConfig))

                // Autoprefix
                .pipe(autoprefixer({ browsers: BROWSERS }))

                // Output non-minified
                .pipe(gulp.dest(PATHS.sass.dest))

                // Minify
                .pipe(cssnano(nanoConfig))
                .pipe(rename({ suffix: '.min' }))

                // Write out sourcemaps
                .pipe(sourcemaps.write('./maps'))
                .pipe(plumber.stop())

                // Output minified CSS
                .pipe(gulp.dest(PATHS.sass.dest))

                // .on('error', LOG.error)
                .on('end', () => {
                    return LOG.success('Compiled');
                })
        );
    }
};
