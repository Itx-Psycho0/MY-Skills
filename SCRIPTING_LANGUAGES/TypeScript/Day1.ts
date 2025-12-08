//DAY 1 -------- TyperScript Basics ---------

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
let message: string = "Hello, TypeScript!";
console.log(message);

// Output:
// Hello, TypeScript!