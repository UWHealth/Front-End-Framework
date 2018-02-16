exports.ids = [3];
exports.modules = {

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _buttonDefault = __webpack_require__(66);

var _buttonDefault2 = _interopRequireDefault(_buttonDefault);

var _buttonDemo = __webpack_require__(67);

var _buttonDemo2 = _interopRequireDefault(_buttonDemo);

var _demo = __webpack_require__(51);

var _demo2 = _interopRequireDefault(_demo);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var category = _demo2.default.heading;
var icon = '<svg width="28" height="28" viewBox="0 0 28 28" class="btn__svg"><path class="btn-svg__path" d="M16.4,12.1l-2.3-2.2l1.9-2l5,5.3v0.3l-5,5.3l-1.9-2l2.3-2.2H7v-2.6H16.4z"/></svg>';

exports.default = new _demo2.default('Buttons', {
    "examples": [(0, _buttonDefault2.default)(), (0, _buttonDefault2.default)({
        icon: icon
    })],
    "components": [category("Button Baseline"), (0, _buttonDefault2.default)({
        body: "Button"
    }), category("Button widths"), (0, _buttonDefault2.default)({
        body: "Wide",
        type: ['wide']
    }), category("Buttons with images"), (0, _buttonDefault2.default)({
        body: "Baseline",
        iconUrl: '/public/img/dev/github.png'
    }), (0, _buttonDefault2.default)({
        body: "Reversed",
        type: ['reversed'],
        iconUrl: '/public/img/dev/github.png'
    }), (0, _buttonDefault2.default)({
        body: "Wide",
        type: ['wide'],
        iconUrl: '/public/img/dev/github.png'
    }), category("Buttons with SVG icons"), (0, _buttonDefault2.default)({
        body: "Baseline",
        icon: icon
    }), (0, _buttonDefault2.default)({
        body: "Reversed",
        type: ['reversed'],
        icon: icon
    }), (0, _buttonDefault2.default)({
        body: "Wide",
        type: ['wide'],
        icon: icon
    }), '<style>' + _buttonDemo2.default + '</style>']
});

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _generic = __webpack_require__(68);

var _generic2 = _interopRequireDefault(_generic);

var _html = __webpack_require__(69);

var _html2 = _interopRequireDefault(_html);

var _demo = __webpack_require__(51);

var _demo2 = _interopRequireDefault(_demo);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var demo = new _demo2.default('Generic', _generic2.default, {
    "components": [(0, _generic2.default)({
        componentName: "generic",
        body: "Baseline Generic"
    }), (0, _generic2.default)({
        componentName: "generic",
        body: "Even more Generic"
    })]
});

exports.default = demo;

/***/ })

};;