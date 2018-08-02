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
/******/ 	__webpack_require__.p = "/public/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../../@src/components/feed/feed.demo.html");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../@src/components/feed/feed.demo.html":
/*!**************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/@src/components/feed/feed.demo.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var store = __webpack_require__(/*! @/modules/demo/demo.store.js */ "../../@src/modules/demo/demo.store.js");

var Demo = __webpack_require__(/*! @/modules/demo/index.html */ "../../@src/modules/demo/index.html");

var List = __webpack_require__(/*! ./index.html */ "../../@src/components/feed/index.html");

store = store && store.__esModule ? store["default"] : store;
Demo = Demo && Demo.__esModule ? Demo["default"] : Demo;
List = List && List.__esModule ? List["default"] : List;

function feed({
  feedResults
}) {
  return feedResults;
}

function props(state) {
  return state;
}

function data() {
  return {
    feedUrl: 'https://uconnect.wisc.edu/feeds/30m/json/homepage/index.json',
    MAX_PER_PAGE: 10,
    page: 1,
    feedResults: false
  };
}

;

function store_1() {
  return store;
}

var Feed_demo = {};
Feed_demo.filename = "/Users/lee/Sites/Other/Front-End-Framework/@src/components/feed/feed.demo.html";

Feed_demo.data = function () {
  return data();
};

Feed_demo.render = function (state, options = {}) {
  var components = new Set();

  function addComponent(component) {
    components.add(component);
  }

  var result = {
    head: '',
    addComponent
  };

  var html = Feed_demo._render(result, state, options);

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

Feed_demo._render = function (__result, ctx, options) {
  options.store = store_1();

  __result.addComponent(Feed_demo);

  ctx = Object.assign(data(), ctx);
  ctx.feed = feed(ctx);
  ctx.props = props(ctx);
  return `${validateSsrComponent(Demo, 'Demo')._render(__result, {
    demoTitle: "Feed Example",
    variants: true,
    currentRoute: "feed"
  }, {
    store: options.store,
    slotted: {
      default: () => `
    `,
      header: () => `<div slot="header"></div>
    `,
      variants: () => `<div slot="variants">
        ${validateSsrComponent(List, 'List')._render(__result, Object.assign(ctx.props), {
        store: options.store
      })}
    </div>
`
    }
  })}`;
};

Feed_demo.css = {
  code: '',
  map: null
};
var warned = false;

function validateSsrComponent(component, name) {
  if (!component || !component._render) {
    if (name === 'svelte:component') name += 'this={...}';
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
  }

  return component;
}

module.exports = Feed_demo;

/***/ }),

/***/ "../../@src/components/feed/feed.results.html":
/*!*****************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/@src/components/feed/feed.results.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __import0 = __webpack_require__(/*! svelte-transitions */ "../../node_modules/svelte-transitions/module.js");

var __import1 = __webpack_require__(/*! eases-jsnext */ "../../node_modules/eases-jsnext/dist/eases.es.js");

var decodeEntities = __webpack_require__(/*! @/helpers/decode-html.js */ "../../@src/helpers/decode-html.js");

var slide = __import0.slide;
var fade = __import0.fade;
var cubicOut = __import1.cubicOut;
decodeEntities = decodeEntities && decodeEntities.__esModule ? decodeEntities["default"] : decodeEntities;

function pageStart({
  page,
  MAX_PER_PAGE
}) {
  return page === 1 ? 0 : Math.max(0, (page - 1) * (MAX_PER_PAGE + 1));
}

function pageEnd({
  pageStart,
  MAX_PER_PAGE
}) {
  return pageStart + MAX_PER_PAGE + 1;
}

function data() {
  return {
    results: false,
    page: 1,
    MAX_PER_PAGE: 10
  };
}

;

function description(description) {
  let text = Array.isArray(description) ? description[2] : description;
  let image = /(&lt;img[\s].*\/&gt;)/gi.exec(text);
  image = image ? image[0] : Array.isArray(description) && description[1] ? '&lt;img src="https://uconnect.wisc.edu' + description[1] + '"/&gt;' : '';
  text = text.replace(image, '');
  return {
    text: decodeEntities(text),
    image: decodeEntities(image)
  };
}

