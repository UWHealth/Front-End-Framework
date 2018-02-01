import button from '../components/button/button.default.js';
import html from '../components/utilities/_html.hbs';
import Demo from '../components/demo/demo.demo.js';


export default new Demo(
    'Button',
    {
        "components": [
            button({
                body: "Button"
            }),
            button({
                body: "Normal Button"
            }),
            button({
                body: "Wide Button",
                type: ['wide']
            }),
            button({
                body: "Button w/ image",
                iconUrl: '/public/img/dev/github.png'
            })
        ]
    }
);
