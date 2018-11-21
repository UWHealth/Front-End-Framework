(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../@src/components/button/button.demo.html":
/*!******************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/@src/components/button/button.demo.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var capitalize = __webpack_require__(/*! @/helpers/title-case */ "../../@src/helpers/title-case.js");

var Button = __webpack_require__(/*! ./index.html */ "../../@src/components/button/index.html");

var Demo = __webpack_require__(/*! @/modules/demo/index.html */ "../../@src/modules/demo/index.html");

capitalize = capitalize && capitalize.__esModule ? capitalize["default"] : capitalize;
Button = Button && Button.__esModule ? Button["default"] : Button;
Demo = Demo && Demo.__esModule ? Demo["default"] : Demo;
var widths = ['normal', 'wide', 'compact'];
var Button_demo = {};
Button_demo.filename = "/Users/lee/Sites/Other/Front-End-Framework/@src/components/button/button.demo.html";

Button_demo.data = function () {
  return {};
};

Button_demo.render = function (state, options = {}) {
  var components = new Set();

  function addComponent(component) {
    components.add(component);
  }

  var result = {
    head: '',
    addComponent
  };

  var html = Button_demo._render(result, state, options);

  var cssCode = Array.from(components).map(c => c.css && c.css.code).filter(Boolean).join('\n');
  return {
    html,
    head: result.head,
    css: {
      code: cssCode,
      map: null
    },

    toString() {
      return html;
    }

  };
};

Button_demo._render = function (__result, ctx, options) {
  __result.addComponent(Button_demo);

  ctx = Object.assign({}, ctx);
  return `${validateSsrComponent(Demo, 'Demo')._render(__result, {
    demoTitle: "Buttons",
    variants: true,
    currentRoute: "Button"
  }, {
    store: options.store,
    slotted: {
      default: () => `
    `,
      header: () => `<div slot="header">
        ${validateSsrComponent(Button, 'Button')._render(__result, {}, {
        store: options.store,
        slotted: {
          default: () => `Whatup`
        }
      })}
    </div>
    `,
      variants: () => `<div slot="variants">
        ${each(widths, item => Object.assign({}, ctx, {
        buttonType: item
      }), ctx => `<div class="button-holder button-holder--${escape(ctx.buttonType)} svelte-k0p3cf">
            ${validateSsrComponent(Button, 'Button')._render(__result, {
        type: ctx.buttonType,
        body: capitalize(ctx.buttonType)
      }, {
        store: options.store
      })}
        </div>`)}
    </div>
`
    }
  })}`;
};

Button_demo.css = {
  code: ".button-holder.svelte-k0p3cf{display:inline-block;padding:1.5rem 1.5rem 1.5rem 0}.button-holder--wide.svelte-k0p3cf{min-width:25%}.btn.svelte-k0p3cf{margin-bottom:1.5rem;margin-right:1.5rem;vertical-align:middle}",
  map: "{\"version\":3,\"file\":\"button.demo.html\",\"sources\":[\"button.demo.html\"],\"sourcesContent\":[\"<Demo demoTitle=\\\"Buttons\\\" variants=\\\"{true}\\\" currentRoute=\\\"Button\\\">\\n    <div slot=\\\"header\\\">\\n        <Button>Whatup</Button>\\n    </div>\\n    <div slot=\\\"variants\\\">\\n        {#each widths as buttonType}\\n        <div class=\\\"button-holder button-holder--{buttonType}\\\">\\n            <Button type=\\\"{buttonType}\\\" body=\\\"{capitalize(buttonType)}\\\"/>\\n        </div>\\n        {/each}\\n    </div>\\n</Demo>\\n\\n<script>\\nimport capitalize from '@/helpers/title-case';\\n\\nexport default {\\n    components: {\\n        Button: './index.html',\\n        Demo: '@/modules/demo/index.html',\\n    },\\n    helpers: {\\n        widths: ['normal', 'wide', 'compact'],\\n        capitalize,\\n    },\\n};\\n</script>\\n\\n<style>/* SG\\n# DEV: Config\\n\\nSee [UWHealth sass tools documenation](https://uwhealth.github.io/sass-tools/) for configuration variable details.\\nWhat is set here are **reasonable defaults**.\\n\\n*/\\n.button-holder {\\n  display: inline-block;\\n  padding: 1.5rem 1.5rem 1.5rem 0;\\n}\\n\\n.button-holder--wide {\\n  min-width: 25%;\\n}\\n\\n.btn {\\n  margin-bottom: 1.5rem;\\n  margin-right: 1.5rem;\\n  vertical-align: middle;\\n}\\n</style>\\n\"],\"names\":[],\"mappings\":\"AAmCA,cAAc,cAAC,CAAC,AACd,OAAO,CAAE,YAAY,CACrB,OAAO,CAAE,MAAM,CAAC,MAAM,CAAC,MAAM,CAAC,CAAC,AACjC,CAAC,AAED,oBAAoB,cAAC,CAAC,AACpB,SAAS,CAAE,GAAG,AAChB,CAAC,AAED,IAAI,cAAC,CAAC,AACJ,aAAa,CAAE,MAAM,CACrB,YAAY,CAAE,MAAM,CACpB,cAAc,CAAE,MAAM,AACxB,CAAC\"}"
};
var warned = false;

function validateSsrComponent(component, name) {
  if (!component || !component._render) {
    if (name === 'svelte:component') name += ' this={...}';
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
  }

  return component;
}

function each(items, assign, fn) {
  let str = '';

  for (let i = 0; i < items.length; i += 1) {
    str += fn(assign(items[i], i));
  }

  return str;
}

function escape(html) {
  return String(html).replace(/["'&<>]/g, match => escaped[match]);
}

const escaped = {
  '"': '&quot;',
  "'": '&#39;',
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;'
};
module.exports = Button_demo;

/***/ }),

/***/ "../../@src/components/button/index.html":
/*!************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/@src/components/button/index.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var modifiers = __webpack_require__(/*! @/helpers/class-modifiers */ "../../@src/helpers/class-modifiers/index.js");

modifiers = modifiers && modifiers.__esModule ? modifiers["default"] : modifiers;

function data() {
  return {
    body: 'Button',
    icon: false,
    iconUrl: false,
    attrs: false,
    type: []
  };
}

var Index = {};
Index.filename = "/Users/lee/Sites/Other/Front-End-Framework/@src/components/button/index.html";

