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
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".chunk.js";
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				function onScriptComplete(event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/js/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonpuwhealth"] = window["webpackJsonpuwhealth"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../../_src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../_src/components lazy recursive ^\\.\\/.*\\.demo\\.html$":
/*!************************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/_src/components lazy ^\.\/.*\.demo\.html$ namespace object ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./button/button.demo.html": [
		"../../_src/components/button/button.demo.html",
		0
	],
	"./feed/feed.demo.html": [
		"../../_src/components/feed/feed.demo.html",
		1
	],
	"./generic/generic.demo.html": [
		"../../_src/components/generic/generic.demo.html",
		2
	],
	"./hero/hero.demo.html": [
		"../../_src/components/hero/hero.demo.html",
		3
	],
	"./hero/hero2.demo.html": [
		"../../_src/components/hero/hero2.demo.html",
		4
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../_src/components lazy recursive ^\\.\\/.*\\.demo\\.html$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../_src/components/demo/demo.routes.html":
/*!***************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/_src/components/demo/demo.routes.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/shared.js */ "../../node_modules/svelte/shared.js");
/* harmony import */ var svelte_routing_Route_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte-routing/Route.html */ "../../node_modules/svelte-routing/Route.html");
/* harmony import */ var svelte_routing_NavLink_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svelte-routing/NavLink.html */ "../../node_modules/svelte-routing/NavLink.html");
/* harmony import */ var _demo_store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo.store.js */ "../../_src/components/demo/demo.store.js");
/* harmony import */ var _demo_store_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_demo_store_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var svelte_transitions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! svelte-transitions */ "../../node_modules/svelte-transitions/module.js");
/* harmony import */ var _tools_title_case_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tools/title-case.js */ "../../_src/components/tools/title-case.js");
/* harmony import */ var _tools_title_case_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tools_title_case_js__WEBPACK_IMPORTED_MODULE_5__);
/* _src\components\demo\demo.routes.html generated by Svelte v1.58.0 */







function data() {
    return {
        pageTitle: ''
    };
};

function Dynamic(routeUrl) {
	return __webpack_require__("../../_src/components lazy recursive ^\\.\\/.*\\.demo\\.html$")("./" + routeUrl + '/' + routeUrl + '.demo.html');
}

function oncreate() {
    console.log('Demo Router Creation:', this);
    this.refs.router.observe('pathname', (pathname) => {
        _demo_store_js__WEBPACK_IMPORTED_MODULE_3___default.a.set({'url': pathname, 'pageTitle': this.refs.router});
    });

    this.refs.router.observe('match', (match) => {
        _demo_store_js__WEBPACK_IMPORTED_MODULE_3___default.a.set({'pageTitle': _tools_title_case_js__WEBPACK_IMPORTED_MODULE_5___default()(match.params.demo)});
    });
};

function setup(DemoRouter) {};

function store_1() {
	return _demo_store_js__WEBPACK_IMPORTED_MODULE_3___default.a;
}

function create_main_fragment(component, state) {
	var title_value, link, text, nav, text_1, text_2, text_3, text_4, text_5, text_7, text_8, if_block_anchor, text_9, route_updating = {};

	document.title = title_value = state.$pageTitle || state.pageTitle;

	var navlink = new svelte_routing_NavLink_html__WEBPACK_IMPORTED_MODULE_2__["default"]({
		root: component.root,
		slots: { default: Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createFragment"])() },
		data: { to: "/components/button/" }
	});

	var navlink_1 = new svelte_routing_NavLink_html__WEBPACK_IMPORTED_MODULE_2__["default"]({
		root: component.root,
		slots: { default: Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createFragment"])() },
		data: { to: "/components/generic/" }
	});

	var navlink_2 = new svelte_routing_NavLink_html__WEBPACK_IMPORTED_MODULE_2__["default"]({
		root: component.root,
		slots: { default: Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createFragment"])() },
		data: { to: "/components/feed/" }
	});

	var if_block = (state.match && state.match.params.demo) && create_if_block(component, state);

	var route_initial_data = { path: "/components/:demo" };
	if ('match' in state) {
		route_initial_data.match = state.match;
		route_updating.match = true;
	}
	var route = new svelte_routing_Route_html__WEBPACK_IMPORTED_MODULE_1__["default"]({
		root: component.root,
		slots: { default: Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createFragment"])() },
		data: route_initial_data,
		_bind: function(changed, childState) {
			var state = component.get(), newState = {};
			if (!route_updating.match && changed.match) {
				newState.match = childState.match;
			}
			component._set(newState);
			route_updating = {};
		}
	});

	component.root._beforecreate.push(function() {
		route._bind({ match: 1 }, route.get());
	});

	component.refs.router = route;

	return {
		c: function create() {
			link = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("link");
			text = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("\r\n\r\n");
			nav = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("nav");
			text_1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("Buttons");
			navlink._fragment.c();
			text_2 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("\r\n    ");
			text_3 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("Generic");
			navlink_1._fragment.c();
			text_4 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("\r\n    ");
			text_5 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("Feed");
			navlink_2._fragment.c();
			text_7 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("\r\n\r\n");
			text_8 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("\r\n    ");
			if (if_block) if_block.c();
			if_block_anchor = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createComment"])();
			text_9 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("\r\n");
			route._fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			link = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("link");
			text = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(nodes, "\r\n\r\n");

			nav = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(nodes, "NAV", {}, false);
			var nav_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(nav);

			text_1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(nodes, "Buttons");
			navlink._fragment.l(nav_nodes);
			text_2 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(nav_nodes, "\r\n    ");
			text_3 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(nodes, "Generic");
			navlink_1._fragment.l(nav_nodes);
			text_4 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(nav_nodes, "\r\n    ");
			text_5 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(nodes, "Feed");
			navlink_2._fragment.l(nav_nodes);
			nav_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			text_7 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(nodes, "\r\n\r\n");
			text_8 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(nodes, "\r\n    ");
			if (if_block) if_block.l(nodes);
			if_block_anchor = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createComment"])();
			text_9 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(nodes, "\r\n");
			route._fragment.l(nodes);
			this.h();
		},

		h: function hydrate() {
			link.rel = "stylesheet";
			link.href = "/public/css/demo/demo.css";
		},

		m: function mount(target, anchor) {
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(link, document.head);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(text, target, anchor);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(nav, target, anchor);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(text_1, navlink._slotted.default);
			navlink._mount(nav, null);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(text_2, nav);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(text_3, navlink_1._slotted.default);
			navlink_1._mount(nav, null);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(text_4, nav);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(text_5, navlink_2._slotted.default);
			navlink_2._mount(nav, null);
			component.refs.navigation = nav;
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(text_7, target, anchor);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(text_8, route._slotted.default);
			if (if_block) if_block.m(route._slotted.default, null);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(if_block_anchor, route._slotted.default);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(text_9, route._slotted.default);
			route._mount(target, anchor);
		},

		p: function update(changed, state) {
			if ((changed.$pageTitle || changed.pageTitle) && title_value !== (title_value = state.$pageTitle || state.pageTitle)) {
				document.title = title_value;
			}

			if (state.match && state.match.params.demo) {
				if (if_block) {
					if_block.p(changed, state);
				} else {
					if_block = create_if_block(component, state);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.u();
				if_block.d();
				if_block = null;
			}

			var route_changes = {};
			if (!route_updating.match && changed.match) {
				route_changes.match = state.match;
				route_updating.match = true;
			}
			route._set(route_changes);
			route_updating = {};
		},

		u: function unmount() {
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(link);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(text);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(nav);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(text_7);
			if (if_block) if_block.u();
			route._unmount();
		},

		d: function destroy() {
			navlink.destroy(false);
			navlink_1.destroy(false);
			navlink_2.destroy(false);
			if (component.refs.navigation === nav) component.refs.navigation = null;
			if (if_block) if_block.d();
			route.destroy(false);
			if (component.refs.router === route) component.refs.router = null;
		}
	};
}

// (15:45)               loading...          {{then response}}
function create_pending_block(component, state) {
	var text;

	return {
		c: function create() {
			text = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("loading...");
		},

		l: function claim(nodes) {
			text = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(nodes, "loading...");
		},

		m: function mount(target, anchor) {
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(text, target, anchor);
		},

		p: svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["noop"],

		u: function unmount() {
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(text);
		},

		d: svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["noop"]
	};
}

// (17:8) {{then response}}
function create_then_block(component, state) {
	var response = state.response, undefined = state.undefined, undefined = state.undefined;
	var div, div_transition, introing, outroing;

	var switch_value = response.default;

	function switch_props(state) {
		return {
			root: component.root
		};
	}

	if (switch_value) {
		var switch_instance = new switch_value(switch_props(state));
	}

	return {
		c: function create() {
			div = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div");
			if (switch_instance) switch_instance._fragment.c();
		},

		l: function claim(nodes) {
			div = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(nodes, "DIV", {}, false);
			var div_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(div);

			if (switch_instance) switch_instance._fragment.l(div_nodes);
			div_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
		},

		m: function mount(target, anchor) {
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(div, target, anchor);
			if (switch_instance) switch_instance._mount(div, null);
		},

		p: function update(changed, state) {
			response = state.response;
			undefined = state.undefined;
			undefined = state.undefined;
			if (switch_value !== (switch_value = response.default)) {
				if (switch_instance) switch_instance.destroy();

				if (switch_value) {
					switch_instance = new switch_value(switch_props(state));
					switch_instance._fragment.c();
					switch_instance._mount(div, null);
				}
			}
		},

		i: function intro(target, anchor) {
			if (introing) return;
			introing = true;
			outroing = false;

			component.root._aftercreate.push(function() {
				if (!div_transition) div_transition = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["wrapTransition"])(component, div, svelte_transitions__WEBPACK_IMPORTED_MODULE_4__["fade"], {duration: 1000}, true, null);
				div_transition.run(true, function() {
					component.fire("intro.end", { node: div });
				});
			});

			this.m(target, anchor);
		},

		o: function outro(outrocallback) {
			if (outroing) return;
			outroing = true;
			introing = false;

			var outros = 1;

			div_transition.run(false, function() {
				component.fire("outro.end", { node: div });
				if (--outros === 0) outrocallback();
				div_transition = null;
			});
		},

		u: function unmount() {
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(div);
		},

		d: function destroy() {
			if (switch_instance) switch_instance.destroy(false);
		}
	};
}

// (21:8) {{catch error}}
function create_catch_block(component, state) {
	var error = state.error, undefined = state.undefined, undefined = state.undefined;
	var text_value = error, text;

	return {
		c: function create() {
			text = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])(text_value);
		},

		l: function claim(nodes) {
			text = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(nodes, text_value);
		},

		m: function mount(target, anchor) {
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(text, target, anchor);
		},

		p: function update(changed, state) {
			error = state.error;
			undefined = state.undefined;
			undefined = state.undefined;
			if ((changed.match) && text_value !== (text_value = error)) {
				text.data = text_value;
			}
		},

		u: function unmount() {
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(text);
		},

		d: svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["noop"]
	};
}

// (13:4) {{#if match && match.params.demo}}
function create_if_block(component, state) {
	var await_block_anchor, await_block_1, await_block_type, await_token, promise, resolved;

	function replace_await_block(token, type, state) {
		if (token !== await_token) return;

		var old_block = await_block_1;
		await_block_1 = type && (await_block_type = type)(component, state);

		if (old_block) {
			old_block.u();
			old_block.d();
			await_block_1.c();
			await_block_1.m(await_block_anchor.parentNode, await_block_anchor);

			component.root.set({});
		}
	}

	function handle_promise(promise, state) {
		var token = await_token = {};

		if (Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["isPromise"])(promise)) {
			promise.then(function(value) {
				var state = component.get();
				resolved = { response: value };
				replace_await_block(token, create_then_block, Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["assign"])({}, state, resolved));
			}, function (error) {
				var state = component.get();
				resolved = { error: error };
				replace_await_block(token, create_catch_block, Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["assign"])({}, state, resolved));
			});

			// if we previously had a then/catch block, destroy it
			if (await_block_type !== create_pending_block) {
				replace_await_block(token, create_pending_block, state);
				return true;
			}
		} else {
			resolved = { response: promise };
			if (await_block_type !== create_then_block) {
				replace_await_block(token, create_then_block, Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["assign"])({}, state, resolved));
				return true;
			}
		}
	}

	handle_promise(promise = Dynamic(state.match.params.demo), state);

	return {
		c: function create() {
			await_block_anchor = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createComment"])();

			await_block_1.c();
		},

		l: function claim(nodes) {
			await_block_anchor = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createComment"])();

			await_block_1.l(nodes);
		},

		m: function mount(target, anchor) {
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(await_block_anchor, target, anchor);

			await_block_1.m(target, anchor);
		},

		p: function update(changed, state) {
			if (('match' in changed) && promise !== (promise = Dynamic(state.match.params.demo)) && handle_promise(promise, state)) {
				// nothing
			} else {
				await_block_1.p(changed, Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["assign"])({}, state, resolved));
			}
		},

		u: function unmount() {
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(await_block_anchor);

			await_block_1.u();
		},

		d: function destroy() {
			await_token = null;
			await_block_1.d();
		}
	};
}

function Demo_routes(options) {
	this._debugName = '<Demo_routes>';
	if (!options || (!options.target && !options.root)) throw new Error("'target' is a required option");
	Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options);
	this.store = store_1();
	this.refs = {};
	this._state = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["assign"])(this.store._init(["pageTitle"]), data(), options.data);
	this.store._add(this, ["pageTitle"]);
	if (!('$pageTitle' in this._state)) console.warn("<Demo_routes> was created without expected data property '$pageTitle'");
	if (!('pageTitle' in this._state)) console.warn("<Demo_routes> was created without expected data property 'pageTitle'");
	if (!('match' in this._state)) console.warn("<Demo_routes> was created without expected data property 'match'");

	this._handlers.destroy = [svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["removeFromStore"]];

	var _oncreate = oncreate.bind(this);

	if (!options.root) {
		this._oncreate = [];
		this._beforecreate = [];
		this._aftercreate = [];
	}

	this._fragment = create_main_fragment(this, this._state);

	this.root._oncreate.push(_oncreate);

	if (options.target) {
		var nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(options.target);
		options.hydrate ? this._fragment.l(nodes) : this._fragment.c();
		nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
		this._mount(options.target, options.anchor);

		this._lock = true;
		Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["callAll"])(this._beforecreate);
		Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["callAll"])(this._oncreate);
		Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["callAll"])(this._aftercreate);
		this._lock = false;
	}
}

Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["assign"])(Demo_routes.prototype, svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["protoDev"]);

Demo_routes.prototype._checkReadOnly = function _checkReadOnly(newState) {
};

setup(Demo_routes);
/* harmony default export */ __webpack_exports__["default"] = (Demo_routes);

/***/ }),

/***/ "../../_src/components/demo/demo.store.js":
/*!************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/_src/components/demo/demo.store.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*Babel»*/

exports.__esModule = true;

var /*Babel»*/_store = __webpack_require__(/*! svelte/store.js */ "../../node_modules/svelte/store.js");

var store = new /*Babel»*/_store.Store({
    pageTitle: "Demo"
});

/*Babel»*/exports.default = store;

/***/ }),

/***/ "../../_src/components/tools/title-case.js":
/*!*************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/_src/components/tools/title-case.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*Babel»*/

exports.__esModule = true;
function titleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
};

/*Babel»*/exports.default = titleCase;

/***/ }),

/***/ "../../_src/js/dev/keyboard-shortcuts.js":
/*!***********************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/_src/js/dev/keyboard-shortcuts.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*Babel»*/

