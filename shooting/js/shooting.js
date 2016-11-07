var soldadosDisparados = 0;
var disparados = 0;
    
$(document).ready(function() {
    var empezar;

    $("#start").click(function(){
        startJuego();
    });

    function startJuego() {
        //mostrar los mensajes del principio de juego
        $("#mensaje").fadeOut('slow');
        $(".disparar").fadeOut('slow');
        $("#soldadosDisparados").html("0 Soldados ");
        $("#disparados").html("0 Enemigos");

        //inicializar variables
        soldadosDisparados = 0;
        disparados = 0;

        $("#start").css("color", "#000");
        $("#start").unbind("click");

        empezar = setInterval(scramble, 1300);
        setTimeout(function() {
            clearInterval(empezar);
            $("#start").css("color", "#444");
            $("#start").bind("click", startJuego);

            // mostrar el mensaje final
            var posContened = $('#contenedor').offset();
            $("#mensaje").animate({
                top: posContened.top,
                left: posContened.left
            }, 'fast', function() {
                setTimeout(function() {
                    $("#mensaje").fadeIn('slow');
                    $(".disparar").fadeIn('slow');
                }, 500);
            });
        }, 35000);
    }

    //función disparar enemigos
    $(".disparar").click(function() {
        if ($(this).hasClass("soldado")) {
            //'bounce' es efecto de mover el contenedor
            //cuando se le dispara
            $(this).effect("bounce", {
                times: 2,
                direction: 'left'
            }, 300);

            $(this).slideUp("fast");
            soldadosDisparados++;
            $("#soldadosDisparados").html(soldadosDisparados + " Soldados");
        } else {
            $(this).effect("explode", 500);
            disparados++;
            $("#disparados").html(disparados + " Enemigos");
        }
    });
});

function randomFromTo(from, to){
    return Math.floor(Math.random() * (to - from + 1) + from);
}

function scramble() {
    var children = $('#contenedor').children();
    var randomId = randomFromTo(1, children.length);

    moveRandom('dispara' + randomId);
    setTimeout(function(){
        $("#dispara" + randomId).slideDown('fast');            
    }, 500);
    
    setTimeout(function() {
        $("#dispara" + randomId).slideUp('fast');
    }, 1500);
}

function moveRandom(id) {
    //obtener la posición del contenedor y su tamaño
    var contenedPosici = $('#contenedor').offset();
    var contenedHeight = $('#contenedor').height();
    var contenedWidth = $('#contenedor').width();

    // obtener el padding del contenedor
    var contenedPadd = parseInt($('#contenedor').css('padding-top').replace('px', ''));

    // obtener el tamaño del contenedor
    var boxHeight = $('#' + id).height();
    var boxWidth = $('#' + id).width();

    // posición máxima
    maxY = contenedPosici.top + contenedHeight - boxHeight - contenedPadd;
    maxX = contenedPosici.left + contenedWidth - boxWidth - contenedPadd;

    // posición mínima
    minY = contenedPosici.top + contenedPadd;
    minX = contenedPosici.left + contenedPadd;

    // nueva posición
    newY = randomFromTo(minY, maxY);
    newX = randomFromTo(minX, maxX);

    $('#' + id).animate({top: newY,left: newX
        }, 'slow', function() {
    });
}