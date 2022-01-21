$(document).ready(function(){
    // add user
    var dialogo = $('#agregar').dialog({
        autoOpen: false, // modal oculto
        modal: true, // sombra por detrás de modal
        title: "Agregar Usuario",
        buttons: {
            "Crear usuario": function(){
                // ajax
                var datos = $('#formulario').serialize();
                $.ajax({
                    url: 'agregar.php',
                    type: 'POST',
                    data: datos
                }).done(function(){
                    window.location.replace('index.php');
                });
            },
            Cancel: function(){
                $('#formulario')[0].reset();
                $(this).dialog("close");
            }
        }
    });

    // edit user
    var actualizar = $('#editar').dialog({
        autoOpen: false, // modal oculto
        modal: true, // sombra por detrás de modal
        title: "Editar Usuario",
        buttons: {
            "Editar usuario": function(){
                // ajax
                var datos = $('#formulario2').serializeArray();
                var id = $('#user').val();
                datos.push({name:'id', valud:id});

                $.ajax({
                    url: 'actualizar.php',
                    type: 'POST',
                    data: datos
                }).done(function(){
                    window.location.replace('index.php');
                });
            },
            Cancel: function(){
                $('#formulario2')[0].reset();
                $(this).dialog("close");
            }
        }
    });

    // delete user
    var confirmar = $('#dialogo-confirm').dialog({
        autoOpen: false, // modal oculto
        resizable: false,
        modal: true, // sombra por detrás de modal
        title: "Eliminar Usuario",
        buttons: {
            "Eliminar": function(){
                // ajax
                var id = $('#user').val();

                $.ajax({
                    url: 'eliminar.php',
                    type: 'POST',
                    data: {'id': id}
                }).done(function(){
                    window.location.replace('index.php');
                });
            },
            Cancel: function(){
                $(this).dialog("close");
            }
        }
    });

    // abrir modales
    $('#nuevo').button().on("click", function(){
        dialogo.dialog("open");
    });
    $('.eliminar').click(function(event){
        $('#user').val($(this).attr("id"));
        confirmar.dialog("open");
    });
    $('.editar').click(function(event){
        var id = $(this).attr("id");
        $('#user').val(id);

        $.ajax({
            url: 'editar.php',
            type: 'POST',
            dataType: 'json',
            data: {'id': id}
        }).done(function(data){
            $('#usuario').val(data[0].usuario);
            $('#nombre').val(data[0].nombre);
            $('#apellido').val(data[0].apellido);
            $('#telefono').val(data[0].telefono);
            $('#email').val(data[0].email);
        });

        actualizar.dialog("open");
    });
});