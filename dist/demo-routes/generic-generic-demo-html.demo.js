exports.ids = ["demo-routes/generic-generic-demo-html"];
exports.modules = {

/***/ "../../_src/components/generic/generic.demo.html":
/*!*******************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/_src/components/generic/generic.demo.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Generic = __webpack_require__(/*! ./generic.html */ "../../_src/components/generic/generic.html");

var Demo = __webpack_require__(/*! ../demo/demo.wrapper.html */ "../../_src/components/demo/demo.wrapper.html");

var capitalize = __webpack_require__(/*! ../tools/title-case.js */ "../../_src/components/tools/title-case.js");
Generic = (Generic && Generic.__esModule) ? Generic["default"] : Generic;
Demo = (Demo && Demo.__esModule) ? Demo["default"] : Demo;
capitalize = (capitalize && capitalize.__esModule) ? capitalize["default"] : capitalize;

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

	return `${Demo._render(__result, { demoTitle: "Generic", variants: true, currentRoute: "generic" }, { store: options.store, slotted: { default: () => `
    `, header: () => `<div slot="header">
        ${Generic._render(__result, {  }, { store: options.store })}
    </div>
    `, variants: () => `<div slot="variants">
        ${ state.widths.map((componentType) => `${Generic._render(__result, { type: componentType, body: capitalize(componentType), header: `Generic ${__escape( capitalize(componentType))} "Card"` }, { store: options.store })}`).join("")}
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

	addComponent(Demo);
	addComponent(Generic);

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

module.exports = Generic_demo;

/***/ }),

/***/ "../../_src/components/generic/generic.html":
/*!**************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/_src/components/generic/generic.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var modifiers = __webpack_require__(/*! ../tools/modifiers.js */ "../../_src/components/tools/modifiers.js");
modifiers = (modifiers && modifiers.__esModule) ? modifiers["default"] : modifiers;

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
    ${__escape(modifiers(state.type, state.componentClass + '--'))} svelte-1foufe2">
    <header class="${__escape(state.componentClass)}__header
        ${__escape(modifiers(state.type, state.componentClass + '__header--'))}">
        <h2 class="${__escape(state.componentClass)}__title">
            ${state.header}
        </h2>
    </header>
    <div class="${__escape(state.componentClass)}__body
    ${__escape(modifiers(state.type, state.componentClass + '__body--'))}">
        <p class="${__escape(state.componentClass)}__text">
            ${state.body}
        </p>
    </div>
    <footer class="${__escape(state.componentClass)}__footer
    ${__escape(modifiers(state.type, state.componentClass + '__footer--'))}">
        <p class="${__escape(state.componentClass)}__text">
            ${state.footer}
        </p>
    </footer>
