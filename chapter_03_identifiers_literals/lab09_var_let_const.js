var v = 10;
let l = 30;
const c = 3.14;

var browser = "chrome";
var browser = "firefox"; // redeclaration is allowed for var
browser = "edfe";        // reassigning is allowed for var

// for, functions

var testcases = ["login", "logout", "signup"];

for (var i = 0; i < testcases.length; i++) {
    console.log("Running test:", testcases[i]);
}
console.log("loop counter leaked outside:", + i);

console.log("Hi");
console.log("Hi");
console.log("Hi");

function say(){
    console.log("Hi from function");
}

say();
say();