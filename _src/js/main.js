import velocity from "./vendor/velocity.js";
import * as keyboardSC from './dev/keyboard-shortcuts.js';

if (process.env.NODE_ENV !== 'production') {
    keyboardSC.init();
}
