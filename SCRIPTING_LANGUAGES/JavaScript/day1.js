// JavaScript Day 1 
// This script demonstrates basic JavaScript concepts
// including variables, datatypes, and Operators.

// 1. Variables and Data Types

//what are Variables?

// Variables are like containers for storing data values.
// They help us store, reuse, and update information in JavaScript — from simple values like
// numbers to complex data like arrays and objects.
// Think of a variable as a box with a name on it. You can put something inside it (a value), and later
// check or change what's inside.
// In JavaScript, you create these boxes using keywords: var , let , or const .


// var: This keyword is used to declare a variable. It has function scope and can be re-declared and re-assigned. and its old and not recommended to use it now. hoisted to the top of its scope with an initial value of undefined.
console.log(age); // Output: undefined

// Example of using var

var age = 19;
console.log(age); // Output: 19


// let : This keyword is used to declare a block-scoped variable. It can be re-assigned but not re-declared within the same scope. It can be hoisted  but stays in the temporal dead zone until it is initialized.
console.log(score); // ReferenceError: Cannot access 'score' before initialization

// Example of using let
let score = 100;
console.log(score); // Output: 100

// const : This keyword is used to declare a block-scoped variable that cannot be re-assigned or re-declared. It must be initialized at the time of declaration. It can be hoisted but stays in the temporal dead zone until it is initialized.
console.log(pi); // ReferenceError: Cannot access 'pi' before initialization

// Example of using const
const pi = 3.14;
console.log(pi); // Output: 3.14


{
    var x = 10;
    let y = 20;
    const z = 30;
}
console.log(x); // Output: 10
console.log(y); // ReferenceError: y is not defined
console.log(z); // ReferenceError: z is not defined

// Hoisting 
// Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code.

// Example of hoisting with var
console.log(a); // Output: undefined
var a = 5;

// Example of hoisting with let
console.log(b); // ReferenceError: b is not defined
let b = 10;

// Example of hoisting with const
console.log(c); // ReferenceError: c is not defined
const c = 15;


//common confusion between let and const
let name = "Alice";
name = "Bob"; // This is allowed

const country = "USA";
country = "Canada"; // This will throw an error

// Summary
// Use var for function-scoped variables (though it's generally better to avoid it in modern code).
// Use let for block-scoped variables that may need to be reassigned.
// Use const for block-scoped variables that should not be reassigned.

// Practice Exercises

// 1. Declare your name and city using const and your age using let.

const myName = "Anurag";
const myCity = "New York";
let myAge = 25;

// 2. Try to reassign the values of yourName and yourCity. Observe what happens.
// myName = "John"; // This will throw an error
// myCity = "Los Angeles"; // This will throw an error

myAge = 26; // This is allowed

//Guess the output
console.log(myName); // Output: Anurag
console.log(count); // Output: undefined
var count = 42;

// create a const object and try to change its properties
const person = {
    name: "Alice",
    age: 30
};

person.name = "Bob"; // This is allowed
console.log(person.name); // Output: Bob

person = { name: "Charlie", age: 25 }; // This will throw an error

//---------------Variables End Here-----------------

// 2. Data Types

// WHat are Data Types?

// Data types in JavaScript are the different kinds of values that can be stored and manipulated within a program. They define the nature of the data and determine what operations can be performed on that data. JavaScript has several built-in data types, which can be broadly categorized into two groups: primitive data types and non-primitive (or reference) data types.

// Primitive Data Types:
// 1. Number: Represents both integer and floating-point numbers.
let num = 42;
console.log(typeof num); // Output: "number"

// 2. String: Represents a sequence of characters enclosed in single quotes, double quotes, or backticks.
let str = "Hello, World!";
console.log(typeof str); // Output: "string"

// 3. Boolean: Represents a logical entity that can have two values: true or false.
let isJavaScriptFun = true;
console.log(typeof isJavaScriptFun); // Output: "boolean"

// 4. Undefined: Represents a variable that has been declared but not assigned a value.
let undef;
console.log(typeof undef); // Output: "undefined"

// 5. Null: Represents the intentional absence of any object value.
let emptyValue = null;
console.log(typeof emptyValue); // Output: "object" (this is a known quirk in JavaScript)

// 6. Symbol: Unique Identifiers often used as keys in objects.
let sym = Symbol("unique");
console.log(typeof sym); // Output: "symbol"

