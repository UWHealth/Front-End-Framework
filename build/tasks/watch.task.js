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
};
