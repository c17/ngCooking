var fs = require('fs');

module.exports.get = function(req, res){
	var resource = fs.readFileSync('json/' + req.params.filename + '.json', 'utf8');
	res.setHeader('Content-Type', 'application/json');
	res.send(resource);
};

module.exports.save = function(req, res){
	var resource = req.body;

	var receivingFile = fs.readFileSync('json/' + req.params.filename + '.json', 'utf8');

	var receivingFileStringified = JSON.stringify(receivingFile);

	var stringifiedResource = JSON.stringify(resource);

	receivingFileStringifiedAsArray = new Array(receivingFileStringified);


	console.log("receivingFileStringifiedAsArray : " + receivingFileStringifiedAsArray);
	receivingFileStringifiedAsArray.push(stringifiedResource);



	fs.writeFileSync('json/' + req.param.filename + '.json', receivingFileStringifiedAsArray);
	res.send(resource);
};
