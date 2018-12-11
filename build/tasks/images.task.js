/**
 * @fileoverview Processes images through imagemin and saves the processed images to the destination.
 **/

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

const plumber = require('gulp-plumber');
const changed = require('gulp-changed');

const Logger = require('../helpers/logger.js');
const PATHS = require(`${process.cwd()}/config/paths.config.js`);
const MODE = require('../helpers/mode.js');

const LOG = new Logger('Images');

module.exports = () => {
    //LOG.info('Compressing');

    let imageStream = gulp
        .src(PATHS.images.entry.array)
        .pipe(plumber(LOG.error))
        .pipe(changed(PATHS.images.dest));

    if (MODE.production) {
        imageStream = imageStream.pipe(
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
        );
    }

    return imageStream.pipe(gulp.dest(PATHS.images.dest));
};
