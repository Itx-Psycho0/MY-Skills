fn main() {
    println!("Hello, world!");
    let x = 5;
    println!("The value of x is: {x}");
    let x = x + 1;
    println!("The value of x is after shadowing: {x}");
    let x = "shadowed again";
    println!("The value of x is after shadowing again: {x}");
    let spaces = "   ";
    println!("The value of spaces is: '{spaces}'");
    let spaces = spaces.len();
    println!("The value of spaces is after shadowing: {spaces}");
    let mut x = 5;
    println!("The value of x is: {x}");
    x = 6;
    println!("The value of x is after mutating: {x}");
    //x = "mutated again"; // This line will cause a compile-time error because `x` was declared as a mutable integer, and now we are trying to assign a string to it.
    const MAX_POINTS: u32 = 100_000;
    println!("The value of MAX_POINTS is: {MAX_POINTS}");

    // Shadowing vs Mutability
    let mut y = 5;
    println!("The value of y is: {y}");
    y = y + 1;
    println!("The value of y is after mutating: {y}");
    let y = y + 1; // Shadowing the mutable variable `y` with a new immutable variable `y`
    println!("The value of y is after shadowing: {y}");
    let y = "shadowed again"; // Shadowing the variable `y` with a new immutable variable `y` of a different type
    println!("The value of y is after shadowing again: {y}");
}
