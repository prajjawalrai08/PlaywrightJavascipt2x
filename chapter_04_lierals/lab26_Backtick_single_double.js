// 26_Backtick_single_double.js
// Short example showing the difference between backtick, single quote, and double quote strings

const singleQuote = 'Hello from single quotes';
const doubleQuote = "Hello from double quotes";
const backtick = `Hello from backticks`;

console.log(singleQuote);
console.log(doubleQuote);
console.log(backtick);

// Differences:
// - single quotes: simple string literal
// - double quotes: simple string literal, same as single quotes
// - backticks: template string, can embed expressions like `${1 + 2}` and preserve line breaks