Index.data = function () {
  return data();
};

Index.render = function (state, options = {}) {
  var components = new Set();

  function addComponent(component) {
    components.add(component);
  }

  var result = {
    head: '',
    addComponent
  };

  var html = Index._render(result, state, options);

  var cssCode = Array.from(components).map(c => c.css && c.css.code).filter(Boolean).join('\n');
  return {
    html,
    head: result.head,
    css: {
      code: cssCode,
      map: null
    },

    toString() {
      return html;
    }

  };
};

Index._render = function (__result, ctx, options) {
  __result.addComponent(Index);

  ctx = Object.assign(data(), ctx);
  return `<button class="btn ${escape(modifiers(ctx.type, 'btn--'))}">
    <span class="btn__body ${escape(modifiers(ctx.type, 'btn__body--'))}">
        ${options && options.slotted && options.slotted.default ? options.slotted.default() : `
            ${escape(ctx.body)}
        `}
    </span>
    ${ctx.icon ? `<span class="btn__icon ${escape(modifiers(ctx.type, 'btn__icon--'))}">
            ${options && options.slotted && options.slotted.icon ? options.slotted.icon() : `
                ${escape(ctx.icon)}
            `}
        </span>` : `${ctx.iconUrl ? `<img class="btn__icon btn__icon--image ${escape(modifiers(ctx.type, 'btn__icon--'))}"${(v => v == null ? "" : ` src="${escape({
    iconUrl: ctx.iconUrl
  })}"`)({
    iconUrl: ctx.iconUrl
  })} alt="">` : ``}`}
</button>`;
};

Index.css = {
  code: '',
  map: null
};
var warned = false;

function escape(html) {
  return String(html).replace(/["'&<>]/g, match => escaped[match]);
}

const escaped = {
  '"': '&quot;',
  "'": '&#39;',
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;'
};
module.exports = Index;

/***/ }),

/***/ "../../@src/helpers/class-modifiers/index.js":
/*!****************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/@src/helpers/class-modifiers/index.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (modifier, classPrefix, classSuffix) {
  //eslint-disable-line
  classSuffix = classSuffix || '';

  if (!modifier) {
    return '';
  }

  if (modifier.length > 1 && typeof modifier === 'string') {
    modifier = [modifier];
  }

  if (modifier.length > 0 && Array.isArray(modifier)) {
    return modifier.reduce((prev, name) => {
      return prev + ' ' + classPrefix + name + classSuffix;
    }, '');
  }

  return '';
});

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

/* harmony default export */ __webpack_exports__["default"] = (titleCase);

/***/ }),

/***/ "../../@src/modules/demo/demo.nav.html":
/*!**********************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/@src/modules/demo/demo.nav.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __import0 = __webpack_require__(/*! svelte-routing */ "../../node_modules/svelte-routing/index.js");

var NavLink = __webpack_require__(/*! svelte-routing/NavLink.html */ "../../node_modules/svelte-routing/NavLink.html");

var createMemoryHistory = __import0.createMemoryHistory;
var createBrowserHistory = __import0.createBrowserHistory;
NavLink = NavLink && NavLink.__esModule ? NavLink["default"] : NavLink;
let history;

if (true) {
  history = createMemoryHistory();
} else {}

function data() {
  return {
    links: [['Button', '/demo/button/'], ['Feed', '/demo/feed/']],
    history: history
  };
}

var Demo_nav = {};
Demo_nav.filename = "/Users/lee/Sites/Other/Front-End-Framework/@src/modules/demo/demo.nav.html";

Demo_nav.data = function () {
  return data();
};

Demo_nav.render = function (state, options = {}) {
  var components = new Set();

  function addComponent(component) {
    components.add(component);
  }

  var result = {
    head: '',
    addComponent
  };

  var html = Demo_nav._render(result, state, options);

  var cssCode = Array.from(components).map(c => c.css && c.css.code).filter(Boolean).join('\n');
  return {
    html,
    head: result.head,
    css: {
      code: cssCode,
      map: null
    },

    toString() {
      return html;
    }

  };
};

Demo_nav._render = function (__result, ctx, options) {
  __result.addComponent(Demo_nav);

  ctx = Object.assign(data(), ctx);
  return `<!-- Svelte-routing: https://github.com/EmilTholin/svelte-routing -->
<nav class="demo-navigation">
    <img src="/public/static/img/favicons/icon.svg" style="height: ${escape(60 / 16)}rem;" alt="">
    ${each(ctx.links, item => Object.assign({}, ctx, {
    name: item[0],
    url: item[1]
  }), ctx => `${validateSsrComponent(NavLink, 'NavLink')._render(__result, {
    to: ctx.url,
    activeClassName: "demo-navigation__link--active",
    className: "demo-navigation__link"
  }, {
    store: options.store,
    slotted: {
      default: () => `
            ${escape(ctx.name)}
        `
    }
  })}`)}
