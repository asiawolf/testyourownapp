var pages = require('../helpers/pages');
var testusers = require('../helpers/test_users');
var testsuite = require('../helpers/testsuite');

casper.test.begin('a test to verify form is filled and results are displayed', 56, function(test) {
	casper.start(pages.home, function() {
		testsuite.clearResults(casper);
 		testsuite.fillGuestForm(casper, testusers.testuser1);
		casper.then(function(){
			test.assertTextExists(testusers.testuser1.name, 'Name of test user 1 is present on page');
			test.assertTextExists(testusers.testuser1.email, 'Email of test user 1 is present on page');
			test.assertTextExists(testusers.testuser1.description, 'Description of test user 1 is present on page');
			test.assertTextExists(testusers.testuser1.whyHere, 'Dropdown selection of test user 1 is present on page');
		});
		testsuite.goToHome(casper);
		testsuite.fillGuestForm(casper, testusers.testuser2);
		casper.then(function(){
			test.assertTextExists(testusers.testuser1.name, 'Name of test user 1 is present on page after adding user 2');
			test.assertTextExists(testusers.testuser1.email, 'Email of test user 1 is present on page after adding user 2');
			test.assertTextExists(testusers.testuser1.description, 'Description of test user 1 is present on page after adding user 2');
			test.assertTextExists(testusers.testuser1.whyHere, 'Dropdown selection of test user 1 is present on page after adding user 2');
			test.assertTextExists(testusers.testuser2.name, 'Name of test user 2 is present on page');
			test.assertTextExists(testusers.testuser2.email, 'Email of test user 2 is present on page');
			test.assertTextExists(testusers.testuser2.description, 'Description of test user 2 is present on page');
			test.assertTextExists(testusers.testuser2.whyHere, 'Dropdown selection of test user 2 is present on page');
		});
		testsuite.goToHome(casper);
		testsuite.fillGuestForm(casper, testusers.testuser3);
		casper.then(function(){
			test.assertTextExists(testusers.testuser1.name, 'Name of test user 1 is present on page after adding user 3');
			test.assertTextExists(testusers.testuser1.email, 'Email of test user 1 is present on page after adding user 3');
			test.assertTextExists(testusers.testuser1.description, 'Description of test user 1 is present on page after adding user 3');
			test.assertTextExists(testusers.testuser1.whyHere, 'Dropdown selection of test user 1 is present on page after adding user 3');
			test.assertTextExists(testusers.testuser2.name, 'Name of test user 2 is present on page after adding user 3');
			test.assertTextExists(testusers.testuser2.email, 'Email of test user 2 is present on page after adding user 3');
			test.assertTextExists(testusers.testuser2.description, 'Description of test user 2 is present on page  after adding user 3');
			test.assertTextExists(testusers.testuser2.whyHere, 'Dropdown selection of test user 2 is present on page after adding user 3');
			test.assertTextExists(testusers.testuser3.name, 'Name of test user 3 is present on page');
			test.assertTextExists(testusers.testuser3.email, 'Email of test user 3 is present on page');
			test.assertTextExists(testusers.testuser3.description, 'Description of test user 3 is present on page');
			test.assertTextExists(testusers.testuser3.whyHere, 'Dropdown selection of test user 3 is present on page');
		});
		testsuite.goToHome(casper);
		testsuite.fillGuestForm(casper, testusers.testuser4);
		casper.then(function(){
			test.assertTextExists(testusers.testuser1.name, 'Name of test user 1 is present on page after adding user 4');
			test.assertTextExists(testusers.testuser1.email, 'Email of test user 1 is present on page after adding user 4');
			test.assertTextExists(testusers.testuser1.description, 'Description of test user 1 is present on page after adding user 4');
			test.assertTextExists(testusers.testuser1.whyHere, 'Dropdown selection of test user 1 is present on page after adding user 4');
			test.assertTextExists(testusers.testuser2.name, 'Name of test user 2 is present on page after adding user 4');
			test.assertTextExists(testusers.testuser2.email, 'Email of test user 2 is present on page after adding user 4');
			test.assertTextExists(testusers.testuser2.description, 'Description of test user 2 is present on page  after adding user 4');
			test.assertTextExists(testusers.testuser2.whyHere, 'Dropdown selection of test user 2 is present on page after adding user 4');
			test.assertTextExists(testusers.testuser3.name, 'Name of test user 3 is present on page after adding user 4');
			test.assertTextExists(testusers.testuser3.email, 'Email of test user 3 is present on page after adding user 4');
			test.assertTextExists(testusers.testuser3.description, 'Description of test user 3 is present on page after adding user 4');
			test.assertTextExists(testusers.testuser3.whyHere, 'Dropdown selection of test user 3 is present on page after adding user 4');
			test.assertTextExists(testusers.testuser4.name, 'Name of test user 4 is present on page');
			test.assertTextExists(testusers.testuser4.email, 'Email of test user 4 is present on page');
			test.assertTextExists(testusers.testuser4.description, 'Description of test user 4 is present on page');
			test.assertTextExists(testusers.testuser4.whyHere, 'Dropdown selection of test user 4 is present on page');
		});
		testsuite.clearResults(casper);
 		testsuite.goToGuestbook(casper);
 		casper.then(function(){
			test.assertTextDoesntExist(testusers.testuser1.name, 'Name of test user 1 is not present on page after results are cleared');
			test.assertTextDoesntExist(testusers.testuser2.name, 'Name of test user 2 is not present on page after results are cleared');
			test.assertTextDoesntExist(testusers.testuser3.name, 'Name of test user 3 is not present on page after results are cleared');
			test.assertTextDoesntExist(testusers.testuser4.name, 'Name of test user 4 is not present on page after results are cleared');
			test.assertTextDoesntExist(testusers.testuser1.email, 'Email of test user 1 is not present on page after results are cleared');
			test.assertTextDoesntExist(testusers.testuser2.email, 'Email of test user 2 is not present on page after results are cleared');
			test.assertTextDoesntExist(testusers.testuser3.email, 'Email of test user 3 is not present on page after results are cleared');
			test.assertTextDoesntExist(testusers.testuser4.email, 'Email of test user 4 is not present on page after results are cleared');
			test.assertTextDoesntExist(testusers.testuser1.description, 'Description of test user 1 is not present on page after results are cleared');
			test.assertTextDoesntExist(testusers.testuser2.description, 'Description of test user 2 is not present on page after results are cleared');
			test.assertTextDoesntExist(testusers.testuser3.description, 'Description of test user 3 is not present on page after results are cleared');
			test.assertTextDoesntExist(testusers.testuser4.description, 'Description of test user 4 is not present on page after results are cleared');
			test.assertTextDoesntExist(testusers.testuser1.whyHere, 'Dropdown selection of test user 1 is not present on page after results are cleared');
			test.assertTextDoesntExist(testusers.testuser2.whyHere, 'Dropdown selection of test user 2 is not present on page after results are cleared');
			test.assertTextDoesntExist(testusers.testuser3.whyHere, 'Dropdown selection of test user 3 is not present on page after results are cleared');
			test.assertTextDoesntExist(testusers.testuser4.whyHere, 'Dropdown selection of test user 4 is not present on page after results are cleared');
		});
	}).run(function() {
		test.done();
	});
});