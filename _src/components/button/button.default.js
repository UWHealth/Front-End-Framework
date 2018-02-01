import template from './_button.hbs';

const defaultData = {
    body: "Button Body",
    type: [],
    iconUrl: ""
};

export default function(data) {
    return template(Object.assign({}, defaultData, data || {}));
}
