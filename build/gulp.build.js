const glob = require('fast-glob');
const path = require('path');
const { series, parallel } = require('gulp');
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

// Error collection
gulp.on('error', function(err) {
    new Logger('General').error(err.error);
});

/* ---------------------------------
 * Utility Tasks
 * --------------------------------*/

// Watch file paths for changes (as defined in the paths letiable)
module.exports.watch = require(TASKS.watch);

// Delete contents of compilation folders
module.exports.clean = require(TASKS.clean);

// Copy static files to dist/public
module.exports.copy = require(TASKS.copy);

// Report file sizes
module.exports.size = require(TASKS.size);

// Local Server
module.exports.browserSync = require(TASKS.browserSync);

/* ---------------------------------
 * Compilation Tasks
 * --------------------------------*/

// Image copying and compilation
module.exports.images = require(TASKS.images);

// Sass processing
module.exports.style = require(TASKS.style);

// Compile style guide
module.exports.styleGuide = require(TASKS.styleguide);

// Javascript concatenating, bundling, and webpack-ifying
module.exports.js = (done) => {
    require(TASKS.js).run(done);
};

/* ---------------------------------
 * Base Tasks
 * --------------------------------*/

// First task called when gulp is invoked
module.exports.default = (done) => {
    return series(defaultTaskOrder())(done);
};
