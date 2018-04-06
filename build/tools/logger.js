const chalk        = require('chalk');
const notify       = require('gulp-notify');
const log          = require('fancy-log');
const PrettyError  = require('pretty-error');
const ora          = require('ora');
const pe = new PrettyError().appendStyle(require('./logger-style.js'));

// const draftLog = require('draftlog');
// draftLog(console);

module.exports = function(task, message) {
    task = task || '';
    this.ora = new ora(task);

    const self = this;

    this.spinner = function(msg) {
        msg = msg || message;
        self.ora.start(chalk.cyan(task) + ' ' + msg);
    };

    this.notify = function(err) {
        const error = message || err;
        self.ora.clear();
        notify
            .onError({
                title: "Error",
                subtitle: "<%= error.plugin %>",
                message: "<%= error.message %>"
            })(error);

        return self.error(error);
    };

    this.error = function(err) {
        const error = message || err;

        self.ora.stop().fail(chalk.bold.red(task + " error \n"));

        console.error(pe.render(error));

        if (this && this.emit) { this.emit('end'); }

        return self;
    };

    this.info = function(msg, showOra) { // eslint-disable-line
        msg = msg || (showOra && showOra.text) || message;

        if (showOra) {
            msg = chalk.blue(task) + ' ' + msg;
            const opts = showOra.symbol ? { text: msg, symbol: showOra.symbol } : msg;
            self.ora.clear().info(opts);
        }
        else {
            log.info(chalk.cyan(task), msg);
        }
    };

    this.success = function(msg) {
        msg = msg || message || '';
        self.ora.stop().succeed(chalk.green(task) + ' ' + msg);
    };
};
