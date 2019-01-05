window.onload = function() {
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase()
  if (userInput ==="rock" || userInput==="paper" || userInput==="scissors" || userInput === "bomb"){
    return userInput
  }else{
    return "Error. Invalid Input"
  }  
}

const getComputerChoice = () => {
  num = Math.random() * 3
  num = Math.floor(num)
  switch(num){
    case 0:
      return "rock"
      break;
    case 1:
      return "paper"
      break;
    case 2:
      return "scissors"
      break;
    default:
      return 'Computer Error.'
      break;
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice===computerChoice){
    return "The game is a tie! You chose the same item as the computer!"
	}else{
    if (userChoice==='rock'){
      if(computerChoice === 'paper'){
        return "I'm sorry. You lost the game."
      }else{
        return "Woohoo! You defeated the computer!"
      }
    }else if (userChoice === "paper"){
      if(computerChoice === "scissors"){
        return "I'm sorry. You lost the game."
      }else{
        return "Woohoo! You defeated the computer!"
      }
    }else if (userChoice === "scissors"){
      if(computerChoice === "rock"){
        return "I'm sorry. You lost the game."
      }else{
        return "Woohoo! You defeated the computer!"
      }
    }else if(userChoice === "bomb"){
      return "You bombed the computer! It lost!"
    }
  }
}

const playGame = function(){
  let userChoice = getUserChoice('rock')
  let computerChoice = getComputerChoice()
  if(userChoice === "bomb"){
    console.log("You bombed the computer!");
    console.log(`The computer's choice was ${computerChoice}.`)
  }else{
      console.log(`Your choice was ${userChoice}.`)
    console.log(`The computer's choice was ${computerChoice}.`)
  }
  console.log(determineWinner(userChoice, computerChoice))
  
}

}