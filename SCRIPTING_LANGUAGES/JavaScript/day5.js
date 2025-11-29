// JavaScript --> Day 5 --------------------------------------

//Topic --> Objects

// What are Objects?
// Objects in JavaScript are like real-world records – a collection of key-value pairs.
// They help us store structured data (like a student, a product, or a user profile).

let student = {
 name: "Ravi",
 age: 21,
 isEnrolled: true
};
console.log(student.name); // Output: Ravi

//Key-Value Structure
// Keys are always strings (even if you write them as numbers or identifiers)
// Values can be anything – string, number, array, object, function, etc

console.log(student["name"]); // Ravi
console.log(student.age); // 21

// Dot vs Bracket Notation
// Use dot notation for fixed key names
// Use bracket notation for dynamic or multi-word keys

student["full name"] = "Ravi Kumar"; // ✅
student.course = "JavaScript"; // ✅


// Nesting and Deep Access
// Objects can have nested objects (objects inside objects)
let user = {
    name: "Ravi",
    address: {
        city: "Mumbai",
        zipcode: "400001"
    },
    courses: {
        primary: "JavaScript",
        secondary: "React"
    }
};

console.log(user.address.city); // Mumbai
console.log(user.courses.primary); // JavaScript
console.log(user["address"]["zipcode"]); // 400001

// Object Destructuring

// You can extract values directly:
let { name, age } = student;
console.log(name); // Ravi
console.log(age); // 21

//For nested objects:
// To destructure a nested object, you use a similar pattern:
const { address: { city }, courses: { primary } } = user;

console.log(city);    // Mumbai
console.log(primary); // JavaScript

//Looping Through Objects
for (let key in student) {
 console.log(key, student[key]);
}
//Output:
// name Ravi
// age 21
// isEnrolled true

//Object.keys(), Object.values(), Object.entries()
Object.keys(student);  // ["name", "age", "isEnrolled"]
Object.values(student); // ["Ravi", 21, true]
Object.entries(student); // [["name", "Ravi"], ["age", 21], ...]

// Copying Objects
// Shallow Copy (one level deep)

let newStudent = { ...student };
let newOne = Object.assign({}, student);
console.log(newStudent);
console.log(newOne);







