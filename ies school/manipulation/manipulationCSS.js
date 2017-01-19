$(document).ready(function() {
	// test1
	$("#btn1").click(function(){
		$("#uno, #dos").addClass("azul");
		$("#dos").addClass("importante");
	});

	// test2
	$("#btn2").click(function(){
		$("h4, p").removeClass("azul importante");
	});

	// test3
	$("#btn3").click(function(){
		$("#p1, #p2, #p3").toggleClass("azul importante");
	});

    // test4
    $("#btn4").click(function(){
        $("p.a1, h4.a2").css("background-color", "yellow");
    });

    // test5
    $("#btn5").click(function(){
        $(".b1, .b2").css({"background-color": "yellow", "font-size": "200%"});
    });
});