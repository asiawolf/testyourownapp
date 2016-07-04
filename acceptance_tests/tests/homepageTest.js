var pages = require('../helpers/pages');
var testusers = require('../helpers/testusers');

casper.test.begin('a test to verify form is filled and results are displayed', 6, function(test) {
	casper.start(pages.home, function() {
		this.fillSelectors('form#contactForm', {
			'input[name="name"]': testusers.testuser1.name,
			'input[name="email"]': testusers.testuser1.email,
			'#description': testusers.testuser1.description,
			'select#dropdown': testusers.testuser1.whyHere
 		}, false);
 		casper.then(function(){
			this.click('#createProfile');
 		});
 		casper.then(function(){

 		});
		casper.then(function(){
			test.assertUrlMatch('results', 'User lands on results page');
			test.assertTitle('Guestbook', 'Title of results page is Guestbook');
			test.assertTextExists(testusers.testuser1.name, 'Name of test user 1 is present on page');
			test.assertTextExists(testusers.testuser1.email, 'Email of test user 1 is present on page');
			test.assertTextExists(testusers.testuser1.description, 'Description of test user 1 is present on page');
			test.assertTextExists(testusers.testuser1.whyHere, 'Dropdown selection of test user 1 is present on page');
		});
	}).run(function() {
		test.done();
	});
});