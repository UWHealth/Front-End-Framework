var gulp		 = require('gulp');
var sass		 = require('gulp-sass');
var browserSync  = require('browser-sync');
var concat		 = require('gulp-concat');
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
var paths = {
	scss: ['./_partials/sass/*.scss', './_partials/sass/**/*.scss'],
	css: './css',
	js: ['./_partials/js/*.js', './_partials/js/vendor/*.js'],
	kits: ['./_partials/kits/*.kit', '!./_partials/**/_*.kit'],
	styleGuide: ['./styleguide/template.html', './styleguide/theme.css', './_partials/**/*.scss', './styleguide/*.scss']
};

var browserSyncWatch= ['./css/*.css', './js/**', './*.html', './styleguide/**', '!**.map'];

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
var js_task = 'js';
var sass_task = 'sass';
var sass_output = 'nested';
var open_new_tab = false;
var js_partials = paths.js;
var source_maps = false;
var minify = false;
var lint = false;
var dir = false;

// console.log(yarg);
// js_partials.push('!./_partials/js/_*.js');

//Run gulp --ls to show directories instead of index.html in Browser Sync
if (yarg.ls || yarg.dir){
	dir = true;
}

//Run 'gulp --no-sg' if you don't want to compile the style guide
if (yarg.sg === false || yarg.nosg){
	browserSyncWatch = ['./css/*.css', './js/**', './*.html'];
	style_guide_output = false;
}
//Run 'gulp --uglify' if you want to compress sass and JS
if (yarg.uglify || yarg.minify){
	sass_output = 'compressed';
	minify = true;
}
//Run 'gulp --newtab' to open a new tab when gulp first runs
if (yarg.newtab || yarg.launch){
	open_new_tab = 'local';
}
//Run 'gulp --sm' for sass sourcemaps
if (yarg.sm || yarg.source || yarg.sourcemaps){
	source_maps = true;
}
//Run 'gulp --lint' for Javascript linting
if (yarg.lint || yarg.hint) {
	lint = true;
}

//Extracts filenames from a path
function _filename(path) {
	return path.substr(path.lastIndexOf('/') + 1);
}

//Error handler
function _error(err) {
	// console.log(chalk.red("["+err.plugin+"] Error\n")+err.message);
	browserSync.notify(err.message);
	notify.onError({
		title:    "Error",
		subtitle: "<%= error.plugin %>",
		message:  "<%= error.message %>",
	})(err);

	this.emit('end');
}


/*---------------------------------
 * Utility Tasks
 * --------------------------------*/

//First task called when gulp is invoked
gulp.task('default', ['watch', 'browser-sync', 'styleGuide']);

//Watch file paths for changes (as defined in the paths variable)
gulp.task('watch', function(){
	gulp.watch(paths.scss, [sass_task]);
	gulp.watch(paths.js, [js_task]);
	gulp.watch(paths.kits, ['kits']);

	if (style_guide_output){
		gulp.watch(paths.styleGuide, ['styleGuide']);
	}

});

//Browser-sync
//Spins up local http server
// and syncs actions across browsers
gulp.task('browser-sync', [sass_task, js_task, 'kits'], function() {
    browserSync.init(browserSyncWatch, {
		server: {
            baseDir: ['./'],
			directory: dir
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

	browserSync.notify("Compiling Sass");

	return gulp.src(paths.scss[0])
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
		//Remove those new lines
		.pipe(_if(source_maps == false, replace(/(\n{1,}(?=\n{2}))/gi, "")) )
		.pipe(gulp.dest(paths.css))
});


//Javascript concatenating and renaming
// Same as above, but with uglification

gulp.task('js', function(){
	// var filter = gFilter(['!**/_*.js']);

	return gulp.src(js_partials)
		.pipe(plumber({errorHandler: _error}))
		.pipe(_if(lint, jshint('./.jshintrc')))
		.pipe(_if(lint, jshint.reporter('jshint-stylish')))
		.pipe(_if(source_maps, sourcemaps.init()))
		.pipe(include())
		.pipe(_if(minify, uglify({preserveComments: 'some'})))
		.pipe(rename(function(path){
			path.dirname = path.dirname.replace("./_partials/js","");
			path.basename = path.basename.replace("_","");
		}))
		.pipe(size({title: 'JS', showFiles: true, gzip: true}))
		.pipe(_if(source_maps, sourcemaps.write('./maps')))
		.pipe(gulp.dest('./js'));
});

//Compile .kit files into html
gulp.task('kits', function(){
	// var filter = gFilter(['**/_*.kit']);

	return gulp.src(paths.kits)
		.pipe(plumber({errorHandler: _error}))
		.pipe(kit())
		.pipe(gulp.dest('./'));
});

gulp.task('prod', ['switch-vars', sass_task, js_task, 'kits']);
//Alias
gulp.task('production', ['prod']);

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
		.pipe(shell('md_documentation no-lf'));
});
