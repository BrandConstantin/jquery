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
});