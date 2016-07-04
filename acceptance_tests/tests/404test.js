var pages = require('../helpers/pages');

casper.test.begin('a test to verify bad routes go to 404', 1, function(test) {
	casper.start(pages.badUrl, function() {
		test.assertTextExists('404');
	}).run(function() {
		test.done();
	});
});