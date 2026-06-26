const msg: string = "Hello, TypeScript!";
console.log(msg);

//==============================================================================
//Basic Types
const bootupMessage: string = "starting server...";
const port: number = 3000;
const isOnline: boolean = true;
const noValue: null = null;
const notDefined: undefined = undefined;

//const bootupMessage: string = 123;
// Error: Type 'number' is not assignable to type 'string'.

const suportAilog: string = "CRITICAL: Boots cut the power cord again";
console.log(suportAilog);



//==============================================================================
//Type Inference
let supportAilogs = "Warning: Boots cut the power cord again";
console.log(supportAilogs);
// supportAilogs = 123;
// Error: Type 'number' is not assignable to type 'string'.



//==============================================================================
//any Type
let supportAilogsAny: any = "Warning: Boots cut the power cord again";
console.log(supportAilogsAny);

supportAilogsAny = 123;
console.log(supportAilogsAny);

supportAilogsAny = true;
console.log(supportAilogsAny);


//==============================================================================
//Function type syntax
function add(a: number, b: number): number {
    return a + b;
}

const calCulateTotal = (p: number, q: number, d: number): number => {
    return p * q * (1 - d);
}

//==============================================================================
// void type
function logMessage(message: string): void {
    console.log(message);
}

logMessage("This is a log message.");


//==============================================================================
//type alias
type User = {
    name: string;
    age: number;
    isAdmin: boolean;
};

const user1: User = {
    name: "Alice",
    age: 30,
    isAdmin: true,
};

type supportResponse = {
    (s: string): string;
}
function greetUser(user: User, response: supportResponse): void {
    const message = `Hello, ${user.name}!`;
    const responseMessage = response(message);
    console.log(responseMessage);
}

const responseFunction: supportResponse = (message: string) => {
    return `Support Response: ${message}`;
};

greetUser(user1, responseFunction);


//==============================================================================
//import type
// import type { User as UserType } from './UserTypes';
// This way TypeScript knows that you're only importing types, and it can drop the imports so they don't generate extra JavaScript code when your project is compiled. This means a smaller final bundle size. This syntax also works:


//==============================================================================
//union types
function getTicketInfo(id: string | number) {
    if (typeof id === "string") {
        id = id.split("-")[1]
        id = parseInt(id, 10)
    }
    return `Processing ticket: ${id}`
}


//==============================================================================
//Optional Parameters
function createUser(name: string, age?: number): User {
    return {
        name,
        age: age ?? 0, // Use nullish coalescing to provide a default value
        isAdmin: false,
    };
}

const newUser = createUser("Bob");
console.log(newUser);


//============================================================================
//Literal Types
type Direction = "up" | "down" | "left" | "right";

function move(direction: Direction) {
    console.log(`Moving ${direction}`);
}

move("up"); // Valid
// move("forward"); // Error: Argument of type '"forward"' is not assignable to parameter of type 'Direction'.


//============================================================================
// Array Types
const numbers: number[] = [1, 2, 3, 4, 5];
const strings: string[] = ["a", "b", "c"];
const booleans: boolean[] = [true, false, true];

const mixedArray: (number | string)[] = [1, "two", 3, "four"];

const way2ndArray: Array<number> = [10, 20, 30];


//============================================================================
//Object Literal Types
type Product = {
    id: number;
    name: string;
    price: number;
};

const product1: Product = {
    id: 1,
    name: "Laptop",
    price: 999.99,
};

//=============================================================================
//Sets
const uniqueNumbers: Set<number> = new Set([1, 2, 3, 4, 5]);
uniqueNumbers.add(6);
uniqueNumbers.delete(3);
console.log(uniqueNumbers.has(2));


//=============================================================================
//Maps
const userRoles: Map<string, string> = new Map();
userRoles.set("Alice", "Admin");
userRoles.set("Bob", "User");
console.log(userRoles.get("Alice"));

userRoles.delete("Bob");
console.log(userRoles.has("Bob"));


//=============================================================================
//Readonly Properties
type ReadonlyUser = {
    readonly name: string;
    readonly age: number;
};

