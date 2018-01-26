import base from './base.hbs';
import button from '../components/button/_button.hbs';
import html from '../components/html/_html.hbs';

const context = {
    "pageTitle": "Buttons",
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
};

export default function render(locals) {
    context.locals = locals;
    return base(context);
}
