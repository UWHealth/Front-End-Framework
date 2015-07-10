"use strict";

//@codekit-append "_tables.js"
//@codekit-append "_colors.js"
//@codekit-append "_slick.js"
//@codekit-append "vendor/velocity.js"
//@codekit-append "vendor/velocity.ui.js"
//@codekit-append "_tabs.js"
//@codekit-append "_toggle.js"
//= include "_jquerySelectors.js"
//= include "vendor/velocity.js"
//= include "vendor/velocity.ui.js"
//= include "vendor/slick.js"
//= include "vendor/stackblur.js"
//= include "vendor/imageblur.js"
//= include "_tables.js"
//= include "_colors.js"
//= include "_tabs.js"
//= include "_toggle.js"

// Avoid `console` errors in browsers that lack a console.


(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
