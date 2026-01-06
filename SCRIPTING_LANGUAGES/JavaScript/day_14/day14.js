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

//Example of Connstructor Function
function Person(name,age){
    //instance properties
    this.fname = name
    this.age = age
    // Instance method
    // But you should avoid defining methods inside the constructor function as it creates a new copy of the method for each instance, which is inefficient. Instead, define methods on the prototype.
    //======================
    // this.greet = function(){
    //     console.log(`Hello, my name is ${this.fname} and i am ${this.age} years old.`)
    // }
}
const a = new Person("Alice",30)
console.log(a)

// Prototype
Person.prototype.greet = function(){
    console.log(`Hello, my name is ${this.fname} and i am ${this.age} years old.`)
}
console.log(Person.prototype)
a.greet()
console.log(a.__proto__===Person.prototype)
console.log(Person.prototype.isPrototypeOf(a))

// Person.prototype is the prototype object for all instances created using the Person constructor function. It contains properties and methods that are shared among all instances of Person. But it is not prototype of Person function itself.

//Prtotype Chain
console.log(a.toString())
console.log(a.__proto__.__proto__===Object.prototype)
console.log(Object.prototype.__proto__===null)

// =============================
function Car(Brand,speed){
    this.Brand = Brand
    this.speed = speed
}
Car.prototype.accelerate = function(){
    this.speed += 10
    console.log(`${this.Brand} is going to ${this.speed} km/h.`)
}
Car.prototype.brake = function(){
    this.speed -= 10
    console.log(`${this.Brand} is going to ${this.speed} km/h.`)

}
const myCar = new Car("Toyota", 150)
console.log(myCar)
myCar.accelerate()
myCar.brake()
//
const myCar2 = new Car("BMW", 120)
console.log(myCar2)
myCar2.accelerate()
myCar2.brake()
//=============================

// ES6 Class

//class expression
// const PersonCl = class{}

//class declaration
class PersonCl{
    constructor(name,age){
        this.name = name
        this.age = age
    }

    greet(){
        console.log(`Hello, my name is ${this.name} and i am ${this.age} years old.`)
    }

    get ages(){
        return this.age
    }

    set fullName(name){
        if(name.includes(' ')){
            this.name = name
        } else{
            alert(`${name} is not a full name!`)
        }
    }

}

const b = new PersonCl("Bob singh",25)
console.log(b)
console.log(b.__proto__===PersonCl.prototype)
b.greet()
console.log(PersonCl.prototype.isPrototypeOf(b))
console.log(b.ages)
b.fullName = "Bob Smith"
console.log(b.name)
// b.fullName = "Bob"
// console.log(b.name)

//=============================

// Important Points About Classes
// Classes are not hoisted, even if they are class declarations. Unlike function declarations, you cannot use a class before it is declared in the code.
// Classes are first-class citizens, meaning they can be passed into functions and returned from functions because they are special kinds of functions behind the scenes.
// The body of a class is always executed in strict mode, even if strict mode is not activated for the entire script

// Setters and Getters
const account = {
    owner: 'John Doe',
    movements: [200, 530, 120, 300],
    get latest(){
        return this.movements[this.movements.length - 1]
    },
    set latest(mov){
        this.movements.push(mov)
    }
}
console.log(account.latest)
account.latest = 50
console.log(account.movements)

// Static Methods
// Static methods are functions that are defined on the class itself, rather than on the prototype. They are called directly on the class, not on instances of the class.
class Helper{
    static isEven(num){
        return num % 2 === 0
    }
}
console.log(Helper.isEven(4))
console.log(Helper.isEven(5))

// Object.create()
const PersonProto = {
    greet(){
        console.log(`Hello, my name is ${this.name} and i am ${this.age} years old.`)
    },

    init(name,age){
        this.name = name
        this.age = age
    }
}

const c = Object.create(PersonProto)
c.name = "Charlie"
c.age = 28
console.log(c)
c.greet()
const d = Object.create(PersonProto)
d.init("David", 35)
console.log(d)
d.greet()


