$(document).ready(function() {
    //Se crean las variables globales
    var idCasilla = 1;
    var jugador = 'rojo';
    var ocas = 0;
    var pozos = 0;
    var posicionCasillas = [-45];
    //Funcion del boton comenzar.
    $('#botonComenzar').on('click',function(){
        
        //Elimina todas las cajas e inicializa los id
        for(var i = 1; i < 10; i++){
            $('#caja' + i).remove();
        }
        idCasilla = 1;
        $('#tablero').slideDown(2000);
        //Se crean las 16 casillas
        for(var i = 0; i < 16; i++){
             var casilla = $('<div></div>')
                            .addClass('casilla')
                            .attr('id','caja' + idCasilla)
                            .text(idCasilla);
            //Guardo en un array la posicion de cada casilla.
            posicionCasillas[idCasilla] = posicionCasillas[idCasilla - 1] + 52;
            console.log('leftCasilla' + idCasilla + ': ' + posicionCasillas[idCasilla]);
            //Compruebo si va a ser normal oca o pozo
            var tipoCasilla = Math.floor(Math.random() * 3);
            if(tipoCasilla == 1 && ocas < 3){ casilla.addClass('oca'); ocas++;}
            if(tipoCasilla == 2 && pozos < 3){ casilla.addClass('pozo'); pozos++;}
            if(i == 15){ casilla.addClass('fin'); }           
            $("#tablero").append(casilla);
            idCasilla++;
        }
        $(this).attr('disabled','true');
        $('#texto').text("Turno del Jugador " + jugador);
    });
    
    //Función para tirar un dado
    $('#botonDado').on('click',function(){
        var dado = Math.floor(Math.random() * 6) + 1;
        $('#dado').text('Tirada: ' + dado);
        
        //Compruebo la posición de la ficha
        //var leftFicha = $('#'+ jugador).position();
        //console.log(leftFicha.left);
        var avanza = 52 * dado;//7 primera 787 final
        $('#'+ jugador).animate({left:'+=' + avanza + 'px'},2000,function(){
            var leftFicha = $('#'+ jugador).position();
            console.log(leftFicha.left);
            for(var i = 1;i <= 16;i++){
                if(posicionCasillas[i] == leftFicha.left){
                    if($('#caja' + i).hasClass('oca')){
                        console.log("De oca a oca y tiro por que me toca.");
                    }
                    if($('#caja' + i).hasClass('pozo')){
                        console.log("Pozo, vuelves al principio.");
                    }
                }
            }
            //Cambio la ficha que se debe mover
            if (jugador == "rojo"){
                jugador = 'verde';
            } else {
                jugador = 'rojo';
            }
            $('#texto').text("Turno del Jugador " + jugador);
        });
    });
    
    //Funcion que comprueba si alguno ha ganado
    function comprobarGanador(){
        //Se comprueba el numero de jugador
        var numero = (jugador == 'cruz') ? 1 : 2;
        //Se comprueban las distintas combinaciones.
        for(var i = 0; i <= 7; i++){
            //Si alguien gana, se muestra
            if($(combGanadora[i][0]).hasClass(jugador) && 
               $(combGanadora[i][1]).hasClass(jugador) &&
               $(combGanadora[i][2]).hasClass(jugador)){
                $('#texto').text("Gana Jugador " + numero);
                $('.casilla').slideUp(3000,function(){
                    $('#texto').text("Pulse Comenzar para jugar otra partida");
                });
                $('#botonComenzar').removeAttr('disabled');
            }
        }
    }
});