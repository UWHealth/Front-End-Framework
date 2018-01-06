const path = require('path');

const Paths = function() {
    const self = this;
    const dist = path.resolve(__dirname, "./dist");
    const src  = path.resolve(__dirname, "./_src");

    const paths = {
        root : {
            "dist": dist,
            "src": src
        },
        sass: {
            "watch": src + "**/*.scss",
            "main": {
                "main": src + "sass/main.scss",
                "styleguide": src + "sass/styleguide.scss"
            },
            "dest": dist + "css"
        },
        js: {
            "watch": src + "**/*.js",
            "main": {
                "main": src + "js/main.js",
                "plugins": src + "js/plugins.js"
            },
            "dest": dist + "js"
        },
        kits: {
            "watch": src + "**/*.kit",
            "main": {
                "main": src + "**/*.kit"
            },
            "dest": dist
        },
        styleGuide: {
            "main": {
                "main": "./bin/styleguide.conf.json",
            },
            "watch":
                `${dist}css/styleguide.min.css,
                ${dist}styleguide/imports/*,
                bin/styleguide.conf.json"`

        },
        browserSync: {
            "watch":
                `${dist}css/*.css,
                ${dist}js/**/*.js,
                *.html,
                !**.map,
                !./gulpfile.babel.js,
                !./**/*.min.*`
        }
    }

    let pathObj = {};
    Object.keys(paths).forEach(function(key){
        pathObj[key] = {
            "src": function() {
                paths[key].main
            }
        }
    });


    return pathObj;
}

module.exports = { PATHS: new Paths() };
