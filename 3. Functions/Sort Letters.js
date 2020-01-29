function sort_letters(){

	var string  = document.getElementById("input").value;
	console.log(string);

	var array = string.split("").sort();
	console.log(array);

	var string2 = "";

	for(var i = 0; i < array.length; i++){

		string2 +=  array[i];

	}

	document.getElementById('result1').innerHTML = string2;
	
	document.getElementById('result2').innerHTML = array.toString();
	
	
}