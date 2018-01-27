import demoBase from '../../__samples__/base.hbs';

const Demo = function(componentName, template, variants) {
    const self = this;

    this.variants = variants;

    this.context = Object.assign(variants, {
        "pageTitle": componentName
    });

    this.render = function(locals) {
        self.context.locals = locals;
        return demoBase(self.context);
    };

    return this;
};

export default Demo;
