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
    if (num%2 ===0) return "Even";
    return "Odd";
}
console.log(checkEvenOdd(4));  // Output: Even  


//2. Positive or Negative: Write a program that checks if a variable num is positive, negative, or zero.
function checkPosOrNeg(num){
    return num>0?"positive":num<0?"negative":"zero"
}
console.log(checkPosOrNeg(0))// output: zero

//3. Voting Eligibility: Given a variable age, print "Eligible to vote" if the age is 18 or older, otherwise print "Not eligible."
function checkEligibleForVoting(num){
    return num>=18?"Eligible for voting":"not eligible"
}
console.log(checkEligibleForVoting(1)) //Output: not eligible

//4. Max of Two: Write code to find the larger of two numbers stored in variables a and b.
function maxOfTwo(a,b){
    return a>b?"a is greater than b":b>a?"b is greater than a":"both are equal"

}
console.log(maxOfTwo(3,2)) //Output: a is greater than b

//5. Pass or Fail: If a student's score is greater than or equal to 40, log "Passed", otherwise log "Failed".
function checkPassFail(marks){
    if(marks>=40) return "passed";
    return "failed"

}
console.log(checkPassFail(80)) //Output: passed

//6. Divisibility Check: Check if a number is divisible by 5.
function checkDivisible5(num){
    if (num%5==0) return "divisible"
    return "not divisible"

}

console.log(checkDivisible5(190)) //Output: divisible

//7. String Equality: Check if a variable color is equal to "Red" (case-sensitive).
function checkColorRed(color){
    if (color ==="Red") return "true"
    return "false"
}

console.log(checkColorRed('red')) //Output: false

//8. Traffic Light: Given a variable light ("Red", "Yellow", "Green"), print the corresponding action ("Stop", "Wait", "Go").

function checkColorGivenAction(Color){
    if (Color =="Red") return "Stop"
    if (Color == "Green") return "Go"
    if (Color === "Yellow") return "Wait"
    return "please enter valid color"
}

console.log(checkColorGivenAction("Red")) //Output: Stop

//9. Temperature Check: If temp is greater than 30, print "Hot"; otherwise, print "Cold".

function checkTemperature(temp){
    if (temp>30) return "Hot"
    return "Cold"
}

console.log(checkTemperature(45)) // Output: Hot

//10. Empty String: Check if a string variable userName is empty "".

function checkEmptyString(str){
    if (str ==="") return "Empty"
    return "You do something"
}
console.log(checkEmptyString("")) //Output: Empty

//11. Day of the Week: Using a switch statement, print the name of the day based on a number (1-7).
function getDayName(dayNum){
    switch(dayNum){
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thursday"
        case 5:
            return "Friday"
        case 6:
            return "Saturday"
        case 7:
            return "Sunday"
        default:
            return "Invalid day number"
    }
}
console.log(getDayName(3)) //Output: Wednesday

//12. Grade Evaluation: Using a switch statement, print the grade based on score ranges (A, B, C, D, F).
function getGrade(score){
    switch(true){
        case score>=90:
            return "A"
        case score>=80:
            return "B"
        case score>=70:
            return "C"
        case score>=60:
            return "D"
        default:
            return "F"
    }
}
console.log(getGrade(85)) //Output: B

//13. Largest of Three: Find the largest number among three variables x, y, and z (Try using Math.max or nested ifs).
function findMaxbwThree(a,b,c){
    let max = a;
    if(b > max) max = b;
    if(c > max) max = c;
    return max;
}
console.log(findMaxbwThree(2,3,5)) // Output: 5

//14. Leap Year Checker: Write a function to determine if a given year is a leap year. (Rule: Divisible by 4, but NOT 100... UNLESS it is also divisible by 400).
function leapCheckYear(year){
    if (year%4===0 && year%100!==0 || year%400===0) return "Leap year";
    return "no";

}

console.log(leapCheckYear(2025)) // Output: no

//15. Vowel or Consonant: Check if a character stored in variable char is a vowel or consonant.
function checkVowelOrConsonant(char){
    let vowels = "aeiouAEIOU";
    if (vowels.includes(char)) return "Vowel"
    return "Consonant"
}
console.log(checkVowelOrConsonant("a")) //Output: Vowel

