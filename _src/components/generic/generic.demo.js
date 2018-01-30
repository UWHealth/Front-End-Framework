import generic from './_generic.hbs';
import html from '../html/_html.hbs';
import Demo from '../demo/demo.js';


const demo = new Demo(
    'Button', generic,
    {
        "components": [
            html({
                html: `
                    <div class="wrap">
                        <h1>Buttons!!</h1>
                    </div>`
            }),
            generic({
                componentName: "generic",
                body: "Normal Button"
            }),
            generic({
                componentName: "generic",
                body: "Wide Button"
            })
        ]
    }
);

export default demo.render;
