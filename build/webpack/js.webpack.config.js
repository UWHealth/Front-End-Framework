/**
 * @fileoverview - Webpack configuration.
 * Written in CommonJS (require/module).
 */

// Webpack Plugins
const webpack = require('webpack');
const cloneDeep = require('lodash.clonedeep');

const config   = cloneDeep(require('../../webpack.config.js'));

const STATS    = require('../tools/webpack-stats.js')();
const MODE     = require('../tools/mode.js');
const PATHS    = require('../../config/paths.config.js');

config.stats = STATS;
config.target = "web";
config.devtool = 'cheap-source-map';

config.entry = {
    main: PATHS.js.entry.main,
    plugins: PATHS.js.entry.plugins
};
config.output = {
    path: PATHS.js.dest,
    publicPath: '/public/js/',

    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',

    libraryTarget: 'umd',
    library: 'uwhealth',
};


if (MODE.development) {
    config.plugins.push(
        // Make output easier to read
        new webpack.NamedModulesPlugin(),
    );
}

if (MODE.production) {
    const ClosureCompilerPlugin = require('webpack-closure-compiler');
    const ShakePlugin = require('webpack-common-shake').Plugin;
    const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

    config.devtool = false;
    config.node = false;

    config.plugins.push(

        // keep module.id stable when vendor modules does not change
        new webpack.HashedModuleIdsPlugin(),
        // enable scope hoisting
        new webpack.optimize.ModuleConcatenationPlugin(),
        // don't create files with errors
        new webpack.NoEmitOnErrorsPlugin(),

        new UglifyJsPlugin({
            uglifyOptions: {
                ie8: false,
                beautify: false,
                mangle: true,
                compress: true,
                comments: false,
                // exclude: /\/(t4|hbs)./
            },
            parallel: true
        }),

        new ClosureCompilerPlugin({
            compiler: {
                language_in: 'ECMASCRIPT6',
                language_out: 'ECMASCRIPT5',
                compilation_level: 'SIMPLE',
                dependency_mode: 'LOOSE',
                rewrite_polyfills: false
            },
            concurrency: 3
        }),

        new ShakePlugin(),
    );
}

module.exports = config;
