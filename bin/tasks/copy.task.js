const gulp = require('gulp');
const plumber = require('gulp-plumber');
const changed = require('gulp-changed');

const LOG = require('../tools/logger.js');
const PATHS = require('../paths.config.js');

module.exports = () =>
    gulp.src(PATHS.copy.entry.array)
        .pipe(plumber(new LOG('Copy task').error))
        .pipe(changed(PATHS.copy.dest))
        .pipe(gulp.dest(PATHS.copy.dest));
