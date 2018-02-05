const path = require('path');

/**
 * Normalizes PATHS object by:
 *  - Adding "array" entry to path objects, allowing for a selection like `browsersync.watch.array`
 *  - Running non-glob paths through path.normalize
 * @return {Object} normalized PATHS object with "array" keys added
 */
module.exports = function(PATHS) {
    Object.keys(PATHS).forEach((target) => {
        Object.keys(PATHS[target]).forEach((group) => {
            let currentGroup = PATHS[target][group];

            if (typeof currentGroup === "object") {
                let array = [];

                Object.keys(currentGroup).forEach((file) => {
                    if (Array.isArray(currentGroup[file])) {
                        currentGroup[file] = currentGroup[file].map(globNormalize);
                        array = array.concat(currentGroup[file]);
                    }
                    else {
                        currentGroup[file] = globNormalize(currentGroup[file]);
                        array.push(currentGroup[file]);
                    }
                });

                currentGroup["array"] = array;
            }
            else if (typeof currentGroup === 'string') {
                currentGroup = globNormalize(currentGroup);
            }
        });
    });


    return PATHS;
};

/**
 * Normalize paths, including globs, replacing backslashes with forward slashes
 * @param  {String} item path string
 * @return {String}      normalize path string, if a glob, normalized to a POSIX path
 */
const globNormalize = function(item) {
    return (item.indexOf("*") > -1) ? item.replace(/\\/g, '/') : path.normalize(item);
};

