import 'promise-polyfill/src/polyfill';
import domReady from '@/helpers/dom-ready';
import store from '@/modules/demo/demo.store.js';
import demoRouter from '@/modules/demo/demo.routes.html';

let application;
let manifest;

fetch('/manifest.json')
.then(r =>r.json()).then((json) => manifest = json)
.catch(e => console.log(e));

domReady(async () => {
    const appElement = document.getElementById('app');

    if (appElement) {
        const currentRoute = window.__APP_STATE__.componentPath;

        const currentComponent = await demoRouter.getComponent(currentRoute);

        new demoRouter({
            hydrate: true,
            target: appElement,
            data: {
                pathname: window.location.pathname,
                innerComponent: currentComponent
            }
        });

        window.__APP__ = application;
    }

    if (process.env.NODE_ENV !== 'production') {
        import(
            /* "webpackChunkName": "keyboard" */
            './helpers/keyboard-shortcuts/keyboard-shortcuts.js'
        ).then((keyboardSC) => keyboardSC.init());
    }
});

const context = require.context('@/components/', true, /\.html$/);

window.store = store;

export {cache, application, manifest, context};
