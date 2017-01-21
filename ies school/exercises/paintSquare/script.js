$(document).ready(function(){
	//create the divs
	var div = "<div></div>";

	for (var i = 0; i < 520; i++) {
		$('#container').append(div);
	};

	//add number to the square
	for (var i = 0; i < $('#container div').length; i++) {
		$('#container div').eq(i).text(i + 1);
	};

	//paint
	paint();

	function paint(){
		$('#container div').addClass("blue");
		$('#container div').removeClass("green");
	}

	//paint the first square
	$('#first').on('click', function(){
		paint();

		$('#container div').first().removeClass("blue");
		$('#container div').first().addClass("green");
	});

	//paint the last square
	$('#last').on('click', function(){
		paint();

		$('#container div').last().removeClass("blue");
		$('#container div').last().addClass("green");
	});

	//paint the odd square
	$('#odd').on('click', function(){
		paint();

		$('#container div:odd').removeClass("blue");
		$('#container div:odd').addClass("green");
	});

	//paint the even square
	$('#even').on('click', function(){
		paint();

		$('#container div:even').removeClass("blue");
		$('#container div:even').addClass("green");
	});

	//paint all the square
	$('#all').on('click', function(){
		$('#container div').removeClass("blue");
		$('#container div').addClass("green");
	});

	//paint noOne put the square like on the start
	$('#noOne').on('click', function(){
		paint();
	});

	//paint the square where the number on input
	//is iqual to the value
	$('#selection').on('click', function(){
		paint();

		var number = $('#number').val() - 1;

		$('#container div').eq(number).removeClass("blue");
		$('#container div').eq(number).addClass("green");
	});
});