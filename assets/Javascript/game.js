//create array of words- possibleWords

var possibleWords = ["bigeye chub", "american paddlefish", "black crappie", "broadstripe shiner", "chologaster cornuta", "clearnose skate", "giant oarfish", "leapard shark", "ninespine stickleback", "ocean pout", "pacific jack mackerel", "sockeye salmon", "starry flounder", "tennessee dace", "brook trout", "rainbow trout", "alabama hog sucker", "choctaw bass", "toothless blindcat", "death valley pupfish", "apache trout"];

var clues = [ "This fish is highly intolerant of murky waters and silt covered bottoms. As a result of these habitat preferences they are an indicator of good water quality.",
 "Fossil records of this fish date back over 300 million years, nearly 50 million years before dinosaurs first appeared.",
 "This is a very popular sport fish, as it is easy to catch during their feeding times. It is also very tasty, despite its name.",
 "This is a species of cyprinid fish endemic to the Chattahoochee River drainage in the states of Georgia and Alabama. The average length is about 7 centimeters, or 2 inches.",
 "Commonly named swampfish, ricefish, or riceditch killifish, it is a freshwater fish of the family Amblyopsidae. It is the only living species of its titular genus.",
 "This is a species of cartilaginous fish. It is easily identified by the translucent patches on either side of its snout",
 "This is the world's longest bony fish. Its physical characteristics and its undulating mode of swimming have led to speculation that it might be the source of many 'sea serpent' sightings.",
 "This 'fish' is immediately identifiable by the striking pattern of black saddle-like markings and large spots over its back, from which it derives its common name.",
 "Despite its name, the number of spines can vary from 8 to 12.",
 "The fish has antifreeze proteins in its blood, giving it the ability to survive in near-freezing waters.",
 "is considered safer to consume than tuna because it is a smaller fish, and not a top predator, thus avoiding accumulation of heavy metals such as mercury.",
 "This fish is primarily red in hue during spawning.",
 "A common flatfish found around the margins of the North Pacific. Features include the combination of black and white-to-orange bar on the dorsal and anal fins",
 "This is a species of ray-finned fish found only in the United States; particularly in northeast Tennessee and southwest Virginia.",
 "It is native to Eastern North America in the United States and Canada. Also knows as a Squaretail",
 "Wild-caught and hatchery-reared forms of this species have been transplanted and introduced for food or sport in at least 45 countries and every continent except Antarctica",
 "The fish lives in the Chattahoochee River and Mobile Bay drainages and nearby creeks. The species was named for the Etowah River of Georgia",
 "The name comes from the Native American tribe which used to occupy the area in which the new species was found.",
 "This fish has no pigmentation and no externally visible eyes. It is only found in five artesian wells penetrating the San Antonio Pool of the Edwards Aquifer in and near San Antonio",
 "It is endemic to two small, isolated locations in a southwestern national park, and it is currently classified as endangered.",
 "This is the state fish of Arizona. This fish is a yellowish-gold color with a golden belly and have medium-sized dark spots that are evenly spaced"];
//create variable for wins, losses, lives, and incorrect letters to be displayed
var wins = 0;
var losses = 0;
var lives= 8;
var incorrectGuess = [];
var lettersInUse=[];
var wordInUse;
var userGuess;
var blanksAndSuccesses = [];
var clueInUse;



//set wins and losses to 0, lives to 8, make incorrect letters an empty array
// game starts when page loads




function startGame(){
//choose an element out of the possibleWords array (wordInUse)
	wordInUse = possibleWords[Math.floor(Math.random() * possibleWords.length)];

	clueInUse = clues[possibleWords.indexOf(wordInUse)];

	blanksAndSuccesses = [];

	console.log(clueInUse);
	console.log(wordInUse);
//break that wordInUse up into its individual letters

	lettersInUse = wordInUse.split("");

//create a string with underscores replacing the letters in lettersInUse	

	 for (i=0; i< lettersInUse.length; i++){
	 	if(lettersInUse[i] != " "){
	 	blanksAndSuccesses.push("_");
	 }
	 else{
	 	blanksAndSuccesses.push("-");
	 }
	 }


	 console.log(blanksAndSuccesses);
	console.log(lettersInUse);
document.getElementById("Clues").innerHTML = clueInUse;
document.getElementById("Lives").innerHTML = lives;
document.getElementById("Wins").innerHTML = wins;
document.getElementById("Losses").innerHTML = losses;
document.getElementById("Word").innerHTML = blanksAndSuccesses.join(" ");
document.getElementById("Guesses").innerHTML = incorrectGuess.join(" ");

}


document.getElementById("Reset").onclick=function restartGame() {
	 wins = 0;
	 losses = 0;
	 lives= 8;
	 incorrectGuess = [];
	 lettersInUse=[];
	 wordInUse;
	 clueInUse;
	 userGuess;
	 blanksAndSuccesses = [];
	startGame();
document.getElementById("Lives").innerHTML = lives;
document.getElementById("Wins").innerHTML = wins;
document.getElementById("Losses").innerHTML = losses;
document.getElementById("Word").innerHTML = blanksAndSuccesses.join(" ");
document.getElementById("Guesses").innerHTML = incorrectGuess.join(" ");
}


function gameLost() {
	lives= 8;
	losses++;
 	incorrectGuess = [];
	 lettersInUse=[];
	 wordInUse;
	 userGuess;
	 clueInUse;
	 blanksAndSuccesses = [];
	startGame();
}


function gameWon(){
		lives= 8;
		wins++;
	 	incorrectGuess = [];
		 lettersInUse=[];
		 wordInUse;
		 clueInUse;
		 userGuess;
		 
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
		
		alert("Sorry, the answer is the " + wordInUse.toUpperCase());
		gameLost();
	}

	if ( blanksAndSuccesses.indexOf("_") == "-1"){
		document.getElementById("Word").innerHTML = lettersInUse.join(" ");
		alert("You got it! The answer is the " + wordInUse.toUpperCase());
		gameWon();
	}
}



	

//create ability to select letters onkeyup-(pendingLetter) convert to lowercase

//compare those selected letters to the letters in the chosen word(is pendingLetter an element of the wordInUse array?)

//if the typed letter(pendingLetter) matches a letter in the word(wordInUse), change the underscore to the letter selected

//if the typed letter does not match, add the selection to the list of guessed letters

//also, subtract one from lives

//when lives is less than one, add one to losses and restart game with new selection from possibleWords

//when all elements in the wordInUse have been correctly guessed, add one wins and restart game with new selection from possibleWords