//16. Simple Calculator (Switch): Use a switch statement to perform math on num1 and num2 based on an operator string (+, -, *, /).
function simpleCalculator(num1,num2,operator){
    switch(operator){
        case "+":
            return num1+num2
        case "-":
            return num1-num2
        case "*":
            return num1*num2
        case "/":
            return num1/num2
        default:
            return "Invalid operator"
    }
}
console.log(simpleCalculator(4,2,"+")) //Output: 6

//17. Range Validation: Check if a number n falls strictly between 10 and 20 (Ex: 15 is valid, 10 and 20 are not).

function checkRange(n){
    if (n>10 && n<20) return "valid"
    return "not valid"
}
console.log(checkRange(15)) //Output: valid

//18. Login Logic: Check if username is "admin" AND password is "1234". If both match, return "Login Success", else "Invalid Credentials".
function loginLogic(username, password){
    if(username === "admin" && password === "1234") return "Login Success";
    return "Invalid Credentials";
}
console.log(loginLogic("admin", "1234")) //Output: Login Success

//19. Ternary Introduction: Rewrite the "Even or Odd" check (from Question 1) using a single line Ternary Operator (? :).
function checkEvenOddTernary(num) {
    return (num % 2 === 0) ? "Even" : "Odd";
}
console.log(checkEvenOddTernary(7));  // Output: Odd

//20. Weekend Checker: If the day is "Saturday" OR "Sunday", return "It's the weekend!"; otherwise return "Work day".
function checkWeekend(day){
    if (day === "Saturday" || day === "Sunday") return "It's the weekend!"
    return "Work day"
}
console.log(checkWeekend("Sunday")) // Output: It's the weekend!

//21. Triangle Validity: Given three angles a, b, c, check if they form a valid triangle. (Rule: Sum must be exactly 180 AND all angles must be greater than 0).
function checkTriangleValidity(a,b,c){
    if (a+b+c ===180 && a>0 && b>0 && c>0) return "valid triangle"
    return "not valid triangle"
}
console.log(checkTriangleValidity(60,60,60)) //Output: valid triangle

//22. Truthy/Falsy Check: Write a function that returns "Truthy" if the input is truthy and "Falsy" if the input is falsy. (Test it with: 0, "", null, undefined, "hello", 1).
function checkTruthyFalsy(input){
    if (input) return "Truthy"
    return "Falsy"
}
console.log(checkTruthyFalsy(0)) //Output: Falsy
console.log(checkTruthyFalsy("")) //Output: Falsy
console.log(checkTruthyFalsy(null)) //Output: Falsy
console.log(checkTruthyFalsy(undefined)) //Output: Falsy
console.log(checkTruthyFalsy("hello")) //Output: Truthy
console.log(checkTruthyFalsy(1)) //Output: Truthy

//23. Nullish Coalescing (??) vs OR (||): You have a variable userCount.

// If userCount is null or undefined, default it to 10.

// Crucial: If userCount is 0, it must stay 0.

// Write the code using the modern ?? operator.

let userCount = 0;
let defaultCount = userCount ?? 10; //?? --> The ?? operator is JavaScript's nullish coalescing operator. It returns the right-hand value only when the left-hand value is null or undefined. This is different from the logical OR operator (||), which returns the right value for any falsy value (including 0, false, "", NaN).
//This operator is particularly useful when working with API responses, database values, or user input where 0, false, or empty strings are legitimate values that shouldn't be replaced by defaults. It's a more precise tool than || for handling missing data.


console.log(defaultCount); // Output: 0
//If we had used || instead of ??, the result would have been 10, because 0 is a falsy value.

//24. Nested Ternary: Rewrite this logic using only nested ternary operators (no if statements):

// Age < 13: "Child"

// Age 13-19: "Teen"

// Age 20+: "Adult"
function checkAgeGroup(age){
    return age<13?"Child":age<=19?"Teen":"Adult"
}
console.log(checkAgeGroup(15)) //Output: Teen

