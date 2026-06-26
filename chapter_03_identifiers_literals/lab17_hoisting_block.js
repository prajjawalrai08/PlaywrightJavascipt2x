// let is Blocked Scoped, so it is not accessible outside the block

let x ='Global'
if (true) {
    // TDZ for block -scoped "x" starts here
    //console.log(x); // ReferenceError: Cannot access 'x' before initialization (not global)
    let x = 'block'; // TDZ ends here
    console.log(x); // block
}
console.log(x); // Global, because the block-scoped "x" is not accessible outside the block