const chalk        = require('chalk');
const notify       = require('gulp-notify');
const log          = require('fancy-log');
const PrettyError  = require('pretty-error');
const browserSync  = require('../tasks/browserSync.task.js').browserSync;
const pe = new PrettyError();


module.exports = function(task, message) {
    const self = this;

    this.notify = function(err) {
        const error = message || err;
        notify.onError({
            title: "Error",
            subtitle: "<%= error.plugin %>",
            message: "<%= error.message %>"
        })(error);

        self.error(error);
    };

    this.error = function(err) {
        const error = message || err;
        console.log('  ' + chalk.bold.red(task + " error \n"), pe.render(error));

        if (browserSync.sockets) {
            browserSync.sockets.emit('fullscreen:message', {
                title: task + ' Error:',
                body: error,
                timeout: 100000
            });
        }

        if (this && this.emit) { this.emit('end'); }

        return this;
    };

    this.info = function() {
        log.info(chalk.cyan(task), message);
    };
};

pe.appendStyle(
    {
        'pretty-error': {
            display: 'block',
            marginLeft: '2'

        },
        'pretty-error > header': {
            display: 'block',

        },
        'pretty-error > header > title > kind': {
            display: 'none',
            background: 'red',
            color: 'bright-white'

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
            marginRight: 1
        },
        'pretty-error > trace > item > footer > addr': {
            display: 'inline',
            color: 'bright-cyan',
        },
        'pretty-error > trace > item > footer': {
            display: 'inline',
            color: 'grey'

        },
        'pretty-error > trace > item > footer > extra': {
            display: 'block',
            color: 'grey',
        }
    }
);
