/**
 * Build Handlebars Files
 **/

const gulp = require('gulp');
const handlebars = require('gulp-handlebars');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const tap = require('gulp-tap');

const LOG   = require('../tools/logger.js');
const PATHS = require('../paths.config');
const loopAST = require('../tools/embed-partials.js');

const Handlebars = require('handlebars');
let currentFile;

module.exports = () =>
    gulp
        .src(PATHS.hbs.entry.main)
        .pipe(plumber(new LOG('HBS task').error))
        .pipe(tap(function(file, t) {
            currentFile = file.path;
        }))
        .pipe(handlebars({
            handlebars: Handlebars,
            processAST: function(ast) {
                // Find partial statements and embed them
                // then replace CACHE_BUST with build number
                loopAST(ast, 0, currentFile);
            }
        }))
        .pipe(rename(function(opt) {
            // Strip the extension and the underscore (for individual partials to be output in ./dist/hbs/)
            opt.basename = opt.basename.replace(/_/g, '');
            return opt;
        }))
        .pipe(gulp.dest(PATHS.hbs.dest));
