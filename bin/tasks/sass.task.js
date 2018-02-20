const gulp         = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cssnano      = require('gulp-cssnano');
const plumber      = require('gulp-plumber');
const rename       = require('gulp-rename');
const sass         = require('gulp-sass');
const size         = require('gulp-size');
const sourcemaps   = require('gulp-sourcemaps');

const LOG          = require('../tools/logger.js');
const BROWSERS     = require('../../package.json').browserslist;
const MODE         = require('../tools/mode');
const PATHS        = require('../paths.config.js');

module.exports = () => {
    if (MODE.production) {
        return gulp
            .src(PATHS.sass.entry.array)
            .pipe(plumber(new LOG('Sass task').notify))
            .pipe(sass({
                outputStyle: 'compressed',
                errLogToConsole: true
            }))
            // Autoprefix
            .pipe(autoprefixer({
                browsers: BROWSERS
            }))
            // Minify
            .pipe(cssnano({
                discardComments: {removeAll: true},
                zindex: false
            }))
            .pipe(size({
                title: 'CSS (minified)', gzip: true, showFiles: true
            }))
            // Output minified CSS
            .pipe(gulp.dest(PATHS.sass.dest));
    }

    return gulp
        .src(PATHS.sass.entry.array)
        .pipe(plumber(new LOG('Sass task').notify))
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded',
            sourcemap: true,
            errLogToConsole: true
        }))
        // Autoprefix
        .pipe(autoprefixer({
            browsers: BROWSERS
        }))
        // Output non-minified
        .pipe(gulp.dest(PATHS.sass.dest))
        // Minify
        .pipe(cssnano({
            discardComments: {removeAll: true},
            zindex: false
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        // Report size of compressed files
        .pipe(size({
            title: 'CSS (minified)', gzip: true, showFiles: true
        }))
        // Write out sourcemaps
        .pipe(sourcemaps.write('./maps'))
        // Output minified CSS
        .pipe(gulp.dest(PATHS.sass.dest));
};
