$(document).ready(function(){
	//con esta función primero se hace click en 
	//el boton click y luego en los páragrafo 
	//para que desaparezca
	/*
	$("button").click(function(){
		$('p').click(function(){
			$(this).hide();
		});
	});
	*/

	$('p').click(function(){
		$(this).hide();
	});
});
/*
var div = $("#div1");		
div.animate().fadeIn();
*/