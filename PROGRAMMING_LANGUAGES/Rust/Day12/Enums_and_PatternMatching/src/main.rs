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
}

fn route(ip: IpAddr) {
    println!("Routing to IP: {}, Kind: {:?}", ip.address, ip.kind);
}

fn process_message(msg: Message) {
    match msg {
        Message::Write(text) => println!("Write message: {}", text),
    }
}
