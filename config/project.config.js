/**
 * ****This file is unused right now****
 * -------------------------------------
 * The intention is that we can hopefully abstract projects to a
 * single config file that gets consumed by our build tools.
 * The hope is that this would simplify webpack and gulp configuration.
 * Ideally, it would allow us to package our gulp and webpack configs
 * to a single repo.
 */
const CWD = process.cwd();
const MODE = require(`${CWD}/build/helpers/mode.js`);

module.exports = {
    paths: require('./paths.config.js'),
    tasks: [
        'browserySync',
        'copy',
        'clean',
        'images',
        'js',
        'size',
        'style',
        'styleGuide',
        'watch',
    ],
    webpack: {
        js: true,
        demos: true,
        t4: true,
    },
    browserSync: {
        port: 8080,
        ui: {
            port: 8081,
        },
    },
    babel: true,
    svelte: true,
    cache: true,
    postcss: {
        plugins: [
            require('autoprefixer')({ grid: 'autoplace' }),
            MODE.production && require('cssnano')(),
        ].filter(Boolean)
    }
};