// 7. BigInt: Represents integers with arbitrary precision.
let bigIntNum = BigInt(9007199254740991);
let anotherBigInt = 9007199254740991n;
console.log(typeof bigIntNum); // Output: "bigint"
console.log(typeof anotherBigInt); // Output: "bigint"


// Non-Primitive (Reference) Data Types:

// 1. Object: A collection of key-value pairs. Objects can store multiple values and more complex data structures.
let obj = { name: "Alice", age: 30 };
console.log(typeof obj); // Output: "object"

// 2. Array: A special type of object used to store ordered collections of values.
let arr = [1, 2, 3, 4, 5];
console.log(typeof arr); // Output: "object"
console.log(Array.isArray(arr)); // Output: true

// 3. Function: A block of code designed to perform a particular task.
function greet() {
    console.log("Hello, World!");
}
console.log(typeof greet); // Output: "function"

// typeof Operator
// Used to check the data type of a variable or value.as be also used above examples
console.log(typeof 42); // Output: "number"

// Type Coercion
// JavaScript is a dynamically typed language, which means it performs type coercion automatically when necessary.
let result1 = '5' + 10; // '510' (string concatenation)
let result2 = '5' - '2';  // 3 (numeric subtraction)
let result3 = '5' * '2'; // 10 (numeric multiplication)
let result4 = '5'*2; //10
let result5 = '5' / '2'; //2.5
let result6 = '5'/0; //Infinity
let result7 = '5' / 'a'; //NaN
let result8 = null + 5; //5
let result9 = undefined + 5; //NaN
let result10 = true + 5; //6
let result11 = false + 5; //5
console.log(result1); // Output: '510'
console.log(result2); // Output: 3
console.log(result3); // Output: 10
console.log(result4); // Output: 10
console.log(result5); // Output: 2.5
console.log(result6); // Output: Infinity
console.log(result7); // Output: NaN
console.log(result8); // Output: 5
console.log(result9); // Output: NaN
console.log(result10); // Output: 6
console.log(result11); // Output: 5


// Loose vs Strict Equality
// JavaScript provides two types of equality comparisons: loose equality (==) and strict equality (===).
// == compares value with type conversion
// === compares value without type conversion
let looseEquality = (5 == '5'); // true (type coercion occurs)
let strictEquality = (5 === '5'); // false (no type coercion)
console.log(looseEquality); // Output: true
console.log(strictEquality); // Output: false
// always prefer strict equality to avoid unexpected results due to type coercion

// Truthy and Falsy Values
// In JavaScript, values can be classified as "truthy" or "falsy" based on how they evaluate in a boolean context.
// Falsy values: false, 0, -0, 0n, "", null, undefined, NaN, document.all
// All other values are considered truthy.
//"0", "false", [], {} are truthy values
if ("") {
    console.log("This is truthy");
} else {
    console.log("This is falsy"); // This will be logged
}

// Summary
// JavaScript has several data types, including primitive types (Number, String, Boolean, Undefined, Null, Symbol, BigInt) and non-primitive types (Object, Array, Function).
// The typeof operator is used to check the data type of a variable or value.
// JavaScript performs type coercion automatically when necessary.
// Loose equality (==) allows type conversion, while strict equality (===) does not.
// Values can be classified as truthy or falsy based on how they evaluate in a boolean context.

// Practice Exercises

// 1. Declare variables of different data types and log their types using typeof.
let myNumber = 100;
let myString = "JavaScript";
let myBoolean = false;
let myUndefined;
let myNull = null;
console.log(typeof myNumber); // Output: "number"
console.log(typeof myString); // Output: "string"
console.log(typeof myBoolean); // Output: "boolean"
console.log(typeof myUndefined); // Output: "undefined"
console.log(typeof myNull); // Output: "object"

//2 . Predict the output of the following expressions:
console.log('10' + 5); // Output: '105'
console.log('10' - 5); // Output: 5
console.log(true + 2); // Output: 3
console.log(false + 2); // Output: 2
console.log(null + 5); // Output: 5
console.log(undefined + 5); // Output: NaN
console.log(0 == false); // Output: true
console.log(0 === false); // Output: false  
//---------------Data Types End Here-----------------

// 3. Operators

// What are Operators?

// Operators are special symbols or keywords in JavaScript that perform operations on one or more operands (values or variables) to produce a result. They are essential for performing calculations, comparisons, and logical operations in your code. JavaScript supports various types of operators, each serving a specific purpose.

// 1. Arithmetic Operators
let num1 = 10;
let num2 = 5;
 
