/*This function should randomly RETURN rock, paper or scissors 
  To make this random, I'll uss the Math.random function to generate 
   a number btween 0 and 3 and I'll assign each choice a value between 0 and 3
   and I'll use if statements to decide wht to return*/


/*This the pseudocode for the computerPlay function

  function computerPlay() {
      generate a random number between 0 and 3, which will be 0,1 and 2
      when I use the Math.random()*3 and I round the number to a whole number
      I SHOULD MAKE A SEPERATE FUNCTION THAT GENERATE THE RANDOM NUMBER AND 
      ROUNDS IT'S AND THEN CALL IT IN MY computerPlay function

      now i should assign the function a return value depending on the the number that was returned

      if(number is 0) return Rock
      if(number is 1) return Paper
      else return scissor
  }*/
const rock = 'Rock';
const paper = 'Paper';
const cut = 'Scissors';


function number() {
    return Math.floor(Math.random()*3);
}

function computerPlay() {
    const value = number();
     if(value === 0) {
         return rock;
     } else if (value === 1) {
         return paper;
     } else {
         return cut;
     }

}

/*Now i have to write  function that plays one round of rock, paper, scissors
and the function should take in two parameters ,playerSelection and computerSelection
and it must return a string that declares the winner of the round  */

/*My function will take in two inputs, one will be player input and the other will be 
  the computers input and once I have both inputs, I should compare them to see who won*/

  /*function oneRound(playerSelection, computerSelection) {
      call the playerSelection function and store the value in a variable.
      call the computerSelection function and store the value in a variable.
      compare the computer result against the player result if on chose rock and the other
      chose paper, Paper wins. If one chose rock and the other chose scissors, Rock wins.
      If one chose scissors and the other chose paper than scissors wins and if they both chose
      the same, it's a draw

  } */