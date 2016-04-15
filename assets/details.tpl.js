(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['details'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=helpers.helperMissing;

  return "<table class=\"table table-bordered table-striped \">\n	<tr><td class=\"col-xs-2\">Plate Number</td><td>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.Details : depth0)) != null ? stack1.license_plate_number : stack1), depth0))
    + "</td></tr>\n	<tr><td class=\"col-xs-2\">First Name</td><td>"
    + ((stack1 = (helpers.toTitleCase || (depth0 && depth0.toTitleCase) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.Details : depth0)) != null ? stack1.first_name : stack1),{"name":"toTitleCase","hash":{},"data":data})) != null ? stack1 : "")
    + "</td></tr>\n	<tr><td class=\"col-xs-2\">Middle Name</td><td>"
    + ((stack1 = (helpers.toTitleCase || (depth0 && depth0.toTitleCase) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.Details : depth0)) != null ? stack1.middle_name : stack1),{"name":"toTitleCase","hash":{},"data":data})) != null ? stack1 : "")
    + "</td></tr>\n	<tr><td class=\"col-xs-2\">last Name</td><td>"
    + ((stack1 = (helpers.toTitleCase || (depth0 && depth0.toTitleCase) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.Details : depth0)) != null ? stack1.last_name : stack1),{"name":"toTitleCase","hash":{},"data":data})) != null ? stack1 : "")
    + "</td></tr>\n	<tr><td class=\"col-xs-2\">Citation Number:</td><td>"
    + ((stack1 = (helpers.formatCitationNumber || (depth0 && depth0.formatCitationNumber) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.Details : depth0)) != null ? stack1.citation : stack1),{"name":"formatCitationNumber","hash":{},"data":data})) != null ? stack1 : "")
    + "</td></tr>\n	<tr><td class=\"col-xs-2\">Issue Date</td><td>"
    + ((stack1 = (helpers.formatDate || (depth0 && depth0.formatDate) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.Details : depth0)) != null ? stack1.issue_date : stack1),{"name":"formatDate","hash":{},"data":data})) != null ? stack1 : "")
    + "</td></tr>\n	<tr><td class=\"col-xs-2\">Citation Amount</td><td>$"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.Details : depth0)) != null ? stack1.citation_amount : stack1), depth0))
    + "</td></tr>\n	<tr><td class=\"col-xs-2\">Fees &amp; Fines</td><td>$"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.Details : depth0)) != null ? stack1.fees_fines : stack1), depth0))
    + "</td></tr>\n	<tr><td class=\"col-xs-2\">Remaining Balance</td><td>$"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.Details : depth0)) != null ? stack1.remaining_balance : stack1), depth0))
    + "</td></tr>\n</table>\n<p class=\"info\">Go <a href=\"http://www.albanyny.org/Home/Payments.aspx\">here</a> to pay online.</p>";
},"useData":true});
})();