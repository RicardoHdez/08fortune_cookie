var path = require('path'), 
    fs = require('fs'),
    fortune = require('./fortune.js');
//Mongo
var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;
var connectionUrl = 'mongodb://RicardoHdez:Ricky38476539@ds119578.mlab.com:19578/fortuneapps';

//Creando manejadores
var _getAuthor = function(req, res){
    res.end(`Autor: Ricardo Hdez`);
};
var _getIngresar = function(req, res){
    // Mongo
    var fruta = req.body.fruta;
    mongoClient.connect(connectionUrl, function (err, db){
        //verificando que si conecto
        if(err){
            console.log(">no se conecto.....");
            throw err;
        }
        //si llega aqui es que no hubo problema de conexion.
        var papers = db.collection('papers');
        //insertando algo a la collecion
        papers.insert({
            "message" : fruta
        }, function (err, res){
            if(err){
                console.log(">no se pudo insertar.......");
                db.close();
                throw err;
            }
            //si se llega aqui si se pudo insertar.
            console.log(`> Resultado de insertar: ${res}`);
            db.close();
        });
    });
    var html = 'Tu Fruta Favorita es: ' + fruta + '.<br>' +
                '<a href="/">Probar de nuevo.</a>';
    res.send(html);
    // res.render('index');
};
var _getFortune = function(req, res){
    console.log(`Se solicita fortuna....`);
    //Forma no bloqueante
    fortune.getFortune(function(fortunePaperObj){
        //Configurar el encabezado
        res.writeHead(200, {
            "Content-Type":"application/json"
        });
        console.log(`Contestando:  ${fortunePaperObj}`);
        res.end(fortunePaperObj);
    });
};

//------>Objeto manejador
var handler = {};

//Registro de manejadores en el objeto manejador
handler["/getauthor"] = _getAuthor;
handler["/getingresar"] = _getIngresar;
handler["/getfortune"] = _getFortune;

//Necesario exportar el objeto, para que el server lo lea
module.exports = handler;