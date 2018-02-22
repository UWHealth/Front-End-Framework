import velocity from "./vendor/velocity.js";

if (process.env.NODE_ENV !== 'production') {
    import('./dev/keyboard-shortcuts.js').then((keyboardSC) => keyboardSC.init());
}

module.exports = velocity;
