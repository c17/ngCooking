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

		var testArray = [];

		var receivingFile = fs.readFileSync('json/' + req.params.filename + '.json', 'utf8');
		res.setHeader('Content-Type', 'application/json');

		var stringifiedResource = JSON.stringify(resource);		
		stringifiedResourceArr = new Array(stringifiedResource);

		receivingFileArr = new Array(receivingFile);

		for(var indexGroup in receivingFile){
			if(receivingFile.hasOwnProperty(indexGroup)){
				for(var item in receivingFile[indexGroup]){
					var group = receivingFile[indexGroup];
					testArray.push(group[item]);
				}
			}
		}
		


		if(receivingFileArr.length != 0){
			var newJson = [].concat(receivingFileArr, stringifiedResourceArr);
		}
		else{
			var newJson = stringifiedResourceArr;
		}

		var jsonArray = new Array();

		jsonArray.push(newJson);

		console.log(newJson);

		console.log(receivingFile);

		console.log("\n"+ testArray);

		res.setHeader('Content-Type', 'text/plain');
		fs.writeFileSync('json/' + req.params.filename + ".json", jsonArray);	
		res.end();
	}
	catch(e){
		console.log(e);
	}
};
