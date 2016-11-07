$(document).ready(function() {
    //defino variables
    var vidas;
    var nivel;
    var color = ['lightpink','lightgreen','lightgreen','navy', 'aquamarine', 'lightblue'];
    var colorBola1;
    var idBolita;
    var posLeft;
    var bolasArriba = 0;
    
    //comenzar el juego
    $('#comenzar').on('click',function(){
        //elimino anterior partida
        $('.bolita').remove();
        $('#fin').remove();
        $('#comenzar').attr('disabled','true');
        
        //se reinicializan los valores
        vidas = 3;
        nivel = 1;
        idBolita = 1;
        $('#vidas').text('Vidas Restantes: ' + vidas);
        $('#nivel').text('Nivel Alcanzado: ' + nivel);
        //llamar función crear bolas
        creaBolas();  
    });
    
    //función crear bolas
    function creaBolas(){
        //variable para saber cuantas bolas se deben crear
        var numBolas = nivel;
        
        while(numBolas > 0){
            //crear el color de la bola y la posición inicial
            var colorBolita = color[Math.floor(Math.random() * 6)];
            posLeft = Math.floor(Math.random() * 680);
            if(idBolita != 1){
                do {
                    colorBolita = color[Math.floor(Math.random() * 6)];
                } while(colorBolita == colorBola1);
            }

            //crear bolita y se la añade id, color y la posición inicial
            var bola = $('<div></div>').addClass('bolita').attr('id','bola' + idBolita);
            bola.css({'background-color':colorBolita , 'left':posLeft});
            
            //a la primera bolita se le asigna el valor onClick
            if(idBolita == 1){
                $('#color').text('Disparar Color: ' + colorBolita);
                colorBola1 = colorBolita;
                bola.on('click',function(){
                   $(this).remove(); 
                });
            }
            //se añade la bola al juego, se aumenta el id de las bolas y
            //se decrementa el número de bolas a crear
            $('#juego').prepend(bola);
            idBolita++;
            numBolas--;
            //Se inicia la animación de las bolas
            animacion(bola);
        }
        
    }
    
    //función para animar bolas
    function animacion(bolaRecibida){
        //se crea la posición donde debe acabar la bola
        //inicial la posición era 300 no 680 (esto se hace para enfocar
            //a donde va la bola (se puede seguir una sola dirección))
        posLeft = Math.floor(Math.random() * 680);
        //se inicia la animación
        $(bolaRecibida).animate({top: '0px', left:posLeft}, 5000, function(){
            //se comprueba que la animación de todas las bolas haya terminado.
            bolasArriba++;
            if(bolasArriba == nivel){
                //Se inicializa a 0 para el siguiente nivel.
                bolasArriba = 0;
                //si la primera bola llega arriba se pierde una vida
                if($('#bola1').css('top') == '0px'){
                    vidas--;
                    $('#vidas').text('Vidas Restantes: ' + vidas);
                } 
                //si aún quedan vidas, se aumenta el nivel, 
                //se eliminan las bolas actuales y se llama de nuevo a crear bolas.
                if(vidas > 0){
                    nivel++;
                    $('#nivel').text('Nivel Alcanzado: ' + nivel);
                    //se recorren todas las bolas, se les da una animación 
                    //y luego se eliminan.
                    $('#juego div').each(function(){
                        $(this).animate({opacity:0}, 'slow', function(){
                            $(this).remove();
                        });
                    });
                    //se pone el id de las bolas a 1 y se llama de nuevo a crearBolas()
                    idBolita = 1;
                    creaBolas();   
                } else {
                    //si no quedan vidas acaba el juego.
                    $('#comenzar').removeAttr('disabled');
                    $('#juego').prepend($('<div>GAME OVER</div>').attr('id','fin'));
                }
            }
        });
        
    }
});