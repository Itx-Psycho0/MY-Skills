//------------- Day 13 -------------//
// Numbers, Dates, Internationalization and Timers in JavaScript

// Converting and Checking Numbers
// In js every number is represented as a floating point number
console.log(23===23.0); // true

// Base 10 - 0 to 9
// Binary base 2 - 0 1
console.log(0.1 + 0.2); // 0.30000000000000004
// To fix floating point precision issues, use toFixed method
console.log((0.1 + 0.2).toFixed(2)); // "0.30"
console.log(Number((0.1 + 0.2).toFixed(2))); // 0.3

// why 0.1 + 0.2 is not exactly 0.3?
// Because 0.1 and 0.2 cannot be precisely represented in binary floating point
// So when they are added, the result is slightly off from the expected value
// This is a common issue in many programming languages that use binary floating point representation

// Converting strings to numbers
console.log(Number('23'));
console.log(+'23'); // unary plus operator

// Parsing numbers from strings
console.log(Number.parseInt('30px', 10)); // 30
console.log(Number.parseInt('e23',10)); // NaN
console.log(Number.parseInt('2.5rem', 10)); // 2
console.log(Number.parseFloat('2.5rem')); // 2.5

// Parsing also ignores leading and trailing whitespace
// also we can use global parseInt and parseFloat functions
//console.log(parseFloat('  2.5rem  ')); // 2.5

// Checking if value is NaN
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN(+'20X')); // true
console.log(Number.isNaN('20X')); // false
console.log(Number.isNaN(23 / 0)); // false

// Better way to check if value is a number
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite(+'20X')); // false
console.log(Number.isFinite('20X')); // false
console.log(Number.isFinite(23 / 0)); // false