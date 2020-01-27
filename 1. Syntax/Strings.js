

var carName1 = "Volvo XC60";
var carName2 = 'Volvo XC60';

//// String Methods

var constructor = carName1.constructor;
console.log("carName1.constructor; : " + carName1.constructor);

var length = carName1.length;
console.log("carName1.length; : " + length);

var charAt = carName1.charAt(0);
console.log("carName1.charAt(0); : " + charAt);

var endsWith = carName1.endsWith();
console.log("carName1.endsWith(); : " + endsWith);

var concat = carName1.concat(carName2);
console.log("carName1.concat(carName2); : " + concat);

var slice  = carName1.slice(0, 5);
console.log("carName1.slice(0, 5); : " + slice);

var array = carName2.split();
console.log("carName2.split(); : " + array);
console.log("typeof(carName2.split()); : " + typeof(carName2.split()));

var toLowerCase = carName1.toLowerCase();
console.log("carName1.toLowerCase(); : " + toLowerCase);

var toUpperCase = carName1.toUpperCase();
console.log("carName1.toUpperCase(); : " + toUpperCase);

var valueOf = carName1.valueOf();
console.log("carName1.valueOf(); : " + valueOf);





