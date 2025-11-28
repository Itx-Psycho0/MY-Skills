//Day --> 4 -------------------------------

// Topic --> Array

// What is Array?
// An array is like a row of boxes, where each box holds a value and has an index (0, 1, 2…).
// Arrays help you store multiple values in a single variable — numbers, strings, or even
// objects/functions

let fruits = ["apple", "banana", "mango"];

//Creating & Accessing Arrays

let marks = [90, 85, 78];
console.log(marks[1]); // 85
marks[2] = 80; // Update index 2

// Indexing starts from 0
// You can access, update, or overwrite values by index

//Common Array Methods
//Modifiers (Change original array)

let arr = [1, 2, 3, 4];
arr.push(5); // Add to end
arr.pop(); // Remove last
arr.shift(); // Remove first
arr.unshift(0); // Add to start
arr.splice(1, 2); // Remove 2 items starting at index 1
arr.reverse(); // Reverse order

//Extractors (Don't modify original array)
let newArr = arr.slice(1, 3); // Copy from index 1 to 2
console.log(newArr) //Output: 
arr.sort(); // Lexical sort by default

// Destructuring:--------------
const colors = ["Red", "Green", "Blue"];

// Old Way
// const first = colors[0];
// const second = colors[1];

// God Level Way (Destructuring)
const [first, second] = colors;

console.log(first);  // "Red"
console.log(second); // "Green"
 

// The Spread Operator ...

const boys = ["Adam", "Ben"];
const girls = ["Eve", "Sara"];

// Merge them
const everyone = [...boys, ...girls]; // ["Adam", "Ben", "Eve", "Sara"]

// includes()
const menu = ["Pizza", "Burger", "Taco"];

if (menu.includes("Pizza")) {
    console.log("Yum!");
}
//Output: Yum!

// Reference vs. Value (imp)

// This is the most common interview question.

// Arrays are Reference Types.

// If you copy a number, it's a real copy. If you copy an array, you are just copying the address (the pointer) to the train.

// VALUE TYPE (Primitive)
let a = 10;
let b = a;  // Copy the value 10
b = 20;     // Change b
console.log(a); // 10 (a is safe)

// REFERENCE TYPE (Array)
let list1 = ["A", "B"];
let list2 = list1; // WARNING: You didn't copy the train, you copied the ticket!

list2[0] = "Z";    // You change list2...

console.log(list1[0]); // "Z" !!! (List1 changed too!)

// Use the Spread Operator to make a real copy. let list2 = [...list1];


//Map() function
//Create a NEW array where every item is changed (transformed).
//Input: Array of 5 items.

// Output: New Array of 5 items (modified).
const numbers = [2, 4, 6];

// "Take every number and multiply by 10"
const multiplied = numbers.map(num => num * 10);

console.log(multiplied); // [20, 40, 60]

//Filter() function
//Create a NEW array that only keeps items that pass a test.
//Input: Array of 10 items.
// Output: New Array of 0 to 10 items (only the ones that passed).
const ages = [12, 18, 25, 8, 30];

// "Keep only if age is 18 or older"
const adults = ages.filter(age => age >= 18);

console.log(adults); // [18, 25, 30]

//Find()
//Locate the first item that matches a condition.
