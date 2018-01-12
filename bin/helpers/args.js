const chalk = require('chalk');
const yarg = require('yargs')
    .options({
        'production': {
            alias: ['prd', 'p'],
            describe: 'Start production mode. "development" is default',
            type: 'boolean',
            group: 'Environment:'
        },
        'local': {
            alias: ['lprd'],
            describe: 'Use "local production" mode. Allows development with production assets',
            implies: 'prd',
            type: 'boolean',
            group: 'Environment:'
        },
        'open': {
            alias: 'newtab',
            describe: 'Open a new tab immediately',
            coerce: (arg) => { return arg ? 'local' : false; },
            type: 'boolean',
            default: false,
            group: 'Server:'
        },
        'bsfiles': {
            alias: 'files',
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
            requiresArg: true,
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

const args = yarg.wrap(Math.min(yarg.terminalWidth(), 100)).help().parse();

// Production
if (args.production) {
    console.info(' -------------------------------------');
    console.info('\n     [ ' + chalk.green('Production Mode Launched') + ' ]\n');
    console.info(' -------------------------------------');
    process.env.NODE_ENV = '"production"';
}


module.exports = args;
