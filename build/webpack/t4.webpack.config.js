/**
 * @fileoverview - Webpack configuration for generating T4 components. Uses base.webpack.config.js as a base. Saves all files to dist/t4/
 **/

const cloneDeep = require('lodash.clonedeep');
const glob = require('fast-glob');
const path = require('path');
const webpack = require('webpack');

const CWD = process.cwd();
const MODE = require(`${CWD}/build/helpers/mode.js`);
const PATHS = require(`${CWD}/config/paths.config.js`);

const baseConfig = require('./base.webpack.config.js');
const babelConfig = require(`${CWD}/config/babel.config.js`)('t4');
const svelteConfig = require('./helpers/svelte-config.js')('t4', babelConfig);

const config = cloneDeep(baseConfig.config);

config.name = 'T4';

config.devtool = false;
config.target = 'node'; // Closest target to Rhino

config.output = {
    path: path.join(PATHS.folders.dist, 't4'),
    publicPath: '/t4/',
    library: 'svelte',
    libraryTarget: 'global',
    filename: `[name].t4.js`,
};

config.plugins.push(
    new webpack.DefinePlugin({
        'typeof window': '"undefined"',
        // PRODUCTION: JSON.stringify(true),
        // VERSION: JSON.stringify('5fa3b9'),
        // BROWSER_SUPPORTS_HTML5: true,
        // TWO: '1+1',
        // 'process.env': {
        //     NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        // }
    })
);

config.module.rules.push(
    // Svelte as server-side
    svelteConfig,

    // Babelify
    {
        test: /\.(js|jsx)$/,
        enforce: 'post',
        exclude: [
            /node_modules\/core-js\//,
            /node_modules\/regenerator-runtime\//,
            /node_modules\/@?babel/,
        ],
        use: {
            loader: 'babel-loader',
            options: babelConfig,
        },
    },

    // Allow for css to be inlined
    {
        test: /\.demo\.css$/,
        use: 'raw-loader',
    }
);

// Add all components and demos
glob.sync(PATHS.folders.src + '/**/*.t4.js').forEach((file) => {
    let baseName = path.basename(file, '.t4.js');
    const entryName = baseName;

    config.entry[entryName] = file;
});

if (MODE.production) {
    const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

    config.optimization.minimizer = [
        new UglifyJsPlugin({
            parallel: true,
            cache: true,
            uglifyOptions: {
                warnings: false,

                ecma: 5,
                keep_classnames: true,
                keep_fnames: true,
                ie8: false,
                nameCache: {},
                toplevel: false,

                mangle: false,

                // compress: false,
                // output: { beautify: true, keep_quoted_props: true, quoted_keys: true },
                compress: {
                    arrows: false,
                    keep_fnames: true,
                    properties: false,
                    ecma: 5,
                    drop_console: true,
                    dead_code: true,
                    passes: 2,
                },

                output: {
                    ecma: 5,
                    wrap_iife: true,
                    keep_quoted_props: true, // important - Rhino hates .default
                    quote_keys: true, // important - Rhino hates .default
                },
            },
        }),
    ];
}

module.exports = config;
