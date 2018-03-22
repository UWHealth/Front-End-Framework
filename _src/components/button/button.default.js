import template from './_button.hbs';

const defaultData = {
    body: "Button",
    type: [],
    iconUrl: ""
};

module.exports = function(data) {
    return template(Object.assign({}, defaultData, data || {}));
};
