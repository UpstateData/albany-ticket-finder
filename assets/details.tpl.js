(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['details'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<table class=\"table table-bordered table-striped \">\n		<tr><td class=\"col-xs-2\"><strong>Plate Number</strong></td><td><strong>"
    + alias4(((helper = (helper = helpers.vehicle_plate_number || (depth0 != null ? depth0.vehicle_plate_number : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"vehicle_plate_number","hash":{},"data":data}) : helper)))
    + "</strong></td></tr>\n		<tr><td class=\"col-xs-2\">First Name</td><td>"
    + ((stack1 = (helpers.toTitleCase || (depth0 && depth0.toTitleCase) || alias2).call(alias1,(depth0 != null ? depth0.first_name : depth0),{"name":"toTitleCase","hash":{},"data":data})) != null ? stack1 : "")
    + "</td></tr>\n		<tr><td class=\"col-xs-2\">Middle Name</td><td>"
    + ((stack1 = (helpers.toTitleCase || (depth0 && depth0.toTitleCase) || alias2).call(alias1,(depth0 != null ? depth0.middle_name : depth0),{"name":"toTitleCase","hash":{},"data":data})) != null ? stack1 : "")
    + "</td></tr>\n		<tr><td class=\"col-xs-2\">State</td><td>"
    + alias4(((helper = (helper = helpers.state_of_plate || (depth0 != null ? depth0.state_of_plate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"state_of_plate","hash":{},"data":data}) : helper)))
    + "</td></tr>\n		<tr><td class=\"col-xs-2\">Last Name</td><td>"
    + ((stack1 = (helpers.toTitleCase || (depth0 && depth0.toTitleCase) || alias2).call(alias1,(depth0 != null ? depth0.last_name : depth0),{"name":"toTitleCase","hash":{},"data":data})) != null ? stack1 : "")
    + "</td></tr>\n		<tr><td class=\"col-xs-2\">Citation Number:</td><td>"
    + ((stack1 = (helpers.formatCitationNumber || (depth0 && depth0.formatCitationNumber) || alias2).call(alias1,(depth0 != null ? depth0.citation_number : depth0),{"name":"formatCitationNumber","hash":{},"data":data})) != null ? stack1 : "")
    + "</td></tr>\n		<tr><td class=\"col-xs-2\">Issue Date</td><td>"
    + ((stack1 = (helpers.formatDate || (depth0 && depth0.formatDate) || alias2).call(alias1,(depth0 != null ? depth0.citationdate_mmddyy : depth0),{"name":"formatDate","hash":{},"data":data})) != null ? stack1 : "")
    + "</td></tr>\n		<tr><td class=\"col-xs-2\">Citation Amount</td><td>$"
    + alias4(((helper = (helper = helpers.citation_amount || (depth0 != null ? depth0.citation_amount : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"citation_amount","hash":{},"data":data}) : helper)))
    + "</td></tr>\n		<tr><td class=\"col-xs-2\">Fees &amp; Fines</td><td>$"
    + alias4(((helper = (helper = helpers.fees_fines || (depth0 != null ? depth0.fees_fines : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fees_fines","hash":{},"data":data}) : helper)))
    + "</td></tr>\n		<tr><td class=\"col-xs-2\">Remaining Balance</td><td>$"
    + alias4(((helper = (helper = helpers.remainingbalance || (depth0 != null ? depth0.remainingbalance : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"remainingbalance","hash":{},"data":data}) : helper)))
    + "</td></tr>\n	</table>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Details : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();