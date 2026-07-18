fn main() {
    // Slice type
    let s = String::from("hello world");
    let hello = &s[0..5]; // hello is a slice of s from index 0 to 5 (exclusive)
    let world = &s[6..11];
    println!("hello = {}, world = {}", hello, world);

    // why slices are useful
    let s1 = String::from("hello world");
    let word = first_word(&s1); // word is a slice of s1 from index 0 to the first space
    s1.clear(); // this line will cause a compile-time error because word is a slice of s1 and s1 is being modified, which invalidates the slice
    println!("The first word is: {}", word);

    // println!("The first word is: {}", first_word(&s1)); // this line will cause a compile-time error because s1 is being modified, which invalidates the slice
}
fn first_word(s: &String) -> &str {
    let bytes = s.as_bytes(); // convert the string to a byte array

    for (i, &item) in bytes.iter().enumerate() {
        // iterate over the byte array
        if item == b' ' {
            // check if the byte is a space
            return &s[0..i]; // return a slice of the string from index 0 to i (exclusive)
        }
    }

    &s[..] // return a slice of the entire string if no space is found
}
