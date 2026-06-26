// lab35_confusing_comparison.js
// Examples showing the difference between == and === in JavaScript

console.log('=== == vs === examples ===');

const num = 5;
const str = '5';
const boolTrue = true;

console.log('num == str ->', num == str);   // true because values are converted to same type
console.log('num === str ->', num === str); // false because type is different

console.log('num == true ->', num == boolTrue);   // true because true converts to 1, but 5 != 1 -> false
console.log('str == true ->', str == boolTrue);   // true because '5' converts to 5 and true converts to 1 -> false
console.log('1 == true ->', 1 == true);   // true because types convert and value matches
console.log('1 === true ->', 1 === true); // false because types differ

console.log('null == undefined ->', null == undefined);   // true in loose equality
console.log('null === undefined ->', null === undefined); // false in strict equality

console.log('0 == false ->', 0 == false);   // true because false converts to 0
console.log('0 === false ->', 0 === false); // false because types differ

console.log('=== Summary ===');
console.log('== does type conversion before comparison');
console.log('=== checks both value and type without conversion');
