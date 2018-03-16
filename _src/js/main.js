import domReady from "@/js/modules/dom-ready";

import Page from '@/_samples/svelte.sample.html';
import {Store} from 'svelte/store.js';

let main;
let store;

domReady(() => {
    if (process.env.NODE_ENV !== 'production') {
        import('./dev/keyboard-shortcuts.js').then((keyboardSC) => keyboardSC.init());
    }

    store = new Store();

    main = new Page({
        target: document.querySelector('main'),
        hydrate: true,
        data: {},
        store
    });

    store.set({'Buttons': main.refs});
    store.set({'Page': main});

});

export default store;
