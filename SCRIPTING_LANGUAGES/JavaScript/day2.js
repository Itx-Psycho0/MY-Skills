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

