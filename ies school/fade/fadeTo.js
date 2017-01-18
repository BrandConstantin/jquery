$(document).ready(function(){
	$("button").click(function(){
		var div = $("#div1");		
		div.animate().fadeTo('slow', 0.9);

		$("#div2").fadeTo('slow', 0.5);
		$("#div3").fadeTo('slow', 0.3);
	});
});