class Component {
    constructor(name, defaultData, grouping) {
        this.componentName = name;

        this.data = Object.assign({}, {
            componentName: name
        }, defaultData);

        this.group = grouping || defaultData.group || {};
    }
}

export default Component;
