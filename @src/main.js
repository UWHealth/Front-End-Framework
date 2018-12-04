import 'promise-polyfill/src/polyfill';
import domReady from '@/helpers/dom-ready';
import store from '@/modules/demo/demo.store.js';
import demoRouter from '@/modules/demo/demo.routes.html';
const PATHS = preval`module.exports = require(process.cwd() + '/config/paths.config.js')`;

console.log(PATHS);
let application;

async function init() {
    const appElement = document.getElementById('app');

    if (appElement) {
        const currentRoute = window.__APP_STATE__.componentPath;

        const currentComponent = await demoRouter.getComponent(currentRoute);

        application = new demoRouter({
            hydrate: true,
            target: appElement,
            data: {
                pathname: window.location.pathname,
                innerComponent: currentComponent,
            },
        });

        window.__APP__ = application;
    }

    if (process.env.NODE_ENV !== 'production') {
        import(/* "webpackChunkName": "keyboard" */
        '@/helpers/keyboard-shortcuts').then((keyboardSC) => keyboardSC.init());
    }
}

domReady(init);

window.store = store;

if (module.hot) {
    console.log("I'm hot.");
    module.hot.accept(function(err) {
        console.log(err);
    });
}

export { application };