exports.__esModule = true;
exports.init = init;

var /*Babel»*/_mousetrap = __webpack_require__(/*! ../vendor/mousetrap.js */ "../../_src/js/vendor/mousetrap.js");

/*Babel»*/var _mousetrap2 = _interopRequireDefault(_mousetrap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function init() {
    // Adds ability to toggle the baseline grid and column grid on/off
    // Styles located in sass/overrides/_ov-debug.scss
    /*Babel»*/_mousetrap2.default.bind(["ctrl+'", "command+'"], function () {
        document.body.classList.toggle('baseline-on');
    });

    /*Babel»*/_mousetrap2.default.bind(["ctrl+;", "command+;"], function () {
        document.body.classList.toggle('grid-on');
    });

    /*Babel»*/_mousetrap2.default.bind(["ctrl+shift+'", "command+shift+'"], function () {
        document.body.classList.toggle('breakpoint-on');
    });
}

/***/ }),

/***/ "../../_src/js/main.js":
/*!*****************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/_src/js/main.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*Babel»*/

exports.__esModule = true;

var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ "../../node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

var /*Babel»*/_domReady = __webpack_require__(/*! @/js/modules/dom-ready */ "../../_src/js/modules/dom-ready.js");

/*Babel»*/var _domReady2 = _interopRequireDefault(_domReady);

var /*Babel»*/_svelteRouting = __webpack_require__(/*! svelte-routing */ "../../node_modules/svelte-routing/index.js");

/*Babel»*/function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = /*Babel»*/void 0;

/*Babel»*/(0, _domReady2.default)(function () {
    if (true) {
        /*Babel»*/_promise2.default.resolve().then(function () {
            return __webpack_require__(/*! ./dev/keyboard-shortcuts.js */ "../../_src/js/dev/keyboard-shortcuts.js");
        }).then(function (keyboardSC) /*Babel»*/{
            return keyboardSC.init();
        });
    }

    var appElement = document.getElementById('app');

    if (appElement) {
        app = /*Babel»*/_promise2.default.resolve().then(function () {
            return __webpack_require__(/*! @/components/demo/demo.routes.html */ "../../_src/components/demo/demo.routes.html");
        }).then(function (App) {
            /*Babel»*/(0, _svelteRouting.createHistory)('browser');
            /* eslint-disable no-new */
            return new App.default({
                target: appElement,
                hydrate: true
            });
        }).catch(function (err) /*Babel»*/{
            return console.log(err);
        });
    }

    // main = new Page({
    //     target: document.querySelector('body'),
    //     hydrate: true,
    //     store
    // });
    //
    // store.set({'Buttons': main.refs});
    // store.set({'Page': main});
});

/*Babel»*/exports.default = app;

/***/ }),

/***/ "../../_src/js/modules/dom-ready.js":
/*!******************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/_src/js/modules/dom-ready.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*Babel»*/

exports.__esModule = true;

exports.default = function (fn) {
    if (document.readyState !== 'loading') {
        fn();
    }
    // Modern browsers
    else if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', fn);
        }
        // IE <= 8
        else {
                document.attachEvent('onreadystatechange', function () {
                    if (document.readyState === 'complete') {
                        fn();
                    }
                });
            }
};

/***/ }),

/***/ "../../_src/js/vendor/mousetrap.js":
/*!*****************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/_src/js/vendor/mousetrap.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;/*Babel»*/

/**
 * Copyright 2016 Craig Campbell
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Mousetrap is a simple keyboard shortcut library for Javascript with
 * no external dependencies
 *
 * @version 1.6.0
 * @url craig.is/killing/mice
 */
