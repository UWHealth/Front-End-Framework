const gulp         = require('gulp');
const series       = gulp.series;
const parallel     = gulp.parallel;

const styleguide   = require('markdown-documentation-generator');

const LOG          = require('./tools/logger.js');
const MODE         = require('./tools/mode');
const PATHS        = require('../config/paths.config.js');
const SG_CONFIG    = require(PATHS.styleGuide.entry.config);
const TASKS        = require('./tools/require-tasks.js');

function taskOrder() {
    MODE.show();

    return !MODE.production ?
        // DEV
        series('clean', 'images', parallel('webpack', 'copy', 'sass'), 'styleGuide', parallel('watch', 'browserSync'))
        :
        MODE.localProduction ?
            // LOCAL-PROD
            series('clean', parallel('images', 'copy'), parallel('sass', 'webpack', 'hbs'), 'styleGuide', parallel('watch', 'browserSync'))
            :
            // PROD
            series('clean', parallel('images', 'copy'), parallel('sass', 'webpack', 'hbs'), 'styleGuide', 'size');
}

/* ---------------------------------
 * Utility Tasks
 * --------------------------------*/

// Watch file paths for changes (as defined in the paths letiable)
gulp.task('watch', TASKS.watch);

// Delete contents of compilation folders
gulp.task('clean', TASKS.clean);

// Copy static files to dist/public
gulp.task('copy', TASKS.copy);

// Report file sizes
gulp.task('size', TASKS.size);

// Local Server
gulp.task('browserSync', TASKS.browserSync);

/* ---------------------------------
 * Compilation Tasks
 * --------------------------------*/

// Handlebars compilation
gulp.task('hbs', TASKS.hbs);

// Image copying and compilation
gulp.task('images', TASKS.images);

// Sass processing
gulp.task('sass', TASKS.sass);

// Compile style guide
gulp.task('styleGuide', () =>
    styleguide.create(SG_CONFIG)
        .catch(new LOG('Style Guide').error)
);

// Javascript concatenating, bundling, and webpack-ifying
gulp.task('webpack', TASKS.webpack);


/* ---------------------------------
 * Base Tasks
 * --------------------------------*/

// First task called when gulp is invoked
gulp.task('default', series(taskOrder(), function finish(done) {
    done();
}));

gulp.on('error', function(err) {
    const log = new LOG('Gulp');
    log.error(err.error);
    log.notify(err.error);
});
