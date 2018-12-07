const gulp = require('gulp');
const series = gulp.series;

const TASKS = require('./helpers/require-tasks.js');
const Logger = require('./helpers/logger.js');
const LOG = new Logger('Gulp');

LOG.spinner('Starting');

function taskOrder() {
    const MODE = require('./helpers/mode');
    const p = gulp.parallel;

    LOG.ora.stopAndPersist({ text: MODE.message() });

    return !MODE.production
        ? // DEV
          series(
              'clean',
              p('style'),
              p('images', 'copy'),
              p('watch', 'browserSync')
          )
        : MODE.localProduction
        ? // LOCAL-PROD
          series(
              'clean',
              p('style'),
              p('images', 'copy'),
              p('watch', 'browserSync')
          )
        : // PROD
          series(
              'clean',
              p('style', 'webpack','images', 'copy'),
              'styleGuide',
              'size'
          );
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
gulp.task('style', require(TASKS.style));

// Compile style guide
gulp.task('styleGuide', require(TASKS.styleguide));

// Javascript concatenating, bundling, and webpack-ifying
gulp.task('webpack', (done) => {
    require(TASKS.webpack)(true, done);
});

/* ---------------------------------
 * Base Tasks
 * --------------------------------*/

// First task called when gulp is invoked
gulp.task(
    'default',
    series(taskOrder(), function finish(done) {
        done();
    })
);

gulp.on('error', function(err) {
    new Logger('General').error(err.error);
});
