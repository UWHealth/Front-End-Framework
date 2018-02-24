const gulp         = require('gulp');
const series       = gulp.series;
const parallel     = gulp.parallel;

const styleguide   = require('markdown-documentation-generator');
const del          = require('del');

const LOG          = require('./bin/tools/logger.js');
const MODE         = require('./bin/tools/mode');
const PATHS        = require('./bin/paths.config.js');
const SG_CONFIG    = require(PATHS.styleGuide.entry.config);

const TASKS = {
    'browserSync': require('./bin/tasks/browserSync.task.js'),
    'hbs': require('./bin/tasks/hbs.task.js'),
    'webpack': require('./bin/tasks/webpack.task.js'),
    'sass': require('./bin/tasks/sass.task.js'),
    'images': require('./bin/tasks/images.task.js'),
    'copy': require('./bin/tasks/copy.task.js'),
    'size': require('./bin/tasks/size.task.js'),
    'static': ['images', 'copy:static']
};

function taskOrder() {
    MODE.show();

    return !MODE.production ?
        // DEV
        ['clean', parallel(...TASKS.static, 'sass', 'webpack'), 'styleGuide', parallel('watch', 'browserSync')]
        :
        MODE.localProduction ?
            // LOCAL-PROD
            ['clean', parallel(...TASKS.static, 'sass', 'webpack', 'hbs'), 'styleGuide', parallel('watch', 'browserSync')]
            :
            // PROD
            ['clean', parallel(...TASKS.static), parallel('sass', 'webpack', 'hbs'), 'styleGuide', 'size'];
}

/* ---------------------------------
 * Utility Tasks
 * --------------------------------*/

// Watch file paths for changes (as defined in the paths letiable)
gulp.task('watch', function() {
    gulp.watch(PATHS.sass.watch.all, gulp.series('sass'));
    gulp.watch(PATHS.styleGuide.watch.array, gulp.series('styleGuide'));
    gulp.watch(PATHS.images.watch.array, gulp.series('images'));
    gulp.watch(PATHS.fonts.watch.array, gulp.series('copy:static'));

    if (MODE.localProduction) {
        gulp.watch(PATHS.hbs.watch.array, gulp.series('hbs'));
    }
});

// Delete contents of compilation folders
gulp.task('clean', function (done) {
    del(PATHS.clean.entry.array)
        .then(() => done())
        .catch((err) => {
            if (err.code === 'EPERM' || err.code === 'EACCES') {
                new LOG('Clean', 'Cannot clean "dist" folder due to permissions. Make sure the folder or its contents is not open by another program or process.').info();
            }
            new LOG('Clean', err).error();
            done();
        });
});

gulp.task('copy:static', TASKS.copy);

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
gulp.task('default', series(...taskOrder(), function finish(done) {
    done();
}));
