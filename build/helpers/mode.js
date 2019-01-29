/* eslint "no-console": "off" */
const chalk = require('chalk');
const args = require('./args.js');

// Alter the arguments if mode is explicitly set
if (args.mode) {
    args[args.mode] = true;
}

// Shorthand logic
const isDev = !args.production && !args.local;
const isProd = args.production || args.local;
const isLocal = args.local;

// Make the "what to return" logic easier to understand
const devLocalProd = (dev, local, prod) =>
    isProd ? (isLocal ? local : prod) : dev;

// Set NODE_ENV to be consistent with mode
process.env.NODE_ENV = isProd ? 'production' : 'development';
// Set the process title to the project
process.title = require(process.cwd() + '/package.json').name;

module.exports = {
    dev: isDev,
    development: isDev,
    prod: isProd,
    production: isProd,
    localProduction: isLocal,
    local: isLocal,
    mode: devLocalProd('Development', 'Local Production', 'Production'),
    color: devLocalProd('blue', 'yellow', 'green'),
    icon: devLocalProd(`⚙️`, ' ▶︎', '📦'),
    message: function() {
        return [
            '',
            ' ╒════════════════════════════════════╕',
            '',
            ` ${chalk[this.color](this.icon + '  ' + this.mode + ' Mode')}`,
            '     Started',
            '',
            ' ╘════════════════════════════════════╛',
            '',
        ].join('\n');
    },
    show: function() {
        process.stdout.write(this.message);
    },
};
