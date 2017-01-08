$(document).ready(function() {
	var x = 0;

	//hide btn tractor y btn boat
	$("img[src=\"./img/boatbtn.png\"]").hide();
	$("img[src=\"./img/tractorbtn.png\"]").hide();

    //change the color of the sky
	$("input[type=color]").change(function(){
		var skyColor = $("input[type=color]").val();
		$("#sky").css("background-color", skyColor);
	});

	//add the clouds
	$("img[src=\"./img/cloudbtn.png\"]").click(function(){
		var top = Math.floor(Math.random() * 200) + 5;
		var left = Math.floor(Math.random() * 800) + 5;

		$("#sky").append("<div class=\"generateClouds\" id=\"cloud" + x + "\"></div>");		
		$("#cloud" + x).css("left", left);
		$("#cloud" + x).css("top", top);

		var countCloud = $(".generateClouds").length;
		$("#countCloud").text(countCloud);
		x++;
	});

	//add the wind
	var windSuffle = true;
	$("img[src=\"./img/windbtn.png\"]").click(function(){
		if(windSuffle){
			$("#sky").append("<div class=\"wind\"></div>");
			$(".generateClouds").each(function() {
				$(this).animate({left: "650px"}, 7200);
			});

			windSuffle = false;
		} else {
			$(".generateClouds").stop();
			$(".wind").remove();
			windSuffle = true;
		}		
	});

	//add the sun
	var sunApear = true;
	$("img[src=\"./img/sunbtn.png\"]").click(function(){
		if(sunApear){
			$("#sky").append("<div class=\"sun\"></div>");
			$(".generateClouds").each(function() {
				$(this).fadeOut(3200, function(){ $(this).remove();
				   	var countCloud = $(".generateClouds").length;
					$("#countCloud").text(countCloud);
				});
			});

			sunApear = false;
		} else {
			$(".generateClouds").stop();
			$(".sun").remove();
			sunApear = true;
		}		
	});

	//change the earth
	$("img[src=\"./img/seabtn.png\"]").click(function(){
		//delete the tractors
		$(".generateTractors").stop(true);
		$(".generateTractors").each(function(){
			$(this).fadeOut(500, function(){
				$(this).remove();
			});
		});

		$("#countTransport").text(0);
		$("img[src=\"./img/tractorbtn.png\"]").hide();
		$("#earth").css("background-image", 'url(./img/sea.png');
		$("img[src=\"./img/boatbtn.png\"]").show();
	});

	$("img[src=\"./img/fieldbtn.png\"]").click(function(){
		//delete the boats
		$(".generateBoats").stop(true);
		$(".generateBoats").each(function(){
			$(this).fadeOut(500, function(){
				$(this).remove();
			});
		});

		$("#countTransport").text(0);
		$("img[src=\"./img/tractorbtn.png\"]").show();
		$("#earth").css("background-image", 'url(./img/field.jpg');
		$("img[src=\"./img/boatbtn.png\"]").hide();
	});

	//add boats and tractors
	var i = 0;
	$("img[src=\"./img/boatbtn.png\"]").click(function(){		
		$("#earth").append("<div class=\"generateBoats\" id=\"bote" + i +"\"></div>");
		var top = Math.floor(Math.random() * 400) + 250;
		var left = Math.floor(Math.random() * 800) + 5;
		var velocity = Math.floor(Math.random() * 7000) + 4000;

		$("#bote" + i).css("left", left);
		$("#bote" + i).css("top", top);

		move("#bote" + i, velocity);

		var countTransport = $(".generateBoats").length;
		$("#countTransport").text(countTransport);
		i++;
	});

	$("img[src=\"./img/tractorbtn.png\"]").click(function(){		
		$("#earth").append("<div class=\"generateTractors\" id=\"tractor" + i +"\"></div>");
		var top = Math.floor(Math.random() * 400) + 250;
		var left = Math.floor(Math.random() * 800) + 5;
		var velocity = Math.floor(Math.random() * 7000) + 4000;

		$("#tractor" + i).css("left", left);
		$("#tractor" + i).css("top", top);

		move("#tractor" + i, velocity);

		var countTransport = $(".generateTractors").length;
		$("#countTransport").text(countTransport);
		i++;
	});

	function move(id, vel){
		$(id).animate({left: "670px"},vel,function(){ 												
			if($(id).css("left")<="670px"){
				$(id).animate({
					left: "10px"
				}, vel);
			}

			move(id, vel);
		});
	}	
});