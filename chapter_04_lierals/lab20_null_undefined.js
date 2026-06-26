// Difference between null and undefined in JavaScript

console.log("=== NULL vs UNDEFINED ===\n");

// 1. UNDEFINED - automatically assigned when variable is declared but not initialized
let undefinedVar;
console.log("1. Undefined (not initialized):");
console.log("let undefinedVar;");
console.log("Value:", undefinedVar); // undefined
console.log("Type:", typeof undefinedVar); // undefined
console.log();

// 2. NULL - intentionally assigned to represent "no value"
let nullVar = null;
console.log("2. Null (intentionally assigned):");
console.log("let nullVar = null;");
console.log("Value:", nullVar); // null
console.log("Type:", typeof nullVar); // object (this is a JavaScript quirk/bug)
console.log();

// 3. Function returns undefined by default if no return statement
function noReturn() {
  let result;
  // no return statement
}
console.log("3. Function with no return statement:");
console.log("Result:", noReturn()); // undefined
console.log();

// 4. Function explicitly returns null
function returnNull() {
  return null;
}
console.log("4. Function returning null explicitly:");
console.log("Result:", returnNull()); // null
console.log();

// 5. Missing function parameter defaults to undefined
function greet(name) {
  console.log("Hello", name);
}
console.log("5. Missing function parameter:");
greet(); // Hello undefined
console.log();

// 6. Equality comparison
console.log("6. Equality Comparison:");
console.log("null == undefined:", null == undefined); // true (loose equality)
console.log("null === undefined:", null === undefined); // false (strict equality)
console.log();

// 7. Checking for null or undefined
let value = null;
console.log("7. Checking for null or undefined:");
console.log("value == null:", value == null); // true (catches both null and undefined)
console.log("value === null:", value === null); // true (only null)
console.log();

// 8. Common use cases
console.log("8. Common Use Cases:");

// Undefined: variable declared but not assigned
let user;
console.log("Undefined use: user =", user); // undefined (not initialized)

// Null: intentional "empty" value (e.g., from API, database, or explicit assignment)
let userFromDatabase = null; // might be fetched from a database
console.log("Null use: userFromDatabase =", userFromDatabase); // null (intentionally empty)
console.log();

// 9. Truthiness - both are falsy
console.log("9. Truthiness (both are falsy):");
console.log("Boolean(undefined):", Boolean(undefined)); // false
console.log("Boolean(null):", Boolean(null)); // false
console.log("!undefined:", !undefined); // true
console.log("!null:", !null); // true
