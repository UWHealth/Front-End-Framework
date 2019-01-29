const chalk = require('chalk');
const notify = require('gulp-notify');
const PrettyError = require('pretty-error');
const ora = require('ora');
// const DraftLog = require('draftlog');

const pErr = new PrettyError();

module.exports = function(task, message) {
    task = task || '';
    this.ora = new ora(task);

    const self = this;
    // DraftLog(console);
    const log = console.log;

    this.spinner = function(msg) {
        msg = msg || message;
        self.ora.start(chalk.cyan(task) + ' ' + msg);
        // log(chalk.cyan(task) + ' ' + msg);
    };

    this.notify = function(err) {
        const error = message || err;
        self.ora.clear();
        notify.onError({
            title: 'Error',
            subtitle: '<%= error.plugin %>',
            message: '<%= error.message %>',
        })(error);

        return self.error(error);
    };

    this.error = function(err) {
        const error = message || err;

        self.ora.stop().fail(chalk.bold.red(`${task} error ${getTime()}\n`));
        log(chalk.bold.red(`${task} error ${getTime()}\n`), pErr.render(error));

        if (this && this.emit) {
            this.emit('end');
        }

        return self;
    };

    this.info = function(msg, oraOpts) {
        msg = msg || (oraOpts && oraOpts.text) || message;

        msg = chalk.blue(task) + ' ' + msg + ' ' + getTime();
        // log(msg);
        const opts =
            oraOpts && oraOpts.symbol
                ? { text: msg, symbol: oraOpts.symbol }
                : msg;
        self.ora.clear().info(opts);
    };

    this.clear = self.ora.clear();

    this.success = function(msg) {
        msg = msg || message || '';
        msg += ' ' + getTime();
        self.ora.stop().succeed(chalk.green(task) + ' ' + msg);
        // log(chalk.green(task) + ' ' + msg);
    };
};

function getTime() {
    return chalk.gray(`[${new Date().toTimeString().match(/^[\d:]+/)[0]}]`);
}

pErr.appendStyle({
    'pretty-error': {
        display: 'block',
        marginLeft: '2',
    },
    'pretty-error > header': {
        display: 'block',
    },
    'pretty-error > header > title > kind': {
        display: 'none',
        background: 'red',
        color: 'bright-white',
    },
    'pretty-error > header > title > wrapper': {
        marginRight: '1',
        color: 'grey',
    },
    'pretty-error > header > colon': {
        color: 'grey',
        display: 'none',
        marginRight: '1',
    },
    'pretty-error > header > message': {
        color: 'red',
    },
    'pretty-error > trace': {
        display: 'block',
        marginTop: 1,
    },
    'pretty-error > trace > item': {
        display: 'block',
        marginBottom: 0,
        marginLeft: 3,
        bullet: '"<grey>•</grey>"',
    },
    'pretty-error > trace > item > header': {
        display: 'inline',
    },
    'pretty-error > trace > item > header > pointer > file': {
        display: 'none',
        color: 'cyan',
    },
    'pretty-error > trace > item > header > pointer > colon': {
        display: 'none',
        color: 'bright-cyan',
    },
    'pretty-error > trace > item > header > pointer > line': {
        display: 'none',
        color: 'bright-cyan',
        marginRight: 1,
    },
    'pretty-error > trace > item > header > what': {
        display: 'inline',
        color: 'none',
        marginRight: 1,
    },
    'pretty-error > trace > item > footer > addr': {
        display: 'inline',
        color: 'bright-cyan',
    },
    'pretty-error > trace > item > footer': {
        display: 'inline',
        color: 'grey',
    },
    'pretty-error > trace > item > footer > extra': {
        display: 'block',
        color: 'grey',
    },
});
