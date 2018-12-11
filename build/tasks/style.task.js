/**
 * @fileoverview Processes scss, adds browser prefixes, and minifies before saving to the destination folder.
 *
 **/

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
    const postcss = require('gulp-postcss');
    const plumber = require('gulp-plumber');
    const rename = require('gulp-rename');
    const sass = require('gulp-sass');
    const sourcemaps = require('gulp-sourcemaps');
    LOG.spinner('Compiling ');

    const initialInput = () => gulp
        .src(PATHS.style.entry.array)
        .pipe(plumber(LOG.error))
        .pipe(sass.sync(sassConfig));

    if (MODE.production) {
        return (
            initialInput()
                // Autoprefix, Minify
                .pipe(
                    postcss([
                        require('autoprefixer')({
                            browsers: BROWSERS,
                            grid: 'autoplace',
                        }),
                        require('cssnano')(nanoConfig),
                    ])
                )

                .pipe(plumber.stop())
                .pipe(gulp.dest(PATHS.style.dest))
                .on('end', () => {
                    return LOG.success('Compiled');
                })
        );
    } else {
        return (
            initialInput()

                // Autoprefix
                .pipe(
                    postcss([
                        require('autoprefixer')({
                            browsers: BROWSERS,
                            grid: 'autoplace',
                        }),
                    ])
                )

                // Output non-minified
                .pipe(gulp.dest(PATHS.style.dest))

                // Minify
                .pipe(postcss([require('cssnano')(nanoConfig)]))
                .pipe(rename({ suffix: '.min' }))

                // Write out sourcemaps
                .pipe(sourcemaps.write('./maps'))
                .pipe(plumber.stop())

                // Output minified CSS
                .pipe(gulp.dest(PATHS.style.dest))

                .on('end', () => {
                    return LOG.success('Compiled');
                })
        );
    }
};