$(document).ready(function(){
    $("#principal").hover(function(){
        alert("Has entrado en el cuadraito!");
    },
    function(){
        alert("Ahora, te has salido del cuadraito!");
    });
});