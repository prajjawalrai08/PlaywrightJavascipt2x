var a = 10; // Global scope
console.log(a); // 10

//Defination of function
function printHello() {
    console.log("Hello from function");
    var a = 20; // Local scope of the function, this 'a' is different from the global 'a'
    console.log(a); // 20 local scope
    if (true) {
        var a = 30; // This will override the previous 'a' in the function scope, because var is function scoped
        console.log(a); // 30
    }
    console.log("F is-->", a); // 30, because the 'a' inside the function is now 30
}
