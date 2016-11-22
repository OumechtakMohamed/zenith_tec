'use strict';

var express = require('express');
var router = express.Router();
var controller = require('./controllers');

router.get('/', controller.main);

/*
router.get('/', function(req,res){

		res.render('index',{
			title: 'My Home Page'
	});
});

*/

module.exports = router;