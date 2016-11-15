var path = require('path'), 
    fs = require('fs');
//Creando manejadores
var _getAuthor = function(req, res){
    res.end(`Autor: Ricardo Hdez`);
};
//------>Objeto manejador
var handler = {};
//Registro de manejadores en el objeto manejador
handler["/getauthor"] = _getAuthor;
//Necesario exportar el objeto, para que el server lo lea
module.exports = handler;
