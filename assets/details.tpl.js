(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['details'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=container.escapeExpression;

  return "	<table class=\"table table-bordered table-striped \">\n		<tr><td class=\"col-xs-2\"><strong>Plate Number</strong></td><td><strong>"
    + alias3(((helper = (helper = helpers.license_plate_number || (depth0 != null ? depth0.license_plate_number : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"license_plate_number","hash":{},"data":data}) : helper)))
    + "</strong></td></tr>\n		<tr><td class=\"col-xs-2\">First Name</td><td>"
    + ((stack1 = (helpers.toTitleCase || (depth0 && depth0.toTitleCase) || alias1).call(depth0,(depth0 != null ? depth0.first_name : depth0),{"name":"toTitleCase","hash":{},"data":data})) != null ? stack1 : "")
    + "</td></tr>\n		<tr><td class=\"col-xs-2\">Middle Name</td><td>"
    + ((stack1 = (helpers.toTitleCase || (depth0 && depth0.toTitleCase) || alias1).call(depth0,(depth0 != null ? depth0.middle_name : depth0),{"name":"toTitleCase","hash":{},"data":data})) != null ? stack1 : "")
    + "</td></tr>\n		<tr><td class=\"col-xs-2\">Last Name</td><td>"
    + ((stack1 = (helpers.toTitleCase || (depth0 && depth0.toTitleCase) || alias1).call(depth0,(depth0 != null ? depth0.last_name : depth0),{"name":"toTitleCase","hash":{},"data":data})) != null ? stack1 : "")
    + "</td></tr>\n		<tr><td class=\"col-xs-2\">Citation Number:</td><td>"
    + ((stack1 = (helpers.formatCitationNumber || (depth0 && depth0.formatCitationNumber) || alias1).call(depth0,(depth0 != null ? depth0.citation : depth0),{"name":"formatCitationNumber","hash":{},"data":data})) != null ? stack1 : "")
    + "</td></tr>\n		<tr><td class=\"col-xs-2\">Issue Date</td><td>"
    + ((stack1 = (helpers.formatDate || (depth0 && depth0.formatDate) || alias1).call(depth0,(depth0 != null ? depth0.issue_date : depth0),{"name":"formatDate","hash":{},"data":data})) != null ? stack1 : "")
    + "</td></tr>\n		<tr><td class=\"col-xs-2\">Citation Amount</td><td>$"
    + alias3(((helper = (helper = helpers.citation_amount || (depth0 != null ? depth0.citation_amount : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"citation_amount","hash":{},"data":data}) : helper)))
    + "</td></tr>\n		<tr><td class=\"col-xs-2\">Fees &amp; Fines</td><td>$"
    + alias3(((helper = (helper = helpers.fees_fines || (depth0 != null ? depth0.fees_fines : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fees_fines","hash":{},"data":data}) : helper)))
    + "</td></tr>\n		<tr><td class=\"col-xs-2\">Remaining Balance</td><td>$"
    + alias3(((helper = (helper = helpers.remaining_balance || (depth0 != null ? depth0.remaining_balance : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"remaining_balance","hash":{},"data":data}) : helper)))
    + "</td></tr>\n	</table>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.Details : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();