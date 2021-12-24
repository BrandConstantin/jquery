$(docuemnt).ready(function(){
    // get todo el html en un elemento
    $('#texto').html();

    // set en elemento html
    $('#texto').html('Texto seteado');

    // setear
    $('#texto').addClass('rojo'); // clase creada previamente en el fichero css

    // remover
    $('p:last').removeClass('rojo');

    // añade después
    $('#texto').append(' añadido después');

    // añade antes
    $('#texto').prepend('Añadido antes ');

    // añade después de un elemento seleccionado (añade salto de línea)
    $('#texto').after('Texto después');

    // añade antes de un elemento seleccionado (añade salto de línea)
    $('#texto').before('Añadido antes');

    // get
    $('#texto').text();

    // set
    $('#texto').text('Texto establecido');

    // setear
    $('#texto').css("color", "red");
    $('#texto').css("font-size", "15px");
    // esto también se podría reemplazar con
    $('#texto').css({
        "color": "red",
        "font-size": "15px"
    });
});