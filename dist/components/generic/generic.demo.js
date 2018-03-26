(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
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
/******/ 	__webpack_require__.p = "C:\\Users\\cdl193\\Sites\\Front-End-Framework\\dist";
/******/
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../../_src/components/generic/generic.demo.html");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../_src/components/base/base.sv.html":
/*!***********************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/_src/components/base/base.sv.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function data(){
    return {
        mainClass: "main"
    }
};

var Base_sv = {};

Base_sv.filename = "C:\\Users\\cdl193\\Sites\\Front-End-Framework\\_src\\components\\base\\base.sv.html";

Base_sv.data = function() {
	return data();
};

Base_sv.render = function(state, options = {}) {
	var components = new Set();

	function addComponent(component) {
		components.add(component);
	}

	var result = { head: '', addComponent };
	var html = Base_sv._render(result, state, options);

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

Base_sv._render = function(__result, state, options) {
	__result.addComponent(Base_sv);

	state = Object.assign(data(), state);

	return `<main class="${__escape(state.mainClass)}">
    ${options && options.slotted && options.slotted.default ? options.slotted.default() : ``}
</main>`;
};

Base_sv.css = {
	code: '',
	map: null
};

var warned = false;
Base_sv.renderCss = function() {
	if (!warned) {
		console.error('Component.renderCss(...) is deprecated and will be removed in v2 — use Component.render(...).css instead');
		warned = true;
	}

	var components = [];

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
/* harmony default export */ __webpack_exports__["default"] = (Base_sv);

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

/***/ "../../_src/components/demo/demo.wrapper.html":
/*!****************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/_src/components/demo/demo.wrapper.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_base_sv_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/base.sv.html */ "../../_src/components/base/base.sv.html");
/* harmony import */ var _demo_store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demo.store.js */ "../../_src/components/demo/demo.store.js");
/* harmony import */ var _demo_store_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_demo_store_js__WEBPACK_IMPORTED_MODULE_1__);



function data() {
    return {
        demoTitle: 'Demo',
        variantTitle: false,
        variants: false
    };
};

function store_1() {
	return _demo_store_js__WEBPACK_IMPORTED_MODULE_1___default.a;
}

var Demo_wrapper = {};

Demo_wrapper.filename = "C:\\Users\\cdl193\\Sites\\Front-End-Framework\\_src\\components\\demo\\demo.wrapper.html";

Demo_wrapper.data = function() {
	return data();
};

Demo_wrapper.render = function(state, options = {}) {
	var components = new Set();

	function addComponent(component) {
		components.add(component);
	}

	var result = { head: '', addComponent };
	var html = Demo_wrapper._render(result, state, options);

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

Demo_wrapper._render = function(__result, state, options) {
	options.store = store_1();
	__result.addComponent(Demo_wrapper);

	state = Object.assign(data(), state);

	return `<div class="demo">
    <link rel="stylesheet" href="/public/css/demo/demo.css">

    <header class="demo-header">
        <div class="wrap">
            <h1 class="demo-header__title">
                ${__escape(state.demoTitle)}
            </h1>
            <div class="demo-header__component">
                ${options && options.slotted && options.slotted.header ? options.slotted.header() : `
                    <p> No Examples </p>
                `}
            </div>
        </div>
    </header>

    ${_base_base_sv_html__WEBPACK_IMPORTED_MODULE_0__["default"]._render(__result, {mainClass: "demo-body"}, { store: options.store, slotted: { default: () => `
        <div class="wrap">
            ${ state.variants || state.variantTitle ? `<h2 class="demo-body__head">
                ${__escape(state.variantTitle || state.demoTitle)} Variants
            </h2>
            ${options && options.slotted && options.slotted.variants ? options.slotted.variants() : ``}` : `` }
        </div>
    ` } })}
</div>`;
};

Demo_wrapper.css = {
	code: '',
	map: null
};

var warned = false;
Demo_wrapper.renderCss = function() {
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

	addComponent(_base_base_sv_html__WEBPACK_IMPORTED_MODULE_0__["default"]);

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
/* harmony default export */ __webpack_exports__["default"] = (Demo_wrapper);

/***/ }),

