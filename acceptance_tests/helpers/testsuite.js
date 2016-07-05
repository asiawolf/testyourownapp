var pages = require('../helpers/pages');

module.exports = {
	clearResults: function(casper) {
    	casper.then(function(){
    		casper.open(pages.guestbook);
    	});
    	casper.then(function(){
    		casper.waitForSelector('#clearButton');
    	});
    	casper.then(function(){
    		casper.click('#clearButton');
    	});
    	casper.then(function(){
    		casper.waitForSelector('#name');
    	});
	},
	fillGuestForm: function(casper, user)  {
		casper.then(function(){
			casper.fillSelectors('form#contactForm', {
				'input[name="name"]': user.name,
				'input[name="email"]': user.email,
				'#description': user.description,
				'select#dropdown': user.whyHere
 			}, false);
 		});
		casper.then(function(){
			this.click('#createProfile');
 		});
	},
	goToGuestbook: function(casper)  {
		casper.then(function(){
			casper.open(pages.guestbook);
			casper.waitForText('Guestbook');
		});
	},
	goToHome: function(casper)  {
		casper.then(function(){
			casper.open(pages.home);
			casper.waitForText('Welcome! Please fill out this form.');
		});
	}
};