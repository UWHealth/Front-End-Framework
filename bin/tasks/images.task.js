/**
 * @fileoverview Build image assets
**/

const gulp = require('gulp');
const browserSync = require('browser-sync');
const imagemin = require('gulp-imagemin');

const plumber = require('gulp-plumber');
const pngquant = require('imagemin-pngquant');
const changed = require('gulp-changed');

const LOG   = require('../tools/logger.js');
const PATHS = require('../paths.config.js');
const reload = browserSync.reload;

module.exports = function() {
    return gulp
        .src(PATHS.images.entry.all)
        .pipe(plumber(new LOG('Images task').error))
        .pipe(changed(PATHS.images.dest))
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
        .pipe(gulp.dest(PATHS.images.dest))
        .pipe(reload({
            stream: true
        }));
};
