alert("Hello! I am an alert box!!");

$(document).ready(function(){

   

var wordBank = [  "Hella Cool",  "Dip", "Wazzzup", "Phat", "oh snap!", "Stylin", "Trippin","Wack","Dibs","yada yada yada", "booyah",
];

var Hint = [
    "it's not just cool",
    "is equivalent to the word leave",
    "The best way to greet a friend",
    "Pretty hot and tempting",
    "sassily snapping your fingers, while yelling \'blank\'",
    "best used when you want to tell someone how good they look",
    "A great way to describe someone who is freaking out.",
   "lame,",
];

var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

//setting up the random number to pick the word for the game 

$(".jumbotron").on("click", "#NewWord", function NewWord() {

    // ... we generate a random number
     var wordGen = Math.floor(Math.random() * wordBank.length) + 1;

    // ... and then dump the random number into our random-number div.
    $("#word").text(wordGen);







 









































