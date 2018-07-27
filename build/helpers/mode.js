const chalk = require('chalk');
const args = require('./args.js');

const mode = {
    production: args.production || args.local,
    localProduction: args.local,
    local: args.local,
    mode:
        args.production || args.local
            ? args.local
                ? 'Local Production'
                : 'Production'
            : 'Development',
    color:
        args.production || args.local
            ? args.local
                ? 'yellow'
                : 'green'
            : 'blue',
    icon: args.production || args.local ? (args.local ? '👁' : '📦') : '🚧',
    message: function() {
        return [
            '\n ════════════════════════════════════\n',
            ` ${this.icon}  ${chalk[this.color](this.mode + ' Mode')}`,
            '     Launched\n',
            ' ════════════════════════════════════\n',
        ].join('\n');
    },
    show: function() {
        console.info(this.message);
    },
};

process.env.NODE_ENV = mode.production ? 'production' : 'development';

module.exports = mode;
