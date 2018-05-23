function importComponent(component) {
    return import(
        /* "webpackChunkName": "[request]" */
        '@/components/' + component + '.html'
    )
    .catch(err => console.error(err));
}
