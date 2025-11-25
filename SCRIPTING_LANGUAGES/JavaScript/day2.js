//Day2
//JavaScript Control Flow Statements and Loops

//control Flow Statements:
//Control flow decides which code runs, when it runs, and how many times it runs.
// It's like decision-making + direction in your JavaScript program.
// If operators are the verbs, control flow is the traffic signal.


//1. If-Else Statement

//Syntax:
// if (condition) {
//     // code to be executed if condition is true
// } else {
//     // code to be executed if condition is false
// }

//Example:
let age = 18;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
//Output: You are an adult.
//Explanation: The if-else statement checks the condition (age >= 18). If it's true, it executes the first block; otherwise, it executes the else block.

//2. Switch Statement

//Syntax:
// switch (expression) {
//     case value1:
//         // code to be executed when expression is equal to value1
//         break;
//     case value2:
//         // code to be executed when expression is equal to value2
//         break;
//     default:
//         // code to be executed when none of the cases match
// }
//Example:
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Another day");
}
//Output: Wednesday
//Explanation: The switch statement evaluates the expression (day) and matches it with the cases. When it finds a match, it executes the corresponding block.

//Early return pattern
function checkNumber(num) {
    if (num <= 0) {
        return "Number is not positive.";
    } else {
        return "Number is positive.";
    }
}
//can be simplified to
function checkNumber(num) {
    if (num <= 0) return "Number is not positive.";
    return "Number is positive.";
}

console.log(checkNumber(5));  // Output: Number is positive.

//summary:
//Control flow statements like if-else and switch help you make decisions in your code.
//They allow you to execute different blocks of code based on conditions, making your programs dynamic and responsive.
//Early return pattern helps to reduce nesting and improve code readability.
//Using these control flow statements effectively is crucial for writing robust JavaScript applications.

//Practice Exercises:
//1. Write a function that takes a number as input and returns "Even" if the number is even and "Odd" if the number is odd using an if-else statement.
function checkEvenOdd(num) {
    if (num>0){
        if (num%2 ===0) return "Even";
    return "Odd";
    }

}
console.log(checkEvenOdd(4));  // Output: Even  

