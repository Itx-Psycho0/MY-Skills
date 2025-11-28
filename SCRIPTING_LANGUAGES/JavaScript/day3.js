// day - 3 
// Topic - Functions

//What are Functions:
// Function are blocks of reusable Logic.
// Instead of repeating the same task again and again, wrap it in function and reuse it with different inputs.
// Think of a function like a vending machine:
// Input: you give money + item code
// Output: it gives you the item
// Logic: hidden inside

//Function Declaration
greet();
function greet() {
 console.log("Welcome to Sheryians!");
}
greet();
//Output: Welcome to Sheryians
//You Define it once, then call it whenever needed.

//Parameters and Aruguments
function greet(name) {
 console.log("Hello " + name);
}
greet("Harsh");
// name is parameter;
// "Harsh" is the argument you pass

// Return Values
function sum(a, b) {
 return a + b;
}
let total = sum(5, 10); // total is 15
console.log(total); // Output: 15
//return sends back a result to wherever the function was called
// After return , function exits
// its like stored the value that function

//Function Expressions
const greet = function () {
 console.log("Hello!");
};
//Functions stored in variables
//Cannot be hoisted (you can’t call them before they’re defined)

//Arrow Functions
const greet = () => {
 console.log("Hi!");
};
// Cleaner syntax
// No own this , no arguments object

//Default + Rest + Spread

function multiply(a = 1, b = 1) {
 return a * b;
}
function sum(...nums) {
 return nums.reduce((acc, val) => acc + val, 0);
}
let nums = [1, 2, 3];
console.log(sum(...nums)); // Spread

// a = 1 → default parameter

// ...nums → rest parameter
// Think of this as "Packing."

// This is used inside Function definitions. Sometimes you don't know how many arguments a user will send to your function. They might send 2 numbers, or they might send 20.

// Rest gathers all the "leftover" arguments and packs them into a single array so your code can handle them easily.

// ...nums (in call) → spread operator
// Think of this as "Unpacking."

// Imagine you have a box of apples. You want to move those apples into a bigger basket that also has bananas. You can't put the box inside the basket; you need to take the apples out of the box first.

// Spread takes elements out of an array (or object) so you can use them individually.

//First-Class Functions-------------------------------------------
//The term "First-Class Function" sounds academic, but the concept is actually very simple.

// In JavaScript, functions are treated exactly like variables.

// In many older languages (like older versions of Java or C), a function was a special structure that was different from data. In JavaScript, a function is just a value—like a Number, a String, or a Boolean.

// Because functions are "First-Class Citizens," they can do three specific things that normal variables can do

//You can assign a function to a variable
//You can pass a function as an argument to another function
//You can return a function from another function
// This is the "Spray" (The function we will pass)
function sayHello() {
    console.log("Hello!");
}

// This is the "Cleaner" (The function that accepts another function)
// Notice the parameter is called 'action'
function runThisFunction(action) {
    console.log("I am about to run the function you gave me...");
    
    // We execute the passed function by adding ()
    action(); 
}

// Pass 'sayHello' into 'runThisFunction'
// Note: We pass 'sayHello' without (), because we are passing the DEFINITION, not running it yet.
runThisFunction(sayHello);

//Output:
// I am about to run the function you gave me...
// Hello!

function createMultiplier(multiplier) {
    // This outer function returns a NEW function
    return function(number) {
        return number * multiplier;
    };
}

// Create a function that always doubles numbers
const doubleIt = createMultiplier(2); 

// Create a function that always triples numbers
const tripleIt = createMultiplier(3);

console.log(doubleIt(10)); // Output: 20
console.log(tripleIt(10)); // Output: 30

//Higher-Order Functions (HOF)
// Functions that accept other functions or return functions.


function createMultiplier(x) {
 return function (y) {
 return x * y;
 };
}
let double = createMultiplier(2);
console.log(double(5)); // 10


//Lexical Scope: Inner functions can access outer variables.
const globalVar = "I am Global";

function outerFunction() {
    const outerVar = "I am Outer";

    function innerFunction() {
        const innerVar = "I am Inner";
        
        // I can see my own variable
        console.log(innerVar); 
        
        // I can see my parent's variable (Lexical Scope)
        console.log(outerVar); 
        
        // I can see the global variable
        console.log(globalVar);
    }
    
    innerFunction(); // Run it
    
    // ERROR! The parent cannot see inside the child.
    // console.log(innerVar); // This would crash
}

outerFunction();

//Output:
// I am Inner
// I am Outer
// I am Global



//Closure: When a function returns another function, the returned function "remembers" the variables it used. It closes over them.
function createCounter() {
    let count = 0; // This variable BELONGS to createCounter

    // This inner function uses 'count'
    return function() {
        count++; // It modifies the parent's variable
        return count;
    };
}

// 1. Run createCounter. It returns the inner function.
// The 'createCounter' function finishes and normally 'count' should die.
const myCounter = createCounter(); 

// 2. BUT, 'myCounter' has a Closure (Backpack) holding 'count'.
console.log(myCounter()); // Output: 1
console.log(myCounter()); // Output: 2
console.log(myCounter()); // Output: 3

// 3. If I make a new one, it gets a NEW backpack (new state).
const newCounter = createCounter();
console.log(newCounter()); // Output: 1

//IIFE – Immediately Invoked Function Expression
(function () {
 console.log("Runs immediately");
})();
//Output: Runs immediately
// Used to create private scope instantly.

//Practice Exercise
// 1. Write a BMI calculator function

function calculateBMI(weight, height) {
    return weight / (height * height);
}

console.log(calculateBMI(70, 1.75)); // Output: 24.22

// 2. Create a greet function with default name

function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, Guest!
greet("Harsh"); // Output: Hello, Harsh!

// 3. Sum all numbers using rest parameter

function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15

// 4. Create a closure counter function

function createCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2

// 5. Use a function to log even numbers in array

function logEvenNumbers(arr) {

    for (let num of arr) {
        if (num % 2 === 0) {
            console.log(num);
        }
    }
}
        
logEvenNumbers([1, 2, 3, 4, 5, 6]); // Output: 2 4 6

// 6. Write a function that returns another function

function outerFunction() {
    return function(){
        console.log("hello")
    }
}

const fun = outerFunction();
fun(); //Output: hello

// 7. Create a pure function to add tax

function addTax(price, taxRate) {
    return price + (price * taxRate);
}

console.log(addTax(100, 0.1)); // Output: 110

// 8. Use IIFE to show welcome message

(
    function hello(){
        console.log("welcome")
    }
)()

// 9. Write a discount calculator (HOF style)

function createDiscountCalculator(discountRate) {
    return function(price) {
        return price - (price * discountRate);
    };
}

const calculateDiscountedPrice = createDiscountCalculator(0.1);
console.log(calculateDiscountedPrice(100)); // Output: 90

// 10. Make a toUpperCase transformer using HOF

function makeUpperCaseTransformer() {
    return function(str) {
        return str.toUpperCase();
    };
}

const toUpperCase = makeUpperCaseTransformer();
console.log(toUpperCase("hello")); // Output: HELLO

//----------------------------------------------------------End of Functions----------------------------------------------------------------------------




