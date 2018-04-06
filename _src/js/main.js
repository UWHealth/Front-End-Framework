import domReady from "@/js/modules/dom-ready";
import 'promise-polyfill/src/polyfill';
import { createHistory } from 'svelte-routing';
import store from '@/components/demo/demo.store.js';


domReady(() => {
    if (process.env.NODE_ENV !== 'production') {
        import('./dev/keyboard-shortcuts.js').then((keyboardSC) => keyboardSC.init());
    }
    const appElement = document.getElementById('app');

    if (appElement) {
        import(
            /* webpackChunkName: "route-[request]-[index]" */
            '@/components/demo/demo.routes.html'
        ).then((App) => {
            createHistory('browser');

            const application =
                new App["default"]({
                    target: appElement,
                    hydrate: true,
                    store
                });

            window.__APP__ = application;

            return application;
        },
        (err) => console.log(err));
    }
});

window.store = store;

const cache = require.cache;
export {__webpack_modules__, cache} // eslint-disable-line
