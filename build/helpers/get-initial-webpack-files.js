/**
 * @fileoverview - Checks webpack stats for files that should be loaded as entry points.
 *   Will also return any dynamically-created chunks.
 *   If an array of stats is passed in, then we return an array of arrays
 */

module.exports = function(wpStats) {
    try {
        // If we have stats.stats, then this is a MultiCompiler
        // We'll return the results of both compilers (array of arrays)
        return wpStats.stats
            ? wpStats.toJson().children.map((stats) => getInitial(stats))
            : getInitial(wpStats);
    } catch (e) {
        console.log(e);
        return '';
    }
};

function getInitial(stats) {
    const uniq = require('lodash.uniq');
    const isJS = (file) => /\.js(\?[^.]+)?$/.test(file);
    const isCSS = (file) => /\.css(\?[^.]+)?$/.test(file);

    // Webpack stats object normalization
    stats = stats.compilation ? stats.toJson() : stats;

    // Only return unique entrypoints
    return uniq(
        Object.keys(stats.entrypoints)
            .map(function(name) {
                return stats.entrypoints[name].assets;
            })
            .reduce(function(assets, all) {
                return all.concat(assets);
            }, [])
            .filter(function(file) {
                return isJS(file) || isCSS(file);
            })
    );
}
