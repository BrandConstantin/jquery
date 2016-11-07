$(document).ready(function(){
	//test 1
    $("#btn1").click(function(){
        var txt = "";
        txt += "Tamaño div: " + $("#d1").width() + "</br>";
        txt += "Altura div: " + $("#d1").height();
        $("#d1").html(txt);
    });

    //test 2
    $("#btn2").click(function(){
        var txt = "";
        txt += "Tamaño div: " + $("#d2").width() + "</br>";
        txt += "Altura div: " + $("#d2").height() + "</br>";
        txt += "Outer width del div (margin incluido): " + $("#d2").outerWidth(true) + "</br>";
        txt += "Outer height del div (margin incluido): " + $("#d2").outerHeight(true);
        $("#d2").html(txt);
    });

    //test 3
    $("#btn3").click(function(){
        $("#d3").width(600).height(600);
    });
});