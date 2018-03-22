{"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = container.lambda(depth0, depth0)) != null ? stack1 : "")
    + " ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"demo\"> <header class=\"demo-header\"> <div class=\"wrap\"> <h1 class=\"demo-header__title\"> "
    + alias4(((helper = (helper = helpers.demoTitle || (depth0 != null ? depth0.demoTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"demoTitle","hash":{},"data":data}) : helper)))
    + " </h1> <div class=\"demo-header__component\"> "
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.examples : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </div> </div> </header> <main class=\"demo-body\"> <div class=\"wrap\"> <h2 class=\"demo-body__head\"> "
    + alias4(((helper = (helper = helpers.demoTitle || (depth0 != null ? depth0.demoTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"demoTitle","hash":{},"data":data}) : helper)))
    + " Variants </h2> "
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.components : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </div> </main> </div> ";
},"useData":true}