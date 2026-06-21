// lab06_identifier_rules.js
// Examples of different identifier naming conventions in JavaScript

// 1. camelCase: common for variable and function names
let userName = "Alice";
let totalPrice = 49.99;
function calculateTax(amount) {
    return amount * 0.08;
}

// 2. PascalCase: common for constructor functions and classes
class ShoppingCart {
    constructor(ownerName) {
        this.ownerName = ownerName;
        this.items = [];
    }
}

// 3. snake_case: sometimes used in constants or legacy code
const max_items_allowed = 20;
const api_response_code = 200;

// 4. kebab-case: not valid for JavaScript identifiers, only for file or CSS names
// const user-name = "Bob"; // invalid syntax

// 5. UPPER_SNAKE_CASE: common for environment constants
const MAX_CONNECTIONS = 10;
const DEFAULT_TIMEOUT_MS = 5000;

// 6. mixedCase / lowerCamelCase: same as camelCase
let itemCount = 3;
let orderTotal = 129.95;

// 7. underscore prefix: sometimes used for private/internal fields
let _internalId = 1234;

// 8. dollar sign prefix/suffix: valid but should be used carefully
let $price = 15.0;
let total$ = 45.0;

// 9. valid identifier rules examples
let $validName = true;
let _alsoValid = true;
let name123 = "valid";
// let 1name = "invalid"; // invalid: cannot start with a digit
// let user-name = "invalid"; // invalid: hyphen not allowed
// let break = "invalid"; // invalid: reserved keyword

console.log("camelCase:", userName, totalPrice);
console.log("PascalCase:", new ShoppingCart("Alice"));
console.log("snake_case:", max_items_allowed, api_response_code);
console.log("UPPER_SNAKE_CASE:", MAX_CONNECTIONS, DEFAULT_TIMEOUT_MS);
console.log("prefix/suffix:", _internalId, $price, total$);
console.log("valid identifiers:", $validName, _alsoValid, name123);
