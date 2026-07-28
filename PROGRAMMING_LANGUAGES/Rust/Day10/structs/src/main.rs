struct Person {
    name: String,
    age: u8,
}
fn main() {
    // Struct is a custom data type that lets you name and package together multiple related values that make up a meaningful group.

    let person: Person = Person {
        name: String::from("Alice"),
        age: 30,
    };

    println!("Name: {}, Age: {}", person.name, person.age);
}
