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
var chalk = 		utility.colors;

//Config
var paths = {
	scss: ['./_partials/sass/*scss', './_partials/sass/**/*scss'],
	css: './css',
	js: ['./_partials/js/*js', './_partials/js/vendor/*js']
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
			title:    "Gulp",
			subtitle: "Error",
			message:  "Error: <%= error.message %>",
		})(err);

		this.emit('end');
	};

gulp.task('sass', function() {

	return gulp.src(paths.scss[0])
		.pipe(plumber({errorHandler: _error}))
		.pipe(sass({
			outputStyle: 'nested',
			errLogToConsole: true,
			onError: function(err){console.log(chalk.red("[Sass] ")+err);},
			onSuccess: function(css){
				var file = _filename(this.file);
				var duration = this.result.stats.duration+"ms";
				var _message = chalk.magenta("[Sass] ") +file + " Compiled in "+ duration;
				console.log(_message);
				browserSync.notify(file+"Compiled in "+duration, 10000);
			}
		}))
		.pipe(autoprefixer(autoprefixer_browsers))
		.pipe(gulp.dest(paths.css));
});

gulp.task('js', function(){
	return gulp.src(paths.js)
		.pipe(plumber())
		.pipe(uglify())
		.pipe(rename(function(path){
			path.dirname = path.dirname.replace("./_partials/js","");
			path.basename = path.basename.replace("_","");
		}))
		.pipe(gulp.dest('./js'))
		.on('error', utility.log);
});

gulp.task('browser-sync',['sass', 'js'], function() {
    browserSync.init(['css/*css', 'js/**'], {
		// proxy: 'http://pa-wf-250-38.local:5757/'
		server: {
            baseDir: './'
        }
	});
});

gulp.task('watch', function(){
	gulp.watch(paths.scss, ['sass']);
	gulp.watch(paths.js, ['js']);
});


gulp.task('default', ['browser-sync', 'watch'], function(){
	debugger;
});
