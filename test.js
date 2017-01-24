// $('.wordLetter').each(function(){ 		
    	// 	if ($(this).attr('data-letter').toUpperCase() == letter.text()){ //checks if the letter pushed is the same letter in word
    	// 		$(this).text($(this).attr('data-letter')); //shows letter in word table if it's letter pushed
    	// 		$('#points').text(points = points + 1000 + " points").show(); // adds points by a 1000 if letter was guessed wright
     //        } else {
    	// 		$('#points').text(points = points - 1000 + " points").show();//else: reduce points by 1000
    	// 	};
    	// });



 $('.wordLetter').each(function(){       
            if ($(this).attr('data-letter').toUpperCase() == letter.text()){ //checks if the letter pushed is the same letter in word
                points += 1000;
                $(this).text($(this).attr('data-letter')); //shows letter in word table if letter pushed
                $('#points').text(points + " points").show(); // adds points by a 1000 if letter was guessed wright
            } else { //if chosen letter does not match any letter in a given word
                //if points are 0 game is over
                points -= 1000;
                $('#instructions').text("This letter is not in the word. Try again!").show(); //gives instructions
                $('#points').text(points + " points").show();//else: reduce points by 1000
            }   
        });