import 'promise-polyfill/src/polyfill';
import domReady from '@/helpers/dom-ready';
import store from '@/layouts/demo/demo.store.js';
import demoRouter from '@/layouts/demo/demo.routes.html';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

OfflinePluginRuntime.install();

let application;

async function init() {
    const appElement = document.getElementById('app');

    if (appElement && window.__APP_STATE__) {
        const currentRoute = window.__APP_STATE__.componentPath;

        const currentComponent = await demoRouter.getComponent(currentRoute);

        application = new demoRouter({
            hydrate: true,
            target: appElement,
            data: {
                pathname: window.location.pathname,
                innerComponent: currentComponent,
            },
        });

        window.__APP__ = application;
    }

    if (process.env.NODE_ENV !== 'production') {
        import(/* "webpackChunkName": "keyboard" */
        '@/components/keyboard').then((keyboardSC) => keyboardSC.init());
    }
}

domReady(init);

window.store = store;

if (module.hot) {
    module.hot.accept(function(err) {
        console.log(err);
    });
}

export { application };
