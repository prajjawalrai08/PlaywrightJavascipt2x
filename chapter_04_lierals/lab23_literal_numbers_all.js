// lab23_literal_numbers_all.js
// Overview of number types and numeric literals in JavaScript

console.log('=== JavaScript Number Types & Literals ===\n');

// 1) The primary numeric type: Number (IEEE 754 double precision)
let intNum = 42;
let floatNum = 3.1415;
console.log('Number examples:');
console.log('intNum =', intNum, ', typeof ->', typeof intNum);
console.log('floatNum =', floatNum, ', typeof ->', typeof floatNum);
console.log();

// 2) Numeric literal formats
console.log('Numeric literal formats:');
console.log('Decimal:', 255);
console.log('Hexadecimal 0xFF ->', 0xFF);
console.log('Binary 0b1010 ->', 0b1010);
console.log('Octal 0o77 ->', 0o77);
console.log('Exponential 1e3 ->', 1e3);
console.log('Numeric separator 1_000_000 ->', 1_000_000);
console.log();

// 3) Special numeric values
console.log('Special numeric values:');
console.log('Infinity:', Infinity, ', typeof ->', typeof Infinity);
console.log('-Infinity:', -Infinity);
console.log('NaN (result of invalid numeric operation):', NaN, ', typeof ->', typeof NaN);
console.log('NaN isNaN ->', isNaN(NaN), ', Number.isNaN ->', Number.isNaN(NaN));
console.log();

// 4) Safe integer limits and checks
console.log('Safe integer checks:');
console.log('Number.MAX_SAFE_INTEGER ->', Number.MAX_SAFE_INTEGER);
console.log('Number.MIN_SAFE_INTEGER ->', Number.MIN_SAFE_INTEGER);
console.log('Number.isSafeInteger(9007199254740991) ->', Number.isSafeInteger(9007199254740991));
console.log('Number.isSafeInteger(9007199254740992) ->', Number.isSafeInteger(9007199254740992));
console.log();

// 5) BigInt (for integers beyond the safe integer range)
console.log('BigInt examples:');
let big = 9007199254740993n; // note the trailing n
console.log('big =', big, ', typeof ->', typeof big);
console.log('big + 2n =', big + 2n);
console.log();

// 6) Converting and parsing numbers
console.log('Parsing and conversions:');
console.log("parseInt('10') ->", parseInt('10'));
console.log("parseFloat('3.14') ->", parseFloat('3.14'));
console.log("Number('123') ->", Number('123'));
console.log("+'123' ->", +'123');
console.log();

// 7) toString with radix
console.log('toString with radix:');
console.log('(255).toString(16) ->', (255).toString(16));
console.log('(10).toString(2) ->', (10).toString(2));
console.log();

// 8) Common pitfalls
console.log('Common pitfalls and notes:');
console.log('0.1 + 0.2 ->', 0.1 + 0.2, '(floating point precision)');
console.log("typeof NaN ->", typeof NaN, '(NaN is of type "number")');
console.log('Division by zero 1/0 ->', 1/0);
console.log();

console.log('=== End of lab23_literal_numbers_all.js ===');
