/**
 * @fileoverview Processes images through imagemin and saves the processed images to the destination.
**/

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

const plumber = require('gulp-plumber');
const pngquant = require('imagemin-pngquant');
const changed = require('gulp-changed');

const logger   = require('../tools/logger.js');
const PATHS    = require(`${process.cwd()}/config/paths.config.js`);

const LOG = new logger('Images');

module.exports = () => {
    LOG.spinner('Compressing\n');

    return gulp
        .src(PATHS.images.entry.all)
        .pipe(plumber(LOG.error))
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
        .on('end', () => { LOG.success('compressed'); })
        .pipe(gulp.dest(PATHS.images.dest));
};
