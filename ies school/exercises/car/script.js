$(document).ready(function(){
	//move the clouds
    moveClouds();
    changeTraffic();
    moveHuman();
    changeHuman();

    function moveClouds(){
    	var intervalMove = setInterval(function(){
    		$("#clouds").animate({backgroundPosition: '-=2000px'}, 50000);	
    	}, 3);       
    };

    //function to replace the trafficlight
    var green = true;
    function changeTraffic(){
    	var intervalTraffic = setInterval(function(){
    		if(green){
    			$('#trafficLight').css('background', 'url(img/rojo.png) no-repeat');

    			green = false;
    		}else{
				$('#trafficLight').css('background', 'url(img/verde.png) no-repeat');    			

				green = true;
    		}
    	}, 3000);
    }

    var positionCar = $('#car').position().left;
    var positionTrafficLight = $('#trafficLight').position().left;

    //function to move the car
    $("body").keydown(function(e) {
        switch((e.keyCode ? e.keyCode : e.which)){
            //case 13: // Enter
            //case 27: // Esc
            case 32: // Space
            //Jump
            $("#car").animate({top: "-=150"}, 100);
            $("#car").animate({top: "+=150"}, 100);     
            break;
            case 37:   // Left Arrow
                //$("#car").animate({left: "1"}, 1);
                positionCar = $('#car').position().left;

                if(!green){
                	if(positionCar - positionTrafficLight > 780 ||
                		positionCar - positionTrafficLight < -10){
            			$('#car').animate({left: '-=10px'}, 1);
            		}
        		}else{
        			$('#car').animate({left: '-=10px'}, 1);
        		}
            break;
            case 38: // Up Arrow
            $("#car").animate({top: "-40"}, 1);
            break;
            case 39:   // Right Arrow
                //$("#car").animate({left: "+200"}, 10);
                positionCar = $('#car').position().left;

                if(!green){
                	if(positionCar - positionTrafficLight > 480 ||
                		positionCar - positionTrafficLight < -10){
            			$('#car').animate({left: '+=10px'}, 1);
            		}
        		}else{
        			$('#car').animate({left: '+=10px'}, 1);
        		}
            break;
            case 40: // Down Arrow
                $("#car").animate({top: "+80"}, 1);
            break;
        }
    });

	//function to move the human
	function moveHuman(){
		changeHuman();

		$('#human').animate({left: '-=2000px'}, 12000, move);
	}

	//function move
	function move(){
		$('#human').css("left", '+=2000px');
		moveHuman();
	}

	//function to change human
	var old = true;
	function changeHuman(){
		if(old){
			$('#human').css('background-image', 'url("img/humano1.png"');

			old = false;
		}else{
			$('#human').css('background-image', 'url("img/humano2.png"');

			old = true;
		}
	}
});