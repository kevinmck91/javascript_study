//debugger;

function reverseText(){

//fetches the element from the html that is to be changed
var string = document.getElementById("text").innerHTML

//Log the initial string
console.log(string);				

//create an array of all the letter
var arr = string.split("");			

//reverse the array
arr = arr.reverse();				
	
//convert back to string
var newString = arr.toString()		

//replace the commas with spaces
var finalString =  newString.replace(/,/g,"");	

//Log the final string
console.log(finalString);

//Sets the element in the html to assignemnt
document.getElementById("text").innerHTML = finalString;

}