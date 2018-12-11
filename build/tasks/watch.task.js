const gulp = require('gulp');

const CWD = process.cwd();
const PATHS = require(`${CWD}/config/paths.config`);

const opts = { ignoreInitial: true };

module.exports = function() {
    // Watch sass, styleguide, images, and fonts for changes
    gulp.watch(PATHS.style.watch.array, opts, gulp.parallel('style'));
    gulp.watch(PATHS.styleGuide.watch.array, opts, gulp.series('styleGuide'));
    gulp.watch(PATHS.images.watch.array, opts, gulp.parallel('images'));
    gulp.watch(PATHS.copy.watch.array, opts, gulp.parallel('copy'));

    watchWebpackConfigs();
};

function watchWebpackConfigs() {
    const webpack = require('./js.task.js');
    // Watch for webpack config changes,
    // Restarts webpack using the new changes
    gulp.watch(
        [
            `${PATHS.folders.build}/webpack.build.js`,
            `${PATHS.folders.build.replace(/\\/g, '/')}/**/webpack/**/*.js`,
        ],
        opts,
        gulp.series((done) => webpack.restart(done))
    );

    // Watch for new demos or other such entries
    // where webpack needs to create new html pages.
    // Restarts webpack to add new files
    gulp.watch(PATHS.demos.watch.all, opts).on('add', (done) =>
        webpack.restart(done)
    );
    gulp.watch(PATHS.demos.watch.all, opts).on('unlink', (done) =>
        webpack.restart(done)
    );
}