(function (window, document, undefined) {

    // Check if mousetrap is used inside browser, if not, return
    if (!window) {
        return;
    }

    /**
     * mapping of special keycodes to their corresponding keys
     *
     * everything in this dictionary cannot use keypress events
     * so it has to be here to map to the correct keycodes for
     * keyup/keydown events
     *
     * @type {Object}
     */
    var _MAP = {
        8: 'backspace',
        9: 'tab',
        13: 'enter',
        16: 'shift',
        17: 'ctrl',
        18: 'alt',
        20: 'capslock',
        27: 'esc',
        32: 'space',
        33: 'pageup',
        34: 'pagedown',
        35: 'end',
        36: 'home',
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        45: 'ins',
        46: 'del',
        91: 'meta',
        93: 'meta',
        224: 'meta'
    };

    /**
     * mapping for special characters so they can support
     *
     * this dictionary is only used incase you want to bind a
     * keyup or keydown event to one of these keys
     *
     * @type {Object}
     */
    var _KEYCODE_MAP = {
        106: '*',
        107: '+',
        109: '-',
        110: '.',
        111: '/',
        186: ';',
        187: '=',
        188: ',',
        189: '-',
        190: '.',
        191: '/',
        192: '`',
        219: '[',
        220: '\\',
        221: ']',
        222: '\''
    };

    /**
     * this is a mapping of keys that require shift on a US keypad
     * back to the non shift equivelents
     *
     * this is so you can use keyup events with these keys
     *
     * note that this will only work reliably on US keyboards
     *
     * @type {Object}
     */
    var _SHIFT_MAP = {
        '~': '`',
        '!': '1',
        '@': '2',
        '#': '3',
        '$': '4',
        '%': '5',
        '^': '6',
        '&': '7',
        '*': '8',
        '(': '9',
        ')': '0',
        '_': '-',
        '+': '=',
        ':': ';',
        '\"': '\'',
        '<': ',',
        '>': '.',
        '?': '/',
        '|': '\\'
    };

    /**
     * this is a list of special strings you can use to map
     * to modifier keys when you specify your keyboard shortcuts
     *
     * @type {Object}
     */
    var _SPECIAL_ALIASES = {
        'option': 'alt',
        'command': 'meta',
        'return': 'enter',
        'escape': 'esc',
        'plus': '+',
        'mod': /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? 'meta' : 'ctrl'
    };

    /**
     * variable to store the flipped version of _MAP from above
     * needed to check if we should use keypress or not when no action
     * is specified
     *
     * @type {Object|undefined}
     */
    var _REVERSE_MAP;

    /**
     * loop through the f keys, f1 to f19 and add them to the map
     * programatically
     */
    for (var i = 1; i < 20; ++i) {
        _MAP[111 + i] = 'f' + i;
    }

    /**
     * loop through to map numbers on the numeric keypad
     */
    for (i = 0; i <= 9; ++i) {

        // This needs to use a string cause otherwise since 0 is falsey
        // mousetrap will never fire for numpad 0 pressed as part of a keydown
        // event.
        //
        // @see https://github.com/ccampbell/mousetrap/pull/258
        _MAP[i + 96] = i.toString();
    }

    /**
     * cross browser add event method
     *
     * @param {Element|HTMLDocument} object
     * @param {string} type
     * @param {Function} callback
     * @returns void
     */
    function _addEvent(object, type, callback) {
        if (object.addEventListener) {
            object.addEventListener(type, callback, false);
            return;
        }

        object.attachEvent('on' + type, callback);
    }

    /**
     * takes the event and returns the key character
     *
     * @param {Event} e
     * @return {string}
     */
    function _characterFromEvent(e) {

        // for keypress events we should return the character as is
        if (e.type == 'keypress') {
            var character = String.fromCharCode(e.which);

            // if the shift key is not pressed then it is safe to assume
            // that we want the character to be lowercase.  this means if
            // you accidentally have caps lock on then your key bindings
            // will continue to work
            //
            // the only side effect that might not be desired is if you
            // bind something like 'A' cause you want to trigger an
            // event when capital A is pressed caps lock will no longer
            // trigger the event.  shift+a will though.
            if (!e.shiftKey) {
                character = character.toLowerCase();
            }

            return character;
        }

        // for non keypress events the special maps are needed
        if (_MAP[e.which]) {
            return _MAP[e.which];
        }

        if (_KEYCODE_MAP[e.which]) {
            return _KEYCODE_MAP[e.which];
        }

        // if it is not in the special map

        // with keydown and keyup events the character seems to always
        // come in as an uppercase character whether you are pressing shift
        // or not.  we should make sure it is always lowercase for comparisons
        return String.fromCharCode(e.which).toLowerCase();
    }

    /**
     * checks if two arrays are equal
     *
     * @param {Array} modifiers1
     * @param {Array} modifiers2
     * @returns {boolean}
     */
    function _modifiersMatch(modifiers1, modifiers2) {
        return modifiers1.sort().join(',') === modifiers2.sort().join(',');
    }

    /**
     * takes a key event and figures out what the modifiers are
     *
     * @param {Event} e
     * @returns {Array}
     */
    function _eventModifiers(e) {
        var modifiers = [];

        if (e.shiftKey) {
            modifiers.push('shift');
        }

        if (e.altKey) {
            modifiers.push('alt');
        }

        if (e.ctrlKey) {
            modifiers.push('ctrl');
        }

        if (e.metaKey) {
            modifiers.push('meta');
        }

        return modifiers;
    }

    /**
     * prevents default for this event
     *
     * @param {Event} e
     * @returns void
     */
    function _preventDefault(e) {
        if (e.preventDefault) {
            e.preventDefault();
            return;
        }

        e.returnValue = false;
    }

    /**
     * stops propogation for this event
     *
     * @param {Event} e
     * @returns void
     */
    function _stopPropagation(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
            return;
        }

        e.cancelBubble = true;
    }

    /**
     * determines if the keycode specified is a modifier key or not
     *
     * @param {string} key
     * @returns {boolean}
     */
    function _isModifier(key) {
        return key == 'shift' || key == 'ctrl' || key == 'alt' || key == 'meta';
    }

    /**
     * reverses the map lookup so that we can look for specific keys
     * to see what can and can't use keypress
     *
     * @return {Object}
     */
    function _getReverseMap() {
        if (!_REVERSE_MAP) {
            _REVERSE_MAP = {};
            for (var key in _MAP) {

                // pull out the numeric keypad from here cause keypress should
                // be able to detect the keys from the character
                if (key > 95 && key < 112) {
                    continue;
                }

                if (_MAP.hasOwnProperty(key)) {
                    _REVERSE_MAP[_MAP[key]] = key;
                }
            }
        }
        return _REVERSE_MAP;
    }

    /**
     * picks the best action based on the key combination
     *
     * @param {string} key - character for key
     * @param {Array} modifiers
     * @param {string=} action passed in
     */
    function _pickBestAction(key, modifiers, action) {

        // if no action was picked in we should try to pick the one
        // that we think would work best for this key
        if (!action) {
            action = _getReverseMap()[key] ? 'keydown' : 'keypress';
        }

        // modifier keys don't work as expected with keypress,
        // switch to keydown
        if (action == 'keypress' && modifiers.length) {
            action = 'keydown';
        }

        return action;
    }

    /**
     * Converts from a string key combination to an array
     *
     * @param  {string} combination like "command+shift+l"
     * @return {Array}
     */
    function _keysFromString(combination) {
        if (combination === '+') {
            return ['+'];
        }

        combination = combination.replace(/\+{2}/g, '+plus');
        return combination.split('+');
    }

    /**
     * Gets info for a specific key combination
     *
     * @param  {string} combination key combination ("command+s" or "a" or "*")
     * @param  {string=} action
     * @returns {Object}
     */
    function _getKeyInfo(combination, action) {
        var keys;
        var key;
        var i;
        var modifiers = [];

        // take the keys from this pattern and figure out what the actual
        // pattern is all about
        keys = _keysFromString(combination);

        for (i = 0; i < keys.length; ++i) {
            key = keys[i];

            // normalize key names
            if (_SPECIAL_ALIASES[key]) {
                key = _SPECIAL_ALIASES[key];
            }

            // if this is not a keypress event then we should
            // be smart about using shift keys
            // this will only work for US keyboards however
            if (action && action != 'keypress' && _SHIFT_MAP[key]) {
                key = _SHIFT_MAP[key];
                modifiers.push('shift');
            }

            // if this key is a modifier then add it to the list of modifiers
            if (_isModifier(key)) {
                modifiers.push(key);
            }
        }

        // depending on what the key combination is
        // we will try to pick the best event for it
        action = _pickBestAction(key, modifiers, action);

        return {
            key: key,
            modifiers: modifiers,
            action: action
        };
    }

    function _belongsTo(element, ancestor) {
        if (element === null || element === document) {
            return false;
        }

        if (element === ancestor) {
            return true;
        }

        return _belongsTo(element.parentNode, ancestor);
    }

    function Mousetrap(targetElement) {
        var self = this;

        targetElement = targetElement || document;

        if (!(self instanceof Mousetrap)) {
            return new Mousetrap(targetElement);
        }

        /**
         * element to attach key events to
         *
         * @type {Element}
         */
        self.target = targetElement;

        /**
         * a list of all the callbacks setup via Mousetrap.bind()
         *
         * @type {Object}
         */
        self._callbacks = {};

        /**
         * direct map of string combinations to callbacks used for trigger()
         *
         * @type {Object}
         */
        self._directMap = {};

        /**
         * keeps track of what level each sequence is at since multiple
         * sequences can start out with the same sequence
         *
         * @type {Object}
         */
        var _sequenceLevels = {};

        /**
         * variable to store the setTimeout call
         *
         * @type {null|number}
         */
        var _resetTimer;

        /**
         * temporary state where we will ignore the next keyup
         *
         * @type {boolean|string}
         */
        var _ignoreNextKeyup = false;

        /**
         * temporary state where we will ignore the next keypress
         *
         * @type {boolean}
         */
        var _ignoreNextKeypress = false;

        /**
         * are we currently inside of a sequence?
         * type of action ("keyup" or "keydown" or "keypress") or false
         *
         * @type {boolean|string}
         */
        var _nextExpectedAction = false;

        /**
         * resets all sequence counters except for the ones passed in
         *
         * @param {Object} doNotReset
         * @returns void
         */
        function _resetSequences(doNotReset) {
            doNotReset = doNotReset || {};

            var activeSequences = false,
                key;

            for (key in _sequenceLevels) {
                if (doNotReset[key]) {
                    activeSequences = true;
                    continue;
                }
                _sequenceLevels[key] = 0;
            }

            if (!activeSequences) {
                _nextExpectedAction = false;
            }
        }

        /**
         * finds all callbacks that match based on the keycode, modifiers,
         * and action
         *
         * @param {string} character
         * @param {Array} modifiers
         * @param {Event|Object} e
         * @param {string=} sequenceName - name of the sequence we are looking for
         * @param {string=} combination
         * @param {number=} level
         * @returns {Array}
         */
        function _getMatches(character, modifiers, e, sequenceName, combination, level) {
            var i;
            var callback;
            var matches = [];
            var action = e.type;

            // if there are no events related to this keycode
            if (!self._callbacks[character]) {
                return [];
            }

            // if a modifier key is coming up on its own we should allow it
            if (action == 'keyup' && _isModifier(character)) {
                modifiers = [character];
            }

            // loop through all callbacks for the key that was pressed
            // and see if any of them match
            for (i = 0; i < self._callbacks[character].length; ++i) {
                callback = self._callbacks[character][i];

                // if a sequence name is not specified, but this is a sequence at
                // the wrong level then move onto the next match
                if (!sequenceName && callback.seq && _sequenceLevels[callback.seq] != callback.level) {
                    continue;
                }

                // if the action we are looking for doesn't match the action we got
                // then we should keep going
                if (action != callback.action) {
                    continue;
                }

                // if this is a keypress event and the meta key and control key
                // are not pressed that means that we need to only look at the
                // character, otherwise check the modifiers as well
                //
                // chrome will not fire a keypress if meta or control is down
                // safari will fire a keypress if meta or meta+shift is down
                // firefox will fire a keypress if meta or control is down
                if (action == 'keypress' && !e.metaKey && !e.ctrlKey || _modifiersMatch(modifiers, callback.modifiers)) {

                    // when you bind a combination or sequence a second time it
                    // should overwrite the first one.  if a sequenceName or
                    // combination is specified in this call it does just that
                    //
                    // @todo make deleting its own method?
                    var deleteCombo = !sequenceName && callback.combo == combination;
                    var deleteSequence = sequenceName && callback.seq == sequenceName && callback.level == level;
                    if (deleteCombo || deleteSequence) {
                        self._callbacks[character].splice(i, 1);
                    }

                    matches.push(callback);
                }
            }

            return matches;
        }

        /**
         * actually calls the callback function
         *
         * if your callback function returns false this will use the jquery
         * convention - prevent default and stop propogation on the event
         *
         * @param {Function} callback
         * @param {Event} e
         * @returns void
         */
        function _fireCallback(callback, e, combo, sequence) {

            // if this event should not happen stop here
            if (self.stopCallback(e, e.target || e.srcElement, combo, sequence)) {
                return;
            }

            if (callback(e, combo) === false) {
                _preventDefault(e);
                _stopPropagation(e);
            }
        }

        /**
         * handles a character key event
         *
         * @param {string} character
         * @param {Array} modifiers
         * @param {Event} e
         * @returns void
         */
        self._handleKey = function (character, modifiers, e) {
            var callbacks = _getMatches(character, modifiers, e);
            var i;
            var doNotReset = {};
            var maxLevel = 0;
            var processedSequenceCallback = false;

            // Calculate the maxLevel for sequences so we can only execute the longest callback sequence
            for (i = 0; i < callbacks.length; ++i) {
                if (callbacks[i].seq) {
                    maxLevel = Math.max(maxLevel, callbacks[i].level);
                }
            }

            // loop through matching callbacks for this key event
            for (i = 0; i < callbacks.length; ++i) {

                // fire for all sequence callbacks
                // this is because if for example you have multiple sequences
                // bound such as "g i" and "g t" they both need to fire the
                // callback for matching g cause otherwise you can only ever
                // match the first one
                if (callbacks[i].seq) {

                    // only fire callbacks for the maxLevel to prevent
                    // subsequences from also firing
                    //
                    // for example 'a option b' should not cause 'option b' to fire
                    // even though 'option b' is part of the other sequence
                    //
                    // any sequences that do not match here will be discarded
                    // below by the _resetSequences call
                    if (callbacks[i].level != maxLevel) {
                        continue;
                    }

                    processedSequenceCallback = true;

                    // keep a list of which sequences were matches for later
                    doNotReset[callbacks[i].seq] = 1;
                    _fireCallback(callbacks[i].callback, e, callbacks[i].combo, callbacks[i].seq);
                    continue;
                }

                // if there were no sequence matches but we are still here
                // that means this is a regular match so we should fire that
                if (!processedSequenceCallback) {
                    _fireCallback(callbacks[i].callback, e, callbacks[i].combo);
                }
            }

            // if the key you pressed matches the type of sequence without
            // being a modifier (ie "keyup" or "keypress") then we should
            // reset all sequences that were not matched by this event
            //
            // this is so, for example, if you have the sequence "h a t" and you
            // type "h e a r t" it does not match.  in this case the "e" will
            // cause the sequence to reset
            //
            // modifier keys are ignored because you can have a sequence
            // that contains modifiers such as "enter ctrl+space" and in most
            // cases the modifier key will be pressed before the next key
            //
            // also if you have a sequence such as "ctrl+b a" then pressing the
            // "b" key will trigger a "keypress" and a "keydown"
            //
            // the "keydown" is expected when there is a modifier, but the
            // "keypress" ends up matching the _nextExpectedAction since it occurs
            // after and that causes the sequence to reset
            //
            // we ignore keypresses in a sequence that directly follow a keydown
            // for the same character
            var ignoreThisKeypress = e.type == 'keypress' && _ignoreNextKeypress;
            if (e.type == _nextExpectedAction && !_isModifier(character) && !ignoreThisKeypress) {
                _resetSequences(doNotReset);
            }

            _ignoreNextKeypress = processedSequenceCallback && e.type == 'keydown';
        };

        /**
         * handles a keydown event
         *
         * @param {Event} e
         * @returns void
         */
        function _handleKeyEvent(e) {

            // normalize e.which for key events
            // @see http://stackoverflow.com/questions/4285627/javascript-keycode-vs-charcode-utter-confusion
            if (typeof e.which !== 'number') {
                e.which = e.keyCode;
            }

            var character = _characterFromEvent(e);

            // no character found then stop
            if (!character) {
                return;
            }

            // need to use === for the character check because the character can be 0
            if (e.type == 'keyup' && _ignoreNextKeyup === character) {
                _ignoreNextKeyup = false;
                return;
            }

            self.handleKey(character, _eventModifiers(e), e);
        }

        /**
         * called to set a 1 second timeout on the specified sequence
         *
         * this is so after each key press in the sequence you have 1 second
         * to press the next key before you have to start over
         *
         * @returns void
         */
        function _resetSequenceTimer() {
            clearTimeout(_resetTimer);
            _resetTimer = setTimeout(_resetSequences, 1000);
        }

        /**
         * binds a key sequence to an event
         *
         * @param {string} combo - combo specified in bind call
         * @param {Array} keys
         * @param {Function} callback
         * @param {string=} action
         * @returns void
         */
        function _bindSequence(combo, keys, callback, action) {

            // start off by adding a sequence level record for this combination
            // and setting the level to 0
            _sequenceLevels[combo] = 0;

            /**
             * callback to increase the sequence level for this sequence and reset
             * all other sequences that were active
             *
             * @param {string} nextAction
             * @returns {Function}
             */
            function _increaseSequence(nextAction) {
                return function () {
                    _nextExpectedAction = nextAction;
                    ++_sequenceLevels[combo];
                    _resetSequenceTimer();
                };
            }

            /**
             * wraps the specified callback inside of another function in order
             * to reset all sequence counters as soon as this sequence is done
             *
             * @param {Event} e
             * @returns void
             */
            function _callbackAndReset(e) {
                _fireCallback(callback, e, combo);

                // we should ignore the next key up if the action is key down
                // or keypress.  this is so if you finish a sequence and
                // release the key the final key will not trigger a keyup
                if (action !== 'keyup') {
                    _ignoreNextKeyup = _characterFromEvent(e);
                }

                // weird race condition if a sequence ends with the key
                // another sequence begins with
                setTimeout(_resetSequences, 10);
            }

            // loop through keys one at a time and bind the appropriate callback
            // function.  for any key leading up to the final one it should
            // increase the sequence. after the final, it should reset all sequences
            //
            // if an action is specified in the original bind call then that will
            // be used throughout.  otherwise we will pass the action that the
            // next key in the sequence should match.  this allows a sequence
            // to mix and match keypress and keydown events depending on which
            // ones are better suited to the key provided
            for (var i = 0; i < keys.length; ++i) {
                var isFinal = i + 1 === keys.length;
                var wrappedCallback = isFinal ? _callbackAndReset : _increaseSequence(action || _getKeyInfo(keys[i + 1]).action);
                _bindSingle(keys[i], wrappedCallback, action, combo, i);
            }
        }

        /**
         * binds a single keyboard combination
         *
         * @param {string} combination
         * @param {Function} callback
         * @param {string=} action
         * @param {string=} sequenceName - name of sequence if part of sequence
         * @param {number=} level - what part of the sequence the command is
         * @returns void
         */
        function _bindSingle(combination, callback, action, sequenceName, level) {

            // store a direct mapped reference for use with Mousetrap.trigger
            self._directMap[combination + ':' + action] = callback;

            // make sure multiple spaces in a row become a single space
            combination = combination.replace(/\s+/g, ' ');

            var sequence = combination.split(' ');
            var info;

            // if this pattern is a sequence of keys then run through this method
            // to reprocess each pattern one key at a time
            if (sequence.length > 1) {
                _bindSequence(combination, sequence, callback, action);
                return;
            }

            info = _getKeyInfo(combination, action);

            // make sure to initialize array if this is the first time
            // a callback is added for this key
            self._callbacks[info.key] = self._callbacks[info.key] || [];

            // remove an existing match if there is one
            _getMatches(info.key, info.modifiers, { type: info.action }, sequenceName, combination, level);

            // add this call back to the array
            // if it is a sequence put it at the beginning
            // if not put it at the end
            //
            // this is important because the way these are processed expects
            // the sequence ones to come first
            self._callbacks[info.key][sequenceName ? 'unshift' : 'push']({
                callback: callback,
                modifiers: info.modifiers,
                action: info.action,
                seq: sequenceName,
                level: level,
                combo: combination
            });
        }

        /**
         * binds multiple combinations to the same callback
         *
         * @param {Array} combinations
         * @param {Function} callback
         * @param {string|undefined} action
         * @returns void
         */
        self._bindMultiple = function (combinations, callback, action) {
            for (var i = 0; i < combinations.length; ++i) {
                _bindSingle(combinations[i], callback, action);
            }
        };

        // start!
        _addEvent(targetElement, 'keypress', _handleKeyEvent);
        _addEvent(targetElement, 'keydown', _handleKeyEvent);
        _addEvent(targetElement, 'keyup', _handleKeyEvent);
    }

    /**
     * binds an event to mousetrap
     *
     * can be a single key, a combination of keys separated with +,
     * an array of keys, or a sequence of keys separated by spaces
     *
     * be sure to list the modifier keys first to make sure that the
     * correct key ends up getting bound (the last key in the pattern)
     *
     * @param {string|Array} keys
     * @param {Function} callback
     * @param {string=} action - 'keypress', 'keydown', or 'keyup'
     * @returns void
     */
    Mousetrap.prototype.bind = function (keys, callback, action) {
        var self = this;
        keys = keys instanceof Array ? keys : [keys];
        self._bindMultiple.call(self, keys, callback, action);
        return self;
    };

    /**
     * unbinds an event to mousetrap
     *
     * the unbinding sets the callback function of the specified key combo
     * to an empty function and deletes the corresponding key in the
     * _directMap dict.
     *
     * TODO: actually remove this from the _callbacks dictionary instead
     * of binding an empty function
     *
     * the keycombo+action has to be exactly the same as
     * it was defined in the bind method
     *
     * @param {string|Array} keys
     * @param {string} action
     * @returns void
     */
    Mousetrap.prototype.unbind = function (keys, action) {
        var self = this;
        return self.bind.call(self, keys, function () {}, action);
    };

    /**
     * triggers an event that has already been bound
     *
     * @param {string} keys
     * @param {string=} action
     * @returns void
     */
    Mousetrap.prototype.trigger = function (keys, action) {
        var self = this;
        if (self._directMap[keys + ':' + action]) {
            self._directMap[keys + ':' + action]({}, keys);
        }
        return self;
    };

    /**
     * resets the library back to its initial state.  this is useful
     * if you want to clear out the current keyboard shortcuts and bind
     * new ones - for example if you switch to another page
     *
     * @returns void
     */
    Mousetrap.prototype.reset = function () {
        var self = this;
        self._callbacks = {};
        self._directMap = {};
        return self;
    };

    /**
     * should we stop this event before firing off callbacks
     *
     * @param {Event} e
     * @param {Element} element
     * @return {boolean}
     */
    Mousetrap.prototype.stopCallback = function (e, element) {
        var self = this;

        // if the element has the class "mousetrap" then no need to stop
        if ((' ' + element.className + ' ').indexOf(' mousetrap ') > -1) {
            return false;
        }

        if (_belongsTo(element, self.target)) {
            return false;
        }

        // stop for input, select, and textarea
        return element.tagName == 'INPUT' || element.tagName == 'SELECT' || element.tagName == 'TEXTAREA' || element.isContentEditable;
    };

    /**
     * exposes _handleKey publicly so it can be overwritten by extensions
     */
    Mousetrap.prototype.handleKey = function () {
        var self = this;
        return self._handleKey.apply(self, arguments);
    };

    /**
     * allow custom key mappings
     */
    Mousetrap.addKeycodes = function (object) {
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                _MAP[key] = object[key];
            }
        }
        _REVERSE_MAP = null;
    };

    /**
     * Init the global mousetrap functions
     *
     * This method is needed to allow the global mousetrap functions to work
     * now that mousetrap is a constructor function.
     */
    Mousetrap.init = function () {
        var documentMousetrap = Mousetrap(document);
        for (var method in documentMousetrap) {
            if (method.charAt(0) !== '_') {
                Mousetrap[method] = function (method) {
                    return function () {
                        return documentMousetrap[method].apply(documentMousetrap, arguments);
                    };
                }(method);
            }
        }
    };

    Mousetrap.init();

    // expose mousetrap to the global object
    window.Mousetrap = Mousetrap;

    // expose as a common js module
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Mousetrap;
    }

    // expose mousetrap as an AMD module
    if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
            return Mousetrap;
        }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(typeof window !== 'undefined' ? window : null, typeof window !== 'undefined' ? document : null);

/***/ }),

/***/ "../../node_modules/babel-runtime/core-js/promise.js":
/*!***********************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/babel-runtime/core-js/promise.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/promise */ "../../node_modules/core-js/library/fn/promise.js"), __esModule: true };

/***/ }),

