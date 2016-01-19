var express = require('express');
var child_process = require('child_process');
var _ = require('underscore');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	
	child_process.exec('gsutil ls gs://furniturebucket/*.png', function(err, stdout, stderr) {
		var pathsArr=stdout.split("\n");
		var str_=""

		_.each(pathsArr, function(str){
			str_+=(str);
		});
		
  		res.render('index', { title: str_ });
	});

});

module.exports = router;
