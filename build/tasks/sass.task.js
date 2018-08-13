/**
 * @fileoverview Processes scss, adds browser prefixes, and minifies before saving to the destination folder.
 *
 **/
/* eslint "compat/compat": "off" */

const CWD = process.cwd();
const BROWSERS = require(`${CWD}/package.json`).browserslist;
const Logger = require('../helpers/logger.js');
const MODE = require('../helpers/mode');
const PATHS = require(`${CWD}/config/paths.config.js`);
const sassConfig = require(`../helpers/sass-config.js`);

const nanoConfig = {
    discardComments: { removeAll: true },
    zindex: false,
};

const LOG = new Logger('Sass');

module.exports = () => {
    const gulp = require('gulp');
    const autoprefixer = require('gulp-autoprefixer');
    const cssnano = require('gulp-cssnano');
    const plumber = require('gulp-plumber');
    const rename = require('gulp-rename');
    const sass = require('gulp-sass');
    const sourcemaps = require('gulp-sourcemaps');

    LOG.spinner('Compiling ');

    if (MODE.production) {
        return (
            gulp
                .src(PATHS.sass.entry.array)
                .pipe(plumber(LOG.error))
                .pipe(sass.sync(sassConfig))
                // Autoprefix
                .pipe(autoprefixer({ browsers: BROWSERS }))

                // Minify
                .pipe(cssnano(nanoConfig))

                .pipe(plumber.stop())
                .pipe(gulp.dest(PATHS.sass.dest))

                // .on('error', LOG.error)
                .on('end', () => {
                    return LOG.success('Compiled');
                })
        );
    } else {
        return (
            gulp
                .src(PATHS.sass.entry.array)
                .pipe(sourcemaps.init())

                .pipe(plumber(LOG.error))
                .pipe(sass.sync(sassConfig))

                // Autoprefix
                .pipe(autoprefixer({ browsers: BROWSERS }))

                // Output non-minified
                .pipe(gulp.dest(PATHS.sass.dest))

                // Minify
                .pipe(cssnano(nanoConfig))
                .pipe(rename({ suffix: '.min' }))

                // Write out sourcemaps
                .pipe(sourcemaps.write('./maps'))
                .pipe(plumber.stop())

                // Output minified CSS
                .pipe(gulp.dest(PATHS.sass.dest))

                // .on('error', LOG.error)
                .on('end', () => {
                    return LOG.success('Compiled');
                })
        );
    }
};
