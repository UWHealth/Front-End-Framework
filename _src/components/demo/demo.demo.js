import template from '../demo/_demo.wrapper.hbs';

const Demo = function(pageTitle, variants) {
    /* Check for variants as first argument */
    if (typeof pageTitle === 'object' && variants === undefined) {
        variants = pageTitle;
        pageTitle = "DEMO";
    }

    let context = Object.assign(variants, {
        "pageTitle": pageTitle
    });

    this.render = function(locals) {
        context.locals = locals;
        return template(context);
    };

    return this.render;
};

export default Demo;