var Feed_results = {};
Feed_results.filename = "/Users/lee/Sites/Other/Front-End-Framework/@src/components/feed/feed.results.html";

Feed_results.data = function () {
  return data();
};

Feed_results.render = function (state, options = {}) {
  var components = new Set();

  function addComponent(component) {
    components.add(component);
  }

  var result = {
    head: '',
    addComponent
  };

  var html = Feed_results._render(result, state, options);

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

Feed_results._render = function (__result, ctx, options) {
  __result.addComponent(Feed_results);

  ctx = Object.assign(data(), ctx);
  ctx.pageStart = pageStart(ctx);
  ctx.pageEnd = pageEnd(ctx);
  return `${ctx.results ? `${each(ctx.results.result.slice(ctx.pageStart, ctx.pageEnd), item => Object.assign({}, ctx, {
    result: item
  }), ctx => `<div class="media-object">
            <div class="media-object__media svelte-1dysskj">
                ${description(ctx.result.description).image && description(ctx.result.description).image}
            </div>
            <div class="media-object__body">
                <strong>${escape(ctx.results.result.indexOf(ctx.result))}: ${escape(ctx.result.title)}</strong>
                <p>${description(ctx.result.description).text}</p>
            </div>
        </div>
        <hr>`)}` : ``}`;
};

Feed_results.css = {
  code: ".media-object__media.svelte-1dysskj{width:15rem;background-color:#124A79;display:flex;align-items:center;justify-content:center;min-height:10rem}.media-object__media.svelte-1dysskj img{max-width:100% !important;height:auto !important;margin:auto !important}",
  map: "{\"version\":3,\"file\":\"feed.results.html\",\"sources\":[\"feed.results.html\"],\"sourcesContent\":[\"{#if results}\\n    {#each results.result.slice(pageStart, pageEnd) as result (result.title)}\\n        <div class=\\\"media-object\\\" in:slide='{duration: 300, easing: cubicOut}' out:fade='{duration: 100}'>\\n            <div class=\\\"media-object__media\\\">\\n                {@html description(result.description).image && description(result.description).image}\\n            </div>\\n            <div class=\\\"media-object__body\\\">\\n                <strong>{results.result.indexOf(result)}: {result.title}</strong>\\n                <p>{@html description(result.description).text}</p>\\n            </div>\\n        </div>\\n        <hr>\\n    {/each}\\n{/if}\\n\\n<style>\\n    .media-object__media {\\n        width: 15rem;\\n        background-color: #124A79;\\n        display: flex;\\n        align-items: center;\\n        justify-content: center;\\n        min-height: 10rem;\\n    }\\n\\n    .media-object__media :global(img) {\\n        max-width: 100% !important;\\n        height: auto !important;\\n        margin: auto !important;\\n    }\\n</style>\\n\\n<script>\\n    import { slide, fade } from 'svelte-transitions';\\n    import { cubicOut } from 'eases-jsnext';\\n    import decodeEntities from '@/helpers/decode-html.js';\\n\\n    export default {\\n        transitions: { slide, fade },\\n        data() {\\n            return {\\n                results: false,\\n                page: 1,\\n                MAX_PER_PAGE: 10\\n            };\\n        },\\n        computed: {\\n            pageStart: ({ page, MAX_PER_PAGE }) => {\\n                return page === 1 ? 0 : Math.max(0, (page - 1) * (MAX_PER_PAGE + 1));\\n            },\\n            pageEnd: ({ pageStart, MAX_PER_PAGE }) => {\\n                return pageStart + MAX_PER_PAGE + 1;\\n            }\\n        },\\n        helpers: {\\n            cubicOut,\\n            description: (description) => {\\n                let text = Array.isArray(description) ? description[2] : description;\\n                let image = /(&lt;img[\\\\s].*\\\\/&gt;)/gi.exec(text);\\n                image = image ? image[0] :\\n                    Array.isArray(description) && description[1] ?\\n                        '&lt;img src=\\\"https://uconnect.wisc.edu' + description[1] + '\\\"/&gt;'\\n                        : '';\\n                text = text.replace(image, '');\\n\\n                return {text: decodeEntities(text), image: decodeEntities(image)};\\n            }\\n        },\\n        oncreate() {}\\n    };\\n</script>\\n\"],\"names\":[],\"mappings\":\"AAgBI,oBAAoB,eAAC,CAAC,AAClB,KAAK,CAAE,KAAK,CACZ,gBAAgB,CAAE,OAAO,CACzB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,UAAU,CAAE,KAAK,AACrB,CAAC,AAED,mCAAoB,CAAC,AAAQ,GAAG,AAAE,CAAC,AAC/B,SAAS,CAAE,IAAI,CAAC,UAAU,CAC1B,MAAM,CAAE,IAAI,CAAC,UAAU,CACvB,MAAM,CAAE,IAAI,CAAC,UAAU,AAC3B,CAAC\"}"
};
var warned = false;

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
module.exports = Feed_results;

/***/ }),

