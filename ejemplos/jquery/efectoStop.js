$(document).ready(function(){
    $("#d1").click(function(){
        $("#d2").slideDown(5000);
    });
    $("#stop").click(function(){
        $("#d2").stop();
    });
});