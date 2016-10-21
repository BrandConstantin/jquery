$(document).ready(function(){
	$("#listado tr:odd td").mouseenter(function(){
		$(this).append("##");
	});
});