/***/ "../../_src/components/generic/generic.demo.html":
/*!*******************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/_src/components/generic/generic.demo.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generic_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generic.html */ "../../_src/components/generic/generic.html");
/* harmony import */ var _demo_demo_wrapper_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../demo/demo.wrapper.html */ "../../_src/components/demo/demo.wrapper.html");
/* harmony import */ var _tools_title_case_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tools/title-case.js */ "../../_src/components/tools/title-case.js");
/* harmony import */ var _tools_title_case_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tools_title_case_js__WEBPACK_IMPORTED_MODULE_2__);




function data() {
    return {
        widths: ['normal', 'wide', 'compact']
    };
};

var Generic_demo = {};

Generic_demo.filename = "C:\\Users\\cdl193\\Sites\\Front-End-Framework\\_src\\components\\generic\\generic.demo.html";

Generic_demo.data = function() {
	return data();
};

Generic_demo.render = function(state, options = {}) {
	var components = new Set();

	function addComponent(component) {
		components.add(component);
	}

	var result = { head: '', addComponent };
	var html = Generic_demo._render(result, state, options);

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

Generic_demo._render = function(__result, state, options) {
	__result.addComponent(Generic_demo);

	state = Object.assign(data(), state);

	return `${_demo_demo_wrapper_html__WEBPACK_IMPORTED_MODULE_1__["default"]._render(__result, {demoTitle: "Generic", variants: true}, { store: options.store, slotted: { default: () => `
    `, header: () => `<div slot="header">
        ${_generic_html__WEBPACK_IMPORTED_MODULE_0__["default"]._render(__result, {}, { store: options.store })}
    </div>
    `, variants: () => `<div slot="variants">
        ${ state.widths.map((componentType) => `${_generic_html__WEBPACK_IMPORTED_MODULE_0__["default"]._render(__result, {type: componentType, body: _tools_title_case_js__WEBPACK_IMPORTED_MODULE_2___default()(componentType), header: `Generic ${__escape( _tools_title_case_js__WEBPACK_IMPORTED_MODULE_2___default()(componentType))} "Card"`}, { store: options.store })}`).join("")}
    </div>
` } })}`;
};

Generic_demo.css = {
	code: '',
	map: null
};

var warned = false;
Generic_demo.renderCss = function() {
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

	addComponent(_demo_demo_wrapper_html__WEBPACK_IMPORTED_MODULE_1__["default"]);
	addComponent(_generic_html__WEBPACK_IMPORTED_MODULE_0__["default"]);

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
/* harmony default export */ __webpack_exports__["default"] = (Generic_demo);

/***/ }),

/***/ "../../_src/components/generic/generic.html":
/*!**************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/_src/components/generic/generic.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools_modifiers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tools/modifiers.js */ "../../_src/components/tools/modifiers.js");
/* harmony import */ var _tools_modifiers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tools_modifiers_js__WEBPACK_IMPORTED_MODULE_0__);


function data() {
    return {
        componentClass: 'generic',
        header: "Generic Header",
        body: "Body",
        footer: "Footer",
        type: [],
    }
};

function setup(thisComponent) {
    thisComponent.TYPES = ['wide', 'compact', ''];
};

var Generic = {};

Generic.filename = "C:\\Users\\cdl193\\Sites\\Front-End-Framework\\_src\\components\\generic\\generic.html";

Generic.data = function() {
	return data();
};

