import button from '../components/button/_button.hbs';
import html from '../components/html/_html.hbs';
import Demo from '../components/demo/demo.js';


const demo = new Demo(
    'Button', button,
    {
        "components": [
            html({
                html: `
                    <div class="wrap">
                        <h1>Buttons!!</h1>
                    </div>`
            }),
            button({
                body: "Normal Button"
            }),
            button({
                body: "Wide Button",
                type: ['wide']
            })
        ]
    }
);

export default demo.render;