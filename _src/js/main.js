import domReady from "@/js/modules/dom-ready";
import 'promise-polyfill/src/polyfill';
import { createHistory } from 'svelte-routing';
import store from '@/components/demo/demo.store.js';

let app;

domReady(() => {
    if (process.env.NODE_ENV !== 'production') {
        import('./dev/keyboard-shortcuts.js').then((keyboardSC) => keyboardSC.init());
    }

    const appElement = document.getElementById('app');

    if (appElement) {
        app = import('@/components/demo/demo.routes.html')
            .then((App) => {
                createHistory('browser');
                App = App.default;
                /* eslint-disable no-new */
                let application = new App({
                    target: appElement,
                    hydrate: true,
                    store
                });

                window.__APP__ = application;

                return application;
            },
            (err) => console.log(err),
            'routes'
        )
            //.catch((err) => console.log(err));
    }

    // main = new Page({
    //     target: document.querySelector('body'),
    //     hydrate: true,
    //     store
    // });
    //
    // store.set({'Buttons': main.refs});
    // store.set({'Page': main});
});

window.store = store;

const cache = require.cache;
export {app, __webpack_modules__, cache} // eslint-disable-line
