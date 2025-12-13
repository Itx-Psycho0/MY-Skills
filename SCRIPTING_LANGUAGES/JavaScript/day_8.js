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

// The Memory Lifecycle in JavaScript

// How and where are variables created in javascript
//unlike other languages memmory is automatically managed by js behind the scenes
// every value created in js goes through memory lifecycle

//MEMORY LIFECYCLE
//allocate memory :-
let temp = 2;
//whenever we assign a value to a new variable, the engine automatically allocates(reverses) a piece of memory to store the value.

// 

// Use memory :-
temp = temp + 5;
round(temp);
// while code i running , the value is written, read, and updated in allocated piece of memory

// Release Memory
//temp is removed from the memory when its no longer needed.


//-----------------------------------------

//Shallow vs Deep Copy

const me = {
    name : "Psycho",
    age : 19,
    skill: ["Creative","Techy"]
}
const who = me;
me.name = "Anurag"

console.log(me.name);
console.log(who.name);
// Output : Anurag

function getName (OriginalPerson, Name){
    OriginalPerson.name = Name;
    return OriginalPerson;
}
const who2 = getName(me,'Psycho')
console.log(who2.name);
console.log(me.name);
// Output : Psycho


//-----------------------------
const meCopy = {...me}
console.log(meCopy)
// Output : { name: 'Psycho', age: 19, skill: [ 'Creative', 'Techy' ] }
meCopy.skill.push('smart')
console.log(meCopy.skill);
// Output : [ 'Creative', 'Techy', 'smart' ]
console.log(me.skill);
// Output : [ 'Creative', 'Techy', 'smart' ]
meCopy.name = "Anurag"
console.log(meCopy.name);
// Output : Anurag
console.log(me.name);
// Output : Psycho

// But using spread opr we make copy the obj on first lvl not so its called shallow copy is true but in the deep if we add array in the obj and make change in copy of obj it also change the array of original copy , there us the drawback of spread opr.

//---------
const meClone = JSON.parse(JSON.stringify(me))
console.log(meClone)
meClone.name = "Anurag"

console.log(meClone.name);
// Output : Anurag
console.log(me.name);
// Output : Psycho
meClone.skill.push('sharp')
console.log(meClone.skill);
// Output : [ 'Creative', 'Techy', 'smart', 'sharp' ]
console.log(me.skill);
// Output : [ 'Creative', 'Techy', 'smart' ]



//Its a deep copy it also copy array or any obj in the obj and if changes the clone it not effect on the original.

//---------------------------------

//Memory Management: Garbage collection
// Recall that in JavaScript, each value we create goes through a memory lifecycle: first, memory is allocated for the value; then, the allocated memory is used; and finally, when no longer needed, the memory is released. We have already discussed allocation in depth, and usage is straightforward, so now we focus on how memory is released in the JavaScript engine.

// Since values are stored in both the stack and the heap, we need to analyze both storage mechanisms to understand memory release.

// Memory Release in the Call Stack
// Memory management in the call stack is simple. Variable environments where primitives are stored are deleted when their corresponding execution context pops off the stack. For example, consider the call stack with the global execution context and two additional function call contexts. The global context has a variable X (a primitive), and the calcAge function context has variables Y and Z. These variables reside in the call stack. When the calcAge execution context pops off, its variable environment is removed from memory along with the context itself. Thus, variables stored in execution contexts are removed as soon as their contexts are gone, releasing the occupied memory for future use.

// Note that the global execution context never disappears during the program's lifetime, so variables like X in the global context remain in the stack indefinitely. This means global variables persist for the entire runtime, which is intuitive.

// Memory Management in the Heap and Garbage Collection
// Memory management in the heap is considerably more complex. To delete old, unused objects from the heap and free memory, JavaScript engines employ a process called garbage collection. This is the central tool for memory management in any JavaScript engine. Importantly, garbage collection runs automatically within the engine whenever it deems necessary. Developers cannot control when heap memory is cleared, which is beneficial because automatic memory management simplifies development.

// You can think of garbage collection as an automatic cleaning service that periodically identifies and removes old, unused items from your house. Different implementations exist, but all modern engines use the mark-and-sweep algorithm. Let's explore how this algorithm works by revisiting the call stack and heap.

// Consider objects named hobbies and tasks stored in the heap, referenced by variables in the stack. These variables store references to the actual objects in the heap. Objects can also reference other objects in the heap. Note that objects in the heap include not only objects but also arrays, functions, and other data structures like sets or maps.

// The Mark-and-Sweep Algorithm
// The first phase is the mark phase, where all objects reachable from a root are marked as alive. Roots are starting points for the algorithm, typically including the global execution context and any execution context of running functions. The algorithm traverses from these roots to mark all reachable objects as alive. For example, objects referenced by variables in the stack or by other reachable objects are marked alive.

// Roots can also include event listeners, active timers, and closures. Objects reachable from these roots are also considered alive. Conversely, objects not reachable from any root are not marked alive and are considered dead. For instance, an object in the heap not referenced by any root is dead.

// The second phase is the sweep phase, where all unmarked (unreachable) objects are deleted. The algorithm reclaims the memory occupied by these objects for future allocations. For example, if an object is unreachable, it will be deleted and its memory reclaimed during this phase.

// Example of Garbage Collection
// Suppose the getTasks function finishes execution and its execution context pops off the stack. If the garbage collector runs at this point, objects previously referenced only by getTasks become unreachable. These objects will be swept away, and their memory reclaimed. However, objects referenced by the global execution context remain alive and are never deleted, as the global context persists throughout the program's lifetime.

// Memory Leaks
// A memory leak occurs when an object no longer needed by the application remains reachable by the garbage collector from a root, causing it to be marked alive and not deleted. This is analogous to forgetting to throw away items you no longer need, cluttering your house unnecessarily. In JavaScript, common causes include old and unnecessary event listeners and timers that continue referencing objects. To avoid memory leaks, always deactivate timers and event listeners when no longer required, especially if they reference large objects. Also, avoid declaring large objects as global variables, as these will never be garbage collected.

// Summary and Further Topics
// This overview explains how garbage collection runs repeatedly inside the user's browser while using the application, ensuring memory stays clean and uncluttered of unnecessary objects. In reality, memory management is more complex, involving multiple heaps, object aging, and multiple garbage collection algorithms such as generational garbage collection. However, this broad overview provides a solid understanding of automatic memory management inside the engine.

// Before moving on, it is important to mention four additional major topics related to JavaScript internals that will be covered later in the course:

// Closures: Deeply explored in the "Closer Look at Functions" section.
// Prototypal Inheritance: Covered in the "Object Oriented Programming" section.
// Event Loop: Detailed in the "Asynchronous JavaScript" section.
// DOM Internals: Discussed in the "Advanced DOM and Events" section.
// These topics are fundamental but are introduced later to ensure better retention and understanding.

// Conclusion
// This section on how JavaScript works behind the scenes was extensive and introduced many new and challenging concepts. It is normal if some parts were difficult to grasp fully. Even partial understanding provides a significant advantage over many developers unaware of these internals. Congratulations on completing this section. Take a break, and we will continue with the next section soon.

// Key Takeaways
// Memory in JavaScript is managed through allocation, usage, and release phases.
// The call stack handles primitive values simply by removing variable environments when execution contexts pop off.
// Heap memory management is complex and handled by automatic garbage collection using the mark-and-sweep algorithm.
// Memory leaks occur when objects are no longer needed but remain reachable, often due to lingering event listeners or timers.

// ------ Day 8 Ends Here --------------------------------