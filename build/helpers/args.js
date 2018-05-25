/**
 * @fileoverview - Argument parsing
 */

const yargs = require('yargs');

yargs.options({
    'production': {
        alias: ['prd', 'p'],
        describe: 'Start production mode. "development" is default',
        type: 'boolean',
        group: 'Environment:'
    },
    'local': {
        alias: ['lprd'],
        describe: 'Use "local production" mode. Allows development with production assets',
        type: 'boolean',
        group: 'Environment:'
    },
    'stats': {
        alias: 'debug',
        describe: 'Show full Webpack stats and errors',
        type: 'boolean',
        default: false,
        group: 'Logging: '
    },
    'open': {
        alias: 'newtab',
        describe: 'Open a new tab immediately',
        coerce: (arg) => { return arg ? 'local' : false; },
        type: 'boolean',
        default: false,
        group: 'Server:'
    },
    'bsdir': {
        alias: ['dir'],
        describe: 'Show directories instead of index.html',
        type: 'boolean',
        default: false,
        group: 'Server:'
    },
    'bsport': {
        alias: 'port',
        describe: 'Port to start server on',
        type: 'number',
        default: 8080,
        group: 'Server:'
    },
    'bsproxy': {
        alias: 'proxy',
        describe: "BrowserSync proxy URL",
        type: 'string',
        default: undefined,
        group: 'Server:'
    },
    'bsservestatic': {
        alias: ['static'],
        describe: 'BrowserSync "serveStatic" option',
        type: 'array',
        default: [],
        group: 'Server:'
    },
    'bstunnel': {
        alias: 'tunnel',
        describe: 'BrowserSync "tunnel" option',
        type: 'string',
        group: 'Server:'
    },
    'bsserver': {
        alias: 'server',
        describe: 'BrowserSync "server" option'
    }
});

module.exports = yargs
    .wrap(Math.min(yargs.terminalWidth(), 100))
    .help()
    .parse();
