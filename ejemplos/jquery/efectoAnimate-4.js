$(document).ready(function(){
    $("button").click(function(){
        var div = $("#d1");
        div.animate({height: '600px', opacity: '0.5'}, "slow");
        div.animate({width: '600px', opacity: '0.9'}, "3000");
        div.animate({height: '100px', opacity: '0.5'}, "slow");
        div.animate({width: '100px', opacity: '0.9'}, "3000");
    });
});