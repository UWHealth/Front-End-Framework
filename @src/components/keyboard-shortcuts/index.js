import Mousetrap from './mousetrap.js';

export function init() {
    // Adds ability to toggle the baseline grid and column grid on/off
    // Styles located in sass/overrides/_ov-debug.scss
    Mousetrap.bind(["ctrl+'", "command+'"], function() {
        document.body.classList.toggle('baseline-on');
    });

    Mousetrap.bind(['ctrl+;', 'command+;'], function() {
        document.body.classList.toggle('grid-on');
    });

    Mousetrap.bind(["ctrl+shift+'", "command+shift+'"], function() {
        document.body.classList.toggle('breakpoint-on');
    });
}
