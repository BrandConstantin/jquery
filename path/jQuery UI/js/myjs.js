$(document).ready(function(){
    // calendario
    //$('#calendario').datepicker();
    //$('#calendario').datepicker("option","showAnim","blind"); // show, sladeOn, fadeIn, blind, bonds, clip, drop, fault, slide
    $('#calendario').datepicker({
        dateFormat: "dd-MM-yy",
        showAnim: "slide"
    });

    // draggable
    //$('#mover').draggable();
    $('#mover').draggable({
        axis: 'y',
        cursor: "move", // crosshair
        revert: true,
        start: function(){
            $('#mover').text('iniciado');
        },
        drag: function(){
            $('#mover').text('moviendo');
        },
        stop: function(){
            $('#mover').text('parado');
        }
    });

    // droppable
    $('#soltar').droppable({
        hoverClass: "hover",
        accept: "#mover", // para acceptar solo este div
        drop: function(event, ui){
            $(this).addClass('soltado').find("p").text('Soltado aquí!');
        }
    });

    // resizable
    $('#resizable').resizable({
        animate: true,
        containment: '#contenedor'
    });

    // selectable
    $('#seleccionar').selectable({
        stop: function(){
            var resultado = $('#resultado').empty();
            $('.ui-selected', this).each(function(){
                var index = $('#seleccionar li').index(this);
                resultado.append('Selecciono ' + (index + 1));
            });
        }
    });

    // accordion
    var iconos = {
        header: "ui-icon-circle-arrow-e",
        activeHeader: "ui-icon-circle-arrow-s"
    };
    $('#acordeon').accordion({
        icons: iconos
    });
});