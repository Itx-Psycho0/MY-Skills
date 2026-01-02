// Day2 in DSa in Js

// Topic: Math Functions in JavaScript, Conditional Statements

console.log("Welcome to Day 2 of Data Structures and Algorithms in JavaScript!");

Math.abs(-7); // 7

Math.round(4.6); // 5

Math.ceil(4.2); // 5

Math.floor(4.8); // 4

// and more math functions

// Conditional Statements

let age = 20;

if (age < 18) {
    console.log("You are a minor.");
} else if (age >= 18 && age < 65) {
    console.log("You are an adult.");
} else {
    console.log("You are a senior citizen.");
}
// Ternary Operator
let canVote = (age >= 18) ? "You can vote." : "You cannot vote.";
console.log(canVote);

// Switch Statement
let day = 3;
let dayName;
switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    default:
        dayName = "Invalid day";
}
console.log(dayName);

// these are basics of math functions and conditional statements in JavaScript.