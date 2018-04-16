exports.ids = ["demo-routes/feed-feed-demo-html"];
exports.modules = {

/***/ "../../_src/components/feed/feed.demo.html":
/*!*************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/_src/components/feed/feed.demo.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Demo = __webpack_require__(/*! ../demo/demo.wrapper.html */ "../../_src/components/demo/demo.wrapper.html");

var List = __webpack_require__(/*! ./feed.html */ "../../_src/components/feed/feed.html");

var store = __webpack_require__(/*! @/components/demo/demo.store.js */ "../../_src/components/demo/demo.store.js");
Demo = (Demo && Demo.__esModule) ? Demo["default"] : Demo;
List = (List && List.__esModule) ? List["default"] : List;
store = (store && store.__esModule) ? store["default"] : store;

function feed(feedResults) {
	return feedResults;
}

function props(feedUrl, feedResults, feed, page, MAX_PER_PAGE) { return {feed, feedUrl, MAX_PER_PAGE, page, feedResults}; }

function data() {
    return {
        feedUrl: "https://uconnect.wisc.edu/feeds/30m/json/homepage/index.json",
        MAX_PER_PAGE: 10,
        page: 1,
        feedResults: false
    };
};

function store_1() {
	return (window) ? window.store : store;
}

var Feed_demo = {};

Feed_demo.filename = "C:\\Users\\cdl193\\Sites\\Front-End-Framework\\_src\\components\\feed\\feed.demo.html";

Feed_demo.data = function() {
	return data();
};

Feed_demo.render = function(state, options = {}) {
	var components = new Set();

	function addComponent(component) {
		components.add(component);
	}

	var result = { head: '', addComponent };
	var html = Feed_demo._render(result, state, options);

	var cssCode = Array.from(components).map(c => c.css && c.css.code).filter(Boolean).join('\n');

	return {
		html,
		head: result.head,
		css: { code: cssCode, map: null },
		toString() {
			return html;
		}
	};
}

Feed_demo._render = function(__result, state, options) {
	options.store = store_1();
	__result.addComponent(Feed_demo);

	state = Object.assign(data(), state);

	state.feed = feed(state.feedResults);
	state.props = props(state.feedUrl, state.feedResults, state.feed, state.page, state.MAX_PER_PAGE);

	return `${Demo._render(__result, { demoTitle: "Feed Example", variants: true, currentRoute: "feed" }, { store: options.store, slotted: { default: () => `
    `, header: () => `<div slot="header"></div>
    `, variants: () => `<div slot="variants">
        ${List._render(__result, Object.assign(state.props), { store: options.store })}
    </div>
` } })}`;
};

Feed_demo.css = {
	code: '',
	map: null
};

var warned = false;
Feed_demo.renderCss = function() {
	if (!warned) {
		console.error('Component.renderCss(...) is deprecated and will be removed in v2 — use Component.render(...).css instead');
		warned = true;
	}

	var components = [];

	var seen = {};

	function addComponent(component) {
		var result = component.renderCss();
		result.components.forEach(x => {
			if (seen[x.filename]) return;
			seen[x.filename] = true;
			components.push(x);
		});
	}

	addComponent(Demo);
	addComponent(List);

	return {
		css: components.map(x => x.css).join('\n'),
		map: null,
		components
	};
};

module.exports = Feed_demo;

/***/ }),

/***/ "../../_src/components/feed/feed.html":
/*!********************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/_src/components/feed/feed.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Results = __webpack_require__(/*! ./feed.results.html */ "../../_src/components/feed/feed.results.html");

var store = __webpack_require__(/*! @/components/demo/demo.store.js */ "../../_src/components/demo/demo.store.js");
Results = (Results && Results.__esModule) ? Results["default"] : Results;
store = (store && store.__esModule) ? store["default"] : store;

function store_1() {
	return store;
}

var Feed = {};

Feed.filename = "C:\\Users\\cdl193\\Sites\\Front-End-Framework\\_src\\components\\feed\\feed.html";

Feed.data = function() {
	return {};
};

Feed.render = function(state, options = {}) {
	var components = new Set();

	function addComponent(component) {
		components.add(component);
	}

	var result = { head: '', addComponent };
	var html = Feed._render(result, state, options);

	var cssCode = Array.from(components).map(c => c.css && c.css.code).filter(Boolean).join('\n');

	return {
		html,
		head: result.head,
		css: { code: cssCode, map: null },
		toString() {
			return html;
		}
	};
}

