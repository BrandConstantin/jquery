$(document).ready(function(){
    $("div p").first().css("background-color", "lightblue");
    $("div p").last().css("background-color", "lightgreen");
    $("p").eq(1).css("background-color", "lightgrey");
    $("p").filter(".diferente").css("font-size", "12px");
    $("h1").not(".diferente").css("font-size", "50px");
});