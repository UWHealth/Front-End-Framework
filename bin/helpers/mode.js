const chalk = require('chalk');
const args = require('./args.js');

const mode = {
    production: args.production || args.local,
    localProduction: args.local,
    mode: (args.production || args.local) ? (args.local ? 'Local Production' : 'Production') : 'Development',
    color: (args.production || args.local) ? (args.local ? 'yellow' : 'green') : 'blue',
    icon: (args.production || args.local) ? (args.local ? '👁' : '📦') : '🚧',
    show: function() {
        console.info(' ════════════════════════════════════\n');
        console.info(' ' + this.icon + '  ' + chalk[this.color](this.mode + ' Mode'));
        console.info('     Launched\n');
        console.info(' ════════════════════════════════════');
    }
};

process.env.NODE_ENV = mode.production ? 'production' : 'development';

module.exports = mode;
