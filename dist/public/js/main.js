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
return (window["webpackJsonpuwhealth"] = window["webpackJsonpuwhealth"] || []).push([["main"],{

/***/ "../../@src/components lazy recursive ^\\.\\/.*\\.demo\\.html$":
/*!*************************************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/@src/components lazy ^\.\/.*\.demo\.html$ namespace object ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./button/button.demo.html": [
		"../../@src/components/button/button.demo.html",
		"shared",
		1
	],
	"./feed/feed.demo.html": [
		"../../@src/components/feed/feed.demo.html",
		"shared",
		2
	],
	"./generic/generic.demo.html": [
		"../../@src/components/generic/generic.demo.html",
		"shared",
		3
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../@src/components lazy recursive ^\\.\\/.*\\.demo\\.html$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../@src/components weak recursive ^\\.\\/.*\\.demo\\.html$":
/*!********************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/@src/components weak ^\.\/.*\.demo\.html$ ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./button/button.demo.html": "../../@src/components/button/button.demo.html",
	"./feed/feed.demo.html": "../../@src/components/feed/feed.demo.html",
	"./generic/generic.demo.html": "../../@src/components/generic/generic.demo.html"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	if(!__webpack_require__.m[id]) {
		var e = new Error("Module '" + req + "' ('" + id + "') is not available (weak dependency)");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
webpackContext.id = "../../@src/components weak recursive ^\\.\\/.*\\.demo\\.html$";
module.exports = webpackContext;

/***/ }),

/***/ "../../@src/helpers/dom-ready.js":
/*!****************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/@src/helpers/dom-ready.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return domReady; });
function domReady(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else if (document.addEventListener) {
    // Modern browsers
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    // IE <= 8
    document.attachEvent('onreadystatechange', function () {
      if (document.readyState === 'complete') {
        fn();
      }
    });
  }
}

/***/ }),

/***/ "../../@src/helpers/find-export.js":
/*!******************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/@src/helpers/find-export.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return findExport; });
function findExport(mod) {
  return mod && typeof mod === 'object' && mod.__esModule ? mod["default"] : mod;
}
;

/***/ }),

/***/ "../../@src/helpers/title-case.js":
/*!*****************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/@src/helpers/title-case.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function titleCase(str) {
  if (str) {
    return str.toLowerCase().split(' ').map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  }

  return str;
}

;
/* harmony default export */ __webpack_exports__["default"] = (titleCase);

/***/ }),

/***/ "../../@src/main.js":
/*!***************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/@src/main.js ***!
  \***************************************************************/
/*! exports provided: application, manifest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "application", function() { return application; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manifest", function() { return manifest; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var promise_polyfill_src_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! promise-polyfill/src/polyfill */ "../../node_modules/promise-polyfill/src/polyfill.js");
/* harmony import */ var _helpers_dom_ready__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helpers/dom-ready */ "../../@src/helpers/dom-ready.js");
/* harmony import */ var _modules_demo_demo_store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/modules/demo/demo.store.js */ "../../@src/modules/demo/demo.store.js");
/* harmony import */ var _modules_demo_demo_routes_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/modules/demo/demo.routes.html */ "../../@src/modules/demo/demo.routes.html");
/*Babel»*/


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var application, manifest;
/* eslint-disable compat/compat */

fetch('/public/module-map-manifest.json').then(function (r)
/*Babel»*/
{
  return r.json();
}).then(function (json)
/*Babel»*/
{
  return manifest = json;
}).catch(function (e)
/*Babel»*/
{
  return console.log(e);
});
/* eslint-enable compat/compat */

Object(_helpers_dom_ready__WEBPACK_IMPORTED_MODULE_2__["default"])(
/*Babel»*/

/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function
/*Babel»*/
_callee()
/*Babel»*/
{
  var appElement, currentRoute, currentComponent;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          appElement = document.getElementById('app');

          if (!appElement) {
            _context.next = 8;
            break;
          }

          currentRoute = window.__APP_STATE__.componentPath;
          _context.next = 5;
          return _modules_demo_demo_routes_html__WEBPACK_IMPORTED_MODULE_4__["default"].getComponent(currentRoute);

        case 5:
          currentComponent = _context.sent;
          application = new _modules_demo_demo_routes_html__WEBPACK_IMPORTED_MODULE_4__["default"]({
            hydrate: true,
            target: appElement,
            data: {
              pathname: window.location.pathname,
              innerComponent: currentComponent
            }
          });
          window.__APP__ = application;

        case 8:
          if (true) {
            __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! @/helpers/keyboard-shortcuts */ "../../@src/helpers/keyboard-shortcuts/index.js")).then(function (keyboardSC)
            /*Babel»*/
            {
              return keyboardSC.init();
            });
          }

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
})));
window.store = _modules_demo_demo_store_js__WEBPACK_IMPORTED_MODULE_3__["default"];


/***/ }),

/***/ "../../@src/modules/demo/demo.routes.html":
/*!*************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/@src/modules/demo/demo.routes.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svelte_shared_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/shared.js */ "../../node_modules/svelte/shared.js");
/* harmony import */ var _demo_store_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./demo.store.js */ "../../@src/modules/demo/demo.store.js");
/* harmony import */ var _helpers_title_case__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/helpers/title-case */ "../../@src/helpers/title-case.js");
/* harmony import */ var _helpers_find_export_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/helpers/find-export.js */ "../../@src/helpers/find-export.js");
/* harmony import */ var svelte_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! svelte-routing */ "../../node_modules/svelte-routing/index.js");
/* harmony import */ var babel_loader_svelte_routing_Route_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-loader!svelte-routing/Route.html */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/svelte-routing/Route.html");
/*Babel»*/


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
/* @src/modules/demo/demo.routes.html generated by Svelte v2.9.7 */







 // Find the initial state of the page, provided by the template

var appState = typeof window !== 'undefined' ? window.__APP_STATE__ : global.__APP_STATE__;

function data() {
  var globalState = findGlobalState();
  return (
    /*Babel»*/
    _extends({}, {
      path: '/demo/:demo',
      demoTitle: 'Demo',
      currentRoute: ''
    }, globalState)
  );
}

;

function oncreate() {
  /*Babel»*/
  var _this = this;

  var router = this.refs.router;
  _demo_store_js__WEBPACK_IMPORTED_MODULE_2__["default"].set({
    'pageTitle': Object(_helpers_title_case__WEBPACK_IMPORTED_MODULE_3__["default"])(appState.componentPath)
  });
  _demo_store_js__WEBPACK_IMPORTED_MODULE_2__["default"].set({
    'currentRoute': router.get()["pathname"]
  });
  router.on('state', function (
  /*Babel»*/
  _ref) {
    /*Babel»*/
    var changed = _ref.changed,
        current = _ref.current;

    if (changed.pathname) {
      _demo_store_js__WEBPACK_IMPORTED_MODULE_2__["default"].set({
        'currentRoute': current.pathname
      });
    }
  });
  router.on('update', function (
  /*Babel»*/
  _ref2) {
    /*Babel»*/
    var changed = _ref2.changed,
        current = _ref2.current;

    if (changed.match) {
      var match = current.match;

      _this.constructor.getComponent(match.params.demo).then(function (comp) {
        _this.set({
          'innerComponent': Object(_helpers_find_export_js__WEBPACK_IMPORTED_MODULE_4__["default"])(comp)
        });

        _demo_store_js__WEBPACK_IMPORTED_MODULE_2__["default"].set({
          'pageTitle': Object(_helpers_title_case__WEBPACK_IMPORTED_MODULE_3__["default"])(match.params.demo)
        });
        _demo_store_js__WEBPACK_IMPORTED_MODULE_2__["default"].set({
          'currentRoute': match.params.demo
        });
      });
    }
  });
}

;

