import domReady from "@/js/modules/dom-ready";
import {Store} from 'svelte/store.js';
import { createHistory } from 'svelte-routing';

let store;

domReady(() => {
    if (process.env.NODE_ENV !== 'production') {
        import('./dev/keyboard-shortcuts.js').then((keyboardSC) => keyboardSC.init());
    }

    store = new Store();
    const appElement = document.getElementById('app');

    if (appElement) {
        import(
            /* webpackChunkName: "routes" */
            '@/components/demo/demo.routes.html'
        ).then((App) => {
            createHistory('browser');
            /* eslint-disable no-new */
            new App.default({
                target: appElement,
                hydrate: true,
                store
            });
        }).catch((err) => console.log(err));
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

export default store;
