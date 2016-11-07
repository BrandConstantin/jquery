$(document).ready(function(){
	//Test 1
    $("#test1Boton1").click(function(){
        alert("Texto: " + $("#test1").text());
    });
    $("#test1Boton2").click(function(){
        alert("HTML: " + $("#test1").html());
    });

    //Test 2
    $("#test2Boton1").click(function(){
        alert("Valor: " + $("#test2").val());
    });

    //Test 3
    $("#test3Boton1").click(function(){
        alert($("#jQuery-gratis").attr("href"));
    });

    //Test 4, 5, 6
    $("#test4Boton1").click(function(){
        $("#test4").text("Parágrafo 1 cambiado");
    });
    $("#test5Boton2").click(function(){
        $("#test5").html("<b>Parágrafo 2 cambiado!</b>");
    });
    $("#test6Boton3").click(function(){
        $("#test6").val("COSTY");
    });

    //Test 7, 8
    $("#test7btn1").click(function(){
        $("#test7").text(function(i, origText){
            return "Texto antiguo: " + origText + " Nuevo texto: Hola alumno! (index: " + i + ")";
        });
    });

    $("#test8btn1").click(function(){
        $("#test8").html(function(i, origText){
            return "Antiguo html: " + origText + " Nuevo html: <b>Hola alumno!</b> (index: " + i + ")";
        });
    });

    //Test 9
    $("button").click(function(){
        $("#test9").attr("href", "http://www.google.com");
    });
});