function setup(DemoRouter) {
  DemoRouter.getComponent =
  /*Babel»*/

  /*#__PURE__*/
  function () {
    var _ref3 = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function
    /*Babel»*/
    _callee(componentPath)
    /*Babel»*/
    {
      var comp;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return splitRequire(componentPath).Async();

            case 2:
              comp = _context.sent;
              return _context.abrupt("return", Object(_helpers_find_export_js__WEBPACK_IMPORTED_MODULE_4__["default"])(comp));

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function (_x) {
      return _ref3.apply(this, arguments);
    };
  }();
}

;

function store_1() {
  return _demo_store_js__WEBPACK_IMPORTED_MODULE_2__["default"];
}

function splitRequire(pathname) {
  var component = function component()
  /*Babel»*/
  {
    return __webpack_require__("../../@src/components lazy recursive ^\\.\\/.*\\.demo\\.html$")("./" + pathname + '/' + pathname + '.demo.html');
  };

  var modID = function modID()
  /*Babel»*/
  {
    return /*require.resolve*/(__webpack_require__("../../@src/components weak recursive ^\\.\\/.*\\.demo\\.html$").resolve("./" + pathname + '/' + pathname + '.demo.html'));
  };

  return {
    Sync: function
    /*Babel»*/
    Sync()
    /*Babel»*/
    {
      return __webpack_require__(modID());
    },
    Async:
    /*Babel»*/
    function () {
      var _Async = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function
      /*Babel»*/
      _callee2()
      /*Babel»*/
      {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", component());

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function Async() {
        return _Async.apply(this, arguments);
      };
    }()
  };
}
/*Babel»*/


function findGlobalState() {
  return _findGlobalState.apply(this, arguments);
}
/*Babel»*/


function _findGlobalState() {
  _findGlobalState = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function
  /*Babel»*/
  _callee3()
  /*Babel»*/
  {
    var pathname, innerComponent;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!(typeof window === 'undefined')) {
              _context3.next = 8;
              break;
            }

            appState.history = Object(svelte_routing__WEBPACK_IMPORTED_MODULE_5__["createMemoryHistory"])();
            pathname = appState.componentPath;
            innerComponent = splitRequire(pathname);
            appState.innerComponent = innerComponent.Sync();
            return _context3.abrupt("return", appState);

          case 8:
            appState.history = Object(svelte_routing__WEBPACK_IMPORTED_MODULE_5__["createBrowserHistory"])();
            _context3.next = 11;
            return splitRequire(appState.componentPath).Async()["default"];

          case 11:
            appState.innerComponent = _context3.sent;
            return _context3.abrupt("return", appState);

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return _findGlobalState.apply(this, arguments);
}

var file = "src/modules/demo/demo.routes.html";

function create_main_fragment(component, ctx) {
  var title_value,
      link,
      text,
      text_1,
      text_2,
      route_updating = {};
  document.title = title_value = "→ " + (ctx.$pageTitle || ctx.demoTitle) + " demo";
  var switch_value = ctx.innerComponent;

  function switch_props(ctx) {
    var switch_instance_initial_data = {
      stylesheet: false
    };
    return {
      root: component.root,
      store: component.store,
      data: switch_instance_initial_data
    };
  }

  if (switch_value) {
    var switch_instance = new switch_value(switch_props(ctx));
  }

  var route_initial_data = {
    hydrate: true
  };

  if (ctx.pathname !== void 0) {
    route_initial_data.pathname = ctx.pathname;
    route_updating.pathname = true;
  }

  if (ctx.path !== void 0) {
    route_initial_data.path = ctx.path;
    route_updating.path = true;
  }

  var route = new babel_loader_svelte_routing_Route_html__WEBPACK_IMPORTED_MODULE_6__["default"]({
    root: component.root,
    store: component.store,
    slots: {
      default: Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_1__["createFragment"])()
    },
    data: route_initial_data,

    /*Babel»*/
    _bind: function _bind(changed, childState) {
      var newState = {};

      if (!route_updating.pathname && changed.pathname) {
        newState.pathname = childState.pathname;
      }

      if (!route_updating.path && changed.path) {
        newState.path = childState.path;
      }

      component._set(newState);

      route_updating = {};
    }
  });

  component.root._beforecreate.push(function () {
    route._bind({
      pathname: 1,
      path: 1
    }, route.get());
  });

  component.refs.router = route;
  return {
    c: function create() {
      link = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_1__["createElement"])("link");
      text = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_1__["createText"])("\n\n");
      text_1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_1__["createText"])("\n    ");
      if (switch_instance) switch_instance._fragment.c();
      text_2 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_1__["createText"])("\n");

      route._fragment.c();

      this.h();
    },
    l: function claim(nodes) {
      link = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_1__["createElement"])("link");
      text = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_1__["claimText"])(nodes, "\n\n");
      text_1 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_1__["claimText"])(nodes, "\n    ");
      if (switch_instance) switch_instance._fragment.l(nodes);
      text_2 = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_1__["claimText"])(nodes, "\n");

      route._fragment.l(nodes);

      this.h();
    },
    h: function hydrate() {
      link.rel = "stylesheet";
      link.media = "screen";
      link.href = "/public/css/demo/demo.css";
      Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_1__["addLoc"])(link, file, 2, 4, 70);
    },
    m: function mount(target, anchor) {
      Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_1__["appendNode"])(link, document.head);
      Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_1__["insertNode"])(text, target, anchor);
      Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_1__["appendNode"])(text_1, route._slotted.default);

      if (switch_instance) {
        switch_instance._mount(route._slotted.default, null);
      }

      Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_1__["appendNode"])(text_2, route._slotted.default);

      route._mount(target, anchor);
    },
    p: function update(changed, _ctx) {
      ctx = _ctx;

      if ((changed.$pageTitle || changed.demoTitle) && title_value !== (title_value = "→ " + (ctx.$pageTitle || ctx.demoTitle) + " demo")) {
        document.title = title_value;
      }

      if (switch_value !== (switch_value = ctx.innerComponent)) {
        if (switch_instance) {
          switch_instance.destroy();
        }

        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx));

          switch_instance._fragment.c();

          switch_instance._mount(text_2.parentNode, text_2);
        } else {
          switch_instance = null;
        }
      }

      var route_changes = {};

      if (!route_updating.pathname && changed.pathname) {
        route_changes.pathname = ctx.pathname;
        route_updating.pathname = ctx.pathname !== void 0;
      }

      if (!route_updating.path && changed.path) {
        route_changes.path = ctx.path;
        route_updating.path = ctx.path !== void 0;
      }

      route._set(route_changes);

      route_updating = {};
    },
    d: function destroy(detach) {
      Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_1__["detachNode"])(link);

      if (detach) {
        Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_1__["detachNode"])(text);
      }

      if (switch_instance) switch_instance.destroy();
      route.destroy(detach);
      if (component.refs.router === route) component.refs.router = null;
    }
  };
}

function Demo_routes(options) {
  /*Babel»*/
  var _this2 = this;

  this._debugName = '<Demo_routes>';
  if (!options || !options.target && !options.root) throw new Error("'target' is a required option");
  Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_1__["init"])(this, options);
  this.store = store_1();
  this.refs = {};
  this._state = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_1__["assign"])(Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_1__["assign"])(this.store._init(["pageTitle"]), data()), options.data);

  this.store._add(this, ["pageTitle"]);

  if (!('$pageTitle' in this._state)) console.warn("<Demo_routes> was created without expected data property '$pageTitle'");
  if (!('demoTitle' in this._state)) console.warn("<Demo_routes> was created without expected data property 'demoTitle'");
  if (!('pathname' in this._state)) console.warn("<Demo_routes> was created without expected data property 'pathname'");
  if (!('path' in this._state)) console.warn("<Demo_routes> was created without expected data property 'path'");
  if (!('innerComponent' in this._state)) console.warn("<Demo_routes> was created without expected data property 'innerComponent'");
  this._intro = true;
  this._handlers.destroy = [svelte_shared_js__WEBPACK_IMPORTED_MODULE_1__["removeFromStore"]];

  if (!options.root) {
    this._oncreate = [];
    this._beforecreate = [];
    this._aftercreate = [];
  }

  this._fragment = create_main_fragment(this, this._state);

  this.root._oncreate.push(function () {
    oncreate.call(_this2);

    _this2.fire("update", {
      changed: Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_1__["assignTrue"])({}, _this2._state),
      current: _this2._state
    });
  });

  if (options.target) {
    var nodes = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_1__["children"])(options.target);
    options.hydrate ? this._fragment.l(nodes) : this._fragment.c();
    nodes.forEach(svelte_shared_js__WEBPACK_IMPORTED_MODULE_1__["detachNode"]);

    this._mount(options.target, options.anchor);

    this._lock = true;
    Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_1__["callAll"])(this._beforecreate);
    Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_1__["callAll"])(this._oncreate);
    Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_1__["callAll"])(this._aftercreate);
    this._lock = false;
  }
}

Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_1__["assign"])(Demo_routes.prototype, svelte_shared_js__WEBPACK_IMPORTED_MODULE_1__["protoDev"]);

Demo_routes.prototype._checkReadOnly = function _checkReadOnly(newState) {};

setup(Demo_routes);
/* harmony default export */ __webpack_exports__["default"] = (Demo_routes);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../@src/modules/demo/demo.store.js":
/*!**********************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/@src/modules/demo/demo.store.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/store.js */ "../../node_modules/svelte/store.js");

var store = new svelte_store_js__WEBPACK_IMPORTED_MODULE_0__["Store"]({
  pageTitle: "Demo"
});
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "../../node_modules/@babel/runtime/regenerator/index.js":
/*!***************************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/@babel/runtime/regenerator/index.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "../../node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/svelte-routing/Route.html":
/*!******************************************************************************************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/babel-loader/lib!/Users/lee/Sites/Other/Front-End-Framework/node_modules/svelte-routing/Route.html ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/shared.js */ "../../node_modules/svelte/shared.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "../../node_modules/svelte-routing/index.js");
/* node_modules/svelte-routing/Route.html generated by Svelte v2.9.7 */



function match(
/*Babel»*/
_ref) {
  /*Babel»*/
  var pathname = _ref.pathname,
      path = _ref.path,
      exact = _ref.exact,
      strict = _ref.strict;
  return Object(_index_js__WEBPACK_IMPORTED_MODULE_1__["matchPath"])(pathname, {
    path: path,
    exact: exact,
    strict: strict
  });
}

function data() {
  var history = Object(_index_js__WEBPACK_IMPORTED_MODULE_1__["getHistory"])();
  return {
    pathname: history.location.pathname,
    path: '',
    exact: false,
    strict: false,
    component: null,
    history: history
  };
}

;

function oncreate() {
  /*Babel»*/
  var _this = this;

  var _this$get = this.get(),
      history = _this$get.history;

  this.unlisten = history.listen(function (location) {
    /*Babel»*/
    var pathname = location.pathname;

    _this.set({
      pathname: pathname
    });
  });
}

;

function ondestroy() {
  this.unlisten();
}

;
var file = "node_modules/svelte-routing/Route.html";

