export default function populateAttrs(attrs, component) {
    component = component || this;
    attrs = attrs || component.get('attrs');
    if (!attrs) { return false; }
    Object.keys(attrs).forEach((attr) => {
        const obj = {};
        obj[attr] = attrs[attr];
        component.set(obj);
    });
}
