(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["uwhealth"] = factory();
	else
		root["uwhealth"] = factory();
})(window, function() {
return (window["webpackJsonpuwhealth"] = window["webpackJsonpuwhealth"] || []).push([["plugins"],{

/***/ "../../_src/js/plugins.js":
/*!*********************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/_src/js/plugins.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Avoid `console` errors in browsers that lack a console.

(function () {
    var method;
    var noop = function noop() {};
    var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
    var length = methods.length;
    var console = window.console = window.console || {};

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
})();

/***/ })

},[["../../_src/js/plugins.js","runtime"]]]);
});
//# sourceMappingURL=plugins.js.map