function create_main_fragment(component, ctx) {
  var if_block_anchor;
  var if_block = ctx.match !== null && create_if_block(component, ctx);
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
    p: function update(changed, ctx) {
      if (ctx.match !== null) {
        if (if_block) {
          if_block.p(changed, ctx);
        } else {
          if_block = create_if_block(component, ctx);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d: function destroy(detach) {
      if (if_block) if_block.d(detach);

      if (detach) {
        Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(if_block_anchor);
      }
    }
  };
} // (2:2) {#if component !== null}


function create_if_block_1(component, ctx) {
  var switch_instance_anchor;
  var switch_value = ctx.component;

  function switch_props(ctx) {
    var switch_instance_initial_data = {
      match: ctx.match
    };
    return {
      root: component.root,
      store: component.store,
      data: switch_instance_initial_data
    };
  }

  if (switch_value) {
    var switch_instance = new switch_value(switch_props(ctx));
  }

  return {
    c: function create() {
      if (switch_instance) switch_instance._fragment.c();
      switch_instance_anchor = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createComment"])();
    },
    l: function claim(nodes) {
      if (switch_instance) switch_instance._fragment.l(nodes);
      switch_instance_anchor = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createComment"])();
    },
    m: function mount(target, anchor) {
      if (switch_instance) {
        switch_instance._mount(target, anchor);
      }

      Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insertNode"])(switch_instance_anchor, target, anchor);
    },
    p: function update(changed, ctx) {
      var switch_instance_changes = {};
      if (changed.match) switch_instance_changes.match = ctx.match;

      if (switch_value !== (switch_value = ctx.component)) {
        if (switch_instance) {
          switch_instance.destroy();
        }

        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx));

          switch_instance._fragment.c();

          switch_instance._mount(switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance._set(switch_instance_changes);
      }
    },
    d: function destroy(detach) {
      if (detach) {
        Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(switch_instance_anchor);
      }

      if (switch_instance) switch_instance.destroy(detach);
    }
  };
} // (4:2) {:else}


function create_if_block_2(component, ctx) {
  var slot_content_default = component._slotted.default,
      slot_content_default_before,
      slot_content_default_after;
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
    d: function destroy(detach) {
      if (slot_content_default) {
        Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["reinsertBetween"])(slot_content_default_before, slot_content_default_after, slot_content_default);
        Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(slot_content_default_before);
        Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(slot_content_default_after);
      }
    }
  };
} // (1:0) {#if match !== null}


function create_if_block(component, ctx) {
  var if_block_anchor;

  function select_block_type(ctx) {
    if (ctx.component !== null) return create_if_block_1;
    return create_if_block_2;
  }

  var current_block_type = select_block_type(ctx);
  var if_block = current_block_type(component, ctx);
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
    p: function update(changed, ctx) {
      if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
        if_block.p(changed, ctx);
      } else {
        if_block.d(1);
        if_block = current_block_type(component, ctx);
        if_block.c();
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    d: function destroy(detach) {
      if_block.d(detach);

      if (detach) {
        Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(if_block_anchor);
      }
    }
  };
}

function Route(options) {
  /*Babel»*/
  var _this2 = this;

  this._debugName = '<Route>';
  if (!options || !options.target && !options.root) throw new Error("'target' is a required option");
  Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options);
  this._state = Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["assign"])(data(), options.data);

  this._recompute({
    pathname: 1,
    path: 1,
    exact: 1,
    strict: 1
  }, this._state);

  if (!('pathname' in this._state)) console.warn("<Route> was created without expected data property 'pathname'");
  if (!('path' in this._state)) console.warn("<Route> was created without expected data property 'path'");
  if (!('exact' in this._state)) console.warn("<Route> was created without expected data property 'exact'");
  if (!('strict' in this._state)) console.warn("<Route> was created without expected data property 'strict'");
  if (!('component' in this._state)) console.warn("<Route> was created without expected data property 'component'");
  this._intro = true;
  this._handlers.destroy = [ondestroy];
  this._slotted = options.slots || {};

  if (!options.root) {
    this._oncreate = [];
    this._beforecreate = [];
    this._aftercreate = [];
  }

  this.slots = {};
  this._fragment = create_main_fragment(this, this._state);

  this.root._oncreate.push(function () {
    oncreate.call(_this2);

    _this2.fire("update", {
      changed: Object(svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["assignTrue"])({}, _this2._state),
      current: _this2._state
    });
  });

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
    if (this._differs(state.match, state.match = match(state))) changed.match = true;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Route);

/***/ }),

/***/ "../../node_modules/history/es/DOMUtils.js":
/*!**************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/history/es/DOMUtils.js ***!
  \**************************************************************************************/
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
/*!*******************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/history/es/LocationUtils.js ***!
  \*******************************************************************************************/
/*! exports provided: createLocation, locationsAreEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLocation", function() { return createLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locationsAreEqual", function() { return locationsAreEqual; });
/* harmony import */ var resolve_pathname__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! resolve-pathname */ "../../node_modules/resolve-pathname/index.js");
/* harmony import */ var value_equal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! value-equal */ "../../node_modules/value-equal/index.js");
/* harmony import */ var _PathUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PathUtils */ "../../node_modules/history/es/PathUtils.js");
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};




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
/*!***************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/history/es/PathUtils.js ***!
  \***************************************************************************************/
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
/*!**************************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/history/es/createBrowserHistory.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! warning */ "../../node_modules/warning/browser.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! invariant */ "../../node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LocationUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LocationUtils */ "../../node_modules/history/es/LocationUtils.js");
/* harmony import */ var _PathUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PathUtils */ "../../node_modules/history/es/PathUtils.js");
/* harmony import */ var _createTransitionManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createTransitionManager */ "../../node_modules/history/es/createTransitionManager.js");
/* harmony import */ var _DOMUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DOMUtils */ "../../node_modules/history/es/DOMUtils.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};







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
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
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
  var allKeys = [initialLocation.key]; // Public interface

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
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
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
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
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
/*!***********************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/history/es/createHashHistory.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! warning */ "../../node_modules/warning/browser.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! invariant */ "../../node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LocationUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LocationUtils */ "../../node_modules/history/es/LocationUtils.js");
/* harmony import */ var _PathUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PathUtils */ "../../node_modules/history/es/PathUtils.js");
/* harmony import */ var _createTransitionManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createTransitionManager */ "../../node_modules/history/es/createTransitionManager.js");
/* harmony import */ var _DOMUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DOMUtils */ "../../node_modules/history/es/DOMUtils.js");
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};







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
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
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
  }; // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["createPath"])(initialLocation)]; // Public interface

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
        setState({
          action: action,
          location: location
        });
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
      setState({
        action: action,
        location: location
      });
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
/*!*************************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/history/es/createMemoryHistory.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! warning */ "../../node_modules/warning/browser.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PathUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PathUtils */ "../../node_modules/history/es/PathUtils.js");
/* harmony import */ var _LocationUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LocationUtils */ "../../node_modules/history/es/LocationUtils.js");
/* harmony import */ var _createTransitionManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createTransitionManager */ "../../node_modules/history/es/createTransitionManager.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};






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
  }); // Public interface

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
      setState({
        action: action,
        location: location
      });
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
/*!*****************************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/history/es/createTransitionManager.js ***!
  \*****************************************************************************************************/
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

/***/ "../../node_modules/invariant/browser.js":
/*!************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/invariant/browser.js ***!
  \************************************************************************************/
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

var invariant = function invariant(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;

    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame

    throw error;
  }
};

module.exports = invariant;

/***/ }),

/***/ "../../node_modules/path-to-regexp/index.js":
/*!***************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/path-to-regexp/index.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp;
module.exports.parse = parse;
module.exports.compile = compile;
module.exports.tokensToFunction = tokensToFunction;
module.exports.tokensToRegExp = tokensToRegExp;
/**
 * Default configs.
 */

var DEFAULT_DELIMITER = '/';
var DEFAULT_DELIMITERS = './';
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

var PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?"]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined]
'(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || DEFAULT_DELIMITER;
  var delimiters = options && options.delimiters || DEFAULT_DELIMITERS;
  var pathEscaped = false;
  var res;

  while ((res = PATH_REGEXP.exec(str)) !== null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      pathEscaped = true;
      continue;
    }

    var prev = '';
    var next = str[index];
    var name = res[2];
    var capture = res[3];
    var group = res[4];
    var modifier = res[5];

    if (!pathEscaped && path.length) {
      var k = path.length - 1;

      if (delimiters.indexOf(path[k]) > -1) {
        prev = path[k];
        path = path.slice(0, k);
      }
    } // Push the current path onto the tokens.


    if (path) {
      tokens.push(path);
      path = '';
      pathEscaped = false;
    }

    var partial = prev !== '' && next !== undefined && next !== prev;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = prev || defaultDelimiter;
    var pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prev,
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      pattern: pattern ? escapeGroup(pattern) : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Push any remaining characters.


  if (path || index < str.length) {
    tokens.push(path + str.substr(index));
  }

  return tokens;
}
/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */


