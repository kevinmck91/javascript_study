//Variables
var name = "john";
let num = 2;
console.log(name);

var lastName = "Smith";
console.log(lastName);

var age = 28;
console.log(age);

var fullAge = true;
console.log(fullAge);





// Var scope (var can be redifinded, but is not scope dependant)

var x = 10;
var xx = 100;
{
    x = -102;
    var xx = -100;
}
console.log("\nvar Scope : ");
console.log("x : " + x);
console.log("xx : " + xx);


// let scope (let can be redifinded, but is scope dependant)
var y = 20;
let yy = 200;
{
    let y = -20;
    yy = -200;
}
console.log("\nlet Scope : "); " : " +
console.log("y : " + y);
console.log("yy : " + yy);

//const scope (const cant be redefined , is scope dependant)
var z = 30;
const zz = 300;
{
    const z = -30;
    // zz = -300;  //const cant be redefined
}
console.log("\nconst Scope : ");
console.log("z : " + z);
console.log("zz : " + zz);

console.log("");





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

