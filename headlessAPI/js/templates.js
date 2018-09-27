(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['blog'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.lambda, alias4=container.escapeExpression;

  return "<div class=\"Listing-Item Clear\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.thumbnailImage : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	<div class=\"Listing-Info "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.thumbnailImage : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n		<a class=\"Listing-Title Listing-Link\" href=\"/blog/"
    + ((stack1 = (helpers.link || (depth0 && depth0.link) || alias2).call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"link","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "-"
    + alias4(alias3((depth0 != null ? depth0.contentId : depth0), depth0))
    + "\">"
    + alias4(alias3((depth0 != null ? depth0.title : depth0), depth0))
    + "</a>\r\n		<p class=\"Abstract\">\r\n			"
    + alias4(alias3((depth0 != null ? depth0["abstract"] : depth0), depth0))
    + "  <a role=\"presentation\" tabindex=\"-1\" class=\"Listing-Link Learn-More\" href=\"/blog/"
    + ((stack1 = (helpers.link || (depth0 && depth0.link) || alias2).call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"link","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "-"
    + alias4(alias3((depth0 != null ? depth0.contentId : depth0), depth0))
    + "\">Read more</a>\r\n		</p>\r\n	</div>\r\n</div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "		<a class=\"Listing-Thumbnail\" href=\"/blog/"
    + ((stack1 = (helpers.link || (depth0 && depth0.link) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.title : depth0),{"name":"link","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "-"
    + alias2(alias1((depth0 != null ? depth0.contentId : depth0), depth0))
    + "\">\r\n			<img src=\""
    + alias2(alias1((depth0 != null ? depth0.thumbnailImage : depth0), depth0))
    + "\" height=\"500\" width=\"500\">\r\n		</a>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression(container.lambda((depth0 != null ? depth0.title : depth0), depth0));
},"5":function(container,depth0,helpers,partials,data) {
    return "Has-Thumbnail";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return container.escapeExpression((helpers.require || (depth0 && depth0.require) || helpers.helperMissing).call(alias1,"js/templates.js",{"name":"require","hash":{},"data":data}))
    + " \r\n\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.content : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['homepage'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div id=\"mainHome\">\r\n	<div class=\"ContentPage\">\r\n		<div class=\"SectionOne ContentBody\">\r\n			<div class=\"Detail Body\">"
    + ((stack1 = alias1((depth0 != null ? depth0.body : depth0), depth0)) != null ? stack1 : "")
    + "</div>\r\n		</div>\r\n		<div class=\"SectionTwo ContentBody\">\r\n			<div class=\"ThreeColumn\">\r\n				<div class=\"Column One\">\r\n					<img src=\""
    + alias2(alias1((depth0 != null ? depth0.image1 : depth0), depth0))
    + "\" height=\"200\" width=\"200\">\r\n					<div class=\"Detail Body\">"
    + ((stack1 = alias1((depth0 != null ? depth0.contentBlock1 : depth0), depth0)) != null ? stack1 : "")
    + "</div>\r\n				</div>\r\n				<div class=\"Column Two\">\r\n					<img src=\""
    + alias2(alias1((depth0 != null ? depth0.image2 : depth0), depth0))
    + "\" height=\"200\" width=\"200\">\r\n					<div class=\"Detail Body\">"
    + ((stack1 = alias1((depth0 != null ? depth0.contentBlock2 : depth0), depth0)) != null ? stack1 : "")
    + "</div>\r\n				</div>\r\n				<div class=\"Column Three\">\r\n					<img src=\""
    + alias2(alias1((depth0 != null ? depth0.image3 : depth0), depth0))
    + "\" height=\"200\" width=\"200\">\r\n					<div class=\"Detail Body\">"
    + ((stack1 = alias1((depth0 != null ? depth0.contentBlock3 : depth0), depth0)) != null ? stack1 : "")
    + "</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.content : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['mainNav'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<nav class=\"Main-Nav\">\r\n	<ul id=\"nav\">\r\n	  <li><a href=\"/headlessAPI/index.html\">"
    + alias4(((helper = (helper = helpers.link_one || (depth0 != null ? depth0.link_one : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link_one","hash":{},"data":data}) : helper)))
    + "</a></li>\r\n	  <li><a href=\"/headlessAPI/blog.html\">"
    + alias4(((helper = (helper = helpers.link_two || (depth0 != null ? depth0.link_two : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link_two","hash":{},"data":data}) : helper)))
    + "</a></li>\r\n	  <li><a href=\"/headlessAPI/news.html\">"
    + alias4(((helper = (helper = helpers.link_three || (depth0 != null ? depth0.link_three : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link_three","hash":{},"data":data}) : helper)))
    + "</a></li>\r\n	</ul>\r\n</nav>";
},"useData":true});
templates['news'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.lambda, alias4=container.escapeExpression;

  return "<div class=\"Listing-Item Clear\">\r\n	<div class=\"Listing-Info\">\r\n		<a class=\"Listing-Title Listing-Link\" href=\"/news/"
    + ((stack1 = (helpers.link || (depth0 && depth0.link) || alias2).call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"link","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "-"
    + alias4(alias3((depth0 != null ? depth0.contentId : depth0), depth0))
    + "\">"
    + alias4(alias3((depth0 != null ? depth0.title : depth0), depth0))
    + "</a>\r\n		<time class=\"Date\">"
    + alias4(alias3((depth0 != null ? depth0.publishDate : depth0), depth0))
    + "</time>\r\n		<span class=\"Property Property-Type\">\r\n			<span class=\"Label\">in</span>\r\n			<a href=\"/news?type="
    + alias4(alias3((depth0 != null ? depth0.type : depth0), depth0))
    + "\">"
    + alias4(alias3((depth0 != null ? depth0.type : depth0), depth0))
    + "</a>\r\n		</span>\r\n		<p class=\"Abstract\">\r\n			"
    + alias4(alias3((depth0 != null ? depth0["abstract"] : depth0), depth0))
    + "  <a role=\"presentation\" tabindex=\"-1\" class=\"Listing-Link Learn-More\" href=\"/news/"
    + ((stack1 = (helpers.link || (depth0 && depth0.link) || alias2).call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"link","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "-"
    + alias4(alias3((depth0 != null ? depth0.contentId : depth0), depth0))
    + "\">Read more</a>\r\n		</p>\r\n	</div>\r\n</div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression(container.lambda((depth0 != null ? depth0.title : depth0), depth0));
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.content : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();