function compile(str, options) {
  return tokensToFunction(parse(str, options));
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (data, options) {
    var path = '';
    var encode = options && options.encode || encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      var value = data ? data[token.name] : undefined;
      var segment;

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but got array');
        }

        if (value.length === 0) {
          if (token.optional) continue;
          throw new TypeError('Expected "' + token.name + '" to not be empty');
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j], token);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '"');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        segment = encode(String(value), token);

        if (!matches[i].test(segment)) {
          throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but got "' + segment + '"');
        }

        path += token.prefix + segment;
        continue;
      }

      if (token.optional) {
        // Prepend partial segment prefixes.
        if (token.partial) path += token.prefix;
        continue;
      }

      throw new TypeError('Expected "' + token.name + '" to be ' + (token.repeat ? 'an array' : 'a string'));
    }

    return path;
  };
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {Array=}  keys
 * @return {!RegExp}
 */


function regexpToRegexp(path, keys) {
  if (!keys) return path; // Use a negative lookahead to match only capturing groups.

  var groups = path.source.match(/\((?!\?)/g);

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
      });
    }
  }

  return path;
}
/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */


function arrayToRegexp(path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  return new RegExp('(?:' + parts.join('|') + ')', flags(options));
}
/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */


function stringToRegexp(path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}  tokens
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */


function tokensToRegExp(tokens, keys, options) {
  options = options || {};
  var strict = options.strict;
  var end = options.end !== false;
  var delimiter = escapeString(options.delimiter || DEFAULT_DELIMITER);
  var delimiters = options.delimiters || DEFAULT_DELIMITERS;
  var endsWith = [].concat(options.endsWith || []).map(escapeString).concat('$').join('|');
  var route = '';
  var isEndDelimited = tokens.length === 0; // Iterate over the tokens and create our regexp string.

  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
      isEndDelimited = i === tokens.length - 1 && delimiters.indexOf(token[token.length - 1]) > -1;
    } else {
      var prefix = escapeString(token.prefix);
      var capture = token.repeat ? '(?:' + token.pattern + ')(?:' + prefix + '(?:' + token.pattern + '))*' : token.pattern;
      if (keys) keys.push(token);

      if (token.optional) {
        if (token.partial) {
          route += prefix + '(' + capture + ')?';
        } else {
          route += '(?:' + prefix + '(' + capture + '))?';
        }
      } else {
        route += prefix + '(' + capture + ')';
      }
    }
  }

  if (end) {
    if (!strict) route += '(?:' + delimiter + ')?';
    route += endsWith === '$' ? '$' : '(?=' + endsWith + ')';
  } else {
    if (!strict) route += '(?:' + delimiter + '(?=' + endsWith + '))?';
    if (!isEndDelimited) route += '(?=' + delimiter + '|' + endsWith + ')';
  }

  return new RegExp('^' + route, flags(options));
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


function pathToRegexp(path, keys, options) {
  if (path instanceof RegExp) {
    return regexpToRegexp(path, keys);
  }

  if (Array.isArray(path)) {
    return arrayToRegexp(
    /** @type {!Array} */
    path, keys, options);
  }

  return stringToRegexp(
  /** @type {string} */
  path, keys, options);
}

/***/ }),

/***/ "../../node_modules/process/browser.js":
/*!**********************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/process/browser.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "../../node_modules/promise-polyfill/src/index.js":
/*!*********************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/promise-polyfill/src/index.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(setImmediate) {// Store setTimeout reference so promise-polyfill will be unaffected by
// other code modifying setTimeout (like sinon.useFakeTimers())
var setTimeoutFunc = setTimeout;

function noop() {} // Polyfill for Function.prototype.bind


function bind(fn, thisArg) {
  return function () {
    fn.apply(thisArg, arguments);
  };
}

function Promise(fn) {
  if (!(this instanceof Promise)) throw new TypeError('Promises must be constructed via new');
  if (typeof fn !== 'function') throw new TypeError('not a function');
  this._state = 0;
  this._handled = false;
  this._value = undefined;
  this._deferreds = [];
  doResolve(fn, this);
}

function handle(self, deferred) {
  while (self._state === 3) {
    self = self._value;
  }

  if (self._state === 0) {
    self._deferreds.push(deferred);

    return;
  }

  self._handled = true;

  Promise._immediateFn(function () {
    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;

    if (cb === null) {
      (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
      return;
    }

    var ret;

    try {
      ret = cb(self._value);
    } catch (e) {
      reject(deferred.promise, e);
      return;
    }

    resolve(deferred.promise, ret);
  });
}

function resolve(self, newValue) {
  try {
    // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
    if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');

    if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
      var then = newValue.then;

      if (newValue instanceof Promise) {
        self._state = 3;
        self._value = newValue;
        finale(self);
        return;
      } else if (typeof then === 'function') {
        doResolve(bind(then, newValue), self);
        return;
      }
    }

    self._state = 1;
    self._value = newValue;
    finale(self);
  } catch (e) {
    reject(self, e);
  }
}

function reject(self, newValue) {
  self._state = 2;
  self._value = newValue;
  finale(self);
}

function finale(self) {
  if (self._state === 2 && self._deferreds.length === 0) {
    Promise._immediateFn(function () {
      if (!self._handled) {
        Promise._unhandledRejectionFn(self._value);
      }
    });
  }

  for (var i = 0, len = self._deferreds.length; i < len; i++) {
    handle(self, self._deferreds[i]);
  }

  self._deferreds = null;
}

function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}
/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */


function doResolve(fn, self) {
  var done = false;

  try {
    fn(function (value) {
      if (done) return;
      done = true;
      resolve(self, value);
    }, function (reason) {
      if (done) return;
      done = true;
      reject(self, reason);
    });
  } catch (ex) {
    if (done) return;
    done = true;
    reject(self, ex);
  }
}

Promise.prototype['catch'] = function (onRejected) {
  return this.then(null, onRejected);
};

Promise.prototype.then = function (onFulfilled, onRejected) {
  var prom = new this.constructor(noop);
  handle(this, new Handler(onFulfilled, onRejected, prom));
  return prom;
};

Promise.prototype['finally'] = function (callback) {
  var constructor = this.constructor;
  return this.then(function (value) {
    return constructor.resolve(callback()).then(function () {
      return value;
    });
  }, function (reason) {
    return constructor.resolve(callback()).then(function () {
      return constructor.reject(reason);
    });
  });
};

