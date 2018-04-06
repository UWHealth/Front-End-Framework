/**
 * @fileoverview Processes scss, adds browser prefixes, and minifies before saving to the destination folder.
**/

const gulp         = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cssnano      = require('gulp-cssnano');
const plumber      = require('gulp-plumber');
const rename       = require('gulp-rename');
const sass         = require('gulp-sass');
const sourcemaps   = require('gulp-sourcemaps');

const CWD          = process.cwd();
const BROWSERS     = require(`${CWD}/package.json`).browserslist;
const Logger       = require('../tools/logger.js');
const MODE         = require('../tools/mode');
const PATHS        = require(`${CWD}/config/paths.config.js`);

const browserSync  = require('browser-sync');
const bs           = browserSync.has(PATHS.folders.project) && browserSync.get(PATHS.folders.project);
const bsStream     = bs.stream;

const LOG = new Logger('Sass');

module.exports = (done) => {
    LOG.spinner('Compiling ');

    return new Promise((resolve, reject) => {
        if (MODE.production) {
            gulp
                .src(PATHS.sass.entry.array)
                .pipe(plumber(LOG.notify))
                .pipe(sass({
                    outputStyle: 'compressed',
                    errLogToConsole: true
                }))
                // Autoprefix
                .pipe(autoprefixer({ browsers: BROWSERS }))

                // Minify
                .pipe(cssnano({ discardComments: {removeAll: true}, zindex: false }))

                // Output minified CSS
                .pipe(plumber.stop())
                .pipe(gulp.dest(PATHS.sass.dest))
                .pipe(bsStream())

                .on('error', (err) => reject(LOG.error(err)))
                .on('end', () => resolve(LOG.success('Compiled ')));
        }
        else {
            gulp
                .src(PATHS.sass.entry.array)
                .pipe(plumber(LOG.notify))
                .pipe(sourcemaps.init())
                .pipe(sass({
                    outputStyle: 'expanded',
                    sourcemap: true,
                    errLogToConsole: true
                }))
                // Autoprefix
                .pipe(autoprefixer({ browsers: BROWSERS }))
                // Output non-minified
                .pipe(gulp.dest(PATHS.sass.dest))
                // Minify
                .pipe(cssnano({ discardComments: {removeAll: true}, zindex: false }))
                .pipe(rename({ suffix: '.min' }))
                // Write out sourcemaps
                .pipe(sourcemaps.write('./maps'))
                // Output minified CSS
                .pipe(plumber.stop())
                .pipe(gulp.dest(PATHS.sass.dest))

                .on('error', (err) => reject(LOG.error(err)))
                .on('end', () => resolve(LOG.success('Compiled')));
        }

        done();
    });
};
