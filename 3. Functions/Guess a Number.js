
var computerNumber = Math.floor(Math.random() * 10);

console.log(computerNumber);

// Given a random number, input until you guess the right number

function myFunction(){

	var guessNumber = document.getElementById('txt').value;
	
	if(guessNumber == computerNumber){
		document.getElementById("result").innerHTML = "Correct"
	}

	if(guessNumber != computerNumber){
		document.getElementById("result").innerHTML = "Try Again"
	}

}