Feed._render = function(__result, state, options) {
	options.store = store_1();
	__result.addComponent(Feed);

	state = Object.assign(options.store._init(["feedResults"]), state);

	return `<span id="feedTop" style="display:block; height:0; visibility:hidden;" class="svelte-12kut5u"></span>
<header class="svelte-12kut5u">
${ state.feedResults && state.page !== 1 ? `<button class="btn">« Page ${__escape(state.page - 1)}</button>` : `` }
    ${ state.page ? `Page ${__escape(state.page)}` : `` }
${ state.feedResults && ((state.page * (state.MAX_PER_PAGE + 1)) <= state.feedResults.result.length) ? `<button class="btn">Page ${__escape(state.page + 1)} »</button>` : `` }
    <hr>
</header>

${ state.$feedResults ? `<!-- Cached feed -->
    ${Results._render(__result, { results: state.feedResults, page: state.page, MAX_PER_PAGE: state.MAX_PER_PAGE }, { store: options.store })}` : `${(function(__value) { if(__isPromise(__value)) return `
        <p class="svelte-12kut5u">Loading Feed...</p>
    `; return `
        ${Results._render(__result, { results: __value.results, page: state.page, MAX_PER_PAGE: state.MAX_PER_PAGE }, { store: options.store })}
    `;}(state.feed)) }` }

${ state.feedResults && state.page !== 1 ? `<button class="btn svelte-12kut5u">« Page ${__escape(state.page - 1)}</button>` : `` }
    ${ state.page ? `Page ${__escape(state.page)}` : `` }
${ state.feedResults && ((state.page * (state.MAX_PER_PAGE + 1)) <= state.feedResults.result.length) ? `<button class="btn svelte-12kut5u">Page ${__escape(state.page + 1)} »</button>` : `` }`;
};

Feed.css = {
	code: "header.svelte-12kut5u,.svelte-12kut5u header{margin-bottom:1.6rem}",
	map: "{\"version\":3,\"file\":\"feed.html\",\"sources\":[\"feed.html\"],\"sourcesContent\":[\"<span id=\\\"feedTop\\\" style=\\\"display:block; height:0; visibility:hidden;\\\"></span>\\n<header>\\n{{#if feedResults && page !== 1}}\\n    <button class=\\\"btn\\\" on:click=\\\"set({'page': page - 1})\\\">« Page {{page - 1}}</button>\\n{{/if}}\\n    {{#if page}} Page {{page}} {{/if}}\\n{{#if feedResults && ((page * (MAX_PER_PAGE + 1)) <= feedResults.result.length)}}\\n    <button class=\\\"btn\\\" on:click=\\\"set({'page': page + 1})\\\">Page {{page + 1}} »</button>\\n{{/if}}\\n    <hr>\\n</header>\\n\\n{{#if $feedResults}}\\n    <!-- Cached feed -->\\n    <Results ref:feedList results=\\\"{{feedResults}}\\\" :page :MAX_PER_PAGE/>\\n{{else}}\\n\\n    {{#await feed}}\\n        <p>Loading Feed...</p>\\n    {{then response}}\\n        <Results ref:feedList results=\\\"{{response.results}}\\\" :page :MAX_PER_PAGE/>\\n    {{catch error}}\\n        <p>{{error}}</p>\\n    {{/await}}\\n\\n{{/if}}\\n\\n{{#if feedResults && page !== 1}}\\n    <button class=\\\"btn\\\" on:click=\\\"set({'page': page - 1})\\\">« Page {{page - 1}}</button>\\n{{/if}}\\n    {{#if page}} Page {{page}} {{/if}}\\n{{#if feedResults && ((page * (MAX_PER_PAGE + 1)) <= feedResults.result.length)}}\\n    <button class=\\\"btn\\\" on:click=\\\"set({'page': page + 1})\\\">Page {{page + 1}} »</button>\\n{{/if}}\\n\\n<style>\\n    header {\\n        margin-bottom: 1.6rem;\\n    }\\n</style>\\n\\n<script>\\n    import Results from './feed.results.html';\\n    import store from '@/components/demo/demo.store.js';\\n\\n    export default {\\n        components: { Results },\\n        oncreate() {\\n            const feedTop = document.getElementById('feedTop').offsetTop;\\n\\n            this.observe('page', (page) => {\\n                window.scroll(0, feedTop);\\n            });\\n        },\\n        store: () => store\\n    };\\n</script>\\n\"],\"names\":[],\"mappings\":\"AAoCI,4CAAO,CAAC,AACJ,aAAa,CAAE,MAAM,AACzB,CAAC\"}"
};

