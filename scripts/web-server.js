var express = require('express');
var path = require('path');
var rootPath = path.normalize(__dirname + '/../');
var resources = require(rootPath+'\\app\\serverController.js');
var app= express();
var bodyParser= require('body-parser');
var jQuery = app.use(express.static(__dirname + '/../js/jquery-2.1.4.min.js'));

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(express.static(rootPath));

app.get('/', function (req, res) {
  res.sendFile(rootPath+'\home.html');
});

app.get('/recettes', function (req, res) {
  res.sendFile(rootPath+'\home.html');
});

app.get('/ingredients', function (req, res) {
  res.sendFile(rootPath+'\home.html');
});

app.get('/communaute', function (req, res) {
  res.sendFile(rootPath+'\home.html');
});

app.get('/communaute_details', function (req, res) {
  res.sendFile(rootPath+'\home.html');
});

app.get('/recettes_details', function (req, res) {
  res.sendFile(rootPath+'\home.html');
});

app.get('/recettes_new', function (req, res) {
  res.sendFile(rootPath+'\home.html');
});

app.get('/ingredients', function (req, res) {
  res.sendFile(rootPath+'\home.html');
});

app.get('/home', function (req, res) {
  res.sendFile(rootPath+'\home.html');
});

app.get('/json/:filename', resources.get);
app.post('/json/:filename', resources.save);

module.exports = app;

app.set('port', process.env.PORT || 8050);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});