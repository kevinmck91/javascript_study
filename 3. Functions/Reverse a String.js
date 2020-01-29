debugger;

// Method 1
function reverse_Number(){

	var number = document.getElementById('number').innerHTML;
	var string = String(number);
	var splitString = string.split("");
	var reverseArray = splitString.reverse();
	var joinArray = reverseArray.join("");
	var reverseNumber = Number(joinArray);

	document.getElementById('number').innerHTML = reverseNumber;

}

// Method 2
function reverse_a_number(){
	
	var number = document.getElementById('number2').innerHTML
	number = number + "";
	reverseNumber = number.split("").reverse().join("");
	
	document.getElementById('number2').innerHTML = reverseNumber;
}