const readonlyUser: ReadonlyUser = {
    name: "Charlie",
    age: 25,
};

// readonlyUser.name = "Dave"; // Error: Cannot assign to 'name' because it is a read-only property.
// readonlyUser.age = 30; // Error: Cannot assign to 'age' because it is a read-only property.
// readonly vs const: readonly is a TypeScript type modifier that makes properties of an object immutable, while const is a JavaScript keyword that prevents reassignment of a variable. readonly allows you to create objects with properties that cannot be changed after they are set, while const ensures that the variable itself cannot be reassigned to a different value.


//=============================================================================
// as const
const directions = ["up", "down", "left", "right"] as const;
type DirectionLiteral = typeof directions[number];

function moveDirection(direction: DirectionLiteral) {
    console.log(`Moving ${direction}`);
}

moveDirection("up"); // Valid
// moveDirection("forward"); // Error: Argument of type '"forward"' is not assignable to parameter of type 'DirectionLiteral'.


//Object.freeze() is a method in JavaScript that prevents modifications to an object. When an object is frozen, you cannot add, remove, or change its properties. This is useful for creating immutable objects.
//The Object.freeze() method is a built-in JavaScript function that prevents modifications to the top level of an object at runtime. It makes the object immutable, but it does not affect TypeScript's type system.

const defaultPreferences = Object.freeze({
    name: "Kreese",
    doNotDisturb: false,
    outOfOffice: false,
});


//Satifies Operator
type UserProfile = {
    name: string;
    age: number;
    isAdmin: boolean;
};

const userProfile = {
    name: "Eve",
    age: 28,
    isAdmin: true,
} satisfies UserProfile;

// The satisfies operator is a TypeScript feature that allows you to check if an object conforms to a specific type without actually assigning it to that type. It is used for type checking and can help catch errors at compile time. In the example above, the userProfile object is checked against the UserProfile type to ensure it has the correct structure and types for its properties.



//==============================================================================
//Tuples
type Point = [number, number];

const point: Point = [10, 20];

const [x, y] = point;
console.log(`X: ${x}, Y: ${y}`);

// Tuples allow you to define an array with a fixed number of elements where each element can have a different type. In the example above, the Point type is defined as a tuple with two elements: the first element is a number representing the x-coordinate, and the second element is a number representing the y-coordinate.


//==============================================================================
//Intersection Types
type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const elevatedEmployee: ElevatedEmployee = {
    name: "Frank",
    privileges: ["manage-users", "edit-content"],
    startDate: new Date("2020-01-01"),
};

// Intersection types allow you to combine multiple types into one. In the example above, the ElevatedEmployee type is an intersection of the Admin and Employee types, meaning it has all the properties of both types.    


//==============================================================================
//never Type
function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {
        // Loop forever
    }
}

// The never type represents values that never occur. It is used for functions that always throw an error or have an infinite loop, indicating that they will never return a value. In the example above, the throwError function throws an error and does not return anything, while the infiniteLoop function runs indefinitely without returning.


//=============================================================================
//Interfaces
interface UserInterface {
    name: string;
    age: number;
    isAdmin: boolean;
}

const userInterface: UserInterface = {
    name: "Grace",
    age: 32,
    isAdmin: false,
};

// Interfaces in TypeScript are used to define the structure of an object. They can be implemented by classes or used to type-check objects. In the example above, the UserInterface defines the properties that a user object should have, and the userInterface variable is typed accordingly


//Extending Interfaces
interface AdminInterface extends UserInterface {
    privileges: string[];
}

const adminInterface: AdminInterface = {
    name: "Hank",
    age: 40,
    isAdmin: true,
    privileges: ["manage-users", "edit-content"],
};

// Extending interfaces allows you to create a new interface that inherits properties from an existing interface. In the example above, the AdminInterface extends the UserInterface, adding a new property called privileges. This means that any object of type AdminInterface must have all the properties of UserInterface as well as the additional privileges property.


//=============================================================================
//Enums
//Enums are a set of defined constants. 
enum Direction1 {
    North, // 0
    East, // 1
    South, // 2
    West, // 3
}

