exports.ids = ["demo-routes/hero-hero-demo-html"];
exports.modules = {

/***/ "../../_src/components/hero/hero.demo.html":
/*!*************************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/_src/components/hero/hero.demo.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Hero = __webpack_require__(/*! ./hero.html */ "../../_src/components/hero/hero.html");

var Demo = __webpack_require__(/*! ../demo/demo.wrapper.html */ "../../_src/components/demo/demo.wrapper.html");

var capitalize = __webpack_require__(/*! ../tools/title-case.js */ "../../_src/components/tools/title-case.js");
Hero = (Hero && Hero.__esModule) ? Hero["default"] : Hero;
Demo = (Demo && Demo.__esModule) ? Demo["default"] : Demo;
capitalize = (capitalize && capitalize.__esModule) ? capitalize["default"] : capitalize;

function data() {
    return {
        widths: ['normal', 'wide', 'compact']
    };
};

var Hero_demo = {};

Hero_demo.filename = "C:\\Users\\cdl193\\Sites\\Front-End-Framework\\_src\\components\\hero\\hero.demo.html";

Hero_demo.data = function() {
	return data();
};

Hero_demo.render = function(state, options = {}) {
	var components = new Set();

	function addComponent(component) {
		components.add(component);
	}

	var result = { head: '', addComponent };
	var html = Hero_demo._render(result, state, options);

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

Hero_demo._render = function(__result, state, options) {
	__result.addComponent(Hero_demo);

	state = Object.assign(data(), state);

	return `${Demo._render(__result, { demoTitle: "Buttons", variants: true, currentRoute: "hero" }, { store: options.store, slotted: { default: () => `
    `, header: () => `<div slot="header">
        <div class="hero-holder">
            ${Hero._render(__result, {  }, { store: options.store })}
        </div>
    </div>
    `, variants: () => `<div slot="variants">
        ${ state.widths.map((buttonType) => `<div class="button-holder">
            ${Hero._render(__result, { type: buttonType, header: capitalize(buttonType) }, { store: options.store })}
        </div>`).join("")}
    </div>

    <style>
        .hero-holder {
            display: block;
            width: 100vw;
            position: absolute;
            left: 0;
            padding: 1rem 1rem 1rem 0;
        }
    </style>
` } })}`;
};

Hero_demo.css = {
	code: '',
	map: null
};

var warned = false;
Hero_demo.renderCss = function() {
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
	addComponent(Hero);

	return {
		css: components.map(x => x.css).join('\n'),
		map: null,
		components
	};
};

module.exports = Hero_demo;

/***/ }),

/***/ "../../_src/components/hero/hero.html":
/*!********************************************************************************!*\
  !*** C:/Users/cdl193/Sites/Front-End-Framework/_src/components/hero/hero.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var modifiers = __webpack_require__(/*! ../tools/modifiers.js */ "../../_src/components/tools/modifiers.js");

var titleCase = __webpack_require__(/*! @/components/tools/title-case.js */ "../../_src/components/tools/title-case.js");
modifiers = (modifiers && modifiers.__esModule) ? modifiers["default"] : modifiers;
titleCase = (titleCase && titleCase.__esModule) ? titleCase["default"] : titleCase;

function data() {
    return {
        header: "Button",
        body: "",
        imageUrl: "",
        type: []
    }
};

function setup(thisComponent) {
    thisComponent.TYPES = ['large', 'compact', ''];
};

var Hero = {};

Hero.filename = "C:\\Users\\cdl193\\Sites\\Front-End-Framework\\_src\\components\\hero\\hero.html";

Hero.data = function() {
	return data();
};

Hero.render = function(state, options = {}) {
	var components = new Set();

	function addComponent(component) {
		components.add(component);
	}

	var result = { head: '', addComponent };
	var html = Hero._render(result, state, options);

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

Hero._render = function(__result, state, options) {
	__result.addComponent(Hero);

	state = Object.assign(data(), state);

	return `<div class="hero ${__escape(modifiers(state.type, 'btn--'))}" style="background-image: url('${__escape({imageUrl: state.imageUrl})}');">
    <div class="hero__body">
        <h1 class="hero__header">${state.header}</h1>
    </div>
</div>`;
};

Hero.css = {
	code: '',
	map: null
};

var warned = false;
Hero.renderCss = function() {
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

module.exports = Hero;

/***/ })

};;