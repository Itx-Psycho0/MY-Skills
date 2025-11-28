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


