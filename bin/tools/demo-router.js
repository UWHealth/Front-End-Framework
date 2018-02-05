const path = require('path');
const context = require.context('../../_src/components/', true, /\.demo\.js$/);

const render = function(folder) {
    // debugger;
    // let bundle = require(`../../_src/components/${folder}/${folder}.demo.js`);
    // debugger;
    // return bundle();
    return import(`../../_src/components/${folder}/${folder}.demo.js`);
};

module.exports = function(locals) {
    const routes = {};

    context.keys().forEach((file) => {
        const folder = path.basename(file, '.demo.js');
        render(folder).then((template) => {
            console.log(template);
            routes['/' + folder] = template.default.render(locals);
        }).catch((err) => {
            console.log(err);
        });
    });

    return routes;
};
