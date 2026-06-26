//Classes
abstract class Customer {
    // ?
    firstName: string;
    lastName: string
    // #balance: number // private property it is in js
    protected balance: number // protected property

    constructor(firstName: string, lastName: string, balance: number) {
        // ?
        this.firstName = firstName
        this.lastName = lastName
        // this.#balance = balance
        this.balance = balance
    }

    abstract getBalance(): number

    getFullName() {
        // ?
        return this.firstName + " " + this.lastName
    }
    purchase(cost: number) {
        // this.#balance = this.#balance - cost    // ?
        // return this.#balance
        this.balance = this.balance - cost
        return this.balance
    }
}

export class RegularCustomer extends Customer {
    constructor(firstName: string, lastName: string, balance: number) {

        super(firstName, lastName, balance)
    }

    getBalance() {
        return this.balance;
    }
}


//================================================================================

// Classes Implement Interfaces
// Classes can implement interfaces using the implements clause. This enforces that the class adheres to the structure defined by the interface. Say we have two interfaces:

interface Vehicle {
    make: string;
    model: string;
}

interface Drivable {
    drive(distance: number): void;
}

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

class ElectricCar implements Vehicle, Drivable {
    make: string;
    model: string;

    // not required by the interfaces, but it's
    // okay to add extra properties
    private isRunning: boolean = false;

    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
        this.isRunning = false;
    }

    drive(distance: number): void {
        this.isRunning = true;
        console.log(`Driving ${distance} miles`);
    }
}

// We can now use an instance of ElectricCar as a Vehicle or Drivable:

const myCar = new ElectricCar("Tesla", "Model S");

function testDrive(vehicle: Vehicle) {
    console.log(`Testing ${vehicle.make} ${vehicle.model}`);
}

testDrive(myCar); // "Testing Tesla Model S"

function takeForARide(drivable: Drivable) {
    drivable.drive(10);
}

takeForARide(myCar); // "Driving 10 miles"



//================================================================================
// Parameter Properties
class ExecutiveMember {
    // ?
    #secretPower: string;
    constructor(
        protected balance: number,
        protected points: number,
        secretPower: string
    ) {
        this.#secretPower = secretPower
    }


    isVIP() {
        return this.balance === 10000
    }
    redeemPoints(points: number) {
        if (this.points >= points) {
            this.points -= points
            return true
        } else {
            return false
        }
    }

}


//================================================================================
// Partial <t> 

//Partial<T> only makes the top-level properties optional.
type PartialVehicle = Partial<Vehicle>;
function updateVehicle(vehicle: Vehicle, updates: PartialVehicle) {
    return { ...vehicle, ...updates };
}

const myVehicle: Vehicle = { make: "Toyota", model: "Camry" };
const updatedVehicle = updateVehicle(myVehicle, { model: "Corolla" });
console.log(updatedVehicle); // Output: { make: 'Toyota', model: 'Corolla' }


//================================================================================
// Required <t>

//Required<T> makes all properties required. but only top-level properties are affected. Nested objects are not affected.
type RequiredVehicle = Required<Vehicle>;
const myRequiredVehicle: RequiredVehicle = { make: "Honda", model: "Civic" };
// const myIncompleteVehicle: RequiredVehicle = { make: "Honda" }; // Error: Property 'model' is missing

//================================================================================
// Readonly <t>

//Readonly<T> makes all properties readonly.
type ReadonlyVehicle = Readonly<Vehicle>;
const myReadonlyVehicle: ReadonlyVehicle = { make: "Ford", model: "Mustang" };
// myReadonlyVehicle.make = "Chevrolet"; // Error: Cannot assign to 'make' because it is a read-only property


//================================================================================
//Record <K, T>

//Record<K, T> constructs an object type whose property keys are K and whose property values are T.
type VehicleRecord = Record<string, Vehicle>;
const myVehicleRecord: VehicleRecord = {
    car1: { make: "Nissan", model: "Altima" },
    car2: { make: "Chevrolet", model: "Malibu" },
};