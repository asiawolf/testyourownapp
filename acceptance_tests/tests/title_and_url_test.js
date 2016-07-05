var pages = require('../helpers/pages');
var utils = require('../helpers/utils');

casper.test.begin('a test to verify form is filled and results are displayed', 4, function(test) {
	casper.start(pages.home, function() {
		casper.then(function(){
			test.assertUrlMatch('/', 'User lands on homepage page');
			test.assertTitle('Welcome! Please fill out this form.', 'Title of homepage page is Welcome! Please fill out this form.');
		});
 		
 		utils.goToGuestbook(casper);
 		
 		casper.then(function(){
			test.assertUrlMatch('/results', 'User lands on results page');
			test.assertTitle('Guestbook', 'Title of results page is Guestbook');
		});
	}).run(function() {
		test.done();
	});
});