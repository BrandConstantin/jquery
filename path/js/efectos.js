$(document).ready(function(){
    // hide
    $('#ocultar').click(function(){
        $('img').hide();
    });

    // show
    $('#mostrar').click(function(){
        $('img').show("slow"); // fast; 2000
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
        $('img').toggle("slow");
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

    // slideUp
    $('#mostrar').click(function(event){
        $('img').slideUp(3000); // fast; 2000
    });

    // slideDown
    $('#ocultar').click(function(event){
        $('img').slideDown("slow"); // fast; 2000
    });

    // slideToggle
    $('#ocultar').click(function(event){
        $('img').slideToggle("slow"); // fast; 2000
    });

    // animate
    $('#animar').click(function(){
        $('#cuadro').animate({with: 800, height: 600}, 3000);
        $('#cuadro').animate({opacity: 0.4}, 2000);
        $('#cuadro').animate({"left": "-=50px"}, "slow");
    });
});