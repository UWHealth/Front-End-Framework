function renderTemplate(context) {
    let html = '';

    context = typeof context.default === 'function' ? context.default() : context.default;

    context.components.forEach(function(component) {
        html += component;
    });

    return html;
}


export default renderTemplate;
