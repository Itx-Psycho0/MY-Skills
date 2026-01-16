// Day 18
// Revision
// SO JS MADE BY BRENDEN EICH IN JUST 10 DAYS IN 1995
// JS First was Mocha then its converts into livescript then javascript
// and then in 20s js standardized by ecma also known as ecma script.
// js is case sensitive and unicode using language.
// we have var let const to define the variable
// var is functional scope . and its hoisted.
// means var is global for in any block but local in functional block. and if we declare a variable using a var and if call it before the decalaration its hoisted the decalaration with value undefined.
// global variable is the variable where script written . that connect global object. the global object of the broswer is window and for node js is global , for not confusion and became global object for everyone the common give globalthis to global object.
// means
// if we write 
var a = 5;
// console.log(window.a) // 5
//because its make global variable so global object access it. but the window global object work only with var. not let and const
// and if we write
globalThis.b = 6
console.log(globalThis.b) // 6 so its work for all. for browser and node js.
// there also sencond scope is functional scope :- means when we used function and the scope for used is function scope.
function fn(){
    //function scope 
    // so var in it local thats why it is functonal scope.
    // let are const also local , but var not local in other.
}
//like , let and const are block scope , and they hoisted its a debate some said it is and says not , but i say before declaration it is in tdz(temporal dead zone).
// so global scope
if (true){
    //it is block scope any thing in curly called block scope, expect that function's curly
    //if you define var here it will treat as global not local that why we say it fncl scope
    var x = 5
}
console.log(x) // 5

// there is one scope also modulo scope that uses for modules.

// why let and const not work with window obj bcz devloper want that protects data . so like var they don't connect with global obj , but they in global lexical environment

// and we var can reassign re declare, let can re assgin  but no re declare , and const not re aasign no re declare but it mutate.

var s = 4
console.log(s) // 4
var s = 5
console.log(s) // 5 

let z = 6
console.log(x)
// let z = 4
// console.log(4) //Identifier 'z' has already been declared 

const objs = {1:"a"}
objs[1] = "b"
console.log(objs) // {1: 'b'}

// Data Structures
// we have 7 primitives , string , numbers , bigint, Float, Boolean, null, Undefined
// and refernce data structre , object, array , function (yes function treat as a object) but these all are says as object.

//but
let y = null
console.log(typeof y) // object //in js we says its like error

// data coercion or data type conversion 
// so data coercion means language autmatically convert the type of data, and implicit is we convert the data.
// js is dynamically typed language so 
console.log("77"-"7") // 70 //coercion

// convert string to number
// we have parseINt, parseFloat, NUmber() and unary operator
// *for use parse int , use radix parameter //pareseInt(varName,2)--> 2- binary, 10-> integers, 16--> hexadecimal, 8--> octal
console.log(+'1.1'+1.1)

// literals 
// array literals , booleans literals, string literals, object literals, exp literals, floating point literals , numeber literals
// literals means a way of writing of that data type

// more about literals you will find there but i says its nothing
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#literals

//. yeah one thing boolean primtive value are the value you know, but boolean objecct is useless this is just objec that value its nothing with true false
let m = new Boolean(false)
let n = false
if (n){
    console.log("yes n")
}
if (m){
    console.log("yes m")
}
// you see its a object . its gives true like yeah object have value
console.log(m) // [Boolean: False])


// special char and escapig values
// we know already  \(backslash is "king")


//  Falsy values 
// false
// undefined
// null
// 0
// NaN
// the empty string ("")


// i revise about if else swtich case, and try if catch
// in error handling if we have finally block we return something in catch block and also return in finally block then finally block return overwirte the catch block.

// and other thing error also have object name error where we give name and msg.

// The name property provides the general class of Error (such as DOMException or Error), while message generally provides a more succinct message than one would get by converting the error object to a string.

function doSomethingErrorProne() {
  if (ourCodeMakesAMistake()) {
    throw new Error("The message");
  }
  doSomethingToGetAJavaScriptError();
}

try {
  doSomethingErrorProne();
} catch (e) {
  // Now, we actually use `console.error()`
  console.error(e.name); // 'Error'
  console.error(e.message); // 'The message', or a JavaScript error message
}

// Loops
// So many types of loops , first why we need loop
// so loop is something that do repetated task in one go