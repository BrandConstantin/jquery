$(document).ready(function(){
    $("#div1").click(function(){
        $("#div2").slideUp(8000);
    });

    //parrar durante 4 segundos
    $("#stop").click(function(){
    	$("#div2").stop();
    })
});