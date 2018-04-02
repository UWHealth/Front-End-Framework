const gulp = require('gulp');

const cwd = process.cwd();
const PATHS = require(cwd + '/config/paths.config.js');
const MODE = require('../tools/mode.js');
const Logger = require('../tools/logger.js');

const opts = {ignoreInitial: true};

module.exports = function() {
    const LOG = new Logger('Watching');
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
            delete require.cache[require.resolve('../webpack.build.js')];
            delete require.cache[require.resolve('../webpack/js.webpack.config.js')];
            delete require.cache[require.resolve('../webpack/samples.webpack.config.js')];
            delete require.cache[require.resolve('../webpack/demos.webpack.config.js')];
            done();
        }, 'webpack')
    );

    // Watch for new samples or components are added,
    // where webpack needs to create new html pages.
    // Restarts webpack to add new files
    gulp.watch([PATHS.demos.entry.svelte, PATHS.samples.entry.all], opts)
        .on('add', gulp.series('webpack'));

    LOG.info(' Sass, Style Guide, Images, and Fonts for changes...', true);
};

// function newWebpackFiles(path, stats) {
//     console.log(path);
// }