//25. Short-Circuit Execution: You have a function sendEmail(). Write a single line of code that calls sendEmail() only if a variable isLoggedIn is true. Do not use an if statement. (Hint: Use &&).
let isLoggedIn = true;
function sendEmail(){
    return "Email sent!"
}
isLoggedIn && sendEmail(); // If isLoggedIn is true, sendEmail() will be called.

//Output: "Email sent!"

//26.Early Return Pattern: Refactor this nested mess into a clean function using Guard Clauses (returning early):

// JavaScript

// function checkUser(user) {
//     if (user) {
//         if (user.isActive) {
//             return "Access Granted";
//         } else {
//             return "User Inactive";
//         }
//     } else {
//         return "No User Found";
//     }
// }

function checkUser(user) {
    if (!user) return "No User Found";
    if (!user.isActive) return "User Inactive";
    return "Access Granted";
}
console.log(checkUser({isActive:true})) //Output: Access Granted

//27. Object Lookup (The Switch Killer): Instead of a switch statement to convert country codes ("US", "IN", "JP") to full names ("United States", "India", "Japan"), create an Object where keys are codes and values are names. Return the name based on the code, or "Unknown" if it doesn't exist.
function getCountryName(code){
    const countryLookup = {
        "US": "United States",
        "IN": "India",
        "JP": "Japan"
    };
    return countryLookup[code] || "Unknown";
}
console.log(getCountryName("IN")) //Output: India

//28. Complex Access Control: Return "Allowed" if:

// (User is "Admin") OR

// (User is "Subscriber" AND Account is "Active")

function accessControl(userType, accountStatus){
    if (userType === "Admin" || (userType === "Subscriber" && accountStatus === "Active")) return "Allowed"
    return "Not Allowed"
}
console.log(accessControl("Subscriber", "Active")) //Output: Allowed

//29. Game State Logic: Write a function that takes health, score, and level:

// If health <= 0, return "Game Over".

// Else if score > 1000 AND level >= 5, return "You Win".

// Else, return "Keep Playing".
function gameState(health, score, level){
    if (health<=0) return "Game Over";
    if (score>1000 && level>=5) return "You Win";
    return "Keep Playing"
}
console.log(gameState(10, 1500, 5)) //Output: You Win

//30. Color Mixer: Given two colors (Red, Blue, Yellow), return the resulting color when mixed:
function mixColors(color1, color2){
    if ((color1 === "Red" && color2 === "Blue") || (color1 === "Blue" && color2 === "Red")) return "Purple"
    if ((color1 === "Red" && color2 === "Yellow") || (color1 === "Yellow" && color2 === "Red")) return "Orange"
    if ((color1 === "Blue" && color2 === "Yellow") || (color1 === "Yellow" && color2 === "Blue")) return "Green"
    return "Invalid color combination"
}
console.log(mixColors("Red", "Blue")) //Output: Purple

//--------End of Conditional Flow and Control Statements----------

//Next Topic: JavaScript Loops
//JavaScript Loops
//Loops are used to repeat a block of code multiple times until a specified condition is met.

//1. For Loop
//Syntax:
// for (initialization; condition; increment/decrement) {
//     // code to be executed
// }
//Example:
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
//Output: 1 2 3 4 5
//Explanation: The for loop initializes i to 1, checks if i is less than or equal to 5, and increments i by 1 in each iteration. It prints the value of i in each iteration.

//2. While Loop
//Syntax:
// while (condition) {
//     // code to be executed
// }
//Example:
let j = 1;
while (j <= 5) {
    console.log(j);
    j++;
}
//Output: 1 2 3 4 5
//Explanation: The while loop checks the condition (j <= 5) before each iteration. If it's true, it executes the block and increments j by 1.

//3. Do-While Loop
//Syntax:
// do {
//     // code to be executed
// } while (condition);
//Example:
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);
//Output: 1 2 3 4 5
//Explanation: The do-while loop executes the block first and then checks the condition (k <= 5). It ensures that the block is executed at least once.

