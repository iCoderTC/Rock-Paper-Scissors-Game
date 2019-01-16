window.onload = function() {
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");

function getComputerChoice() {
var choices = ['r','p','s'];
var randomNumber = Math.floor(Math.random() * 3);
return choices[randomNumber];
}

function game(userChoice) {
 const computerChoice = getComputerChoice();
 switch (userChoice + computerChoice) {
	 case "rs":
	 case "pr":
	 case "sp":
	 alert("You win!");
	break;
	 case "rp":
	 case "ps":
	 case "sr":
	 alert("You lose!");
	break;
	 case "rr":
	 case "pp":
	 case "ss":
	 alert("Its a draw!");
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