Promise.all = function (arr) {
  return new Promise(function (resolve, reject) {
    if (!arr || typeof arr.length === 'undefined') throw new TypeError('Promise.all accepts an array');
    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      try {
        if (val && (typeof val === 'object' || typeof val === 'function')) {
          var then = val.then;

          if (typeof then === 'function') {
            then.call(val, function (val) {
              res(i, val);
            }, reject);
            return;
          }
        }

        args[i] = val;

        if (--remaining === 0) {
          resolve(args);
        }
      } catch (ex) {
        reject(ex);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.resolve = function (value) {
  if (value && typeof value === 'object' && value.constructor === Promise) {
    return value;
  }

  return new Promise(function (resolve) {
    resolve(value);
  });
};

Promise.reject = function (value) {
  return new Promise(function (resolve, reject) {
    reject(value);
  });
};

Promise.race = function (values) {
  return new Promise(function (resolve, reject) {
    for (var i = 0, len = values.length; i < len; i++) {
      values[i].then(resolve, reject);
    }
  });
}; // Use polyfill for setImmediate for performance gains


Promise._immediateFn = typeof setImmediate === 'function' && function (fn) {
  setImmediate(fn);
} || function (fn) {
  setTimeoutFunc(fn, 0);
};

Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
  if (typeof console !== 'undefined' && console) {
    console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Promise);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../timers-browserify/main.js */ "../../node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "../../node_modules/promise-polyfill/src/polyfill.js":
/*!************************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/promise-polyfill/src/polyfill.js ***!
  \************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "../../node_modules/promise-polyfill/src/index.js");


var globalNS = function () {
  // the only reliable means to get the global object is
  // `Function('return this')()`
  // However, this causes CSP violations in Chrome apps.
  if (typeof self !== 'undefined') {
    return self;
  }

  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof global !== 'undefined') {
    return global;
  }

  throw new Error('unable to locate global object');
}();

if (!globalNS.Promise) {
  globalNS.Promise = _index__WEBPACK_IMPORTED_MODULE_0__["default"];
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/regenerator-runtime/runtime-module.js":
/*!*****************************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/regenerator-runtime/runtime-module.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "../../node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "../../node_modules/regenerator-runtime/runtime.js":
/*!**********************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/regenerator-runtime/runtime.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ "../../node_modules/resolve-pathname/index.js":
/*!*****************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/resolve-pathname/index.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
} // About 1.5x faster than the two-arg version of Array#splice()


function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
} // This implementation is based heavily on node's url.parse


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
  }
  if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');
  var result = fromParts.join('/');
  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (resolvePathname);

/***/ }),

/***/ "../../node_modules/setimmediate/setImmediate.js":
/*!********************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/setimmediate/setImmediate.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
  "use strict";

  if (global.setImmediate) {
    return;
  }

  var nextHandle = 1; // Spec says greater than zero

  var tasksByHandle = {};
  var currentlyRunningATask = false;
  var doc = global.document;
  var registerImmediate;

  function setImmediate(callback) {
    // Callback can either be a function or a string
    if (typeof callback !== "function") {
      callback = new Function("" + callback);
    } // Copy function arguments


    var args = new Array(arguments.length - 1);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i + 1];
    } // Store and register the task


    var task = {
      callback: callback,
      args: args
    };
    tasksByHandle[nextHandle] = task;
    registerImmediate(nextHandle);
    return nextHandle++;
  }

  function clearImmediate(handle) {
    delete tasksByHandle[handle];
  }

  function run(task) {
    var callback = task.callback;
    var args = task.args;

    switch (args.length) {
      case 0:
        callback();
        break;

      case 1:
        callback(args[0]);
        break;

      case 2:
        callback(args[0], args[1]);
        break;

      case 3:
        callback(args[0], args[1], args[2]);
        break;

      default:
        callback.apply(undefined, args);
        break;
    }
  }

  function runIfPresent(handle) {
    // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
    // So if we're currently running a task, we'll need to delay this invocation.
    if (currentlyRunningATask) {
      // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
      // "too much recursion" error.
      setTimeout(runIfPresent, 0, handle);
    } else {
      var task = tasksByHandle[handle];

      if (task) {
        currentlyRunningATask = true;

        try {
          run(task);
        } finally {
          clearImmediate(handle);
          currentlyRunningATask = false;
        }
      }
    }
  }

  function installNextTickImplementation() {
    registerImmediate = function
    /*Babel»*/
    registerImmediate(handle) {
      process.nextTick(function () {
        runIfPresent(handle);
      });
    };
  }

  function canUsePostMessage() {
    // The test against `importScripts` prevents this implementation from being installed inside a web worker,
    // where `global.postMessage` means something completely different and can't be used for this purpose.
    if (global.postMessage && !global.importScripts) {
      var postMessageIsAsynchronous = true;
      var oldOnMessage = global.onmessage;

      global.onmessage = function () {
        postMessageIsAsynchronous = false;
      };

      global.postMessage("", "*");
      global.onmessage = oldOnMessage;
      return postMessageIsAsynchronous;
    }
  }

  function installPostMessageImplementation() {
    // Installs an event handler on `global` for the `message` event: see
    // * https://developer.mozilla.org/en/DOM/window.postMessage
    // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
    var messagePrefix = "setImmediate$" + Math.random() + "$";

    var onGlobalMessage = function onGlobalMessage(event) {
      if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
        runIfPresent(+event.data.slice(messagePrefix.length));
      }
    };

    if (global.addEventListener) {
      global.addEventListener("message", onGlobalMessage, false);
    } else {
      global.attachEvent("onmessage", onGlobalMessage);
    }

    registerImmediate = function
    /*Babel»*/
    registerImmediate(handle) {
      global.postMessage(messagePrefix + handle, "*");
    };
  }

  function installMessageChannelImplementation() {
    var channel = new MessageChannel();

    channel.port1.onmessage = function (event) {
      var handle = event.data;
      runIfPresent(handle);
    };

    registerImmediate = function
    /*Babel»*/
    registerImmediate(handle) {
      channel.port2.postMessage(handle);
    };
  }

  function installReadyStateChangeImplementation() {
    var html = doc.documentElement;

    registerImmediate = function
    /*Babel»*/
    registerImmediate(handle) {
      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var script = doc.createElement("script");

      script.onreadystatechange = function () {
        runIfPresent(handle);
        script.onreadystatechange = null;
        html.removeChild(script);
        script = null;
      };

      html.appendChild(script);
    };
  }

  function installSetTimeoutImplementation() {
    registerImmediate = function
    /*Babel»*/
    registerImmediate(handle) {
      setTimeout(runIfPresent, 0, handle);
    };
  } // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.


  var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
  attachTo = attachTo && attachTo.setTimeout ? attachTo : global; // Don't get fooled by e.g. browserify environments.

  if ({}.toString.call(global.process) === "[object process]") {
    // For Node.js before 0.9
    installNextTickImplementation();
  } else if (canUsePostMessage()) {
    // For non-IE10 modern browsers
    installPostMessageImplementation();
  } else if (global.MessageChannel) {
    // For web workers, where supported
    installMessageChannelImplementation();
  } else if (doc && "onreadystatechange" in doc.createElement("script")) {
    // For IE 6–8
    installReadyStateChangeImplementation();
  } else {
    // For older browsers
    installSetTimeoutImplementation();
  }

  attachTo.setImmediate = setImmediate;
  attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "../../node_modules/svelte-routing/index.js":
/*!***************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/svelte-routing/index.js ***!
  \***************************************************************************************/
/*! exports provided: matchPath, createMemoryHistory, createHashHistory, createBrowserHistory, getHistory, isModifiedEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMemoryHistory", function() { return createMemoryHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHashHistory", function() { return createHashHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBrowserHistory", function() { return createBrowserHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHistory", function() { return getHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isModifiedEvent", function() { return isModifiedEvent; });
/* harmony import */ var history_es_createMemoryHistory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! history/es/createMemoryHistory */ "../../node_modules/history/es/createMemoryHistory.js");
/* harmony import */ var history_es_createHashHistory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! history/es/createHashHistory */ "../../node_modules/history/es/createHashHistory.js");
/* harmony import */ var history_es_createBrowserHistory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! history/es/createBrowserHistory */ "../../node_modules/history/es/createBrowserHistory.js");
/* harmony import */ var _matchPath_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./matchPath.js */ "../../node_modules/svelte-routing/matchPath.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return _matchPath_js__WEBPACK_IMPORTED_MODULE_3__["matchPath"]; });




var history;

var createMemoryHistory = function createMemoryHistory()
/*Babel»*/
{
  return history = Object(history_es_createMemoryHistory__WEBPACK_IMPORTED_MODULE_0__["default"])();
};

var createHashHistory = function createHashHistory()
/*Babel»*/
{
  return history = Object(history_es_createHashHistory__WEBPACK_IMPORTED_MODULE_1__["default"])();
};

var createBrowserHistory = function createBrowserHistory()
/*Babel»*/
{
  return history = Object(history_es_createBrowserHistory__WEBPACK_IMPORTED_MODULE_2__["default"])();
};

var getHistory = function getHistory()
/*Babel»*/
{
  return history;
};

var isModifiedEvent = function isModifiedEvent(event) {
  return Boolean(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};




/***/ }),

/***/ "../../node_modules/svelte-routing/matchPath.js":
/*!*******************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/svelte-routing/matchPath.js ***!
  \*******************************************************************************************/
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

var patternCache = {};
var cacheLimit = 10000;
var cacheCount = 0;

var compilePath = function compilePath(pattern, options) {
  var cacheKey =
  /*Babel»*/
  "" + options.end + options.strict + options.sensitive;
  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

  if (cache[pattern]) {
    return cache[pattern];
  }

  var keys = [];
  var re = path_to_regexp__WEBPACK_IMPORTED_MODULE_0___default()(pattern, keys, options);
  var compiledPattern = {
    re: re,
    keys: keys
  };

  if (cacheCount < cacheLimit) {
    cache[pattern] = compiledPattern;
    cacheCount++;
  }

  return compiledPattern;
};

var matchPath = function matchPath(pathname, options) {
  /*Babel»*/
  if (options === void 0) {
    options = {};
  }

  if (typeof options === 'string') {
    options = {
      path: options
    };
  }

  /*Babel»*/
  var _options = options,
      _options$path = _options.path,
      path = _options$path === void 0 ? '/' : _options$path,
      _options$exact = _options.exact,
      exact = _options$exact === void 0 ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === void 0 ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === void 0 ? false : _options$sensitive;

  /*Babel»*/
  var _compilePath = compilePath(path, {
    end: exact,
    strict: strict,
    sensitive: sensitive
  }),
      re = _compilePath.re,
      keys = _compilePath.keys;

  var match = re.exec(pathname);

  if (!match) {
    return null;
  }

  /*Babel»*/
  var url = match[0],
      values = match.slice(1);
  var isExact = pathname === url;

  if (exact && !isExact) {
    return null;
  }

  return {
    path: path,
    // The path pattern used to match
    url: path === '/' && url === '' ? '/' : url,
    // The matched portion of the URL
    isExact: isExact,
    // Whether or not we matched exactly
    params: keys.reduce(function (memo, key, index) {
      memo[key.name] = values[index];
      return memo;
    }, {})
  };
};



/***/ }),

/***/ "../../node_modules/svelte/shared.js":
/*!********************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/svelte/shared.js ***!
  \********************************************************************************/
/*! exports provided: blankObject, destroy, destroyDev, _differs, _differsImmutable, fire, get, init, on, run, set, _set, setDev, callAll, _mount, PENDING, SUCCESS, FAILURE, removeFromStore, proto, protoDev, wrapAnimation, fixPosition, handlePromise, appendNode, insertNode, detachNode, detachBetween, detachBefore, detachAfter, reinsertBetween, reinsertChildren, reinsertAfter, reinsertBefore, destroyEach, createFragment, createElement, createSvgElement, createText, createComment, addListener, removeListener, setAttribute, setAttributes, removeAttribute, setXlinkAttribute, getBindingGroupValue, toNumber, timeRangesToArray, children, claimElement, claimText, setInputType, setStyle, selectOption, selectOptions, selectValue, selectMultipleValue, addResizeListener, destroyBlock, outroAndDestroyBlock, fixAndOutroAndDestroyBlock, updateKeyedEach, measure, animate, getSpreadUpdate, spread, escaped, escape, each, missingComponent, validateSsrComponent, linear, generateRule, hash, wrapTransition, outros, groupOutros, transitionManager, noop, assign, assignTrue, isPromise, callAfter, addLoc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blankObject", function() { return blankObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return destroy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroyDev", function() { return destroyDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_differs", function() { return _differs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_differsImmutable", function() { return _differsImmutable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fire", function() { return fire; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "run", function() { return run; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_set", function() { return _set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDev", function() { return setDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callAll", function() { return callAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_mount", function() { return _mount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PENDING", function() { return PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUCCESS", function() { return SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAILURE", function() { return FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFromStore", function() { return removeFromStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proto", function() { return proto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "protoDev", function() { return protoDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapAnimation", function() { return wrapAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixPosition", function() { return fixPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handlePromise", function() { return handlePromise; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAttributes", function() { return setAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAttribute", function() { return removeAttribute; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addResizeListener", function() { return addResizeListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroyBlock", function() { return destroyBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outroAndDestroyBlock", function() { return outroAndDestroyBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixAndOutroAndDestroyBlock", function() { return fixAndOutroAndDestroyBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateKeyedEach", function() { return updateKeyedEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "measure", function() { return measure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animate", function() { return animate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpreadUpdate", function() { return getSpreadUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spread", function() { return spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escaped", function() { return escaped; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escape", function() { return escape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "each", function() { return each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "missingComponent", function() { return missingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateSsrComponent", function() { return validateSsrComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linear", function() { return linear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRule", function() { return generateRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hash", function() { return hash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapTransition", function() { return wrapTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outros", function() { return outros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupOutros", function() { return groupOutros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitionManager", function() { return transitionManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignTrue", function() { return assignTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return isPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callAfter", function() { return callAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLoc", function() { return addLoc; });
/*Babel»*/ function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function noop() {}