/***/ "../../node_modules/core-js/library/fn/promise.js":
/*!********************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/fn/promise.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "../../node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "../../node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "../../node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.promise */ "../../node_modules/core-js/library/modules/es6.promise.js");
__webpack_require__(/*! ../modules/es7.promise.finally */ "../../node_modules/core-js/library/modules/es7.promise.finally.js");
__webpack_require__(/*! ../modules/es7.promise.try */ "../../node_modules/core-js/library/modules/es7.promise.try.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "../../node_modules/core-js/library/modules/_core.js").Promise;


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_a-function.js":
/*!*****************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_a-function.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*************************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_an-instance.js":
/*!******************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_an-instance.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_an-object.js":
/*!****************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_an-object.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_array-includes.js":
/*!*********************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_array-includes.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../../node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../../node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "../../node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_classof.js":
/*!**************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_classof.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "../../node_modules/core-js/library/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_cof.js":
/*!**********************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_cof.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_core.js":
/*!***********************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_core.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_ctx.js":
/*!**********************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_ctx.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "../../node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_defined.js":
/*!**************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_defined.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_descriptors.js":
/*!******************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_descriptors.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "../../node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_dom-create.js":
/*!*****************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_dom-create.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!********************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_export.js":
/*!*************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_export.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "../../node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "../../node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "../../node_modules/core-js/library/modules/_hide.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_fails.js":
/*!************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_fails.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_for-of.js":
/*!*************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_for-of.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "../../node_modules/core-js/library/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "../../node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "../../node_modules/core-js/library/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/library/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../../node_modules/core-js/library/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "../../node_modules/core-js/library/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_global.js":
/*!*************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_global.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_has.js":
/*!**********************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_has.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_hide.js":
/*!***********************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_hide.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "../../node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "../../node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "../../node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_html.js":
/*!***********************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_html.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*********************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "../../node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "../../node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "../../node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_invoke.js":
/*!*************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_invoke.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_iobject.js":
/*!**************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_iobject.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "../../node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_is-array-iter.js":
/*!********************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_is-array-iter.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "../../node_modules/core-js/library/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/library/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_is-object.js":
/*!****************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_is-object.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_iter-call.js":
/*!****************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_iter-call.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/library/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_iter-create.js":
/*!******************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_iter-create.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "../../node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "../../node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "../../node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "../../node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_iter-define.js":
/*!******************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_iter-define.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "../../node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "../../node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "../../node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "../../node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "../../node_modules/core-js/library/modules/_has.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "../../node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "../../node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "../../node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "../../node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_iter-detect.js":
/*!******************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_iter-detect.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/library/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_iter-step.js":
/*!****************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_iter-step.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_iterators.js":
/*!****************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_iterators.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_library.js":
/*!**************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_library.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_microtask.js":
/*!****************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_microtask.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/library/modules/_global.js");
var macrotask = __webpack_require__(/*! ./_task */ "../../node_modules/core-js/library/modules/_task.js").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "../../node_modules/core-js/library/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_new-promise-capability.js":
/*!*****************************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_new-promise-capability.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(/*! ./_a-function */ "../../node_modules/core-js/library/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_object-create.js":
/*!********************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_object-create.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "../../node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "../../node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "../../node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "../../node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "../../node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_object-dp.js":
/*!****************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_object-dp.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "../../node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../../node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "../../node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_object-dps.js":
/*!*****************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_object-dps.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "../../node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "../../node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "../../node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_object-gpo.js":
/*!*****************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_object-gpo.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "../../node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../../node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "../../node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***************************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "../../node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../../node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "../../node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "../../node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_object-keys.js":
/*!******************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_object-keys.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "../../node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "../../node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_perform.js":
/*!**************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_perform.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_promise-resolve.js":
/*!**********************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_promise-resolve.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/library/modules/_is-object.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "../../node_modules/core-js/library/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_property-desc.js":
/*!********************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_property-desc.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_redefine-all.js":
/*!*******************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_redefine-all.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(/*! ./_hide */ "../../node_modules/core-js/library/modules/_hide.js");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_redefine.js":
/*!***************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_redefine.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "../../node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_set-species.js":
/*!******************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_set-species.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "../../node_modules/core-js/library/modules/_core.js");
var dP = __webpack_require__(/*! ./_object-dp */ "../../node_modules/core-js/library/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "../../node_modules/core-js/library/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!************************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "../../node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "../../node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_shared-key.js":
/*!*****************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_shared-key.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "../../node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "../../node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_shared.js":
/*!*************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_shared.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_species-constructor.js":
/*!**************************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_species-constructor.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/library/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "../../node_modules/core-js/library/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/library/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_string-at.js":
/*!****************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_string-at.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "../../node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "../../node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_task.js":
/*!***********************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_task.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "../../node_modules/core-js/library/modules/_ctx.js");
var invoke = __webpack_require__(/*! ./_invoke */ "../../node_modules/core-js/library/modules/_invoke.js");
var html = __webpack_require__(/*! ./_html */ "../../node_modules/core-js/library/modules/_html.js");
var cel = __webpack_require__(/*! ./_dom-create */ "../../node_modules/core-js/library/modules/_dom-create.js");
var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/library/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(/*! ./_cof */ "../../node_modules/core-js/library/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_to-absolute-index.js":
/*!************************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "../../node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_to-integer.js":
/*!*****************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_to-integer.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_to-iobject.js":
/*!*****************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_to-iobject.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "../../node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "../../node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_to-length.js":
/*!****************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_to-length.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "../../node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_to-object.js":
/*!****************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_to-object.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "../../node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_to-primitive.js":
/*!*******************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_to-primitive.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_uid.js":
/*!**********************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_uid.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/_wks.js":
/*!**********************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/_wks.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "../../node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "../../node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "../../node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!******************************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "../../node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "../../node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "../../node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "../../node_modules/core-js/library/modules/es6.array.iterator.js":
/*!************************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "../../node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "../../node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "../../node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../../node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "../../node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "../../node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**************************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/core-js/library/modules/es6.promise.js":
/*!*****************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/es6.promise.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "../../node_modules/core-js/library/modules/_library.js");
var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/library/modules/_global.js");
var ctx = __webpack_require__(/*! ./_ctx */ "../../node_modules/core-js/library/modules/_ctx.js");
var classof = __webpack_require__(/*! ./_classof */ "../../node_modules/core-js/library/modules/_classof.js");
var $export = __webpack_require__(/*! ./_export */ "../../node_modules/core-js/library/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/library/modules/_is-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "../../node_modules/core-js/library/modules/_a-function.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "../../node_modules/core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "../../node_modules/core-js/library/modules/_for-of.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "../../node_modules/core-js/library/modules/_species-constructor.js");
var task = __webpack_require__(/*! ./_task */ "../../node_modules/core-js/library/modules/_task.js").set;
var microtask = __webpack_require__(/*! ./_microtask */ "../../node_modules/core-js/library/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "../../node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "../../node_modules/core-js/library/modules/_perform.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "../../node_modules/core-js/library/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "../../node_modules/core-js/library/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "../../node_modules/core-js/library/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(/*! ./_set-to-string-tag */ "../../node_modules/core-js/library/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ "../../node_modules/core-js/library/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ "../../node_modules/core-js/library/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "../../node_modules/core-js/library/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "../../node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*************************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "../../node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "../../node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "../../node_modules/core-js/library/modules/es7.promise.finally.js":
/*!*************************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/es7.promise.finally.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(/*! ./_export */ "../../node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "../../node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/library/modules/_global.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "../../node_modules/core-js/library/modules/_species-constructor.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "../../node_modules/core-js/library/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "../../node_modules/core-js/library/modules/es7.promise.try.js":
/*!*********************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/es7.promise.try.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(/*! ./_export */ "../../node_modules/core-js/library/modules/_export.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "../../node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "../../node_modules/core-js/library/modules/_perform.js");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "../../node_modules/core-js/library/modules/web.dom.iterable.js":
/*!**********************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "../../node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "../../node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "../../node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "../../node_modules/eases-jsnext/dist/eases.es.js":
/*!********************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/eases-jsnext/dist/eases.es.js ***!
  \********************************************************************************************/
/*! exports provided: backInOut, backIn, backOut, bounceInOut, bounceIn, bounceOut, circInOut, circIn, circOut, cubicInOut, cubicIn, cubicOut, elasticInOut, elasticIn, elasticOut, expoInOut, expoIn, expoOut, linear, quadInOut, quadIn, quadOut, quartInOut, quartIn, quartOut, quintInOut, quintIn, quintOut, sineInOut, sineIn, sineOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backInOut", function() { return backInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backIn", function() { return backIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backOut", function() { return backOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceInOut", function() { return bounceInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceIn", function() { return bounceIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceOut", function() { return bounceOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circInOut", function() { return circInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circIn", function() { return circIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circOut", function() { return circOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicInOut", function() { return cubicInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicIn", function() { return cubicIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicOut", function() { return cubicOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elasticInOut", function() { return elasticInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elasticIn", function() { return elasticIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elasticOut", function() { return elasticOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expoInOut", function() { return expoInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expoIn", function() { return expoIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expoOut", function() { return expoOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linear", function() { return linear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quadInOut", function() { return quadInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quadIn", function() { return quadIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quadOut", function() { return quadOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quartInOut", function() { return quarticInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quartIn", function() { return quarticIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quartOut", function() { return quarticOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quintInOut", function() { return qinticInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quintIn", function() { return qinticIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quintOut", function() { return qinticOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sineInOut", function() { return sineInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sineIn", function() { return sineIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sineOut", function() { return sineOut; });
function backInOut(t) {
  var s = 1.70158 * 1.525;
  if ((t *= 2) < 1)
    return 0.5 * (t * t * ((s + 1) * t - s))
  return 0.5 * ((t -= 2) * t * ((s + 1) * t + s) + 2)
}

function backIn(t) {
  var s = 1.70158;
  return t * t * ((s + 1) * t - s)
}

function backOut(t) {
  var s = 1.70158;
  return --t * t * ((s + 1) * t + s) + 1
}

function bounceOut(t) {
  var a = 4.0 / 11.0;
  var b = 8.0 / 11.0;
  var c = 9.0 / 10.0;

  var ca = 4356.0 / 361.0;
  var cb = 35442.0 / 1805.0;
  var cc = 16061.0 / 1805.0;

  var t2 = t * t;

  return t < a
    ? 7.5625 * t2
    : t < b
      ? 9.075 * t2 - 9.9 * t + 3.4
      : t < c
        ? ca * t2 - cb * t + cc
        : 10.8 * t * t - 20.52 * t + 10.72
}

function bounceInOut(t) {
  return t < 0.5
    ? 0.5 * (1.0 - bounceOut(1.0 - t * 2.0))
    : 0.5 * bounceOut(t * 2.0 - 1.0) + 0.5
}

function bounceIn(t) {
  return 1.0 - bounceOut(1.0 - t)
}

function circInOut(t) {
  if ((t *= 2) < 1) return -0.5 * (Math.sqrt(1 - t * t) - 1)
  return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
}

function circIn(t) {
  return 1.0 - Math.sqrt(1.0 - t * t)
}

function circOut(t) {
  return Math.sqrt(1 - ( --t * t ))
}

function cubicInOut(t) {
  return t < 0.5
    ? 4.0 * t * t * t
    : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0
}

function cubicIn(t) {
  return t * t * t
}

function cubicOut(t) {
  var f = t - 1.0;
  return f * f * f + 1.0
}

function elasticInOut(t) {
  return t < 0.5
    ? 0.5 * Math.sin(+13.0 * Math.PI/2 * 2.0 * t) * Math.pow(2.0, 10.0 * (2.0 * t - 1.0))
    : 0.5 * Math.sin(-13.0 * Math.PI/2 * ((2.0 * t - 1.0) + 1.0)) * Math.pow(2.0, -10.0 * (2.0 * t - 1.0)) + 1.0
}

function elasticIn(t) {
  return Math.sin(13.0 * t * Math.PI/2) * Math.pow(2.0, 10.0 * (t - 1.0))
}

function elasticOut(t) {
  return Math.sin(-13.0 * (t + 1.0) * Math.PI/2) * Math.pow(2.0, -10.0 * t) + 1.0
}

function expoInOut(t) {
  return (t === 0.0 || t === 1.0)
    ? t
    : t < 0.5
      ? +0.5 * Math.pow(2.0, (20.0 * t) - 10.0)
      : -0.5 * Math.pow(2.0, 10.0 - (t * 20.0)) + 1.0
}

function expoIn(t) {
  return t === 0.0 ? t : Math.pow(2.0, 10.0 * (t - 1.0))
}

function expoOut(t) {
  return t === 1.0 ? t : 1.0 - Math.pow(2.0, -10.0 * t)
}

function linear(t) {
  return t
}

function quadInOut(t) {
    t /= 0.5;
    if (t < 1) return 0.5*t*t
    t--;
    return -0.5 * (t*(t-2) - 1)
}

function quadIn(t) {
  return t * t
}

function quadOut(t) {
  return -t * (t - 2.0)
}

function quarticInOut(t) {
  return t < 0.5
    ? +8.0 * Math.pow(t, 4.0)
    : -8.0 * Math.pow(t - 1.0, 4.0) + 1.0
}

function quarticIn(t) {
  return Math.pow(t, 4.0)
}

function quarticOut(t) {
  return Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0
}

function qinticInOut(t) {
    if ( ( t *= 2 ) < 1 ) return 0.5 * t * t * t * t * t
    return 0.5 * ( ( t -= 2 ) * t * t * t * t + 2 )
}

function qinticIn(t) {
  return t * t * t * t * t
}

function qinticOut(t) {
  return --t * t * t * t * t + 1
}

function sineInOut(t) {
  return -0.5 * (Math.cos(Math.PI*t) - 1)
}

function sineIn (t) {
  var v = Math.cos(t * Math.PI * 0.5);
  if (Math.abs(v) < 1e-14) return 1
  else return 1 - v
}

function sineOut(t) {
  return Math.sin(t * Math.PI/2)
}




/***/ }),

/***/ "../../node_modules/history/es/DOMUtils.js":
/*!*************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/history/es/DOMUtils.js ***!
  \*************************************************************************************/
/*! exports provided: canUseDOM, addEventListener, removeEventListener, getConfirmation, supportsHistory, supportsPopStateOnHashChange, supportsGoWithoutReloadUsingHash, isExtraneousPopstateEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canUseDOM", function() { return canUseDOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEventListener", function() { return addEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEventListener", function() { return removeEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfirmation", function() { return getConfirmation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsHistory", function() { return supportsHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsPopStateOnHashChange", function() { return supportsPopStateOnHashChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsGoWithoutReloadUsingHash", function() { return supportsGoWithoutReloadUsingHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isExtraneousPopstateEvent", function() { return isExtraneousPopstateEvent; });
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};

var removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};

var getConfirmation = function getConfirmation(message, callback) {
  return callback(window.confirm(message));
}; // eslint-disable-line no-alert

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */
var supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

  return window.history && 'pushState' in window.history;
};

/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */
var supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
};

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */
var supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};

/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */
var isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
};

/***/ }),

/***/ "../../node_modules/history/es/LocationUtils.js":
/*!******************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/history/es/LocationUtils.js ***!
  \******************************************************************************************/
/*! exports provided: createLocation, locationsAreEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLocation", function() { return createLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locationsAreEqual", function() { return locationsAreEqual; });
/* harmony import */ var resolve_pathname__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! resolve-pathname */ "../../node_modules/resolve-pathname/index.js");
/* harmony import */ var value_equal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! value-equal */ "../../node_modules/value-equal/index.js");
/* harmony import */ var _PathUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PathUtils */ "../../node_modules/history/es/PathUtils.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var createLocation = function createLocation(path, state, key, currentLocation) {
  var location = void 0;
  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = Object(_PathUtils__WEBPACK_IMPORTED_MODULE_2__["parsePath"])(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);

    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = Object(resolve_pathname__WEBPACK_IMPORTED_MODULE_0__["default"])(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
};

var locationsAreEqual = function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && Object(value_equal__WEBPACK_IMPORTED_MODULE_1__["default"])(a.state, b.state);
};

/***/ }),

/***/ "../../node_modules/history/es/PathUtils.js":
/*!**************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/history/es/PathUtils.js ***!
  \**************************************************************************************/
/*! exports provided: addLeadingSlash, stripLeadingSlash, hasBasename, stripBasename, stripTrailingSlash, parsePath, createPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLeadingSlash", function() { return addLeadingSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripLeadingSlash", function() { return stripLeadingSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasBasename", function() { return hasBasename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripBasename", function() { return stripBasename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripTrailingSlash", function() { return stripTrailingSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return parsePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPath", function() { return createPath; });
var addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
};

var stripLeadingSlash = function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
};

var hasBasename = function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
};

var stripBasename = function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
};

var stripTrailingSlash = function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
};

var parsePath = function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var createPath = function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;


  var path = pathname || '/';

  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

  return path;
};

/***/ }),

/***/ "../../node_modules/history/es/createBrowserHistory.js":
/*!*************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/history/es/createBrowserHistory.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! warning */ "../../node_modules/warning/browser.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! invariant */ "../../node_modules/history/node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LocationUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LocationUtils */ "../../node_modules/history/es/LocationUtils.js");
/* harmony import */ var _PathUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PathUtils */ "../../node_modules/history/es/PathUtils.js");
/* harmony import */ var _createTransitionManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createTransitionManager */ "../../node_modules/history/es/createTransitionManager.js");
/* harmony import */ var _DOMUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DOMUtils */ "../../node_modules/history/es/DOMUtils.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

