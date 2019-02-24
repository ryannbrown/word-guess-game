

// Set variable for computer to pick a random letter from A-Z
var computerChoices = ("abcdefghijklmnopqrstuvwxyz").split("")

// Checks to see if computer guess worked
//>>>>> console.log(computerGuess[Math.floor(Math.random() * computerGuess.length)]);<<<<<


// This sets the numbers of values to begin the game
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var maxGuesses = 10;
var guessesMade=[];


// Referencing the variables to the html
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("num-wins");
var defeatsText = document.getElementById("num-losses");
var guessesLeftText = document.getElementById("rem-guesses");
var guessesMadeText = document.getElementById("guesses-made")

// global scope for the computers key choice
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


// If the user runs out of guesses, this function is to reset the score

function resetScore(){
    guessesLeft = maxGuesses;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}; 



// This function is run when user presses a key...to guess a keyboard character
document.onkeyup = function(event) {
   


//    When the user presses a key, they lose one of their 10 guesses
   guessesLeft--;

//    Determine which key is being pressed
    
    userGuess = event.key;


    // This should be the function
             
for (var i = 0; i < guessesMade.length; i++) { //for every previous answer
    if (userGuess == guessesMade[i]) { //check if the current answer is a previous one
        guessesLeft++;
        alert("You chose a duplicate letter. Retry!")
        }
    };


    if (userGuess === computerGuess) {
        wins++;
        resetScore();
        guessesMade = [];
        // console.log(computerGuess, "ifwinbefore");
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        // console.log(computerGuess, "ifwinn");
        // guessesLeft--;
    } else if (guessesLeft ===0) {
        losses++;
        resetScore();
        guessesMade = [];
        // guessesLeft--;
    } else if (userGuess != computerGuess){
        guessesMade.push(userGuess);
    };

  

// hide directions

directionsText.textContent = "";

// Display all of the guesses and the scores

winsText.textContent = "Wins: " + wins;
defeatsText.textContent = "Losses: " + losses;
guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
guessesMadeText.textContent = "Guesses you have made: " + guessesMade.join(", ");



//method to check for what the computer is guessing with alert below
// alert(computerGuess);


};



