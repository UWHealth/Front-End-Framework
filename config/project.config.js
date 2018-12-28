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
