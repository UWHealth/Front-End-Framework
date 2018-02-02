import button from './button.default.js';
import style from './button.demo.css';
import Demo from '../demo/demo.js';

const category = Demo.heading;
const icon = `<svg width="28" height="28" viewBox="0 0 28 28" class="btn__svg"><path class="btn-svg__path" d="M16.4,12.1l-2.3-2.2l1.9-2l5,5.3v0.3l-5,5.3l-1.9-2l2.3-2.2H7v-2.6H16.4z"/></svg>`;

export default new Demo(
    'Buttons',
    {
        "examples": [
            button(),
            button({
                icon: icon
            })
        ],
        "components": [
            category("Button Baseline"),
            button({
                body: "Button"
            }),

            category("Button widths"),
            button({
                body: "Wide",
                type: ['wide']
            }),

            category("Buttons with images"),
            button({
                body: "Baseline",
                iconUrl: '/public/img/dev/github.png'
            }),
            button({
                body: "Reversed",
                type: ['reversed'],
                iconUrl: '/public/img/dev/github.png'
            }),
            button({
                body: "Wide",
                type: ['wide'],
                iconUrl: '/public/img/dev/github.png'
            }),

            category("Buttons with SVG icons"),
            button({
                body: "Baseline",
                icon: icon
            }),
            button({
                body: "Reversed",
                type: ['reversed'],
                icon: icon
            }),
            button({
                body: "Wide",
                type: ['wide'],
                icon: icon
            }),

            '<style>' + style + '</style>'
        ]
    }
);
