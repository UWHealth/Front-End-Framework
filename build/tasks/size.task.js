/**
 * @fileoverview Reports file sizes of JS and CSS in the project.
 **/

const gulp = require('gulp');
const size = require('gulp-sizereport');

const cwd = process.cwd();
const PATHS = require(`${cwd}/config/paths.config.js`);

module.exports = (done) => {
    gulp.src(PATHS.sass.dest + '/**/*.css').pipe(
        size({
            gzip: true,
        })
    );
    gulp.src(PATHS.js.dest + '/**/*.js').pipe(
        size({
            gzip: true,
        })
    );
    done();
};
