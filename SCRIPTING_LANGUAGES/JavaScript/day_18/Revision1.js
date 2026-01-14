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