</nav>`;
};

Demo_nav.css = {
  code: ".demo-navigation__link{transition:background-color color 200ms ease-out}.demo-navigation__link--active{background-color:#f0f5f8;border-radius:5px;color:#83a9c8;transition:background 2000ms ease-out}",
  map: "{\"version\":3,\"file\":\"demo.nav.html\",\"sources\":[\"demo.nav.html\"],\"sourcesContent\":[\"<!-- Svelte-routing: https://github.com/EmilTholin/svelte-routing -->\\n<nav ref:navigation class=\\\"demo-navigation\\\">\\n    <img src=\\\"/public/static/img/favicons/icon.svg\\\" style=\\\"height: {60/16}rem;\\\" alt=\\\"\\\">\\n    {#each links as [name, url] (url)}\\n        <NavLink ref:url\\n            to=\\\"{url}\\\"\\n            activeClassName=\\\"demo-navigation__link--active\\\"\\n            className=\\\"demo-navigation__link\\\">\\n            {name}\\n        </NavLink>\\n    {/each}\\n</nav>\\n\\n<style>:global(.demo-navigation__link) {\\n  transition: background-color color 200ms ease-out;\\n}\\n\\n:global(.demo-navigation__link--active) {\\n  background-color: #f0f5f8;\\n  border-radius: 5px;\\n  color: #83a9c8;\\n  transition: background 2000ms ease-out;\\n}\\n</style>\\n\\n<script>\\nimport { createMemoryHistory, createBrowserHistory } from 'svelte-routing';\\n\\nlet history;\\n\\nif (typeof window === 'undefined') {\\n    history = createMemoryHistory();\\n} else {\\n    history = createBrowserHistory();\\n}\\n\\nexport default {\\n    components: {\\n        NavLink: 'svelte-routing/NavLink.html',\\n    },\\n    data: () => ({\\n        links: [['Button', '/demo/button/'], ['Feed', '/demo/feed/']],\\n        history: history,\\n    }),\\n};\\n</script>\\n\"],\"names\":[],\"mappings\":\"AAae,sBAAsB,AAAE,CAAC,AACtC,UAAU,CAAE,gBAAgB,CAAC,KAAK,CAAC,KAAK,CAAC,QAAQ,AACnD,CAAC,AAEO,8BAA8B,AAAE,CAAC,AACvC,gBAAgB,CAAE,OAAO,CACzB,aAAa,CAAE,GAAG,CAClB,KAAK,CAAE,OAAO,CACd,UAAU,CAAE,UAAU,CAAC,MAAM,CAAC,QAAQ,AACxC,CAAC\"}"
};
var warned = false;

function escape(html) {
  return String(html).replace(/["'&<>]/g, match => escaped[match]);
}

function each(items, assign, fn) {
  let str = '';

  for (let i = 0; i < items.length; i += 1) {
    str += fn(assign(items[i], i));
  }

  return str;
}

function validateSsrComponent(component, name) {
  if (!component || !component._render) {
    if (name === 'svelte:component') name += ' this={...}';
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
  }

  return component;
}

const escaped = {
  '"': '&quot;',
  "'": '&#39;',
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;'
};
module.exports = Demo_nav;

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

const store = new svelte_store_js__WEBPACK_IMPORTED_MODULE_0__["Store"]({
  pageTitle: "Demo"
});
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "../../@src/modules/demo/index.html":
/*!*******************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/@src/modules/demo/index.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var store = __webpack_require__(/*! ./demo.store.js */ "../../@src/modules/demo/demo.store.js");

var Nav = __webpack_require__(/*! @/modules/demo/demo.nav.html */ "../../@src/modules/demo/demo.nav.html");

store = store && store.__esModule ? store["default"] : store;
Nav = Nav && Nav.__esModule ? Nav["default"] : Nav;

function lowercaseRoute({
  currentRoute
}) {
  return currentRoute.toLowerCase();
}

function data() {
  return {
    demoTitle: 'Demo',
    variantTitle: false,
    variants: false,
    stylesheet: true
  };
}

;

function store_1() {
  return store;
}

var Index = {};
Index.filename = "/Users/lee/Sites/Other/Front-End-Framework/@src/modules/demo/index.html";

Index.data = function () {
  return data();
};

Index.render = function (state, options = {}) {
  var components = new Set();

  function addComponent(component) {
    components.add(component);
  }

  var result = {
    head: '',
    addComponent
  };

  var html = Index._render(result, state, options);

  var cssCode = Array.from(components).map(c => c.css && c.css.code).filter(Boolean).join('\n');
  return {
    html,
    head: result.head,
    css: {
      code: cssCode,
      map: null
    },

    toString() {
      return html;
    }

  };
};

Index._render = function (__result, ctx, options) {
  options.store = store_1();

  __result.addComponent(Index);

  ctx = Object.assign(data(), ctx);
  ctx.lowercaseRoute = lowercaseRoute(ctx);
  return `${ctx.stylesheet ? `<link rel="stylesheet" media="screen" href="/public/css/demo/demo.css">` : ``}

${validateSsrComponent(Nav, 'Nav')._render(__result, {}, {
    store: options.store
  })}

<div class="demo">
    <header class="demo-header">
        <div class="wrap">
            <h1 class="demo-header__title">
                ${escape(ctx.demoTitle)}
            </h1>
            <div class="demo-header__component">
                ${options && options.slotted && options.slotted.header ? options.slotted.header() : `
                    <div></div>
                `}
            </div>
        </div>
    </header>

    <main class="demo-body">
        <div class="wrap">
            ${ctx.variants || ctx.variantTitle ? `<h2 class="demo-body__head">
                ${escape(ctx.variantTitle || ctx.demoTitle)} Variants
            </h2>
            ${options && options.slotted && options.slotted.variants ? options.slotted.variants() : ``}` : ``}
        </div>
    </main>
