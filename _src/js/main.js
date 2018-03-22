import domReady from "@/js/modules/dom-ready";
import { createHistory } from 'svelte-routing';

let app;

domReady(() => {
    if (process.env.NODE_ENV !== 'production') {
        import('./dev/keyboard-shortcuts.js').then((keyboardSC) => keyboardSC.init());
    }

    const appElement = document.getElementById('app');

    if (appElement) {
        app = import(
            /* webpackChunkName: "routes" */
            '@/components/demo/demo.routes.html'
        ).then((App) => {
            createHistory('browser');
            /* eslint-disable no-new */
            return new App.default({
                target: appElement,
                hydrate: true
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

export default app;
