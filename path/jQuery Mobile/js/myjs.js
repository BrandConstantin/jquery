$(document).bind('mobileinit', function(){

    $.mobile.ajaxEnabled = "false"; // desactivar ajax

    $('pagina').bind('tab', function(){ }); // pareceido a click, más rápido

    $('pagina').bind('tabhold', function(){ }); // cuando presionamos durante un tiempo un elemento

    $('pagina').bind('swipeleft', function(){ }); // cuando deslizamos con el dedo de izquierda a derecha

    $(document).bind('orientationchange', function(){ }); // capturar orientación página

    $(document).bind('scrollstart', function(){ }); // cuando se inicia scroll
    $(document).bind('scrollstop', function(){ }); // cuando se para el scroll

    // PARTE DOS

    setTimeout(function(){
        $.mobile.changePage('#pagina2', {
            transition: 'slideup'
        });
    }, 2000);
});

