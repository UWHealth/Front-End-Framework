/**
 * @fileoverview - Webpack configuration.
 * Written in CommonJS (require/module).
 */

// Webpack Plugins
const webpack = require('webpack');
const ClosureCompilerPlugin = require('webpack-closure-compiler');
const ShakePlugin = require('webpack-common-shake').Plugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config   = require('../../webpack.config.js');

const STATS    = require('./stats.webpack.config.js')();
const MODE     = require('../tools/mode.js');
const PATHS    = require('../paths.config.js');

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
    config.devtool = false;
    config.node = false;

    config.plugins.push(

        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),

        new UglifyJsPlugin({
            uglifyOptions: {
                ie8: false,
                beautify: false,
                mangle: true,
                compress: true,
                comments: false,
                // exclude: /\/(t4|hbs)./
            }
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
