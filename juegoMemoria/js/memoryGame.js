//casilla abierta
var casillaAbierta = ""; 
//Imagen abierta
var imgAbierta = ""; 
//Numero de intentos
var numIntentos = 0; 
//Numero de imagenes encontradas
var numImg =  0; 

//Funcion para calcular un numero aleatorio (Desde, Hasta)	
function randomFromTo(from, to){
    return Math.floor(Math.random() * (to - from + 1) + from);
}

//baraja las cartas asignandolas aleatoriamente
function shuffle() {
	//Crea un array para añadir todas las imagenes
    var array_img = new Array();

	//recorre todas las casillas
	$("#cartas div").each(function(idx, elem){
		//asigna al array de imagenes el nombre de la imágen
        array_img[idx] = $(elem).children().first().attr("src");
	});

	//vuelve a recorrer todas las casillas
	$("#cartas div").each(function(idx,elem){
		//calcula un numero aleatorio del 0 hasta el tamaño del array de imagenes
        randIndex = randomFromTo(0, array_img.length - 1);
		//establece una nueva imagen a la casilla cogiendola del array de imagenes
		$(elem).children().first().attr("src", array_img[randIndex]);
		//Quitamos del array de imagenes la imagen utilizada
        array_img.splice(randIndex, 1);
	});
}

//reinicio del juego
function reseteaJuego() {
    //barajar de nuevo
    shuffle();
    //oculta todas las imagenes
    $("img").hide();
    //quita la clase de opacidad 
    $("img").removeClass("opacidadCartas");
    //reinicia contador
    numIntentos = 0;
    //elimina la capa mensaje
    $("#msg").remove(); 
    //reinicia el contador de clicks
    $("#numIntentos").html("" + numIntentos);
    //reinicia casilla abierta 
    casillaAbierta = "";
    //reinicia imagen abierta
    imgAbierta = "";
    //reinicia encontradas
    numImg = 0; 
    return false;
}

//inicio juego
$(document).ready(function() {
    //oculta todas las imagenes
    $("img").hide();
    //en caso de hacer click a las casillas llama a la funcion clickImg
    $("#cartas div").click(clickImg);
	//baraja las casillas
    shuffle();

	//Funcion de hacer click en la casilla	
    function clickImg() {
        //coge el id de la casilla pulsada
		id = $(this).attr("id");	
		//Pregunta si esta oculta 
        if ($("#" + id + " img").is(":hidden")) {
			//deshabilita la funcion click clickImg para evitar que se pulse
            $("#cartas div").unbind("click", clickImg);
			//muestra la imagen mediante fast
            $("#" + id + " img").slideDown('fast');

			//si es la primera imagen del par
			if (imgAbierta == "") {
				//guarda el id de la casilla 
                casillaAbierta = id; 						
				//guarda el src de la imagen pulsada
                imgAbierta = $("#" + id + " img").attr("src");
				//vuelve a activar la funcion click a las casillas
                setTimeout(function() {
                    $("#cartas div").bind("click", clickImg)
                }, 300);						
			//si no comprueba con la segunda
            } else {
				//guarda el nombre de la imagen segunda
                imgAbiertaActual = $("#" + id + " img").attr("src");
				//la compara con la primera y si son diferentes
                if (imgAbierta != imgAbiertaActual) {
                    // cierra de nuevo con efecto y reinicia variables
                    setTimeout(function() {
                        $("#" + id + " img").slideUp('fast');
                        $("#" + casillaAbierta + " img").slideUp('fast');
                        casillaAbierta = "";
                        imgAbierta = "";
                    }, 400);
				//y si son iguales
                } else {
                    // le aplica clase de opacidad a las dos imagenes							
                    $("#" + id + " img").addClass("opacidadCartas");
                    $("#" + casillaAbierta + " img").addClass("opacidadCartas");
					//incrementa el contador de encontrado
                    numImg++;
					//reinicia las variables de casilla abierta e imagen abierta
                    casillaAbierta = "";
                    imgAbierta = "";
                }
                
				//desactiva de nuevo el click						
                setTimeout(function() {
                    $("#cartas div").bind("click", clickImg)
                }, 400);
            }

			//incrementa numero de clicks y lo escribe
            numIntentos++;

            $("#numIntentos").html("" + numIntentos);

			//si llegamos al numero de parejas encontradas
            if (numImg == 5) {
				//crea una capa nueva y se la anade a la capa link
                msg = '<span id="msg">Enhorabuena! Has acertado todas las imágenes con Sushi con </span>';
                $("span.link").prepend(msg);
            }
        }
    }
});