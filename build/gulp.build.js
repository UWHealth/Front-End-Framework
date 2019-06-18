const glob = require('fast-glob');
const path = require('path');
const { task, series, parallel, on } = require('gulp');
const gulp = require('gulp');

const MODE = require('./helpers/mode.js');
const Logger = require('./helpers/logger.js');
const LOG = new Logger('Gulp');

function getTasks() {
    const tasks = {};
    const cwd = process.cwd().replace(/\\/g, '/'); // globs must use '/'
    const taskPaths = glob.sync(`${cwd}/build/tasks/*.task.js`);

    // Add tasks to task object as { taskName: taskPath }
    taskPaths.forEach((task) => {
        tasks[path.basename(task, '.task.js')] = require.resolve(
            path.resolve(task)
        );
    });
    return tasks;
}

function defaultTaskOrder() {
    const p = parallel;

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
task('watch', require(TASKS.watch));

// Delete contents of compilation folders
task('clean', require(TASKS.clean));

// Copy static files to dist/public
task('copy', require(TASKS.copy));

// Report file sizes
task('size', require(TASKS.size));

// Local Server
task('browserSync', require(TASKS.browserSync));

/* ---------------------------------
 * Compilation Tasks
 * --------------------------------*/

// Image copying and compilation
task('images', require(TASKS.images));

// Sass processing
task('style', require(TASKS.style));

// Compile style guide
task('styleGuide', require(TASKS.styleguide));

// Javascript concatenating, bundling, and webpack-ifying
task('js', (done) => {
    require(TASKS.js).run(done);
});

/* ---------------------------------
 * Base Tasks
 * --------------------------------*/

// First task called when gulp is invoked
task('default', (done) => {
    return series(defaultTaskOrder())(done);
});

gulp.on('error', function(err) {
    new Logger('General').error(err.error);
});
