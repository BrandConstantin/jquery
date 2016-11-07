$(document).ready(function(){
	//test 1
    $("#btn1").click(function(){
        $("ol").append("<li><b>Item</b></li>");
    });

    //test 2
    $("#btn2").click(function(){
        $("ul").prepend("<li><b>Item</b></li>");
    });

    //test 3, 4
    $("#btn3").click(function(){
        $("img").before("<img src=\"img/verde.jpg\" width=\"20px\" height=\"20px;\">");
    });

    $("#btn4").click(function(){
        $("img").after("<img src=\"img/azul.png\" width=\"20px\" height=\"20px;\">");
    });

    //test 6
    $("#btn6").click(function(){
        $("#eliminar").remove();
    });

    //test 7
    $("btn7").click(function(){
        $("#vaciar").empty();
    });

    //test 8
    $("#btn8").click(function(){
        $("p").remove(".elimina");
    });

    //test 9
    $("#btn9").click(function(){
        $("p, h3").remove(".elimina1, .elimina2");
    });
});

    //test 5
    function despues() {
	    var txt1 = "<b>Te </b>";                   // crear elemento con html
	    var txt2 = $("<i></i>").text("amo ");    // crear elemento con jQuery
	    var txt3 = document.createElement("b");   // crear elemento con DOM
	    txt3.innerHTML = " mi amor!<br>";
	    $("#amor").after(txt1, txt2, txt3);      // insertar elemento despues de img
	}