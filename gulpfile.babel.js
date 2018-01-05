/*jshint node: true*/
const gulp        = require('gulp');

const _if         = require('gulp-if');
const autoprefixer= require('gulp-autoprefixer');
const browserSync = require('browser-sync');
const chalk       = require('gulp-util').colors;
const cssnano     = require('gulp-cssnano');
const include     = require('gulp-include');
const fs          = require('fs');
const jshint      = require('gulp-jshint');
const kit         = require('gulp-kit-textio');
const notify      = require('gulp-notify');
const plumber     = require('gulp-plumber');
const rename      = require('gulp-rename');
const sass        = require('gulp-sass');
const size        = require('gulp-size');
const sourcemaps  = require('gulp-sourcemaps');
const styleguide  = require('markdown-documentation-generator');
const uglify      = require('gulp-uglify');
const yarg        = require('yargs').argv;

const pkg        = require('./package.json');
const BROWSERS   = pkg.browserslist;
const PATHS      = require('./bin/paths.conf.json');

/*---------------------------------
 * Base Tasks
 * --------------------------------*/

//First task called when gulp is invoked
gulp.task('default', ['watch', 'browserSync']);

//Production
gulp.task('prod', ['productionStart', 'sass', 'js', 'kits']);
//Alias
gulp.task('production', ['prod']);

//Help task
gulp.task('help', _help);


/*---------------------------------
 * Utility Tasks
 * --------------------------------*/

//Watch file paths for changes (as defined in the paths variable)
gulp.task('watch', function() {
    gulp.watch(PATHS.scss.watch, ['sass']);
    gulp.watch(PATHS.js.watch, ['js']);
    gulp.watch(PATHS.kits.watch, ['kits']);

    if (_styleGuideOutput){
        gulp.watch(PATHS.styleGuide.watch, ['styleGuide']);
    }

});

//Browser-sync
//Spins up local http server
// and syncs actions across browsers
gulp.task('browserSync', function() {

    var bsFiles = PATHS.browserSync.watch;

    //Allow for --bsserver argument. Otherwise, use default
    var bsServer = yarg.bsserver || {
        baseDir: ['./'],
        directory: _BSdirView
    };

    //Default port is 80 for Windows, 3000 for everything else
    var bsPort = 8080;

    browserSync
    .init({
        files: bsFiles,
        port: yarg.bsport || bsPort,            // Allow for --bsport= argument
        proxy: yarg.bsproxy || undefined,       // Allow for --bsproxy= argument
        serveStatic: yarg.bsservestatic || [],  // Allow for --bsservestatic= argument
        tunnel: yarg.bstunnel || null,          // Allow for --bstunnel= argument
        server: yarg.bsproxy ? false : bsServer,// If proxy, ignore server setting
        ui:{
            port: 3030
        },
        ghostMode: {
            clicks: false,
            location: false,
            forms: true,
            scroll: false
        },
        logPrefix: 'Browser',
        open: _openNewTab
    });
});


/*---------------------------------
 * Compilation Tasks
 * --------------------------------*/

//Sass with Source maps
gulp.task('sass', function() {

    return gulp
    .src(PATHS.scss.main)
    .pipe(plumber({errorHandler: _error}))
    .pipe(_if(_sourceMaps, sourcemaps.init()))
    .pipe(sass({
        outputStyle: 'expanded',
        sourcemap: _sourceMaps,
        errLogToConsole: true
    }))
    //Autoprefix
    .pipe(autoprefixer({
        browsers: BROWSERS
    }))
    //Report size of uncompressed CSS
    .pipe(size({
        title: 'CSS', gzip: true, showFiles: true
    }))
    //Output non-minified
    .pipe(gulp.dest(PATHS.scss.dest))
    //Minify
    .pipe(cssnano({
        discardComments: {removeAll: false},
        zindex: false
    }))
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(_if(_sourceMaps, sourcemaps.write('./maps')))
    //Report size of compressed files
    .pipe(size({
        title: 'CSS (minified)', gzip: true, showFiles: true
    }))
    //Output minified CSS
    .pipe(gulp.dest(PATHS.scss.dest));
});


