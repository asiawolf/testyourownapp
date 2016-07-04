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
	}
};