var getHistoryState = function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
};

/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */
var createBrowserHistory = function createBrowserHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  invariant__WEBPACK_IMPORTED_MODULE_1___default()(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__["canUseDOM"], 'Browser history needs a DOM');

  var globalHistory = window.history;
  var canUseHistory = Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__["supportsHistory"])();
  var needsHashChangeListener = !Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__["supportsPopStateOnHashChange"])();

  var _props$forceRefresh = props.forceRefresh,
      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
      _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils__WEBPACK_IMPORTED_MODULE_5__["getConfirmation"] : _props$getUserConfirm,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

  var basename = props.basename ? Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["stripTrailingSlash"])(Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["addLeadingSlash"])(props.basename)) : '';

  var getDOMLocation = function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;


    var path = pathname + search + hash;

    warning__WEBPACK_IMPORTED_MODULE_0___default()(!basename || Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["hasBasename"])(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["stripBasename"])(path, basename);

    return Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_2__["createLocation"])(path, state, key);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var transitionManager = Object(_createTransitionManager__WEBPACK_IMPORTED_MODULE_4__["default"])();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var handlePopState = function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__["isExtraneousPopstateEvent"])(event)) return;

    handlePop(getDOMLocation(event.state));
  };

  var handleHashChange = function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  };

  var forceNextPop = false;

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allKeys.indexOf(fromLocation.key);

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key];

  // Public interface

  var createHref = function createHref(location) {
    return basename + Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["createPath"])(location);
  };

  var push = function push(path, state) {
    warning__WEBPACK_IMPORTED_MODULE_0___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_2__["createLocation"])(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.pushState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

          nextKeys.push(location.key);
          allKeys = nextKeys;

          setState({ action: action, location: location });
        }
      } else {
        warning__WEBPACK_IMPORTED_MODULE_0___default()(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');

        window.location.href = href;
      }
    });
  };

  var replace = function replace(path, state) {
    warning__WEBPACK_IMPORTED_MODULE_0___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_2__["createLocation"])(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.replaceState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);

          if (prevIndex !== -1) allKeys[prevIndex] = location.key;

          setState({ action: action, location: location });
        }
      } else {
        warning__WEBPACK_IMPORTED_MODULE_0___default()(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');

        window.location.replace(href);
      }
    });
  };

  var go = function go(n) {
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__["addEventListener"])(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__["addEventListener"])(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__["removeEventListener"])(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__["removeEventListener"])(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

/* harmony default export */ __webpack_exports__["default"] = (createBrowserHistory);

/***/ }),

/***/ "../../node_modules/history/es/createHashHistory.js":
/*!**********************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/history/es/createHashHistory.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! warning */ "../../node_modules/warning/browser.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! invariant */ "../../node_modules/history/node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LocationUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LocationUtils */ "../../node_modules/history/es/LocationUtils.js");
/* harmony import */ var _PathUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PathUtils */ "../../node_modules/history/es/PathUtils.js");
/* harmony import */ var _createTransitionManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createTransitionManager */ "../../node_modules/history/es/createTransitionManager.js");
/* harmony import */ var _DOMUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DOMUtils */ "../../node_modules/history/es/DOMUtils.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








var HashChangeEvent = 'hashchange';

var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["stripLeadingSlash"])(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: _PathUtils__WEBPACK_IMPORTED_MODULE_3__["stripLeadingSlash"],
    decodePath: _PathUtils__WEBPACK_IMPORTED_MODULE_3__["addLeadingSlash"]
  },
  slash: {
    encodePath: _PathUtils__WEBPACK_IMPORTED_MODULE_3__["addLeadingSlash"],
    decodePath: _PathUtils__WEBPACK_IMPORTED_MODULE_3__["addLeadingSlash"]
  }
};

var getHashPath = function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
};

var pushHashPath = function pushHashPath(path) {
  return window.location.hash = path;
};

var replaceHashPath = function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');

  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
};

var createHashHistory = function createHashHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  invariant__WEBPACK_IMPORTED_MODULE_1___default()(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__["canUseDOM"], 'Hash history needs a DOM');

  var globalHistory = window.history;
  var canGoWithoutReload = Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__["supportsGoWithoutReloadUsingHash"])();

  var _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils__WEBPACK_IMPORTED_MODULE_5__["getConfirmation"] : _props$getUserConfirm,
      _props$hashType = props.hashType,
      hashType = _props$hashType === undefined ? 'slash' : _props$hashType;

  var basename = props.basename ? Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["stripTrailingSlash"])(Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["addLeadingSlash"])(props.basename)) : '';

  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;


  var getDOMLocation = function getDOMLocation() {
    var path = decodePath(getHashPath());

    warning__WEBPACK_IMPORTED_MODULE_0___default()(!basename || Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["hasBasename"])(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["stripBasename"])(path, basename);

    return Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_2__["createLocation"])(path);
  };

  var transitionManager = Object(_createTransitionManager__WEBPACK_IMPORTED_MODULE_4__["default"])();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var forceNextPop = false;
  var ignorePath = null;

  var handleHashChange = function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;

      if (!forceNextPop && Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_2__["locationsAreEqual"])(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["createPath"])(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;

      handlePop(location);
    }
  };

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["createPath"])(toLocation));

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allPaths.lastIndexOf(Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["createPath"])(fromLocation));

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  // Ensure the hash is encoded properly before doing anything else.
  var path = getHashPath();
  var encodedPath = encodePath(path);

  if (path !== encodedPath) replaceHashPath(encodedPath);

  var initialLocation = getDOMLocation();
  var allPaths = [Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["createPath"])(initialLocation)];

  // Public interface

  var createHref = function createHref(location) {
    return '#' + encodePath(basename + Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["createPath"])(location));
  };

  var push = function push(path, state) {
    warning__WEBPACK_IMPORTED_MODULE_0___default()(state === undefined, 'Hash history cannot push state; it is ignored');

    var action = 'PUSH';
    var location = Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_2__["createLocation"])(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["createPath"])(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);

        var prevIndex = allPaths.lastIndexOf(Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["createPath"])(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

        nextPaths.push(path);
        allPaths = nextPaths;

        setState({ action: action, location: location });
      } else {
        warning__WEBPACK_IMPORTED_MODULE_0___default()(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');

        setState();
      }
    });
  };

  var replace = function replace(path, state) {
    warning__WEBPACK_IMPORTED_MODULE_0___default()(state === undefined, 'Hash history cannot replace state; it is ignored');

    var action = 'REPLACE';
    var location = Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_2__["createLocation"])(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["createPath"])(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["createPath"])(history.location));

      if (prevIndex !== -1) allPaths[prevIndex] = path;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    warning__WEBPACK_IMPORTED_MODULE_0___default()(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');

    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__["addEventListener"])(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__["removeEventListener"])(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

/* harmony default export */ __webpack_exports__["default"] = (createHashHistory);

/***/ }),

/***/ "../../node_modules/history/es/createMemoryHistory.js":
/*!************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/history/es/createMemoryHistory.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! warning */ "../../node_modules/warning/browser.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PathUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PathUtils */ "../../node_modules/history/es/PathUtils.js");
/* harmony import */ var _LocationUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LocationUtils */ "../../node_modules/history/es/LocationUtils.js");
/* harmony import */ var _createTransitionManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createTransitionManager */ "../../node_modules/history/es/createTransitionManager.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






var clamp = function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
};

/**
 * Creates a history object that stores locations in memory.
 */
var createMemoryHistory = function createMemoryHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var getUserConfirmation = props.getUserConfirmation,
      _props$initialEntries = props.initialEntries,
      initialEntries = _props$initialEntries === undefined ? ['/'] : _props$initialEntries,
      _props$initialIndex = props.initialIndex,
      initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;


  var transitionManager = Object(_createTransitionManager__WEBPACK_IMPORTED_MODULE_3__["default"])();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = history.entries.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_2__["createLocation"])(entry, undefined, createKey()) : Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_2__["createLocation"])(entry, undefined, entry.key || createKey());
  });

  // Public interface

  var createHref = _PathUtils__WEBPACK_IMPORTED_MODULE_1__["createPath"];

  var push = function push(path, state) {
    warning__WEBPACK_IMPORTED_MODULE_0___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_2__["createLocation"])(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;

      var nextEntries = history.entries.slice(0);
      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  };

  var replace = function replace(path, state) {
    warning__WEBPACK_IMPORTED_MODULE_0___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_2__["createLocation"])(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      history.entries[history.index] = location;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);

    var action = 'POP';
    var location = history.entries[nextIndex];

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var canGo = function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  };

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return transitionManager.setPrompt(prompt);
  };

  var listen = function listen(listener) {
    return transitionManager.appendListener(listener);
  };

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };

  return history;
};

/* harmony default export */ __webpack_exports__["default"] = (createMemoryHistory);

/***/ }),

/***/ "../../node_modules/history/es/createTransitionManager.js":
/*!****************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/history/es/createTransitionManager.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! warning */ "../../node_modules/warning/browser.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_0__);


var createTransitionManager = function createTransitionManager() {
  var prompt = null;

  var setPrompt = function setPrompt(nextPrompt) {
    warning__WEBPACK_IMPORTED_MODULE_0___default()(prompt == null, 'A history supports only one prompt at a time');

    prompt = nextPrompt;

    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          warning__WEBPACK_IMPORTED_MODULE_0___default()(false, 'A history needs a getUserConfirmation function in order to use a prompt message');

          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  };

  var listeners = [];

  var appendListener = function appendListener(fn) {
    var isActive = true;

    var listener = function listener() {
      if (isActive) fn.apply(undefined, arguments);
    };

    listeners.push(listener);

    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var notifyListeners = function notifyListeners() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(undefined, args);
    });
  };

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
};

/* harmony default export */ __webpack_exports__["default"] = (createTransitionManager);

/***/ }),

/***/ "../../node_modules/history/es/index.js":
/*!**********************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/history/es/index.js ***!
  \**********************************************************************************/
/*! exports provided: createBrowserHistory, createHashHistory, createMemoryHistory, createLocation, locationsAreEqual, parsePath, createPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createBrowserHistory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createBrowserHistory */ "../../node_modules/history/es/createBrowserHistory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createBrowserHistory", function() { return _createBrowserHistory__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _createHashHistory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createHashHistory */ "../../node_modules/history/es/createHashHistory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHashHistory", function() { return _createHashHistory__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _createMemoryHistory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createMemoryHistory */ "../../node_modules/history/es/createMemoryHistory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMemoryHistory", function() { return _createMemoryHistory__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _LocationUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LocationUtils */ "../../node_modules/history/es/LocationUtils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createLocation", function() { return _LocationUtils__WEBPACK_IMPORTED_MODULE_3__["createLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "locationsAreEqual", function() { return _LocationUtils__WEBPACK_IMPORTED_MODULE_3__["locationsAreEqual"]; });

/* harmony import */ var _PathUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PathUtils */ "../../node_modules/history/es/PathUtils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return _PathUtils__WEBPACK_IMPORTED_MODULE_4__["parsePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPath", function() { return _PathUtils__WEBPACK_IMPORTED_MODULE_4__["createPath"]; });











/***/ }),

/***/ "../../node_modules/history/node_modules/invariant/browser.js":
/*!********************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/history/node_modules/invariant/browser.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "../../node_modules/path-to-regexp/index.js":
/*!**************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/path-to-regexp/index.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * Default configs.
 */
var DEFAULT_DELIMITER = '/'
var DEFAULT_DELIMITERS = './'

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?"]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined]
  '(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = (options && options.delimiter) || DEFAULT_DELIMITER
  var delimiters = (options && options.delimiters) || DEFAULT_DELIMITERS
  var pathEscaped = false
  var res

  while ((res = PATH_REGEXP.exec(str)) !== null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      pathEscaped = true
      continue
    }

    var prev = ''
    var next = str[index]
    var name = res[2]
    var capture = res[3]
    var group = res[4]
    var modifier = res[5]

    if (!pathEscaped && path.length) {
      var k = path.length - 1

      if (delimiters.indexOf(path[k]) > -1) {
        prev = path[k]
        path = path.slice(0, k)
      }
    }

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
      pathEscaped = false
    }

    var partial = prev !== '' && next !== undefined && next !== prev
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = prev || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prev,
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      pattern: pattern ? escapeGroup(pattern) : '[^' + escapeString(delimiter) + ']+?'
    })
  }

  // Push any remaining characters.
  if (path || index < str.length) {
    tokens.push(path + str.substr(index))
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
    }
  }

  return function (data, options) {
    var path = ''
    var encode = (options && options.encode) || encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token
        continue
      }

      var value = data ? data[token.name] : undefined
      var segment

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but got array')
        }

        if (value.length === 0) {
          if (token.optional) continue

          throw new TypeError('Expected "' + token.name + '" to not be empty')
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j], token)

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '"')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        segment = encode(String(value), token)

        if (!matches[i].test(segment)) {
          throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but got "' + segment + '"')
        }

        path += token.prefix + segment
        continue
      }

      if (token.optional) {
        // Prepend partial segment prefixes.
        if (token.partial) path += token.prefix

        continue
      }

      throw new TypeError('Expected "' + token.name + '" to be ' + (token.repeat ? 'an array' : 'a string'))
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$/()])/g, '\\$1')
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {Array=}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  if (!keys) return path

  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        pattern: null
      })
    }
  }

  return path
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  return new RegExp('(?:' + parts.join('|') + ')', flags(options))
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}  tokens
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var delimiter = escapeString(options.delimiter || DEFAULT_DELIMITER)
  var delimiters = options.delimiters || DEFAULT_DELIMITERS
  var endsWith = [].concat(options.endsWith || []).map(escapeString).concat('$').join('|')
  var route = ''
  var isEndDelimited = false

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
      isEndDelimited = i === tokens.length - 1 && delimiters.indexOf(token[token.length - 1]) > -1
    } else {
      var prefix = escapeString(token.prefix)
      var capture = token.repeat
        ? '(?:' + token.pattern + ')(?:' + prefix + '(?:' + token.pattern + '))*'
        : token.pattern

      if (keys) keys.push(token)

      if (token.optional) {
        if (token.partial) {
          route += prefix + '(' + capture + ')?'
        } else {
          route += '(?:' + prefix + '(' + capture + '))?'
        }
      } else {
        route += prefix + '(' + capture + ')'
      }
    }
  }

  if (end) {
    if (!strict) route += '(?:' + delimiter + ')?'

    route += endsWith === '$' ? '$' : '(?=' + endsWith + ')'
  } else {
    if (!strict) route += '(?:' + delimiter + '(?=' + endsWith + '))?'
    if (!isEndDelimited) route += '(?=' + delimiter + '|' + endsWith + ')'
  }

  return new RegExp('^' + route, flags(options))
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {Array=}                keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (path instanceof RegExp) {
    return regexpToRegexp(path, keys)
  }

  if (Array.isArray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), keys, options)
  }

  return stringToRegexp(/** @type {string} */ (path), keys, options)
}


/***/ }),

/***/ "../../node_modules/resolve-pathname/index.js":
/*!****************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/resolve-pathname/index.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash = void 0;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) {
    fromParts.unshift('..');
  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (resolvePathname);

/***/ }),

/***/ "../../node_modules/svelte-routing/NavLink.html":
/*!******************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/svelte-routing/NavLink.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/shared.js */ "../../node_modules/svelte/shared.js");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! history */ "../../node_modules/history/es/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "../../node_modules/svelte-routing/index.js");
/* node_modules\svelte-routing\NavLink.html generated by Svelte v1.58.0 */




