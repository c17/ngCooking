var express = require('express');
var path = require('path');
var rootPath = path.normalize(__dirname + '/../');
var resources = require(rootPath+'\\app\\serverController.js');
var app= express();
var bodyParser= require('body-parser');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(express.static(rootPath));

app.get('/json/:filename', resources.get);
app.post('/json/:filename', resources.save);


app.listen(8050);
console.log('Listening 8050');