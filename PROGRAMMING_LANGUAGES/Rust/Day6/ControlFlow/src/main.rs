fn main() {
    // Control flow in Rust
    let number = 6;
    if number % 4 == 0 {
        println!("number is divisible by 4");
    } else if number % 3 == 0 {
        println!("number is divisible by 3");
    } else if number % 2 == 0 {
        println!("number is divisible by 2");
    } else {
        println!("number is not divisible by 4, 3, or 2");
    }

    // another way to write if expressions
    let number = if number > 1 { 5 } else { 6 }; // if value and else value must have the same type
    println!("number is {}", number);

    // Looping in Rust
    let mut counter = 0;
    let result = loop {
        // it is forever loop unless we break it
        counter += 1;
        if counter == 10 {
            break counter * 2; // break with a value
        }
    };
    println!("The result is {}", result);

    // Loop Labels
    let mut count = 0;
    'counting_up: loop {
        println!("count = {}", count);
        let mut remaining = 10;
        loop {
            println!("remaining = {}", remaining);
            if remaining == 9 {
                break; // this will break the inner loop
            }
            if count == 2 {
                break 'counting_up; // this will break the outer loop
            }
            remaining -= 1;
            count += 1;
        }
    }
    println!("End count = {}", count);

    // While loop
    let mut number = 3;
    while number != 0 {
        println!("{}!", number);
        number -= 1;
    }
    println!("LIFTOFF!!!");

    // For loop
    let a = [10, 20, 30, 40, 50];
    for element in a {
        println!("the value is: {}", element);
    }
    println!("LIFTOFF!!!");
    // For loop with a range
    for number in (1..4).rev() {
        println!("{}!", number);
    }
    println!("LIFTOFF!!!");
    // For loop with a range and inclusive range
    for number in (1..=4).rev() {
        println!("{}!", number);
    }
    println!("LIFTOFF!!!");
    // For loop with a range and step by
    for number in (1..=4).rev().step_by(2) {
        println!("{}!", number);
    }

    println!("LIFTOFF!!!");

    // For loop with a range without rev
    for number in 1..=4 {
        println!("{}!", number);
    }
}
