/**
 * @fileoverview Build image assets
**/

const gulp = require('gulp');
const browserSync = require('browserSync');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const path = require('path');
const plumber = require('gulp-plumber');
const pngquant = require('imagemin-pngquant');
const changed = require('gulp-changed');

const config = require('../paths.config.js');
const reload = browserSync.reload;

module.exports = function() {
    return gulp
        .src(path.join(config.root.dev, config.img.entry, config.img.extensions))
        .pipe(plumber({
            errorHandler: notify.onError('<%= error.plugin %> (<%= error.fileName %>): <%= error.message %>')
        }))
        .pipe(changed(path.join(config.root.dist, config.img.dist)))
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
        .pipe(gulp.dest(path.join(config.root.dist, config.img.dist)))
        .pipe(reload({
            stream: true
        }));
};
