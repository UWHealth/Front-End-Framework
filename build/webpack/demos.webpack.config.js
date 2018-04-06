/**
 * @fileoverview - Webpack configuration for generating demo pages. Uses ./webpack.config.js as a base. Saves all files to dist/samples/
**/

const cwd = process.cwd();

const htmlConfig = require('./helpers/create-html-config.js');
const PATHS = require(`${cwd}/config/paths.config.js`);

const config = htmlConfig({
    baseConfig: require(`./base.webpack.config.js`),
    src: PATHS.demos.entry.svelte,
    template: PATHS.demos.entry.template,
    dest: PATHS.demos.dest,
    nameSpace: "demo",
    sourceExtension: ".demo.html",
});

config.name = "Demo";
// config.output.chunkFilename = "demo.[name][id].js";


config.module.rules.push(
    // Allow for css to be inlined
    {
        test: /\.demo\.css$/,
        use: 'raw-loader'
    }
);

module.exports = config;