function href(to, history) {
  const location = Object(history__WEBPACK_IMPORTED_MODULE_1__["createLocation"])(to, null, null, history.location);
  return history.createHref(location);
}

function escapedPath(to) {
  const path = typeof to === 'object' ? to.pathname : to;
  // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202
  return path.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}

function isActive(escapedPath, pathname, exact, strict) {
  const path = escapedPath;
  return Object(_index_js__WEBPACK_IMPORTED_MODULE_2__["matchPath"])(pathname, { path, exact, strict });
}

function computedClass(isActive, className, activeClassName) {
  const classes = [];

  if (className !== '') {
    classes.push(className);
  }
  if (isActive) {
    classes.push(activeClassName);
  }

  return classes.join(' ');
}

function computedAriaCurrent(isActive, ariaCurrent) {
  return (isActive && ariaCurrent) || 'false';
}

function data() {
  const history = Object(_index_js__WEBPACK_IMPORTED_MODULE_2__["getHistory"])();

  return {
    to: '#',
    replace: false,
    target: '',
    exact: false,
    strict: false,
    pathname: history.location.pathname,
    activeClassName: 'active',
    className: '',
    ariaCurrent: 'true',
    history
  };
};

var methods = {
  handleClick(event) {
    const target = this.get('target');
    const history = this.get('history');

    // Ignore everything but left clicks, let browser handle
    // "target=_blank" etc., ignore clicks with modifier keys
    if (event.button !== 0 || target !== '' || Object(_index_js__WEBPACK_IMPORTED_MODULE_2__["isModifiedEvent"])(event)) {
      return;
    }

    event.preventDefault();

    const to = this.get('to');
    const replace = this.get('replace');

    if (replace) {
      history.replace(to);
    } else {
      history.push(to);
    }
  }
};

function oncreate() {
  const history = this.get('history');

  this.unlisten = history.listen(location => {
    const { pathname } = location;
    this.set({ pathname });
  });
};

function ondestroy() {
  this.unlisten();
};

function create_main_fragment(component, state) {
	var a, slot_content_default = component._slotted.default;

	function click_handler(event) {
		component.handleClick(event);
	}

	return {
		c: function create() {
			a = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a");
			this.h();
		},

		l: function claim(nodes) {
			a = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(nodes, "A", { href: true, target: true, class: true, "aria-current": true }, false);
			var a_nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(a);

			a_nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			this.h();
		},

		h: function hydrate() {
			a.href = state.href;
			a.target = state.target;
			a.className = state.computedClass;
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(a, "aria-current", state.computedAriaCurrent);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addListener"])(a, "click", click_handler);
		},

		m: function mount(target, anchor) {
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(a, target, anchor);

			if (slot_content_default) {
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["appendNode"])(slot_content_default, a);
			}
		},

		p: function update(changed, state) {
			if (changed.href) {
				a.href = state.href;
			}

			if (changed.target) {
				a.target = state.target;
			}

			if (changed.computedClass) {
				a.className = state.computedClass;
			}

			if (changed.computedAriaCurrent) {
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(a, "aria-current", state.computedAriaCurrent);
			}
		},

		u: function unmount() {
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(a);

			if (slot_content_default) {
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["reinsertChildren"])(a, slot_content_default);
			}
		},

		d: function destroy() {
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["removeListener"])(a, "click", click_handler);
		}
	};
}

function NavLink(options) {
	this._debugName = '<NavLink>';
	if (!options || (!options.target && !options.root)) throw new Error("'target' is a required option");
	Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options);
	this._state = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["assign"])(data(), options.data);
	this._recompute({ to: 1, history: 1, escapedPath: 1, pathname: 1, exact: 1, strict: 1, isActive: 1, className: 1, activeClassName: 1, ariaCurrent: 1 }, this._state);
	if (!('to' in this._state)) console.warn("<NavLink> was created without expected data property 'to'");
	if (!('history' in this._state)) console.warn("<NavLink> was created without expected data property 'history'");

	if (!('pathname' in this._state)) console.warn("<NavLink> was created without expected data property 'pathname'");
	if (!('exact' in this._state)) console.warn("<NavLink> was created without expected data property 'exact'");
	if (!('strict' in this._state)) console.warn("<NavLink> was created without expected data property 'strict'");

	if (!('className' in this._state)) console.warn("<NavLink> was created without expected data property 'className'");
	if (!('activeClassName' in this._state)) console.warn("<NavLink> was created without expected data property 'activeClassName'");
	if (!('ariaCurrent' in this._state)) console.warn("<NavLink> was created without expected data property 'ariaCurrent'");

	if (!('target' in this._state)) console.warn("<NavLink> was created without expected data property 'target'");

	this._handlers.destroy = [ondestroy];

	this._slotted = options.slots || {};

	var _oncreate = oncreate.bind(this);

	if (!options.root) {
		this._oncreate = [];
	}

	this.slots = {};

	this._fragment = create_main_fragment(this, this._state);

	this.root._oncreate.push(_oncreate);

	if (options.target) {
		var nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(options.target);
		options.hydrate ? this._fragment.l(nodes) : this._fragment.c();
		nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
		this._mount(options.target, options.anchor);

		Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["callAll"])(this._oncreate);
	}
}

Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["assign"])(NavLink.prototype, methods, svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["protoDev"]);

NavLink.prototype._checkReadOnly = function _checkReadOnly(newState) {
	if ('href' in newState && !this._updatingReadonlyProperty) throw new Error("<NavLink>: Cannot set read-only property 'href'");
	if ('escapedPath' in newState && !this._updatingReadonlyProperty) throw new Error("<NavLink>: Cannot set read-only property 'escapedPath'");
	if ('isActive' in newState && !this._updatingReadonlyProperty) throw new Error("<NavLink>: Cannot set read-only property 'isActive'");
	if ('computedClass' in newState && !this._updatingReadonlyProperty) throw new Error("<NavLink>: Cannot set read-only property 'computedClass'");
	if ('computedAriaCurrent' in newState && !this._updatingReadonlyProperty) throw new Error("<NavLink>: Cannot set read-only property 'computedAriaCurrent'");
};

NavLink.prototype._recompute = function _recompute(changed, state) {
	if (changed.to || changed.history) {
		if (this._differs(state.href, (state.href = href(state.to, state.history)))) changed.href = true;
	}

	if (changed.to) {
		if (this._differs(state.escapedPath, (state.escapedPath = escapedPath(state.to)))) changed.escapedPath = true;
	}

	if (changed.escapedPath || changed.pathname || changed.exact || changed.strict) {
		if (this._differs(state.isActive, (state.isActive = isActive(state.escapedPath, state.pathname, state.exact, state.strict)))) changed.isActive = true;
	}

	if (changed.isActive || changed.className || changed.activeClassName) {
		if (this._differs(state.computedClass, (state.computedClass = computedClass(state.isActive, state.className, state.activeClassName)))) changed.computedClass = true;
	}

	if (changed.isActive || changed.ariaCurrent) {
		if (this._differs(state.computedAriaCurrent, (state.computedAriaCurrent = computedAriaCurrent(state.isActive, state.ariaCurrent)))) changed.computedAriaCurrent = true;
	}
}
/* harmony default export */ __webpack_exports__["default"] = (NavLink);

/***/ }),

/***/ "../../node_modules/svelte-routing/Route.html":
/*!****************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/svelte-routing/Route.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/shared.js */ "../../node_modules/svelte/shared.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "../../node_modules/svelte-routing/index.js");
/* node_modules\svelte-routing\Route.html generated by Svelte v1.58.0 */



function match(pathname, path, exact, strict) {
  return Object(_index_js__WEBPACK_IMPORTED_MODULE_1__["matchPath"])(pathname, { path, exact, strict });
}

function data() {
  const history = Object(_index_js__WEBPACK_IMPORTED_MODULE_1__["getHistory"])();

  return {
    pathname: history.location.pathname,
    path: '',
    exact: false,
    strict: false,
    component: null,
    history
  };
};

function oncreate() {
  const history = this.get('history');

  this.unlisten = history.listen(location => {
    const { pathname } = location;
    this.set({ pathname });
  });
};

function ondestroy() {
  this.unlisten();
};

function create_main_fragment(component, state) {
	var if_block_anchor;

	var if_block = (state.match !== null) && create_if_block(component, state);

	return {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createComment"])();
		},

		l: function claim(nodes) {
			if (if_block) if_block.l(nodes);
			if_block_anchor = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createComment"])();
		},

		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(if_block_anchor, target, anchor);
		},

		p: function update(changed, state) {
			if (state.match !== null) {
				if (if_block) {
					if_block.p(changed, state);
				} else {
					if_block = create_if_block(component, state);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.u();
				if_block.d();
				if_block = null;
			}
		},

		u: function unmount() {
			if (if_block) if_block.u();
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(if_block_anchor);
		},

		d: function destroy() {
			if (if_block) if_block.d();
		}
	};
}

// (2:2) {{#if component !== null}}
function create_if_block_1(component, state) {
	var switch_instance_anchor;

	var switch_value = state.component;

	function switch_props(state) {
		return {
			root: component.root,
			data: { match: state.match }
		};
	}

	if (switch_value) {
		var switch_instance = new switch_value(switch_props(state));
	}

	return {
		c: function create() {
			switch_instance_anchor = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createComment"])();
			if (switch_instance) switch_instance._fragment.c();
		},

		l: function claim(nodes) {
			switch_instance_anchor = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createComment"])();
			if (switch_instance) switch_instance._fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(switch_instance_anchor, target, anchor);
			if (switch_instance) switch_instance._mount(target, anchor);
		},

		p: function update(changed, state) {
			if (switch_value !== (switch_value = state.component)) {
				if (switch_instance) switch_instance.destroy();

				if (switch_value) {
					switch_instance = new switch_value(switch_props(state));
					switch_instance._fragment.c();
					switch_instance._mount(switch_instance_anchor.parentNode, switch_instance_anchor);
				}
			}

			else {
				var switch_instance_changes = {};
				if (changed.match) switch_instance_changes.match = state.match;
				switch_instance._set(switch_instance_changes);
			}
		},

		u: function unmount() {
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(switch_instance_anchor);
			if (switch_instance) switch_instance._unmount();
		},

		d: function destroy() {
			if (switch_instance) switch_instance.destroy(false);
		}
	};
}

// (4:2) {{else}}
function create_if_block_2(component, state) {
	var slot_content_default = component._slotted.default, slot_content_default_before, slot_content_default_after;

	return {
		c: svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["noop"],

		l: svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["noop"],

		m: function mount(target, anchor) {
			if (slot_content_default) {
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(slot_content_default_before || (slot_content_default_before = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createComment"])()), target, anchor);
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(slot_content_default, target, anchor);
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(slot_content_default_after || (slot_content_default_after = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createComment"])()), target, anchor);
			}
		},

		p: svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["noop"],

		u: function unmount() {
			if (slot_content_default) {
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["reinsertBetween"])(slot_content_default_before, slot_content_default_after, slot_content_default);
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(slot_content_default_before);
				Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(slot_content_default_after);
			}
		},

		d: svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["noop"]
	};
}

// (1:0) {{#if match !== null}}
function create_if_block(component, state) {
	var if_block_anchor;

	function select_block_type(state) {
		if (state.component !== null) return create_if_block_1;
		return create_if_block_2;
	}

	var current_block_type = select_block_type(state);
	var if_block = current_block_type(component, state);

	return {
		c: function create() {
			if_block.c();
			if_block_anchor = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createComment"])();
		},

		l: function claim(nodes) {
			if_block.l(nodes);
			if_block_anchor = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createComment"])();
		},

		m: function mount(target, anchor) {
			if_block.m(target, anchor);
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(if_block_anchor, target, anchor);
		},

		p: function update(changed, state) {
			if (current_block_type === (current_block_type = select_block_type(state)) && if_block) {
				if_block.p(changed, state);
			} else {
				if_block.u();
				if_block.d();
				if_block = current_block_type(component, state);
				if_block.c();
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},

		u: function unmount() {
			if_block.u();
			Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(if_block_anchor);
		},

		d: function destroy() {
			if_block.d();
		}
	};
}

function Route(options) {
	this._debugName = '<Route>';
	if (!options || (!options.target && !options.root)) throw new Error("'target' is a required option");
	Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options);
	this._state = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["assign"])(data(), options.data);
	this._recompute({ pathname: 1, path: 1, exact: 1, strict: 1 }, this._state);
	if (!('pathname' in this._state)) console.warn("<Route> was created without expected data property 'pathname'");
	if (!('path' in this._state)) console.warn("<Route> was created without expected data property 'path'");
	if (!('exact' in this._state)) console.warn("<Route> was created without expected data property 'exact'");
	if (!('strict' in this._state)) console.warn("<Route> was created without expected data property 'strict'");

	if (!('component' in this._state)) console.warn("<Route> was created without expected data property 'component'");

	this._handlers.destroy = [ondestroy];

	this._slotted = options.slots || {};

	var _oncreate = oncreate.bind(this);

	if (!options.root) {
		this._oncreate = [];
		this._beforecreate = [];
		this._aftercreate = [];
	}

	this.slots = {};

	this._fragment = create_main_fragment(this, this._state);

	this.root._oncreate.push(_oncreate);

	if (options.target) {
		var nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(options.target);
		options.hydrate ? this._fragment.l(nodes) : this._fragment.c();
		nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
		this._mount(options.target, options.anchor);

		this._lock = true;
		Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["callAll"])(this._beforecreate);
		Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["callAll"])(this._oncreate);
		Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["callAll"])(this._aftercreate);
		this._lock = false;
	}
}

Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["assign"])(Route.prototype, svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["protoDev"]);

Route.prototype._checkReadOnly = function _checkReadOnly(newState) {
	if ('match' in newState && !this._updatingReadonlyProperty) throw new Error("<Route>: Cannot set read-only property 'match'");
};

Route.prototype._recompute = function _recompute(changed, state) {
	if (changed.pathname || changed.path || changed.exact || changed.strict) {
		if (this._differs(state.match, (state.match = match(state.pathname, state.path, state.exact, state.strict)))) changed.match = true;
	}
}
/* harmony default export */ __webpack_exports__["default"] = (Route);

/***/ }),

/***/ "../../node_modules/svelte-routing/index.js":
/*!**************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/svelte-routing/index.js ***!
  \**************************************************************************************/
/*! exports provided: matchPath, getHistory, createHistory, isModifiedEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHistory", function() { return getHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHistory", function() { return createHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isModifiedEvent", function() { return isModifiedEvent; });
/* harmony import */ var history_es_createMemoryHistory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! history/es/createMemoryHistory */ "../../node_modules/history/es/createMemoryHistory.js");
/* harmony import */ var history_es_createHashHistory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! history/es/createHashHistory */ "../../node_modules/history/es/createHashHistory.js");
/* harmony import */ var history_es_createBrowserHistory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! history/es/createBrowserHistory */ "../../node_modules/history/es/createBrowserHistory.js");
/* harmony import */ var _matchPath_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./matchPath.js */ "../../node_modules/svelte-routing/matchPath.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return _matchPath_js__WEBPACK_IMPORTED_MODULE_3__["matchPath"]; });





let history;

const createHistory = type => {
  switch (type) {
    case 'memory':
      history = Object(history_es_createMemoryHistory__WEBPACK_IMPORTED_MODULE_0__["default"])();
      break;
    case 'hash':
      history = Object(history_es_createHashHistory__WEBPACK_IMPORTED_MODULE_1__["default"])();
      break;
    case 'browser':
    default:
      history = Object(history_es_createBrowserHistory__WEBPACK_IMPORTED_MODULE_2__["default"])();
      break;
  }

  return history;
};

