/**
 * @fileoverview - Evaluates JS files before passing them on to the html-wepback-plugin,
 * allowing templates to be pre-rendered and added to the base html-webpack-plugin template.
 *
 */

const _eval = require('eval');
const vm = require('vm');

function evaluateTemplatePlugin(options) {
    options = options || {};
    this.manifest = options.manifest || false;
    this.templating = options.templating || function(source) { return source; };
    options.context = options.context || {};
    this.evalContext = Object.assign(
        {},
        {fetch: false, window: undefined, document: undefined},
        options.contenxt
    );
}

evaluateTemplatePlugin.prototype.apply = function(compiler) {
    const self = this;

    // Webpack 4+
    if (compiler.hooks) {
        compiler.hooks.compilation.tap('EvalTemplatePlugin', function (compilation) {
            compilation.hooks.htmlWebpackPluginBeforeHtmlGeneration.tapAsync(
                'EvalTemplatePlugin',
                (plugin, cb) => { self.init(plugin, cb, compilation); }
            );
        });
    }
    // Webpack 3
    else {
        compiler.plugin('compilation', function (compilation) {
            compilation.plugin(
                'html-webpack-plugin-before-html-generation',
                (plugin, cb) => { self.init(plugin, cb, compilation); }
            );
        });
    }
};

evaluateTemplatePlugin.prototype.init = function(htmlPluginData, callback, compilation) { // eslint-disable-line
    if (!htmlPluginData.plugin.options.evalPlugin || !htmlPluginData.plugin.options.evalPlugin.assetName) {
        // throw new Error('No options found for evaluate-template-plugin in html-webpack-plugin options.');
        return callback(null, htmlPluginData);
    }
    const assetName = htmlPluginData.plugin.options.evalPlugin.assetName;
    const assetPath = htmlPluginData.plugin.options.evalPlugin.assetPath;
    this.evalContext = Object.assign({}, this.evalContext, htmlPluginData.plugin.options.evalPlugin.context || {});

    const manifest = this.manifest ? this.getSource(this.manifest, compilation, callback) : false;
    const source = manifest ? manifest + this.getSource(assetName, compilation, callback) : this.getSource(assetName, compilation, callback);
    const context = this.evaluateSource(assetPath, source, callback);

    htmlPluginData.plugin.options.evaledTemplate = this.templateHtml(htmlPluginData, context, source, compilation, callback);

    callback(null, htmlPluginData);
};

evaluateTemplatePlugin.prototype.templateHtml = function(htmlPluginData, context, source, compilation, callback) {
    const templateFn = htmlPluginData.plugin.options.evalPlugin.templating || this.templating;

    if (typeof templateFn !== 'function') {
        callback(new Error('EvalTemplatePlugin: Templating option must be a function.'));
    }

    try {
        return templateFn(context, source, htmlPluginData, compilation);
    }
    catch (err) {
        callback(err);
    }
};

evaluateTemplatePlugin.prototype.getSource = function(assetName, compilation, callback) { //eslint-disable-line
    try {
        const asset = compilation.assets[assetName];
        const source = asset ? asset.source() : `module.exports = "No asset (${assetName}) found."`;

        return source;
    }
    catch (err) {
        return callback(err);
    }
};

evaluateTemplatePlugin.prototype.evaluateSource = function(assetName, source, callback) {
    try {
        const context = _eval(source, assetName, this.evalContext, true);
        // Allow for es6 modules
        return getExport(context);
    }
    catch (err) {
        return callback(err);
    }
}

function getExport(mod) {
    return mod && typeof mod === 'object' && mod.__esModule ? mod["default"] : mod;
};

module.exports = evaluateTemplatePlugin;