/***/ "../../@src/components/feed/index.html":
/*!**********************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/@src/components/feed/index.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var store = __webpack_require__(/*! @/modules/demo/demo.store.js */ "../../@src/modules/demo/demo.store.js");

var Results = __webpack_require__(/*! ./feed.results.html */ "../../@src/components/feed/feed.results.html");

store = store && store.__esModule ? store["default"] : store;
Results = Results && Results.__esModule ? Results["default"] : Results;

function feedMax({
  page,
  MAX_PER_PAGE,
  feedResults
}) {
  if (feedResults && feedResults.result) {
    return page * (MAX_PER_PAGE + 1) <= feedResults.result.length;
  }

  return false;
}

function pageString({
  page
}) {
  return page && 'Page' + page;
}

function store_1() {
  return store;
}

var Index = {};
Index.filename = "/Users/lee/Sites/Other/Front-End-Framework/@src/components/feed/index.html";

Index.data = function () {
  return {};
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

  ctx = Object.assign(options.store._init(["feedResults"]), ctx);
  ctx.feedMax = feedMax(ctx);
  ctx.pageString = pageString(ctx);
  return `<div id="feedTop" style="display:block; height:0; visibility:hidden;"></div>
<header class="svelte-12kut5u">
${ctx.feedResults ? `${ctx.page !== 1 ? `<button class="btn">« Page ${escape(ctx.page - 1)}</button>` : ``}
        ${escape(ctx.pageString)}
    ${ctx.feedMax ? `<button class="btn">Page ${escape(ctx.page + 1)} »</button>` : ``}` : ``}
    <hr>
</header>

${ctx.$feedResults ? `
    ${validateSsrComponent(Results, 'Results')._render(__result, {
    results: ctx.feedResults,
    page: ctx.page,
    MAX_PER_PAGE: ctx.MAX_PER_PAGE
  }, {
    store: options.store
  })}` : `${function (__value) {
    if (isPromise(__value)) return `
        <p>Loading Feed...</p>
    `;
    return function (ctx) {
      return `
        ${validateSsrComponent(Results, 'Results')._render(__result, {
        results: ctx.response.results,
        page: ctx.page,
        MAX_PER_PAGE: ctx.MAX_PER_PAGE
      }, {
        store: options.store
      })}
    `;
    }(Object.assign({}, ctx, {
      response: __value
    }));
  }(ctx.feed)}`}

${ctx.feedResults ? `${ctx.page !== 1 ? `<button class="btn">« Page ${escape(ctx.page - 1)}</button>` : ``}
        ${escape(ctx.pageString)}
    ${ctx.feedMax ? `<button class="btn">Page ${escape(ctx.page + 1)} »</button>` : ``}` : ``}`;
};