function assign(tar, src) {
  for (var k in src)
  /*Babel»*/
  {
    tar[k] = src[k];
  }

  return tar;
}

function assignTrue(tar, src) {
  for (var k in src)
  /*Babel»*/
  {
    tar[k] = 1;
  }

  return tar;
}

function isPromise(value) {
  return value && typeof value.then === 'function';
}

function callAfter(fn, i) {
  if (i === 0) fn();
  return function () {
    if (! --i) fn();
  };
}

function addLoc(element, file, line, column, char) {
  element.__svelte_meta = {
    loc: {
      file: file,
      line: line,
      column: column,
      char: char
    }
  };
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
  while (parent.firstChild)
  /*Babel»*/
  {
    target.appendChild(parent.firstChild);
  }
}

function reinsertAfter(before, target) {
  while (before.nextSibling)
  /*Babel»*/
  {
    target.appendChild(before.nextSibling);
  }
}

function reinsertBefore(after, target) {
  var parent = after.parentNode;

  while (parent.firstChild !== after)
  /*Babel»*/
  {
    target.appendChild(parent.firstChild);
  }
}

function destroyEach(iterations, detach) {
  for (var i = 0; i < iterations.length; i += 1) {
    if (iterations[i]) iterations[i].d(detach);
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

function setAttributes(node, attributes) {
  for (var key in attributes) {
    if (key in node) {
      node[key] = attributes[key];
    } else {
      if (attributes[key] === undefined) removeAttribute(node, key);else setAttribute(node, key, attributes[key]);
    }
  }
}

function removeAttribute(node, attribute) {
  node.removeAttribute(attribute);
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
    array.push({
      start: ranges.start(i),
      end: ranges.end(i)
    });
  }

  return array;
}

function children(element) {
  return Array.from(element.childNodes);
}

function claimElement(nodes, name, attributes, svg) {
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

function claimText(nodes, data) {
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
  return [].map.call(select.querySelectorAll(':checked'), function (option) {
    return option.__value;
  });
}

function addResizeListener(element, fn) {
  if (getComputedStyle(element).position === 'static') {
    element.style.position = 'relative';
  }

  var object = document.createElement('object');
  object.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;');
  object.type = 'text/html';
  var win;

  object.onload = function () {
    win = object.contentDocument.defaultView;
    win.addEventListener('resize', fn);
  };

  if (/Trident/.test(navigator.userAgent)) {
    element.appendChild(object);
    object.data = 'about:blank';
  } else {
    object.data = 'about:blank';
    element.appendChild(object);
  }

  return {
    cancel: function
    /*Babel»*/
    cancel() {
      win && win.removeEventListener('resize', fn);
      element.removeChild(object);
    }
  };
}

function linear(t) {
  return t;
}

function generateRule(
/*Babel»*/
_ref, ease, fn) {
  /*Babel»*/
  var a = _ref.a,
      b = _ref.b,
      delta = _ref.delta,
      duration = _ref.duration;
  var step = 16.666 / duration;
  var keyframes = '{\n';

  for (var p = 0; p <= 1; p += step) {
    var t = a + delta * ease(p);
    keyframes += p * 100 +
    /*Babel»*/
    ("%{" + fn(t, 1 - t) + "}\n");
  }

  return keyframes +
  /*Babel»*/
  ("100% {" + fn(b, 1 - b) + "}\n}");
} // https://github.com/darkskyapp/string-hash/blob/master/index.js


function hash(str) {
  var hash = 5381;
  var i = str.length;

  while (i--)
  /*Babel»*/
  {
    hash = (hash << 5) - hash ^ str.charCodeAt(i);
  }

  return hash >>> 0;
}

function wrapTransition(component, node, fn, params, intro) {
  var obj = fn(node, params);
  var duration;
  var ease;
  var cssText;
  var initialised = false;
  return {
    t: intro ? 0 : 1,
    running: false,
    program: null,
    pending: null,

    /*Babel»*/
    run: function run(b, callback) {
      /*Babel»*/
      var _this = this;

      if (typeof obj === 'function') {
        transitionManager.wait().then(function () {
          obj = obj();

          _this._run(b, callback);
        });
      } else {
        this._run(b, callback);
      }
    },

    /*Babel»*/
    _run: function _run(b, callback) {
      duration = obj.duration || 300;
      ease = obj.easing || linear;
      var program = {
        start: window.performance.now() + (obj.delay || 0),
        b: b,
        callback: callback || noop
      };

      if (intro && !initialised) {
        if (obj.css && obj.delay) {
          cssText = node.style.cssText;
          node.style.cssText += obj.css(0, 1);
        }

        if (obj.tick) obj.tick(0, 1);
        initialised = true;
      }

      if (!b) {
        program.group = outros.current;
        outros.current.remaining += 1;
      }

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

    /*Babel»*/
    start: function start(program) {
      component.fire(
      /*Babel»*/
      (program.b ? 'intro' : 'outro') + ".start", {
        node: node
      });
      program.a = this.t;
      program.delta = program.b - program.a;
      program.duration = duration * Math.abs(program.b - program.a);
      program.end = program.start + program.duration;

      if (obj.css) {
        if (obj.delay) node.style.cssText = cssText;
        var rule = generateRule(program, ease, obj.css);
        transitionManager.addRule(rule, program.name = '__svelte_' + hash(rule));
        node.style.animation = (node.style.animation || '').split(', ').filter(function (anim)
        /*Babel»*/
        {
          return anim && (program.delta < 0 || !/__svelte/.test(anim));
        }).concat(
        /*Babel»*/
        program.name + " " + program.duration + "ms linear 1 forwards").join(', ');
      }

      this.program = program;
      this.pending = null;
    },

    /*Babel»*/
    update: function update(now) {
      var program = this.program;
      if (!program) return;
      var p = now - program.start;
      this.t = program.a + program.delta * ease(p / program.duration);
      if (obj.tick) obj.tick(this.t, 1 - this.t);
    },

    /*Babel»*/
    done: function done() {
      var program = this.program;
      this.t = program.b;
      if (obj.tick) obj.tick(this.t, 1 - this.t);
      component.fire(
      /*Babel»*/
      (program.b ? 'intro' : 'outro') + ".end", {
        node: node
      });

      if (!program.b && !program.invalidated) {
        program.group.callbacks.push(function () {
          program.callback();
          if (obj.css) transitionManager.deleteRule(node, program.name);
        });

        if (--program.group.remaining === 0) {
          program.group.callbacks.forEach(function (fn) {
            fn();
          });
        }
      } else {
        if (obj.css) transitionManager.deleteRule(node, program.name);
      }

      this.running = !!this.pending;
    },

    /*Babel»*/
    abort: function abort(reset) {
      if (this.program) {
        if (reset && obj.tick) obj.tick(1, 0);
        if (obj.css) transitionManager.deleteRule(node, this.program.name);
        this.program = this.pending = null;
        this.running = false;
      }
    },

    /*Babel»*/
    invalidate: function invalidate() {
      if (this.program) {
        this.program.invalidated = true;
      }
    }
  };
}

var outros = {};

function groupOutros() {
  outros.current = {
    remaining: 0,
    callbacks: []
  };
}

var transitionManager = {
  running: false,
  transitions: [],
  bound: null,
  stylesheet: null,
  activeRules: {},
  promise: null,

  /*Babel»*/
  add: function add(transition) {
    this.transitions.push(transition);

    if (!this.running) {
      this.running = true;
      requestAnimationFrame(this.bound || (this.bound = this.next.bind(this)));
    }
  },

  /*Babel»*/
  addRule: function addRule(rule, name) {
    if (!this.stylesheet) {
      var style = createElement('style');
      document.head.appendChild(style);
      transitionManager.stylesheet = style.sheet;
    }

    if (!this.activeRules[name]) {
      this.activeRules[name] = true;
      this.stylesheet.insertRule(
      /*Babel»*/
      "@keyframes " + name + " " + rule, this.stylesheet.cssRules.length);
    }
  },

  /*Babel»*/
  next: function next() {
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
      var _i = this.stylesheet.cssRules.length;

      while (_i--)
      /*Babel»*/
      {
        this.stylesheet.deleteRule(_i);
      }

      this.activeRules = {};
    }
  },

  /*Babel»*/
  deleteRule: function deleteRule(node, name) {
    node.style.animation = node.style.animation.split(', ').filter(function (anim)
    /*Babel»*/
    {
      return anim && anim.indexOf(name) === -1;
    }).join(', ');
  },

  /*Babel»*/
  wait: function wait() {
    if (!transitionManager.promise) {
      transitionManager.promise = Promise.resolve();
      transitionManager.promise.then(function () {
        transitionManager.promise = null;
      });
    }

    return transitionManager.promise;
  }
};

function wrapAnimation(node, from, fn, params) {
  if (!from) return;
  var to = node.getBoundingClientRect();
  if (from.left === to.left && from.right === to.right && from.top === to.top && from.bottom === to.bottom) return;
  var info = fn(node, {
    from: from,
    to: to
  }, params);
  var duration = 'duration' in info ? info.duration : 300;
  var delay = 'delay' in info ? info.delay : 0;
  var ease = info.easing || linear;
  var start = window.performance.now() + delay;
  var end = start + duration;
  var program = {
    a: 0,
    t: 0,
    b: 1,
    delta: 1,
    duration: duration,
    start: start,
    end: end
  };
  var cssText = node.style.cssText;
  var animation = {
    pending: delay ? program : null,
    program: delay ? null : program,
    running: true,

    /*Babel»*/
    start: function start() {
      if (info.css) {
        if (delay) node.style.cssText = cssText;
        var rule = generateRule(program, ease, info.css);
        program.name =
        /*Babel»*/
        "__svelte_" + hash(rule);
        transitionManager.addRule(rule, program.name);
        node.style.animation = (node.style.animation || '').split(', ').filter(function (anim)
        /*Babel»*/
        {
          return anim && (program.delta < 0 || !/__svelte/.test(anim));
        }).concat(
        /*Babel»*/
        program.name + " " + program.duration + "ms linear 1 forwards").join(', ');
      }

      animation.program = program;
      animation.pending = null;
    },
    update: function
    /*Babel»*/
    update(now) {
      var p = now - program.start;
      var t = program.a + program.delta * ease(p / program.duration);
      if (info.tick) info.tick(t, 1 - t);
    },

    /*Babel»*/
    done: function done() {
      if (info.tick) info.tick(1, 0);
      animation.stop();
    },

    /*Babel»*/
    stop: function stop() {
      if (info.css) transitionManager.deleteRule(node, program.name);
      animation.running = false;
    }
  };
  transitionManager.add(animation);
  if (info.tick) info.tick(0, 1);

  if (delay) {
    if (info.css) node.style.cssText += info.css(0, 1);
  } else {
    animation.start();
  }

  return animation;
}

function fixPosition(node) {
  var style = getComputedStyle(node);

  if (style.position !== 'absolute' && style.position !== 'fixed') {
    /*Babel»*/
    var width = style.width,
        height = style.height;
    var a = node.getBoundingClientRect();
    node.style.position = 'absolute';
    node.style.width = width;
    node.style.height = height;
    var b = node.getBoundingClientRect();

    if (a.left !== b.left || a.top !== b.top) {
      var _style = getComputedStyle(node);

      var transform = _style.transform === 'none' ? '' : _style.transform;
      node.style.transform =
      /*Babel»*/
      transform + " translate(" + (a.left - b.left) + "px, " + (a.top - b.top) + "px)";
    }
  }
}

function handlePromise(promise, info) {
  var token = info.token = {};

  function update(type, index, key, value) {
    /*Babel»*/
    var _ref2;

    if (info.token !== token) return;
    info.resolved = key &&
    /*Babel»*/
    (_ref2 = {}, _ref2[key] = value, _ref2);
    var child_ctx = assign(assign({}, info.ctx), info.resolved);
    var block = type && (info.current = type)(info.component, child_ctx);

    if (info.block) {
      if (info.blocks) {
        info.blocks.forEach(function (block, i) {
          if (i !== index && block) {
            groupOutros();
            block.o(function () {
              block.d(1);
              info.blocks[i] = null;
            });
          }
        });
      } else {
        info.block.d(1);
      }

      block.c();
      block[block.i ? 'i' : 'm'](info.mount(), info.anchor);
      info.component.root.set({}); // flush any handlers that were created
    }

    info.block = block;
    if (info.blocks) info.blocks[index] = block;
  }

  if (isPromise(promise)) {
    promise.then(function (value) {
      update(info.then, 1, info.value, value);
    }, function (error) {
      update(info.catch, 2, info.error, error);
    }); // if we previously had a then/catch block, destroy it

    if (info.current !== info.pending) {
      update(info.pending, 0);
      return true;
    }
  } else {
    /*Babel»*/
    var _info$resolved;

    if (info.current !== info.then) {
      update(info.then, 1, info.value, promise);
      return true;
    }

    info.resolved =
    /*Babel»*/
    (_info$resolved = {}, _info$resolved[info.value] = promise, _info$resolved);
  }
}

function destroyBlock(block, lookup) {
  block.d(1);
  lookup[block.key] = null;
}

function outroAndDestroyBlock(block, lookup) {
  block.o(function () {
    destroyBlock(block, lookup);
  });
}

function fixAndOutroAndDestroyBlock(block, lookup) {
  block.f();
  outroAndDestroyBlock(block, lookup);
}

function updateKeyedEach(old_blocks, component, changed, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, intro_method, next, get_context) {
  var o = old_blocks.length;
  var n = list.length;
  var i = o;
  var old_indexes = {};

  while (i--)
  /*Babel»*/
  {
    old_indexes[old_blocks[i].key] = i;
  }

  var new_blocks = [];
  var new_lookup = {};
  var deltas = {};
  var i = n;

  while (i--) {
    var child_ctx = get_context(ctx, list, i);
    var key = get_key(child_ctx);
    var block = lookup[key];

    if (!block) {
      block = create_each_block(component, key, child_ctx);
      block.c();
    } else if (dynamic) {
      block.p(changed, child_ctx);
    }

    new_blocks[i] = new_lookup[key] = block;
    if (key in old_indexes) deltas[key] = Math.abs(i - old_indexes[key]);
  }

  var will_move = {};
  var did_move = {};

  function insert(block) {
    block[intro_method](node, next);
    lookup[block.key] = block;
    next = block.first;
    n--;
  }

  while (o && n) {
    var new_block = new_blocks[n - 1];
    var old_block = old_blocks[o - 1];
    var new_key = new_block.key;
    var old_key = old_block.key;

    if (new_block === old_block) {
      // do nothing
      next = new_block.first;
      o--;
      n--;
    } else if (!new_lookup[old_key]) {
      // remove old block
      destroy(old_block, lookup);
      o--;
    } else if (!lookup[new_key] || will_move[new_key]) {
      insert(new_block);
    } else if (did_move[old_key]) {
      o--;
    } else if (deltas[new_key] > deltas[old_key]) {
      did_move[new_key] = true;
      insert(new_block);
    } else {
      will_move[old_key] = true;
      o--;
    }
  }

  while (o--) {
    var old_block = old_blocks[o];
    if (!new_lookup[old_block.key]) destroy(old_block, lookup);
  }

  while (n)
  /*Babel»*/
  {
    insert(new_blocks[n - 1]);
  }

  return new_blocks;
}

function measure(blocks) {
  var rects = {};
  var i = blocks.length;

  while (i--)
  /*Babel»*/
  {
    rects[blocks[i].key] = blocks[i].node.getBoundingClientRect();
  }

  return rects;
}

function animate(blocks, rects, fn, params) {
  var i = blocks.length;

  while (i--) {
    var block = blocks[i];
    var from = rects[block.key];
    if (!from) continue;
    var to = block.node.getBoundingClientRect();
    if (from.left === to.left && from.right === to.right && from.top === to.top && from.bottom === to.bottom) continue;
  }
}

function getSpreadUpdate(levels, updates) {
  var update = {};
  var to_null_out = {};
  var accounted_for = {};
  var i = levels.length;

  while (i--) {
    var o = levels[i];
    var n = updates[i];

    if (n) {
      for (var key in o) {
        if (!(key in n)) to_null_out[key] = 1;
      }

      for (var key in n) {
        if (!accounted_for[key]) {
          update[key] = n[key];
          accounted_for[key] = 1;
        }
      }

      levels[i] = n;
    } else {
      for (var key in o) {
        accounted_for[key] = 1;
      }
    }
  }

  for (var key in to_null_out) {
    if (!(key in update)) update[key] = undefined;
  }

  return update;
}

function spread(args) {
  var attributes =
  /*Babel»*/
  _extends.apply(
  /*Babel»*/
  void 0,
  /*Babel»*/
  [{}].concat(args));

  var str = '';
  Object.keys(attributes).forEach(function (name) {
    var value = attributes[name];
    if (value === undefined) return;
    if (value === true) str += " " + name;
    str += " " + name + "=" + JSON.stringify(value);
  });
  return str;
}

var escaped = {
  '"': '&quot;',
  "'": '&#39;',
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;'
};

function escape(html) {
  return String(html).replace(/["'&<>]/g, function (match)
  /*Babel»*/
  {
    return escaped[match];
  });
}

function each(items, assign, fn) {
  var str = '';

  for (var i = 0; i < items.length; i += 1) {
    str += fn(assign(items[i], i));
  }

  return str;
}

var missingComponent = {
  _render: function
  /*Babel»*/
  _render()
  /*Babel»*/
  {
    return '';
  }
};

function validateSsrComponent(component, name) {
  if (!component || !component._render) {
    if (name === 'svelte:component') name += 'this={...}';
    throw new Error(
    /*Babel»*/
    "<" + name + "> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules");
  }

  return component;
}

function blankObject() {
  return Object.create(null);
}

function destroy(detach) {
  this.destroy = noop;
  this.fire('destroy');
  this.set = noop;

  this._fragment.d(detach !== false);

  this._fragment = null;
  this._state = {};
}

function destroyDev(detach) {
  destroy.call(this, detach);

  this.destroy = function () {
    console.warn('Component was already destroyed');
  };
}

function _differs(a, b) {
  return a != a ? b == b : a !== b || a && typeof a === 'object' || typeof a === 'function';
}

function _differsImmutable(a, b) {
  return a != a ? b == b : a !== b;
}

function fire(eventName, data) {
  var handlers = eventName in this._handlers && this._handlers[eventName].slice();

  if (!handlers) return;

  for (var i = 0; i < handlers.length; i += 1) {
    var handler = handlers[i];

    if (!handler.__calling) {
      try {
        handler.__calling = true;
        handler.call(this, data);
      } finally {
        handler.__calling = false;
      }
    }
  }
}

function get() {
  return this._state;
}

function init(component, options) {
  component._handlers = blankObject();
  component._bind = options._bind;
  component.options = options;
  component.root = options.root || component;
  component.store = options.store || component.root.store;
}

function on(eventName, handler) {
  var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
  handlers.push(handler);
  return {
    cancel: function
    /*Babel»*/
    cancel() {
      var index = handlers.indexOf(handler);
      if (~index) handlers.splice(index, 1);
    }
  };
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
  this._state = assign(assign({}, oldState), newState);

  this._recompute(changed, this._state);

  if (this._bind) this._bind(changed, this._state);

  if (this._fragment) {
    this.fire("state", {
      changed: changed,
      current: this._state,
      previous: oldState
    });

    this._fragment.p(changed, this._state);

    this.fire("update", {
      changed: changed,
      current: this._state,
      previous: oldState
    });
  }
}

function setDev(newState) {
  if (typeof newState !== 'object') {
    throw new Error(this._debugName + '.set was called without an object of data key-values to update.');
  }

  this._checkReadOnly(newState);

  set.call(this, newState);
}

function callAll(fns) {
  while (fns && fns.length)
  /*Babel»*/
  {
    fns.shift()();
  }
}

function _mount(target, anchor) {
  this._fragment[this._fragment.i ? 'i' : 'm'](target, anchor || null);
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
  on: on,
  set: set,
  _recompute: noop,
  _set: _set,
  _mount: _mount,
  _differs: _differs
};
var protoDev = {
  destroy: destroyDev,
  get: get,
  fire: fire,
  on: on,
  set: setDev,
  _recompute: noop,
  _set: _set,
  _mount: _mount,
  _differs: _differs
};


/***/ }),

/***/ "../../node_modules/svelte/store.js":
/*!*******************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/svelte/store.js ***!
  \*******************************************************************************/
/*! exports provided: Store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony import */ var _shared_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.js */ "../../node_modules/svelte/shared.js");


