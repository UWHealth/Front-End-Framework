const gulp       = require('gulp');
const series     = gulp.series;
const parallel   = gulp.parallel;

const TASKS      = require('./tools/require-tasks.js');
const Logger     = require('./tools/logger.js');
const LOG        = new Logger('Gulp');

LOG.spinner('Starting');

function taskOrder() {
    const MODE  = require('./tools/mode');

    LOG.ora.stopAndPersist({text: MODE.message()});

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
gulp.task('watch', require(TASKS.watch));

// Delete contents of compilation folders
gulp.task('clean', require(TASKS.clean));

// Copy static files to dist/public
gulp.task('copy', require(TASKS.copy));

// Report file sizes
gulp.task('size', require(TASKS.size));

// Local Server
gulp.task('browserSync', require(TASKS.browserSync));

/* ---------------------------------
 * Compilation Tasks
 * --------------------------------*/

// Handlebars compilation
gulp.task('hbs', require(TASKS.hbs));

// Image copying and compilation
gulp.task('images', require(TASKS.images));

// Sass processing
gulp.task('sass', require(TASKS.sass));

// Compile style guide
gulp.task('styleGuide', require(TASKS.styleguide));

// Javascript concatenating, bundling, and webpack-ifying
gulp.task('webpack', require(TASKS.webpack));


/* ---------------------------------
 * Base Tasks
 * --------------------------------*/

// First task called when gulp is invoked
gulp.task('default', series(taskOrder(), function finish(done) {
    done();
}));

gulp.on('error', function(err) {
    new Logger('General').error(err.error);
});
