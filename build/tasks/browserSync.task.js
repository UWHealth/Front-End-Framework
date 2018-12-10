/**
 * @fileoverview Spins up local http server, pointing to the dist folder.  Uses BrowserSync, so automatic reloading and action-syncing is also handled.
 **/

/* eslint-disable complexity */
module.exports = () => {
    const browserSync = require('browser-sync');
    const webpack = require('./webpack.task.js').start();
    const PKG = require(`${process.cwd()}/package.json`);

    const ARGS = require('../helpers/args.js');
    const PATHS = require(`${process.cwd()}/config/paths.config.js`);
    const INSTANCE = browserSync.create(PKG.name);

    attachEvents(INSTANCE);

    const BS_DIR_VIEW = ARGS.dir;
    const BS_OPEN_NEW_TAB = ARGS.open;

    // Allow for --bsserver argument. Otherwise, use default
    const BS_SERVER = ARGS.bsserver || {
        baseDir: PATHS.browserSync.entry.array,
        directory: true || BS_DIR_VIEW,
    };

    const BS_PORT = ARGS.bsport || PATHS.browserSync.port;

    INSTANCE.init({
        files: PATHS.style.watch.array,
        port: BS_PORT, // Allow for --bsport= argument
        proxy: ARGS.bsproxy || undefined, // Allow for --bsproxy= argument
        serveStatic: false, // Allow for --bsservestatic= argument
        tunnel: ARGS.bstunnel || null, // Allow for --bstunnel= argument
        server: ARGS.bsproxy ? false : BS_SERVER, // If proxy, ignore server setting
        open: BS_OPEN_NEW_TAB,
        ui: {
            port: 3030,
        },
        ghostMode: {
            clicks: false,
            location: false,
            forms: true,
            scroll: false,
        },
        snippetOptions: {
            // Browsersync script tag placement
            rule: {
                match: /<\/body>/i,
                fn: function(snippet, match) {
                    return snippet + match;
                },
            },
        },
        reloadOnRestart: true,
        // Use our own logging
        logLevel: 'silent',
        logFileChanges: true,
        plugins: ['bs-fullscreen-message'],
        middleware: webpack.middleware,
    });

    //gulp.watch(PATHS.folders.project, browserSync.reload);
};

function attachEvents(INSTANCE) {
    const EVENT = INSTANCE.emitter;
    const chalk = require('chalk');
    const Logger = require('../helpers/logger.js');
    const LOG = new Logger('Server');
    const symbol = chalk`{blue.bold →}`;

    EVENT.on('service:running', (bs, data) => {
        let baseDir = bs.options.getIn(['server', 'baseDir']);
        for (const [, value] of baseDir.entries()) {
            baseDir = value;
        }
        const URLS = bs.options.get('urls');

        return console.info(
            chalk`\n${symbol} {blue Server started at {bold ${URLS.get(
                'local'
            )}}} (${URLS.get('external')})\n`
        );
    });

    // EVENT.on("browser:reload", function(bs, data = {}) {
    //     if (data.files && data.files.length > 1) {
    //         return LOG.ora.stopAndPersist({
    //             symbol: symbol,
    //             text: chalk`{blue Reloading browsers} (buffered ${data.files.length} events)`
    //         });
    //     }
    //     return LOG.ora.stopAndPersist({
    //         symbol: symbol,
    //         text: chalk`{blue Reloading browsers}`
    //     });
    // });

    EVENT.on('stream:changed', (bs, data) => {
        const changed = data && data.changed;
        const plural = changed.length > 1 ? 'files' : 'file';
        const files = changed.join(', ');
        console.info('\n');
        LOG.ora.stopAndPersist({
            symbol: symbol,
            text: chalk`{blue ${changed.length} ${plural} changed} (${files})`,
        });
    });

    EVENT.on('file:reload', (bs, data) => {
        if (data && data.path[0] === '*') {
            return LOG.ora.stopAndPersist({
                symbol: symbol,
                text: chalk`{blue Reloading files that match: {magenta ${
                    data.path
                }}}`,
            });
        }

        if (data) {
            LOG.ora.stopAndPersist({
                symbol: symbol,
                text: chalk`{blue File event [${data.event}] : {magenta ${
                    data.path
                }}}`,
            });
        }
    });
}
