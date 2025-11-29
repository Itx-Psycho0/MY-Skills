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
// Input: Array.
// Output: The single Item (or undefined if not found).

const users = [
    { id: 1, name: "Sam" },
    { id: 2, name: "Alex" },
    { id: 3, name: "Sam" } // Another Sam
];

// "Find the user with id 2"
const target = users.find(user => user.id === 2);

console.log(target); // { id: 2, name: "Alex" }

//Every() and some()
// These return Booleans (true or false). They don't give you data; they give you a "Yes" or "No" answer.

// .some(): Returns true if at least one item passes.

// .every(): Returns true ONLY if ALL items pass.

const temperatures = [20, 25, 30, 100]; // 100 is dangerously hot

// Is SOME temperature dangerous? (Is there at least one > 90?)
const hasDanger = temperatures.some(temp => temp > 90); 
console.log(hasDanger); // true

// Is EVERY temperature safe? (Is everyone < 90?)
const allSafe = temperatures.every(temp => temp < 90);
console.log(allSafe); // false

//ForEach()
//Just run code for every item. Do not return a new array. Use case: Logging data, sending emails to a list, saving to a database.
// Warning: You cannot save the result of a forEach to a variable. It returns undefined.
const friends = ["Ross", "Joey"];

// Just say hi. Don't create a new list.
friends.forEach(friend => console.log(`Hi ${friend}`));
//Output: Hi Ross
//Hi Joey

// Reduce()
// Turn an entire array into ONE single value. This is the most powerful (and confusing) one.
// Analogy: Rolling a snowball. You start with a small ball (Initial Value). You roll over the snow (The Array). The ball gets bigger and changes shape until you have one giant snowman.
// It takes two arguments:
// The Accumulator: The "Snowball" (the result so far).
// The Current Item: The item we are currently rolling over.
const prices = [10, 20, 30];

// 0 is the Initial Value (The starting snowball size)
const total = prices.reduce((totalSoFar, currentPrice) => {
    return totalSoFar + currentPrice;
}, 0);

console.log(total); // 60
// Logic Trace:
// Start: 0
// Loop 1: 0 + 10 = 10
// Loop 2: 10 + 20 = 30
// Loop 3: 30 + 30 = 60 -> Done.

//Summary
// Arrays are ordered collections (0-based indices) for storing multiple values, offering mutable methods like push/pop and immutable extractors like slice. The notes emphasize the "Reference vs. Value" distinction, using the Spread operator (...) for safe copying and Destructuring for cleaner variable extraction. Key functional methods include map for transformation, filter for selection, and reduce for accumulating data into a single value. Finally, find locates specific items, some/every run boolean checks, and forEach handles side effects without returning new data.

//Practice Exercise

// 1. Create an array of student names and print each
const arr1 = [2,3,4,5,6]
for(let num of arr1){
    console.log(num)
}
//Output:- 2 3 4 5 6

// 2. Filter even numbers from an array
const arr2 = [5,3,1,4,2,6]
let chnagedArr=arr2.filter(num => num%2===0)
console.log(chnagedArr)
//Output: 2 4 6

// 3.  Map prices to include GST (18%)
const prices1 = [10, 20, 30];
let gst = prices1.map(num => (num + (num*0.18)))
console.log(gst) //Output: [ 11.8, 23.6, 35.4 ]

// 4. Reduce salaries to calculate total payroll
const salaries = [50000, 60000, 55000];
let payRoll = salaries.reduce((total,salry)=> total+salry,0)
console.log(payRoll) //Output: 165000

// 5. Find the first student with grade A
const students = [
    { name: "Alice", grade: "A" },
    { name: "Bob", grade: "B" },
    { name: "Charlie", grade: "A" }
];
let gradeAstu = students.find(student => student.grade === "A")
console.log(gradeAstu) //Output: { name: 'Alice', grade: 'A' }

// 6. Write a function to reverse an array
function reverseArray(arr) {
    return arr.reverse();
}
console.log(reverseArray([1,2,3,4,5])) //Output:[ 5, 4, 3, 2, 1 ]

// 7. Sort array of ages in ascending order
arr2.sort((a, b) => a - b);
console.log(arr2) // Output: [ 1, 2, 3, 4, 5, 6 ]

// 8. Destructure first two elements of an array
const names1 = ["Alice", "Bob", "Charlie", "David"]
[nam1,nam2] = names1
console.log(nam1,nam2) //Output: Alice Bob

// 9. Use some() to check if any student failed
const students1 = [
    { name: "Alice", grade: "A" },
    { name: "Bob", grade: "B" },
    { name: "Charlie", grade: "F" }
];
const hasFailed = students1.some(student => student.grade === "F");
console.log(hasFailed) //Output: true

// 10. Use spread to copy and add new item
const forCopy = [2,3,4,5,6]
const byCopy = [...forCopy,7]
console.log(byCopy) //Output: 2 3 4 5 6 7
console.log(forCopy) //Output: 2 3 4 5 6

// More ques. will come soon............................



//-----------------------------------------------------------------End of the Day--------------------------------------------------------------------


