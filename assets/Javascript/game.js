//create array of words- possibleWords

var possibleWords = ["pen", "notes", "website", "peanut", "braves", "falcons"];

//create variable for wins, losses, lives, and incorrect letters to be displayed
var wins = 0;
var losses = 0;
var lives= 8;
var incorrectGuess = [];
var lettersInUse=[];
var wordInUse;
var userGuess;
var blanksAndSuccesses = [];




//set wins and losses to 0, lives to 8, make incorrect letters an empty array
// game starts when page loads




function startGame(){
//choose an element out of the possibleWords array (wordInUse)
	wordInUse = possibleWords[Math.floor(Math.random() * possibleWords.length)];

	console.log(wordInUse);
//break that wordInUse up into its individual letters

	lettersInUse = wordInUse.split("");

//create a string with underscores replacing the letters in lettersInUse	

	 for (i=0; i< lettersInUse.length; i++){
	 	blanksAndSuccesses.push("_");
	 }
	 console.log(blanksAndSuccesses);
	console.log(lettersInUse);
document.getElementById("Lives").innerHTML = lives;
document.getElementById("Wins").innerHTML = wins;
document.getElementById("Losses").innerHTML = losses;
document.getElementById("Word").innerHTML = blanksAndSuccesses.join(" ");
document.getElementById("Guesses").innerHTML = incorrectGuess.join(" ");

}

function restartgame() {
	 wins = 0;
	 losses = 0;
	 lives= 8;
	 incorrectGuess = [];
	 lettersInUse=[];
	 wordInUse;
	 userGuess;
	 blanksAndSuccesses = [];
	startGame();
}


function gamelost() {
	lives= 8;
	losses++;
 	incorrectGuess = [];
	 lettersInUse=[];
	 wordInUse;
	 userGuess;
	 blanksAndSuccesses = [];
	startGame();
}


function gamewon(){
		lives= 8;
		wins++;
	 	incorrectGuess = [];
		 lettersInUse=[];
		 wordInUse;
		 userGuess;
		 blanksAndSuccesses = [];
		 startGame();

}
//display the wordInUse elements on the screen, but replace the letters with underscores
startGame();

console.log(lettersInUse);

console.log(blanksAndSuccesses);
	

	

document.onkeyup = function(event){


	document.getElementById("Word").innerHTML = blanksAndSuccesses.join(" ");
	userGuess = event.key.toLowerCase();

	for (i=0; i < lettersInUse.length; i++){

		if ( userGuess === lettersInUse[i] ) {

			blanksAndSuccesses.splice(i, 1, userGuess);
			document.getElementById("Word").innerHTML = blanksAndSuccesses.join(" ");
		}


	}
	console.log(blanksAndSuccesses);


	if ( lettersInUse.indexOf(userGuess) == "-1"){
		incorrectGuess.push(userGuess);
		lives--;
	};

	console.log(userGuess);
	document.getElementById("Lives").innerHTML = lives;
	document.getElementById("Guesses").innerHTML = incorrectGuess.join(" ");

	if ( lives < 1) {

		alert(wordInUse);
		gamelost();
	}

	if ( blanksAndSuccesses.indexOf("_") == "-1"){
		gamewon();
	}
}

	

//create ability to select letters onkeyup-(pendingLetter) convert to lowercase

//compare those selected letters to the letters in the chosen word(is pendingLetter an element of the wordInUse array?)

//if the typed letter(pendingLetter) matches a letter in the word(wordInUse), change the underscore to the letter selected

//if the typed letter does not match, add the selection to the list of guessed letters

//also, subtract one from lives

//when lives is less than one, add one to losses and restart game with new selection from possibleWords

//when all elements in the wordInUse have been correctly guessed, add one wins and restart game with new selection from possibleWords


