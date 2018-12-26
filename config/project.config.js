module.exports = {
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
        demos: true,
        t4: true,
        js: true,
    },
    browserSync: {
        port: 8080,
        ui: {
            port: 8081,
        },
    },
    babel: true,
    paths: require('./paths.config.js'),
};
