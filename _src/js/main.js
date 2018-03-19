import domReady from "@/js/modules/dom-ready";

import Page from '@/_samples/svelte.sample.html';
import {Store} from 'svelte/store.js';

import { createHistory } from 'svelte-routing';
import App from '@/components/demo/demo.routes.html';

let main;
let store;

domReady(() => {
    if (process.env.NODE_ENV !== 'production') {
        import('./dev/keyboard-shortcuts.js').then((keyboardSC) => keyboardSC.init());
    }

    store = new Store();

    if (document.getElementById('app')) {
        createHistory('browser');
        new App({
            target: document.getElementById('app'),
            hydrate: true,
            store
        });
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
