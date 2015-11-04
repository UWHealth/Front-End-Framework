var gulp		 = require('gulp');
var sass		 = require('gulp-sass');
var browserSync  = require('browser-sync');
var plumber		 = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');
var notify       = require('gulp-notify');
var uglify 		 = require('gulp-uglify');
var rename 		 = require('gulp-rename');
var utility 	 = require('gulp-util');
var kit 		 = require('gulp-kit');
var include 	 = require('gulp-include');
var shell  		 = require('gulp-shell');
var yarg		 = require('yargs').argv;
var size 		 = require('gulp-size');
var _if 		 = require('gulp-if');
var jshint  	 = require('gulp-jshint');
var replace 	 = require('gulp-replace');
var reload		 = browserSync.reload;
var chalk		 = utility.colors;

/*---------------------------------
 * Config
 * --------------------------------*/

// gulp.on('task_start', function(e){
// 	console.log(e);
// });

var paths = {
	scss: {
		watch:	['./_partials/sass/**/*.scss'],
		main:	['./_partials/sass/main.scss'],
		dest:  	'./css'
	},
	js: {
		watch:	['./_partials/js/**/*.js'],
		main:   ['./_partials/js/main.js','./_partials/js/plugins.js', '!./**/_*.js' ],
		dest:  	'./js'
	},
	kits: {
		watch:	['./_partials/kits/**/*.kit'],
		main: 	['./_partials/kits/*.kit', '!./_partials/kits/_*.kit'],
		dest:  	'./'
	},
	styleGuide: {
		watch: ['./**/*.scss', './styleguide/imports/*']
	},
	browserSync: {
		watch: ['./css/*.css', './js/**/*.js', './*.html', './styleguide/*.html'],
		ignore:['!**.map', '!./gulpfile.js']
	}
}

var autoprefixer_browsers = [
	'> 1%',
	'last 2 version',
	'ff 3.5',
	'ff >=16',
	'ie >= 8',
	'android >=2.3'
];

/*---------------------------------
 * Private variables
 * --------------------------------*/

var style_guide_output = true;
var sass_output = 'nested';
var open_new_tab = null;
var source_maps = false;
var minify = false;
var lint = false;
var browsersync_dir_view = false;


/*---------------------------------
 * Arguments
 * --------------------------------*/

//Run gulp --ls to show directories instead of index.html in Browser Sync
if (yarg.ls || yarg.dir){
	browsersync_dir_view = true;
}
//Run 'gulp --no-sg' if you don't want to compile the style guide
if (yarg.sg === false || yarg.nosg){
	paths.browserSync.ignore = [paths.scss.dest, paths.kits.dest, paths.js.dest];
	style_guide_output = false;
}
//Run 'gulp --uglify' if you want to compress sass and JS
if (yarg.uglify || yarg.minify){
	sass_output = 'compressed';
	minify = true;
}
//Run 'gulp --sm' for sass sourcemaps
if (yarg.sm || yarg.source || yarg.sourcemaps){
	source_maps = true;
}
//Run 'gulp --lint' for Javascript linting
if (yarg.lint || yarg.hint) {
	lint = true;
}
//Run 'gulp --newtab' to open a new tab when gulp first runs
if (yarg.newtab || yarg.launch){
	open_new_tab = 'local';
}


/*---------------------------------
 * Utility Tasks
 * --------------------------------*/

//Watch file paths for changes (as defined in the paths variable)
gulp.task('watch', function(){
	gulp.watch(paths.scss.watch, ['sass']);
	gulp.watch(paths.js.watch, ['js']);
	gulp.watch(paths.kits.watch, ['kits']);

	if (style_guide_output){
		gulp.watch(paths.styleGuide.watch, ['styleGuide']);
	}

});

//Browser-sync
//Spins up local http server
// and syncs actions across browsers
gulp.task('browser-sync', function() {
    browserSync.init(paths.browserSync.watch.concat(paths.browserSync.ignore), {
		port: 3000,
		server: {
            baseDir: ['./'],
			directory: browsersync_dir_view
        },
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
		open: open_new_tab
	});
});


/*---------------------------------
 * Compilation Tasks
 * --------------------------------*/

//Sass with Source maps
gulp.task('sass', function() {

	return gulp.src(paths.scss.main)
		.pipe(plumber({errorHandler: _error}))
		.pipe(_if(source_maps, sourcemaps.init()))
		.pipe(sass({
			outputStyle: sass_output,
			errLogToConsole: true,
			sourcemap: sourcemaps,
			onError: function(err){
				console.log(chalk.red("[Sass] ")+err);
			},
			onSuccess: function(css){
				var file = _filename(this.file);
				var duration = this.result.stats.duration+"ms";
				var _message = chalk.magenta("[Sass] ")+ chalk.bold(file) + " Compiled in "+ duration;
				console.log(_message);
				browserSync.notify(file+" Compiled in "+duration, 20000);
			}
		}))
		.pipe(autoprefixer({
			browsers: autoprefixer_browsers
		}))
		.pipe(size({title: 'CSS', gzip: true, showFiles: true}))
		.pipe(_if(source_maps, sourcemaps.write('./maps')))
		//Remove Styleguide Comments
		.pipe(_if(source_maps == false, replace(/(\/\* ?SG[\s\S]+?\*\/)/gmi, "")))
		//Remove extra new lines
		.pipe(_if(source_maps == false, replace(/(\n{1,}(?=\n{2}))/gi, "")) )
		.pipe(gulp.dest(paths.scss.dest))
});


//Javascript concatenating and renaming

gulp.task('js', function(){

	return gulp.src(paths.js.main)
		.pipe(plumber({errorHandler: _error}))
		.pipe(_if(lint, jshint('./.jshintrc')))
		.pipe(_if(lint, jshint.reporter('jshint-stylish')))
		.pipe(_if(source_maps, sourcemaps.init()))
		.pipe(include())
		.pipe(_if(minify, uglify({preserveComments: 'some'})))
		.pipe(rename(function(path) {
			//remove underscores from the beginning of partials
			path.basename = path.basename.replace(/^_/gi,"");
		}))
		.pipe(size({title: 'JS', showFiles: true, gzip: true}))
		.pipe(_if(source_maps, sourcemaps.write('./maps')))
		.pipe(gulp.dest(paths.js.dest));
});

//Compile .kit files into html
gulp.task('kits', function(){

	return gulp.src(paths.kits.main)
		.pipe(plumber({errorHandler: _error}))
		.pipe(kit())
		.pipe(gulp.dest(paths.kits.dest));
});

gulp.task('prod', ['switch-vars', 'sass', 'js', 'kits']);
//Alias
gulp.task('production', ['prod']);

//First task called when gulp is invoked
gulp.task('default', ['watch', 'browser-sync']);

//Change variables for production
gulp.task('switch-vars', function(){
	sass_output = 'compressed';
	minify = true;
	lint = true;
});

//Compile style guide
// use --no-sg argument to disable this
gulp.task('styleGuide', function(){
	gulp.src('./')
		.pipe(plumber({errorHandler: _error}))
		.pipe(shell('md_documentation no-lf'));
});


/*---------------------------------
 * Private functions
 * --------------------------------*/

//Extracts filenames from a path
function _filename(path) {
	return path.substr(path.lastIndexOf('/') + 1);
}

//Error handler
function _error(err) {

	//Must be wrapped in try in case an error occurs when browser-sync isn't running
	try {
		browserSync.notify(err.message);
	}catch(e){};

	notify.onError({
		title:    "Error",
		subtitle: "<%= error.plugin %>",
		message:  "<%= error.message %>",
	})(err);

	this.emit('end');
}
