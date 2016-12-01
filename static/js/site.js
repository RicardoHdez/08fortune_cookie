// var fortuna = function(){
//     swal(`si tu felicidad quieres encontrar a tu admirador debes amar`)
// };
var fortuna = function(){
    swal({
    title: "OYE!...",
    imageUrl: "../vendor/sweetalert/example/images/pikachu.png",
    text: "Si tu felicidad quieres encontrar a tu admirador debes amar"    
    });
};

var getFortuneFromServer = function(){
    //Realizando la peticion con AJAX
    //function(data, status).....cb recibe 2 parametros, la infromacion que obtuvo, estatus
    $.get("/getfortune", "", function(data, status){
        console.log("> Estatus de respuesta " + status);
        if(status == "success"){
            // swal(data.message);
            swal({
                title: "OYE!...",
                imageUrl: "../vendor/sweetalert/example/images/pikachu.png",
                text: data.message
            });
        }else{
            console.log("Error en la fortuna");
            fortuna();
        } 
    }, "json");
};
