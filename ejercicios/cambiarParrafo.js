$(document).ready(function(){
	$("#elimina").click(function(){
		$("#miCapa p:first").html("<b>PRIMERO</b>");
		$("#miCapa p:eq(1)").html("<b>SEGUNDO</b>");
		$("#miCapa p:eq(2)").html("<b>TERCERO</b>");
		$("#miCapa p:eq(3)").html("<b>CUARTO</b>");
		$("#miCapa p:eq(4)").html("<b>QUINTO</b>");
		$("#miCapa p:eq(5)").html("<b>SEXTO</b>");
	});
});