var warned = false;
Feed.renderCss = function() {
	if (!warned) {
		console.error('Component.renderCss(...) is deprecated and will be removed in v2 — use Component.render(...).css instead');
		warned = true;
	}

	var components = [];

	components.push({
		filename: Feed.filename,
		css: Feed.css && Feed.css.code,
		map: Feed.css && Feed.css.map
	});

	var seen = {};

	function addComponent(component) {
		var result = component.renderCss();
		result.components.forEach(x => {
			if (seen[x.filename]) return;
			seen[x.filename] = true;
			components.push(x);
		});
	}

	addComponent(Results);

	return {
		css: components.map(x => x.css).join('\n'),
		map: null,
		components
	};
};

var escaped = {
	'"': '&quot;',
	"'": '&#39;',
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;'
};

function __escape(html) {
	return String(html).replace(/["'&<>]/g, match => escaped[match]);
}

function __isPromise(value) {
	return value && typeof value.then === 'function';
}

module.exports = Feed;

/***/ }),

/***/ "../../_src/components/feed/feed.results.html":
/*!****************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/_src/components/feed/feed.results.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __import0 = __webpack_require__(/*! svelte-transitions */ "../../node_modules/svelte-transitions/module.js");

var __import1 = __webpack_require__(/*! eases-jsnext */ "../../node_modules/eases-jsnext/dist/eases.es.js");

var decodeEntities = __webpack_require__(/*! ../tools/decode-html.js */ "../../_src/components/tools/decode-html.js");
var slide = __import0.slide;
var cubicOut = __import1.cubicOut;
decodeEntities = (decodeEntities && decodeEntities.__esModule) ? decodeEntities["default"] : decodeEntities;

function pageStart(page, MAX_PER_PAGE) {
    return page === 1 ? 0 : Math.max(0, (page - 1) * (MAX_PER_PAGE + 1));
}

function pageEnd(pageStart, MAX_PER_PAGE) {
    return pageStart + MAX_PER_PAGE + 1;
}

function data() {
    return {
        results: false,
        page: 1,
        MAX_PER_PAGE: 10
    };
};

function description(description) {
    let text = Array.isArray(description) ? description[2] : description;
    let image = /(&lt;img[\s].*\/&gt;)/gi.exec(text);
    image = image ? image[0] :
        Array.isArray(description) && description[1] ?
            '&lt;img src="https://uconnect.wisc.edu' + description[1] + '"/&gt;'
            : '';
    text = text.replace(image, '');

    return {text: decodeEntities(text), image: decodeEntities(image)};
}

var Feed_results = {};

Feed_results.filename = "C:\\Users\\cdl193\\Sites\\Front-End-Framework\\_src\\components\\feed\\feed.results.html";

Feed_results.data = function() {
	return data();
};

Feed_results.render = function(state, options = {}) {
	var components = new Set();

	function addComponent(component) {
		components.add(component);
	}

	var result = { head: '', addComponent };
	var html = Feed_results._render(result, state, options);

	var cssCode = Array.from(components).map(c => c.css && c.css.code).filter(Boolean).join('\n');

	return {
		html,
		head: result.head,
		css: { code: cssCode, map: null },
		toString() {
			return html;
		}
	};
}

Feed_results._render = function(__result, state, options) {
	__result.addComponent(Feed_results);

	state = Object.assign(data(), state);

	state.pageStart = pageStart(state.page, state.MAX_PER_PAGE);
	state.pageEnd = pageEnd(state.pageStart, state.MAX_PER_PAGE);

	return `${ state.results ? `${ state.results.result.slice(state.pageStart, state.pageEnd).map((result) => `<div class="media-object svelte-1qugn67">
            ${ description(result.description).image ? `<div class="media-object__media">
                ${description(result.description).image}
                </div>` : `` }
            <div class="media-object__body">
                <strong>${__escape(state.results.result.indexOf(result))}: ${__escape(result.title)}</strong>
                <p>${description(result.description).text}</p>
            </div>
        </div>
        <hr class="svelte-1qugn67">`).join("")}` : `` }`;
};

