(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['homepage'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div id=\"mainHome\">\r\n	<span id=\"features\"></span>\r\n	<div class=\"Panel One\">\r\n		<div class=\"Viewport\">\r\n			<div class=\"ThreeColumn\">\r\n				<div class=\"Column One\">\r\n					"
    + alias2(alias1((depth0 != null ? depth0.feature1heading : depth0), depth0))
    + "\r\n					"
    + ((stack1 = alias1((depth0 != null ? depth0.feature1Content : depth0), depth0)) != null ? stack1 : "")
    + "\r\n				</div>\r\n				<div class=\"Column Two\">\r\n					"
    + alias2(alias1((depth0 != null ? depth0.feature2heading : depth0), depth0))
    + "\r\n					"
    + ((stack1 = alias1((depth0 != null ? depth0.feature2Content : depth0), depth0)) != null ? stack1 : "")
    + "\r\n				</div>\r\n				<div class=\"Column Three\">\r\n					"
    + alias2(alias1((depth0 != null ? depth0.feature3heading : depth0), depth0))
    + "\r\n					"
    + ((stack1 = alias1((depth0 != null ? depth0.feature3Content : depth0), depth0)) != null ? stack1 : "")
    + "\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n	<span id=\"clients\"></span>\r\n	<div class=\"Panel Two\">\r\n		<div class=\"Viewport\">\r\n			"
    + alias2(alias1((depth0 != null ? depth0.clientsPanelHeading : depth0), depth0))
    + "\r\n			"
    + ((stack1 = alias1((depth0 != null ? depth0.clientsPanelContent : depth0), depth0)) != null ? stack1 : "")
    + "\r\n		</div>\r\n	</div>\r\n	<span id=\"salesPitch\"></span>\r\n	<div class=\"SalesPitch\">\r\n		<div class=\"Panel Three\">\r\n			<div class=\"Viewport\">\r\n				<div class=\"TwoColumn\">\r\n					<div class=\"Column One\">\r\n						"
    + ((stack1 = alias1((depth0 != null ? depth0.salesPitch1Content : depth0), depth0)) != null ? stack1 : "")
    + "\r\n					</div>\r\n					<div class=\"Column Two Image\">\r\n						<img src=\""
    + alias2(alias1((depth0 != null ? depth0.salesPitch1Image : depth0), depth0))
    + "\" height=\"600\" width=\"600\" alt=\"\">\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class=\"Panel Four\">\r\n			<div class=\"Viewport\">\r\n				<div class=\"TwoColumn\">\r\n					<div class=\"Column One Image\">\r\n						<img src=\""
    + alias2(alias1((depth0 != null ? depth0.salesPitch2Image : depth0), depth0))
    + "\" height=\"600\" width=\"600\" alt=\"\">\r\n					</div>\r\n					<div class=\"Column Two\">\r\n						"
    + ((stack1 = alias1((depth0 != null ? depth0.salesPitch2Content : depth0), depth0)) != null ? stack1 : "")
    + "\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class=\"Panel Five\">\r\n			<div class=\"Viewport\">\r\n				<div class=\"TwoColumn\">\r\n					<div class=\"Column One\">\r\n						"
    + ((stack1 = alias1((depth0 != null ? depth0.salesPitch3Content : depth0), depth0)) != null ? stack1 : "")
    + "\r\n					</div>\r\n					<div class=\"Column Two Image\">\r\n						<img src=\""
    + alias2(alias1((depth0 != null ? depth0.salesPitch3Image : depth0), depth0))
    + "\" height=\"600\" width=\"600\" alt=\"\">\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n	<span id=\"contact\"></span>\r\n	<div class=\"Panel Six\">\r\n		<div class=\"Viewport\">\r\n			"
    + ((stack1 = alias1((depth0 != null ? depth0.contactPanelContent : depth0), depth0)) != null ? stack1 : "")
    + "\r\n		</div>\r\n	<div>		\r\n</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.content : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();