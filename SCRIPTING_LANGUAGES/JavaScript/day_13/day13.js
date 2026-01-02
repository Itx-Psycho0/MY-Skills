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
console.log(Number.parseInt('230_000')); // 

// Working with BigInt
console.log(2 ** 53 - 1); // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(2 ** 53 + 1); // 9007199254740992
console.log(2 ** 53 + 2); // 9007199254740994
console.log(2 ** 53 + 3); // 9007199254740996
console.log(2 ** 53 + 4); // 9007199254740998
//You can see that after 2**53, the numbers are not accurate anymore so we use BigInt for very large integers

// BigInt can be created by appending n to the end of an integer literal
console.log(2n ** 53n - 1n); // 9007199254740991n
console.log(typeof 9007199254740991n); // bigint
console.log(9007199254740991n + 2n); // 9007199254740993n
console.log(9007199254740991n + 2); // Error: Cannot mix BigInt and other types
console.log(typeof (9007199254740991n + 2n)); // bigint
console.log(10n / 3n); // 3n
console.log(10 / 3); // 3.3333333333333335
// Note: BigInt cannot be used with Math methods and functions
// console.log(Math.sqrt(16n)); // Error

// Exceptions
console.log(20n > 15); // true
console.log(20n === 20); // false
console.log(20n == 20); // true

console.log(10n + 5n); // 15n
// console.log(10n + 5); // Error
console.log(10n * 2n); // 20n
console.log(10n * 2); // Error
console.log(10n - 4n); // 6n
// console.log(10n - 4); // Error
console.log(10n / 2n); // 5n
// console.log(10n / 2); // Error

const huge = 20289830237283728378237n;
const num = 23;
console.log(huge * BigInt(num)); // 465665095456524752099451n
console.log(huge + ' is REALLY big!!!'); // 20289830237283728378237 is REALLY big!!!

// Creating Dates
const now = new Date();
console.log(now); // 2023-06-15T12:34:56.789Z (example output)

console.log(new Date('June 15, 2023 10:20:30')); // 2023-06-15T10:20:30.000Z
console.log(new Date('2023-06-15T10:20:30Z')); // 2023-06-15T10:20:30.000Z
console.log(new Date(2023, 5, 15, 10, 20, 30));; // 2023-06-15T10:20:30.000Z (month is 0-indexed)
console.log(new Date(0)); // 1970-01-01T00:00:00.000Z (Unix epoch)

console.log(new Date(30 * 24 * 60 * 60 * 1000)); // 1970-01-31T00:00:00.000Z (30 days after epoch)

// Working with Dates
const future = new Date(2023, 11, 25, 10, 30, 0);
console.log(future); // 2023-12-25T10:30:00.000Z
console.log(future.getFullYear()); // 2023
console.log(future.getMonth()); // 11 (December, 0-indexed)
console.log(future.getDate()); // 25
console.log(future.getDay()); // 1 (Monday, 0=Sunday)
console.log(future.getHours()); // 10
console.log(future.getMinutes()); // 30
console.log(future.getSeconds()); // 0
console.log(future.toISOString()); // 2023-12-25T10:30:00.000Z
console.log(future.getTime()); // 1703490600000 (milliseconds since epoch)

future.setFullYear(2024);
console.log(future); // 2024-12-25T10:30:00.000Z
future.setMonth(0);
console.log(future); // 2024-01-25T10:30:00.000Z
future.setDate(1);
console.log(future); // 2024-01-01T10:30:00.000Z    
future.setHours(0);
console.log(future); // 2024-01-01T00:30:00.000Z
future.setMinutes(0);
console.log(future); // 2024-01-01T00:00:00.000Z
future.setSeconds(0);
console.log(future); // 2024-01-01T00:00:00.000Z
console.log(Date.now()); // current timestamp in milliseconds since epoch
// Date.now() is a faster way to get current timestamp than new Date().getTime()

// What is epoch?
// The epoch is the point where the time starts and is platform dependent
// For JavaScript, the epoch is January 1, 1970 00:00:00 UTC
// Timestamps are measured in milliseconds since the epoch

// Operations with Dates
const date1 = new Date(2023, 0, 1);
const date2 = new Date(2023, 5, 15);
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
console.log(diffDays); // 165

// Internationalizing Dates and Numbers
const nowDate = new Date();
// const formatDateUS = new Intl.DateTimeFormat('en-US').format(nowDate);
// console.log(formatDateUS); // MM/DD/YYYY format
//ISO language code table where you can find codes for different languages and countries

const options = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'long',
};

const locale = navigator.language;
console.log(locale);


const formatDateUS = new Intl.DateTimeFormat('en-US',options).format(nowDate);
console.log(formatDateUS); // e.g., "Thursday, June 15, 2023 at 12:34 PM"

const formatDateIN = new Intl.DateTimeFormat('hi-IN',options).format(nowDate);
console.log(formatDateIN); // e.g., "गुरुवार, 15 जून 2023, 12:34 अपराह्न"

// Internationalizing Numbers
const number = 1234567.89;


const formatNumberUS = new Intl.NumberFormat('en-US').format(number);
console.log(formatNumberUS); // "1,234,567.89"
console.log(typeof formatNumberUS); // string

const num2 = 3884764.23;

const option2 = {
  style: 'currency',
  unit: 'celsius',
  currency: 'EUR',
  // useGrouping: false,
};

console.log('US:      ', new Intl.NumberFormat('en-US', option2).format(num2));
console.log('Germany: ', new Intl.NumberFormat('de-DE', option2).format(num2));
console.log('Syria:   ', new Intl.NumberFormat('ar-SY', option2).format(num2));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, option2).format(num2)
);


// Timers: setTimeout and setInterval
// setTimeout
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
  3000,
  ...ingredients
);
console.log('Waiting...');

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// setInterval
// setInterval(() => {
//     const now = new Date();
//     console.log(now);
// }, 1000);
// The above code will log the current date and time every second
// To stop the interval, you can use clearInterval with the interval ID returned by setInterval

// ============= End of Day 13 =============//