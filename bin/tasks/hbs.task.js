/**
 * Build hbs
 **/

import gulp from 'gulp';
import notify from 'gulp-notify';
import handlebars from 'gulp-handlebars';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';

import PATHS from '../paths.config';
import transformAST from '../helpers/embed-partials.js';

const Handlebars = require('handlebars');

export default () =>
    gulp.task('hbs', function() {
        return gulp
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
                    // Find partial statements and embed them,
                    // Also add build number
                    transformAST(ast);
                }
            }))
            .pipe(rename(function(opt) {
                // Strip the extension and the underscore (for individual partials to be output in ./dist/hbs/)
                opt.basename = opt.basename.replace(/_/g, '');
                return opt;
            }))
            .pipe(gulp.dest(PATHS.hbs.dest));
    });
