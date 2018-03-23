const chalk        = require('chalk');
const notify       = require('gulp-notify');
const log          = require('fancy-log');
const PrettyError  = require('pretty-error');
const browserSync  = require('../tasks/browserSync.task.js').browserSync;
const pe = new PrettyError().appendStyle(require('./logger-style.js'));
const ora = require('ora');


module.exports = function(task, message) {
    this.ora = new ora(task);

    // const self = this;
    this.spinner = function(msg) {
        msg = msg || message;
        this.ora = this.ora.start(chalk.cyan(task) + ' ' + msg);
    };

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

        this.ora = this.ora.clear().fail(chalk.bold.red(task + " error \n"));

        console.log(pe.render(error));

        if (this && this.emit) { this.emit('end'); }

        return this;
    };

    this.info = function(msg, showOra) {
        msg = msg || message;
        if (showOra) {
            this.ora = this.ora.clear().info(chalk.blue(task) + ' ' + msg);
        }
        else {
            log.info(chalk.cyan(task), msg);
        }
    };

    this.success = function(msg) {
        msg = msg || message || '';
        this.ora = this.ora.clear().succeed(chalk.green(task) + ' ' + msg);
    };
};
