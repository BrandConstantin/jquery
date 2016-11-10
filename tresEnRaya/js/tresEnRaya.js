$(document).ready(function() {
    var idCasilla = 1;
    var jugador = 'circulo';
    //todas las combinaciones para ganar el juego
    var combGanadora = [['#caja1','#caja2','#caja3'],
                        ['#caja1','#caja4','#caja7'],
                        ['#caja1','#caja5','#caja9'],
                        ['#caja2','#caja5','#caja8'],
                        ['#caja3','#caja5','#caja7'],
                        ['#caja3','#caja6','#caja9'],
                        ['#caja4','#caja5','#caja6'],
                        ['#caja7','#caja8','#caja9']];
    //empieza el juego
    $('#jugar').on('click',function(){
        //elimina todas las cajas e inicializa los id
        for(var i = 1; i < 10; i++){
            $('#caja' + i).remove();
        }

        idCasilla = 1;

        $('#tablero').slideDown(2000);
        //se crean las 9 casillas
        for(var i = 0; i < 9; i++){
             var casilla = $('<div></div>')
                            .addClass('casilla')
                            .addClass('vacia')
                            .attr('id','caja' + idCasilla);
                           
            $("#tablero").append(casilla);
            idCasilla++;
        }

        $(this).attr('disabled','true');
        $('#texto').text("Turno Jugador I");
    });
    
    //función para aplicar una clase al pinchar en una casilla
    $('#tablero').on('click',".vacia",function(){
        //cambio la ficha que se debe poner
        if (jugador == "cruz"){
            jugador = 'circulo';
            $('#texto').text("Turno Jugador I");
        } else {
            jugador = 'cruz';
            $('#texto').text("Turno Jugador II");
        }

        //se añade la nueva clase y se elimina la clase vacia
        $(this).addClass(jugador);
        $(this).removeClass('vacia');
        comprobarGanador($(this).attr("id"));
    });
    
    //funcion que comprueba si alguno ha ganado
    function comprobarGanador(idclick){
        //se comprueba el numero de jugador
        var numero = (jugador == 'cruz') ? 1 : 2;
		var arrayfiltro=[];
		console.log(idclick);

		for(var i = 0; i <= 7; i++){
			console.log(combGanadora[i]);

			if (jQuery.inArray("#" + idclick, combGanadora[i]) >= 0){
				console.log(jQuery.inArray("#" + idclick, combGanadora[i]));
				arrayfiltro.push(combGanadora[i]);
			}
        }

		console.log("----------");
		console.log(arrayfiltro);
		
        //se comprueban las distintas combinaciones.
        for(var i = 0; i < arrayfiltro.length; i++){
            //si alguien gana, se muestra
            if($(arrayfiltro[i][0]).hasClass(jugador) && 
               $(arrayfiltro[i][1]).hasClass(jugador) &&
               $(arrayfiltro[i][2]).hasClass(jugador)){
                $('#texto').text("Ganador Jugador " + numero);

                $('.casilla').slideUp(3000, function(){
                    $('#texto').text("Pulse Jugar para para una nueva partida");
                });
                
                $('#jugar').removeAttr('disabled');
            }
        }
    }
});