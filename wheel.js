
$(document).ready(function(){
	var counter = 0;
	var points = 3000;
    var gameinplay = false;
	//array of words and hints
    var words = [{word: "lambent", hint: "softly bright or radiant, 7 letters"}, 
    	{word: "facetious", hint: "meant to be humorous or funny : not serious"}, 
    	{word: "obfuscate", hint: "to be evasive, unclear, or confusing"}];
	//does a number of things when click start button
	$('#start').click(function(){
		gameinplay = true;
        var points = 3000;
		//moves the wheel
        $('#wheel').addClass('rotate').delay(15000).queue(function(next){
            $('#wheel').removeClass('rotate');
            next();
        });      
        //shows hint when click start button 
		$('#hint').text(words[counter].hint).show();

		//shows points in the beginning
		$('#points').text(points + " points").show();

		//shows alphabet
		$('.letter').show();

		//changes start button to reset game
		$('#start').text("RESTART GAME").show();

        //hide instructions
        $('.instructions').hide();

        //hide gameover 
        $('#gameover').hide();
        $('#wongame').hide();

        //hide letters from a previous game
        $('.wordLetter').text() == "";

        //loops through an array of words and hints each time start button clicked
        for (var i = 0; i < words[counter].word.length; i++) {
            $('.wordLetter').eq(i).attr('data-letter', words[counter].word.charAt(i));//assigns a letter value to each box
        }

        //resets the game to the next word
        counter = counter + 1;
        
    });

    //Make each letter an element - done!
	//Make each letter clickable
    $('.letter').click(function(){
    	if (gameinplay) {
            var letter = $(this);
            var letterPresence = false;
            var gamewon = false;
            
            //Checks if this letter is in word  
            $('.wordLetter').each(function(){       
                if ($(this).attr('data-letter').toUpperCase() == letter.text()){ //checks if the letter pushed is the same letter in word 
                    $(this).text($(this).attr('data-letter')); //shows letter in word table 
                    letterPresence = true; //sets letterPresence equal to true   
                }   
            });
            if (letterPresence == true) {
                points += 1000; // adds points by a 1000 if letter was guessed wright
                $('#points').text(points + " points"); 
                $('.instructions').text("Right guess!").show(); //gives instructions
            } else {
                points -= 1000; // subtracts points by a 1000 if letter was not guessed wright
                $('#points').text(points + " points"); //shows total points
                $('.instructions').text("This letter is not in the word.").show(); //gives instructions
                if (points == 0){ //if points equal 0 game is over
                    $('#gameover').show(); //cancels display:none
                    gameinplay = false; //makes letters non clickable
                } //end if statement  
            }//end each loop

            if (checkwon()) {
                $('#wongame').show();
                gameinplay = false; 
            }             
        } //end if game in play          
    });
    function checkwon() {
        var won = true;
        $('.wordLetter').each(function(){
            //check if all letters are shown
            if($(this).attr('data-letter') != ""){
                if ($(this).text() == "") {
                    won = false;
                    return false;//?????
                } 
            }
        });//end each
        if (won) {
            return true;    
        } else {
            return false;
        }
    }//end checkwon    
});