Generic.render = function(state, options = {}) {
	var components = new Set();

	function addComponent(component) {
		components.add(component);
	}

	var result = { head: '', addComponent };
	var html = Generic._render(result, state, options);

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

Generic._render = function(__result, state, options) {
	__result.addComponent(Generic);

	state = Object.assign(data(), state);

	return `<div class="component ${__escape(state.componentClass)}
    ${__escape(_tools_modifiers_js__WEBPACK_IMPORTED_MODULE_0___default()(state.type, state.componentClass + '--'))} svelte-1foufe2">
    <header class="${__escape(state.componentClass)}__header
        ${__escape(_tools_modifiers_js__WEBPACK_IMPORTED_MODULE_0___default()(state.type, state.componentClass + '__header--'))}">
        <h2 class="${__escape(state.componentClass)}__title">
            ${state.header}
        </h2>
    </header>
    <div class="${__escape(state.componentClass)}__body
    ${__escape(_tools_modifiers_js__WEBPACK_IMPORTED_MODULE_0___default()(state.type, state.componentClass + '__body--'))}">
        <p class="${__escape(state.componentClass)}__text">
            ${state.body}
        </p>
    </div>
    <footer class="${__escape(state.componentClass)}__footer
    ${__escape(_tools_modifiers_js__WEBPACK_IMPORTED_MODULE_0___default()(state.type, state.componentClass + '__footer--'))}">
        <p class="${__escape(state.componentClass)}__text">
            ${state.footer}
        </p>
    </footer>
</div>`;
};

Generic.css = {
	code: ".svelte-1foufe2.generic,.svelte-1foufe2 .generic{display:inline-flex;flex-direction:column;max-width:50rem;width:50%;background-color:white;border-radius:3px;margin-bottom:1.5rem;margin-right:1.5rem}.svelte-1foufe2.generic--wide,.svelte-1foufe2 .generic--wide{max-width:none;width:calc(75% - 1.5rem)}.svelte-1foufe2.generic--compact,.svelte-1foufe2 .generic--compact{width:calc(25% - 1.5rem)}.svelte-1foufe2.generic p:last-child,.svelte-1foufe2 .generic p:last-child{margin-bottom:0}.svelte-1foufe2.generic__header,.svelte-1foufe2 .generic__header,.svelte-1foufe2.generic__body,.svelte-1foufe2 .generic__body,.svelte-1foufe2.generic__footer,.svelte-1foufe2 .generic__footer{flex:1 0 auto;padding:1.5rem}.svelte-1foufe2.generic__body,.svelte-1foufe2 .generic__body{border-top:1px solid #ddd;border-bottom:1px solid #ddd}.svelte-1foufe2.generic__title,.svelte-1foufe2 .generic__title{font-size:1.5rem;margin:0}",
	map: "{\"version\":3,\"file\":\"generic.html\",\"sources\":[\"generic.html\"],\"sourcesContent\":[\"<div class=\\\"component {{componentClass}}\\n    {{modifiers(type, componentClass + '--')}}\\\">\\r\\n    <header class=\\\"{{componentClass}}__header\\n        {{modifiers(type, componentClass + '__header--')}}\\\">\\r\\n        <h2 class=\\\"{{componentClass}}__title\\\">\\r\\n            {{{header}}}\\r\\n        </h2>\\r\\n    </header>\\r\\n    <div class=\\\"{{componentClass}}__body\\n    {{modifiers(type, componentClass + '__body--')}}\\\">\\r\\n        <p class=\\\"{{componentClass}}__text\\\">\\r\\n            {{{body}}}\\r\\n        </p>\\r\\n    </div>\\r\\n    <footer class=\\\"{{componentClass}}__footer\\n    {{modifiers(type, componentClass + '__footer--')}}\\\">\\r\\n        <p class=\\\"{{componentClass}}__text\\\">\\r\\n            {{{footer}}}\\r\\n        </p>\\r\\n    </footer>\\r\\n</div>\\n\\n<style>\\n    .generic {\\n        display: inline-flex;\\n        flex-direction: column;\\n        max-width: 50rem;\\n        width: 50%;\\n        background-color: white;\\n        border-radius: 3px;\\n        margin-bottom: 1.5rem;\\n        margin-right: 1.5rem;\\n    }\\n\\n    .generic--wide {\\n        max-width: none;\\n        width: calc(75% - 1.5rem);\\n    }\\n\\n    .generic--compact {\\n        width: calc(25% - 1.5rem);\\n    }\\n\\n    .generic p:last-child {\\n        margin-bottom: 0;\\n    }\\n\\n    .generic__header,\\n    .generic__body,\\n    .generic__footer {\\n        flex: 1 0 auto;\\n        padding: 1.5rem;\\n    }\\n\\n    .generic__body {\\n        border-top: 1px solid #ddd;\\n        border-bottom: 1px solid #ddd;\\n    }\\n\\n    .generic__title {\\n        font-size: 1.5rem;\\n        margin: 0;\\n    }\\n</style>\\n\\n<script>\\n    import modifiers from '../tools/modifiers.js';\\n\\n    export default {\\n        data() {\\n            return {\\n                componentClass: 'generic',\\n                header: \\\"Generic Header\\\",\\n                body: \\\"Body\\\",\\n                footer: \\\"Footer\\\",\\n                type: [],\\n            }\\n        },\\n        helpers: {\\n            modifiers\\n        },\\n\\n        setup(thisComponent) {\\n            thisComponent.TYPES = ['wide', 'compact', ''];\\n        },\\n\\n        methods: {\\n            cycleTypes() {\\n                const buttonTypes = this.constructor.TYPES;\\n                const currentType = this.get('type')[0] || '';\\n                const i = buttonTypes.indexOf(currentType);\\n                const nextItem = (buttonTypes.length - 1) > i ? buttonTypes[i + 1] : buttonTypes[0];\\n\\n                this.set({body: titleCase(nextItem || 'normal')})\\n                return this.set({type: [nextItem]});\\n            }\\n        }\\n    }\\n</script>\\n\"],\"names\":[],\"mappings\":\"AAuBI,gDAAS,CAAC,AACN,OAAO,CAAE,WAAW,CACpB,cAAc,CAAE,MAAM,CACtB,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,GAAG,CACV,gBAAgB,CAAE,KAAK,CACvB,aAAa,CAAE,GAAG,CAClB,aAAa,CAAE,MAAM,CACrB,YAAY,CAAE,MAAM,AACxB,CAAC,AAED,4DAAe,CAAC,AACZ,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,MAAM,CAAC,AAC7B,CAAC,AAED,kEAAkB,CAAC,AACf,KAAK,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,MAAM,CAAC,AAC7B,CAAC,AAED,0EAAsB,CAAC,AACnB,aAAa,CAAE,CAAC,AACpB,CAAC,AAED,gEAAgB,CAChB,4DAAc,CACd,gEAAiB,CAAC,AACd,IAAI,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CACd,OAAO,CAAE,MAAM,AACnB,CAAC,AAED,4DAAe,CAAC,AACZ,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CAC1B,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,AACjC,CAAC,AAED,8DAAgB,CAAC,AACb,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,CAAC,AACb,CAAC\"}"
};

var warned = false;
Generic.renderCss = function() {
	if (!warned) {
		console.error('Component.renderCss(...) is deprecated and will be removed in v2 — use Component.render(...).css instead');
		warned = true;
	}

	var components = [];

	components.push({
		filename: Generic.filename,
		css: Generic.css && Generic.css.code,
		map: Generic.css && Generic.css.map
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
/* harmony default export */ __webpack_exports__["default"] = (Generic);

/***/ }),

/***/ "../../_src/components/tools/modifiers.js":
/*!************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/_src/components/tools/modifiers.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*Babel»*/

exports.__esModule = true;

exports.default = function (modifier, classPrefix, classSuffix) {
    //eslint-disable-line
    classSuffix = classSuffix || '';

    if (!modifier) {
        return '';
    }

    if (modifier.length > 1 && typeof modifier === 'string') {
        modifier = [modifier];
    }

    if (modifier.length > 0 && Array.isArray(modifier)) {
        return modifier.reduce(function (prev, name) {
            return prev + ' ' + classPrefix + name + classSuffix;
        }, '');
    }

    return '';
};

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




/***/ })

/******/ });
});