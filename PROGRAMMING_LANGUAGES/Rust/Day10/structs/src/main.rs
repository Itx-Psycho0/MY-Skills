struct Person {
    name: String,
    age: u8,
}
struct Color(u8, u8, u8);
struct Point(i32, i32);
struct UnitLikeStruct;

fn main() {
    // Struct is a custom data type that lets you name and package together multiple related values that make up a meaningful group.

    let mut person: Person = Person {
        name: String::from("Alice"),
        age: 30,
    };

    println!("Name: {}, Age: {}", person.name, person.age);
    person.age += 1;
    println!(
        "After a year, {} is now {} years old.",
        person.name, person.age
    );

    let person2: Person = build_person(String::from("Bob"), 25);
    println!("Name: {}, Age: {}", person2.name, person2.age);

    let person3: Person = Person {
        name: String::from("Charlie"),
        ..person2
    };
    println!("Name: {}, Age: {}", person3.name, person3.age);

    // Structs can also be used to create more complex data structures, such as linked lists, trees, and graphs. They can also be used to implement object-oriented programming concepts, such as encapsulation and inheritance.

    // tuple structs are a type of struct that do not have named fields. Instead, they have a fixed number of fields, each with a specific type. Tuple structs are useful when you want to create a simple data structure that does not require named fields.
    let color: Color = Color(255, 0, 0);
    let point: Point = Point(10, 20);
    println!("Color: RGB({}, {}, {})", color.0, color.1, color.2);
    println!("Point: ({}, {})", point.0, point.1);

    //unit-like structs are a type of struct that do not have any fields. They are used to create a type that has no data associated with it. Unit-like structs are useful when you want to create a type that represents a concept or a behavior, rather than a specific value.
    let unit_like_struct: UnitLikeStruct = UnitLikeStruct;
    println!("Unit-like struct created.");

    // cant use &str
    // struct example {
    //     name: &String,
    //     age: u8,
    // }
    // why can't we use &str in struct? Because the lifetime of the &str is not guaranteed to be valid for the entire lifetime of the struct. If the &str is created from a temporary value, it will be dropped at the end of the statement, leaving the struct with a dangling reference. To avoid this, we can use String instead of &str, which owns its data and ensures that it remains valid for the lifetime of the struct.
}

fn build_person(name: String, age: u8) -> Person {
    Person { name, age }
}
