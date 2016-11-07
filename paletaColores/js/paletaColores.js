$(document).ready(function() {
    //rellenar el contenedor de cuadritos
    var capa = "<div></div>";

    for (i = 1; i < 40; i++){
        $("#contenedor").append(capa);
    }

    /*
    //les añade números
    for (i = 1; i < $("#contenedor div").length; i++){
        $("#contenedor div").eq(i).text(i + 1);
    }
    */

    //coge todos los div que estén dentro de algún div cuyo id comience por paleta y que esté dentro de #paletas
    $('#paletas div[id ^= paleta]').on('click', 'div', escribeColor);
    
    //a los div de cada una de las paletas le aplico una función diferente para igualar su clase a una variable
    $('#paletaUno').on('click', 'div', cogerColor1);
    $('#paletaDos').on('click', 'div', cogerColor2);
    
    //cuando hago mouseenter en los div del #contenedor, llamo a cambiaColor1
    $('#contenedor').on('mouseenter', 'div', cambiaColor1);
    
    //al pulsar en el botón Intercambiar, llamo a intercambia
    $('#intercambiar').on('click', intercambia);
    
    //al pulsar en el botón Rellenar, llamo a rellenar
    $('#rellenar').on('click', rellenar);
    
    //al pulsar en el botón Limpiar, llamo a limpiar
    $('#limpiar').on('click', limpiar);
    
    //esta función sirve para escribir el color seleccionado en su label correspondiente
    function escribeColor() {
        var label = $(this).parent().find('label');
        var bgcolor = $(this).css('background-color');

        label.text(bgcolor);
        label.css('border-bottom', '2px solid ' + bgcolor);
    }

    var color1;
    var color2;

    function cogerColor1() {
        color1 = $(this).attr('class');
    }

    function cogerColor2() {
        color2 = $(this).attr('class');
    }

    //rellenar de color de la paleta 1
    function cambiaColor1() {
        $(this).removeClass().addClass(color1);
        actualizaNum();
    }

    //intercambia de color paleta 1 con paleta 2
    function intercambia() {
        $('#contenedor').find('.' + color1).removeClass(color1).addClass(color2);
        actualizaNum();
    }

    //rellenar con el color de la paleta 2
    function rellenar() {
        $('#contenedor div').each(function() {
            if ($(this).hasClass('#nada')) {
                $(this).removeClass('#nada').addClass(color2);
            }
        });

        actualizaNum();
    }


    //recorro todos los div de #contenedor, le quito todas las clases que tenga y le añado solo la clase 'nada'
    function limpiar() {
        $('#contenedor div').each(function() {
            $(this).removeClass().addClass('#nada');
        });

        actualizaNum();
    }

    //almacena el número de veces que se ha utilizado un color
    function actualizaNum() {
        $('#paletaUno .rojo').text($('#contenedor div.rojo').length);
        $('#paletaUno .amarilio').text($('#contenedor div.amarilio').length);
        $('#paletaUno .verde').text($('#contenedor div.verde').length);
        $('#paletaUno .azul').text($('#contenedor div.azul').length);
        $('#paletaUno .negro').text($('#contenedor div.negro').length);
        $('#paletaUno .blanco').text($('#contenedor div.blanco').length);
    }
});
