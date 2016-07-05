var pages = require('../helpers/pages');
var users = require('../helpers/users');
var utils = require('../helpers/utils');

casper.test.begin('a test to verify form is filled and results are displayed', 56, function(test) {
	casper.start(pages.home, function() {
		utils.clearResults(casper);
 		utils.fillGuestForm(casper, users[0]);
		
		casper.then(function(){
			test.assertTextExists(users[0].name, 'Name of test user 1 is present on page');
			test.assertTextExists(users[0].email, 'Email of test user 1 is present on page');
			test.assertTextExists(users[0].description, 'Description of test user 1 is present on page');
			test.assertTextExists(users[0].whyHere, 'Dropdown selection of test user 1 is present on page');
		});
		
		utils.goToHome(casper);
		utils.fillGuestForm(casper, users[1]);
		
		casper.then(function(){
			test.assertTextExists(users[0].name, 'Name of test user 1 is present on page after adding user 2');
			test.assertTextExists(users[0].email, 'Email of test user 1 is present on page after adding user 2');
			test.assertTextExists(users[0].description, 'Description of test user 1 is present on page after adding user 2');
			test.assertTextExists(users[0].whyHere, 'Dropdown selection of test user 1 is present on page after adding user 2');
			test.assertTextExists(users[1].name, 'Name of test user 2 is present on page');
			test.assertTextExists(users[1].email, 'Email of test user 2 is present on page');
			test.assertTextExists(users[1].description, 'Description of test user 2 is present on page');
			test.assertTextExists(users[1].whyHere, 'Dropdown selection of test user 2 is present on page');
		});
		
		utils.goToHome(casper);
		utils.fillGuestForm(casper, users[2]);
		
		casper.then(function(){
			test.assertTextExists(users[0].name, 'Name of test user 1 is present on page after adding user 3');
			test.assertTextExists(users[0].email, 'Email of test user 1 is present on page after adding user 3');
			test.assertTextExists(users[0].description, 'Description of test user 1 is present on page after adding user 3');
			test.assertTextExists(users[0].whyHere, 'Dropdown selection of test user 1 is present on page after adding user 3');
			test.assertTextExists(users[1].name, 'Name of test user 2 is present on page after adding user 3');
			test.assertTextExists(users[1].email, 'Email of test user 2 is present on page after adding user 3');
			test.assertTextExists(users[1].description, 'Description of test user 2 is present on page  after adding user 3');
			test.assertTextExists(users[1].whyHere, 'Dropdown selection of test user 2 is present on page after adding user 3');
			test.assertTextExists(users[2].name, 'Name of test user 3 is present on page');
			test.assertTextExists(users[2].email, 'Email of test user 3 is present on page');
			test.assertTextExists(users[2].description, 'Description of test user 3 is present on page');
			test.assertTextExists(users[2].whyHere, 'Dropdown selection of test user 3 is present on page');
		});
		
		utils.goToHome(casper);
		utils.fillGuestForm(casper, users[3]);
		
		casper.then(function(){
			test.assertTextExists(users[0].name, 'Name of test user 1 is present on page after adding user 4');
			test.assertTextExists(users[0].email, 'Email of test user 1 is present on page after adding user 4');
			test.assertTextExists(users[0].description, 'Description of test user 1 is present on page after adding user 4');
			test.assertTextExists(users[0].whyHere, 'Dropdown selection of test user 1 is present on page after adding user 4');
			test.assertTextExists(users[1].name, 'Name of test user 2 is present on page after adding user 4');
			test.assertTextExists(users[1].email, 'Email of test user 2 is present on page after adding user 4');
			test.assertTextExists(users[1].description, 'Description of test user 2 is present on page  after adding user 4');
			test.assertTextExists(users[1].whyHere, 'Dropdown selection of test user 2 is present on page after adding user 4');
			test.assertTextExists(users[2].name, 'Name of test user 3 is present on page after adding user 4');
			test.assertTextExists(users[2].email, 'Email of test user 3 is present on page after adding user 4');
			test.assertTextExists(users[2].description, 'Description of test user 3 is present on page after adding user 4');
			test.assertTextExists(users[2].whyHere, 'Dropdown selection of test user 3 is present on page after adding user 4');
			test.assertTextExists(users[3].name, 'Name of test user 4 is present on page');
			test.assertTextExists(users[3].email, 'Email of test user 4 is present on page');
			test.assertTextExists(users[3].description, 'Description of test user 4 is present on page');
			test.assertTextExists(users[3].whyHere, 'Dropdown selection of test user 4 is present on page');
		});
		
		utils.clearResults(casper);
 		utils.goToGuestbook(casper);
 		
 		casper.then(function(){
			test.assertTextDoesntExist(users[0].name, 'Name of test user 1 is not present on page after results are cleared');
			test.assertTextDoesntExist(users[1].name, 'Name of test user 2 is not present on page after results are cleared');
			test.assertTextDoesntExist(users[2].name, 'Name of test user 3 is not present on page after results are cleared');
			test.assertTextDoesntExist(users[3].name, 'Name of test user 4 is not present on page after results are cleared');
			test.assertTextDoesntExist(users[0].email, 'Email of test user 1 is not present on page after results are cleared');
			test.assertTextDoesntExist(users[1].email, 'Email of test user 2 is not present on page after results are cleared');
			test.assertTextDoesntExist(users[2].email, 'Email of test user 3 is not present on page after results are cleared');
			test.assertTextDoesntExist(users[3].email, 'Email of test user 4 is not present on page after results are cleared');
			test.assertTextDoesntExist(users[0].description, 'Description of test user 1 is not present on page after results are cleared');
			test.assertTextDoesntExist(users[1].description, 'Description of test user 2 is not present on page after results are cleared');
			test.assertTextDoesntExist(users[2].description, 'Description of test user 3 is not present on page after results are cleared');
			test.assertTextDoesntExist(users[3].description, 'Description of test user 4 is not present on page after results are cleared');
			test.assertTextDoesntExist(users[0].whyHere, 'Dropdown selection of test user 1 is not present on page after results are cleared');
			test.assertTextDoesntExist(users[1].whyHere, 'Dropdown selection of test user 2 is not present on page after results are cleared');
			test.assertTextDoesntExist(users[2].whyHere, 'Dropdown selection of test user 3 is not present on page after results are cleared');
			test.assertTextDoesntExist(users[3].whyHere, 'Dropdown selection of test user 4 is not present on page after results are cleared');
		});
	}).run(function() {
		test.done();
	});
});