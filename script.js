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
const rock = 'rock';
const paper = 'paper';
const cut = 'scissors';


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
      compare the computer result against the player result if one chose rock and the other
      chose paper, Paper wins. If one chose rock and the other chose scissors, Rock wins.
      If one chose scissors and the other chose paper than scissors wins and if they both chose
      the same, it's a draw

  } */

  


  function playRound(playerSelection = prompt('rock, paper or scissors'), computerSelection = computerPlay) {
      const playerPlays = playerSelection.toLowerCase();

      const playerChoice = playerPlays;
      const computerChoice = computerSelection();
      
      if(playerChoice === rock && computerChoice === paper) {
          return 'You lose, Paper beats Rock';
      } else if(playerChoice === rock && computerChoice === cut) {
          return 'You win, Rock beats Scissors';
      } else if(playerChoice === cut && computerChoice === rock) {
        return 'You Lose, Rock beats Scissors';
      } else if(playerChoice === paper && computerChoice === rock) {
        return 'You Win, Paper beats Rock';
      } else if (playerChoice === paper && computerChoice === cut) {
          return 'You lose, Scissors beats Paper';
      } else if(playerChoice === cut && computerChoice === paper) {
        return 'You Win, Scissors beats Paper';
      } else if(playerChoice === computerChoice) {
          return 'It\'s a draw';
      } else {
          return 'Please enter either rock, Paper or scissor';
      }
  }
  
  /*I have to write a new function called game(). Call the playRound function inside of this 
  one to play a 5 round game that keeps score and reports a winner or loser at the end. */

  /*I have to make a function caalled game() and it must call the playRound() function 5 times
    and each time it loops the score of the player/computer has to be incremmented  depending on who won the 
    previous round */

  /*first mke a function called game() that calls the playRound function 5 times.
    I'll use a for loop to call the playaRound function
    function game() {
        let [i] equal to 1 and as long as [i] is less than or equal to five keep on calling the playRound()
         function but on ech iteration, incremment [i] 
    } */


    /*Now my playRound() function is working just fine, when I call the playRound() function, a prompt pop's up
      and ask's either rock, paper or scissors and and if i write any of the three, the function will return a string
      telling if i won or not and it will tell me why i won or lost... e.g You won, Rock beats scissors  */

    /*The next problem is to get the computer to console log the score everytime i play the game 
        right now should i call the game() function a prompt will appear and ask for user input and after making a choice
        another prompt will appear, So what i want to happen is that before the next prompt appears, the computer should tell
        me if i won or not*/

    /*The next problem is keeping score, the computer should assign a score to both the player and the computer and the score 
      of the player or the computer should increase depending on who won the round IF it was a draw the score will remain the same*/
    /*To solve the score problem i want to use either a switch statement or if... else statements to make the computer decide who's 
      score should increase */ 
    /*The playRound() function will return a string that declares theat the  player won or lost so the conditional should check
      if the player won, lost or drew and decide who's score to increase  */  

      /*Now the final problem is making the computer check the score and declare who won */

      /*I know that by the time the loop is finished the scores will be finalised meaning that the playerScore and compScore
       variables will have new values that aren't zero provided that the result wasn't five draws in a row */
 
       /*if playerScore is Greater than compScore, then console playerScore and the text 'You won!' but 
       if playerScore is less than compScore, then console log the compScore and the text "This proves that computers are superior to man"
       but if playerScore is equal to compScore than console log the text 'We both Won!'  */

       
   /* function game() {
        let compScore = 0
        let playerScore = 0
        for(let i = 1; i <= 5; i++) {
            const result = playRound();
            if(result === 'You lose, Paper beats Rock' || result === 'You Lose, Rock beats Scissors' || result === 'You lose, Scissors beats Paper') {
              compScore++;
              console.log(result);
              console.log(compScore);
              console.log(playerScore);
            } else if(result === 'You Win, Scissors beats Paper' || result === 'You Win, Paper beats Rock' || result === 'You win, Rock beats Scissors') {
              playerScore++;
              console.log(result);
              console.log(compScore);
              console.log(playerScore);
            } else {
              console.log('It\'s a draw');
              console.log(compScore);
              console.log(playerScore);
            }
          }
        
        if(playerScore > compScore) {
          console.log(`Your Score is: ${playerScore}, Congrats Champ`)
          return 'WINNER!';
        }  else if(compScore > playerScore) {
          console.log(`Sorry but compScore:${compScore} is better than your score`)
          return 'LOSER!!';
        } else {
          console.log(`It's a draw.`)
          return 'DRAW!!!';
        }
      
      } */