Index.css = {
  code: "header.svelte-12kut5u{margin-bottom:1.6rem}",
  map: "{\"version\":3,\"file\":\"index.html\",\"sources\":[\"index.html\"],\"sourcesContent\":[\"<div id=\\\"feedTop\\\" style=\\\"display:block; height:0; visibility:hidden;\\\"></div>\\n<header>\\n{#if feedResults}\\n    {#if page !== 1}\\n    <button class=\\\"btn\\\" on:click=\\\"set({'page': page - 1})\\\">« Page {page - 1}</button>\\n    {/if}\\n        {pageString}\\n    {#if feedMax}\\n        <button class=\\\"btn\\\" on:click=\\\"set({'page': page + 1})\\\">Page {page + 1} »</button>\\n    {/if}\\n{/if}\\n    <hr>\\n</header>\\n\\n{#if $feedResults}\\n    <!-- Cached feed, from store -->\\n    <Results ref:feedList results=\\\"{feedResults}\\\" {page} {MAX_PER_PAGE}/>\\n{:else}\\n\\n    {#await feed}\\n        <p>Loading Feed...</p>\\n    {:then response}\\n        <Results ref:feedList results=\\\"{response.results}\\\" {page} {MAX_PER_PAGE}/>\\n    {:catch error}\\n        <p>Feed load error: {@html error}</p>\\n    {/await}\\n\\n{/if}\\n\\n{#if feedResults}\\n    {#if page !== 1}\\n        <button class=\\\"btn\\\" on:click=\\\"set({'page': page - 1})\\\">« Page {page - 1}</button>\\n    {/if}\\n        {pageString}\\n    {#if feedMax}\\n        <button class=\\\"btn\\\" on:click=\\\"set({'page': page + 1})\\\">Page {page + 1} »</button>\\n    {/if}\\n{/if}\\n\\n<style>\\n    header {\\n        margin-bottom: 1.6rem;\\n    }\\n</style>\\n\\n<script>\\n    import store from '@/modules/demo/demo.store.js';\\n\\n    export default {\\n        components: {\\n            Results: './feed.results.html'\\n        },\\n        computed: {\\n            feedMax: ({page, MAX_PER_PAGE, feedResults}) => {\\n                if (feedResults && feedResults.result) {\\n                    return ((page * (MAX_PER_PAGE + 1)) <= feedResults.result.length);\\n                }\\n                return false;\\n            },\\n            pageString: ({page}) => {\\n                return page && 'Page' + page;\\n            }\\n        },\\n        oncreate() {\\n            this.set({ 'feedTop': document.getElementById('feedTop').offsetTop });\\n            this.on('update', ({ changed, current, previous }) => {\\n                if (changed.page) {\\n                    window.scroll(0, this.get()[\\\"feedTop\\\"]);\\n                }\\n            });\\n        },\\n\\n        store: () => store\\n    };\\n</script>\\n\"],\"names\":[],\"mappings\":\"AAwCI,MAAM,eAAC,CAAC,AACJ,aAAa,CAAE,MAAM,AACzB,CAAC\"}"
};
var warned = false;

