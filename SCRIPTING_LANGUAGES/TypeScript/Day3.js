"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _ExecutiveMember_secretPower;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegularCustomer = void 0;
//Classes
class Customer {
    constructor(firstName, lastName, balance) {
        // ?
        this.firstName = firstName;
        this.lastName = lastName;
        // this.#balance = balance
        this.balance = balance;
    }
    getFullName() {
        // ?
        return this.firstName + " " + this.lastName;
    }
    purchase(cost) {
        // this.#balance = this.#balance - cost    // ?
        // return this.#balance
        this.balance = this.balance - cost;
        return this.balance;
    }
}
class RegularCustomer extends Customer {
    constructor(firstName, lastName, balance) {
        super(firstName, lastName, balance);
    }
    getBalance() {
        return this.balance;
    }
}
exports.RegularCustomer = RegularCustomer;
// And we have a class that we want to implement (have the properties and methods of) both interfaces:
// class ElectricCar {
//   make: string;
//   model: string;
// }
// We can add a clause to the class definition to implement both interfaces. However, because at the moment, the class doesn't have a drive method, TypeScript will throw an error:
// Error: Class 'ElectricCar' incorrectly implements interface 'Drivable'.
// class ElectricCar implements Vehicle, Drivable {
//   make: string;
//   model: string;
// }
// So, now we're reminded to add the drive method, and we do so:
class ElectricCar {
    constructor(make, model) {
        // not required by the interfaces, but it's
        // okay to add extra properties
        this.isRunning = false;
        this.make = make;
        this.model = model;
        this.isRunning = false;
    }
    drive(distance) {
        this.isRunning = true;
        console.log(`Driving ${distance} miles`);
    }
}
// We can now use an instance of ElectricCar as a Vehicle or Drivable:
const myCar = new ElectricCar("Tesla", "Model S");
function testDrive(vehicle) {
    console.log(`Testing ${vehicle.make} ${vehicle.model}`);
}
testDrive(myCar); // "Testing Tesla Model S"
function takeForARide(drivable) {
    drivable.drive(10);
}
takeForARide(myCar); // "Driving 10 miles"
//================================================================================
// Parameter Properties
class ExecutiveMember {
    constructor(balance, points, secretPower) {
        this.balance = balance;
        this.points = points;
        // ?
        _ExecutiveMember_secretPower.set(this, void 0);
        __classPrivateFieldSet(this, _ExecutiveMember_secretPower, secretPower, "f");
    }
    isVIP() {
        return this.balance === 10000;
    }
    redeemPoints(points) {
        if (this.points >= points) {
            this.points -= points;
            return true;
        }
        else {
            return false;
        }
    }
}
_ExecutiveMember_secretPower = new WeakMap();
function updateVehicle(vehicle, updates) {
    return Object.assign(Object.assign({}, vehicle), updates);
}
const myVehicle = { make: "Toyota", model: "Camry" };
const updatedVehicle = updateVehicle(myVehicle, { model: "Corolla" });
console.log(updatedVehicle); // Output: { make: 'Toyota', model: 'Corolla' }
const myRequiredVehicle = { make: "Honda", model: "Civic" };
const myReadonlyVehicle = { make: "Ford", model: "Mustang" };
const myVehicleRecord = {
    car1: { make: "Nissan", model: "Altima" },
    car2: { make: "Chevrolet", model: "Malibu" },
};
const myVehicleMake = { make: "Subaru" };
const myVehicleWithoutModel = { make: "Mazda" };
// const myIncompleteVehicleWithoutModel: VehicleWithoutModel = { model: "CX-5" }; // Error: Property 'make' is missing
//================================================================================//generics
// Generic Functions
function identity(arg) {
    return arg;
}
const output1 = identity("Hello, TypeScript!");
const output2 = identity(42);
console.log(output1); // Output: Hello, TypeScript!
console.log(output2); // Output: 42
// Generic Classes
class GenericNumber {
    constructor(zeroValue, addFunction) {
        this.zeroValue = zeroValue;
        this.add = addFunction;
    }
}
const myGenericNumber = new GenericNumber(0, (x, y) => x + y);
console.log(myGenericNumber.add(5, 10)); // Output: 15
function identityFn(arg) {
    return arg;
}
const myIdentity = identityFn;
console.log(myIdentity(42)); // Output: 42
// Generic Constraints
function loggingIdentity(arg) {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}
loggingIdentity("Hello, TypeScript!"); // Output: 18
loggingIdentity([1, 2, 3]); // Output: 3
