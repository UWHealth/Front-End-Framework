/* eslint-disable complexity */
const CWD = process.cwd();
const MODE = require(`${CWD}/build/helpers/mode.js`);
const PATHS = require(`${CWD}/config/paths.config.js`);
const fs = require('fs');
const glob = require('fast-glob');
const hash = require('hash-sum');

// Take in build information and stringify it
// to determine if the cache should be invalidated
const pkg = require(CWD + '/package.json');

function requireString(path, asJson) {
    const file = fs.readFileSync(require.resolve(path), 'utf-8');
    return asJson ? JSON.parse(file) : file;
}

module.exports = () => {
    const buildInfo = {
        pkg: pkg.version,
        babelLoader: requireString('babel-loader/package.json', true).version || '',
        babel: requireString('@babel/core/package.json').version || '',
        corejs: requireString('core-js/package.json').version || '',
        paths: PATHS,
        svelte: requireString('svelte/package.json').version || '',
        webpack: requireString('webpack/package.json').version || '',
        configs: {
            babel: requireString(PATHS.folders.config + '/babel.config.js'),
        },
        mode: MODE.mode,
    };
    // Add webpack files to cache,
    // so we can invalidate cache on config change
    glob.sync([`${PATHS.folders.build}/**/webpack/**/*.js`]).forEach(
        (config, i) => {
            try {
                buildInfo.configs[`${i}`] = requireString(config);
            } catch (e) {
                return '';
            }
        }
    );
    return hash(JSON.stringify(buildInfo));
}