//break and continue statements
//The break statement is used to exit a loop prematurely when a certain condition is met.
//The continue statement is used to skip the current iteration of a loop and move to the next iteration.
//Example of break:
for (let m = 1; m <= 10; m++) {
    if (m === 6) {
        break;
    }
    console.log(m);
}
//Output: 1 2 3 4 5
//Explanation: The loop prints numbers from 1 to 5. When m equals 6, the break statement exits the loop.
//Example of continue:
for (let n = 1; n <= 10; n++) {
    if (n % 2 === 0) {
        continue;
    }
    console.log(n);
}
//Output: 1 3 5 7 9
//Explanation: The loop prints only odd numbers from 1 to 10. When n is even, the continue statement skips the current iteration.

//For...in Loop
//Syntax:
// for (key in object) {
//     // code to be executed
// }
//Example:
const person = { name: "Alice", age: 25, city: "New York" };
for (let key in person) {
    console.log(key + ": " + person[key]);
}
//Output:
// name: Alice
// age: 25
// city: New York
//Explanation: The for...in loop iterates over the keys of the person object and prints each key-value pair.

//For...of Loop
//Syntax:
// for (element of iterable) {
//     // code to be executed
// }
//Example:
const numbers = [10, 20, 30, 40, 50];
for (let number of numbers) {
    console.log(number);
}
//Output: 10 20 30 40 50
//Explanation: The for...of loop iterates over the elements of the numbers array and prints each element.

//ForEach Loop
//Syntax:
// array.forEach(function(element) {
//     // code to be executed
// });
//Example:
const fruits = ["Apple", "Banana", "Cherry"];   
fruits.forEach(function(fruit) {
    console.log(fruit);
});
//Output: Apple Banana Cherry
//Explanation: The forEach method executes the provided function once for each array element, printing each fruit.


//summary:
//Loops are essential for automating repetitive tasks in JavaScript.
//They allow you to execute a block of code multiple times based on conditions.
//Different types of loops (for, while, do-while, for...in, for...of, forEach) provide flexibility in iterating over data structures.
//Using break and continue statements helps control the flow of loops effectively.

//Practice Exercises:

// 1. 1 to 10: Write a for loop that prints numbers from 1 to 10.
for(let i =1; i<=10; i++){
    console.log(i);
}
//Output: 1 2 3 4 5 6 7 8 9 10

// 2. Sum of Natural Numbers: Calculate the sum of the first 100 natural numbers (1+2+...+100) using a loop.
let sum = 0;
for(let i=1; i<=100; i++){
    sum += i;
}
console.log(sum); //Output: 5050

// 3. Factorial: Write a function that takes a number n and returns its factorial using a loop.
let fact =1;
for(i=1; i<=5; i++){
    fact *= i;
}
console.log(fact); //Output: 120

// 4. Reverse a String: Use a loop to reverse a given string.
let str = "hello";
let reversedStr = "";
for(let i = str.length - 1; i >= 0; i--){
    reversedStr += str[i];
}
console.log(reversedStr); //Output: olleh

// 5. Even Numbers: Print all even numbers between 0 and 20 using a for loop.
for(let i = 0; i <=20; i++){
    if(i%2==0){
        console.log(i)
    }
}

//Output: 0,2,4,6,8,10,12,14,16,18,20

// 6. Multiplication Table: Print the multiplication table of 5 (e.g., "5 x 1 = 5", "5 x 2 = 10") up to 10.

for(let i =1; i<=10; i++){
    console.log("5"+" "+"x"+" "+ i + "=" + 5*i)
}

//Output:5 x 1=5
// 5 x 2=10
// 5 x 3=15
// 5 x 4=20
// 5 x 5=25
// 5 x 6=30
// 5 x 7=35
// 5 x 8=40
// 5 x 9=45
// 5 x 10=50

// 7. Array Traversal: Given an array [10, 20, 30, 40, 50], print every element using a for loop.

let arr = [10, 20, 30, 40, 50]
for(let i=0; i<arr.length;i++){
    console.log(arr[i])
}
//Output: 10 20 30 40 50

// 8. Power Function: Write a loop to calculate $2^5$ (2 to the power of 5) without using Math.pow().
let pow= 1;
for(let i =0; i<5;i++){
    pow *= 2
    
}
console.log(pow) //Output: 32

