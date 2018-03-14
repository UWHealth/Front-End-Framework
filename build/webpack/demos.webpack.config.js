/**
 * @fileoverview - Webpack configuration for generating demo pages. Uses ./webpack.config.js as a base. Saves all files to dist/samples/
**/

const cwd       = process.cwd();

const htmlConfig = require('./helpers/webpack-html-configurator.js');
const PATHS = require(`${cwd}/config/paths.config.js`);

const config = htmlConfig({
    baseConfig: require(`${cwd}/webpack.config.js`),
    src: PATHS.demos.entry.all,
    template: PATHS.demos.entry.template,
    dest: PATHS.demos.dest,
    nameSpace: "demo",
    sourceExtension: ".demo.js",
});

config.module.rules.push(
    // Allow for css to be inlined
    {
        test: /\.demo\.css$/,
        use: 'raw-loader'
    }
);

module.exports = config;
