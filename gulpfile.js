var gulp = 			require('gulp');
var sass = 			require('gulp-sass');
var browserSync = 	require('browser-sync');
var minifycss = 	require('gulp-minify-css');
var concat = 		require('gulp-concat');
var plumber = 		require('gulp-plumber');
var autoprefixer = 	require('gulp-autoprefixer');
var minifycss = 	require('gulp-minify-css');
var notify = 		require('gulp-notify');
var uglify = 		require('gulp-uglify');
var rename = 		require('gulp-rename');
var utility = 		require('gulp-util');
var kit =			require('gulp-kit');
var include =		require('gulp-include');
var shell = 		require('gulp-shell');
var yarg = 			require('yargs').argv;
var reload = 		browserSync.reload;
var chalk = 		utility.colors;

/*---------------------------------
 * Config
 * --------------------------------*/
var paths = {
	scss: ['./_partials/sass/*.scss', './_partials/sass/**/*.scss'],
	css: './css',
	js: ['./_partials/js/*.js', './_partials/js/vendor/*.js'],
	kits: ['./_partials/kits/*.kit', '!./_partials/kits/_*.kit'],
	styleGuide: ['./styleguide/template.html', './styleguide/theme.css', './css/main.css']
};

var browserSyncWatch= ['./css/*.css', './js/**', './*.html', './styleguide/**'];

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
var sass_output = 'nested';
var open_new_tab = false;
var js_partials = paths.js;
// js_partials.push('!./_partials/js/_*.js');

//Run 'gulp --no-sg' if you don't want to compile the style guide
if (yarg.sg === false){
	browserSyncWatch= ['./css/*.css', './js/**', './*.html'];
	style_guide_output = false;
}
//Run 'gulp --uglify' if you want to compress sass and JS
if (yarg.uglify){
	js_task = 'js-ugly';
	sass_output = 'compressed';
}
//Run 'gulp --newtab' to open a new tab when gulp first runs
if (yarg.newtab){
	open_new_tab = 'local';
}

//Extracts filenames from a path
function _filename(path) {
	return path.substr(path.lastIndexOf('/') + 1);
}

//Error handler
function _error(err) {
	console.log("Error:"+err);
	notify.onError({
		title:    "Error",
		subtitle: "",
		message:  "<%= error.message %>",
	})(err);

	this.emit('end');
}


/*---------------------------------
 * Utility Tasks
 * --------------------------------*/

//First task called when gulp is invoked
gulp.task('default', ['watch', 'browser-sync']);

//Watch file paths for changes (as defined in the paths variable)
gulp.task('watch', function(){
	gulp.watch(paths.scss, ['sass']);
	gulp.watch(paths.js, [js_task]);
	gulp.watch(paths.kits, ['kits']);

	if (style_guide_output){
		gulp.watch(paths.styleGuide, ['styleGuide']);
	}

});

//Browser-sync
//Spins up local http server
// and syncs actions across browsers
gulp.task('browser-sync',['sass', js_task, 'kits'], function() {
    browserSync.init(browserSyncWatch, {
		server: {
            baseDir: ['./'],
        },
		ui:{
			port: 3001
		},
		ghostMode: {
			clicks: true,
			location: true,
			forms: true,
			scroll: false
		},
		scrollThrottle: 100,
		open: open_new_tab
	});
});


/*---------------------------------
 * Compilation Tasks
 * --------------------------------*/

//Sass compilation
gulp.task('sass', function() {

	browserSync.notify("Compiling Sass");

	return gulp.src(paths.scss[0])
		.pipe(plumber({errorHandler: _error}))
		.pipe(sass({
			outputStyle: sass_output,
			errLogToConsole: true,
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
		.pipe(gulp.dest(paths.css));
});


//Javascript concatenating and renaming
gulp.task('js', function(){

	return gulp.src(js_partials)
		.pipe(plumber({errorHandler: _error}))
		.pipe(include())
		.pipe(rename(function(path){
			path.dirname = path.dirname.replace("./_partials/js","");
			path.basename = path.basename.replace("_","");
		}))
		.pipe(gulp.dest('./js'));
});

// Same as above, but with uglification
//(run gulp --uglify for this task)
gulp.task('js-ugly', function(){
	browserSync.notify("Compressing Javascript");

	var _message = chalk.yellow("[JS] ")+"Uglifying javascript...";
	console.log(_message);

	return gulp.src(js_partials)
		.pipe(plumber({errorHandler: _error}))
		.pipe(include())
		.pipe(uglify())
		.pipe(rename(function(path){
			path.dirname = path.dirname.replace("./_partials/js","");
			path.basename = path.basename.replace("_","");
		}))
		.pipe(gulp.dest('./js'));
});

//Compile .kit files into html
gulp.task('kits', function(){
	gulp.src(paths.kits)
		.pipe(plumber({errorHandler: _error}))
		.pipe(kit())
		.pipe(gulp.dest('./'));
});

//Compile style guide
// use --no-sg argument to disable this
gulp.task('styleGuide', function(){
	gulp.src('./')
		.pipe(shell('styleguide no-lf'));
});
