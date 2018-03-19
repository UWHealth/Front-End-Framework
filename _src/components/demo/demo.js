import template from '../demo/_demo.wrapper.hbs';

const Demo = function(pageTitle, variants) {
    /* Check for variants as first argument */
    if (typeof pageTitle === 'object' && variants === undefined) {
        variants = pageTitle;
        pageTitle = "";
    }

    let context = Object.assign(variants, {
        "pageTitle": "→ " + pageTitle + " DEMO",
        "demoTitle": pageTitle
    });

    this.render = function(locals) {
        return template(context);
    };

    return this.render();
};

Demo.heading = function(heading) {
    return '<h3 class="demo-category">' + heading + '</h3>';
};

module.exports = Demo;