function escape(html) {
  return String(html).replace(/["'&<>]/g, match => escaped[match]);
}

function validateSsrComponent(component, name) {
  if (!component || !component._render) {
    if (name === 'svelte:component') name += 'this={...}';
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
  }

  return component;
}

function isPromise(value) {
  return value && typeof value.then === 'function';
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

/***/ "../../@src/helpers/decode-html.js":
/*!******************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/@src/helpers/decode-html.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const decodeHtml = function () {
  // this prevents any overhead from creating the object each time
  const element = typeof document !== 'undefined' ? document.createElement('div') : '';

  function decodeHTMLEntities(str) {
    if (str && typeof str === 'string') {
      // strip script/html tags
      str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
      str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
      element.innerHTML = str;
      str = element.textContent;
      element.textContent = '';
    }

    return str;
  }

  return decodeHTMLEntities;
}();

/* harmony default export */ __webpack_exports__["default"] = (decodeHtml);

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

if (typeof window === 'undefined') {
  history = createMemoryHistory();
} else {
  history = createBrowserHistory();
}

function data() {
  return {
    links: [['Button', '/demo/button/'], ['Generic', '/demo/generic/'], ['Feed', '/demo/feed/']],
    "history": history
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
  return `
<nav class="demo-navigation">
    <img src="/public/static/img/favicons/icon.svg" style="height: ${escape(60 / 16)}rem;" alt="">
    ${each(ctx.links, item => Object.assign({}, ctx, {
    name: item[0],
    url: item[1]
  }), ctx => `${validateSsrComponent(NavLink, 'NavLink')._render(__result, {
    to: ctx.url,
    className: "demo-navigation__link"
  }, {
    store: options.store,
    slotted: {
      default: () => `${escape(ctx.name)}`
    }
  })}`)}
</nav>`;
};

Demo_nav.css = {
  code: '',
  map: null
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
    if (name === 'svelte:component') name += 'this={...}';
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

var Main = __webpack_require__(/*! @/modules/main-wrapper/index.html */ "../../@src/modules/main-wrapper/index.html");

var Nav = __webpack_require__(/*! @/modules/demo/demo.nav.html */ "../../@src/modules/demo/demo.nav.html");

store = store && store.__esModule ? store["default"] : store;
Main = Main && Main.__esModule ? Main["default"] : Main;
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

    ${validateSsrComponent(Main, 'Main')._render(__result, {
    mainClass: "demo-body"
  }, {
    store: options.store,
    slotted: {
      default: () => `
        <div class="wrap">
            ${ctx.variants || ctx.variantTitle ? `<h2 class="demo-body__head">
                ${escape(ctx.variantTitle || ctx.demoTitle)} Variants
            </h2>
            ${options && options.slotted && options.slotted.variants ? options.slotted.variants() : ``}` : ``}
        </div>
    `
    }
  })}
</div>`;
};

Index.css = {
  code: '',
  map: null
};
var warned = false;

function validateSsrComponent(component, name) {
  if (!component || !component._render) {
    if (name === 'svelte:component') name += 'this={...}';
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

/***/ "../../@src/modules/main-wrapper/index.html":
/*!***************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/@src/modules/main-wrapper/index.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function data() {
  return {
    mainClass: "main"
  };
}

;
var Index = {};
Index.filename = "/Users/lee/Sites/Other/Front-End-Framework/@src/modules/main-wrapper/index.html";

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
  return `<main class="${escape(ctx.mainClass)}">
    ${options && options.slotted && options.slotted.default ? options.slotted.default() : ``}
</main>`;
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

/***/ "../../node_modules/eases-jsnext/dist/eases.es.js":
/*!*********************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/eases-jsnext/dist/eases.es.js ***!
  \*********************************************************************************************/
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
  if ((t *= 2) < 1) return 0.5 * (t * t * ((s + 1) * t - s));
  return 0.5 * ((t -= 2) * t * ((s + 1) * t + s) + 2);
}

function backIn(t) {
  var s = 1.70158;
  return t * t * ((s + 1) * t - s);
}

function backOut(t) {
  var s = 1.70158;
  return --t * t * ((s + 1) * t + s) + 1;
}

function bounceOut(t) {
  var a = 4.0 / 11.0;
  var b = 8.0 / 11.0;
  var c = 9.0 / 10.0;
  var ca = 4356.0 / 361.0;
  var cb = 35442.0 / 1805.0;
  var cc = 16061.0 / 1805.0;
  var t2 = t * t;
  return t < a ? 7.5625 * t2 : t < b ? 9.075 * t2 - 9.9 * t + 3.4 : t < c ? ca * t2 - cb * t + cc : 10.8 * t * t - 20.52 * t + 10.72;
}

function bounceInOut(t) {
  return t < 0.5 ? 0.5 * (1.0 - bounceOut(1.0 - t * 2.0)) : 0.5 * bounceOut(t * 2.0 - 1.0) + 0.5;
}

function bounceIn(t) {
  return 1.0 - bounceOut(1.0 - t);
}

function circInOut(t) {
  if ((t *= 2) < 1) return -0.5 * (Math.sqrt(1 - t * t) - 1);
  return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
}

function circIn(t) {
  return 1.0 - Math.sqrt(1.0 - t * t);
}

function circOut(t) {
  return Math.sqrt(1 - --t * t);
}

function cubicInOut(t) {
  return t < 0.5 ? 4.0 * t * t * t : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0;
}

function cubicIn(t) {
  return t * t * t;
}

function cubicOut(t) {
  var f = t - 1.0;
  return f * f * f + 1.0;
}

function elasticInOut(t) {
  return t < 0.5 ? 0.5 * Math.sin(+13.0 * Math.PI / 2 * 2.0 * t) * Math.pow(2.0, 10.0 * (2.0 * t - 1.0)) : 0.5 * Math.sin(-13.0 * Math.PI / 2 * (2.0 * t - 1.0 + 1.0)) * Math.pow(2.0, -10.0 * (2.0 * t - 1.0)) + 1.0;
}

function elasticIn(t) {
  return Math.sin(13.0 * t * Math.PI / 2) * Math.pow(2.0, 10.0 * (t - 1.0));
}

function elasticOut(t) {
  return Math.sin(-13.0 * (t + 1.0) * Math.PI / 2) * Math.pow(2.0, -10.0 * t) + 1.0;
}

function expoInOut(t) {
  return t === 0.0 || t === 1.0 ? t : t < 0.5 ? +0.5 * Math.pow(2.0, 20.0 * t - 10.0) : -0.5 * Math.pow(2.0, 10.0 - t * 20.0) + 1.0;
}

function expoIn(t) {
  return t === 0.0 ? t : Math.pow(2.0, 10.0 * (t - 1.0));
}

function expoOut(t) {
  return t === 1.0 ? t : 1.0 - Math.pow(2.0, -10.0 * t);
}

function linear(t) {
  return t;
}

function quadInOut(t) {
  t /= 0.5;
  if (t < 1) return 0.5 * t * t;
  t--;
  return -0.5 * (t * (t - 2) - 1);
}

function quadIn(t) {
  return t * t;
}

function quadOut(t) {
  return -t * (t - 2.0);
}

function quarticInOut(t) {
  return t < 0.5 ? +8.0 * Math.pow(t, 4.0) : -8.0 * Math.pow(t - 1.0, 4.0) + 1.0;
}

function quarticIn(t) {
  return Math.pow(t, 4.0);
}

function quarticOut(t) {
  return Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0;
}

function qinticInOut(t) {
  if ((t *= 2) < 1) return 0.5 * t * t * t * t * t;
  return 0.5 * ((t -= 2) * t * t * t * t + 2);
}

function qinticIn(t) {
  return t * t * t * t * t;
}

function qinticOut(t) {
  return --t * t * t * t * t + 1;
}

function sineInOut(t) {
  return -0.5 * (Math.cos(Math.PI * t) - 1);
}

function sineIn(t) {
  var v = Math.cos(t * Math.PI * 0.5);
  if (Math.abs(v) < 1e-14) return 1;else return 1 - v;
}

function sineOut(t) {
  return Math.sin(t * Math.PI / 2);
}



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
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! warning */ "../../node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! invariant */ "../../node_modules/invariant/invariant.js");
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
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! warning */ "../../node_modules/warning/warning.js");
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
  return `<a href="${escape(ctx.href)}" target="${escape(ctx.target)}" class="${escape(ctx.computedClass)}" aria-current="${escape(ctx.computedAriaCurrent)}">
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

/***/ "../../node_modules/svelte-transitions-draw/module.js":
/*!*************************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/svelte-transitions-draw/module.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var eases_jsnext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eases-jsnext */ "../../node_modules/eases-jsnext/dist/eases.es.js");


function draw(node, params) {
  const len = node.getTotalLength();
  return {
    delay: params.delay,
    duration: params.duration || 800,
    easing: params.easing || eases_jsnext__WEBPACK_IMPORTED_MODULE_0__["cubicInOut"],
    css: (t, u) => `stroke-dasharray: ${t * len} ${u * len}`
  };
}

/* harmony default export */ __webpack_exports__["default"] = (draw);

/***/ }),

/***/ "../../node_modules/svelte-transitions-fade/module.js":
/*!*************************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/svelte-transitions-fade/module.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function fade(node, ref) {
  var delay = ref.delay;
  if (delay === void 0) delay = 0;
  var duration = ref.duration;
  if (duration === void 0) duration = 400;
  var o = +getComputedStyle(node).opacity;
  return {
    delay: delay,
    duration: duration,
    css: function (t) {
      return "opacity: " + t * o;
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (fade);

/***/ }),

