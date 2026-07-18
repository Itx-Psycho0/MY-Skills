fn main() {
    let mut s = String::from("hello"); // s comes into scope
    s.push_str(", world!"); // push_str() appends a literal to a String
    println!("{}", s);
    // References and Borrowing
    let s1 = &s; // s1 is a reference to s
    println!("s1 = {}", s1); // s1 can be used to read the value of s, but cannot modify it

    // s.push_str(", world!"); // this line will cause a compile-time error because s1 is a reference to s and cannot be modified while s1 is in scope

    //mutable references
    let s2 = &mut s; // s2 is a mutable reference to s
    s2.push_str(", world!"); // s2 can be used to modify the value of s
    println!("s2 = {}", s2); // s2 can be used to read the value of s, but cannot be used to modify it while s2 is in scope

    // if mutuable references are used, then only one mutable reference can be used at a time. This is to prevent data races. If there are multiple mutable references to the same value, then it is possible for one reference to modify the value while another reference is reading it, which can lead to unexpected behavior. This is why Rust enforces the rule that only one mutable reference can be used at a time.
    // also immutable references cannot be used while a mutable reference is in scope. This is to prevent data races. If there are immutable references to a value while a mutable reference is in scope, then it is possible for the mutable reference to modify the value while the immutable references are reading it, which can lead to unexpected behavior. This is why Rust enforces the rule that immutable references cannot be used while a mutable reference is in scope.

    let len = calculate_length(&s); // we can pass a reference to the function
    println!("The length of the string is: {}", len);

    // Dangling References
    // let reference_to_nothing = Dangle(); // this line will cause a compile-time error because Dangle() returns a reference to a String that will go out of scope when the function ends, and the reference will be dangling. This is because the String that was created in Dangle() will be dropped when the function ends, and the reference will point to a value that no longer exists. This is why Rust enforces the rule that references cannot outlive the value they point to that is, references cannot be returned from a function if the value they point to will go out of scope when the function ends. This is to prevent dangling references, which can lead to undefined behavior.
}

fn calculate_length(s: &String) -> usize {
    s.len() // s is a reference to a String, so we can use it to read the value of the String without taking ownership of it
}

fn Dangle() -> &String {
    let s = String::from("hello"); // s comes into scope
    &s // we are returning a reference to s, but s will go out of scope
} // here, s goes out of scope and is dropped. The reference to s is now
