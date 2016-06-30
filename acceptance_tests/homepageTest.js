casper.test.begin('a test to verify page title', 1, function(test) {
    casper.start('http://localhost:3000/', function() {
        test.assertExists('#name');
    }).run(function() {
        test.done();
    });
});