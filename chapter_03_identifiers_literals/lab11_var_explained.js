var a = 10; // global scope

// var is function scoped, so it is accessible outside the for loop


console.log(a); // global scope

function printHello() {
    console.log("Hello from function");
    var a = 20; // local scope of the function, this 'a' is different from the global 'a'
    console.log(a);

    if (true) {
        var a = 30; // this will override the previous 'a' in the function scope
        console.log(a); // this will print 30
    }

}

printHello();

// var==trump, not trust worthy, dual faced, flipper