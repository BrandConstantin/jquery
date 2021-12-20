$(function(){
    // comprobando que el dom ha cargado
    $(document).ready(function(){
        alert("documento carado completamente");

        // obtener por id
        $('#id').css('color', 'red');

        // obtener por clase
        $('.clss').css('color', 'red');

        // obtener por atributo
        $('p[title=hola]').css('color', 'red');

        // obtener por elemento
        $('p').css('color', 'red');

        // obtener varios elementos
        $('#id, .class, #otroid').css('color', 'red');

        // obtener todos los elementos
        $('*').css('color', 'red');

        // obtener los hijos
        $('#cajaDiv p').css('color', 'red');

        // obtener los hermanos
        $('li.uno ~ li').css('color', 'red');

        // obtener el siguiente hermano
        $('li.uno + li').css('color', 'red');

        // obtener el primer elemento
        $('li:first').css('color', 'red');

        // obtener el último elemento
        $('li:last').css('color', 'red');

        // más selectores en api.jquery.com/category/selectors/
    });
});