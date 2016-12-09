/*jshint node: true*/
var gulp		    = require('gulp');

var _if         = require('gulp-if');
var autoprefixer= require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var chalk       = require('gulp-util').colors;
var cssnano     = require('gulp-cssnano');
var include     = require('gulp-include');
var fs          = require('fs');
var jshint      = require('gulp-jshint');
var kit         = require('gulp-kit');
var notify      = require('gulp-notify');
var plumber     = require('gulp-plumber');
var rename      = require('gulp-rename');
var sass		= require('gulp-sass');
var shell       = require('gulp-shell');
var size        = require('gulp-size');
var sourcemaps  = require('gulp-sourcemaps');
var uglify      = require('gulp-uglify');
var yarg        = require('yargs').argv;
var styleguide  = require('markdown-documentation-generator');


/*---------------------------------
 * Config
 * --------------------------------*/

var PATHS = {
	scss: {
		watch:	['_partials/sass/**/*.scss'],
		main:	  ['./_partials/sass/main.scss', './_partials/sass/styleguide.scss'],
		dest:  	'./css'
	},
	js: {
		watch:	['_partials/js/**/*.js'],
		main:   ['./_partials/js/main.js','./_partials/js/plugins.js', '!./**/_*.js' ],
		dest:  	'./js'
	},
	kits: {
		watch:	['_partials/kits/**/*.kit'],
		main: 	['./_partials/kits/*.kit', '!./_partials/kits/_*.kit'],
		dest:  	'./'
	},
	styleGuide: {
		watch:  ['css/styleguide.min.css', 'styleguide/imports/*', '.styleguide']
	},
	browserSync: {
		watch:  ['css/*.css', 'js/**/*.js', '*.html'],
		ignore: ['!**.map', '!./gulpfile.js', '!./**/*.min.*']
	}
};

var AUTOPREFIXER_BROWSERS = [
	'> 1%',
	'last 2 version',
	'ff 3.5',
	'ff >=16',
	'ie >= 8',
	'android >=2.3'
];


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
gulp.task('watch', function(){
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

  var bsFiles = PATHS.browserSync.watch.concat(PATHS.browserSync.ignore);

  //Allow for --bsserver argument. Otherwise, use default
  var bsServer = yarg.bsserver || {
    baseDir: ['./'],
    directory: _BSdirView
  };

  //Default port is 80 for Windows, 3000 for everything else
  var bsPort = _isWin? 80 : 3000;

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
			clicks: true,
			location: true,
			forms: true,
			scroll: false
		},
		logPrefix: 'FEF',
		scrollThrottle: 100,
		open: _openNewTab
	});
});


/*---------------------------------
 * Compilation Tasks
 * --------------------------------*/

//Sass with Source maps
gulp.task('sass', function() {

	return gulp.src(PATHS.scss.main)
		.pipe(plumber({errorHandler: _error}))
		.pipe(_if(_sourceMaps, sourcemaps.init()))
		.pipe(sass({
            outputStyle: 'expanded',
            sourcemap: _sourceMaps,
            errLogToConsole: true
        }))
    //Autoprefix
		.pipe(autoprefixer({
			browsers: AUTOPREFIXER_BROWSERS
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

gulp.task('js', function(){

	return gulp.src(PATHS.js.main)
		.pipe(plumber({errorHandler: _error}))
    //Linting JS (load hint config, then run)
		.pipe(_if(_lint, jshint('./.jshintrc')))
		.pipe(_if(_lint, jshint.reporter('jshint-stylish')))
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
gulp.task('kits', function(){

	return gulp.src(PATHS.kits.main)
		.pipe(plumber({errorHandler: _error}))
		.pipe(kit())
        .pipe(size({title: 'HTML', showFiles: true, gzip: true}))
		.pipe(gulp.dest(PATHS.kits.dest));
});

//Compile style guide
// use --no-sg argument to disable this
gulp.task('styleGuide', function(){
	//Grab the styleguide file and use its settings
	fs.readFile('./.styleguide', function(err, data){
		if(err) {
			_error(err);
		}
		else {
			styleguide.create(JSON.parse(data));
		}
	});

});


//Change variables for production
gulp.task('productionStart', function(){
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
var _bsIsRunning      = false;
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

	this.emit('end');
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
