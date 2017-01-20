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

				//if the wind suffle disapear the sun
				$('.sun').remove();
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

				//if the sun apear, disapear the wind
				$('.wind').remove();
			});

			sunApear = true;
		}
	});

	//change the earth
	//for the sea
	$("img[src=\"img/seabtn.png\"]").click(function(){
		$('#countTransport').text(0);
		$('#tractorbtn').hide();
		$('#earth').css("background-image", "url(img/sea.png)");
		$('#earth').css("background-size", "100% 100%");
		//$('#earth').css("opacity", "0.4");
		$('#boatbtn').show();

		//delete the tractors when apear the boats
		$('.generateTractors').stop(true);
		$('.generateTractors').each(function(){
			$(this).fadeOut(500, function(){
				$(this).remove();
			});
		});
	});

	//generate the boats
	var numbBoats = 0;
	$('#boatbtn').click(function(){
		var top = Math.floor(Math.random() * 160) + 220;
		var left = Math.floor(Math.random() * 1400) + 10;
		var velocity = Math.floor(Math.random() * 25000) + 6000;

		$('#earth').append("<div class=\"generateBoats\" id=\"boat" + numbBoats +"\"></div>");
		$('#boat' + numbBoats).css("top", top);
		$('#boat' + numbBoats).css("left", left);

		move('#boat' + numbBoats, velocity);

		var countTransport = $(".generateBoats").length;
		$('#countTransport').text(countTransport);
		numbBoats++;
	});

	//for the field
	$("#fieldbtn").click(function(){
		$('#countTransport').text(0);
		$('#boatbtn').hide();
		$('#earth').css("background-image", "url(img/field.jpg)");
		$('#earth').css("background-size", "100% 100%");
		//$('#earth').css("opacity", "0.4");
		$('#tractorbtn').show();

		//delete the boats when apear the tractors
		$('.generateBoats').stop(true);
		$('.generateBoats').each(function(){
			$(this).fadeOut(500, function(){
				$(this).remove();
			});
		});
	});

	//generate the tractors
	var numbTractor = 0;
	$('#tractorbtn').click(function(){
		var top = Math.floor(Math.random() * 160) + 220;
		var left = Math.floor(Math.random() * 1400) + 10;
		var velocity = Math.floor(Math.random() * 25000) + 6000;

		$('#earth').append("<div class=\"generateTractors\" id=\"tractor" + numbTractor +"\"></div>");
		$('#tractor' + numbTractor).css("top", top);
		$('#tractor' + numbTractor).css("left", left);

		move('#tractor' + numbTractor, velocity);

		var countTransport = $(".generateTractors").length;
		$('#countTransport').text(countTransport);
		numbTractor++;
	});

	//function move boats and tractors
	function move(id, velocity){
		$(id).animate({left: '1300px'}, velocity, function(){
			if($(id).css('left') < 1300){
				$(id).animate({left: '5px'}, velocity);
			}else{
				$(id).animate({left: '-5px'}, velocity);
			}

			move(id, velocity);
		});
	}
});