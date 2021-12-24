$(docuemnt).ready(function(){
    // click
    $('p').click(function(){
        console.log("Has echo click sobre el texto");
    });

    // change
    $('#selection').change(function(){
        console.log("Has cambiado el option del select");
    });

    // mouseover y mouseout
    $('#cuadro').mouseover(function(){
        $('#cuadro').css("background-color", "green");
    });
    $('#cuadro').mouseout(function(){
        $('#cuadro').css("background-color", "red");
    });

    // hover (la combinación de mouseover y mouseout)
    $('#cuadro').hover(function(){
        $('#cuadro').css("background-color", "green");
    }, function(){
        $('#cuadro').css("background-color", "red");
    });

    // coger la coordenada x y y
    $(document).mousemove(function(event){
        $('#x').text('coordenada x ' + event.clientX);
        $('#y').text('coordenada y ' + event.clientY);
    });

    // double click
    $('#cuadro').dblclick(function(event){
        console.log("Double click en el cuadro.");
    });

    // focus
    $('#inputDNI').focus(function(event){
        $('#inputDNI').val('Ingresa el DNI');
    });

    // blur (cuando abandona el foco)
    $('#inputDNI').blur(function(event){
        $('#inputDNI').val('');
    });

    // one evento para funcionar una sola vez
    $('#btn').one('click', function(event){
        console.log("Has echo click sobre el texto una vez");
    });

    // on
    $('#btn').on('click', function(){
        console.log("Botón presionado");
    });
    // también se puede hacer de este modo
    $(document).on('click', '#btn', function(){
        console.log("Botón presionado");
    });

    // para desvincular un evento podremos hacer también
    $('#btn').on('click', function(){
        console.log("Botón presionado");
        $('#btn').off();
    });
});