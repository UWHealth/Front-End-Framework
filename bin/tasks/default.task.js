import gulp from 'gulp';
import sequence from 'run-sequence';

import MODE from '../helpers/mode.js';

sequence.use(gulp);

export default () =>
    gulp.task('default', function(cb) {
        MODE.show();

        !MODE.production ?
            // DEV
            sequence(['clean'], ['sass', 'hbs', 'js'], ['watch', 'browserSync'], cb)
            :
            MODE.localProduction ?
                // LOCAL-PROD
                sequence(['clean'], ['sass', 'hbs', 'js'], ['watch', 'browserSync'], cb)
                :
                // PROD
                sequence(['clean'], ['sass', 'hbs', 'js'], ['watch', 'browserSync'], cb);
    });
