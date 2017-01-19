$(document).ready(function(){
	//hide the button tractor and btn boat
	$("img[src=\"img/boatbtn.png\"]").hide();
	//$("img[src=\"img/tractorbtn.png\"]").hide();
	$("#tractorbtn").hide();

	//change the color of the sky
	$("input[type=color]").change(function(){
		var skyColor = $('input[type=color]').val();
		$("#sky").css("background-color", skyColor);
	});

	//generate the clouds
	var numbClouds = 0;
	$("img[src=\"img/cloudbtn.png\"]").click(function(){
		var top = Math.floor(Math.random() * 110) + 10;
		var left = Math.floor(Math.random() * 1400) + 10;

		$("#sky").append("<div class=\"generateClouds\" id=\"cloud" + numbClouds + "\"></div>");
		$('#cloud' + numbClouds).css("top", top);
		$('#cloud' + numbClouds).css("left", left);

		var countCloud = $(".generateClouds").length;
		$('#countCloud').text(countCloud);
		numbClouds++;
	});

	//generate the wind
	var windSuffle = false;
	$('#windbtn').click(function(){
		if(!windSuffle){
			$(".generateClouds").stop();
			$(".wind").remove();
			windSuffle = true;
		}else{
			$('#sky').append("<div class=\"wind\"></div>");
			$(".generateClouds").each(function(){
				$(this).animate({left: "90%"}, 15000);
			});

			windSuffle = true;
		}
	});

	//generate the sun
	var sunApear = true;

	$('#sunbtn').click(function(){
		if(!sunApear){
			$(".generateClouds").stop();
			$(".sun").remove();
			windSuffle = true;
		}else{
			$("#sky").append("<div class=\"sun\"></div>");
			$('.generateClouds').each(function(){
				$(this).fadeOut(5000, function(){
					$(this).remove();
					var countCloud = $('.generateClouds').length;
					$('#countCloud').text(countCloud);
				});
			});

			sunApear = true;
		}
	});

	//change the earth
});