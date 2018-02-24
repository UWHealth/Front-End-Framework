import velocity from "@/js/vendor/jquery-plugins/velocity";
import domReady from "@/js/modules/dom-ready";

domReady(() => {
    if (process.env.NODE_ENV !== 'production') {
        import('./dev/keyboard-shortcuts.js').then((keyboardSC) => keyboardSC.init());
    }
});

export default velocity;
