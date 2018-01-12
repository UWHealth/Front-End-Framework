const gulp         = require('gulp');

const _if          = require('gulp-if');
const autoprefixer = require('gulp-autoprefixer');
const browserSync  = require('./bin/tasks/browserSync');
const del          = require('del');
const cssnano      = require('gulp-cssnano');
const include      = require('gulp-include');
const kit          = require('gulp-kit-textio');
const notify       = require('gulp-notify');
const plumber      = require('gulp-plumber');
const rename       = require('gulp-rename');
const sequence     = require('run-sequence').use(gulp);
const sass         = require('gulp-sass');
const size         = require('gulp-size');
const sourcemaps   = require('gulp-sourcemaps');
const styleguide   = require('markdown-documentation-generator');

const pkg          = require('./package.json');
const BROWSERS     = pkg.browserslist;
const ARGS         = require('./bin/helpers/args');
const PATHS        = require('./bin/paths.conf.js');
const SG_CONFIG    = require(PATHS.styleGuide.entry.config);

/* ---------------------------------
 * Base Tasks
 * --------------------------------*/

// First task called when gulp is invoked
gulp.task('default', function(cb) {
    sequence('clean', 'watch', ['sass', 'js'], 'styleGuide', 'browserSync', cb);
});


/* ---------------------------------
 * Utility Tasks
 * --------------------------------*/

// Watch file paths for changes (as defined in the paths letiable)
gulp.task('watch', function() {
    gulp.watch(PATHS.sass.watch.array, ['sass']);
    gulp.watch(PATHS.styleGuide.watch.array, ['styleGuide']);
    gulp.watch(PATHS.js.watch.array, ['js']);
    gulp.watch(PATHS.kits.watch.array, ['kits']);
});

gulp.task('clean', function () {
    return del(PATHS.clean.entry.array);
});


/* ---------------------------------
 * Compilation Tasks
 * --------------------------------*/

// Sass with Source maps
gulp.task('sass', function() {
    return gulp
        .src(PATHS.sass.entry.array)
        .pipe(plumber({errorHandler: _error}))
        .pipe(_if(_sourceMaps, sourcemaps.init()))
        .pipe(sass({
            outputStyle: 'expanded',
            sourcemap: _sourceMaps,
            errLogToConsole: true
        }))
        // Autoprefix
        .pipe(autoprefixer({
            browsers: BROWSERS
        }))
        // Report size of uncompressed CSS
        .pipe(size({
            title: 'CSS', gzip: true, showFiles: true
        }))
        // Output non-minified
        .pipe(gulp.dest(PATHS.sass.dest))
        // Minify
        .pipe(cssnano({
            discardComments: {removeAll: true},
            zindex: false
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(_if(_sourceMaps, sourcemaps.write('./maps')))
        // Report size of compressed files
        .pipe(size({
            title: 'CSS (minified)', gzip: true, showFiles: true
        }))
        // Output minified CSS
        .pipe(gulp.dest(PATHS.sass.dest));
});


// Javascript concatenating and renaming
gulp.task('js', function() {
    return gulp
        .src(PATHS.js.entry.array)
        .pipe(plumber({errorHandler: _error}))
        // Source Maps
        .pipe(_if(_sourceMaps, sourcemaps.init()))
        // Concatenate JS partials
        .pipe(include())
        .pipe(rename(function(path) {
            // remove underscores from the beginning of partials
            path.basename = path.basename.replace(/^_/gi, "");
        }))
        .pipe(_if(_sourceMaps, sourcemaps.write('./maps')))
        // Report size of processed files
        .pipe(size({title: 'JS', showFiles: true, gzip: true}))
        .pipe(gulp.dest(PATHS.js.dest))
        // Uglify
        // .pipe(uglify({preserveComments: 'some'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(size({title: 'JS (minified)', showFiles: true, gzip: true}))
        .pipe(gulp.dest(PATHS.js.dest));
});

// Compile .kit files into html
gulp.task('kits', function() {
    return gulp
        .src(PATHS.kits.entry.array)
        .pipe(plumber({errorHandler: _error}))
        .pipe(kit())
        .pipe(size({title: 'HTML', showFiles: true, gzip: true}))
        .pipe(gulp.dest(PATHS.kits.dest));
});

// Compile style guide
// use --no-sg argument to disable this
gulp.task('styleGuide', function() {
    return styleguide.create(SG_CONFIG)
        .catch(function(err) {
            return console.log(err);
        });
});

gulp.task('browserSync', browserSync);

/* ---------------------------------
 * Private letiables
 * --------------------------------*/

let _sourceMaps       = false;
// let _isWin            = /^win/.test(process.platform);


/* ---------------------------------
 * Arguments
 * --------------------------------*/

// Run 'gulp --no-sg' if you don't want to compile the style guide
// if (ARGS.sg === false) { _styleGuideOutput = false; }

// Run 'gulp --sm' for sass sourcemaps
if (ARGS.sm || ARGS.sourcemaps) { _sourceMaps = true; }



/* ---------------------------------
 * Private functions
 * --------------------------------*/

// Error handler
function _error(err) {
    notify.onError({
        title: "Error",
        subtitle: "<%= error.plugin %>",
        message: "<%= error.message %>"
    })(err);

    this.emit('end');
}
