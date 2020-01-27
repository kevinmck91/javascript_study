
// Declaring Arrays

// JavaScript variables can be objects. Arrays are special kinds of objects. 
// Because of this, you can have variables of different types in the same Array.

var stringArray1 = ["Saab", "Volvo", "BMW"];

var intArray = [1,2,3,4,5,6,7,8,9];

// The new keyword only complicates the code.
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




/** Array Methods **/

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
console.log("Popped : " + x);

// push()
console.log("fruits.push() : " + fruits.push("Kiwi"));
console.log("fruits : " + fruits);

// shift() - The shift() method removes the first array element and "shifts" all other elements to a lower index.
var x = fruits.shift(); 
console.log("fruits.shift() : " + fruits );
console.log("Shifted : " + x);

// unshift() - The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
fruits.unshift("Lemon");
console.log("fruits.unshift(Lemon); : " + fruits );

// length
console.log("fruits.length : " + fruits.length)

// isArray()
console.log("Array.isArray(fruits) : " + Array.isArray(fruits))

// Delete
delete fruits[0];           // Changes the first element in fruits to undefined
console.log("fruits (after delete[0]) : " + fruits);
console.log(" ");




/** Sorting Array **/

var colours = ["Red", "Orange", "yellow", "Green", "black", "white"];
var colours = ["Red", "Orange", "yellow", "Green", "black", "white"];
var numbers = [6,3,4,8,6,9,2,1];
var mixed = [6,3,4,2,1,"Red", "Orange", "yellow", "Green", "black", "white" , 8,6,9];

// sort();
console.log("colours.sort() : " + colours.sort());  //Uppercase letters are sorted before lowercase
console.log("numbers.sort() : " + numbers.sort());
console.log("mixed.sort() : " + mixed.sort());

// reverse();
console.log("colours.reverse() : " + colours.reverse());
console.log("numbers.reverse() : " + numbers.reverse());
console.log("mixed.reverse() : " + mixed.reverse());

// Math.max.apply()
console.log("Math.max.apply() : " + Math.max.apply(null, numbers));

// Math.min.apply()
console.log("Math.min.apply() : " + Math.min.apply(null, numbers));

// TODO: complete sorting definitions.




/** Iterating over Methods **/


// .forEach() - calls the provided function once for each element of the array
// .forEach() is a method of the array Object (not a standalone feature)
var numbers = [45, 4, 9, 16, 25];
var copy = [];

numbers.forEach(function(i){

    copy.push(i*i);

});

console.log("after array.forEach : " + copy);


// ForLoop

var myArr = ['cat', 'dog', 'fish'];
var copy = [];

for (i = 0; i < myArr.length; i++) { 
  copy.push(100*i);
}

console.log("after for loop : " + copy);




/** Notes **/
// In JavaScript, arrays use numbered indexes.  
// In JavaScript, objects use named indexes.
// Arrays are a special kind of objects, with numbered indexes.
// JavaScript does not support associative arrays.
