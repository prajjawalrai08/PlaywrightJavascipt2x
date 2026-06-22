//JS Engine
//LIne by line,  JIT compliation

console.log(greeting); // undefined, because of hoisting, the variable is hoisted but not initialized
var greeting = "Hello, World!"; // variable declaration and initialization

console.log(greeting); // "Hello, World!", now the variable is initialized 

// Behind the scenes:

//var greetings; --- hoisted with undefined
//console.log(greeting); --- undefined
//greeting = "Hello, World!";--- assignment stays in place
//console.log(greeting); // "Hello, World!"

console.log(a);
var a = "Prajjawal";
console.log(a); // "Prajjawal"

