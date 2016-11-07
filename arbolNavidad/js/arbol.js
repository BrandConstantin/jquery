$(document).ready(function() {
    //mover arbol
	$('#mover').on('click',function(){
		$('#adornar').attr('disabled','true');
		
		//sacudir el arbol de bolitas
		$('#arbol').animate({left: '+=45px'}, 45);
		$('#arbol').animate({left: '-=45px'}, 45);
		$('#arbol').animate({left: '+=45px'}, 45);
		$('#arbol').animate({left: '-=45px'}, 45);
		$('#arbol').animate({left: '+=45px'}, 45);
		$('#arbol').animate({left: '-=45px'}, 45, caidaBolas);	
	});
	
	//caida bolas
	function caidaBolas(){	
		$('#mover').attr('disabled','true');
	
		var numBolas = $('.bolita').length;

		$('.bolita').each(function(index){	
			//la velocidad de caida de las bolas una vez sacudido el arbol
			//700px es hasta donde caen las bolas
			$(this).delay(150 * index).animate({top:'700px'}, 300, function(){
				//el tiempo en desaparecer las bolitas una vez caidas
				$(this).fadeOut(2500, function(){
					$(this).remove();
					var numBolas = +$("#eliminadas").text();
					numBolas++;				
					$("#eliminadas").text(numBolas);					
				});
				
				if (numBolas == index + 3){
					$('#adornar').removeAttr('disabled');
					$('#mover').removeAttr('disabled');
				}		
			});
		});	
	}

	//función aleatoria de donde caeran las bolitas
	function getRand(min, max) {
		return Math.floor(Math.random() * (max - min + 3)) + min;
	}

    //función para comenzar el juego
    $('#adornar').on('click',function(){
		$('#mover').attr('disabled','true');
		
		var colorBolita =  "rgb(" + Math.floor(Math.random() * 255) + 
			"," + Math.floor(Math.random() * 255) + 
			"," + Math.floor(Math.random() * 255) + ")";
    	//posición left donde caen las bolitas
    	//posición de left:130 a 430
		posLeft = getRand(130, 430);
		var posTop;
				
		//crear bolita añadirle id, posición, clase
        var bola = $('<div></div>').addClass('bolita').css({'background-color':colorBolita , 'left':posLeft});         
		$('#juego').prepend(bola);
		 
		//sitio donde caen las bolitas
		//left de 130 a 430
		//top de 
		if (posLeft >= 130 && posLeft < 250){
			posTop = getRand(150, 600);
		}else if (posLeft >= 200 && posLeft < 290){
			posTop = getRand(150, 600)
		}else if (posLeft >= 270 && posLeft < 350){
			posTop = getRand(150, 600);
		}else if (posLeft >= 330 && posLeft <= 430){
			posTop=getRand(150, 600);
		}
			
		//posición top a partir de donde se quedan las bolas en arbol
		//aqui en 300			
		bola.animate({top:posTop}, 300, function(){
			$('#mover').removeAttr('disabled');
		});
		
		var numBolas = +$("#creadas").text();
		numBolas++;				
		$("#creadas").text(numBolas);				
	});
});