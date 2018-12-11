const CWD = process.cwd();
const MODE = require(`${CWD}/build/helpers/mode.js`);
const PATHS = require(`${CWD}/config/paths.config.js`);
const fs = require('fs');
const glob = require('fast-glob');
const hash = require('hash-sum');

// Take in build information and stringify it
// to determine if the cache should be invalidated
const pkg = require(CWD + '/package.json');

const buildInfo = {
    pkg: pkg.version,
    cacheLoader: require('cache-loader/package.json').version || '',
    babelLoader: require('babel-loader/package.json').version || '',
    babel: require('@babel/core/package.json').version || '',
    paths: PATHS,
    babelConfig: require(PATHS.folders.config + '/babel.config.js'),
    svelteLoader: require('svelte-loader/package.json').version || '',
    svelte: require('svelte/package.json').version || '',
    webpack: require('webpack/package.json').version || '',
    configs: {},
    mode: MODE.mode,
    isProd: !!MODE.production,
    isDev: !MODE.production,
};

// Add config files to cache,
// so we can invalidate cache on config change
glob.sync([`${PATHS.folders.build}/**/webpack/**/*.js`]).forEach(
    (config, i) => {
        try {
            buildInfo.configs[`${i}`] = fs.readFileSync(config, 'utf-8');
        } catch (e) {
            return '';
        }
    }
);

module.exports = hash(JSON.stringify(buildInfo));

// fs.writeFileSync(
//     '/Users/lee/Desktop/test.txt',
//     JSON.stringify(buildInfo),
//     'utf-8'
// );
