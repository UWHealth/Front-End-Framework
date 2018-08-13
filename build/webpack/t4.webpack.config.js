/**
 * @fileoverview - Webpack configuration for generating T4 components. Uses base.webpack.config.js as a base. Saves all files to dist/t4/
 **/

const CWD = process.cwd();
const path = require('path');

const glob = require('fast-glob');
const cloneDeep = require('lodash.clonedeep');

const MODE = require(`${CWD}/build/helpers/mode.js`);
const PATHS = require(`${CWD}/config/paths.config.js`);

const baseConfig = require('./base.webpack.config.js');
const babelConfig = require(`${CWD}/config/babel.config.js`);

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

config.module.rules.push(
    // Svelte as server-side
    {
        test: /\.((sv\.)?html|svelte)$/, // .sv.html / .html / .svelte
        use: [
            {
                loader: 'babel-loader',
                options: babelConfig('t4'),
            },
            {
                loader: 'svelte-loader',
                options: {
                    format: 'cjs',
                    generate: 'ssr',
                    dev: false,
                    hydratable: true,
                    store: true,
                    preserveComments: false,
                    legacy: true,
                    preprocess: require('./helpers/svelte-sass.js'),
                },
            },
        ],
    },

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
            options: babelConfig('t4'),
        },
    },

    // Allow for css to be inlined
    {
        test: /\.demo\.css$/,
        use: 'raw-loader',
    }
);

// Add all components and demos
glob.sync(PATHS.folders.src + '/**/*.html').forEach((file) => {
    const baseName = path.basename(file, '.html');
    const entryName = baseName;

    config.entry[entryName] = file;
});

if (MODE.production) {
    const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

    config.optimization.minimizer = [
        new UglifyJsPlugin({
            uglifyOptions: {
                ecma: 5,
                mangle: false,
                parse: {
                    ecma: 6,
                },
                compress: {
                    keep_fnames: true,
                    ecma: 5,
                },
                output: {
                    wrap_iife: true,
                    beautify: false,
                    keep_quoted_props: true,
                    quote_keys: true,
                },
                beautify: false,
                keep_classnames: true,
                keep_fnames: true,
                wrap_iife: true,
                ie8: true,
            },
        }),
    ];
}

module.exports = config;
