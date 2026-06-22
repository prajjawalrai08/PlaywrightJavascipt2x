// let - Block Scoped
let a = 10;

let retryCount = 0;
retryCount = retryCount + 1; // reassigning is allowed for let
retryCount = retryCount + 1;
console.log("Retry Count:", retryCount);

// let retryCount = 5; // redeclaration is not allowed for let, this will throw an error

let(testStatus === "pending");{
    let executionTime = 1200;
    console.log("Inside block, execution time:", executionTime); //1200
}

console.log(executionTime); // ReferenceError: executionTime is not defined, because execution

//
// {}  -block scoped, so it is not accessible outside the block
 //if(){}
// function name(){}

// let==trust worthy, loyal, block scoped, no redeclaration
// var==trump, not trust worthy, dual faced, flipper/ varaible