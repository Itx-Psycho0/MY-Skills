fn main() {
    println!("Hello, world!");
    let result = add(5, 10);
    println!("The sum is: {}", result);

    // Satement vs Expression
    let x = 5; // statement
    let y = {
        // expression
        let z = 10;
        z + 1
    };
    println!("x: {}, y: {}", x, y);
}

fn add(x: i32, y: i32) -> i32 {
    x + y
}
