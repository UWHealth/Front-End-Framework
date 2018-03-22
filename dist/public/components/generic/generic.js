{"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.type : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return " "
    + ((stack1 = ((helper = (helper = helpers.className || (depth0 != null ? depth0.className : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"className","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "--"
    + container.escapeExpression(container.lambda(depth0, depth0));
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"component "
    + alias4(((helper = (helper = helpers.componentClass || (depth0 != null ? depth0.componentClass : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"componentClass","hash":{},"data":data}) : helper)))
    + "\"> <header class=\""
    + alias4(((helper = (helper = helpers.componentClass || (depth0 != null ? depth0.componentClass : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"componentClass","hash":{},"data":data}) : helper)))
    + "__header "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.type : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"> <h2 class=\""
    + alias4(((helper = (helper = helpers.componentClass || (depth0 != null ? depth0.componentClass : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"componentClass","hash":{},"data":data}) : helper)))
    + "__title\"> "
    + ((stack1 = ((helper = (helper = helpers.header || (depth0 != null ? depth0.header : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"header","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " </h2> </header> <div class=\""
    + alias4(((helper = (helper = helpers.componentClass || (depth0 != null ? depth0.componentClass : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"componentClass","hash":{},"data":data}) : helper)))
    + "__body "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.type : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"> <p class=\""
    + alias4(((helper = (helper = helpers.componentClass || (depth0 != null ? depth0.componentClass : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"componentClass","hash":{},"data":data}) : helper)))
    + "__text\">"
    + ((stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"body","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p> </div> <footer class=\""
    + alias4(((helper = (helper = helpers.componentClass || (depth0 != null ? depth0.componentClass : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"componentClass","hash":{},"data":data}) : helper)))
    + "__footer "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.type : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"> <p class=\""
    + alias4(((helper = (helper = helpers.componentClass || (depth0 != null ? depth0.componentClass : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"componentClass","hash":{},"data":data}) : helper)))
    + "__text\">"
    + ((stack1 = ((helper = (helper = helpers.footer || (depth0 != null ? depth0.footer : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"footer","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p> </footer> </div> ";
},"useData":true}