/***/ "../../node_modules/svelte-transitions-fly/module.js":
/*!************************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/svelte-transitions-fly/module.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var eases_jsnext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eases-jsnext */ "../../node_modules/eases-jsnext/dist/eases.es.js");


function fly(node, ref) {
  var delay = ref.delay;
  if (delay === void 0) delay = 0;
  var duration = ref.duration;
  if (duration === void 0) duration = 400;
  var easing = ref.easing;
  if (easing === void 0) easing = eases_jsnext__WEBPACK_IMPORTED_MODULE_0__["cubicOut"];
  var x = ref.x;
  if (x === void 0) x = 0;
  var y = ref.y;
  if (y === void 0) y = 0;
  var style = getComputedStyle(node);
  var opacity = +style.opacity;
  var transform = style.transform === 'none' ? '' : style.transform;
  return {
    delay: delay,
    duration: duration,
    easing: easing,
    css: function (t) {
      return "\n\t\t\ttransform: " + transform + " translate(" + (1 - t) * x + "px, " + (1 - t) * y + "px);\n\t\t\topacity: " + t * opacity;
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (fly);

/***/ }),

/***/ "../../node_modules/svelte-transitions-slide/module.js":
/*!**************************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/svelte-transitions-slide/module.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var eases_jsnext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eases-jsnext */ "../../node_modules/eases-jsnext/dist/eases.es.js");