function Store(state, options) {
  this._handlers = {};
  this._dependents = [];
  this._computed = Object(_shared_js__WEBPACK_IMPORTED_MODULE_0__["blankObject"])();
  this._sortedComputedProperties = [];
  this._state = Object(_shared_js__WEBPACK_IMPORTED_MODULE_0__["assign"])({}, state);
  this._differs = options && options.immutable ? _shared_js__WEBPACK_IMPORTED_MODULE_0__["_differsImmutable"] : _shared_js__WEBPACK_IMPORTED_MODULE_0__["_differs"];
}

Object(_shared_js__WEBPACK_IMPORTED_MODULE_0__["assign"])(Store.prototype, {
  /*Babel»*/
  _add: function _add(component, props) {
    this._dependents.push({
      component: component,
      props: props
    });
  },

  /*Babel»*/
  _init: function _init(props) {
    var state = {};

    for (var i = 0; i < props.length; i += 1) {
      var prop = props[i];
      state['$' + prop] = this._state[prop];
    }

    return state;
  },

  /*Babel»*/
  _remove: function _remove(component) {
    var i = this._dependents.length;

    while (i--) {
      if (this._dependents[i].component === component) {
        this._dependents.splice(i, 1);

        return;
      }
    }
  },

  /*Babel»*/
  _set: function _set(newState, changed) {
    var previous = this._state;
    this._state = Object(_shared_js__WEBPACK_IMPORTED_MODULE_0__["assign"])(Object(_shared_js__WEBPACK_IMPORTED_MODULE_0__["assign"])({}, previous), newState);

    for (var i = 0; i < this._sortedComputedProperties.length; i += 1) {
      this._sortedComputedProperties[i].update(this._state, changed);
    }

    this.fire('state', {
      changed: changed,
      previous: previous,
      current: this._state
    });

    var dependents = this._dependents.slice(); // guard against mutations


    for (var _i = 0; _i < dependents.length; _i += 1) {
      var dependent = dependents[_i];
      var componentState = {};
      var dirty = false;

      for (var j = 0; j < dependent.props.length; j += 1) {
        var prop = dependent.props[j];

        if (prop in changed) {
          componentState['$' + prop] = this._state[prop];
          dirty = true;
        }
      }

      if (dirty) dependent.component.set(componentState);
    }

    this.fire('update', {
      changed: changed,
      previous: previous,
      current: this._state
    });
  },

  /*Babel»*/
  _sortComputedProperties: function _sortComputedProperties() {
    var computed = this._computed;
    var sorted = this._sortedComputedProperties = [];
    var visited = Object(_shared_js__WEBPACK_IMPORTED_MODULE_0__["blankObject"])();
    var currentKey;

    function visit(key) {
      var c = computed[key];

      if (c) {
        c.deps.forEach(function (dep) {
          if (dep === currentKey) {
            throw new Error(
            /*Babel»*/
            "Cyclical dependency detected between " + dep + " <-> " + key);
          }

          visit(dep);
        });

        if (!visited[key]) {
          visited[key] = true;
          sorted.push(c);
        }
      }
    }

    for (var key in this._computed) {
      visit(currentKey = key);
    }
  },

  /*Babel»*/
  compute: function compute(key, deps, fn) {
    /*Babel»*/
    var _this = this;

    var value;
    var c = {
      deps: deps,
      update: function
      /*Babel»*/
      update(state, changed, dirty) {
        var values = deps.map(function (dep) {
          if (dep in changed) dirty = true;
          return state[dep];
        });

        if (dirty) {
          var newValue = fn.apply(null, values);

          if (_this._differs(newValue, value)) {
            value = newValue;
            changed[key] = true;
            state[key] = value;
          }
        }
      }
    };
    this._computed[key] = c;

    this._sortComputedProperties();

    var state = Object(_shared_js__WEBPACK_IMPORTED_MODULE_0__["assign"])({}, this._state);
    var changed = {};
    c.update(state, changed, true);

    this._set(state, changed);
  },
  fire: _shared_js__WEBPACK_IMPORTED_MODULE_0__["fire"],
  get: _shared_js__WEBPACK_IMPORTED_MODULE_0__["get"],
  on: _shared_js__WEBPACK_IMPORTED_MODULE_0__["on"],

  /*Babel»*/
  set: function set(newState) {
    var oldState = this._state;
    var changed = this._changed = {};
    var dirty = false;

    for (var key in newState) {
      if (this._computed[key]) throw new Error(
      /*Babel»*/
      "'" + key + "' is a read-only property");
      if (this._differs(newState[key], oldState[key])) changed[key] = dirty = true;
    }

    if (!dirty) return;

    this._set(newState, changed);
  }
});


