const template = require('../demo/_demo.wrapper.hbs');

const Demo = function(pageTitle, variants) {
    /* Check for variants as first argument */
    if (typeof pageTitle === 'object' && variants === undefined) {
        variants = pageTitle;
        pageTitle = "DEMO";
    }

    let context = Object.assign(variants, {
        "pageTitle": "→ " + pageTitle + " DEMO",
        "demoTitle": pageTitle
    });

    this.render = function(locals) {
        context.locals = locals;
        return template(context);
    };

    return this.render();
};

Demo.heading = function(heading) {
    return '<h3 class="demo-category">' + heading + '</h3>';
};

module.exports = Demo;
