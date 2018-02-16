class Component {
    constructor(name, defaultData, grouping) {
        this.componentName = name;

        this.data = Object.assign({}, {
            componentName: name
        }, defaultData);

        this.group = grouping || {};
    }
}

export default Component;
