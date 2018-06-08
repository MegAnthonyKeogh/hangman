

$(document).ready(function(){
    alert("Hello! I am an alert box!!");
   

var wordBank = [  "Dip", "Wazzzup", "Phat", "Stylin", "Trippin","Wack","Dibs", "booyah",
];


var wordGen = [];
var rightLetters = ["A", "B", "C",];
var wrongLetters = ["J", "K", "L", "M",];
var wordGen = wordBank[Math.floor(Math.random() * wordBank.length)];
var underScore =  wordGen.replace(/.{1}/g, "_ ");
//setting up the random number to pick the word for the game 

//randomnly picks word and generates matching underscore
$("#NewWord").on("click", function () {

    var wordGen = wordBank[Math.floor(Math.random() * wordBank.length)];
    $("#word").text(wordGen);
    var underScore =  wordGen.replace(/.{1}/g, "_ ");
    $(".blankSpaces").text(underScore);
});
   //document.addEventListener

// eventListener for userInput


//if guess is right
document.getElementById("#corretLetters").innerHTML = rightLetters;
      // if guess is wrong

      document.getElementById("#wrongLetters").innerHTML = wrongLetters;
  
});