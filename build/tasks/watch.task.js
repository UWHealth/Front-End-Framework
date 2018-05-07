const gulp = require('gulp');

const cwd = process.cwd();
const PATHS = require(cwd + '/config/paths.config.js');
const MODE = require('../helpers/mode.js');
const glob = require('fast-glob');
const path = require('path');

const opts = {ignoreInitial: true};

module.exports = function() {
    // Watch sass, styleguide, images, and fonts for changes
    gulp.watch(PATHS.sass.watch.all, opts, gulp.parallel('sass'));
    gulp.watch(PATHS.styleGuide.watch.array, opts, gulp.series('styleGuide'));
    gulp.watch(PATHS.images.watch.array, opts, gulp.parallel('images'));
    gulp.watch(PATHS.fonts.watch.array, opts, gulp.parallel('copy'));

    // Watch handlebars files in local production mode
    if (MODE.localProduction) {
        gulp.watch(PATHS.hbs.watch.array, opts, gulp.series('hbs'));
    }

    // Watch for webpack config changes,
    // Restarts webpack using the new changes
    gulp.watch(
        [
            `${PATHS.folders.build}/webpack.build.js`,
            `${PATHS.folders.build.replace(/\\/g, '/')}/webpack/**/*.js`,
        ],
        opts,
        gulp.series((done) => {
            flushWebpackFromCache([
                './build/webpack/*',
                './build/webpack/**/*',
                './build/webpack.build.js'
            ]);
            done();
        }, 'webpack')
    );

    // Watch for new demos or other such entries
    // where webpack needs to create new html pages.
    // Restarts webpack to add new files
    gulp.watch(
        [PATHS.demos.entry.svelte], opts)
        .on('add', gulp.series('webpack'));
};

function flushWebpackFromCache(configPaths) {
    const webpackConfigs = glob.sync(configPaths);

    require('./clean.task.js').specific(PATHS.js.dest, () => {
        webpackConfigs.forEach((config) => {
            const fullPath = path.resolve(process.cwd(), config);
            return fullPath ? delete require.cache[require.resolve(fullPath)] : null;
        });
    });
}
