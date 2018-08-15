const PATHS = require(`${process.cwd()}/config/paths.config.js`);

/**
 * Allows for sass imports to use aliases to represent the folder paths (similar to webpack)
 * @reference            - https://github.com/sass/node-sass#importer
 * @return {Object}      - Resolved path, with aliases replaced
 */
function aliasPath(url) {
    const path = require('path');

    const aliases = Object.keys(PATHS.aliases);
    const match = aliases.filter(
        (alias) => url.indexOf(alias) > -1 && url.indexOf(alias) < 2
    );
    return {
        file: match[0]
            ? path.resolve(
                  PATHS.aliases[match[0]],
                  url.replace(match[0] + '/', '')
              )
            : url,
    };
}

const sassConfig = {
    outputStyle: 'expanded',
    errLogToConsole: true,
    includePaths: [PATHS.folders.src, PATHS.folders.config],
    importer: aliasPath,
};

module.exports = sassConfig;
