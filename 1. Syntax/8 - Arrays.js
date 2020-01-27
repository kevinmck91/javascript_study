
// Declaring Arrays

// JavaScript variables can be objects. Arrays are special kinds of objects. 
// Because of this, you can have variables of different types in the same Array.

var stringArray1 = ["Saab", "Volvo", "BMW"];

var intArray = [1,2,3,4,5,6,7,8,9];

var stringArray2 = new Array("Blue", "Green", "Yellow", "Red");

var mixedArray = ['a', 'b', 'c', "str1", "str2", 45, 34, 76];

var objectArray = {firstName:"John", lastName:"Doe", age:46};

console.log(stringArray1);
console.log(intArray);
console.log(stringArray2);
console.log(mixedArray);
console.log(objectArray);
console.log(" ");

// Arrays are a special type of objects.

console.log(objectArray[0]);
console.log(objectArray.lastName);
console.log(" ");

// Array Methods " : " +

var fruits = ["Banana", "Orange", "Apple", "Mango"];

// toString()
console.log("fruits : " + fruits);
console.log("fruits.toString() : " + fruits.toString());

// join()
console.log("fruits.join() : " + fruits.join());
console.log("fruits.join( ** ) : " + fruits.join(" $$$ "));
console.log("fruits.join() : " + fruits.join(""));

// pop()
var x = fruits.pop(); 
console.log("fruits.pop() : " + fruits );
console.log("x : " + x);

// push()
console.log("fruits.push() : " + fruits.push("Kiwi"));
console.log("fruits : " + fruits);

// To be continued
