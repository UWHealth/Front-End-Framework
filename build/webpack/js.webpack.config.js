/**
 * @fileoverview - Webpack configuration.
 * Written in CommonJS (require/module).
 */

const webpack   = require('webpack');
const cloneDeep = require('lodash.clonedeep');

const cwd    = process.cwd();

const PATHS = require(`${cwd}/config/paths.config.js`);
const STATS = require('./helpers/webpack-stats.js')();
const MODE  = require('../tools/mode.js');
const BROWSERS = require(`${cwd}/package.json`).browserslist;

const config = cloneDeep(require(`${cwd}/webpack.config.js`));

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

config.module.rules.push(
    {
        test: /\.(html|sv\.html|svelte)$/,
        use: [
            {
                loader: 'svelte-loader',
                options: {
                    generate: 'dom',
                    hydratable: true,
                    dev: true,
                    store: true
                }
            }
        ]
    }
);

if (MODE.production) {
    const ClosureCompilerPlugin = require('webpack-closure-compiler');
    const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

    config.devtool = false;
    config.node = false;

    config.plugins.push(

        // Keep module.id stable when vendor modules do not change
        new webpack.HashedModuleIdsPlugin(),

        // Remove module.hot code from modules
        new webpack.NoHotModuleReplacementPlugin(),

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
    );
}

module.exports = config;
