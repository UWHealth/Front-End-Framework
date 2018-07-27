/**
 * @fileoverview Processes images through imagemin and saves the processed images to the destination.
 **/

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

const plumber = require('gulp-plumber');
const pngquant = require('imagemin-pngquant');
const changed = require('gulp-changed');

const Logger = require('../helpers/logger.js');
const PATHS = require(`${process.cwd()}/config/paths.config.js`);

const LOG = new Logger('Images');

module.exports = () => {
    LOG.spinner('Compressing');

    return gulp
        .src(PATHS.images.entry.all)
        .pipe(plumber(LOG.error))
        .pipe(changed(PATHS.images.dest))
        .pipe(
            imagemin(
                [
                    imagemin.gifsicle(),
                    imagemin.optipng(),
                    imagemin.jpegtran({ progressive: true }),
                    imagemin.svgo({
                        plugins: [
                            { removeViewBox: false },
                            { cleanupIDs: false },
                        ],
                    }),
                ],
                { verbose: false }
            )
        )
        .on('end', () => {
            LOG.success('Compressed ');
        })
        .pipe(gulp.dest(PATHS.images.dest));
};
