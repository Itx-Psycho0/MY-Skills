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

// Why Copy an Object?
// First, it's important to understand why you can't just use the assignment operator (=) to copy an object. Objects in JavaScript are reference types. This means when you assign an object to a new variable, you aren't creating a new object; you're just creating another pointer to the same object in memory.

// Consider this:

// javascript
//  Show full code block 
let original = { name: "Alice" };
let notACopy = original; // This just points to the same object

notACopy.name = "Bob";

console.log(original.name); // Output: "Bob"
// Changing 'notACopy' also changed 'original'!
// To create a truly independent copy, you need to use one of the methods shown in your file.

// What is a "Shallow Copy"?
//  Shallow Copy (one level deep) is key. A shallow copy creates a new object and copies the properties from the original object.

// If a property's value is a primitive type (like a string, number, or boolean), the value itself is copied over.
// If a property's value is another object or an array, only the reference (the memory address) to that nested object is copied, not the nested object itself.
// This is why it's called "one level deep." Only the top-level properties are truly duplicated.

// Explaining the Code
// The snippet shows two ways to achieve a shallow copy:

// Spread Syntax (...)

// javascript
let newStudent = { ...student };
console.log(newStudent);
// This is the modern, concise, and most popular way to create a shallow copy. The ...student syntax "spreads" all the key-value pairs from the student object inside a new empty object literal ({}). The result is a new object, newStudent, with all the same top-level properties as student.

// Object.assign()

// javascript
let newOne = Object.assign({}, student);
console.log(newOne);
// This is an older, but still perfectly valid, method. Object.assign() copies all enumerable own properties from one or more source objects to a target object.

// The first argument ({}) is the target object. We provide an empty object to serve as the new, independent copy.
// The second argument (student) is the source object whose properties we want to copy.
// Both newStudent and newOne are now independent shallow copies of the original student object. Modifying a top-level property on them (like age) will not affect the original student object. However, if student contained a nested object, modifying a property within that nested object on the copy would still affect the original, because both the original and the copy would be pointing to the same nested object.

// In JavaScript, variables can hold two types of data: primitive types (like numbers, strings, booleans) and reference types (like objects and arrays).

// Primitive Types (Value Copy): When you assign a primitive value to a new variable, you create a completely independent copy.
let a = 10;
let b = a; // The value 10 is copied into b.
b = 20;    // Changing b does NOT affect a.

console.log(a); // Output: 10
// Reference Types (Reference Copy): When you assign an object or array to a new variable, you are not creating a new object. Instead, you are just copying the memory address (the reference) where the original object is stored. Both variables now point to the exact same object.
 
let originalObject = { name: "Alice" };
let anotherVariable = originalObject; // This just copies the reference, not the object.

// If we change the object through the new variable...
anotherVariable.name = "Bob";

// ...the original object is also changed!
console.log(originalObject.name); // Output: "Bob"
// Because of this behavior, you often need to create a true, independent copy of an object. The section // Copying Objects is dedicated to showing you how to do this. It introduces two main ways of copying:

// Shallow Copy: This creates a new object and copies the top-level properties. However, if any of those properties are themselves objects, only the reference to those nested objects is copied. The subsequent lines in your file (let newStudent = { ...student };) demonstrate this.
// Deep Copy: This creates a completely new object and recursively copies every property, including all nested objects, ensuring the new object is entirely independent of the original. Your file has a placeholder for this concept.




//  a shallow copy (using ... or Object.assign()) only copies an object one level deep. If your object contains other objects (i.e., it's nested), the shallow copy doesn't duplicate the nested objects; it just copies the references to them.

// The Solution: Deep Copy
// A deep copy solves this problem. It creates a completely new object and recursively traverses the original object, duplicating every property and every nested object or array along the way. The final result is a copy that is 100% independent of the original. Modifying any part of the deep copy, no matter how deeply nested, will have no effect on the original object


// Deep Copy
// A deep copy creates a completely new, independent duplicate of an object,
// including all nested objects and arrays.

let user1 = {
    name: "xyz",
    address: {
        city: "Mumbai",
        zipcode: "400001"
    },
    // Note: This method doesn't work with functions, undefined, or Symbols
    greet: function() { console.log("Hello"); }
};

// The simplest way to deep copy is using JSON methods
let deepCopyUser = JSON.parse(JSON.stringify(user1));

// Now, change the city on the deep copy
deepCopyUser.address.city = "Delhi";

// The original object remains unchanged
console.log(user1.address.city);       // Output: Mumbai
console.log(deepCopyUser.address.city); // Output: Delhi

// ❗ Note: JSON-based copy works only for plain data (no functions, undefined, etc.)

// Optional Chaining
// Avoids errors if a nested property is undefined:

console.log(user?.address?.city); // Delhi
console.log(user?.profile?.email); // undefined (no error)

 //  Computed Properties

// You can use variables as keys:

let key = "marks";
let report = {
 [key]: 89
};


// Practice Exercise

// 1. Create an object for a book (title, author, price)
let book = {
    title: "My Run",
    author: "Psycho",
    price: "Your time"}

    console.log(book)
//Output: { title: 'My Run', author: 'Psycho', price: 'Your time' }

// 2. Access properties using both dot and bracket
console.log(book.title) //Output: My Run
console.log(book["author"]) //Output: Psycho

// 3. Write a nested object (user with address and location)
let user2 = {
    name: "xyz",
    address: {
        city: "Mumbai",
        zipcode: "400001"
    },  
}
console.log(user2)
//Output: { name: 'xyz', address: { city: 'Mumbai', zipcode: '400001' } }

// 4. Destructure name and age from a student object
const { address, address: { zipcode }} = user;
console.log(address,zipcode) //Output: { city: 'Mumbai', zipcode: '400001' } 400001

// 5.  Loop through keys and values of an object
for(let key in user2){
    console.log(key,user2[key])

} //Ouput: name xyz
// address { city: 'Mumbai', zipcode: '400001' }

// 6. Convert object to array using Object.entries()
console.log(Object.entries(user2))
//Output:[[ 'name', 'xyz' ],[ 'address', { city: 'Mumbai', zipcode: '400001' } ]]