const getHistory = () => history;

const isModifiedEvent = event => {
  return Boolean(
    event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
  );
};





/***/ }),

/***/ "../../node_modules/svelte-routing/matchPath.js":
/*!******************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/svelte-routing/matchPath.js ***!
  \******************************************************************************************/
/*! exports provided: matchPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return matchPath; });
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path-to-regexp */ "../../node_modules/path-to-regexp/index.js");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path_to_regexp__WEBPACK_IMPORTED_MODULE_0__);
/**
 * The MIT License (MIT)
 * Copyright (c) 2015-present, Ryan Florence, Michael Jackson
 * https://github.com/ReactTraining/react-router/blob/master/packages/react-router/modules/matchPath.js
 */


const patternCache = {};
const cacheLimit = 10000;
let cacheCount = 0;

const compilePath = (pattern, options) => {
  const cacheKey = `${options.end}${options.strict}${options.sensitive}`;
  const cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

  if (cache[pattern]) {
    return cache[pattern];
  }

  const keys = [];
  const re = path_to_regexp__WEBPACK_IMPORTED_MODULE_0___default()(pattern, keys, options);
  const compiledPattern = { re, keys };

  if (cacheCount < cacheLimit) {
    cache[pattern] = compiledPattern;
    cacheCount++;
  }

  return compiledPattern;
};

const matchPath = (pathname, options = {}) => {
  if (typeof options === 'string') {
    options = { path: options };
  }

  const {
    path = '/',
    exact = false,
    strict = false,
    sensitive = false
  } = options;
  const { re, keys } = compilePath(path, { end: exact, strict, sensitive });
  const match = re.exec(pathname);

  if (!match) {
    return null;
  }

  const [url, ...values] = match;
  const isExact = pathname === url;

  if (exact && !isExact) {
    return null;
  }

  return {
    path, // The path pattern used to match
    url: path === '/' && url === '' ? '/' : url, // The matched portion of the URL
    isExact, // Whether or not we matched exactly
    params: keys.reduce((memo, key, index) => {
      memo[key.name] = values[index];
      return memo;
    }, {})
  };
};




/***/ }),

/***/ "../../node_modules/svelte-transitions-fade/module.js":
/*!************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/svelte-transitions-fade/module.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function fade ( node, ref ) {
	var delay = ref.delay; if ( delay === void 0 ) delay = 0;
	var duration = ref.duration; if ( duration === void 0 ) duration = 400;

	var o = +getComputedStyle( node ).opacity;

	return {
		delay: delay,
		duration: duration,
		css: function (t) { return ("opacity: " + (t * o)); }
	};
}

/* harmony default export */ __webpack_exports__["default"] = (fade);


/***/ }),

/***/ "../../node_modules/svelte-transitions-fly/module.js":
/*!***********************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/svelte-transitions-fly/module.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var eases_jsnext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eases-jsnext */ "../../node_modules/eases-jsnext/dist/eases.es.js");


function fly(
	node,
	ref
) {
	var delay = ref.delay; if ( delay === void 0 ) delay = 0;
	var duration = ref.duration; if ( duration === void 0 ) duration = 400;
	var easing = ref.easing; if ( easing === void 0 ) easing = eases_jsnext__WEBPACK_IMPORTED_MODULE_0__["cubicOut"];
	var x = ref.x; if ( x === void 0 ) x = 0;
	var y = ref.y; if ( y === void 0 ) y = 0;

	var o = +getComputedStyle(node).opacity;

	return {
		delay: delay,
		duration: duration,
		easing: easing,
		css: function (t) { return ("transform: translate(" + ((1 - t) * x) + "px, " + ((1 - t) * y) + "px); opacity: " + (t * o)); }
	};
}

/* harmony default export */ __webpack_exports__["default"] = (fly);


/***/ }),

/***/ "../../node_modules/svelte-transitions-slide/module.js":
/*!*************************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/svelte-transitions-slide/module.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var eases_jsnext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eases-jsnext */ "../../node_modules/eases-jsnext/dist/eases.es.js");


function slide(
	node,
	ref
) {
	var delay = ref.delay; if ( delay === void 0 ) delay = 0;
	var duration = ref.duration; if ( duration === void 0 ) duration = 400;
	var easing = ref.easing; if ( easing === void 0 ) easing = eases_jsnext__WEBPACK_IMPORTED_MODULE_0__["cubicOut"];

	var style = getComputedStyle(node);
	var opacity = +style.opacity;
	var height = parseFloat(style.height);
	var paddingTop = parseFloat(style.paddingTop);
	var paddingBottom = parseFloat(style.paddingBottom);
	var marginTop = parseFloat(style.marginTop);
	var marginBottom = parseFloat(style.marginBottom);
	var borderTopWidth = parseFloat(style.borderTopWidth);
	var borderBottomWidth = parseFloat(style.borderBottomWidth);

	return {
		delay: delay,
		duration: duration,
		easing: easing,
		css: function (t) { return "overflow: hidden;" +
			"opacity: " + (Math.min(t * 20, 1) * opacity) + ";" +
			"height: " + (t * height) + "px;" +
			"padding-top: " + (t * paddingTop) + "px;" +
			"padding-bottom: " + (t * paddingBottom) + "px;" +
			"margin-top: " + (t * marginTop) + "px;" +
			"margin-bottom: " + (t * marginBottom) + "px;" +
			"border-top-width: " + (t * borderTopWidth) + "px;" +
			"border-bottom-width: " + (t * borderBottomWidth) + "px;"; }
	};
}

/* harmony default export */ __webpack_exports__["default"] = (slide);


/***/ }),

/***/ "../../node_modules/svelte-transitions/module.js":
/*!*******************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/svelte-transitions/module.js ***!
  \*******************************************************************************************/
