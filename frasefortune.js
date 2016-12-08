var mongo = require("mongodb");
var mongoClient = mongo.MongoClient;

module.exports = function (cb) {
        //Logica que obtiene un mensaje aleatorio
        mongoClient.connect("mongodb://127.0.0.1:27017/fortuneapp",
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
    };//aqui se cierra getFortune function