fn main() {
    // Data types in Rust
    // Scalar types: integers, floating-point numbers, booleans, and characters
    let x: i32 = 42; // 32-bit signed integer
    let y: f64 = 3.14; // 64-bit floating-point number
    let is_active: bool = true; // boolean
    let letter: char = 'A'; // character // 4 bytes in size, represents a Unicode scalar value // also supports emoji and other symbols, e.g., '😊', '🚀', '🌍'
    println!("Integer: {x}, Float: {y}, Boolean: {is_active}, Character: {letter}");
    // what is i and u in i32 and u32?
    // i32 is a signed 32-bit integer, which means it can hold both positive and negative values. The range of i32 is from -2,147,483,648 to 2,147,483,647.
    // u32 is an unsigned 32-bit integer, which means it can only hold non-negative values. The range of u32 is from 0 to 4,294,967,295.
    let a: u32 = 42; // 32-bit unsigned integer
    println!("Unsigned Integer: {a}");
    // You can also do as
    let b = 43_u32; // 32-bit unsigned integer
    println!("Unsigned Integer: {b}");
    // (2^n)-1 is the maximum value of an n-bit unsigned integer, and (2^(n-1))-1 is the maximum value of an n-bit signed integer. For example, for a 32-bit unsigned integer (u32), the maximum value is (2^32)-1 = 4,294,967,295. For a 32-bit signed integer (i32), the maximum value is (2^31)-1 = 2,147,483,647.
    // -(2^(n-1)) is the minimum value of an n-bit signed integer. For example, for a 32-bit signed integer (i32), the minimum value is -(2^31) = -2,147,483,648. (2^(n-1)) is the maximum value of an n-bit signed integer. For example, for a 32-bit signed integer (i32), the maximum value is (2^31)-1 = 2,147,483,647.

    let f_32: f32 = 2.549843579835789; // 32-bit floating-point number
    println!("Float: {f_32}");
    let f_64: f64 = 2.549843579835789; // 64-bit floating-point number
    println!("Float: {f_64}");

    // Numeric operations
    let sum = 5 + 10; // addition
    let difference = 95.5 - 4.3; // subtraction
    let product = 4 * 30; // multiplication
    let quotient = 56.7 / 32.2; // division
    let truncated = -5 / 3; // integer division truncates towards zero
    println!("Truncated: {truncated}");
    let remainder = 43 % 5; // remainder
    println!("Sum: {sum}, Difference: {difference}, Product: {product}, Quotient: {quotient}, Remainder: {remainder}");

    // Compound types: tuples and arrays
    let tup: (i32, f64, u8) = (500, 6.4, 1); // tuple
    let (x, y, z) = tup; // destructuring a tuple
    println!("The value of y is: {y}");
    let five_hundred = tup.0; // accessing tuple elements by index
    let six_point_four = tup.1;
    let one = tup.2;
    println!("The value of five_hundred is: {five_hundred}, six_point_four: {six_point_four}, one: {one}");

    let arr: [i32; 5] = [1, 2, 3, 4, 5]; // array
    let first = arr[0]; // accessing array elements by index
    let second = arr[1];
    let third = arr[2];
    let fourth = arr[3];
    let fifth = arr[4];
    println!("The value of first is: {first}, second: {second}, third: {third}, fourth: {fourth}, fifth: {fifth}");
    let months: [&str; 12] = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]; // array of string slices
    println!("The value of the first month is: {}", months[0]);
    let arr2 = [3; 5]; // array with the same value repeated
    println!("The value of arr2 is: {:?}", arr2); // using {:?} to print the array with debug formatting
}
