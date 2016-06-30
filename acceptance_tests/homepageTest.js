casper.test.begin('a test to verify page title', 1, function(test) {
	casper.start('http://localhost:3000/', function() {
		this.fillSelectors('#contactForm', {
			'input[name="name"]':    'Asia Wolf',
			'input[name="email"]':    'asia.nicole.wolf@gmail.com',
			'#description':   'Testing things whoooo'
		}, false);
		this.click('#createProfile');
		casper.then(function(){
			test.assertTextExists('asia.nicole.wolf@gmail.com');
		});
	}).run(function() {
		test.done();
	});
});