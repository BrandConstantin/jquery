$(function(){
    // filtrar por columnas pares
    $('tr:even').css('background', '#9cf');

    // filtrar por columnas impares
    $('tr:odd').css('background', '#3cf');

    // filtrar indicando el inidce
    $('li.eq(3)').css('background', '#9cf');

    // a partir de un inidce indicado coge todos los demás siguiente
    $('li.gt(2)').css('background', '#9cf');

    // a partir de un inidce indicado coge todos los demás anteriores
    $('li.lt(2)').css('background', '#9cf');

    // NO aplicar estilo ni al primero ni al último elemento
    $('li:not(:first, :last)').css('background', '#9cf');

    // aplicar estilo al primer hijo, el primer li
    $('li:first-child').css('background', '#9cf');

    // aplicar estilo al último hijo, el último li
    $('li:last-child').css('background', '#9cf');

    // aplicar estilo al n hijo, el n li
    $('ul li:nth-child(2)').css('background', '#9cf');

    // marcar todos los parámetros que contiene lo indicado
    $('p:contains(estas)').css('background', '#9cf');

    // marcar todos los parámetros cuyo interior esta vacio
    $('td:empty').css('background', '#9cf');

    // marcar todos los elementos que en su interior tienen un enlace
    $('p:has(a)').css('background', '#9cf');

    // filtrar por atributo, escoger todo los elementos li que contienen una clase
    $('li[class]').css('background', '#9cf');
});