function randomise(){


for(var i = 0; i < 9; i++){
//debugger;


	if ( document.getElementById(i).className.match(/(?:^|\s)panel-default(?!\S)/) ){
		document.getElementById(i).classList.remove('panel-default');
		var randomNumber = Math.floor(Math.random() * 6);
		var assignedColour = assignColour(randomNumber);
		document.getElementById(i).className += " ";
		document.getElementById(i).className += assignedColour;
		continue;
	};
	
	if ( document.getElementById(i).className.match(/(?:^|\s)panel-primary(?!\S)/) ){
		document.getElementById(i).classList.remove('panel-primary');
		var randomNumber = Math.floor(Math.random() * 6);  
		var assignedColour = assignColour(randomNumber);
		document.getElementById(i).className += " ";
		document.getElementById(i).className += assignedColour;
		continue;
	};
	
	if ( document.getElementById(i).className.match(/(?:^|\s)panel-success(?!\S)/) ){
		document.getElementById(i).classList.remove('panel-success');
		var randomNumber = Math.floor(Math.random() * 6);
	var assignedColour = assignColour(randomNumber);		
	document.getElementById(i).className += " ";
		document.getElementById(i).className += assignedColour;
		continue;
	};
	
	if ( document.getElementById(i).className.match(/(?:^|\s)panel-info(?!\S)/) ){
		document.getElementById(i).classList.remove('panel-info');
		var randomNumber = Math.floor(Math.random() * 6); 
		var assignedColour = assignColour(randomNumber);		
		document.getElementById(i).className += " ";
		document.getElementById(i).className += assignedColour;
		continue;
	};
	
	if ( document.getElementById(i).className.match(/(?:^|\s)panel-warning(?!\S)/) ){
		document.getElementById(i).classList.remove('panel-warning');
		var randomNumber = Math.floor(Math.random() * 6); 
		var assignedColour = assignColour(randomNumber);
		document.getElementById(i).className += " ";
		document.getElementById(i).className += assignedColour;	
		continue;
	};
	
	if ( document.getElementById(i).className.match(/(?:^|\s)panel-danger(?!\S)/) ){
		document.getElementById(i).classList.remove('panel-danger');
		var randomNumber = Math.floor(Math.random() * 6); 
		var assignedColour = assignColour(randomNumber);
		document.getElementById(i).className += " ";
		document.getElementById(i).className += assignedColour;
		continue;
	};
	

};
	
};



function assignColour(randomNumber){

	if(randomNumber === 0){
	return "panel-default"
	}

	if(randomNumber === 1){
	return "panel-primary"
	}

	if(randomNumber === 2){
	return "panel-info"
	}

	if(randomNumber === 3){
	return "panel-warning"
	}

	if(randomNumber === 4){
	return "panel-danger"
	}

	if(randomNumber === 5){
	return "panel-success"
	}


}