// 9.Do-While: Use a do...while loop to print "I run at least once" even if the condition is initially false.
i=1
do{
    console.log("I run at least once")
    i -=1
}while(i>10) //Output: I run at least once

// 10. String Length: Find the length of a string "JavaScript" by counting characters in a loop (simulate .length).
let string = "JavaScript";
let length = 0;
for(let i =0; i<string.length; i++){
    length++
}
console.log(length); //Output: 10

//11. Countdown: Write a while loop that prints numbers from 10 down to 1.
let countdown = 10;
while(countdown > 0){
    console.log(countdown);
    countdown--;
}
//Output: 10 9 8 7 6 5 4 3 2 1

// 12. Count Vowels: Count how many vowels (a, e, i, o, u) are in the string "Education".
let string2 = "Education";
let vowelCount = 0;
for(let i =0; i<string2.length; i++){
    let char = string2[i].toLowerCase();
    if("aeiou".includes(char)){
        vowelCount++;
    }
}
console.log(vowelCount); //Output: 5

// 13. Find Max: Given an array [4, 1, 9, 3, 2], find the largest number using a loop (Do not use Math.max).
let arr1 = [4,1,9,3,2]
let max = arr1[0]
for(let char of arr1){
    if (char > max){
        max= char
    }
}
console.log(max) //Output: 9

// 14. Break Statement: Loop from 1 to 20. If the number is divisible by 7, print the number and stop the loop immediately.

for(let i=0; i<=20; i++){
    console.log(i)
    if(i==7){
        break
    }
}

//Output: 0,1,2,3,4,5,6,7

// 15. Continue Statement: Loop from 1 to 10. Print all numbers except 5 (use continue to skip it).

for(let i=1; i<10;i++){
    if(i==5){
        continue
    }
    console.log(i)
}
//Output: 1,2,3,4,6,7,8,9

// 16. For...Of Loop (Essential for Three.js): Use a for...of loop to iterate over an array of fruits ["Apple", "Banana", "Mango"] and print them. (Syntax: for (let item of array) { ... })

let fr = ["Apple", "Banana", "Mango"]
for(let char of fr){
    console.log(char)
}
//Output: Apple Banana Mango

// 17. Count how many times the letter 'a' appears in the string "banana".

let count = 0;
let word = "banana";
for(let i=0; i<word.length; i++){
    if("a".includes(word[i])){
        count++
    }
}
console.log(count) // Output: 3

// 18. Fibonacci Sequence: Print the first 10 numbers of the Fibonacci sequence using a loop. (Sequence: 0, 1, 1, 2, 3, 5, 8... where current = prev + prevPrev)
let n1 = 0, n2 = 1, nextTerm;

console.log("Fibonacci Series:");

for (let i = 1; i <= 10; i++) {
    console.log(n1); // Print the current number
    
    nextTerm = n1 + n2; // Calculate the next one
    
    // Shift values for the next iteration
    n1 = n2; 
    n2 = nextTerm;
}
//Output: 

// 19. Array Sum: Write a function that accepts an array of numbers (e.g., [10, 20, 30]) and returns their total sum.

let arr3 = [10,20,30]
let sum2 = 0
for(let i =0; i<arr3.length; i++){
    sum2 += arr3[i]
}
console.log(sum2) //Output 60

// 20. Search & Break: Given an array [10, 20, 30, 40], loop through it. If you find 30, print "Found it!" and stop the loop.

let arr4 = [10,20,30,40]
for(let i =0; i<arr4.length; i++){
    if(arr4[i] === 30){
        console.log("Found it!")
        break
    }
}
//Output: Found it!

// 21. (Bonus) The "For Loop" Mirror: Given an array [1, 2, 3, 4, 5], create a new array using a loop that contains the elements in reverse order [5, 4, 3, 2, 1].

let arr6 = [1,2,3,4,5]
let arrR = []
for(let i = arr6.length-1; i>=0; i--){
    arrR.push(arr6[i])
}
console.log(arrR) //Output: [5,4,3,2,1]




