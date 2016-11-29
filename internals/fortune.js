//Logica que obtiene un mensaje aleatorio
var fortunePapers = [
    "El que madruga dios le ayuda",
    "Dile a todos que si, mas no les digas cuando",
    "Si buscas resultados distintos no hagas siempre lo mismo",
    "Todo es posible si te lo propones",
    "Suerte es lo que sucede cuando la preparacion y la oportunidad se encuentran fucionadas"
];
module.exports = {
    "getFortune": function (cb) {
        //Logica que obtiene un mensaje aleatorio

        var selector = Math.floor(Math.random() * (fortunePapers.length - 0)+0);
        var fortuneMessage = fortunePapers[selector];
        // Armando Objeto Respuesta
        // Convertir en cadena escrita el Objeto Json
        var fortunePaperObj = JSON.stringify({
            "message": fortuneMessage
        });
        //Ejecutp el callback pasandole el parametro fortunePaper
        cb(fortunePaperObj);
    }

};