/***/ }),

/***/ "../../node_modules/timers-browserify/main.js":
/*!*****************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/timers-browserify/main.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
var apply = Function.prototype.apply; // DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};

exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};

exports.clearTimeout = exports.clearInterval = function (timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}

Timeout.prototype.unref = Timeout.prototype.ref = function () {};

Timeout.prototype.close = function () {
  this._clearFn.call(scope, this._id);
}; // Does not start the time, just sets up the members needed.


exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);
  var msecs = item._idleTimeout;

  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
}; // setimmediate attaches itself to the global object


__webpack_require__(/*! setimmediate */ "../../node_modules/setimmediate/setImmediate.js"); // On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.


exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || this && this.setImmediate;
exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || this && this.clearImmediate;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/value-equal/index.js":
/*!************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/value-equal/index.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

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
/*!**********************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/warning/browser.js ***!
  \**********************************************************************************/
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

var warning = function
/*Babel»*/
warning() {};

if (true) {
  warning = function
  /*Babel»*/
  warning(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);

    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }

    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.length < 10 || /^[s\W]*$/.test(format)) {
      throw new Error('The warning format should be able to uniquely identify this ' + 'warning. Please, use a more descriptive format than: ' + format);
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });

      if (typeof console !== 'undefined') {
        console.error(message);
      }

      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    }
  };
}

module.exports = warning;

/***/ }),

/***/ "../../node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ })

},[["../../@src/main.js","runtime"]]]);
});
//# sourceMappingURL=main.js.map