// =============================

class CarCl{
    constructor(Brand,speed){
        this.Brand = Brand
        this.speed = speed
    
    }
    accelerate(){
        this.speed += 10
        console.log(`${this.Brand} is going to ${this.speed} km/h.`)
    }
    brake(){
        this.speed -= 10
        console.log(`${this.Brand} is going to ${this.speed} km/h.`)
    }
    get speedUS(){
        return this.speed / 1.6
    }
    set speedUS(speed){
        this.speed = speed * 1.6
    }
}

const myCarCl = new CarCl("Audi", 140)
console.log(myCarCl)
myCarCl.accelerate()
myCarCl.brake()
console.log(myCarCl.speedUS)
myCarCl.speedUS = 100
console.log(myCarCl.speed)
console.log(myCarCl.speedUS)

//=============================

// Inheritance
const Student = function(name,age,course){
    Person.call(this,name,age)
    this.course = course
}

//inherit protoype
Student.prototype=Object.create(Person.prototype)
Student.prototype.greet = function(){
    console.log(`My name is ${this.name} and i am ${this.age} years old. I am studying ${this.course}.`)}

const mike = new Student("Mike",2022,"computer")
mike.greet()

//=============================
// function Car(Brand,speed){
//     this.Brand = Brand
//     this.speed = speed
// }
// Car.prototype.accelerate = function(){
//     this.speed += 10
//     console.log(`${this.Brand} is going to ${this.speed} km/h.`)
// }
// Car.prototype.brake = function(){
//     this.speed -= 10
//     console.log(`${this.Brand} is going to ${this.speed} km/h.`)

// }

const EV = function(Brand,speed,battery){
    Car.call(this,Brand,speed)
    this.battery = battery
    
}
EV.prototype = Object.create(Car.prototype)
EV.prototype.chargeBattery = function(charge){
    this.battery += charge}
EV.prototype.accelerate = function(){
    this.speed += 20
    this.battery -= 1
    console.log(`${this.Brand} is going to ${this.speed} km/h, with a charge of ${this.battery}%.`)
}
EV.prototype.brake = function(){
    this.speed -= 20
    this.battery -= 1
    console.log(`${this.Brand} is going to ${this.speed} km/h, with a charge of ${this.battery}%.`)}

const tesla = new EV("Tesla",120,23)

console.log(tesla)
tesla.accelerate()
tesla.brake()
tesla.chargeBattery(50)
console.log(tesla)
//=============================
// You can see the polymorphism in it example above just observe accelerate fn and brake fn.

// Inheritance with es6 class syntax
class StudentCl extends PersonCl{
    constructor(name,age,course){
        super(name,age)
        this.course = course
    
    }
    greet(){
        console.log("I am a student")}
}

const c=StudentCl("boby",24,"CSe")
console.log(c)
c.greet()

// Inheritance Between "Classes": Object.create

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();


// Another Class Example

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface
  deposit(val) {
    this.movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1.movements.push(250);
// acc1.movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.approveLoan(1000);
acc1.requestLoan(1000);

console.log(acc1);
console.log(acc1.pin);


///////////////////////////////////////
// Encapsulation: Private Class Fields and Methods

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// STATIC version of these 4

class Account {
  locale = navigator.language;
  bank = 'Bankist';
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    // this.movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface (API)
  getMovements() {
    return this.#movements;
    // Not chaninable
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  #approveLoan(val) {
    // Fake method
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
    return this;
  }
}

const acc2 = new Account('Jonas', 'EUR', 1111);
// acc1.deposit(300);
// acc1.withdraw(100);
const movements = acc2
  .deposit(300)
  .withdraw(100)
  .withdraw(50)
  .requestLoan(25000)
  .withdraw(4000)
  .getMovements();

console.log(acc2);
// console.log(acc1.#movements);
// Account.#test();
console.log(movements);


///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

/*
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
// console.log(rivian.#charge);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(rivian.speedUS);
*/
