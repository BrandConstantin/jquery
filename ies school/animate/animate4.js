$(document).ready(function(){
	$("button").click(function(){
		var div = $("#div1");
		
		div.animate({height: '300px', opacity: '0.5'}, 'slow');
		div.animate({width: '800px', opacity: '0.9'}, '3000');
		div.animate({height: '500px', opacity: '0.2'}, 'fast');
		div.animate({width: '30px', opacity: '0.9'}, '12000');
	});
});