const path = require('path');
const glob = require('glob');
// const LOG = require('../tools/logger.js');

const context = glob.sync('./_src/components/**/*.demo.js');

const findTemplate = function(folder) {
    let bundle = require(`../../_src/components/${folder}/${folder}.demo.js`);
    return bundle;
};

const routes = {};

module.exports = function(locals) {
    context.forEach((file) => {
        const folder = path.basename(file, '.demo.js');

        let bundle = findTemplate(folder) || '';

        if (bundle.default) {
            // Allow for ES6 module types
            bundle = bundle.default;
        }

        if (bundle.render) {
            // Add demo path to router object, pointing to a rendered template
            routes['/' + folder + '/'] = bundle.render(locals);
        }
        else {
            const message = 'The demo for "' + folder + '" doesn\'t export any html. Try using the Demo constructor. All demos must export a "render" function.';
            console.log('Webpack Demo Error', message);
        }
    });

    return routes;
};