//Javascript concatenating and renaming

gulp.task('js', function() {

    return gulp
    .src(PATHS.js.main)
    .pipe(plumber({errorHandler: _error}))
    //Source Maps
    .pipe(_if(_sourceMaps, sourcemaps.init()))
    //Concatenate JS partials
    .pipe(include())
    .pipe(rename(function(path) {
        //remove underscores from the beginning of partials
        path.basename = path.basename.replace(/^_/gi,"");
    }))
    .pipe(_if(_sourceMaps, sourcemaps.write('./maps')))
    //Report size of processed files
    .pipe(size({title: 'JS', showFiles: true, gzip: true}))
    .pipe(gulp.dest(PATHS.js.dest))
    //Uglify
    .pipe(uglify({preserveComments: 'some'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(size({title: 'JS (minified)', showFiles: true, gzip: true}))
    .pipe(gulp.dest(PATHS.js.dest));
});

//Compile .kit files into html
gulp.task('kits', function() {

    return gulp
    .src(PATHS.kits.main)
    .pipe(plumber({errorHandler: _error}))
    .pipe(kit())
    .pipe(size({title: 'HTML', showFiles: true, gzip: true}))
    .pipe(gulp.dest(PATHS.kits.dest));
});

//Compile style guide
// use --no-sg argument to disable this
gulp.task('styleGuide', function(cb) {
    //Grab the styleguide file and use its settings
    return fs.readFile(PATHS.styleGuide.main, function(err, data){
        if(err) {
            return _error(err);
        }
        else {
            return styleguide.create(JSON.parse(data))
                .then(function(){
                    cb()
                })
                .catch(function(err) {
                    _error(err);
                });
        }
    });

});


//Change variables for production
gulp.task('productionStart', function() {
    _minify = true;
    _lint = true;
});


/*---------------------------------
 * Private variables
 * --------------------------------*/

var _styleGuideOutput = true;
var _openNewTab       = null;
var _sourceMaps       = false;
var _minify           = false;
var _lint             = false;
var _BSdirView        = false;
var _isWin            = /^win/.test(process.platform);


/*---------------------------------
 * Arguments
 * --------------------------------*/

//Run 'gulp --help' or 'gulp help' to view all arguments
if (yarg.help){ _help(); }

//Run gulp --ls to show directories instead of index.html in Browser Sync
if (yarg.ls){ _BSdirView = true; }

//Run 'gulp --no-sg' if you don't want to compile the style guide
if (yarg.sg === false) { _styleGuideOutput = false; }

//Run 'gulp --uglify' if you want to compress sass and JS
if (yarg.uglify || yarg.minify){ _minify = true; }

//Run 'gulp --sm' for sass sourcemaps
if (yarg.sm || yarg.sourcemaps){ _sourceMaps = true; }

//Run 'gulp --lint' for Javascript linting
if (yarg.lint){ _lint = true; }

//Run 'gulp --newtab' to open a new tab when gulp first runs
if (yarg.newtab){ _openNewTab = 'local' }


/*---------------------------------
 * Private functions
 * --------------------------------*/

//Error handler
function _error(err) {

    notify.onError({
        title:    "Error",
        subtitle: "<%= error.plugin %>",
        message:  "<%= error.message %>",
    })(err);

    // this.emit('end');
}

function _help(){
  var _helpContent = [
    " ",
    chalk.dim("---------------------------------------------------------------------------"),
    chalk.magenta("  Gulp Help"),
    chalk.dim("---------------------------------------------------------------------------"),
    "Using arguments with gulp tasks allows for greater flexibility.",
    "Below are the available arguments.",
    " ",
    " --ls...........Show directories instead of index.html",
    " --no-sg........Don't generate the style guide",
    " --minify.......Minify JS",
    " --sm...........Generate sourcemaps for CSS and JS",
    " --lint.........Lint your Javascript",
    " --newtab.......Open a new tab on start",
    " --tasks........Displays all available tasks, along with their dependencies",
    " --help.........What you're looking at right now",
    " ",
    chalk.dim("---------------------------------------------------------------------------"),
    " "
  ].join('\n');
  console.log(_helpContent);
}
