$(document).ready(function() {
    //global variable
	var numbSquare = 16;
    var player = 'red';
    var board = [];
    
    //function to start the game
    $('#start').on('click',function(){    
        //eliminate all the game and start of new
        for(var i = 1; i <= numbSquare; i++){ 
            $('.square' + i).remove(); 
        }

        for(var i = 0; i < numbSquare - 1; i++){ 
            board[i] = "empty"; 
        }

        board[numbSquare - 1] = "end";
		
        var goose = 3;
        var waterWell = 3;

        $('#red').attr('pos', 0);
        $('#green').attr('pos', 0);
        $('#red').animate({left:'-70px'}, 500);
        $('#green').animate({left:'-70px'}, 500);
        $('#dice').text('Shot: ');
        $('#shot').removeAttr('disabled');
        
        //asignan the goose and the waterWell
        do{
            var position = Math.floor(Math.random() * (numbSquare - 1));

            if(board[position] == "empty" && goose > 0) { 
                board[position] = "goose"; 
                goose--; 
            }

            if(board[position] == "empty" && waterWell > 0) { 
                board[position] = "waterWell"; 
                waterWell--; 
            }
        } while((goose + waterWell) > 0);
        
        //create the 16 square
        for(var i = 1; i <= numbSquare; i++){
             var square = $('<div></div>')
                            .addClass('square')
                            .addClass(board[i - 1])
                            .attr('id','square' + i)
                            .text(i);    
            $("#board").append(square);
        }
        
        //se desactiva el botón comenzar y se indica el turno del player.
        $(this).attr('disabled','true');
        $('#text').text("Player Turn" + player);
    });
    
    //function to shot the dice
    $('#shot').on('click',function(){
        $(this).attr('disabled','true');

        var dice = Math.floor(Math.random() * 6) + 1;

        $('#dice').text('Shot: ' + dice);
        
        //increase the position of the player
        var position = +$('#'+ player).attr('pos');
        $('#' + player).attr('pos', (position + dice));
        
        var getMoving = 100 * dice;
		
        //comprueve that no pase the last square
        if((position + dice) > numbSquare) { 
            getMoving = 100 * (numbSquare - position);
            $('#' + player).attr('pos', numbSquare);
        }
        
        //initiate the moveament of the player
        $('#' + player).animate({left:'+=' + getMoving + 'px'}, 2000, function(){
            position = +$('#' + player).attr('pos');
            
            //action to fall on the goose
            if(board[position - 1] == 'goose'){
                $('#text').text("Shot again " + player);
				
                do{
                   position++; 
                } while (board[position - 1] != 'goose' && board[position - 1] != 'end');
				
                $('#' + player).animate({ left:((100 * position) - 70)}, 2000, function(){
                    $('#' + player).attr('pos', position);
                    //activate again the button
                    $('#shot').removeAttr('disabled');
                });
                
            //action to fall in the waterWell
            } else if(board[position - 1] == 'waterWell'){
                $('#text').text("You fall in the water well. Go to the start");
                $('#' + player).animate({left:'-70px'}, 2000, function(){ 
                    $('#' + player).attr('pos', 0);
                    changeTurn(); 
                });
                
            //action to fall in the empty square
            } else if(board[position - 1] == 'empty'){
                changeTurn();
            }
            
            //action to end the game
            if(board[position - 1] == 'end') {
                $('#text').text("The player " + player + " won. Start again.");
                $('#start').removeAttr('disabled');
                $('#shot').attr('disabled','true');
            }
        });
    });
    
    //change the turn
    function changeTurn(){
        if (player == "red"){ 
            player = 'green';
        }else { 
            player = 'red';
        }

        $('#text').text("Player Turn: " + player);
        //activate again the button
        $('#shot').removeAttr('disabled');
    }
});