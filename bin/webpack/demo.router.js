const path = require('path');
const context = require.context('../../_src/components/', true, /\.demo\.js$/);

const render = function(folder) {
    return require(`../../_src/components/${folder}/${folder}.demo.js`);
};

const routes = {};
context.keys().forEach((file) => {
    const folder = path.basename(file, '.demo.js');
    const renderer = render(folder);
    routes['/' + folder] = renderer.default.render();
});

module.exports = function(locals) {
    return routes;
};

