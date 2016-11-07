$(document).ready(function(){
	//engrandar y crear opacidad notas cuando se pasa por encima con el ratón
    $(".nota").mouseenter(function(){
		$(this).css({opacity: '0.7', width: '150px', height: '150px'});

		var notasPulsadas = $(this).text();
		$("#pulsadas").append(notasPulsadas, " ");

		//dibujar las notas
		var idNota = $(this).attr("id");

		if (idNota == "do") {
			$(".dibujarNota:last").after("<img class=\"dibujarNota\" src=\"img/nota.jpg\" style=\"top:90px\" width=\"40px\" height=\"40px\">");
		} else if (idNota == "re") {
			$(".dibujarNota:last").after("<img class=\"dibujarNota\" src=\"img/nota.jpg\" style=\"top:80px\" width=\"40px\" height=\"40px\">");
		} else if (idNota == "mi") {
			$(".dibujarNota:last").after("<img class=\"dibujarNota\" src=\"img/nota.jpg\" style=\"top:70px\" width=\"40px\" height=\"40px\">");
		} else if (idNota == "fa") {
			$(".dibujarNota:last").after("<img class=\"dibujarNota\" src=\"img/nota.jpg\" style=\"top:60px\" width=\"40px\" height=\"40px\">");
		} else if (idNota == "sol") {
			$(".dibujarNota:last").after("<img class=\"dibujarNota\" src=\"img/nota.jpg\" style=\"top:50px\" width=\"40px\" height=\"40px\">");
		} else if (idNota == "la") {
			$(".dibujarNota:last").after("<img class=\"dibujarNota\" src=\"img/nota.jpg\" style=\"top:40px\" width=\"40px\" height=\"40px\">");
		} else if (idNota == "si") {
			$(".dibujarNota:last").after("<img class=\"dibujarNota\" src=\"img/nota.jpg\" style=\"top:30px\" width=\"40px\" height=\"40px\">");
		}
	});

    //cuando se sale de encima de las notas se vuelven a su tamaño original
	$(".nota").mouseleave (function(){
		$(this).css({opacity: '1', width: '100px', height: '100px'});
	});

	//mostrar/ocultar las notas no/si deseadas
	$("#ocultar").click(function(){
		var ocultarNota = $("#selectarNotas").val().toLowerCase();

		if (ocultarNota != "null") {
			$("div#" + ocultarNota).toggle();
		}

	});

	//tambien se puede hacer asi
	/*
	$("#agregarQuitar").click(function(){
        var teclas = $("select").val();
		$(".nota").eq(teclas).toggle();
    });
	*/

	//deslisar las notas musicales
	$("#deslisar").click(function(){
		$("#notasMusicales").slideToggle("slow");
		$("#deslisar").text("Deslisar /Mostrar Notas");
	});

	//teclas guitarra
	$("#guitarra").click(function(){
        $("div.nota:even").css({"background-color": "green", "color": "black"});
		$("div.nota:odd").css({"background-color": "red", "color": "white"});

		$("div.nota").each(function(i){
			var alto = 70 + (30 * i);

			$(this).animate({
				height: alto + "px",
			}, 100);
		});
	});

	//teclas piano
	$("#piano").click(function(){
        $("div.nota:even").css({"background-color": "black", "color": "white"});
		$("div.nota:odd").css({"background-color": "white", "color": "black"});
    });

	//teclas xilofono
	$("#xilofono").click(function(){
        $("div.nota:even").css({"background-color": "#0a0", "color": "white"});
		$("div.nota:odd").css({"background-color": "b1b", "color": "black"});
    });
});