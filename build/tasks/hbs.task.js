/**
 * @fileoverview - Pre-compiles handlebars files, while also embedding partials. Essentially creates handlebars "bundles" for external consumption (by something like T4) without the need to register partials.
 **/

const gulp = require('gulp');
const handlebars = require('gulp-handlebars');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const htmlmin = require('gulp-htmlmin');
const tap = require('gulp-tap');

const LOG   = require('../tools/logger.js');
const PATHS = require('../../config/paths.config.js');
const loopAST = require('../tools/embed-hbs-partials.js');

const Handlebars = require('handlebars');
let currentFile;

module.exports = () =>
    gulp
        .src(PATHS.hbs.entry.main)
        .pipe(plumber(new LOG('HBS task').error))
        .pipe(htmlmin({
            collapseWhitespace: true,
            conservativeCollapse: true,
            ignoreCustomFragments: [/{{{?.+}?}}/],
        }))
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
        .pipe(rename(function(file) {
            // Strip the extension and the underscore
            file.basename = file.basename.replace(/_/g, '');
            return file;
        }))
        .pipe(gulp.dest(PATHS.hbs.dest));
