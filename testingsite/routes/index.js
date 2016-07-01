var express = require('express');
var router = express.Router();
var utils = require('util');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Form Filling Page' });
});
router.post('/', function (req, res) {
  console.log(req.body);
  res.send("name: " + req.body.name.toString() + "\nemail: " + req.body.email.toString() + "\ndropdown: " + req.body.dropdown.toString());
});
module.exports = router;
