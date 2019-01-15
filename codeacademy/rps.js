window.onload = function() {
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");
var userScore_span = document.getElementById("user-score");
var computerScore_span = document.getElementById("computer-score");
let userScore = 0;
let computerScore = 0;
function getComputerChoice() {
var choices = ['r','p','s'];
var randomNumber = Math.floor(Math.random() * 3);
return choices[randomNumber];
}

function winUser() {
userScore++;
userScore_span.innerHTML = userScore;
}
function winComputer() {
computerScore++;
computerScore_span.innerHTML = computerScore;
}
function draw() {
 alert("It's a draw!");
}
function game(userChoice) {
 const computerChoice = getComputerChoice();
 switch (userChoice + computerChoice) {
	 case "rs":
	 case "pr":
	 case "sp":
	 winUser();
	break;
	 case "rp":
	 case "ps":
	 case "sr":
	 winComputer();
	break;
	 case "rr":
	 case "pp":
	 case "ss":
   draw();
 }
}
	
function main() {
rock.addEventListener("click", function() {
 game("r");
});
paper.addEventListener("click", function() {
 game("p");
});
scissors.addEventListener("click", function() {
 game("s");
});
	}
	
	main();
	
}