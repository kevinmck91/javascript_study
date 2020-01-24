function solve(){

	clear();

	var base = document.getElementById("base").value;
	var power = document.getElementById("power").value;

	var multiple = base;

	for(var i = 0; i < power; i++){

		if(i>0){
			base = base*multiple	
		}
		
		// Create the element but dont assign it anywhere, assign class to element
		var para = document.createElement("p");
		para.classList.add("answer");

		// a block of text is called a node. Create it and assign it to the element
		var node = document.createTextNode(base);
		para.appendChild(node);

		// Append the New element and text to the 
		var element = document.getElementById("result");
		element.appendChild(para);

	}


}

function clear(){

	var elements = document.getElementsByClassName("answer");
	
	while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
	}

}