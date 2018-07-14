$(document).ready(function(){
})
/*global variables
************************************************************************* */
var wordBank = [  "dip", "wazzzup", "phat", "stylin", "trippin","wack","dibs", "booyah"];
var hints = ["assets/image/diphint.gif",
            "assets/images/wazzzuphint.gif", 
            "assets/images/phathint.gif",
            "assets/images/mom-jeans-snl.gif",
            "assets/images/model-tripping-gif.gif",
            "assets/images/wack.gif",
            "assets/images/dibs.jpeg",
            "assets/images/booyah.gif"]


var wordGen = "";
var hintPic = [];
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];
var isLetterInWord; 
var randNum = 0;
//var button = document.getElementsByClassName("button");

//counters

var guessLeft = 5;
var wins = 0;
var losses = 0;


//start and reset
startGame();


//functions 
//************************************************************************** */

function startGame () { 
            randNum = Math.floor(Math.random() * wordBank.length)
            wordGen = wordBank[randNum];
            lettersInWord = wordGen.split("");
            numBlanks = lettersInWord.length;

            //  hints.indexOf(i) == wordBank.indexOf(i);
             hintPic = hints[randNum]; 
            
            // reset counters
                 guessLeft = 8;
                 blanksAndSuccesses = [];
                wrongLetters = [];

            // create and fill in blanks with correct words

            for (i = 0; i< numBlanks; i++) {
                if(lettersInWord[i] === " "){
                    blanksAndSuccesses.push("&nbsp;");
                } else {
                    blanksAndSuccesses.push("_")
                };
            }

    //changing html/DOM
    document.getElementById("blankSpaces").innerHTML = blanksAndSuccesses.join("  ");
    document.getElementById("winCount").innerHTML = wins;
    document.getElementById("lossCount").innerHTML = losses;
    document.getElementById("guessLeft").innerHTML = guessLeft;
    document.getElementById("hints-image").src=hintPic;
 }
// debugging
    console.log (wordGen);
    console.log (lettersInWord);
    console.log(numBlanks);
    console.log (blanksAndSuccesses);




document.onkeyup = function(event) {
            var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
            checkLetters(letterGuessed);
            console.log(letterGuessed);
            roundComplete();
}


// comparing letters against word
function checkLetters(letter) {
     isLetterInWord = false;  
     
   
    for (var i = 0; i < numBlanks; i++){
        if(wordGen[i] == letter) { 
           isLetterInWord = true;

        }
    }


// pushing letters to word  or wrong letters to bank.
if (isLetterInWord) {
    for (var i = 0; i < numBlanks; i++) {
        if (wordGen[i] == letter) {
            blanksAndSuccesses[i] = letter;
        }
    }
}
        else {
            wrongLetters.push(letter);
            guessLeft--;
           
        }
    }  
    

// final counts and updates after each game
 function roundComplete () {
    
//     //post up-to-date counts during game to DOM
    document.getElementById("guessLeft").innerHTML = guessLeft;
    document.getElementById("blankSpaces").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrongLetters").innerHTML = wrongLetters.join(" ");

    for(var i = 0; i< blanksAndSuccesses.length; i++) {
        if (blanksAndSuccesses[i] === "&nbsp;") {
            blanksAndSuccesses[i] === " "; 
            console.log("Blanks " + blanksAndSuccesses);
        } 
    }
    
    if (lettersInWord.toString() === blanksAndSuccesses.toString()){
        wins++;
        alert("You won!");
        document.getElementById("winCount").innerHTML = wins; 
        startGame();
    }

    else if  (guessLeft == 0){
    losses++;
    alert ("You lost");
    document.getElementById("lossCount").innerHTML = losses;
    startGame();
}
}


//start and reset
startGame();
console.log(wordGen);
   































