// Questions

// 1. write a function to sum two numbers
function sumTwoNumbers(num1, num2) {
    return num1 + num2;
}

// 2. wirte a function to greet a person with their name
function greetPerson(name) {
    return `Hello, ${name}!`;
}

// 3. swap two variables using three different methods
// method 1: Using a temporary variable
function swapWithTemp(a, b) {
    let temp = a;
    a = b;
    b = temp;
    return [a, b];
}

// method 2: Destructuring assignment
function swapWithDestructuring(a, b) {
    [a, b] = [b, a];
    return [a, b];
}
// method 3: Using arithmetic operations
function swapWithArithmetic(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    return [a, b];
}

// 4. Write a function to calculate compound interest
// answer should be in two decimal places
function calculateCompoundInterest(principal, rate, time, n) {
    // A = P (1 + r/n)^(nt)
    const amount = principal * Math.pow((1 + rate / n), n * time);
    return Math.round((amount - principal) * 100) / 100;
    // return parseFloat((amount - principal).toFixed(2)); // alternative way to format to two decimal places but one limitation that its not return rounded value in case of 11.456 it will return 11.45 instead of 11.46
}

