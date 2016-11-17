// var path = require('path'), 
//     fs = require('fs');
//5 frases aleatorias
// var proverbio = ["","El que madruga dios le ayuda","Dile a todos que si, mas no les digas cuando","Si buscas resultados distintos no hagas siempre lo mismo","Todo es posible si te lo propones","Suerte es lo que sucede cuando la preparacion y la oportunidad se encuentran fucionadas"];

//Creando manejadores
// var _getfortune = function(req, res){
//     var numeroMatriz = 0;
//     numeroMatriz = Math.ceil(Math.random() * 5);
//     var texto = proverbio[numeroMatriz];
//     res.end(`Fortuna: ${texto}`);
// };
//------>Objeto manejador
// var fortune = {};

//Registro de manejadores en el objeto manejador
// fortune["/getfortune"] = _getfortune;

//Necesario exportar el objeto, para que el server lo lea
// module.exports = fortune;

//Logica que obtiene un mensaje aleatorio
var fortunePapers = [
    "El que madruga dios le ayuda",
    "Dile a todos que si, mas no les digas cuando",
    "Si buscas resultados distintos no hagas siempre lo mismo",
    "Todo es posible si te lo propones",
    "Suerte es lo que sucede cuando la preparacion y la oportunidad se encuentran fucionadas"
];
module.exports = {
    "getFortune" : function(cb){
        var seleccion = Math.floor(Math.random() * fortunePapers.length);
        var fortuneMessage = fortunePapers[seleccion];
        //Armando un objeto respuesta
        var fortunePaper =
        //Convertir en cadena escrita el json 
        JSON.stringify({
            "message" : fortuneMessage
        });
        //Ejecuto el callback enviandole como parametro el fortunePaper
        cb(fortunePaper);
    }
};