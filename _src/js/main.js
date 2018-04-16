import domReady from "@/js/modules/dom-ready";
import 'promise-polyfill/src/polyfill';
import store from '@/components/demo/demo.store.js';
import runtime from 'sapper/runtime.js';

let application;

domReady(() => {
    if (process.env.NODE_ENV !== 'production') {
        import('./dev/keyboard-shortcuts.js').then((keyboardSC) => keyboardSC.init());
    }
    const appElement = document.getElementById('app');

    if (appElement) {
        import(
            /* "webpackChunkName": "routes" */
            '@/components/demo/demo.routes.html'
        ).then((App) => {

            //let currentRoute = document.getElementById('currentRoute').innerHTML;
            // currentRoute = `demo-routes/${currentRoute}.js`;
            //console.log(__webpack_require__(currentRoute));

            application =
                new App["default"]({
                    target: appElement,
                    hydrate: true,
                    data: {
                        // hydrating: true,
                        // hydratingHtml: appElement,
                        match: {
                            params: {
                                demo: currentRoute
                            }
                        }
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
