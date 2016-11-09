//Cargando configuraciones
var http = require('http');
var config = require('./config/config.js');
var PORT = config.PORT;
var IP = config.IP;
var fs = require('fs');
var mime = require('mime');
var path = require('path');
var staticServer = require('./internals/static-server.js');

//Para importar los colores
//Tema de colors....
var colors = require('colors');
colors.setTheme(config.color_theme);

//req       peticion
//res       respuesta
var server = http.createServer(function(req, res){
    var urlPath = req.url;
    if(urlPath == '/'){
        urlPath = ('/index.html');
    }
    //Se llama al servidor static
    staticServer.serve(urlPath, res);
});

server.listen(PORT, IP, function(){
    console.log(`>Server working @http://${IP}:${PORT}`);
});