var msg = "Hello, TypeScript!";
console.log(msg);
//==============================================================================
//Basic Types
var bootupMessage = "starting server...";
var port = 3000;
var isOnline = true;
var noValue = null;
var notDefined = undefined;
//const bootupMessage: string = 123;
// Error: Type 'number' is not assignable to type 'string'.
var suportAilog = "CRITICAL: Boots cut the power cord again";
console.log(suportAilog);
//==============================================================================
//Type Inference
var supportAilogs = "Warning: Boots cut the power cord again";
console.log(supportAilogs);
// supportAilogs = 123;
// Error: Type 'number' is not assignable to type 'string'.
//==============================================================================
//any Type
var supportAilogsAny = "Warning: Boots cut the power cord again";
console.log(supportAilogsAny);
supportAilogsAny = 123;
console.log(supportAilogsAny);
supportAilogsAny = true;
console.log(supportAilogsAny);
//==============================================================================
//Function type syntax
function add(a, b) {
    return a + b;
}
var calCulateTotal = function (p, q, d) {
    return p * q * (1 - d);
};
//==============================================================================
// void type
function logMessage(message) {
    console.log(message);
}
logMessage("This is a log message.");
var user1 = {
    name: "Alice",
    age: 30,
    isAdmin: true,
};
function greetUser(user, response) {
    var message = "Hello, ".concat(user.name, "!");
    var responseMessage = response(message);
    console.log(responseMessage);
}
var responseFunction = function (message) {
    return "Support Response: ".concat(message);
};
greetUser(user1, responseFunction);
