const gulp         = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cssnano      = require('gulp-cssnano');
const plumber      = require('gulp-plumber');
const rename       = require('gulp-rename');
const sass         = require('gulp-sass');
const size         = require('gulp-size');
const sourcemaps   = require('gulp-sourcemaps');
const notify       = require('gulp-notify');

const BROWSERS     = require('../../package.json').browserslist;
const MODE         = require('../helpers/mode');
const PATHS        = require('../paths.config.js');

module.exports = () => {
    if (MODE.production) {
        return gulp
            .src(PATHS.sass.entry.array)
            .pipe(plumber({
                errorHandler: _error
            }))
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
        .pipe(plumber({
            errorHandler: _error
        }))
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
        // Report size of uncompressed CSS
        .pipe(size({
            title: 'CSS', gzip: true, showFiles: true
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
        .pipe(sourcemaps.write('./maps'))
        // Report size of compressed files
        .pipe(size({
            title: 'CSS (minified)', gzip: true, showFiles: true
        }))
        // Output minified CSS
        .pipe(gulp.dest(PATHS.sass.dest));
}


// Error handler
function _error(err) {
    notify.onError({
        title: "Error",
        subtitle: "<%= error.plugin %>",
        message: "<%= error.message %>"
    })(err);

    this.emit('end');
}
