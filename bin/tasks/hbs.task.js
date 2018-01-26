/**
 * Build Handlebars Files
 **/

const gulp = require('gulp');
const notify = require('gulp-notify');
const handlebars = require('gulp-handlebars');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');

const PATHS = require('../paths.config');
const loopAST = require('../helpers/embed-partials.js');

const Handlebars = require('handlebars');

module.exports = () =>
    gulp
        .src(PATHS.hbs.entry.main)
        .pipe(plumber({
            errorHandler: function(error) {
                notify.onError('Error: <%= error.message %>');
                console.error(error.stack);
            }
        }))
        .pipe(handlebars({
            handlebars: Handlebars,
            processAST: function(ast) {
                // Find partial statements and embed them
                // then replace CACHE_BUST with build number
                loopAST(ast);
            }
        }))
        .pipe(rename(function(opt) {
            // Strip the extension and the underscore (for individual partials to be output in ./dist/hbs/)
            opt.basename = opt.basename.replace(/_/g, '');
            return opt;
        }))
        .pipe(gulp.dest(PATHS.hbs.dest));