let myDirection: Direction1 = Direction1.North;
console.log(myDirection); // Outputs: 0


// Enum Compilation
// Unlike most TypeScript features, enums generate additional JavaScript code at runtime. Let's see what happens when we compile this enum (we'll talk about how to compile manually later):

enum Class {
    Rogue,
    Mage,
    Warrior,
    Priest,
}

// We get a JavaScript object that looks like this:

// var Class;
// (function (Class) {
//   Class[(Class["Rogue"] = 0)] = "Rogue";
//   Class[(Class["Mage"] = 1)] = "Mage";
//   Class[(Class["Warrior"] = 2)] = "Warrior";
//   Class[(Class["Priest"] = 3)] = "Priest";
// })(Class || (Class = {}));

// This generated code creates the bidirectional mapping that we talked about before:

// From name to value: Class["Rogue"] = 0
// From value to name: Class[0] = "Rogue"
// String Enum Compilation
// Strings compile in a similar way:

// enum Class {
//   Rogue = "Rogue",
//   Mage = "Mage",
//   Warrior = "Warrior",
//   Priest = "Priest",
// }

// Compiles to:

// var Class;
// (function (Class) {
//   Class["Rogue"] = "Rogue";
//   Class["Mage"] = "Mage";
//   Class["Warrior"] = "Warrior";
//   Class["Priest"] = "Priest";
// })(Class || (Class = {}));

// String enums do not support reverse mapping - the compiled JavaScript only maps from name to string value, not the other way around.


//Pros of Unions
// Unions are what you use for complex types, so it feels consistent to use them for primitives as well
// Unions don't add any additional runtime code
// It's less verbose to write a union
// Pros of Enums
// Enums are slightly easier to refactor because if you change the value of a label (e.g. "Hearts" to "hearts"), you don't have to change the string literal in every place you use it.
// If you're using numerical enums, then the reverse mapping can be useful I guess.
// CardSuit.Hearts provides more context than just "Hearts". That said, any good editor is going to say type CardSuit on hover, so it's not a huge win.


//=============================================================================
//Type Narrowing
// Type narrowing is the process of refining the type of a variable within a specific scope. TypeScript uses control flow analysis to determine the type of a variable based on the code that has been executed. This allows for more precise type checking and can help catch errors at compile time.

function printId(id: number | string) {
    if (typeof id === "string") {
        console.log(`ID is a string: ${id.toUpperCase()}`);
    } else {
        console.log(`ID is a number: ${id.toFixed(2)}`);
    }
}

printId("abc123");
printId(456);

// unknown Type Narrowing
function processValue(value: unknown) {
    if (typeof value === "string") {
        console.log(`Value is a string: ${value.toUpperCase()}`);
    } else if (typeof value === "number") {
        console.log(`Value is a number: ${value.toFixed(2)}`);
    } else {
        console.log("Value is of an unknown type.");
    }
}

processValue("hello");
processValue(42);
processValue(true);


//=============================================================================
//In Operator Narrowing
type AdminUser = {
    name: string;
    privileges: string[];
};

type RegularUser = {
    name: string;
    startDate: Date;
};

type UserType = AdminUser | RegularUser;

function printUserInfo(user: UserType) {
    console.log(`Name: ${user.name}`);
    if ("privileges" in user) {
        console.log(`Privileges: ${user.privileges.join(", ")}`);
    }
    if ("startDate" in user) {
        console.log(`Start Date: ${user.startDate.toDateString()}`);
    }
}

const adminUser: AdminUser = {
    name: "Alice",
    privileges: ["manage-users", "edit-content"],
};

const regularUser: RegularUser = {
    name: "Bob",
    startDate: new Date("2022-01-01"),
};

printUserInfo(adminUser);
printUserInfo(regularUser);


// as Operator Narrowing
function processInput(input: string | number) {
    const processedInput = input as string; // Type assertion
    console.log(`Processed Input: ${processedInput.toUpperCase()}`);
}

processInput("hello");
// processInput(42); // This will cause a runtime error because 42 is not a string.





