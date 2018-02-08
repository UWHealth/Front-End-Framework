const path = require('path');
//const context = require.context('../../_src/components/', true, /\.demo\.js$/);
const glob = require('glob');
const LOG = require('../tools/logger.js');

const context = glob.sync('./_src/components/**/*.demo.js');

// console.log(__webpack_public_path__);

const find = function(folder /* String */) {
    debugger;
    let bundle = require(`../../_src/components/${folder}/${folder}.demo.js`);
    // console.log(bundle());
    return bundle;
    // return import(`../../_src/components/${folder}/${folder}.demo.js`);
};

const routes = {};


module.exports = (locals) => {
    //console.log("locals", locals.path);


    context.forEach((file) => {
        const folder = path.basename(file, '.demo.js');
        // __webpack_public_path__ = path.resolve(process.cwd(), 'dist/components/');

        const bundle = find(folder);
        if (bundle.default && bundle.default.render) {
            routes['/' + folder + '/'] = bundle.default.render(locals);
        }
        else {
            const message = 'The demo for "' + folder + '" doesn\'t export any html. Try using the Demo constructor.';
            // routes['/' + folder + '/'] = `<html><body><p>${message}</p></body></html>`;
            new LOG('Webpack Demo', message).error();
        }
        // console.log('bundle', bundle);

        // routes['/' + folder + '/'] = bundle((template) => {
        //     debugger;
        //     // template(()=> {
        //     //     debugger;
        //     // });
        //      return template.default.render;
        //     // return routes['/' + folder] = ;
        // }).catch((err) => {
        //     console.log(err);
        // });
    });

    return routes;
};
// module.exports = function(locals) {
//     console.log(locals);
//     return routes;
//     // return routes[locals.path](locals);
// };
