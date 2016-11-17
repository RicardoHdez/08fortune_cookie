var path = require('path'), 
    fs = require('fs');
//Creando manejadores
var _getAuthor = function(req, res){
    res.end(`Autor: Ricardo Hdez`);
};
// var _getFortune = function(req, res){
//     res.end(`La suerte no existe, se fabrica ;)`);
// };
//------>Objeto manejador
var handler = {};

//Registro de manejadores en el objeto manejador
handler["/getauthor"] = _getAuthor;
// handler["/getfortune"] = _getFortune;

//Necesario exportar el objeto, para que el server lo lea
module.exports = handler;
