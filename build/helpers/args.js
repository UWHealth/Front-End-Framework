/**
 * @fileoverview - Argument parsing
 */

const yargs = require('yargs');

yargs.options({
    production: {
        alias: ['prd', 'p'],
        describe: 'Start production mode. "development" is default',
        type: 'boolean',
        group: 'Environment:',
        default: false,
    },
    local: {
        alias: ['lprd'],
        describe:
            'Use "local production" mode. Allows development with production assets',
        type: 'boolean',
        group: 'Environment:',
        default: false,
    },
    mode: {
        describe: 'Set the mode explicity.',
        type: 'string',
        default: 'development',
        coerce: (arg) => {
            if (!arg) return 'development';
            arg = arg.toLowerCase();
            return ['prd', 'production'].indexOf(arg) > -1
                ? 'production'
                : ['local', 'lprd'].indexOf(arg) > -1
                ? 'local'
                : 'development';
        },
        group: 'Environment:',
    },
    debug: {
        alias: 'stats',
        describe: 'Show full Webpack stats and errors',
        type: 'boolean',
        default: false,
        group: 'Logging: ',
    },
    cache: {
        alias: 'clear',
        describe: 'Clear cache folder before starting',
        type: 'boolean',
        default: false,
        group: 'Environment: ',
    },
    open: {
        alias: 'newtab',
        describe: 'Open a new tab immediately',
        coerce: (arg) => {
            return arg ? 'local' : false;
        },
        type: 'boolean',
        default: false,
        group: 'Server:',
    },
    bsport: {
        alias: 'port',
        describe: 'Port to start server on',
        type: 'number',
        default: 8080,
        group: 'Server:',
    },
    bsproxy: {
        alias: 'proxy',
        describe: 'BrowserSync proxy URL',
        type: 'string',
        default: undefined,
        group: 'Server:',
    },
    bsservestatic: {
        alias: ['static'],
        describe: 'BrowserSync "serveStatic" option',
        type: 'array',
        default: [],
        group: 'Server:',
    },
    bstunnel: {
        alias: 'tunnel',
        describe: 'BrowserSync "tunnel" option',
        type: 'string',
        group: 'Server:',
    },
    bsserver: {
        alias: 'server',
        describe: 'BrowserSync "server" option',
    },
});

module.exports = yargs
    .wrap(Math.min(yargs.terminalWidth(), 100))
    .help()
    .parse();
