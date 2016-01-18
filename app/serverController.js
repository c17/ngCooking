var fs = require('fs');

module.exports.get = function(req, res){
	var resource = fs.readFileSync('json/' + req.params.filename + '.json', 'utf8');
	res.setHeader('Content-Type', 'application/json');
	res.send(resource);
};

module.exports.save = function(req, res){
	var resource = req.body;
	fs.writeFileSync('json/' + req.param.filename + '.json', JSON.stringify(event));
	res.send(resource);
};
