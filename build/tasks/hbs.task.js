/**
 * @fileoverview - Pre-compiles handlebars files, while also embedding partials. Essentially creates handlebars "bundles" for external consumption (by something like T4) without the need to register partials.
 **/

const gulp = require('gulp');
const gulpHbs = require('gulp-handlebars');
const htmlmin = require('gulp-htmlmin');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const tap = require('gulp-tap');

const CWD = process.cwd();
const Logger = require(`../helpers/logger.js`);
const PATHS = require(`${CWD}/config/paths.config.js`);
const loopAST = require('../helpers/embed-hbs-partials.js');

const LOG = new Logger('Handlebars');
const Handlebars = require('handlebars');
let currentFile;

module.exports = () => {
    LOG.spinner('Compiling ');

    return gulp
        .src(PATHS.hbs.entry.main)
        .pipe(plumber(LOG.error))
        .pipe(
            htmlmin({
                collapseWhitespace: true,
                conservativeCollapse: true,
                ignoreCustomFragments: [/{{{?.+}?}}/],
            })
        )
        .pipe(
            tap(function(file) {
                currentFile = file.path;
            })
        )
        .pipe(
            gulpHbs({
                handlebars: Handlebars,
                processAST: function(ast) {
                    // Find partial statements and embed them
                    // then replace CACHE_BUST with build number
                    loopAST(ast, 0, currentFile);
                },
            })
        )
        .pipe(
            rename(function(file) {
                // Strip the extension and the underscore
                file.basename = file.basename.replace(/_/g, '');
                return file;
            })
        )
        .pipe(gulp.dest(PATHS.hbs.dest))
        .on('end', () => LOG.success('Compiled '));
};
