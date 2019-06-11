const glob = require('fast-glob');
const path = require('path');
const gulp = require('gulp');
const series = gulp.series;

const MODE = require('./helpers/mode.js');
const Logger = require('./helpers/logger.js');
const LOG = new Logger('Gulp');

function getTasks() {
    const tasks = {};
    glob.sync(`${process.cwd()}/build/tasks/*.task.js`).forEach((task) => {
        tasks[path.basename(task, '.task.js')] = require.resolve(
            path.resolve(task)
        );
    });
    return tasks;
}

function defaultTaskOrder() {
    const p = gulp.parallel;

    // Clear console, then show mode message
    LOG.clear();
    LOG.ora.stopAndPersist({ text: MODE.message() });

    return MODE.dev
        ? // DEV
          series(
              'clean',
              p('style', 'images', 'copy'),
              p('browserSync', 'watch')
          )
        : MODE.localProduction
        ? // LOCAL-PROD
          series(
              'clean',
              p('style', 'images', 'copy'),
              p('watch', 'browserSync')
          )
        : // PROD
          series(
              'clean',
              'style',
              p('js', 'images', 'copy'),
              'styleGuide',
              'size'
          );
}

const TASKS = getTasks();

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

// Image copying and compilation
gulp.task('images', require(TASKS.images));

// Sass processing
gulp.task('style', require(TASKS.style));

// Compile style guide
gulp.task('styleGuide', require(TASKS.styleguide));

// Javascript concatenating, bundling, and webpack-ifying
gulp.task('js', (done) => {
    require(TASKS.js).run(done);
});

/* ---------------------------------
 * Base Tasks
 * --------------------------------*/

// First task called when gulp is invoked
gulp.task('default', (done) => {
    return series(defaultTaskOrder())(done);
});

gulp.on('error', function(err) {
    new Logger('General').error(err.error);
});
