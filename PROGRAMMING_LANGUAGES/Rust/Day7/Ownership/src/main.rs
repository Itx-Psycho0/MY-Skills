fn main() {
    let mut s = String::from("hello"); // s comes into scope
    s.push_str(", world!"); // push_str() appends a literal to a String
    println!("{}", s);

    let s1 = "hello"; // s1 comes into scope

    // s1.push_str(", world!"); this line will cause a compile-time error because s1 is a string literal and cannot be modified

    // Memory and Allocation
    // When a variable goes out of scope, Rust automatically calls the drop function and cleans up the resources
    // For example, when s goes out of scope, Rust will automatically free the memory allocated for the String
    // This is different from languages like C or C++ where you have to manually free the memory
    // Rust uses a system of ownership with a set of rules that the compiler checks at compile time. The rules are:
    // 1. Each value in Rust has a variable that’s called its owner.
    // 2. There can only be one owner at a time.
    // 3. When the owner goes out of scope, the value will be dropped.
    // This system of ownership allows Rust to manage memory without a garbage collector, making it more efficient and safe.

    // move
    let s2 = s; // s is moved to s2, and s is no longer valid
                // println!("{}", s); // This line will cause a compile-time error because s is no longer valid
    println!("{}", s2);

    //println!("{s}"); // This line will cause a compile-time error because s is no longer valid

    // clone
    let s3 = s2.clone(); // s2 is cloned to s3, and both s2 and s3 are valid
    println!("s2 = {}, s3 = {}", s2, s3);

    // Ownership and Functions
    let s4 = String::from("hello"); // s4 comes into scope
    takes_ownership(s4); // s4 is moved into the function and is no longer valid here
                         // println!("{}", s4); // This line will cause a compile-time error because s4 is no longer valid
                         // s4 is dropped here   why its happening because s4 is moved into the function and is no longer valid in the main function
                         //

    let s5 = gives_ownership(); // gives_ownership moves its return value into s5
    println!("{}", s5); // s5 is valid here
}

fn takes_ownership(some_string: String) {
    // some_string comes into scope
    println!("{}", some_string);
} // Here, some_string goes out of scope and `drop` is called. The backing memory is freed.

fn gives_ownership() -> String {
    // gives_ownership will move its return value into the function that calls it
    let some_string = String::from("hello"); // some_string comes into scope
    some_string // some_string is returned and moves out to the calling function
} // Here, some_string goes out of scope, but because it has been moved, nothing happens.
