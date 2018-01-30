import button from '../components/button/button.default.js';
import html from '../components/utilities/_html.hbs';
import Demo from '../components/demo/demo.demo.js';


export default new Demo(
    'Button',
    {
        "components": [
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
