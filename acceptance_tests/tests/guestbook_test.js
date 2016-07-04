var pages = require('../helpers/pages');
var testusers = require('../helpers/test_users');
var testsuite = require('../helpers/testsuite');

casper.test.begin('a test to verify form is filled and results are displayed', 10, function(test) {
	casper.start(pages.home, function() {
		casper.then(function(){
			testsuite.clearResults(casper);
 		});
 		casper.then(function(){
			this.fillSelectors('form#contactForm', {
			'input[name="name"]': testusers.testuser1.name,
			'input[name="email"]': testusers.testuser1.email,
			'#description': testusers.testuser1.description,
			'select#dropdown': testusers.testuser1.whyHere
 		}, false);
 		});
 		casper.then(function(){
			this.click('#createProfile');
 		});
		casper.then(function(){
			test.assertUrlMatch('results', 'User lands on results page');
			test.assertTitle('Guestbook', 'Title of results page is Guestbook');
			test.assertTextExists(testusers.testuser1.name, 'Name of test user 1 is present on page');
			test.assertTextExists(testusers.testuser1.email, 'Email of test user 1 is present on page');
			test.assertTextExists(testusers.testuser1.description, 'Description of test user 1 is present on page');
			test.assertTextExists(testusers.testuser1.whyHere, 'Dropdown selection of test user 1 is present on page');
		});
		casper.then(function(){
			testsuite.clearResults(casper);
 		});
 		casper.then(function(){
			casper.open(pages.guestbook);
			casper.waitForText('Guestbook');
		});
 		casper.then(function(){
			test.assertTextDoesntExist(testusers.testuser1.name, 'Name of test user 1 is present on page after results are cleared');
			test.assertTextDoesntExist(testusers.testuser1.email, 'Email of test user 1 is present on page after results are cleared');
			test.assertTextDoesntExist(testusers.testuser1.description, 'Description of test user 1 is not present on page after results are cleared');
			test.assertTextDoesntExist(testusers.testuser1.whyHere, 'Dropdown selection of test user 1 is not present on page after results are cleared');
		});
	}).run(function() {
		test.done();
	});
});