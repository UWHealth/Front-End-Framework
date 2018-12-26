/**
 * @fileoverview - Webpack configuration for generating T4 components. Uses base.webpack.config.js as a base. Saves all files to dist/t4/
 **/

const glob = require('fast-glob');
const path = require('path');
const webpack = require('webpack');

const CWD = process.cwd();
const MODE = require(`${CWD}/build/helpers/mode.js`);
const PATHS = require(`${CWD}/config/paths.config.js`);

const babelConfig = require(`${CWD}/config/babel.config.js`)('t4');
const babelLoader = require(`${CWD}/build/helpers/babel-loader-config.js`);
const svelteLoader = require(`${CWD}/build/helpers/svelte-loader-config.js`);
const config = require('./base.webpack.config.js')('node');

config.name = 'T4';
config.target = 'node'; // Closest target to Rhino

const pubPath = path.posix.relative(PATHS.folders.dist, PATHS.folders.pub);

config.output = {
    path: path.resolve(PATHS.folders.dist, 't4'),
    publicPath: '/',
    library: 'uwhealth',
    libraryTarget: 'global',
    filename: `${pubPath}/t4/[name].t4.js`,
};
config.devtool = false;

config.plugins.push(
    new webpack.DefinePlugin({
        'typeof window': '"undefined"',
        'typeof document': '"object"',
        // PRODUCTION: JSON.stringify(true),
        // VERSION: JSON.stringify('5fa3b9'),
        // BROWSER_SUPPORTS_HTML5: true,
        // 'process.env': {
        //     NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        // }
    })
);

config.module.rules.push(
    // Svelte as server-side
    svelteLoader(config.name, babelConfig),

    // Babelify
    babelLoader(config.name, babelConfig)
);

// Add all components and demos
glob.sync(PATHS.folders.src + '/**/*.t4.js').forEach((file) => {
    let baseName = path.basename(file, '.t4.js');
    const entryName = baseName;

    config.entry[entryName] = path.resolve(file);
});

if (MODE.production) {
    const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

    config.optimization.minimizer = [
        new UglifyJsPlugin({
            parallel: true,
            cache: true,
            uglifyOptions: {
                warnings: false,

                keep_classnames: true,
                keep_fnames: true,
                ie8: false,
                nameCache: {},
                toplevel: false,

                mangle: false,

                compress: {
                    keep_fnames: true,
                    properties: false,
                    drop_console: true,
                    dead_code: true,
                    passes: 2,
                },

                output: {
                    wrap_iife: true,
                    keep_quoted_props: true, // important - Rhino hates .default
                    quote_keys: true, // important - Rhino hates { default: }
                },
            },
        }),
    ];
}

module.exports = config;
