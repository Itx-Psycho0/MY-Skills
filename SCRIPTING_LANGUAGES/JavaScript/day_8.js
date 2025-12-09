// ----- Day 8: JavaScript Behind Working ----- //

// Lets revise what is js
// js is a high-level, Prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles, interpreted or just-in-time compiled language , garbage-collected language with first-class Function and a non-blocking Event Loop concurrency Model

// High level 
// Does not require managing memory manually

// Garbage-collected
// Memory management is done automatically by the js engine

// interpreted or just-in-time compiled language
// js code is either interpreted or compiled just before execution

// multi-paradigm
// supports different programming styles
// object-oriented, imperative, and declarative (e.g. functional programming) styles.

// prototype-based object-orientation
// objects can inherit properties and methods from other objects

// first class functions
// functions are treated as first-class citizens, meaning they can be assigned to variables, passed as arguments to other functions, and returned from functions

// Dynamic language
// types are determined at runtime and variables can hold values of any type without explicit type declarations

// single-threaded
// executes code in a single thread of execution, meaning only one operation can be performed at a time

// non-blocking Event Loop concurrency Model
// allows js to perform asynchronous operations without blocking the main thread, enabling efficient handling of I/O operations and other time-consuming tasks

// =======================================================================

// Js Engine
// A js engine is a program or interpreter that executes js code. It takes the js code as input, parses it, compiles it (if necessary), and executes it to produce the desired output. Some popular js engines include V8 (used in Google Chrome and Node.js), SpiderMonkey (used in Mozilla Firefox), and JavaScriptCore (used in Safari).

// Working of js engine
// The working of a js engine can be summarized in the following steps:

// 1. Parsing: The js engine reads the js code and breaks it down into smaller components called tokens. It then analyzes the syntax and structure of the code to create an Abstract Syntax Tree (AST).
// 2. Compilation: The AST is then compiled into an intermediate representation, which is often in the form of bytecode or machine code. This step may involve optimizations to improve performance.
// 3. Execution: The compiled code is executed by the js engine. The engine manages memory allocation, garbage collection, and handles the execution of functions and operations defined in the js code.
// 4. Just-In-Time (JIT) Compilation: Some js engines use JIT compilation, which means that parts of the code are compiled on-the-fly during execution. This allows for further optimizations based on runtime information, improving performance for frequently executed code paths.
// 5. Event Loop: The js engine incorporates an event loop mechanism to handle asynchronous operations. It allows the engine to process events, callbacks, and promises without blocking the main thread, enabling efficient handling of I/O operations and other time-consuming tasks.
// Overall, the js engine plays a crucial role in executing js code efficiently and effectively, enabling developers to build dynamic and interactive web applications.

// js components
// 1. Call Stack
// 2. Heap
// 3. Event Loop
// 4. Callback Queue
// 5. Microtask Queue
// 6. Web APIs
// 7. Memory Management
// 8. Just-In-Time (JIT) Compiler
// 9. Garbage Collector
// 10. Execution Context
// 11. Scope Chain
// 12. Closures
// 13. Promises and Async/Await
// 14. Modules
// 15. Error Handling
// 16. Debugging Tools
// 17. Performance Optimization
// 18. Security Mechanisms
// 19. Event Emitters
// 20. Typed Arrays
// 21. Internationalization (i18n) Support
// 22. WebAssembly Integration
// 23. DOM Manipulation APIs
// 24. Networking APIs (e.g., Fetch, XMLHttpRequest)
// 25. Storage APIs (e.g., LocalStorage, SessionStorage, IndexedDB)
// 26. Multimedia APIs (e.g., Audio, Video, Canvas)
// 27. Geolocation API
// 28. Web Workers
// 29. Service Workers
// 30. WebSockets
// 31. EventSource (Server-Sent Events)
// 32. History API
// 33. URL and URLSearchParams APIs
// 34. Performance API
// 35. Navigation Timing API
// 36. Resource Timing API
// 37. User Timing API
// 38. Intersection Observer API
// 39. Mutation Observer API
// 40. Resize Observer API
// 41. Clipboard API
// 42. Drag and Drop API
// 43. Fullscreen API
// 44. Pointer Events API
// 45. Touch Events API
// 46. Vibration API
// 47. Battery Status API
// 48. Network Information API
// 49. Ambient Light Sensor API
// 50. Proximity Sensor API
// and many more...

// =======================================================================

