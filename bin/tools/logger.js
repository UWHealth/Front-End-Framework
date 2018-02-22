const chalk        = require('chalk');
const notify       = require('gulp-notify');
const log          = require('fancy-log');
const PrettyError  = require('pretty-error');
const browserSync  = require('../tasks/browserSync.task.js').browserSync;
const pe = new PrettyError().appendStyle(require('./logger-style.js'));


module.exports = function(task, message) {
    // const self = this;

    this.notify = function(err) {
        const error = message || err;
        return notify
            .onError({
                title: "Error",
                subtitle: "<%= error.plugin %>",
                message: "<%= error.message %>"
            })(error);
    };

    this.error = function(err) {
        const error = message || err;

        if (browserSync.sockets) {
            browserSync.sockets.emit('fullscreen:message', {
                title: task + ' Error:',
                body: error,
                timeout: 100000
            });
        }

        console.log('  ' + chalk.bold.red(task + " error \n"), pe.render(error));

        if (this && this.emit) { this.emit('end'); }

        return this;
    };

    this.info = function() {
        return log.info(chalk.cyan(task), message);
    };
};
