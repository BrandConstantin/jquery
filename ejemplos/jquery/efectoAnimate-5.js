$(document).ready(function(){
    $("button").click(function(){
        var div = $("#d1");
        div.animate({left: '400px'}, "slow");
        div.animate({width: '250px'});
        div.animate({fontSize: '7em'}, "slow");
    });
});