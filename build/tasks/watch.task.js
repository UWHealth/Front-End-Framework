const gulp = require('gulp');

const cwd = process.cwd();
const PATHS = require(cwd + '/config/paths.config.js');
const MODE = require('../tools/mode.js');
const LOG = require('../tools/logger.js');
const webpack = require('./webpack.task.js');

module.exports = function() {
    let opts = {ignoreInitial: true};
    gulp.watch(PATHS.sass.watch.all, opts, gulp.parallel(
        'sass',
    ));
    gulp.watch(PATHS.styleGuide.watch.array, opts, gulp.series('styleGuide'));
    gulp.watch(PATHS.images.watch.array, opts, gulp.parallel(
        'images',
    ));
    gulp.watch(PATHS.fonts.watch.array, opts, gulp.parallel(
        'copy',
    ));
    gulp.watch([
            `${PATHS.root.build}/webpack.build.js`,
            `${PATHS.root.build}/webpack/**/*.js`],
            webpack
    );

    if (MODE.localProduction) {
        gulp.watch(PATHS.hbs.watch.array, gulp.series('hbs'));
    }
    new LOG('Watching').info(' Sass, Style Guide, Images, and Fonts for changes...', true);
};
