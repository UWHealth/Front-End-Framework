"use strict";

//= include "_jquerySelectors.js"
//= include "vendor/velocity.js"
//= include "vendor/velocity.ui.js"
//= include "vendor/slick.js"
//= include "vendor/_mousetrap.js"
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

//Add keyboard shortcut for handling baseline debug class
(function(){
    Mousetrap.bind('ctrl+g', function(){
        if (document.body.className.indexOf('baseline-on') < 0) {
            document.body.className+=' baseline-on';
        }else {
            document.body.className = document.body.className.replace('baseline-on', '');
        }
    })
}());

// Place any jQuery/helper plugins in here.

$(function() {

//Helper for hiding/showing baseline-grid
    $('#js_baseline_toggle').click(function(e){
        e.preventDefault();
        var toggles = $(this).attr("id");
        $('body').toggleClass('baseline-on');
        e.preventDefault();
    });
});
