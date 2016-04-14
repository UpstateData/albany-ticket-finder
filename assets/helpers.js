// Helper function to render a date in a template.
Handlebars.registerHelper('formatDate', function(date) {
	var d = new Date(date)
	return d.getMonth()+1 + '/' + d.getDate() + '/' + d.getFullYear();
});

// Helper function to format citatsion number.
Handlebars.registerHelper('formatCitationNumber', function(number) {
	return 'XXXXXXXXX';
});