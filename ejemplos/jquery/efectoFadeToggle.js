$(document).ready(function(){
    $("button").click(function(){
        $("#d1").fadeToggle();
        $("#d2").fadeToggle("slow");
        $("#d3").fadeToggle(3000);
    });
});