//Cargando configuraciones
var http = require('http');
var config = require('./config/config.js');
var PORT = config.PORT;
var IP = config.IP;
var fs = require('fs');
var mime = require('mime');
var path = require('path');
var staticServer = require('./internals/static-server.js');
var handlers = require('./internals/handlers.js');
var fortune = require('./internals/fortune.js');
//express
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
//uso de express
app.use(bodyParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("static"));
//Mongo
var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;
var connectionUrl = 'mongodb://localhost/fortuneapp';

app.set('port', process.env.PORT || 3001);

app.get('/', function(req, res){
    res.render('index');		  
    res.send(html);
});

app.get('/getfortune', function(req, res){
    var urlPath = req.url;
    handlers[urlPath](req, res);
    
});

app.post('/getingresar', function(req, res){
    var urlPath = req.url;
    handlers[urlPath](req, res);
});

app.listen(app.get('port'), function(){
  console.log( 'Express se ha iniciado en http://localhost:' +
    app.get('port') + '; presione Ctrl-C para cerrar el servidor.' );
});