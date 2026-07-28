struct Rectangle {
    width: u32,
    height: u32,
}

impl Rectangle {
    fn area(&self) -> u32 {
        self.width * self.height
    }

    // Associated function to create a square
    // What is it :- An associated function is a function that is defined within the context of a struct or enum, but it does not take a reference to an instance of that struct or enum as its first parameter. Instead, it is called using the name of the struct or enum itself. Associated functions are often used for creating new instances of the struct or enum, or for performing operations that are related to the type but do not require an instance.
    // In this case, the square function is an associated function of the Rectangle struct that creates a new instance of Rectangle with equal width and height, effectively creating a square.
    //How to call an associated function :- An associated function is called using the name of the struct or enum followed by the double colon (::) operator and the name of the function. For example, to call the square function defined in the Rectangle struct, you would use Rectangle::square(size), where size is the desired size of the square.
    fn square(size: u32) -> Self {
        Self {
            width: size,
            height: size,
        }
    }
}

fn main() {
    let rect: Rectangle = Rectangle {
        width: 10,
        height: 5,
    };
    println!("The area of the rectangle is {}", rect.area());
    let square: Rectangle = Rectangle::square(10);
    println!("The area of the square is {}", square.area());
}
