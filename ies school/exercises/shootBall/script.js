$(document).ready(function(){
	//variable
	var life;
	var level;
	var color = ['lightpink','lightgreen','lightgreen','navy', 'aquamarine', 'lightblue'];
	var ballColor;
	var idBall;
	var positionLeft;
	var ballOnTop = 0;

	//start the game
	$('#start').on('click', function(){
		//delete the another game
		$('.ball').remove();
		$('#end').remove();
		$('#start').attr('disabled', true);

		//initializate the value
		life = 3;
		level = 1;
		idBall = 1;

		$('#life').text('Life: ' + life);
		$('#level').text('Level: ' + level);

		createBall();
	});

	//create the ball
	function createBall(){
		//variable to know haw much ball create
		var numbBall = level;

		while(numbBall > 0){
			//rand the color of the ball 
			//and positionate the ball
			var colorBall = color[Math.floor(Math.random() * 6)];
			positionLeft = Math.floor(Math.random() * 680);

			if(idBall != 1){
				do{
					colorBall = color[Math.floor(Math.random() * 6)];
				}while(colorBall == ballColor);
			}

			//add the id and initial position
			var ball = $('<div></div>').addClass('ball').attr('id', 'ball' + idBall);
			ball.css({'background-color': colorBall, 'left': positionLeft});

			//assign to the first ball the value onclick
			if(idBall == 1){
				$('#color').text('Shoot the color: ' + colorBall);

				ballColor = colorBall;

				ball.on('click', function(){
					$(this).remove();
				});
			}

			//add the ball to the game, increase the id ball and the number ball
			$('#game').prepend(ball);
			idBall++;
			numbBall--;
			animation(ball);
		}
	}

	//function to animate the ball
	function animation(animateBall){
		//position where end fall the ball
		positionLeft = Math.floor(Math.random() * 680);

		$(animateBall).animate({top: '0px', left: positionLeft}, 9000, function(){
			//compruve that all the ball are in the top
			ballOnTop = 0;

			//if the ball is in the top, lose 1 life
			if($('#ballOne').css('top') == '0px'){
				life--;
				$('#life').text('Life: ' + life);
			}

			//if have life, increase the level
			//eliminate all the ball and create
		});
	}
});