</div>`;
};

Generic.css = {
	code: ".svelte-1foufe2.generic,.svelte-1foufe2 .generic{display:inline-flex;flex-direction:column;max-width:50rem;width:50%;background-color:white;border-radius:3px;margin-bottom:1.5rem;margin-right:1.5rem}.svelte-1foufe2.generic--wide,.svelte-1foufe2 .generic--wide{max-width:none;width:calc(75% - 1.5rem)}.svelte-1foufe2.generic--compact,.svelte-1foufe2 .generic--compact{width:calc(25% - 1.5rem)}.svelte-1foufe2.generic p:last-child,.svelte-1foufe2 .generic p:last-child{margin-bottom:0}.svelte-1foufe2.generic__header,.svelte-1foufe2 .generic__header,.svelte-1foufe2.generic__body,.svelte-1foufe2 .generic__body,.svelte-1foufe2.generic__footer,.svelte-1foufe2 .generic__footer{flex:1 0 auto;padding:1.5rem}.svelte-1foufe2.generic__body,.svelte-1foufe2 .generic__body{border-top:1px solid #ddd;border-bottom:1px solid #ddd}.svelte-1foufe2.generic__title,.svelte-1foufe2 .generic__title{font-size:1.5rem;margin:0}",
	map: "{\"version\":3,\"file\":\"generic.html\",\"sources\":[\"generic.html\"],\"sourcesContent\":[\"<div class=\\\"component {{componentClass}}\\n    {{modifiers(type, componentClass + '--')}}\\\">\\n    <header class=\\\"{{componentClass}}__header\\n        {{modifiers(type, componentClass + '__header--')}}\\\">\\n        <h2 class=\\\"{{componentClass}}__title\\\">\\n            {{{header}}}\\n        </h2>\\n    </header>\\n    <div class=\\\"{{componentClass}}__body\\n    {{modifiers(type, componentClass + '__body--')}}\\\">\\n        <p class=\\\"{{componentClass}}__text\\\">\\n            {{{body}}}\\n        </p>\\n    </div>\\n    <footer class=\\\"{{componentClass}}__footer\\n    {{modifiers(type, componentClass + '__footer--')}}\\\">\\n        <p class=\\\"{{componentClass}}__text\\\">\\n            {{{footer}}}\\n        </p>\\n    </footer>\\n</div>\\n\\n<style>\\n    .generic {\\n        display: inline-flex;\\n        flex-direction: column;\\n        max-width: 50rem;\\n        width: 50%;\\n        background-color: white;\\n        border-radius: 3px;\\n        margin-bottom: 1.5rem;\\n        margin-right: 1.5rem;\\n    }\\n\\n    .generic--wide {\\n        max-width: none;\\n        width: calc(75% - 1.5rem);\\n    }\\n\\n    .generic--compact {\\n        width: calc(25% - 1.5rem);\\n    }\\n\\n    .generic p:last-child {\\n        margin-bottom: 0;\\n    }\\n\\n    .generic__header,\\n    .generic__body,\\n    .generic__footer {\\n        flex: 1 0 auto;\\n        padding: 1.5rem;\\n    }\\n\\n    .generic__body {\\n        border-top: 1px solid #ddd;\\n        border-bottom: 1px solid #ddd;\\n    }\\n\\n    .generic__title {\\n        font-size: 1.5rem;\\n        margin: 0;\\n    }\\n</style>\\n\\n<script>\\n    import modifiers from '../tools/modifiers.js';\\n\\n    export default {\\n        data() {\\n            return {\\n                componentClass: 'generic',\\n                header: \\\"Generic Header\\\",\\n                body: \\\"Body\\\",\\n                footer: \\\"Footer\\\",\\n                type: [],\\n            }\\n        },\\n        helpers: {\\n            modifiers\\n        },\\n\\n        setup(thisComponent) {\\n            thisComponent.TYPES = ['wide', 'compact', ''];\\n        },\\n\\n        methods: {\\n            cycleTypes() {\\n                const buttonTypes = this.constructor.TYPES;\\n                const currentType = this.get('type')[0] || '';\\n                const i = buttonTypes.indexOf(currentType);\\n                const nextItem = (buttonTypes.length - 1) > i ? buttonTypes[i + 1] : buttonTypes[0];\\n\\n                this.set({body: titleCase(nextItem || 'normal')})\\n                return this.set({type: [nextItem]});\\n            }\\n        }\\n    }\\n</script>\\n\"],\"names\":[],\"mappings\":\"AAuBI,gDAAS,CAAC,AACN,OAAO,CAAE,WAAW,CACpB,cAAc,CAAE,MAAM,CACtB,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,GAAG,CACV,gBAAgB,CAAE,KAAK,CACvB,aAAa,CAAE,GAAG,CAClB,aAAa,CAAE,MAAM,CACrB,YAAY,CAAE,MAAM,AACxB,CAAC,AAED,4DAAe,CAAC,AACZ,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,MAAM,CAAC,AAC7B,CAAC,AAED,kEAAkB,CAAC,AACf,KAAK,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,MAAM,CAAC,AAC7B,CAAC,AAED,0EAAsB,CAAC,AACnB,aAAa,CAAE,CAAC,AACpB,CAAC,AAED,gEAAgB,CAChB,4DAAc,CACd,gEAAiB,CAAC,AACd,IAAI,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CACd,OAAO,CAAE,MAAM,AACnB,CAAC,AAED,4DAAe,CAAC,AACZ,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CAC1B,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,AACjC,CAAC,AAED,8DAAgB,CAAC,AACb,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,CAAC,AACb,CAAC\"}"
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

module.exports = Generic;

/***/ })

};;