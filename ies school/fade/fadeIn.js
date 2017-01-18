$(document).ready(function(){
	$("button").click(function(){
		var div = $("#div1");		
		div.animate().fadeIn();

		$("#div2").fadeIn('slow');
		$("#div3").fadeIn(7000);
	});
});