</div>`;
};

Index.css = {
  code: '',
  map: null
};
var warned = false;

function validateSsrComponent(component, name) {
  if (!component || !component._render) {
    if (name === 'svelte:component') name += ' this={...}';
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
  }

  return component;
}

function escape(html) {
  return String(html).replace(/["'&<>]/g, match => escaped[match]);
}

const escaped = {
  '"': '&quot;',
  "'": '&#39;',
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;'
};
module.exports = Index;

/***/ }),

/***/ "../../node_modules/core-js/modules/_an-object.js":
/*!*********************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/core-js/modules/_an-object.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_core.js":
/*!****************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/core-js/modules/_core.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "../../node_modules/core-js/modules/_descriptors.js":
/*!***********************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/core-js/modules/_descriptors.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "../../node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "../../node_modules/core-js/modules/_dom-create.js":
/*!**********************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/core-js/modules/_dom-create.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_fails.js":
/*!*****************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/core-js/modules/_fails.js ***!
  \*****************************************************************************************/
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

/***/ "../../node_modules/core-js/modules/_global.js":
/*!******************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/core-js/modules/_global.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports =  false
  ? undefined : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "../../node_modules/core-js/modules/_ie8-dom-define.js":
/*!**************************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/core-js/modules/_ie8-dom-define.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "../../node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "../../node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "../../node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "../../node_modules/core-js/modules/_is-object.js":
/*!*********************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/core-js/modules/_is-object.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_library.js":
/*!*******************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/core-js/modules/_library.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "../../node_modules/core-js/modules/_object-dp.js":
/*!*********************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/core-js/modules/_object-dp.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "../../node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "../../node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../../node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "../../node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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

/***/ "../../node_modules/core-js/modules/_shared.js":
/*!******************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/core-js/modules/_shared.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "../../node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "../../node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "../../node_modules/core-js/modules/_to-primitive.js":
/*!************************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/core-js/modules/_to-primitive.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "../../node_modules/core-js/modules/_is-object.js");
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

/***/ "../../node_modules/core-js/modules/_uid.js":
/*!***************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/core-js/modules/_uid.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_wks-define.js":
/*!**********************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/core-js/modules/_wks-define.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "../../node_modules/core-js/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "../../node_modules/core-js/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "../../node_modules/core-js/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "../../node_modules/core-js/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "../../node_modules/core-js/modules/_wks-ext.js":
/*!*******************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/core-js/modules/_wks-ext.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "../../node_modules/core-js/modules/_wks.js");


/***/ }),

/***/ "../../node_modules/core-js/modules/_wks.js":
/*!***************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/core-js/modules/_wks.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "../../node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "../../node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "../../node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "../../node_modules/core-js/modules/es7.symbol.async-iterator.js":
/*!************************************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "../../node_modules/core-js/modules/_wks-define.js")('asyncIterator');


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
var canUseDOM = !!( false && false);
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
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "../../node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! warning */ "../../node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! invariant */ "../../node_modules/invariant/invariant.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _LocationUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LocationUtils */ "../../node_modules/history/es/LocationUtils.js");
/* harmony import */ var _PathUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PathUtils */ "../../node_modules/history/es/PathUtils.js");
/* harmony import */ var _createTransitionManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createTransitionManager */ "../../node_modules/history/es/createTransitionManager.js");
/* harmony import */ var _DOMUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DOMUtils */ "../../node_modules/history/es/DOMUtils.js");
/*Babel»*/


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
  invariant__WEBPACK_IMPORTED_MODULE_2___default()(_DOMUtils__WEBPACK_IMPORTED_MODULE_6__["canUseDOM"], 'Browser history needs a DOM');
  var globalHistory = window.history;
  var canUseHistory = Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_6__["supportsHistory"])();
  var needsHashChangeListener = !Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_6__["supportsPopStateOnHashChange"])();
  var _props$forceRefresh = props.forceRefresh,
      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
      _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils__WEBPACK_IMPORTED_MODULE_6__["getConfirmation"] : _props$getUserConfirm,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;
  var basename = props.basename ? Object(_PathUtils__WEBPACK_IMPORTED_MODULE_4__["stripTrailingSlash"])(Object(_PathUtils__WEBPACK_IMPORTED_MODULE_4__["addLeadingSlash"])(props.basename)) : '';

  var getDOMLocation = function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
    warning__WEBPACK_IMPORTED_MODULE_1___default()(!basename || Object(_PathUtils__WEBPACK_IMPORTED_MODULE_4__["hasBasename"])(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');
    if (basename) path = Object(_PathUtils__WEBPACK_IMPORTED_MODULE_4__["stripBasename"])(path, basename);
    return Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_3__["createLocation"])(path, state, key);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var transitionManager = Object(_createTransitionManager__WEBPACK_IMPORTED_MODULE_5__["default"])();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  };

  var handlePopState = function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_6__["isExtraneousPopstateEvent"])(event)) return;
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
    return basename + Object(_PathUtils__WEBPACK_IMPORTED_MODULE_4__["createPath"])(location);
  };

  var push = function push(path, state) {
    warning__WEBPACK_IMPORTED_MODULE_1___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
    var action = 'PUSH';
    var location = Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_3__["createLocation"])(path, state, createKey(), history.location);
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
        warning__WEBPACK_IMPORTED_MODULE_1___default()(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');
        window.location.href = href;
      }
    });
  };

  var replace = function replace(path, state) {
    warning__WEBPACK_IMPORTED_MODULE_1___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
    var action = 'REPLACE';
    var location = Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_3__["createLocation"])(path, state, createKey(), history.location);
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
        warning__WEBPACK_IMPORTED_MODULE_1___default()(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');
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
      Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_6__["addEventListener"])(window, PopStateEvent, handlePopState);
      if (needsHashChangeListener) Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_6__["addEventListener"])(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_6__["removeEventListener"])(window, PopStateEvent, handlePopState);
      if (needsHashChangeListener) Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_6__["removeEventListener"])(window, HashChangeEvent, handleHashChange);
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
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! warning */ "../../node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! invariant */ "../../node_modules/invariant/invariant.js");
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
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "../../node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! warning */ "../../node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PathUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PathUtils */ "../../node_modules/history/es/PathUtils.js");
/* harmony import */ var _LocationUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LocationUtils */ "../../node_modules/history/es/LocationUtils.js");
/* harmony import */ var _createTransitionManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createTransitionManager */ "../../node_modules/history/es/createTransitionManager.js");
/*Babel»*/


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
  var transitionManager = Object(_createTransitionManager__WEBPACK_IMPORTED_MODULE_4__["default"])();

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
    return typeof entry === 'string' ? Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_3__["createLocation"])(entry, undefined, createKey()) : Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_3__["createLocation"])(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = _PathUtils__WEBPACK_IMPORTED_MODULE_2__["createPath"];

  var push = function push(path, state) {
    warning__WEBPACK_IMPORTED_MODULE_1___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
    var action = 'PUSH';
    var location = Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_3__["createLocation"])(path, state, createKey(), history.location);
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
    warning__WEBPACK_IMPORTED_MODULE_1___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
    var action = 'REPLACE';
    var location = Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_3__["createLocation"])(path, state, createKey(), history.location);
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
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! warning */ "../../node_modules/warning/warning.js");
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
/*!***********************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/history/es/index.js ***!
  \***********************************************************************************/
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

/***/ "../../node_modules/invariant/invariant.js":
/*!**************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/invariant/invariant.js ***!
  \**************************************************************************************/
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

var NODE_ENV = "development";

var invariant = function (condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
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
// ":test(\\d+)?" => ["test", "\d+", undefined, "?"]
// "(\\d+)"  => [undefined, undefined, "\d+", undefined]
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
  var start = options.start !== false;
  var end = options.end !== false;
  var delimiter = escapeString(options.delimiter || DEFAULT_DELIMITER);
  var delimiters = options.delimiters || DEFAULT_DELIMITERS;
  var endsWith = [].concat(options.endsWith || []).map(escapeString).concat('$').join('|');
  var route = start ? '^' : '';
  var isEndDelimited = tokens.length === 0; // Iterate over the tokens and create our regexp string.

  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
      isEndDelimited = i === tokens.length - 1 && delimiters.indexOf(token[token.length - 1]) > -1;
    } else {
      var capture = token.repeat ? '(?:' + token.pattern + ')(?:' + escapeString(token.delimiter) + '(?:' + token.pattern + '))*' : token.pattern;
      if (keys) keys.push(token);

      if (token.optional) {
        if (token.partial) {
          route += escapeString(token.prefix) + '(' + capture + ')?';
        } else {
          route += '(?:' + escapeString(token.prefix) + '(' + capture + '))?';
        }
      } else {
        route += escapeString(token.prefix) + '(' + capture + ')';
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

  return new RegExp(route, flags(options));
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

/***/ "../../node_modules/svelte-routing/NavLink.html":
/*!*******************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/svelte-routing/NavLink.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __import0 = __webpack_require__(/*! history */ "../../node_modules/history/es/index.js");

var __import1 = __webpack_require__(/*! ./index.js */ "../../node_modules/svelte-routing/index.js");

var createLocation = __import0.createLocation;
var getHistory = __import1.getHistory;
var isModifiedEvent = __import1.isModifiedEvent;
var matchPath = __import1.matchPath;

function href({
  to,
  history
}) {
  const location = createLocation(to, null, null, history.location);
  return history.createHref(location);
}

function escapedPath({
  to
}) {
  const path = typeof to === 'object' ? to.pathname : to; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

  return path.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}

function isActive({
  escapedPath,
  pathname,
  exact,
  strict
}) {
  const path = escapedPath;
  return matchPath(pathname, {
    path,
    exact,
    strict
  });
}

function computedClass({
  isActive,
  className,
  activeClassName
}) {
  const classes = [];

  if (className !== '') {
    classes.push(className);
  }

  if (isActive) {
    classes.push(activeClassName);
  }

  return classes.join(' ');
}

function computedAriaCurrent({
  isActive,
  ariaCurrent
}) {
  return isActive && ariaCurrent || 'false';
}

function data() {
  const history = getHistory();
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
}

;
var NavLink = {};
NavLink.filename = "/Users/lee/Sites/Other/Front-End-Framework/node_modules/svelte-routing/NavLink.html";

NavLink.data = function () {
  return data();
};

NavLink.render = function (state, options = {}) {
  var components = new Set();

  function addComponent(component) {
    components.add(component);
  }

  var result = {
    head: '',
    addComponent
  };

  var html = NavLink._render(result, state, options);

  var cssCode = Array.from(components).map(c => c.css && c.css.code).filter(Boolean).join('\n');
  return {
    html,
    head: result.head,
    css: {
      code: cssCode,
      map: null
    },

    toString() {
      return html;
    }

  };
};

NavLink._render = function (__result, ctx, options) {
  __result.addComponent(NavLink);

  ctx = Object.assign(data(), ctx);
  ctx.href = href(ctx);
  ctx.escapedPath = escapedPath(ctx);
  ctx.isActive = isActive(ctx);
  ctx.computedClass = computedClass(ctx);
  ctx.computedAriaCurrent = computedAriaCurrent(ctx);
  return `<a${(v => v == null ? "" : ` href="${escape(ctx.href)}"`)(ctx.href)}${(v => v == null ? "" : ` target="${escape(ctx.target)}"`)(ctx.target)}${(v => v == null ? "" : ` class="${escape(ctx.computedClass)}"`)(ctx.computedClass)}${(v => v == null ? "" : ` aria-current="${escape(ctx.computedAriaCurrent)}"`)(ctx.computedAriaCurrent)}>
  ${options && options.slotted && options.slotted.default ? options.slotted.default() : ``}
