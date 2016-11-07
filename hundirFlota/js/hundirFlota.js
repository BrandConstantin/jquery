$(document).ready(function() {
    //se inicializan las variables
    var tablero = [];
    var fila = ['A','B','C','D','E'];
    var aciertos;
    var fallos;
    var columna;
    var aguaYBarcos;
    var barco;
    
    //Funcion para crear barcos
    function crearBarcos(){
        //se llama a la funcion inicia variables
        iniciaVariables();
        pintaCuadricula();

        //Se asignan las casillas de gota
        for(var i = 0; i < 25; i++){ 
            tablero[i] = "gota"; 
        }

        //se asignan los barcos cada uno en una cuadricula
        do{
            var posicion = Math.floor(Math.random() * 25);
            if(tablero[posicion] == "gota") { 
                tablero[posicion] = "barco"; 
                barco--; 
            }
        } while(barco > 0);

        //se pinta el tablero
        for(var i = 0; i < 36; i++){
            var casilla = $("<div></div>").addClass('casilla');
            if(i > 0 && i < 6){ 
                //se rellenan la fila
                casilla.text(fila[i - 1]);
            }else if((i % 6 == 0) && (i != 0)) { 
                //se rellena la columna
                casilla.text(i - i + columna);
                columna++;
            } else if(i != 0) { 
                //se rellenan el gota y los barcos
                casilla.addClass(tablero[aguaYBarcos]);
                aguaYBarcos++;
                //Se asigna el evento click
                casilla.on("click",function(){
                    compruebaCasilla(this);
                });
            }
            //Se añaden las casillas al tablero
            $("#tablero").append(casilla);
        }
    }
        
    //funcion para comprobar si la casilla es barco o gota
    function compruebaCasilla(casilla) {
        $(casilla).animate({opacity:'1'}, 1000);
        if($(casilla).hasClass("barco")){
            aciertos++;
            $("#aciertos").html("Aciertos: " + aciertos);
        } else {
            fallos++;
            $("#fallos").html("Fallos: " + fallos);
        }
        if(aciertos == 5){
            $("#tablero").find("p").html("Has Ganado!!!").css("display","block");
        }
        if(fallos == 17){
            $("#tablero").find("p").html("Juego Finalizado!!!").css("display","block");
        }
    }
    
    //funcion para reiniciar las variables
    function iniciaVariables(){
        //se borra lo que habia en el tablero
        $("#tablero").fadeOut(1000, function(){
            $("#tablero").fadeIn(1000);
        });

        $("#tablero").find("div").remove();

        //Se reinician las variables
        aciertos = 0;
        $("#aciertos").html("Aciertos: " + aciertos);
        fallos = 0;
        $("#fallos").html("Fallos: " + fallos);
        columna = 1;
        aguaYBarcos = 0;
        barco = 5;

        $("#tablero").find("p").css("display","none");
    }
    
    //pintar la cuadricula
    function pintaCuadricula(){
        for(var i = 1; i <= 5; i++){
            //Pinta las lineas horizontales
            var lineaH = $("<span></span>").addClass("lineaH").css('top', (85 * i) + (i - 1) + 'px');
            $("#tablero").append(lineaH);
            //Pinta las lineas verticales
            var lineaV = $("<span></span>").addClass("lineaV").css('left', (85 * i) + (i - 1) + 'px');
            $("#tablero").append(lineaV);
        }
    }
    
    //se llama a la funcion crear barcos para comenzar la partida.
    crearBarcos();
    
    //funcion del boton comenzar
    $('#botonComenzar').on('click', function(){
        //se llama a la funcion crear barcos
        crearBarcos();
    });
    
    //funcion del boton siguiente.
    $('#verBarcos').on('click', function(){
        $(".barco").each(function(){
            if($(this).css('opacity') == 0){
                $(this).animate({opacity:'1'}, 500, function(){
                    $(this).animate({opacity:'0'}, 200);
                });
            } 
        });
    });
});