console.log(num1 + num2); // Addition: Output: 15
console.log(num1 - num2); // Subtraction: Output: 5
console.log(num1 * num2); // Multiplication: Output: 50
console.log(num1 / num2); // Division: Output: 2
console.log(num1 % num2); // Modulus: Output: 0 (remainder of division)
console.log(num1 ** num2); // Exponentiation: Output: 100000 (10 raised to the power of 5)

// 2. Assignment Operators
let a = 10; // Assignment
a += 5; // Addition assignment (a = a + 5)
console.log(a); // Output: 15
a -= 3; // Subtraction assignment (a = a - 3)
console.log(a); // Output: 12
a *= 2; // Multiplication assignment (a = a * 2)
console.log(a); // Output: 24
a /= 4; // Division assignment (a = a / 4)
console.log(a); // Output: 6
a %= 4; // Modulus assignment (a = a % 4)
console.log(a); // Output: 2
a **= 3; // Exponentiation assignment (a = a ** 3)
console.log(a); // Output: 8

// 3. Comparison Operators
console.log(num1 == num2); // Equal to: Output: false
console.log(num1 != num2); // Not equal to: Output: true
console.log(num1 === num2); // Strict equal to: Output: false
console.log(num1 !== num2); // Strict not equal to: Output: true
console.log(num1 > num2); // Greater than: Output: true
console.log(num1 < num2); // Less than: Output: false
console.log(num1 >= num2); // Greater than or equal to: Output: true
console.log(num1 <= num2); // Less than or equal to: Output: false

// 4. Logical Operators
let isAdult = true;
let hasID = false;
console.log(isAdult && hasID); // Logical AND: Output: false
console.log(isAdult || hasID); // Logical OR: Output: true
console.log(!isAdult); // Logical NOT: Output: false

// 5. unary Operators
let x = "5";
console.log(+x); // Unary plus: Output: 5 (converts string to number)
console.log(-x); // Unary minus: Output: -5 (negates the number)
let count = 5;
console.log(++count); // Pre-increment: Output: 6
console.log(count++); // Post-increment: Output: 6
console.log(count); // Output: 7
console.log(--count); // Pre-decrement: Output: 6
console.log(count--); // Post-decrement: Output: 6
console.log(count); // Output: 5
console.log(typeof ++x); // Output: "number"

// 6. Ternary Operator
// Syntax: condition ? expressionIfTrue : expressionIfFalse
let age1 = 18;
let canVote = (age1 >= 18) ? "Yes, can vote" : "No, cannot vote";
console.log(canVote); // Output: "Yes, can vote"

// !!value : Converts a value to its boolean equivalent
console.log(!!"Hello"); // Output: true
console.log(!!0); // Output: false
console.log(!!null); // Output: false
console.log(!!42); // Output: true

// Summary
// Operators are special symbols or keywords that perform operations on operands.
// JavaScript supports various types of operators, including arithmetic, assignment, comparison, logical, unary, and ternary operators.
// Each operator serves a specific purpose and helps in performing calculations, comparisons, and logical operations in your code.

// Practice Exercises

// 1. Perform basic arithmetic operations using different operators.
let val1 = 20;
let val2 = 4;
console.log(val1 + val2);
console.log(val1 - val2);
console.log(val1 * val2);
console.log(val1 / val2);
console.log(val1 % val2);
console.log(val1 ** val2);

// 2. Use comparison operators to compare two values and log the results.
console.log(val1 == val2);
console.log(val1 != val2);
console.log(val1 > val2);
console.log(val1 < val2);
console.log(val1 >= val2);
console.log(val1 <= val2);

// 3. Use logical operators to combine boolean values and log the results.
let isStudent = true;
let hasScholarship = false;
console.log(isStudent && hasScholarship);
console.log(isStudent || hasScholarship);
console.log(!isStudent);

//build a calculator using prompt to take input from user and perform basic arithmetic operations
let number1 = parseFloat(prompt("Enter first number:"));
let number2 = parseFloat(prompt("Enter second number:"));
let operation = prompt("Enter operation (+, -, *, /, %,**):");
let result;
function calculate(num1, num2, op) {
    op === '+' ? result = num1 + num2 :
    op === '-' ? result = num1 - num2 :
    op === '*' ? result = num1 * num2 :
    op === '/' ? result = num1 / num2 :
    op === '%' ? result = num1 % num2 :
    op === '**' ? result = num1 ** num2 :
    result = "Invalid operation";
    return result;
}
console.log("Result: " + calculate(number1, number2, operation));

//---------------Operators End Here-----------------
