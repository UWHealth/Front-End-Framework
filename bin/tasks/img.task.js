/**
 * @fileoverview Build image assets
**/

const gulp = require('gulp');
const browserSync = require('browserSync');
const imagemin = require('gulp-imagemin');

const plumber = require('gulp-plumber');
const pngquant = require('imagemin-pngquant');
const changed = require('gulp-changed');

const LOG   = require('../helpers/logger.js');
const PATHS = require('../paths.config.js');
const reload = browserSync.reload;

module.exports = function() {
    return gulp
        .src(PATHS.img.entry.array)
        .pipe(plumber(new LOG('IMG task').error))
        .pipe(changed(PATHS.img.dest))
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [
                {
                    removeViewBox: false
                },
                {
                    cleanupIDs: false
                }
            ],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(PATHS.img.dest))
        .pipe(reload({
            stream: true
        }));
};
