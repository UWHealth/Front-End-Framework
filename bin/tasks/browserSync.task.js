/**
 * @fileoverview Spins up local http server and syncs actions across browsers
**/

const browserSync     = require('browser-sync');
const PATHS           = require('../paths.config.js');

const ARGS            = require('../tools/args.js');
const BS_DIR_VIEW     = ARGS.dir;
const BS_OPEN_NEW_TAB = ARGS.open;


module.exports = function() { // eslint-disable-line
    const BS_FILES = PATHS.browserSync.watch.array;

    // Allow for --bsserver argument. Otherwise, use default
    const BS_SERVER = ARGS.bsserver || {
        baseDir: PATHS.browserSync.entry.array,
        directory: BS_DIR_VIEW
    };

    const BS_PORT = ARGS.bsport || PATHS.browserSync.port;

    browserSync
        .init({
            files: BS_FILES,
            port: BS_PORT,                            // Allow for --bsport= argument
            proxy: ARGS.bsproxy || undefined,         // Allow for --bsproxy= argument
            serveStatic: ARGS.bsservestatic || [],    // Allow for --bsservestatic= argument
            tunnel: ARGS.bstunnel || null,            // Allow for --bstunnel= argument
            server: ARGS.bsproxy ? false : BS_SERVER, // If proxy, ignore server setting
            ui: {
                port: 3030
            },
            ghostMode: {
                clicks: false,
                location: false,
                forms: true,
                scroll: false
            },
            logPrefix: 'Browser',
            snippetOptions: {
                // Browsersync script tag placement
                rule: {
                    match: /<\/body>/i,
                    fn: function (snippet, match) {
                        return snippet + match;
                    }
                }
            },
            open: BS_OPEN_NEW_TAB
        });
};
