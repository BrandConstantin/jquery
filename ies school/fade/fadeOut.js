$(document).ready(function(){
	$("button").click(function(){
		var div = $("#div1");		
		div.animate().fadeOut();

		$("#div2").fadeOut('slow');
		$("#div3").fadeOut(7000);
	});
});