</a>`;
};

NavLink.css = {
  code: '',
  map: null
};
var warned = false;

function escape(html) {
  return String(html).replace(/["'&<>]/g, match => escaped[match]);
}

const escaped = {
  '"': '&quot;',
  "'": '&#39;',
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;'
};
module.exports = NavLink;

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




let history;

const createMemoryHistory = () => history = Object(history_es_createMemoryHistory__WEBPACK_IMPORTED_MODULE_0__["default"])();

const createHashHistory = () => history = Object(history_es_createHashHistory__WEBPACK_IMPORTED_MODULE_1__["default"])();

const createBrowserHistory = () => history = Object(history_es_createBrowserHistory__WEBPACK_IMPORTED_MODULE_2__["default"])();

const getHistory = () => history;

const isModifiedEvent = event => {
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
  const compiledPattern = {
    re,
    keys
  };

  if (cacheCount < cacheLimit) {
    cache[pattern] = compiledPattern;
    cacheCount++;
  }

  return compiledPattern;
};

const matchPath = (pathname, options = {}) => {
  if (typeof options === 'string') {
    options = {
      path: options
    };
  }

  const {
    path = '/',
    exact = false,
    strict = false,
    sensitive = false
  } = options;
  const {
    re,
    keys
  } = compilePath(path, {
    end: exact,
    strict,
    sensitive
  });
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
    path,
    // The path pattern used to match
    url: path === '/' && url === '' ? '/' : url,
    // The matched portion of the URL
    isExact,
    // Whether or not we matched exactly
    params: keys.reduce((memo, key, index) => {
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
/*! exports provided: blankObject, destroy, destroyDev, _differs, _differsImmutable, fire, flush, get, init, on, set, _set, _stage, setDev, callAll, _mount, PENDING, SUCCESS, FAILURE, removeFromStore, proto, protoDev, wrapAnimation, fixPosition, handlePromise, append, insert, detachNode, detachBetween, detachBefore, detachAfter, reinsertBetween, reinsertChildren, reinsertAfter, reinsertBefore, destroyEach, createFragment, createElement, createSvgElement, createText, createComment, addListener, removeListener, setAttribute, setAttributes, setCustomElementData, setXlinkAttribute, getBindingGroupValue, toNumber, timeRangesToArray, children, claimElement, claimText, setData, setInputType, setStyle, selectOption, selectOptions, selectValue, selectMultipleValue, addResizeListener, toggleClass, destroyBlock, outroAndDestroyBlock, fixAndOutroAndDestroyBlock, updateKeyedEach, measure, animate, getSpreadUpdate, invalidAttributeNameCharacter, spread, escaped, escape, each, missingComponent, validateSsrComponent, debug, linear, generateRule, hash, wrapTransition, outros, groupOutros, transitionManager, noop, assign, assignTrue, isPromise, callAfter, addLoc, exclude, run */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blankObject", function() { return blankObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return destroy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroyDev", function() { return destroyDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_differs", function() { return _differs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_differsImmutable", function() { return _differsImmutable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fire", function() { return fire; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return flush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_set", function() { return _set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_stage", function() { return _stage; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insert", function() { return insert; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCustomElementData", function() { return setCustomElementData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setXlinkAttribute", function() { return setXlinkAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBindingGroupValue", function() { return getBindingGroupValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNumber", function() { return toNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeRangesToArray", function() { return timeRangesToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "children", function() { return children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claimElement", function() { return claimElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claimText", function() { return claimText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setData", function() { return setData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInputType", function() { return setInputType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStyle", function() { return setStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectOption", function() { return selectOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectOptions", function() { return selectOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectValue", function() { return selectValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMultipleValue", function() { return selectMultipleValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addResizeListener", function() { return addResizeListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleClass", function() { return toggleClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroyBlock", function() { return destroyBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outroAndDestroyBlock", function() { return outroAndDestroyBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixAndOutroAndDestroyBlock", function() { return fixAndOutroAndDestroyBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateKeyedEach", function() { return updateKeyedEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "measure", function() { return measure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animate", function() { return animate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpreadUpdate", function() { return getSpreadUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalidAttributeNameCharacter", function() { return invalidAttributeNameCharacter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spread", function() { return spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escaped", function() { return escaped; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escape", function() { return escape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "each", function() { return each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "missingComponent", function() { return missingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateSsrComponent", function() { return validateSsrComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return debug; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exclude", function() { return exclude; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "run", function() { return run; });
function noop() {}

function assign(tar, src) {
  for (var k in src) tar[k] = src[k];

  return tar;
}

function assignTrue(tar, src) {
  for (var k in src) tar[k] = 1;

  return tar;
}

function isPromise(value) {
  return value && typeof value.then === 'function';
}

function callAfter(fn, i) {
  if (i === 0) fn();
  return () => {
    if (! --i) fn();
  };
}

function addLoc(element, file, line, column, char) {
  element.__svelte_meta = {
    loc: {
      file,
      line,
      column,
      char
    }
  };
}

function exclude(src, prop) {
  const tar = {};

  for (const k in src) k === prop || (tar[k] = src[k]);

  return tar;
}

function run(fn) {
  fn();
}

function append(target, node) {
  target.appendChild(node);
}

function insert(target, node, anchor) {
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

function addListener(node, event, handler, options) {
  node.addEventListener(event, handler, options);
}

function removeListener(node, event, handler, options) {
  node.removeEventListener(event, handler, options);
}

function setAttribute(node, attribute, value) {
  if (value == null) node.removeAttribute(attribute);else node.setAttribute(attribute, value);
}

function setAttributes(node, attributes) {
  for (var key in attributes) {
    if (key === 'style') {
      node.style.cssText = attributes[key];
    } else if (key in node) {
      node[key] = attributes[key];
    } else {
      setAttribute(node, key, attributes[key]);
    }
  }
}

function setCustomElementData(node, prop, value) {
  if (prop in node) {
    node[prop] = value;
  } else if (value) {
    setAttribute(node, prop, value);
  } else {
    node.removeAttribute(prop);
  }
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

function setData(text, data) {
  text.data = '' + data;
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

  const object = document.createElement('object');
  object.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;');
  object.type = 'text/html';
  let win;

  object.onload = () => {
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
    cancel: () => {
      win && win.removeEventListener && win.removeEventListener('resize', fn);
      element.removeChild(object);
    }
  };
}

function toggleClass(element, name, toggle) {
  element.classList.toggle(name, !!toggle);
}

function linear(t) {
  return t;
}

function generateRule({
  a,
  b,
  delta,
  duration
}, ease, fn) {
  const step = 16.666 / duration;
  let keyframes = '{\n';

  for (let p = 0; p <= 1; p += step) {
    const t = a + delta * ease(p);
    keyframes += p * 100 + `%{${fn(t, 1 - t)}}\n`;
  }

  return keyframes + `100% {${fn(b, 1 - b)}}\n}`;
} // https://github.com/darkskyapp/string-hash/blob/master/index.js


function hash(str) {
  let hash = 5381;
  let i = str.length;

  while (i--) hash = (hash << 5) - hash ^ str.charCodeAt(i);

  return hash >>> 0;
}

function wrapTransition(component, node, fn, params, intro) {
  let obj = fn.call(component, node, params);
  let duration;
  let ease;
  let cssText;
  let initialised = false;
  return {
    t: intro ? 0 : 1,
    running: false,
    program: null,
    pending: null,

    run(b, callback) {
      if (typeof obj === 'function') {
        transitionManager.wait().then(() => {
          obj = obj();

          this._run(b, callback);
        });
      } else {
        this._run(b, callback);
      }
    },

    _run(b, callback) {
      duration = obj.duration || 300;
      ease = obj.easing || linear;
      const program = {
        start: window.performance.now() + (obj.delay || 0),
        b,
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

    start(program) {
      component.fire(`${program.b ? 'intro' : 'outro'}.start`, {
        node
      });
      program.a = this.t;
      program.delta = program.b - program.a;
      program.duration = duration * Math.abs(program.b - program.a);
      program.end = program.start + program.duration;

      if (obj.css) {
        if (obj.delay) node.style.cssText = cssText;
        const rule = generateRule(program, ease, obj.css);
        transitionManager.addRule(rule, program.name = '__svelte_' + hash(rule));
        node.style.animation = (node.style.animation || '').split(', ').filter(anim => anim && (program.delta < 0 || !/__svelte/.test(anim))).concat(`${program.name} ${program.duration}ms linear 1 forwards`).join(', ');
      }

      this.program = program;
      this.pending = null;
    },

    update(now) {
      const program = this.program;
      if (!program) return;
      const p = now - program.start;
      this.t = program.a + program.delta * ease(p / program.duration);
      if (obj.tick) obj.tick(this.t, 1 - this.t);
    },

    done() {
      const program = this.program;
      this.t = program.b;
      if (obj.tick) obj.tick(this.t, 1 - this.t);
      component.fire(`${program.b ? 'intro' : 'outro'}.end`, {
        node
      });

      if (!program.b && !program.invalidated) {
        program.group.callbacks.push(() => {
          program.callback();
          if (obj.css) transitionManager.deleteRule(node, program.name);
        });

        if (--program.group.remaining === 0) {
          program.group.callbacks.forEach(run);
        }
      } else {
        if (obj.css) transitionManager.deleteRule(node, program.name);
      }

      this.running = !!this.pending;
    },

    abort(reset) {
      if (this.program) {
        if (reset && obj.tick) obj.tick(1, 0);
        if (obj.css) transitionManager.deleteRule(node, this.program.name);
        this.program = this.pending = null;
        this.running = false;
      }
    },

    invalidate() {
      if (this.program) {
        this.program.invalidated = true;
      }
    }

  };
}

let outros = {};

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

  add(transition) {
    this.transitions.push(transition);

    if (!this.running) {
      this.running = true;
      requestAnimationFrame(this.bound || (this.bound = this.next.bind(this)));
    }
  },

  addRule(rule, name) {
    if (!this.stylesheet) {
      const style = createElement('style');
      document.head.appendChild(style);
      transitionManager.stylesheet = style.sheet;
    }

    if (!this.activeRules[name]) {
      this.activeRules[name] = true;
      this.stylesheet.insertRule(`@keyframes ${name} ${rule}`, this.stylesheet.cssRules.length);
    }
  },

  next() {
    this.running = false;
    const now = window.performance.now();
    let i = this.transitions.length;

    while (i--) {
      const transition = this.transitions[i];

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
      let i = this.stylesheet.cssRules.length;

      while (i--) this.stylesheet.deleteRule(i);

      this.activeRules = {};
    }
  },

  deleteRule(node, name) {
    node.style.animation = node.style.animation.split(', ').filter(anim => anim && anim.indexOf(name) === -1).join(', ');
  },

  wait() {
    if (!transitionManager.promise) {
      transitionManager.promise = Promise.resolve();
      transitionManager.promise.then(() => {
        transitionManager.promise = null;
      });
    }

    return transitionManager.promise;
  }

};

function wrapAnimation(node, from, fn, params) {
  if (!from) return;
  const to = node.getBoundingClientRect();
  if (from.left === to.left && from.right === to.right && from.top === to.top && from.bottom === to.bottom) return;
  const info = fn(node, {
    from,
    to
  }, params);
  const duration = 'duration' in info ? info.duration : 300;
  const delay = 'delay' in info ? info.delay : 0;
  const ease = info.easing || linear;
  const start = window.performance.now() + delay;
  const end = start + duration;
  const program = {
    a: 0,
    t: 0,
    b: 1,
    delta: 1,
    duration,
    start,
    end
  };
  const cssText = node.style.cssText;
  const animation = {
    pending: delay ? program : null,
    program: delay ? null : program,
    running: true,

    start() {
      if (info.css) {
        if (delay) node.style.cssText = cssText;
        const rule = generateRule(program, ease, info.css);
        program.name = `__svelte_${hash(rule)}`;
        transitionManager.addRule(rule, program.name);
        node.style.animation = (node.style.animation || '').split(', ').filter(anim => anim && (program.delta < 0 || !/__svelte/.test(anim))).concat(`${program.name} ${program.duration}ms linear 1 forwards`).join(', ');
      }

      animation.program = program;
      animation.pending = null;
    },

    update: now => {
      const p = now - program.start;
      const t = program.a + program.delta * ease(p / program.duration);
      if (info.tick) info.tick(t, 1 - t);
    },

    done() {
      if (info.tick) info.tick(1, 0);
      animation.stop();
    },

    stop() {
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
  const style = getComputedStyle(node);

  if (style.position !== 'absolute' && style.position !== 'fixed') {
    const {
      width,
      height
    } = style;
    const a = node.getBoundingClientRect();
    node.style.position = 'absolute';
    node.style.width = width;
    node.style.height = height;
    const b = node.getBoundingClientRect();

    if (a.left !== b.left || a.top !== b.top) {
      const style = getComputedStyle(node);
      const transform = style.transform === 'none' ? '' : style.transform;
      node.style.transform = `${transform} translate(${a.left - b.left}px, ${a.top - b.top}px)`;
    }
  }
}

function handlePromise(promise, info) {
  var token = info.token = {};

  function update(type, index, key, value) {
    if (info.token !== token) return;
    info.resolved = key && {
      [key]: value
    };
    const child_ctx = assign(assign({}, info.ctx), info.resolved);
    const block = type && (info.current = type)(info.component, child_ctx);

    if (info.block) {
      if (info.blocks) {
        info.blocks.forEach((block, i) => {
          if (i !== index && block) {
            groupOutros();
            block.o(() => {
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
    promise.then(value => {
      update(info.then, 1, info.value, value);
    }, error => {
      update(info.catch, 2, info.error, error);
    }); // if we previously had a then/catch block, destroy it

    if (info.current !== info.pending) {
      update(info.pending, 0);
      return true;
    }
  } else {
    if (info.current !== info.then) {
      update(info.then, 1, info.value, promise);
      return true;
    }

    info.resolved = {
      [info.value]: promise
    };
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

  while (i--) old_indexes[old_blocks[i].key] = i;

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

  while (n) insert(new_blocks[n - 1]);

  return new_blocks;
}

function measure(blocks) {
  const rects = {};
  let i = blocks.length;

  while (i--) rects[blocks[i].key] = blocks[i].node.getBoundingClientRect();

  return rects;
}

function animate(blocks, rects, fn, params) {
  let i = blocks.length;

  while (i--) {
    const block = blocks[i];
    const from = rects[block.key];
    if (!from) continue;
    const to = block.node.getBoundingClientRect();
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
} // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
// https://infra.spec.whatwg.org/#noncharacter


const invalidAttributeNameCharacter = /[\t-\r "'\/=>\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFDD0-\uFDEF\uFEFF\uFFFE\uFFFF\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;

function spread(args) {
  const attributes = Object.assign({}, ...args);
  let str = '';
  Object.keys(attributes).forEach(name => {
    if (invalidAttributeNameCharacter.test(name)) return;
    const value = attributes[name];
    if (value === undefined) return;
    if (value === true) str += " " + name;
    const escaped = String(value).replace(/"/g, '&#34;').replace(/'/g, '&#39;');
    str += " " + name + "=" + JSON.stringify(escaped);
  });
  return str;
}

const escaped = {
  '"': '&quot;',
  "'": '&#39;',
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;'
};

function escape(html) {
  return String(html).replace(/["'&<>]/g, match => escaped[match]);
}

function each(items, assign, fn) {
  let str = '';

  for (let i = 0; i < items.length; i += 1) {
    str += fn(assign(items[i], i));
  }

  return str;
}

const missingComponent = {
  _render: () => ''
};

function validateSsrComponent(component, name) {
  if (!component || !component._render) {
    if (name === 'svelte:component') name += ' this={...}';
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
  }

  return component;
}

function debug(file, line, column, values) {
  console.log(`{@debug} ${file ? file + ' ' : ''}(${line}:${column})`);
  console.log(values);
  return '';
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

function flush(component) {
  component._lock = true;
  callAll(component._beforecreate);
  callAll(component._oncreate);
  callAll(component._aftercreate);
  component._lock = false;
}

function get() {
  return this._state;
}

function init(component, options) {
  component._handlers = blankObject();
  component._slots = blankObject();
  component._bind = options._bind;
  component._staged = {};
  component.options = options;
  component.root = options.root || component;
  component.store = options.store || component.root.store;

  if (!options.root) {
    component._beforecreate = [];
    component._oncreate = [];
    component._aftercreate = [];
  }
}

function on(eventName, handler) {
  var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
  handlers.push(handler);
  return {
    cancel: function () {
      var index = handlers.indexOf(handler);
      if (~index) handlers.splice(index, 1);
    }
  };
}

function set(newState) {
  this._set(assign({}, newState));

  if (this.root._lock) return;
  flush(this.root);
}

function _set(newState) {
  var oldState = this._state,
      changed = {},
      dirty = false;
  newState = assign(this._staged, newState);
  this._staged = {};

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

function _stage(newState) {
  assign(this._staged, newState);
}

function setDev(newState) {
  if (typeof newState !== 'object') {
    throw new Error(this._debugName + '.set was called without an object of data key-values to update.');
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

var PENDING = {};
var SUCCESS = {};
var FAILURE = {};

function removeFromStore() {
  this.store._remove(this);
}

var proto = {
  destroy,
  get,
  fire,
  on,
  set,
  _recompute: noop,
  _set,
  _stage,
  _mount,
  _differs
};
var protoDev = {
  destroy: destroyDev,
  get,
  fire,
  on,
  set: setDev,
  _recompute: noop,
  _set,
  _stage,
  _mount,
  _differs
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
  _add(component, props) {
    this._dependents.push({
      component: component,
      props: props
    });
  },

  _init(props) {
    const state = {};

    for (let i = 0; i < props.length; i += 1) {
      const prop = props[i];
      state['$' + prop] = this._state[prop];
    }

    return state;
  },

  _remove(component) {
    let i = this._dependents.length;

    while (i--) {
      if (this._dependents[i].component === component) {
        this._dependents.splice(i, 1);

        return;
      }
    }
  },

  _set(newState, changed) {
    const previous = this._state;
    this._state = Object(_shared_js__WEBPACK_IMPORTED_MODULE_0__["assign"])(Object(_shared_js__WEBPACK_IMPORTED_MODULE_0__["assign"])({}, previous), newState);

    for (let i = 0; i < this._sortedComputedProperties.length; i += 1) {
      this._sortedComputedProperties[i].update(this._state, changed);
    }

    this.fire('state', {
      changed,
      previous,
      current: this._state
    });

    this._dependents.filter(dependent => {
      const componentState = {};
      let dirty = false;

      for (let j = 0; j < dependent.props.length; j += 1) {
        const prop = dependent.props[j];

        if (prop in changed) {
          componentState['$' + prop] = this._state[prop];
          dirty = true;
        }
      }

      if (dirty) {
        dependent.component._stage(componentState);

        return true;
      }
    }).forEach(dependent => {
      dependent.component.set({});
    });

    this.fire('update', {
      changed,
      previous,
      current: this._state
    });
  },

  _sortComputedProperties() {
    const computed = this._computed;
    const sorted = this._sortedComputedProperties = [];
    const visited = Object(_shared_js__WEBPACK_IMPORTED_MODULE_0__["blankObject"])();
    let currentKey;

    function visit(key) {
      const c = computed[key];

      if (c) {
        c.deps.forEach(dep => {
          if (dep === currentKey) {
            throw new Error(`Cyclical dependency detected between ${dep} <-> ${key}`);
          }

          visit(dep);
        });

        if (!visited[key]) {
          visited[key] = true;
          sorted.push(c);
        }
      }
    }

    for (const key in this._computed) {
      visit(currentKey = key);
    }
  },

  compute(key, deps, fn) {
    let value;
    const c = {
      deps,
      update: (state, changed, dirty) => {
        const values = deps.map(dep => {
          if (dep in changed) dirty = true;
          return state[dep];
        });

        if (dirty) {
          const newValue = fn.apply(null, values);

          if (this._differs(newValue, value)) {
            value = newValue;
            changed[key] = true;
            state[key] = value;
          }
        }
      }
    };
    this._computed[key] = c;

    this._sortComputedProperties();

    const state = Object(_shared_js__WEBPACK_IMPORTED_MODULE_0__["assign"])({}, this._state);
    const changed = {};
    c.update(state, changed, true);

    this._set(state, changed);
  },

  fire: _shared_js__WEBPACK_IMPORTED_MODULE_0__["fire"],
  get: _shared_js__WEBPACK_IMPORTED_MODULE_0__["get"],
  on: _shared_js__WEBPACK_IMPORTED_MODULE_0__["on"],

  set(newState) {
    const oldState = this._state;
    const changed = this._changed = {};
    let dirty = false;

    for (const key in newState) {
      if (this._computed[key]) throw new Error(`'${key}' is a read-only computed property`);
      if (this._differs(newState[key], oldState[key])) changed[key] = dirty = true;
    }

    if (!dirty) return;

    this._set(newState, changed);
  }

});


/***/ }),

/***/ "../../node_modules/value-equal/index.js":
/*!************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/value-equal/index.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "../../node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/*Babel»*/


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

/***/ "../../node_modules/warning/warning.js":
/*!**********************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/warning/warning.js ***!
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

var __DEV__ = "development" !== 'production';

var warning = function () {};

if (__DEV__) {
  warning = function (condition, format, args) {
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

/***/ 0:
/*!************************************************************************************************!*\
  !*** multi /Users/lee/Sites/Other/Front-End-Framework/@src/components/button/button.demo.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/lee/Sites/Other/Front-End-Framework/@src/components/button/button.demo.html */"../../@src/components/button/button.demo.html");


/***/ })

/******/ })));