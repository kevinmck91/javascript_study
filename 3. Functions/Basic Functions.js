// ** Functions ** //

/*  Functions are function objects. In JavaScript, anything that is not a primitive type ( undefined, null,boolean, number, or string) is an object.
    When a function accepts another function as a parameter, or returns a function, it is called a higher-order function.
    Function definitions are hoisted — expressions are not.
    Functions always return a value. In JavaScript, if no return value is specified, the function will return undefined.

*/



// A Function Declaration defines a named function
// When using function declarations, the function definition is hoisted, thus allowing the function to be used before it is defined.
function func1(parameter1){
  console.log("func1 has run : " + parameter1);
}



// A Function Expressions defines a named or anonymous function
// Function Expressions are not hoisted, and therefore cannot be used before they are defined.
var func2 = function(parameter2){
    console.log("func2 has run : " + parameter2);
    return null;
}


// An Arrow Function Expression is a shorter syntax for writing function expressions.
// Arrow functions do not create their own this value.
var func3 = (parameter3) => {
    console.log("func3 has run : " + parameter3);
    return "Return Statement";
}

console.log("\n");

// Every function in JavaScript returns undefined unless otherwise specified.

func1("input");
func2(12345);
func3()
console.log("\n");

console.log(func1());
console.log(func2());
console.log(func3());
console.log("\n");



