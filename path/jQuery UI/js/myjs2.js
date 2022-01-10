$(document).ready(function(){
    // autocomplete
    var colores = ["rojo", "verde", "azul", "amarillo", "blanco", "violeta", "dorado", "celeste", "rosa", "negro", "gris"];
    $('#color').autocomplete({
        //source: colores
        souce: function(request, response){
            $.ajax({
                url: "colore.php",
                dataType: "json",
                data: {color:request.term},
                success: function(data){
                    response(data);
                }
            });
        },
        minLength: 3,
        select: function(event, ui){
            alert("Selecciono: " + (ui.item.label));
        }
    });

    // dialog
    $('#dialogo').dialog({
        autoOpen: false,
        modal: true,
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "explode",
            duration: 1000
        },
        buttons: {
            "Eliminar": function(){
                alert("Eliminado");
            },
            "Cancelar": function(){
                $(this).dialog("close");
            }
        }
    });

    $('#ventana').click(function(event){
        $('#dialogo').dialog("open");
    })

    // progress bar
    var contador = 0;
    $('#progreso').progressbar({ value: false });
    setInterval(function(){
        contador += 5;
        $('#progreso').progressbar("value", contador);
    }, 1000);
});