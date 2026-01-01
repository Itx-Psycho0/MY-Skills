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

// Checking if value is an integer
console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.0)); // true
console.log(Number.isInteger(23/0)); // false

// Math and Rounding
console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5
console.log(8 ** (1 / 3)); // 2

console.log(Math.max(5, 18, 23, 11, 2)); // 23
console.log(Math.min(5, 18, '23', 11, 2)); // 23
console.log(Math.max(5, 18, '23px', 11, 2)); // NaN
console.log(Math.min(5, 18, '23px', 11, 2)); // NaN

console.log(Math.PI); // 3.141592653589793
console.log(Math.PI * Number.parseFloat('10px') ** 2); // Area of circle with radius 10px

console.log(Math.random() * 6); // Random integer between 0 and 6
console.log(Math.trunc(Math.random() * 6) + 1); // Random integer between 1 and 6

// Difference between Math.trunc and Math.round and Math.ceil and Math.floor
console.log(Math.trunc(23.7)); // 23
console.log(Math.ceil(23.3)); // 24
console.log(Math.floor(23.7)); // 23
console.log(Math.floor(23.3)); // 23
console.log(Math.trunc(23.3)); // 23
console.log(Math.round(23.3)); // 23
console.log(Math.round(23.7)); // 24
console.log(Math.ceil(-23.3)); // -23
console.log(Math.floor(-23.3)); // -24
console.log(Math.floor(-23.7)); // -24
console.log(Math.trunc(-23.3)); // -23
console.log(Math.round(-23.3)); // -23
console.log(Math.round(-23.7)); // -24

// Rounding Decimal Places
console.log((2.7).toFixed(0)); // "3"
console.log((2.7).toFixed(3)); // "2.700"
console.log((2.345).toFixed(2)); // "2.35"
console.log((2.345).toFixed(5)); // "2.34500"
console.log(typeof (2.345).toFixed(2)); // string
console.log(Number((2.345).toFixed(2))); // 2.35

// Rounding negative numbers
console.log((-2.7).toFixed(0)); // "-3"
console.log((-2.7).toFixed(3)); // "-2.700"
console.log((-2.345).toFixed(2)); // "-2.35"
console.log((-2.345).toFixed(5)); // "-2.34500"
console.log(typeof (-2.345).toFixed(2)); // string
console.log(Number((-2.345).toFixed(2))); // -2.35

// Remainder Operator
console.log(5 % 2); // 1
console.log(5 / 2); // 2.5
console.log(8 % 3); // 2
console.log(8 / 3); // 2.6666666666666665

// Check if a number is even or odd
console.log(6 % 2 === 0); // true
console.log(7 % 2 === 0); // false

// Numeric Separators
const diameter = 287_460_000_000;
console.log(diameter); // 287460000000
const priceCents = 345_99;
console.log(priceCents); // 34599

const transferFeeCents = 15_00;
console.log(transferFeeCents); // 1500
const PI = 3.14_15;
console.log(PI); // 3.1415
const largeNum = 2_345_678.901_234;
console.log(largeNum); // 2345678.901234
// Note: Numeric separators cannot be used at the beginning or end of a number, or next to a decimal point
// const invalidNum = _2345; // Syntax Error
// const invalidNum2 = 2345_; // Syntax Error
// const invalidNum3 = 2345._67; // Syntax Error
// const invalidNum4 = 2345_.67; // Syntax Error

console.log(Number('230_000')); // NaN
console.log(+('230_000')); // NaN
console.log(parseInt('230_000')); // 230
console.log(parseFloat('2.30_000')); // 2.3
console.log(Number.parseInt('230_000')); // 230