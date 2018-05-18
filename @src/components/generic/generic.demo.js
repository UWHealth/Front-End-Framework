import generic from './_generic.hbs';
import Demo from '@/modules/demo/demo.js';


module.exports = new Demo(
    'Generic', generic,
    {
        "components": [
            generic({
                componentName: "generic",
                body: "Baseline Generic",
                componentClass: "generic"
            }),
            generic({
                componentName: "generic",
                body: "Even more Generic",
                componentClass: "generic"
            })
        ]
    }
);
