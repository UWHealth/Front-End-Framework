import 'promise-polyfill/src/polyfill';
import domReady from '@/helpers/dom-ready';
import Router from '@/pages/_router';
import 'core-js/stable';

// import * as OfflinePluginRuntime from 'offline-plugin/runtime';
// OfflinePluginRuntime.install();

let application;

async function init() {
    const appElement = document.getElementById('app');

    if (appElement) {
        application = new Router({
            hydrate: true,
            target: appElement,
            props: {
                url: window.location.pathname,
            },
        });

        window.__APP__ = application;
    }

    if (process.env.NODE_ENV !== 'production') {
        import(
            // eslint-disable-next-line lines-around-comment
            /*
                "webpackChunkName": "keyboard"
            */
            '@/components/keyboard-shortcuts'
        ).then((keyboardSC) => keyboardSC.init());
    }
}

domReady(init);

if (module.hot) {
    // module.hot.accept('@/pages/_router', (data) => {
    //     console.log('HOT DATA', data);
    // })
    module.hot.accept(function(err) {
        console.log(err);
    });
}

export { application };
