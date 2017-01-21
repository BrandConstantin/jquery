$(document).ready(function() {	
    //start the game
    $('#decorate').on('click',function(){
		$('#move').attr('disabled', true);
		
		//rand color for the ballon
		var ballonColor =  "rgb(" + Math.floor(Math.random() * 255) + 
			"," + Math.floor(Math.random() * 255) + 
			"," + Math.floor(Math.random() * 255) + ")";
			
    	//positionate the ballon
    	//left position where fall the ball
		var positionLeft = getRand(130, 430);
		
		//top position where fall the ball
		var positionTop;
		 
		if (positionLeft >= 130 && positionLeft < 250){
			positionTop = getRand(150, 600);
		}else if (positionLeft >= 200 && positionLeft < 290){
			positionTop = getRand(150, 600)
		}else if (positionLeft >= 270 && positionLeft < 350){
			positionTop = getRand(150, 600);
		}else if (positionLeft >= 330 && positionLeft <= 430){
			positionTop = getRand(150, 600);
		}
				
		//create the ballon
        var ballon = $('<div></div>').addClass('ballon').css({'background-color':ballonColor , 'left':positionLeft});         
		$('#game').prepend(ballon);
			
		//position where stop fall the ballons		
		ballon.animate({top:positionTop}, 300, function(){
			$('#move').removeAttr('disabled');
		});
		
		var numbBallons = +$("#createBallons").text();
		numbBallons++;				
		$("#createBallons").text(numbBallons);				
	});
	
	//rand function to fall the ballons
	function getRand(min, max) {
		return Math.floor(Math.random() * (max - min + 3)) + min;
	}
		
	//fall the ballons
	function fallBallons(){	
		$('#move').attr('disabled', true);
		
		//number of the ballons who fall
		var numbBallons = $('.ballon').length;

		$('.ballon').each(function(index){	
			//velocity to fall ballons
			$(this).delay(150 * index).animate({top:'700px'}, 300, function(){
				//the time to desapear the ballons when touch the ground
				$(this).fadeOut(2500, function(){
					$(this).remove();
					var numbBallons = +$("#eliminateBallons").text();
					numbBallons++;				
					$("#eliminateBallons").text(numbBallons);					
				});
				
				if (numbBallons == index + 3){
					$('#decorate').removeAttr('disabled');
					$('#move').removeAttr('disabled');
				}		
			});
		});	
	}
	
    //move the tree
	$('#move').on('click',function(){
		$('#decorate').attr('disabled', true);
		
		//shake the tree
		$('#tree').animate({left: '+=45px'}, 45);
		$('#tree').animate({left: '-=45px'}, 45);
		$('#tree').animate({left: '+=45px'}, 45);
		$('#tree').animate({left: '-=45px'}, 45);
		$('#tree').animate({left: '+=45px'}, 45);
		$('#tree').animate({left: '-=45px'}, 45, fallBallons());	
	});
});