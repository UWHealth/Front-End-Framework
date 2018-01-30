import template from './_button.hbs';

const defaultData = {
    body: "Button Body",
    type: [],
    iconUrl: "/public/img/dev/github.png"
};

export default function(data) {
    return template(Object.assign({}, defaultData, data || {}));
}
