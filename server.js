var http = require('http');
//Cargando configuraciones
var config = require('./config/config.js');
var PORT = config.PORT;
var IP = config.IP;
var fs = require('fs');
var mime = require('mime');
var path = require('path');

//Para importar los colores
//Tema de colors....
//colors.setTheme(config.color_theme);

//Agregar paqueteria de colores
var colors = require('colors');
colors.setTheme({
    "info":"rainbow",
    "data":"green",
    "error":"red",
    "Ame":"america"
});
//req       peticion
//res       respuesta
var server = http.createServer(function(req, res){
    var urlPath = req.url;
    if(urlPath == '/'){
        urlPath = path.resolve('./static/index.html');
    }else{
        urlPath = path.resolve('./static'+ urlPath);
    }
    console.log(`Recurso solicitado: ${urlPath}`.data);
    //Codigo que ejecuta nuestro server cada que se le ingresa una peticion
    // res.writeHead(200,{
    //     'Content-Type':'text/html'  
    // });
    //Declarar mime en una variable
    var mimeType = mime.lookup(urlPath);

    fs.readFile(urlPath, function(err, content){
        if(err){
            console.log(`Error al leer archivo ${err}`);
            //decidiendo el content type de la extension del archivo solicitado
            res.writeHead(500,{
                "Contenr-Type":"text/plain"
            });
            res.end('Error 500: Internal Error...'.error);
        }else{
            //Sirve el archivo
            res.writeHead(200,{
                "Content-Type": mimeType
            });
            console.log(`>Se sirve el archivo: ${urlPath}`.Ame);
            res.end(content);
        }
    });
});

server.listen(PORT, IP, function(){
    console.log(`>Server woorking @http://${IP}:${PORT}`);
    //Agregar colores en consola
    //console.log(`>Server woorking @http://127.0.0.1:3000`.info);
});