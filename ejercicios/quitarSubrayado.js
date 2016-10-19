$(document).ready(function(){
	$("#quitar").click(function(){
		$("#pie :contains('Done by')").css("text-decoration", "none");
	});
});