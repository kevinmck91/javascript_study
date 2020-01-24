
//Accessing objects
	var myFirstObject = 
		{
		firstName: "Richard", 
		favoriteAuthor: "Conrad"
		};
		
	console.log(myFirstObject.firstName);

	var ageGroup = 
		{
		30: "Children", 
		100:"Very Old"
		};
		
	console.log(ageGroup["30"]);


//Primitive Data Types

	​var person = "Kobe";  			//string is stored as a VALUE
	​var anotherPerson = person; 	//anotherPerson assumes the VALUE that is person
	person = "Bryant";				//VALUE changes only
	​
	console.log(anotherPerson); // Kobe​
	console.log(person); // Bryant


//Reference Data Type

	var person2 = {name: "Kobe"};		//person2 points to an object stored as a REFERENCE
	​var anotherPerson2 = person2;		//anotherPerson2 points to the same REFERENCE
	person2.name = "Bryant";
	​
	console.log(anotherPerson2.name); // Bryant​
	console.log(person2.name); // Bryant


/*
Each data property (object property that store data) has not only the name-value pair, but also 3 attributes (the three attributes are set to true by default):
— Configurable Attribute: Specifies whether the property can be deleted or changed.
— Enumerable: Specifies whether the property can be returned in a for/in loop.
— Writable: Specifies whether the property can be changed.
*/


// These are the two common ways to create objects

	// 1. Object Literals
	var mango = {
		color: "yellow",
		shape: "round",
	​	howSweetAmI: function () {
			console.log("Hmm Hmm Good");
		}
		sweetness: 8,
	}

	// 2. Object Constructor

	var mango =  new Object ();

		mango.color = "yellow";
		mango.shape= "round";
		mango.sweetness = 8;
		mango.howSweetAmI = function () {
			console.log("Hmm Hmm Good");
		}

	
// Practical Patterns for Creating Objects

	// 1. Constructor Pattern for Creating Objects
		// This function allows you to create an object (the function is encapuslated)
		function Fruit (theColor, theSweetness, theFruitName, theNativeToLand) {
	​
			this.color = theColor;
			this.sweetness = theSweetness;
			this.fruitName = theFruitName;
			this.nativeToLand = theNativeToLand;
			
			this.showName = function () {
				console.log("This is a " + this.fruitName);
			}
		​
			this.nativeTo = function () {
				this.nativeToLand.forEach(function (eachCountry)  {
				   console.log("Grown in:" + eachCountry);
					});
			}
		}
		
		//Using this pattern
		
		var mangoFruit = new Fruit ("Yellow", 8, "Mango", ["South America", "Central America", "West Africa"]);
		mangoFruit.showName(); 		// This is a Mango.​
		mangoFruit.nativeTo();​		//Grown in:South America​ , Grown in:Central America​ , Grown in:West Africa​
		
		​var pineappleFruit = new Fruit ("Brown", 5, "Pineapple", ["United States"]);
		pineappleFruit.showName(); // This is a Pineapple.
	
	
	// 2. Prototype Pattern for Creating Objects
		//The fruit function is called and every fruit is the same
		//All object inherit methods from the Object.prototype eg. toString
		function Fruit () {
​		}
		​
		Fruit.prototype.color = "Yellow";
		Fruit.prototype.sweetness = 7;
		Fruit.prototype.fruitName = "Generic Fruit";
		Fruit.prototype.nativeToLand = "USA";
		​
		Fruit.prototype.showName = function () {
		console.log("This is a " + this.fruitName);
		}
		​
		Fruit.prototype.nativeTo = function () {
					console.log("Grown in:" + this.nativeToLand);
		}
		
		//Using this pattern
		
		var mangoFruit = new Fruit ();
		mangoFruit.showName(); 		​​// This is a Generic Fruit​
		mangoFruit.nativeTo();​		// Grown in:USA
		
		
		
	// Inheritance
		// The "in" keyword defines if a property exists on an object (by creation or inheritance)
		​var school = {schoolName:"MIT"};
		console.log("schoolName" in school);  // true​
		console.log("schoolType" in school);  // false​
		console.log("toString" in school);    // true
		
		//"hasOwnProperty" defines if a property exists but is not inherited
		var school = {schoolName:"MIT"};
		console.log(school.hasOwnProperty ("schoolName"));  // true​
		console.log(school.hasOwnProperty ("toString"));  // false 
		
		
		
	//Deleting a property	
		//You cannot delete properties that were inherited, nor can you delete properties with their attributes set to configurable
		
		var christmasList = {mike:"Book", jason:"sweater" }
​		delete christmasList.mike; // deletes the mike property​
		delete christmasList.toString; // returns true, but toString not deleted because it is an inherited method
		
		
	//Serialize (convert from object to a string)
		//use the JSON.stringify function to serialize your objects
		
		var christmasList = {mike:"Book", jason:"sweater", chelsea:"iPad" }
		JSON.stringify (christmasList);				// "{"mike":"Book","jason":"sweater","chels":"iPad"}"
		JSON.stringify (christmasList, null, 4);	//To print a stringified object with formatting
		
	//Deserialize Objects (convert from string to an object)
		​var christmasListStr = '{"mike":"Book","jason":"sweater","chels":"iPad"}';
		​var christmasListObj = JSON.parse (christmasListStr); 
		
		