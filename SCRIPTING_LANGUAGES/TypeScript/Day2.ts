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


