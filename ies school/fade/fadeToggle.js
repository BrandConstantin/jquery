$(document).ready(function(){
	$("button").click(function(){
		var div = $("#div1");		
		div.animate().fadeToggle();

		$("#div2").fadeToggle('slow');
		$("#div3").fadeToggle(8000);
	});
});