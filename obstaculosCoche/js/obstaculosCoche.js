$(document).ready(function() {
    //función de mover las nubes
    var viejo = true;

    moverNube();

    function moverNube(){
       $("#nubes").animate({backgroundPosition: '-=20px'}, 
                2000, "linear",function(){moverNube()});
    }

    //función de mover el coche
    $("body").keydown(function(e) {
        switch((e.keyCode ? e.keyCode : e.which)){
            //case 13: // Enter
            //case 27: // Esc
            case 32: // Space
            //Jump
            $("#block").animate({top: "-=50"},100);
            $("#block").animate({top: "+=50"},100);     
            break;
            case 37:   // Left Arrow
                $("#block").animate({left: "-1"},1);
            break;
            case 38: // Up Arrow
            $("#block").animate({top: "-110"},1);
            break;
            case 39:   // Right Arrow
                $("#block").animate({left: "+200"},1);
            break;
            case 40: // Down Arrow
                $("#block").animate({top: "+10"},1);
            break;
        }
    });

    //función mover humanos
    moverHumanos();
    function moverHumanos(){
        cambiarHumano();

        $("#humano").animate({left: '-=1400px' }, 8000, mover);                       
    }
               
    function mover() {
        $("#humano").css("left","+=1400px");
        moverHumanos();
    }

   

    function cambiarHumano(){
        if (viejo){
            $("#humano").css('background-image', 'url("img/humano1.png"');
            viejo = false;
        }else{               
            $("#humano").css("background-image", 'url("img/humano2.png"');
            viejo = true;
        }                           
    }

});