use std::io::ErrorKind::Other;

#[derive(Debug)]
enum IpAddrKind {
    V4,
}
struct IpAddr {
    kind: IpAddrKind,
    address: String,
}

enum Message {
    Write(String),
}

impl Message {
    fn call(&self) {
        print!("Calling message: ");
    }
}

impl IpAddr {
    fn new(address: &str) -> Self {
        Self {
            kind: IpAddrKind::V4, // Defaulting to V4 for this example
            address: address.to_string(),
        }
    }
}

enum Coin {
    Penny,
    Nickel,
    Dime,
    Quarter,
}

fn main() {
    let ip1 = IpAddr::new("1.2.3.4");
    route(ip1);

    let msg = Message::Write(String::from("Hello, world!"));
    msg.call();
    process_message(msg);

    // Option enum example
    let some_number: Option<i32> = Some(5);
    let no_number: Option<i32> = None;
    println!("Some number: {:?}, No number: {:?}", some_number, no_number);

    let penny = Coin::Penny;
    let nickel = Coin::Nickel;
    let dime = Coin::Dime;
    let quarter = Coin::Quarter;

    println!("Penny is worth {} cents", value_in_cents(penny));
    println!("Nickel is worth {} cents", value_in_cents(nickel));
    println!("Dime is worth {} cents", value_in_cents(dime));
    println!("Quarter is worth {} cents", value_in_cents(quarter));

    println!("Add 5 and Some(10): {}", add(5, Some(10)));

    let some_number: Option<i32> = Some(42);
    if let Some(value) = some_number {
        println!("The value is: {}", value);
    } else {
        println!("No value found.");
    }
}

fn route(ip: IpAddr) {
    println!("Routing to IP: {}, Kind: {:?}", ip.address, ip.kind);
}

fn process_message(msg: Message) {
    match msg {
        Message::Write(text) => println!("Write message: {}", text),
    }
}
fn value_in_cents(coin: Coin) -> u32 {
    match coin {
        Coin::Penny => 1,
        Coin::Nickel => 5,
        Coin::Quarter => 25,
        Coin::Dime => 10,
    }
}

fn add(a: i32, b: Option<i32>) -> i32 {
    match b {
        Some(value) => a + value,
        None => a,
    }
}
