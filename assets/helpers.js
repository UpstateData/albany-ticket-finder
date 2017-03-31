// Helper function to render a date in a template.
Handlebars.registerHelper('formatDate', function(date) {
	return date.substring(0,2) + '/' + date.substring(2,4) + '/' + date.substring(4,8);
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
	if(str) {
    	return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	}
	return '';
});