/*! exports provided: fade, fly, slide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_transitions_fade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte-transitions-fade */ "../../node_modules/svelte-transitions-fade/module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fade", function() { return svelte_transitions_fade__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var svelte_transitions_fly__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte-transitions-fly */ "../../node_modules/svelte-transitions-fly/module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fly", function() { return svelte_transitions_fly__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var svelte_transitions_slide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svelte-transitions-slide */ "../../node_modules/svelte-transitions-slide/module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slide", function() { return svelte_transitions_slide__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "../../node_modules/svelte/shared.js":
/*!*******************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/svelte/shared.js ***!
  \*******************************************************************************/
/*! exports provided: blankObject, destroy, destroyDev, _differs, _differsImmutable, dispatchObservers, fire, get, init, observe, observeDev, on, onDev, run, set, _set, setDev, callAll, _mount, _unmount, isPromise, PENDING, SUCCESS, FAILURE, removeFromStore, proto, protoDev, appendNode, insertNode, detachNode, detachBetween, detachBefore, detachAfter, reinsertBetween, reinsertChildren, reinsertAfter, reinsertBefore, destroyEach, createFragment, createElement, createSvgElement, createText, createComment, addListener, removeListener, setAttribute, setXlinkAttribute, getBindingGroupValue, toNumber, timeRangesToArray, children, claimElement, claimText, setInputType, setStyle, selectOption, selectOptions, selectValue, selectMultipleValue, destroyIteration, outroAndDestroyIteration, updateKeyedEach, linear, generateRule, hash, wrapTransition, transitionManager, noop, assign */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blankObject", function() { return blankObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return destroy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroyDev", function() { return destroyDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_differs", function() { return _differs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_differsImmutable", function() { return _differsImmutable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatchObservers", function() { return dispatchObservers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fire", function() { return fire; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observe", function() { return observe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observeDev", function() { return observeDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onDev", function() { return onDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "run", function() { return run; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_set", function() { return _set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDev", function() { return setDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callAll", function() { return callAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_mount", function() { return _mount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_unmount", function() { return _unmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return isPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PENDING", function() { return PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUCCESS", function() { return SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAILURE", function() { return FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFromStore", function() { return removeFromStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proto", function() { return proto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "protoDev", function() { return protoDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendNode", function() { return appendNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertNode", function() { return insertNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detachNode", function() { return detachNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detachBetween", function() { return detachBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detachBefore", function() { return detachBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detachAfter", function() { return detachAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reinsertBetween", function() { return reinsertBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reinsertChildren", function() { return reinsertChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reinsertAfter", function() { return reinsertAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reinsertBefore", function() { return reinsertBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroyEach", function() { return destroyEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFragment", function() { return createFragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSvgElement", function() { return createSvgElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createText", function() { return createText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComment", function() { return createComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addListener", function() { return addListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeListener", function() { return removeListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAttribute", function() { return setAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setXlinkAttribute", function() { return setXlinkAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBindingGroupValue", function() { return getBindingGroupValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNumber", function() { return toNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeRangesToArray", function() { return timeRangesToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "children", function() { return children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claimElement", function() { return claimElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claimText", function() { return claimText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInputType", function() { return setInputType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStyle", function() { return setStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectOption", function() { return selectOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectOptions", function() { return selectOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectValue", function() { return selectValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMultipleValue", function() { return selectMultipleValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroyIteration", function() { return destroyIteration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outroAndDestroyIteration", function() { return outroAndDestroyIteration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateKeyedEach", function() { return updateKeyedEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linear", function() { return linear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRule", function() { return generateRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hash", function() { return hash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapTransition", function() { return wrapTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitionManager", function() { return transitionManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
function noop() {}

function assign(target) {
	var k,
		source,
		i = 1,
		len = arguments.length;
	for (; i < len; i++) {
		source = arguments[i];
		for (k in source) target[k] = source[k];
	}

	return target;
}

function appendNode(node, target) {
	target.appendChild(node);
}

function insertNode(node, target, anchor) {
	target.insertBefore(node, anchor);
}

function detachNode(node) {
	node.parentNode.removeChild(node);
}

function detachBetween(before, after) {
	while (before.nextSibling && before.nextSibling !== after) {
		before.parentNode.removeChild(before.nextSibling);
	}
}

function detachBefore(after) {
	while (after.previousSibling) {
		after.parentNode.removeChild(after.previousSibling);
	}
}

function detachAfter(before) {
	while (before.nextSibling) {
		before.parentNode.removeChild(before.nextSibling);
	}
}

function reinsertBetween(before, after, target) {
	while (before.nextSibling && before.nextSibling !== after) {
		target.appendChild(before.parentNode.removeChild(before.nextSibling));
	}
}

function reinsertChildren(parent, target) {
	while (parent.firstChild) target.appendChild(parent.firstChild);
}

function reinsertAfter(before, target) {
	while (before.nextSibling) target.appendChild(before.nextSibling);
}

function reinsertBefore(after, target) {
	var parent = after.parentNode;
	while (parent.firstChild !== after) target.appendChild(parent.firstChild);
}

function destroyEach(iterations) {
	for (var i = 0; i < iterations.length; i += 1) {
		if (iterations[i]) iterations[i].d();
	}
}

function createFragment() {
	return document.createDocumentFragment();
}

function createElement(name) {
	return document.createElement(name);
}

function createSvgElement(name) {
	return document.createElementNS('http://www.w3.org/2000/svg', name);
}

function createText(data) {
	return document.createTextNode(data);
}

function createComment() {
	return document.createComment('');
}

function addListener(node, event, handler) {
	node.addEventListener(event, handler, false);
}

function removeListener(node, event, handler) {
	node.removeEventListener(event, handler, false);
}

function setAttribute(node, attribute, value) {
	node.setAttribute(attribute, value);
}

function setXlinkAttribute(node, attribute, value) {
	node.setAttributeNS('http://www.w3.org/1999/xlink', attribute, value);
}

function getBindingGroupValue(group) {
	var value = [];
	for (var i = 0; i < group.length; i += 1) {
		if (group[i].checked) value.push(group[i].__value);
	}
	return value;
}

function toNumber(value) {
	return value === '' ? undefined : +value;
}

function timeRangesToArray(ranges) {
	var array = [];
	for (var i = 0; i < ranges.length; i += 1) {
		array.push({ start: ranges.start(i), end: ranges.end(i) });
	}
	return array;
}

function children (element) {
	return Array.from(element.childNodes);
}

function claimElement (nodes, name, attributes, svg) {
	for (var i = 0; i < nodes.length; i += 1) {
		var node = nodes[i];
		if (node.nodeName === name) {
			for (var j = 0; j < node.attributes.length; j += 1) {
				var attribute = node.attributes[j];
				if (!attributes[attribute.name]) node.removeAttribute(attribute.name);
			}
			return nodes.splice(i, 1)[0]; // TODO strip unwanted attributes
		}
	}

	return svg ? createSvgElement(name) : createElement(name);
}

function claimText (nodes, data) {
	for (var i = 0; i < nodes.length; i += 1) {
		var node = nodes[i];
		if (node.nodeType === 3) {
			node.data = data;
			return nodes.splice(i, 1)[0];
		}
	}

	return createText(data);
}

function setInputType(input, type) {
	try {
		input.type = type;
	} catch (e) {}
}

function setStyle(node, key, value) {
	node.style.setProperty(key, value);
}

function selectOption(select, value) {
	for (var i = 0; i < select.options.length; i += 1) {
		var option = select.options[i];

		if (option.__value === value) {
			option.selected = true;
			return;
		}
	}
}

function selectOptions(select, value) {
	for (var i = 0; i < select.options.length; i += 1) {
		var option = select.options[i];
		option.selected = ~value.indexOf(option.__value);
	}
}

function selectValue(select) {
	var selectedOption = select.querySelector(':checked') || select.options[0];
	return selectedOption && selectedOption.__value;
}

function selectMultipleValue(select) {
	return [].map.call(select.querySelectorAll(':checked'), function(option) {
		return option.__value;
	});
}

function destroyIteration(iteration, lookup) {
	var first = iteration.first;
	if (first && first.parentNode) {
		iteration.u();
	}
	iteration.d();
	lookup[iteration.key] = null;
}

function outroAndDestroyIteration(iteration, lookup) {
	iteration.o(function() {
		iteration.u();
		iteration.d();
		lookup[iteration.key] = null;
	});
}

// TODO is it possible to avoid mounting iterations that are
// already in the right place?
function updateKeyedEach(component, key, changed, key_prop, dynamic, list, head, lookup, node, has_outro, create_each_block, intro_method, get_context) {
	var keep = {};

	var i = list.length;
	while (i--) {
		var key = list[i][key_prop];
		var iteration = lookup[key];

		if (iteration) {
			if (dynamic) iteration.p(changed, get_context(i));
		} else {
			iteration = lookup[key] = create_each_block(component, key, get_context(i));
			iteration.c();
		}

		lookup[key] = iteration;
		keep[key] = 1;
	}

	var destroy = has_outro
		? outroAndDestroyIteration
		: destroyIteration;

	iteration = head;
	while (iteration) {
		if (!keep[iteration.key]) destroy(iteration, lookup);
		iteration = iteration.next;
	}

	var next = null;

	i = list.length;
	while (i--) {
		key = list[i][key_prop];
		iteration = lookup[key];

		var anchor;

		if (has_outro) {
			var next_key = next && next.key;
			var neighbour = iteration.next;
			var anchor_key;

			while (neighbour && anchor_key != next_key && !keep[anchor_key]) {
				anchor = neighbour && neighbour.first;
				neighbour = neighbour.next;
				anchor_key = neighbour && neighbour.key;
			}
		} else {
			anchor = next && next.first;
		}

		iteration[intro_method](node, anchor);

		iteration.next = next;
		if (next) next.last = iteration;
		next = iteration;
	}
}

function linear(t) {
	return t;
}

function generateRule(
	a,
	b,
	delta,
	duration,
	ease,
	fn
) {
	var keyframes = '{\n';

	for (var p = 0; p <= 1; p += 16.666 / duration) {
		var t = a + delta * ease(p);
		keyframes += p * 100 + '%{' + fn(t) + '}\n';
	}

	return keyframes + '100% {' + fn(b) + '}\n}';
}

// https://github.com/darkskyapp/string-hash/blob/master/index.js
function hash(str) {
	var hash = 5381;
	var i = str.length;

	while (i--) hash = ((hash << 5) - hash) ^ str.charCodeAt(i);
	return hash >>> 0;
}

function wrapTransition(component, node, fn, params, intro, outgroup) {
	var obj = fn(node, params);
	var duration = obj.duration || 300;
	var ease = obj.easing || linear;
	var cssText;

	// TODO share <style> tag between all transitions?
	if (obj.css && !transitionManager.stylesheet) {
		var style = createElement('style');
		document.head.appendChild(style);
		transitionManager.stylesheet = style.sheet;
	}

	if (intro) {
		if (obj.css && obj.delay) {
			cssText = node.style.cssText;
			node.style.cssText += obj.css(0);
		}

		if (obj.tick) obj.tick(0);
	}

	return {
		t: intro ? 0 : 1,
		running: false,
		program: null,
		pending: null,
		run: function(intro, callback) {
			var program = {
				start: window.performance.now() + (obj.delay || 0),
				intro: intro,
				callback: callback
			};

			if (obj.delay) {
				this.pending = program;
			} else {
				this.start(program);
			}

			if (!this.running) {
				this.running = true;
				transitionManager.add(this);
			}
		},
		start: function(program) {
			component.fire(program.intro ? 'intro.start' : 'outro.start', { node: node });

			program.a = this.t;
			program.b = program.intro ? 1 : 0;
			program.delta = program.b - program.a;
			program.duration = duration * Math.abs(program.b - program.a);
			program.end = program.start + program.duration;

			if (obj.css) {
				if (obj.delay) node.style.cssText = cssText;

				program.rule = generateRule(
					program.a,
					program.b,
					program.delta,
					program.duration,
					ease,
					obj.css
				);

				transitionManager.addRule(program.rule, program.name = '__svelte_' + hash(program.rule));

				node.style.animation = (node.style.animation || '')
					.split(', ')
					.filter(function(anim) {
						// when introing, discard old animations if there are any
						return anim && (program.delta < 0 || !/__svelte/.test(anim));
					})
					.concat(program.name + ' ' + program.duration + 'ms linear 1 forwards')
					.join(', ');
			}

			this.program = program;
			this.pending = null;
		},
		update: function(now) {
			var program = this.program;
			if (!program) return;

			var p = now - program.start;
			this.t = program.a + program.delta * ease(p / program.duration);
			if (obj.tick) obj.tick(this.t);
		},
		done: function() {
			var program = this.program;
			this.t = program.b;
			if (obj.tick) obj.tick(this.t);
			if (obj.css) transitionManager.deleteRule(node, program.name);
			program.callback();
			program = null;
			this.running = !!this.pending;
		},
		abort: function() {
			if (obj.tick) obj.tick(1);
			if (obj.css) transitionManager.deleteRule(node, this.program.name);
			this.program = this.pending = null;
			this.running = false;
		}
	};
}

var transitionManager = {
	running: false,
	transitions: [],
	bound: null,
	stylesheet: null,
	activeRules: {},

	add: function(transition) {
		this.transitions.push(transition);

		if (!this.running) {
			this.running = true;
			requestAnimationFrame(this.bound || (this.bound = this.next.bind(this)));
		}
	},

	addRule: function(rule, name) {
		if (!this.activeRules[name]) {
			this.activeRules[name] = true;
			this.stylesheet.insertRule('@keyframes ' + name + ' ' + rule, this.stylesheet.cssRules.length);
		}
	},

	next: function() {
		this.running = false;

		var now = window.performance.now();
		var i = this.transitions.length;

		while (i--) {
			var transition = this.transitions[i];

			if (transition.program && now >= transition.program.end) {
				transition.done();
			}

			if (transition.pending && now >= transition.pending.start) {
				transition.start(transition.pending);
			}

			if (transition.running) {
				transition.update(now);
				this.running = true;
			} else if (!transition.pending) {
				this.transitions.splice(i, 1);
			}
		}

		if (this.running) {
			requestAnimationFrame(this.bound);
		} else if (this.stylesheet) {
			var i = this.stylesheet.cssRules.length;
			while (i--) this.stylesheet.deleteRule(i);
			this.activeRules = {};
		}
	},

	deleteRule: function(node, name) {
		node.style.animation = node.style.animation
			.split(', ')
			.filter(function(anim) {
				return anim.slice(0, name.length) !== name;
			})
			.join(', ');
	}
};

function blankObject() {
	return Object.create(null);
}

function destroy(detach) {
	this.destroy = noop;
	this.fire('destroy');
	this.set = this.get = noop;

	if (detach !== false) this._fragment.u();
	this._fragment.d();
	this._fragment = this._state = null;
}

function destroyDev(detach) {
	destroy.call(this, detach);
	this.destroy = function() {
		console.warn('Component was already destroyed');
	};
}

function _differs(a, b) {
	return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}

function _differsImmutable(a, b) {
	return a != a ? b == b : a !== b;
}

function dispatchObservers(component, group, changed, newState, oldState) {
	for (var key in group) {
		if (!changed[key]) continue;

		var newValue = newState[key];
		var oldValue = oldState[key];

		var callbacks = group[key];
		if (!callbacks) continue;

		for (var i = 0; i < callbacks.length; i += 1) {
			var callback = callbacks[i];
			if (callback.__calling) continue;

			callback.__calling = true;
			callback.call(component, newValue, oldValue);
			callback.__calling = false;
		}
	}
}

function fire(eventName, data) {
	var handlers =
		eventName in this._handlers && this._handlers[eventName].slice();
	if (!handlers) return;

	for (var i = 0; i < handlers.length; i += 1) {
		handlers[i].call(this, data);
	}
}

function get(key) {
	return key ? this._state[key] : this._state;
}

function init(component, options) {
	component._observers = { pre: blankObject(), post: blankObject() };
	component._handlers = blankObject();
	component._bind = options._bind;

	component.options = options;
	component.root = options.root || component;
	component.store = component.root.store || options.store;
}

function observe(key, callback, options) {
	var group = options && options.defer
		? this._observers.post
		: this._observers.pre;

	(group[key] || (group[key] = [])).push(callback);

	if (!options || options.init !== false) {
		callback.__calling = true;
		callback.call(this, this._state[key]);
		callback.__calling = false;
	}

	return {
		cancel: function() {
			var index = group[key].indexOf(callback);
			if (~index) group[key].splice(index, 1);
		}
	};
}

function observeDev(key, callback, options) {
	var c = (key = '' + key).search(/[.[]/);
	if (c > -1) {
		var message =
			'The first argument to component.observe(...) must be the name of a top-level property';
		if (c > 0)
			message += ", i.e. '" + key.slice(0, c) + "' rather than '" + key + "'";

		throw new Error(message);
	}

	return observe.call(this, key, callback, options);
}

function on(eventName, handler) {
	if (eventName === 'teardown') return this.on('destroy', handler);

	var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
	handlers.push(handler);

	return {
		cancel: function() {
			var index = handlers.indexOf(handler);
			if (~index) handlers.splice(index, 1);
		}
	};
}

function onDev(eventName, handler) {
	if (eventName === 'teardown') {
		console.warn(
			"Use component.on('destroy', ...) instead of component.on('teardown', ...) which has been deprecated and will be unsupported in Svelte 2"
		);
		return this.on('destroy', handler);
	}

	return on.call(this, eventName, handler);
}

function run(fn) {
	fn();
}

function set(newState) {
	this._set(assign({}, newState));
	if (this.root._lock) return;
	this.root._lock = true;
	callAll(this.root._beforecreate);
	callAll(this.root._oncreate);
	callAll(this.root._aftercreate);
	this.root._lock = false;
}

function _set(newState) {
	var oldState = this._state,
		changed = {},
		dirty = false;

	for (var key in newState) {
		if (this._differs(newState[key], oldState[key])) changed[key] = dirty = true;
	}
	if (!dirty) return;

	this._state = assign({}, oldState, newState);
	this._recompute(changed, this._state);
	if (this._bind) this._bind(changed, this._state);

	if (this._fragment) {
		dispatchObservers(this, this._observers.pre, changed, this._state, oldState);
		this._fragment.p(changed, this._state);
		dispatchObservers(this, this._observers.post, changed, this._state, oldState);
	}
}

function setDev(newState) {
	if (typeof newState !== 'object') {
		throw new Error(
			this._debugName + '.set was called without an object of data key-values to update.'
		);
	}

	this._checkReadOnly(newState);
	set.call(this, newState);
}

function callAll(fns) {
	while (fns && fns.length) fns.shift()();
}

function _mount(target, anchor) {
	this._fragment[this._fragment.i ? 'i' : 'm'](target, anchor || null);
}

function _unmount() {
	if (this._fragment) this._fragment.u();
}

function isPromise(value) {
	return value && typeof value.then === 'function';
}

var PENDING = {};
var SUCCESS = {};
var FAILURE = {};

function removeFromStore() {
	this.store._remove(this);
}

var proto = {
	destroy: destroy,
	get: get,
	fire: fire,
	observe: observe,
	on: on,
	set: set,
	teardown: destroy,
	_recompute: noop,
	_set: _set,
	_mount: _mount,
	_unmount: _unmount,
	_differs: _differs
};

var protoDev = {
	destroy: destroyDev,
	get: get,
	fire: fire,
	observe: observeDev,
	on: onDev,
	set: setDev,
	teardown: destroyDev,
	_recompute: noop,
	_set: _set,
	_mount: _mount,
	_unmount: _unmount,
	_differs: _differs
};




/***/ }),

/***/ "../../node_modules/svelte/store.js":
/*!******************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/svelte/store.js ***!
  \******************************************************************************/
/*! exports provided: Store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony import */ var _shared_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.js */ "../../node_modules/svelte/shared.js");


function Store(state, options) {
	this._observers = { pre: Object(_shared_js__WEBPACK_IMPORTED_MODULE_0__["blankObject"])(), post: Object(_shared_js__WEBPACK_IMPORTED_MODULE_0__["blankObject"])() };
	this._changeHandlers = [];
	this._dependents = [];

	this._computed = Object(_shared_js__WEBPACK_IMPORTED_MODULE_0__["blankObject"])();
	this._sortedComputedProperties = [];

	this._state = Object(_shared_js__WEBPACK_IMPORTED_MODULE_0__["assign"])({}, state);
	this._differs = options && options.immutable ? _shared_js__WEBPACK_IMPORTED_MODULE_0__["_differsImmutable"] : _shared_js__WEBPACK_IMPORTED_MODULE_0__["_differs"];
}

Object(_shared_js__WEBPACK_IMPORTED_MODULE_0__["assign"])(Store.prototype, {
	_add: function(component, props) {
		this._dependents.push({
			component: component,
			props: props
		});
	},

	_init: function(props) {
		var state = {};
		for (var i = 0; i < props.length; i += 1) {
			var prop = props[i];
			state['$' + prop] = this._state[prop];
		}
		return state;
	},

	_remove: function(component) {
		var i = this._dependents.length;
		while (i--) {
			if (this._dependents[i].component === component) {
				this._dependents.splice(i, 1);
				return;
			}
		}
	},

	_sortComputedProperties: function() {
		var computed = this._computed;
		var sorted = this._sortedComputedProperties = [];
		var cycles;
		var visited = Object(_shared_js__WEBPACK_IMPORTED_MODULE_0__["blankObject"])();

		function visit(key) {
			if (cycles[key]) {
				throw new Error('Cyclical dependency detected');
			}

			if (visited[key]) return;
			visited[key] = true;

			var c = computed[key];

			if (c) {
				cycles[key] = true;
				c.deps.forEach(visit);
				sorted.push(c);
			}
		}

		for (var key in this._computed) {
			cycles = Object(_shared_js__WEBPACK_IMPORTED_MODULE_0__["blankObject"])();
			visit(key);
		}
	},

	compute: function(key, deps, fn) {
		var store = this;
		var value;

		var c = {
			deps: deps,
			update: function(state, changed, dirty) {
				var values = deps.map(function(dep) {
					if (dep in changed) dirty = true;
					return state[dep];
				});

				if (dirty) {
					var newValue = fn.apply(null, values);
					if (store._differs(newValue, value)) {
						value = newValue;
						changed[key] = true;
						state[key] = value;
					}
				}
			}
		};

		c.update(this._state, {}, true);

		this._computed[key] = c;
		this._sortComputedProperties();
	},

	get: _shared_js__WEBPACK_IMPORTED_MODULE_0__["get"],

	observe: _shared_js__WEBPACK_IMPORTED_MODULE_0__["observe"],

	onchange: function(callback) {
		this._changeHandlers.push(callback);

		var store = this;

		return {
			cancel: function() {
				var index = store._changeHandlers.indexOf(callback);
				if (~index) store._changeHandlers.splice(index, 1);
			}
		};
	},

	set: function(newState) {
		var oldState = this._state,
			changed = this._changed = {},
			dirty = false;

		for (var key in newState) {
			if (this._computed[key]) throw new Error("'" + key + "' is a read-only property");
			if (this._differs(newState[key], oldState[key])) changed[key] = dirty = true;
		}
		if (!dirty) return;

		this._state = Object(_shared_js__WEBPACK_IMPORTED_MODULE_0__["assign"])({}, oldState, newState);

		for (var i = 0; i < this._sortedComputedProperties.length; i += 1) {
			this._sortedComputedProperties[i].update(this._state, changed);
		}

		for (var i = 0; i < this._changeHandlers.length; i += 1) {
			this._changeHandlers[i](this._state, changed);
		}

		Object(_shared_js__WEBPACK_IMPORTED_MODULE_0__["dispatchObservers"])(this, this._observers.pre, changed, this._state, oldState);

		var dependents = this._dependents.slice(); // guard against mutations
		for (var i = 0; i < dependents.length; i += 1) {
			var dependent = dependents[i];
			var componentState = {};
			dirty = false;

			for (var j = 0; j < dependent.props.length; j += 1) {
				var prop = dependent.props[j];
				if (prop in changed) {
					componentState['$' + prop] = this._state[prop];
					dirty = true;
				}
			}

			if (dirty) dependent.component.set(componentState);
		}

		Object(_shared_js__WEBPACK_IMPORTED_MODULE_0__["dispatchObservers"])(this, this._observers.post, changed, this._state, oldState);
	}
});




/***/ }),

/***/ "../../node_modules/value-equal/index.js":
/*!***********************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/value-equal/index.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function valueEqual(a, b) {
  if (a === b) return true;

  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return valueEqual(item, b[index]);
    });
  }

  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

  if (aType !== bType) return false;

  if (aType === 'object') {
    var aValue = a.valueOf();
    var bValue = b.valueOf();

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) return false;

    return aKeys.every(function (key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (valueEqual);

/***/ }),

/***/ "../../node_modules/warning/browser.js":
/*!*********************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/node_modules/warning/browser.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (true) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ })

/******/ });
});
//# sourceMappingURL=main.bundle.js.map