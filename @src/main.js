import 'promise-polyfill/src/polyfill';
import domReady from '@/helpers/dom-ready';
import store from '@/layouts/demo/demo.store.js';
import demoRouter from '@/pages/_router.svelte';
import { createBrowserHistory } from 'svelte-routing';
// import * as OfflinePluginRuntime from 'offline-plugin/runtime';

//OfflinePluginRuntime.install();
const history = createBrowserHistory();

let application;

async function init() {
    const appElement = document.getElementById('app');

    if (appElement) {
        const currentRoute = window.location.pathname;

        application = new demoRouter({
            hydrate: true,
            target: appElement,
            data: {
                history,
                pathname: currentRoute,
                // innerComponent: currentComponent,
            },
        });

        window.__APP__ = application;
    }

    if (process.env.NODE_ENV !== 'production') {
        import(/* "webpackChunkName": "keyboard" */
        '@/components/keyboard-shortcuts').then((keyboardSC) => keyboardSC.init());
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
