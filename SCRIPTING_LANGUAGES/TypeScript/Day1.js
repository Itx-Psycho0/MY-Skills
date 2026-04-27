"use strict";
//DAY 1 -------- TyperScript Basics ---------
Object.defineProperty(exports, "__esModule", { value: true });
// What is TypeScript?
// TypeScript is a superset of JavaScript that adds static typing and other features to the language. 
// It is developed and maintained by Microsoft and is designed to help developers build large-scale applications more efficiently.
// TypeScript code is transpiled into JavaScript, which can then be executed in any environment that supports JavaScript, such as web browsers and Node.js.
// Why TypeScript?
// 1. Static Typing: TypeScript allows developers to define types for variables, function parameters, and return values, which helps catch errors at compile time rather than runtime.
// 2. Enhanced IDE Support: TypeScript provides better autocompletion, navigation, and refactoring capabilities in modern IDEs.
// 3. Improved Code Quality: The use of types can lead to more predictable and maintainable code.
// 4. Compatibility: TypeScript is compatible with existing JavaScript code, allowing developers to gradually adopt it in their projects.
// Inside working of TypeScript
// TypeScript code is transpiled into JavaScript using the TypeScript compiler (tsc). The compiler checks for type errors and converts TypeScript syntax into standard JavaScript syntax that can be executed in any JavaScript environment.
// --> TypeScript --> Lexer --> Parser --> AST (Abstract Syntax Tree) --> Binder --> Type Checker --> Emitter --> JavaScript
// To run TypeScript code, you need to have Node.js and the TypeScript compiler installed. You can install the TypeScript compiler globally using npm:
// npm install -g typescript
// Once installed, you can compile a TypeScript file (e.g., script.ts) into JavaScript using the following command:
// tsc script.ts
// This will generate a JavaScript file (script.js) that you can run using Node.js:
// node script.js
//Lexer: The lexer takes the raw TypeScript code and breaks it down into a series of tokens. Tokens are the smallest units of meaning in the code, such as keywords, identifiers, operators, and literals.
//Parser: The parser takes the tokens produced by the lexer and organizes them into a hierarchical structure called an Abstract Syntax Tree (AST). The AST represents the syntactic structure of the code, capturing the relationships between different elements.
//Binder: The binder traverses the AST and establishes the relationships between identifiers and their declarations. It creates a symbol table that maps variable and function names to their corresponding types and scopes.
//Type Checker: The type checker analyzes the AST and the symbol table to ensure that the code adheres to TypeScript's type system. It checks for type compatibility, verifies function signatures, and identifies any type-related errors in the code.
//Emitter: The emitter takes the validated AST and generates the equivalent JavaScript code. It translates TypeScript-specific constructs into standard JavaScript syntax, removing type annotations and other TypeScript-only features.
// The resulting JavaScript code can then be executed in any JavaScript environment.
// Example TypeScript Code
// let message: string = "Hello, TypeScript!";
// console.log(message);
// Output:
// Hello, TypeScript!
//Annotation :- Type annotations in TypeScript allow developers to explicitly specify the types of variables, function parameters, and return values. This helps catch type-related errors during development and provides better code readability and maintainability. Type annotations are denoted using a colon (:) followed by the type.
// Annotating types for variables
let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
console.log(`The sum of ${num1} and ${num2} is ${sum}.`);
// Type Inference :- Type inference is a feature in TypeScript that allows the compiler to automatically determine the type of a variable based on its initial value. When you declare a variable without an explicit type annotation, TypeScript will infer the type from the assigned value. This can help reduce verbosity while still providing type safety.
// Example of type inference
let message = 12;
// message = "Hello, TypeScript!"; // This will cause a type error because 'message' was inferred to be of type 'number' based on its initial value.
console.log(message);
// Any type :- The 'any' type in TypeScript is a special type that allows a variable to hold any value without type checking. When a variable is declared with the 'any' type, it can be assigned values of any type, and TypeScript will not perform any type checking on it. This can be useful in situations where you want to opt out of type checking for a specific variable, but it should be used with caution as it can lead to potential runtime errors if not used properly.
// Example of using 'any' type
let flexibleVariable = 42; // Initially assigned a number
console.log(flexibleVariable); // Output: 42
flexibleVariable = "Now I'm a string!"; // Reassigned to a string
console.log(flexibleVariable); // Output: Now I'm a string!
// function parameters annotation
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Output: Hello, Alice!
// function return type annotation
function add(a, b) {
    return a + b;
}
console.log(add(5, 10)); // Output: 15
// Default Parameters :- In TypeScript, you can specify default values for function parameters. If a parameter is not provided when the function is called, the default value will be used. This can help simplify function calls and provide fallback values for optional parameters.
// Example of default parameters
function greetWithDefault(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greetWithDefault()); // Output: Hello, Guest!
console.log(greetWithDefault("Alice")); // Output: Hello, Alice!
//void type :- The 'void' type in TypeScript is used to indicate that a function does not return a value. When a function is declared with a return type of 'void', it means that the function is intended to perform some action but does not produce a meaningful result that can be used by the caller. Functions with a 'void' return type typically have side effects, such as modifying variables, logging output, or performing other operations without returning any data.
// Example of a function with 'void' return type
function logMessage(message) {
    console.log(message);
}
logMessage("This is a void function."); // Output: This is a void function.
// Never type :- The 'never' type in TypeScript represents a value that never occurs. It is used to indicate that a function will never return a value, either because it always throws an error or because it has an infinite loop. The 'never' type is a subtype of all other types, meaning that it can be assigned to any type, but no type can be assigned to 'never' except for itself.
// Example of a function with 'never' return type
function throwError(message) {
    throw new Error(message);
}
// throwError("This function never returns."); // This will always throw an error
// Example of a function with an infinite loop
function infiniteLoop() {
    while (true) {
        // This loop will never terminate
    }
}
// Note: The 'never' type is typically used in scenarios where you want to indicate that a function will never successfully complete, such as in error handling or when defining functions that are meant to run indefinitely.
let x;
// x = 10; // Error: Type 'number' is not assignable to type 'never'.
// x = "Hello"; // Error: Type 'string' is not assignable to type 'never'.
// x = infiniteLoop(); // This is valid because 'infiniteLoop' returns 'never'
// Arrays Types
let numbers = [1, 2, 3, 4, 5];
let strings = ["Hello", "TypeScript", "Arrays"];
let mixed = [1, "Two", 3, "Four"];
// Multidimensional Arrays
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
// let person2: Person = {
//     name: "Alice",
//     age: 30,
//     isStudent: false
// };
// Alternatively, you can define an object type inline without using an interface
const man = {
    name: "Bob",
    age: 25,
    isStudent: true
};
// object annontation on function parameters
function printPersonInfo() {
    return {
        name: "Charlie",
        age: 28,
        isStudent: false
    };
}
printPersonInfo();
function printPoint(point) {
    console.log(`Point coordinates: (${point.x}, ${point.y})`);
}
const myPoint = { x: 10, y: 20 };
printPoint(myPoint); // Output: Point coordinates: (10, 20)
const user1 = {
    username: "john_doe",
    email: "john.doe@example.com"
};
const user2 = {
    username: "jane_smith",
    email: "jane.smith@example.com",
    age: 30
};
const myCar = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
// myCar.make = "Honda"; // Error: Cannot assign to 'make' because it is a read-only property.
myCar.year = 2021; // This is allowed because 'year' is not a readonly property
const obj = {
    propA: "Hello",
    propB: 42
};
console.log(obj.propA); // Output: Hello
console.log(obj.propB); // Output: 42
// union types :- Union types in TypeScript allow you to specify that a variable or parameter can be one of several types. This is done using the '|' operator. Union types are useful when you want to allow for multiple possible types for a variable or parameter while still maintaining type safety. When a variable is declared with a union type, it can hold values of any of the specified types, and TypeScript will perform type checking based on the possible types.
// Example of union types
function printId(id) {
    console.log(`ID: ${id}`);
}
printId(123); // Output: ID: 123
printId("abc"); // Output: ID: abc
function move(direction) {
    console.log(`Moving ${direction}`);
}
move("North"); // Output: Moving North
move("South"); // Output: Moving South
// move("Up"); // Error: Argument of type '"Up"' is not assignable to parameter of type 'Direction'.
// tuple types :- Tuple types in TypeScript allow you to define an array with a fixed number of elements, where each element can have a different type. This is useful when you want to represent a collection of values that are related but may have different types. A tuple is defined using square brackets [] and specifying the types of each element in the order they appear.
// Example of tuple types
let personInfo = ["Alice", 30, true];
console.log(personInfo[0]); // Output: Alice
console.log(personInfo[1]); // Output: 30
console.log(personInfo[2]); // Output: true
// Enums :- Enums in TypeScript are a way to define a set of named constants. They allow you to create a collection of related values that can be used as a type. Enums can be numeric or string-based, and they provide a way to give more meaningful names to values, improving code readability and maintainability.
// Example of numeric enums
var Directions;
(function (Directions) {
    Directions[Directions["North"] = 0] = "North";
    Directions[Directions["South"] = 1] = "South";
    Directions[Directions["East"] = 2] = "East";
    Directions[Directions["West"] = 3] = "West";
})(Directions || (Directions = {}));
console.log(Directions.North); // Output: 0
console.log(Directions.South); // Output: 1
console.log(Directions.East); // Output: 2
console.log(Directions.West); // Output: 3
// Example of string enums
var Status;
(function (Status) {
    Status["Active"] = "ACTIVE";
    Status["Inactive"] = "INACTIVE";
})(Status || (Status = {}));
console.log(Status.Active); // Output: ACTIVE
console.log(Status.Inactive); // Output: INACTIVE
// TypeScript provides a powerful type system that allows developers to write safer and more maintainable code. By using features like type annotations, type inference, and various type constructs, you can catch errors early in the development process and improve the overall quality of your code.
// why we use enums and when to use them?
// Enums are used to define a set of named constants that represent a specific category of values. They provide a way to give more meaningful names to values, improving code readability and maintainability. You should use enums when you have a fixed set of related values that you want to represent as a type, such as directions, status codes, or user roles. Enums can help prevent errors by ensuring that only valid values are used and can make your code more self-documenting.
// classes :- Classes in TypeScript are a blueprint for creating objects. They encapsulate data and behavior related to that data. A class can have properties (data) and methods (functions) that operate on that data. TypeScript classes also support features like inheritance, access modifiers, and constructors, making it easier to create complex and reusable code structures.
// Example of a class in TypeScript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
const person1 = new Person("Alice", 30);
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
//Access Modifiers :- In TypeScript, access modifiers are keywords that determine the visibility and accessibility of class members (properties and methods). The three main access modifiers are 'public', 'private', and 'protected'.
// 1. Public: Members declared as 'public' are accessible from anywhere, both inside and outside the class. This is the default access level if no modifier is specified.
// 2. Private: Members declared as 'private' are only accessible within the class they are defined in. They cannot be accessed from outside the class or from derived classes.
// 3. Protected: Members declared as 'protected' are accessible within the class they are defined in and in any derived classes, but not from outside the class hierarchy.
// Example of access modifiers in a class
class Employee {
    constructor(name, salary, department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    getSalary() {
        return this.salary;
    }
    getDepartment() {
        return this.department;
    }
}
const employee1 = new Employee("Bob", 50000, "Engineering");
console.log(employee1.name); // Output: Bob
// console.log(employee1.salary); // Error: Property 'salary' is private and only accessible within class 'Employee'.
// console.log(employee1.department); // Error: Property 'department' is protected and only accessible within class 'Employee' and its subclasses.
console.log(employee1.getSalary()); // Output: 50000
// getters and setters :- Getters and setters in TypeScript are special methods that allow you to control access to the properties of a class. A getter is a method that retrieves the value of a property, while a setter is a method that sets the value of a property. Getters and setters can be used to add validation logic, perform calculations, or encapsulate the internal representation of a property while providing a public interface for accessing it.
// Example of getters and setters in a class
class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
    get width() {
        return this._width;
    }
    set width(value) {
        if (value <= 0) {
            throw new Error("Width must be a positive number");
        }
        this._width = value;
    }
    get height() {
        return this._height;
    }
    set height(value) {
        if (value <= 0) {
            throw new Error("Height must be a positive number");
        }
        this._height = value;
    }
    get area() {
        return this._width * this._height;
    }
}
const rect = new Rectangle(10, 5);
console.log(rect.area); // Output: 50
rect.width = 15;
console.log(rect.area); // Output: 75
// rect.height = -5; // This will throw an error: Height must be a positive number
console.log(rect.area); // Output: 75 (height remains unchanged due to the error)
const add2 = (x, y) => x + y;
console.log(add2(5, 10)); // Output: 15
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
const circle = new Circle(5);
console.log(circle.area()); // Output: 78.53981633974483
const user = {
    username: "john_doe",
    email: "john.doe@example.com"
};
console.log(user.username); // Output: john_doe
console.log(user.email); // Output: john.doe@example.com
// Generics :- Generics in TypeScript are a powerful feature that allows you to create reusable components and functions that can work with a variety of types. A generic type is defined using angle brackets <> and can be used to specify a placeholder for a type that will be provided when the component or function is used. Generics enable you to write flexible and type-safe code, as they allow you to work with different types while still maintaining type safety.
// Example of a generic function
function identity(arg) {
    return arg;
}
console.log(identity("Hello, Generics!")); // Output: Hello, Generics!
console.log(identity(42)); // Output: 42
//Type Narrowing :- Type narrowing in TypeScript is the process of refining the type of a variable within a specific block of code based on certain conditions. This allows you to work with more specific types and access properties or methods that are only available on those types. Type narrowing can be achieved using type guards, which are expressions that check the type of a variable at runtime and narrow its type accordingly.
// Example of type narrowing using type guards
function printId1(id) {
    if (typeof id === "number") {
        console.log(`ID is a number: ${id}`);
    }
    else {
        console.log(`ID is a string: ${id}`);
    }
}
printId1(123); // Output: ID is a number: 123
printId1("abc"); // Output: ID is a string: abc
// TypeScript provides various type guards, such as 'typeof', 'instanceof', and user-defined type guards, to help with type narrowing and ensure that your code is type-safe while still being flexible enough to handle different types.
// Example of type narrowing using 'instanceof' type guard
class Dog {
    bark() {
        console.log("Woof!");
    }
}
class Cat {
    meow() {
        console.log("Meow!");
    }
}
function makeAnimalSound(animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
const myDog = new Dog();
const myCat = new Cat();
makeAnimalSound(myDog); // Output: Woof!
makeAnimalSound(myCat); // Output: Meow!
function move1(animal) {
    if ("fly" in animal) {
        animal.fly();
    }
    else {
        animal.swim();
    }
}
const myBird = {
    fly() {
        console.log("The bird is flying.");
    }
};
const myFish = {
    swim() {
        console.log("The fish is swimming.");
    }
};
move1(myBird); // Output: The bird is flying.
move1(myFish); // Output: The fish is swimming.
