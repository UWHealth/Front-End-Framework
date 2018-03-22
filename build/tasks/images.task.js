/**
 * @fileoverview Processes images through imagemin and saves the processed images to the destination.
**/

const gulp = require('gulp');
const browserSync = require('./browserSync.task.js').browserSync;
const imagemin = require('gulp-imagemin');

const plumber = require('gulp-plumber');
const pngquant = require('imagemin-pngquant');
const changed = require('gulp-changed');

const LOG   = require('../tools/logger.js');
const PATHS = require(`${process.cwd()}/config/paths.config.js`);
const reload = (browserSync.reload) ? browserSync.reload : browserSync;

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
};
