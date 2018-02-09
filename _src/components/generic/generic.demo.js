const generic = require('./_generic.hbs');
const html = require('../tools/_html.hbs');
const Demo = require('../demo/demo.js');


module.exports = new Demo(
    'Generic', generic,
    {
        "components": [
            generic({
                componentName: "generic",
                body: "Baseline Generic"
            }),
            generic({
                componentName: "generic",
                body: "Even more Generic"
            })
        ]
    }
);
