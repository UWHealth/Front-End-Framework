import generic from './_generic.hbs';
import html from '../tools/_html.hbs';
import Demo from '../demo/demo.js';


const demo = new Demo(
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

export default demo;
