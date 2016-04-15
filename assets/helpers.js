// Helper function to render a date in a template.
Handlebars.registerHelper('formatDate', function(date) {
	var d = new Date(date)
	return d.getMonth()+1 + '/' + d.getDate() + '/' + d.getFullYear();
});

// Helper function to format citatsion number.
Handlebars.registerHelper('formatCitationNumber', function(number) {
	if(typeof(number) != 'undefined') {
		return number;
	}
	return 'Not found';
});

// Helper function to titlecase strings
Handlebars.registerHelper('toTitleCase', function(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
});