/**
 * Takes a target and converts it to a babel-preset-env-compatible object.
 * @param  {String} target - Accepts "web", "t4", or "node".
 * @return {Object}        - Babel-compatible targets object.
 */
module.exports = (target) => {
    const BROWSERS = require(`${process.cwd()}/package.json`).browserslist;

    switch (target) {
        case 'node':
            return { node: 'current' };

        case 't4':
            return { firefox: 2 }; // ECMA/JS version 1.7 (Rhino-like)

        case 'web':
            return { browsers: BROWSERS };

        default:
            return { browsers: BROWSERS };
    }
};