// Js Runtime Environment
// A JavaScript runtime environment is a software environment that provides the necessary infrastructure and resources for executing JavaScript code outside of a web browser. It includes a JavaScript engine, libraries, APIs, and other components that enable developers to run JavaScript applications on various platforms, such as servers, desktops, and mobile devices. Examples of popular JavaScript runtime environments include Node.js, Deno, and Electron.

// Working of js runtime environment
// The working of a JavaScript runtime environment can be summarized in the following steps:  
// 1. Initialization: When a JavaScript runtime environment is started, it initializes the necessary components, including the JavaScript engine, libraries, and APIs required for executing JavaScript code.
// 2. Loading Code: The runtime environment loads the JavaScript code to be executed. This can be done by reading files from the file system, receiving code from a network request, or other means.
// 3. Execution: The JavaScript engine within the runtime environment interprets and executes the loaded JavaScript code. It manages memory allocation, garbage collection, and handles the execution of functions and operations defined in the code.
// 4. Event Loop: The runtime environment incorporates an event loop mechanism to handle asynchronous operations. It allows the engine to process events, callbacks, and promises without blocking the main thread, enabling efficient handling of I/O operations and other time-consuming tasks.
// 5. APIs and Libraries: The runtime environment provides various APIs and libraries that developers can use to interact with the underlying system, such as file system access, networking, databases, and more.
// 6. Module System: Many JavaScript runtime environments support a module system that allows developers to organize their code into reusable modules, making it easier to manage dependencies and share code across different parts of an application.
// 7. Debugging and Profiling: JavaScript runtime environments often include tools for debugging and profiling code, allowing developers to identify and fix issues, optimize performance, and monitor resource usage.
// Overall, a JavaScript runtime environment provides the necessary tools and infrastructure for executing JavaScript code outside of a web browser, enabling developers to build a wide range of applications using JavaScript.

// =======================================================================

// What is an Execution Context?

// An execution context is an abstract concept that represents the environment in which JavaScript code is executed. It contains information about the current state of the program, including variables, functions, and the scope chain. Each time a function is called, a new execution context is created and added to the call stack. The execution context determines how variables and functions are accessed and how the code is executed within that context.

// Types of Execution Contexts:
// 1. Global Execution Context
// 2. Function Execution Context
// 3. Eval Execution Context
// 4. Module Execution Context
// 5. Async Execution Context
// 6. Event Handler Execution Context
// 7. Strict Mode Execution Context
// 8. Block Execution Context
// 9. With Execution Context
// 10. Constructor Execution Context
// 11. Arrow Function Execution Context
// 12. Proxy
// 13. Generator Function Execution Context
// 14. Async Function Execution Context
// 15. Web Worker Execution Context
// and more...
// Each type of execution context has its own characteristics and rules for variable scoping, function invocation, and code execution. Understanding execution contexts is crucial for comprehending how JavaScript works under the hood and how to write efficient and effective code.
// =======================================================================

// Call Stack
// The call stack is a data structure used by the JavaScript engine to keep track of function calls and their execution contexts. It follows the Last In First Out (LIFO) principle, meaning that the most recently added function call is the first one to be executed. When a function is called, a new execution context is created and pushed onto the call stack. When the function completes its execution, its execution context is popped off the stack, and control returns to the previous context. The call stack helps manage the flow of function calls and ensures that each function is executed in the correct order.

// Example of Call Stack
function firstFunction() {
    console.log("Inside firstFunction");
    secondFunction();
    console.log("Exiting firstFunction");
}
function secondFunction() {
    console.log("Inside secondFunction");
}
firstFunction();

// ===============================================================

// Heap
// The heap is a region of memory used for dynamic memory allocation in JavaScript. It is where objects, arrays, and other complex data structures are stored. Unlike the call stack, which has a fixed size and is used for managing function calls, the heap can grow and shrink as needed to accommodate the creation and deletion of objects. The heap is managed by the JavaScript engine's garbage collector, which automatically frees up memory that is no longer being used by the program. This allows developers to create and manipulate objects without worrying about manual memory management.   

// Example of Heap
let obj1 = { name: "Alice", age: 30 };
let obj2 = { name: "Bob", age: 25 };
let arr = [obj1, obj2];
console.log(arr); // Output: [ { name: 'Alice', age: 30 }, { name: 'Bob', age: 25 } ]
// In this example, the objects obj1 and obj2, as well as the array arr, are stored in the heap memory. The JavaScript engine manages the memory allocation and deallocation for these objects automatically.

// ===============================================================


// ------ Day 8 Ends Here --------------------------------