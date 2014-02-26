var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
  	projects.grid = false;
  	res.render('index', projects);

};


exports.viewGrid = function(req, res) {
	projects['grid'] = true;
	console.log("hello");
	res.render('index', projects);	
};