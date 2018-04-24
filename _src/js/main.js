import domReady from "@/js/modules/dom-ready";
import 'promise-polyfill/src/polyfill';
import store from '@/components/demo/demo.store.js';
import Router from '@/components/demo/demo.routes.html';
//import {Registry, configure, createProxy} from 'svelte-dev-helper';

let application;

domReady(() => {
    if (process.env.NODE_ENV !== 'production') {
        import('./dev/keyboard-shortcuts.js').then((keyboardSC) => keyboardSC.init());
    }
    const appElement = document.getElementById('app');

    if (appElement) {
        const currentRoute = window.__APP_STATE__.componentPath;

        import(
            /* "webpackChunkName": "routes/[request]" */
            '@/components/'+ currentRoute + '/' + currentRoute + '.demo.html'
        ).then((App) => {

            new Router({
                hydrate: true,
                target: appElement,
                data: {
                    innerComponent: App["default"],
                    pathname: window.location.pathname
                }
            });

            window.__APP__ = application;

            return application;
        },
        (err) => console.log(err));
    }
});

window.store = store;

const cache = require.cache;
export {__webpack_modules__, __webpack_require__, cache, application} // eslint-disable-line
