$(document).ready(function(){
	$("#ballena").mousemove(function(b){
		$("#info").text(b.pageX + "==" + b.pageY);
	});
});