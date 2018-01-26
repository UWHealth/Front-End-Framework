class Component {
    constructor(name, defaultData) {
        this.componentName = name;
        this.data = Object.assign({}, {
            componentName: name
        }, defaultData);
    }
}

export default Component;
