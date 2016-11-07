$(document).ready(function() {
    //formar las capas
	var capa = "<div></div>";

	for (i = 0; i < 520; i++){
		$("#contenedor").append(capa);
	}
	
	//les añade números
	for (i = 0; i < $("#contenedor div").length; i++){
		$("#contenedor div").eq(i).text(i + 1);
	}
		
	//rellenar las casilla al inicio
	rellenar();

	function rellenar(){
		$("#contenedor div").addClass("green");
		$("#contenedor div").removeClass("pink");	
	}

	//rellenar primera casilla
	$("#primero").on("click",function(){
		rellenar();
		$("#contenedor div").first().removeClass("green");
		$("#contenedor div").first().addClass("pink");
	});

	//rellenar ultima casilla
	$("#ultimo").on("click",function(){
		rellenar();
		$("#contenedor div").last().removeClass("green");
		$("#contenedor div").last().addClass("pink");
	});

	//rellenar casillas impares
	$("#impares").on("click",function(){
		rellenar();
		$("#contenedor div:odd").removeClass("green");
		$("#contenedor div:odd").addClass("pink");	
	});

	//rellenar casillas pares
	$("#pares").on("click",function(){
		rellenar();
		$("#contenedor div:even").removeClass("green");
		$("#contenedor div:even").addClass("pink");
	});

	//rellenar todas las casillas
	$("#todos").on("click",function(){
		$("#contenedor div").removeClass("green");
		$("#contenedor div").addClass("pink");
	});

	//limpiar y dejar como al inicio
	$("#ninguno").on("click",function(){
		rellenar();
	});

	//rellenar según el número indicado
	$("#seleccion").on("click",function(){
		rellenar();
		var num = $("#numero").val() - 1;

		$("#contenedor div").eq(num).removeClass("green");
		$("#contenedor div").eq(num).addClass("pink");
	});
});