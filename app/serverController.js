var fs = require('fs');
var _ = require('underscore');

module.exports.get = function(req, res){
	var resource = fs.readFileSync('json/' + req.params.filename + '.json', 'utf8');
	res.setHeader('Content-Type', 'application/json');


	res.send(resource);
};


module.exports.save = function(req, res){
	var resource = req.body;
	try{

		var receivingFile = fs.readFileSync('json/' + req.params.filename + '.json', 'utf8');
		res.setHeader('Content-Type', 'application/json');

		var stringifiedResource = JSON.stringify(resource);

		console.log("before : "+receivingFile + "\n");

		console.log("before : "+stringifiedResource + "\n");

		receivingFileArr = new Array(receivingFile);

		stringifiedResourceArr = new Array(stringifiedResource);


		console.log("toArray: " + receivingFileArr + "\n");

		console.log("toArray: " + stringifiedResourceArr + "\n");

		var newJson = [].concat(receivingFileArr, stringifiedResourceArr);

		console.log("\n" + JSON.stringify(newJson));

		res.setHeader('Content-Type', 'application/json');
		fs.writeFileSync('json/' + req.params.filename + ".json", newJson);	
		res.end();
	}
	catch(e){
		console.log(e);
	}
};
