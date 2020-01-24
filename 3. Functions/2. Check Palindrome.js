function check_palindrome(){

	var string = document.getElementById("pal").value;
	console.log("input : " + string);
	
	var reverse = string.split("").reverse().join("");
	console.log("reverse : " + reverse);
	
	if(string === reverse){
		
		document.getElementById('result').innerHTML = "Palindrome";
	
	}	else{
		
		document.getElementById('result').innerHTML = "Not A Palindrome";
	
	}
	
}