var express = require('express');
var router = express.Router();
var utils = require('util');
var store = require('../store')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Welcome! Please fill out this form.'});
});

router.post('/', function(req, res) {
  var user = {
  	name: req.body.name, 
  	email: req.body.email, 
  	description: req.body.description, 
  	dropdown: req.body.dropdown
  };
  
  store.users.push(user);
  res.redirect('/results');
});

router.get('/results', function(req, res, next) {
  res.render('results', {title: 'Guestbook', results: store.users});
});

router.post('/clear', function(req, res) {
  store.users = [];
  res.redirect('/');
});

module.exports = router;
