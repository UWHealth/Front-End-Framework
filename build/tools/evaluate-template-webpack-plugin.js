/**
 * @fileoverview - Evaluates JS files before passing them on to the html-wepback-plugin,
 * allowing templates to be pre-rendered and added to the base html-webpack-plugin template.
 *
 */

const _eval = require('eval');

function evaluateTemplatePlugin(options) {
    options = options || {};
    this.templating = options.templating || function(source) { return source; };
}

evaluateTemplatePlugin.prototype.apply = function(compiler) {
    const self = this;

    compiler.plugin('compilation', function (compilation) {
        compilation.plugin('html-webpack-plugin-before-html-generation', function(htmlPluginData, callback) {
            if (!htmlPluginData.plugin.options.evalPlugin || !htmlPluginData.plugin.options.evalPlugin.assetName) {
                compilation.errors.push(new Error('No options found for evaluate-template-plugin in html-webpack-plugin options.'));
                return callback(null, htmlPluginData);
            }
            const assetName = htmlPluginData.plugin.options.evalPlugin.assetName;
            const context = self.getSource(assetName, compilation);

            htmlPluginData.plugin.options.evaledTemplate = self.templateHtml(htmlPluginData, context, compilation);

            callback(null, htmlPluginData);
        });
    });
};

evaluateTemplatePlugin.prototype.templateHtml = function(htmlPluginData, context, compilation) {
    const templateFn = htmlPluginData.plugin.options.evalPlugin.templating || this.templating;

    if (typeof templateFn !== 'function') {
        compilation.errors.push(new Error('Templating option must be a function.'));
    }

    try {
        return templateFn(context, htmlPluginData);
    }
    catch (err) {
        compilation.errors.push(new Error(err));
    }

    return htmlPluginData.html;
};

evaluateTemplatePlugin.prototype.getSource = function(assetName, compilation) {
    try {
        const source = compilation.assets[assetName].source();
        const context = _eval(source);

        // Allow for es6 modules
        if (context.default) {
            return typeof context.default === 'function' ? context.default() : context.default;
        }

        return context;
    }
    catch (err) {
        compilation.errors.push(new Error(err));
    }

    return '';
};

module.exports = evaluateTemplatePlugin;
