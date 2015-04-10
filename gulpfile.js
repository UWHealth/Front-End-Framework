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
var chalk = 		utility.colors;

//Config
var paths = {
	scss: ['./_partials/sass/*.scss', './_partials/sass/**/*.scss'],
	css: './css',
	js: ['./_partials/js/*.js', './_partials/js/vendor/*.js'],
	kits: ['./_partials/kits/*.kit', '!./_partials/kits/_*.kit']
};

var autoprefixer_browsers = [
	'> 1%',
	'last 2 version',
	'ff 3.5',
	'ff >=16',
	'ie >= 8',
	'android >=2.3'
];

/* Extracts filenames from a path */
function _filename(path) {
	return path.substr(path.lastIndexOf('/') + 1);
};
function _error(err) {
		console.log("Error:"+err);
		notify.onError({
			title:    "Error",
			subtitle: "",
			message:  "<%= error.message %>",
		})(err);

		this.emit('end');
	};

gulp.task('sass', function() {
	debugger;
	gulp.src(paths.scss[0])
		.pipe(plumber({errorHandler: _error}))
		.pipe(sass({
			outputStyle: 'nested', //'compressed',
			errLogToConsole: true,
			onError: function(err){console.log(chalk.red("[Sass] ")+err);},
			onSuccess: function(css){
				var file = _filename(this.file);
				var duration = this.result.stats.duration+"ms";
				var _message = chalk.magenta("[Sass] ")+ chalk.bold(file) + " Compiled in "+ duration;
				console.log(_message);
				browserSync.notify(file+"Compiled in "+duration, 10000);
			}
		}))
		.pipe(autoprefixer(autoprefixer_browsers))
		.pipe(gulp.dest(paths.css));
});

gulp.task('js', function(){

	gulp.src(paths.js)
		.pipe(plumber())
		.pipe(include())
		// .pipe(uglify())
		.pipe(rename(function(path){
			path.dirname = path.dirname.replace("./_partials/js","");
			path.basename = path.basename.replace("_","");
		}))
		.pipe(gulp.dest('./js'))
		.on('error', utility.log);
});

gulp.task('kits', function(){

	gulp.src(paths.kits)
		.pipe(plumber({errorHandler: _error}))
		.pipe(kit())
		.pipe(gulp.dest('./'));
});

gulp.task('browser-sync',['sass', 'js', 'kits'], function() {
    browserSync.init(['./css/*.css', './js/**', './*.html'], {
		// proxy: 'http://pa-wf-250-38.local:5757/'
		server: {
            baseDir: './'
        }
	});
});

gulp.task('watch', function(){
	gulp.watch(paths.scss, ['sass']);
	gulp.watch(paths.js, ['js']);
	gulp.watch(paths.kits, ['kits']);
});


gulp.task('default', ['browser-sync', 'watch'], function(){
	debugger;
});
