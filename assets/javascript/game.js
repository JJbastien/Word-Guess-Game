var team = ["Argentina", "France", "Brazil", "England", "Tunesia", "Senegal", "Nigeria", "Germay" ,"Uruguay", "Mexico"];
var guessesLeft= 9
var wrongLetter=[];
var underScore= "-";
var userGuess = []
var wins = 0;
var loss = 0 ;
document.getElementById("placeholder").textContent =  underScore;

/* 
choose a country randomly
create an onkey event
the event register the user input
using charAt see if letters match.
if letter match. push into underScore array.
if letter does not match push into wrongLetter array and also decrease remaining guesses by --
 */
var randomCountry = team [Math.floor(Math.random()* team.length)];

for  (var i = 0; i<randomCountry.length; i++ ){
underScore.push =(" _ ");
console.log(underScore);
}
document.onkey = function
userGuess = event.key  ;
console.log(userGuess);




  