Feed_results.css = {
	code: ".svelte-1qugn67.media-object__media img,.svelte-1qugn67 .media-object__media img{max-width:15rem !important;height:auto !important}",
	map: "{\"version\":3,\"file\":\"feed.results.html\",\"sources\":[\"feed.results.html\"],\"sourcesContent\":[\"{{#if results}}\\n    {{#each results.result.slice(pageStart, pageEnd) as result @title}}\\n        <div transition:slide class=\\\"media-object\\\">\\n            {{#if description(result.description).image}}\\n                <div class=\\\"media-object__media\\\">\\n                {{{description(result.description).image}}}\\n                </div>\\n            {{/if}}\\n            <div class=\\\"media-object__body\\\">\\n                <strong>{{results.result.indexOf(result)}}: {{result.title}}</strong>\\n                <p>{{{description(result.description).text}}}</p>\\n            </div>\\n        </div>\\n        <hr>\\n    {{/each}}\\n{{/if}}\\n\\n<style>\\n    .media-object__media img {\\n        max-width: 15rem !important;\\n        height: auto !important;\\n    }\\n</style>\\n\\n<script>\\n    import { slide } from 'svelte-transitions';\\n    import { cubicOut } from 'eases-jsnext';\\n    import decodeEntities from '../tools/decode-html.js';\\n\\n    export default {\\n        data() {\\n            return {\\n                results: false,\\n                page: 1,\\n                MAX_PER_PAGE: 10\\n            };\\n        },\\n        computed: {\\n            pageStart: (page, MAX_PER_PAGE) => {\\n                return page === 1 ? 0 : Math.max(0, (page - 1) * (MAX_PER_PAGE + 1));\\n            },\\n            pageEnd: (pageStart, MAX_PER_PAGE) => {\\n                return pageStart + MAX_PER_PAGE + 1;\\n            }\\n        },\\n        transitions: { slide },\\n        helpers: {\\n            cubicOut,\\n            description: (description) => {\\n                let text = Array.isArray(description) ? description[2] : description;\\n                let image = /(&lt;img[\\\\s].*\\\\/&gt;)/gi.exec(text);\\n                image = image ? image[0] :\\n                    Array.isArray(description) && description[1] ?\\n                        '&lt;img src=\\\"https://uconnect.wisc.edu' + description[1] + '\\\"/&gt;'\\n                        : '';\\n                text = text.replace(image, '');\\n\\n                return {text: decodeEntities(text), image: decodeEntities(image)};\\n            }\\n        },\\n        oncreate() {}\\n    };\\n</script>\\n\"],\"names\":[],\"mappings\":\"AAkBI,gFAAyB,CAAC,AACtB,SAAS,CAAE,KAAK,CAAC,UAAU,CAC3B,MAAM,CAAE,IAAI,CAAC,UAAU,AAC3B,CAAC\"}"
};

var warned = false;
Feed_results.renderCss = function() {
	if (!warned) {
		console.error('Component.renderCss(...) is deprecated and will be removed in v2 — use Component.render(...).css instead');
		warned = true;
	}

	var components = [];

	components.push({
		filename: Feed_results.filename,
		css: Feed_results.css && Feed_results.css.code,
		map: Feed_results.css && Feed_results.css.map
	});

	return {
		css: components.map(x => x.css).join('\n'),
		map: null,
		components
	};
};

var escaped = {
	'"': '&quot;',
	"'": '&#39;',
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;'
};

function __escape(html) {
	return String(html).replace(/["'&<>]/g, match => escaped[match]);
}

module.exports = Feed_results;

/***/ }),

/***/ "../../_src/components/tools/decode-html.js":
/*!**************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/_src/components/tools/decode-html.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const decodeEntities = function () {
    // this prevents any overhead from creating the object each time
    const element = document ? document.createElement('div') : '';

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

/* harmony default export */ __webpack_exports__["default"] = (decodeEntities);

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





/***/ })

};;