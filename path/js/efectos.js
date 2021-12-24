$(document).ready(function(){
    // hide
    $('#ocultar').click(function(){
        $('img').hide();
    });

    // show
    $('#mostrar').click(function(){
        $('img').show('slow'); // fast; 2000
    });

    // fadeIn
    $('#ocultar').click(function(){
        $('img').fadeIn();
    });

    // fadeOut
    $('#mostrar').click(function(){
        $('img').fadeOut(3000, mensaje); // fast; 2000
    });

    function mensaje(){
        console.log("imagen ocultada");
    }

    // toggle
    $('#ocultar').click(function(event){
        $('img').toggle('slow');
    });

    // fadeTo
    $('#ocultar').click(function(event){
        $('img').fadeTo("slow", 0.5); // opacidad de 0 a 1, pudiendo usar decimales
    });

    // ejemplo de hover cuando se pasa ratón por encima foto
    $('#mostrar').hover(function(){
        $('#img').fadeTo("slow", 0.5);
    }, function(){
        $('#img').fadeTo("slow", 0.5);
    });
});