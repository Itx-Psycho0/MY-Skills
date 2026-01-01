console.log("Welcome to Day 1 of Data Structures and Algorithms in JavaScript!");

// SO some prerequisite knowledge

// 1. Variables and Data Types
let number = 42; // Number
let string = "Hello, World!"; // String
let boolean = true; // Boolean
let array = [1, 2, 3, 4, 5]; // Array
let object = { name: "Alice", age: 30 }; // Object
let undef; // Undefined
let nul = null; // Null
console.log(typeof number, typeof string, typeof boolean, typeof array, typeof object, typeof undef, typeof nul);

// 2. Functions
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice"));

// var let and const
var globalVar = "I am a global variable";
let blockVar = "I am a block-scoped variable";
const constantVar = "I cannot be reassigned";
console.log(globalVar, blockVar, constantVar);
// Note: constantVar = "New Value"; // This will throw an error
 // hoisting and temporal dead zone
console.log(hoistedVar); // undefined due to hoisting
var hoistedVar = "I am hoisted";    
// console.log(temporalDeadZoneVar); // Uncommenting this line will throw a ReferenceError
let temporalDeadZoneVar = "I am in the temporal dead zone";

// Swapping variables
// method 1: Using a temporary variable
let x = 5;
let y = 10;
let temp = x;
x = y;
y = temp;
console.log(`After swapping: x = ${x}, y = ${y}`);

// method 2: Destructuring assignment
let a = 5;
let b = 10;
[a, b] = [b, a];
console.log(`After swapping: a = ${a}, b = ${b}`);

// method 3: Using arithmetic operations
let m = 5;
let n = 10;
m = m + n;
n = m - n;
m = m - n;
console.log(`After swapping: m = ${m}, n = ${n}`);

// Operators
let sum = 5 + 3; // Addition
let difference = 5 - 3; // Subtraction
let product = 5 * 3; // Multiplication
let quotient = 5 / 3; // Division
let remainder = 5 % 3; // Modulus
let exponentiation = 5 ** 3; // Exponentiation
console.log(`Sum: ${sum}, Difference: ${difference}, Product: ${product}, Quotient: ${quotient}, Remainder: ${remainder}, Exponentiation: ${exponentiation}`);

// Comparison Operators
console.log(5 == '5'); // true
console.log(5 === '5'); // false
console.log(5 != '5'); // false 
console.log(5 !== '5'); // true
console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 >= 5); // true
console.log(5 <= 3); // false

// Logical Operators
console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false    

// unary ++,-- (pre,post) and ternary operators
let unaryNum = 5;
unaryNum++;
console.log(`Unary Increment: ${unaryNum}`); // 6
let ternaryResult = (5 > 3) ? "Five is greater" : "Three is greater";
console.log(ternaryResult); // Five is greater


