const gulp         = require('gulp');
const series       = gulp.series;
const parallel     = gulp.parallel;


const styleguide   = require('markdown-documentation-generator');
const del          = require('del');

const LOG          = require('./bin/helpers/logger.js');
const MODE         = require('./bin/helpers/mode');
const PATHS        = require('./bin/paths.config.js');
const SG_CONFIG    = require(PATHS.styleGuide.entry.config);


const TASKS = {
    'browserSync': require('./bin/tasks/browserSync.task.js'),
    'hbs': require('./bin/tasks/hbs.task.js'),
    'webpack': require('./bin/tasks/webpack.task.js'),
    'sass': require('./bin/tasks/sass.task.js'),
};

function taskOrder(done) {
    MODE.show();

    return !MODE.production ?
        // DEV
        ['clean', parallel('sass', 'webpack'), 'styleGuide', parallel('watch', 'browserSync')]
        :
        MODE.localProduction ?
            // LOCAL-PROD
            ['clean', parallel('sass', 'webpack'), 'styleGuide', parallel('watch', 'browserSync')]
            :
            // PROD
            ['clean', parallel('sass', 'webpack', 'hbs'), 'styleGuide'];
}

/* ---------------------------------
 * Utility Tasks
 * --------------------------------*/

// Watch file paths for changes (as defined in the paths letiable)
gulp.task('watch', function() {
    gulp.watch(PATHS.sass.watch.array, gulp.series('sass'));
    gulp.watch(PATHS.styleGuide.watch.array, gulp.series('styleGuide'));
    gulp.watch(PATHS.hbs.watch.array, gulp.series('hbs'));
});

// Delete contents of compilation folders
gulp.task('clean', function () {
    return del(PATHS.clean.entry.array);
});


// Local Server
gulp.task('browserSync', TASKS.browserSync);

/* ---------------------------------
 * Compilation Tasks
 * --------------------------------*/

// Sass processing
gulp.task('sass', TASKS.sass);

// Javascript concatenating, bundling, and webpack-ifying
gulp.task('webpack', TASKS.webpack);

// Handlebars compilation
gulp.task('hbs', TASKS.hbs);

// // Compile .kit files into html
// gulp.task('kits', function() {
//     return gulp
//         .src(PATHS.kits.entry.array)
//         .pipe(plumber({errorHandler: new LOG('kits task').notify}))
//         .pipe(kit())
//         .pipe(size({title: 'HTML', showFiles: true, gzip: true}))
//         .pipe(gulp.dest(PATHS.kits.dest));
// });

// Compile style guide
// use --no-sg argument to disable this
gulp.task('styleGuide', function() {
    return styleguide.create(SG_CONFIG)
        .catch(function(err) {
            return new LOG('Style Guide', err).error();
        });
});


/* ---------------------------------
 * Base Tasks
 * --------------------------------*/

// First task called when gulp is invoked
gulp.task('default', series(...taskOrder(), finish));

// Simple function to tell gulp the default task is done
function finish(cb) {
    cb();
}
