const gulp = require('gulp');

const cwd = process.cwd();
const PATHS = require(cwd + '/config/paths.config.js');
const MODE = require('../tools/mode.js');
const LOG = require('../tools/logger.js');
const restartWebpack = require('./webpack.task.js');

const opts = {ignoreInitial: true};

module.exports = function() {

    gulp.watch(PATHS.sass.watch.all, opts, gulp.parallel('sass'));
    gulp.watch(PATHS.styleGuide.watch.array, opts, gulp.series('styleGuide'));
    gulp.watch(PATHS.images.watch.array, opts, gulp.parallel('images'));
    gulp.watch(PATHS.fonts.watch.array, opts, gulp.parallel('copy'));

    // Watch for webpack config changes
    gulp.watch(
        [
            `${PATHS.root.build}/webpack.build.js`,
            `${PATHS.root.build.replace(/\\/g, '/')}/webpack/**/*.js`,
        ],
        {ignoreInitial: true, alwaysStats: true, queue: true},
        restartWebpack
    );

    var log = console.log.bind(console);
    let watcher = gulp.watch(
        [
            `../_src/components/**/*.html`,
            PATHS.demos.entry.svelte,
            PATHS.samples.entry.all
        ],
        {ignoreInitial: true, alwaysStats: true, queue: true}
    );

    watcher.on('add', gulp.series('webpack'));

    if (MODE.localProduction) {
        gulp.watch(PATHS.hbs.watch.array, opts, gulp.series('hbs'));
    }

    new LOG('Watching').info(' Sass, Style Guide, Images, and Fonts for changes...', true);
};

// function newWebpackFiles(path, stats) {
//     console.log(path);
// }
