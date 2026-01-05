// ------- Day 14 ------------//
// Object-oriented programming in JavaScript

// Introduction to Object-Oriented Programming
// Object-oriented programming, or OOP in short, is a programming paradigm based on the concept of objects. A paradigm simply means the style of the code, so how we write and organize code. We use objects to model aspects of the real world, such as a user or a to-do list item, or even more abstract features like an HTML component or some kind of data structure.

// Objects can contain data, which we call properties, and also code, which we call methods. By using objects, we pack all the data and the corresponding behavior into one big block. This makes it very easy to act directly on the data.

// In OOP, objects are self-contained pieces or blocks of code, like small applications on their own. We use these objects as building blocks of our applications and make objects interact with one another. These interactions happen through a so-called public interface, also called an API. This interface is basically a set of methods that code outside the objects can access to communicate with the object.


// Class
// A class is a blueprint for creating objects. It defines the properties and methods that the objects created from the class will have.

// javascript does not have built-in support for classes like some other programming languages, but we can create classes using functions and prototypes.

// Instance
// By using the class create a object that called instance

// how de we actually design classes?

// for making a good class we have to follow some principles of OOP
// 1. Encapsulation
// 2. Abstraction
// 3. Inheritance
// 4. Polymorphism

// abstraction
// abstraction is the concept of hiding the complex implementation details and showing only the necessary parts to the user. It helps in reducing complexity and increases efficiency.

// Encapsulation
// Keeping prop. amd methods private inside a class, so they are not accessible from outside the class. Some methods can be exposed as a public interface (API) to the outside world.

// Inheritance
// Inheritance is a mechanism where a new class can inherit properties and methods from an existing class. This helps in code reusability and establishing a relationship between classes.

// Polymorphism
// Polymorphism is the ability of different classes to be treated as instances of the same class through a common interface. It allows methods to do different things based on the object it is acting upon.


// In js we have prototype, and all objects are linked to that prototype object.

//Prototypal Inheritance
// In JavaScript, prototypal inheritance is a mechanism by which objects can inherit properties and methods from other objects. This is achieved through the prototype chain, where each object has a prototype object that it can delegate property and method lookups to.

// Constructor Function
// A constructor function is a special type of function that is used to create and initialize objects. When called with the new keyword, it creates a new object and sets its prototype to the constructor's prototype property.

// ES6 Classes
// In ES6, JavaScript introduced a new syntax for creating classes using the class keyword. This syntax is syntactical sugar over the existing prototype-based inheritance and provides a more familiar way to create objects and deal with inheritance.

// Object.create()
// The Object.create() method is used to create a new object with a specified prototype object and properties. This allows for more direct control over the prototype chain and can be used to implement inheritance in a more flexible way.