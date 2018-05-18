const chalk        = require('chalk');
const notify       = require('gulp-notify');
const PrettyError  = require('pretty-error');
const ora          = require('ora');

const pe = new PrettyError().appendStyle(require('./logger-style.js'));

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

        self.ora.stop().fail(chalk.bold.red(`${task} error ${getTime()}\n`));

        console.error(pe.render(error));

        if (this && this.emit) { this.emit('end'); }

        return self;
    };

    this.info = function(msg, oraOpts) { // eslint-disable-line
        msg = msg || (OraOpts && oraOpts.text) || message;

        msg = chalk.blue(task) + ' ' + msg + ' ' + getTime();
        const opts = oraOpts.symbol ? { text: msg, symbol: oraOpts.symbol } : msg;
        self.ora.clear().info(opts);
    };

    this.success = function(msg) {
        msg = msg || message || '';
        msg += ' ' + getTime();
        self.ora.stop().succeed(chalk.green(task) + ' ' + msg);
    };
};


function getTime() {
    return chalk.gray(`[${new Date().toTimeString().match(/^[\d:]+/)[0]}]`);
}