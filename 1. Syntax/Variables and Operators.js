//Variables
var name = "john";
console.log(name);

var lastName = "Smith";
console.log(lastName);

var age = 28;
console.log(age);

var fullAge = true;
console.log(fullAge);

// JS automatically converts datatype depending on the senairo
var name = "john";
var age = 28;
console.log(age + age);
console.log(name + age);

// Undefined variable
var job;
console.log(job);

job = 'IT';
console.log(job);


// Given 3 sides of a triangle, find the Area and the Perimeter

console.log("Given 3 sides of a triangle, find the Area and the Perimeter");

var side1 = 5; 
var side2 = 6; 
var side3 = 7; 

console.log("side1 : " + side1);
console.log("side2 : " + side2);
console.log("side3 : " + side3);

var perimeter = (side1 + side2 + side3)/2;

console.log("Perimeter : " + perimeter);


var area =  Math.sqrt(perimeter * ((perimeter - side1) * (perimeter - side2) * (perimeter - side3)));

console.log("Area : " + area);