//Logica que obtiene un mensaje aleatorio
// var fortunePapers = [
//     "El que madruga dios le ayuda",
//     "Dile a todos que si, mas no les digas cuando",
//     "Si buscas resultados distintos no hagas siempre lo mismo",
//     "Todo es posible si te lo propones",
//     "Suerte es lo que sucede cuando la preparacion y la oportunidad se encuentran fucionadas"
// ];
// module.exports = {
//     "getFortune": function (cb) {
//         //Logica que obtiene un mensaje aleatorio

//         var selector = Math.floor(Math.random() * (fortunePapers.length - 0)+0);
//         var fortuneMessage = fortunePapers[selector];
//         // Armando Objeto Respuesta
//         // Convertir en cadena escrita el Objeto Json
//         var fortunePaperObj = JSON.stringify({
//             "message": fortuneMessage
//         });
//         //Ejecutp el callback pasandole el parametro fortunePaper
//         cb(fortunePaperObj);
//     }
// };

var mongo = require("mongodb");
var mongoClient = mongo.MongoClient;

module.exports = {
    "getFortune": function (cb) {
        //Logica que obtiene un mensaje aleatorio
        mongoClient.connect("mongodb://RicardoHdez:Ricky38476539@ds119578.mlab.com:19578/fortuneapps",
        function(err, db){
            var papers = db.collection("papers");

            var consulta = papers.find({});

            consulta.toArray(function(err, data){

                var selector = Math.round(Math.random(0)* data.length);
                console.log("El numero de tu fortuna es: " + selector);
                // Armando Objeto Respuesta
                // Convertir en cadena escrita el Objeto Json
                var fortunePaperObj = JSON.stringify(data[selector]);
                console.log("Este es el String: " + fortunePaperObj);
                // Cerrar mongo
                db.close();
                //Ejecutp el callback pasandole el parametro fortunePaper
                cb(fortunePaperObj);
            });
        });
    }//aqui se cierra getFortune function
};