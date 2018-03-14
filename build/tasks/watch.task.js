const gulp = require('gulp');
const PATHS = require('../../config/paths.config.js');
const MODE = require('../tools/mode.js');

module.exports = function() {
    gulp.watch(PATHS.sass.watch.all, gulp.series('sass'));
    gulp.watch(PATHS.styleGuide.watch.array, gulp.series('styleGuide'));
    gulp.watch(PATHS.images.watch.array, gulp.series('images'));
    gulp.watch(PATHS.fonts.watch.array, gulp.series('copy'));

    if (MODE.localProduction) {
        gulp.watch(PATHS.hbs.watch.array, gulp.series('hbs'));
    }
};
