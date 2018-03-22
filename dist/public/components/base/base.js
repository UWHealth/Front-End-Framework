{"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = ((helper = (helper = helpers.pageTitle || (depth0 != null ? depth0.pageTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"pageTitle","hash":{},"data":data}) : helper))) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.htmlWebpackPlugin : depth0)) != null ? stack1.options : stack1)) != null ? stack1.pageTitle : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.htmlWebpackPlugin : depth0)) != null ? stack1.options : stack1)) != null ? stack1.pageTitle : stack1), depth0)) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return " "
    + ((stack1 = ((helper = (helper = helpers.pageContent || (depth0 != null ? depth0.pageContent : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"pageContent","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " ";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.htmlWebpackPlugin : depth0)) != null ? stack1.options : stack1)) != null ? stack1.evaledTemplate : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " <div id=\"app\"> "
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.htmlWebpackPlugin : depth0)) != null ? stack1.options : stack1)) != null ? stack1.evaledTemplate : stack1), depth0)) != null ? stack1 : "")
    + " </div> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<!DOCTYPE html> <html lang=\"en\"> <head>\n    <meta charset=\"utf-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">    <link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"/public/img/favicons/favicon-180x180.png\">\n    <link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"/public/img/favicons/favicon-32x32.png\">\n    <link rel=\"icon\" type=\"image/png\" sizes=\"192x192\" href=\"/public/img/favicons/favicon-192x192.png\">\n    <link rel=\"mask-icon\" href=\"/public/img/favicons/icon.svg\" color=\"#d40943\">\n    <link rel=\"shortcut icon\" href=\"/public/img/favicons/favicon.ico\">\n\n"
    + ((stack1 = container.invokePartial(partials["./_header.seo.hbs"],depth0,{"name":"./_header.seo.hbs","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["./_header.app.hbs"],depth0,{"name":"./_header.app.hbs","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["./_header.social.hbs"],depth0,{"name":"./_header.social.hbs","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <!--<link rel=\"alternate\" href=\"https://feeds2.feedburner.com/uwsmph/news\" type=\"application/rss+xml\" title=\"RSS 2.0\">-->\n    <!--<link rel=\"alternate\" href=\"http://example.com/feed.atom\" type=\"application/atom+xml\" title=\"Atom 0.3\">-->\n\n    <title>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.pageTitle : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</title>\n\n    <link rel=\"preload\" onload=\"this.onload=null;this.rel='stylesheet'\" as=\"style\" media=\"screen\" href=\"/public/css/main.css\">\n    <link rel=\"preload\" onload=\"this.onload=null;this.rel='stylesheet'\" as=\"style\" media=\"print\" href=\"/public/css/print.css\">\n    <!-- <noscript>\n        <link rel=\"stylesheet\" media=\"screen\" href=\"/public/css/main.css\">\n        <link rel=\"stylesheet\" media=\"print\" href=\"/public/css/print.css\">\n    </noscript> -->\n\n    <script async src=\"/public/js/main.bundle.js\"></script>\n\n    <script>\n    addEventListener('error', window.__e=function f(e){f.q=f.q||[];f.q.push(e)});!function(a){\"use strict\";var b=function(b,c,d){function e(a){return h.body?a():void setTimeout(function(){e(a)})}function f(){i.addEventListener&&i.removeEventListener(\"load\",f),i.media=d||\"all\"}var g,h=a.document,i=h.createElement(\"link\");if(c)g=c;else{var j=(h.body||h.getElementsByTagName(\"head\")[0]).childNodes;g=j[j.length-1]}var k=h.styleSheets;i.rel=\"stylesheet\",i.href=b,i.media=\"only x\",e(function(){g.parentNode.insertBefore(i,c?g:g.nextSibling)});var l=function(a){for(var b=i.href,c=k.length;c--;)if(k[c].href===b)return a();setTimeout(function(){l(a)})};return i.addEventListener&&i.addEventListener(\"load\",f),i.onloadcssdefined=l,l(f),i};\"undefined\"!=typeof exports?exports.loadCSS=b:a.loadCSS=b}(\"undefined\"!=typeof global?global:this);!function(a){if(a.loadCSS){var b=loadCSS.relpreload={};if(b.support=function(){try{return a.document.createElement(\"link\").relList.supports(\"preload\")}catch(b){return!1}},b.poly=function(){for(var b=a.document.getElementsByTagName(\"link\"),c=0;c<b.length;c++){var d=b[c];\"preload\"===d.rel&&\"style\"===d.getAttribute(\"as\")&&(a.loadCSS(d.href,d,d.getAttribute(\"media\")),d.rel=null)}},!b.support()){b.poly();var c=a.setInterval(b.poly,300);a.addEventListener&&a.addEventListener(\"load\",function(){b.poly(),a.clearInterval(c)}),a.attachEvent&&a.attachEvent(\"onload\",function(){a.clearInterval(c)})}}}(this);\n    </script>\n</head>\n <body> "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.pageContent : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + " <footer></footer>\n </body> </html> ";
},"usePartial":true,"useData":true}