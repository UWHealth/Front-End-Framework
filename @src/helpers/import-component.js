function importComponent(component) {
    return import(
        /* "webpackChunkName": "[request]" */
        '@/components/' + component + '.html'
    )
    .catch(err => console.error(err));
}

function requireComponent(component) {
    return require('@/components/' + component + '.html');
}

export {importComponent, requireComponent};
