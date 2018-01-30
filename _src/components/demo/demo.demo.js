import demoBase from '../demo/_demo.wrapper.hbs';

const Demo = function(pageTitle, variants) {
    const self = this;

    /* Check for variants as first argument */
    if (typeof pageTitle === 'object' && variants === undefined) {
        variants = pageTitle;
        pageTitle = "DEMO";
    }

    this.variants = variants;

    this.context = Object.assign(variants, {
        "pageTitle": pageTitle
    });

    this.render = function(locals) {
        self.context.locals = locals;
        return demoBase(self.context);
    };

    return this.render;
};

export default Demo;
