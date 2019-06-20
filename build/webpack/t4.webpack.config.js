/**
 * @fileoverview - Webpack configuration for generating T4 components. Uses base.webpack.config.js as a base. Saves all files to dist/t4/
 **/

const glob = require('fast-glob');
const path = require('path');

const { babelLoader, svelteLoader } = require(`./helpers/loader-configs.js`);
const config = require('./base.webpack.config.js')({
    name: 'T4',
    target: 'node',
});

const CWD = process.cwd();
const PATHS = require(`${CWD}/config/paths.config.js`);
const PUB_PATH = path.posix.relative(PATHS.folders.pub, PATHS.folders.dist);

config.output = {
    path: path.resolve(PATHS.folders.dist, 't4'),
    publicPath: '/',
    library: 'uwhealth',
    libraryTarget: 'global',
    filename: `${PUB_PATH}/t4/[name].t4.js`,
};

config.devtool = false;

// Add all components as separate entry points
glob.sync(PATHS.folders.src + '/**/*.t4.js').forEach((file) => {
    let baseName = path.basename(file, '.t4.js');
    const entryName = baseName;

    config.entry[entryName] = path.resolve(file);
});

config.module.rules.push(
    // Svelte as server-side
    svelteLoader(config.name),

    // Babelify
    babelLoader(config.name)
);

// config.optimization.minimize = false;

if (config.mode === 'production') {
    const TerserPlugin = require('uglifyjs-webpack-plugin');

    config.optimization.minimizer = [
        new TerserPlugin({
            parallel: true,
            cache: true,
            terserOptions: {
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