function slide(node, ref) {
  var delay = ref.delay;
  if (delay === void 0) delay = 0;
  var duration = ref.duration;
  if (duration === void 0) duration = 400;
  var easing = ref.easing;
  if (easing === void 0) easing = eases_jsnext__WEBPACK_IMPORTED_MODULE_0__["cubicOut"];
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
    css: function (t) {
      return "overflow: hidden;" + "opacity: " + Math.min(t * 20, 1) * opacity + ";" + "height: " + t * height + "px;" + "padding-top: " + t * paddingTop + "px;" + "padding-bottom: " + t * paddingBottom + "px;" + "margin-top: " + t * marginTop + "px;" + "margin-bottom: " + t * marginBottom + "px;" + "border-top-width: " + t * borderTopWidth + "px;" + "border-bottom-width: " + t * borderBottomWidth + "px;";
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (slide);

/***/ }),

/***/ "../../node_modules/svelte-transitions/module.js":
/*!********************************************************************************************!*\
  !*** /Users/lee/Sites/Other/Front-End-Framework/node_modules/svelte-transitions/module.js ***!
  \********************************************************************************************/
/*! exports provided: draw, fade, fly, slide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_transitions_draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte-transitions-draw */ "../../node_modules/svelte-transitions-draw/module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "draw", function() { return svelte_transitions_draw__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var svelte_transitions_fade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte-transitions-fade */ "../../node_modules/svelte-transitions-fade/module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fade", function() { return svelte_transitions_fade__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var svelte_transitions_fly__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svelte-transitions-fly */ "../../node_modules/svelte-transitions-fly/module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fly", function() { return svelte_transitions_fly__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var svelte_transitions_slide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! svelte-transitions-slide */ "../../node_modules/svelte-transitions-slide/module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slide", function() { return svelte_transitions_slide__WEBPACK_IMPORTED_MODULE_3__["default"]; });






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
      win && win.removeEventListener('resize', fn);
      element.removeChild(object);
    }
  };
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
  let obj = fn(node, params);
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
          program.group.callbacks.forEach(fn => {
            fn();
          });
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
}

function spread(args) {
  const attributes = Object.assign({}, ...args);
  let str = '';
  Object.keys(attributes).forEach(name => {
    const value = attributes[name];
    if (value === undefined) return;
    if (value === true) str += " " + name;
    str += " " + name + "=" + JSON.stringify(value);
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
    if (name === 'svelte:component') name += 'this={...}';
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
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
    cancel: function () {
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

    const dependents = this._dependents.slice(); // guard against mutations


    for (let i = 0; i < dependents.length; i += 1) {
      const dependent = dependents[i];
      const componentState = {};
      let dirty = false;

      for (let j = 0; j < dependent.props.length; j += 1) {
        const prop = dependent.props[j];

        if (prop in changed) {
          componentState['$' + prop] = this._state[prop];
          dirty = true;
        }
      }

      if (dirty) dependent.component.set(componentState);
    }

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
      if (this._computed[key]) throw new Error(`'${key}' is a read-only property`);
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

/***/ })

/******/ })));