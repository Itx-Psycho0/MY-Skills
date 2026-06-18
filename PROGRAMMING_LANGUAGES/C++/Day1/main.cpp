#include <iostream>  // Preprocessor directive to include the iostream library
#include <string>    // Preprocessor directive to include the string library
using namespace std; // Use the standard namespace

int add(int a, int b); // Function declaration for the add function

int main()
{ // Main function - entry point of the program
    cout << "Hello, World!" << endl;
    int a{5};                                            // Variable declaration and initialization
    int b{3};                                            // Variable declaration and initialization
    int result = add(a, b);                              // Call the add function and store the result
    cout << "The sum of 5 and 3 is: " << result << endl; // Output statement
    string name;
    int age;                                            // Variable declaration for an integer
    cout << "Enter your name: ";                        // Prompt user for input
    cin >> name;                                        // Read user input into the name variable
    getline(cin, name);                                 // Read a full line of input into the name variable
    cin >> age;                                         // Read user input into the age variable
    cout << "Hello, " << name << "!" << endl;           // Output statement
    cout << "You are " << age << " years old." << endl; // Output statement

    cerr << "This is an error message." << endl; // Output an error message to the standard error stream
    clog << "This is a log message." << endl;    // Output a log message to the standard log stream
    string firstName;
    string lastName;
    cout << "Enter your Name: ";
    cin >> firstName >> lastName;                                     // Read user input for first and last name
    cout << "Hello, " << firstName << " " << lastName << "!" << endl; // Output statement to greet the user with their full name

    int number1 = 15;         // Decimal
    int number2 = 017;        // Octal
    int number3 = 0x0F;       // Hexadecimal
    int number4 = 0b00001111; // Binary

    cout << "Decimal: " << number1 << endl;
    cout << "Octal: " << number2 << endl;
    cout << "Hexadecimal: " << number3 << endl;
    cout << "Binary: " << number4 << endl;

    // int numfortest{2.9};                                          // Implicit conversion from double to int, giving a warning about narrowing conversion and exit with error
    // cout << "The value of numfortest is: " << numfortest << endl; // Output statement to display the value of numfortest
    int numfortest(2.9); // Implicit conversion from double to int, which may lead to loss of precision and truncation of the decimal part -> 2.9 -> 2
    int num(10);         // called functional variable initialization
    cout << "The value of numfortest is: " << numfortest << endl;

    cout << sizeof(int) << endl;                // Output the size of int in bytes
    cout << sizeof(float) << endl;              // Output the size of float in bytes
    cout << sizeof(double) << endl;             // Output the size of double in bytes
    cout << sizeof(char) << endl;               // Output the size of char in bytes
    cout << sizeof(bool) << endl;               // Output the size of bool in bytes
    cout << sizeof(long) << endl;               // Output the size of long in bytes
    cout << sizeof(short) << endl;              // Output the size of short in bytes
    cout << sizeof(long long) << endl;          // Output the size of long long in bytes
    cout << sizeof(unsigned int) << endl;       // Output the size of unsigned int in bytes
    cout << sizeof(unsigned long) << endl;      // Output the size of unsigned long in bytes
    cout << sizeof(unsigned long long) << endl; // Output the size of unsigned long long in bytes
    cout << sizeof(unsigned short) << endl;     // Output the size of unsigned short in bytes
    // cout << sizeof(void) << endl;               // Output the size of void in bytes // This line is commented out because sizeof(void) is not valid in C++ gives warning
    cout << sizeof(num) << endl; // Output the size of the variable num in bytes

    // Integer modifiers
    // signed int: Can represent both positive and negative integers. The range is typically from -2,147,483,648 to 2,147,483,647.
    // unsigned int: Can only represent non-negative integers. The range is typically from 0 to 4,294,967,295.
    // short int: A smaller integer type that can represent a smaller range of values. The range is typically from -32,768 to 32,767 for signed short and from 0 to 65,535 for unsigned short. or 2 bytes in size.
    // long int: A larger integer type that can represent a wider range of values. The range is typically from -2,147,483,648 to 2,147,483,647 for signed long and from 0 to 4,294,967,295 for unsigned long. or 4 and 8 bytes in size depending on the system.
    // long long int: An even larger integer type that can represent an even wider range of values. The range is typically from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 for signed long long and from 0 to 18,446,744,073,709,551,615 for unsigned long long. or 8 bytes in size.

    signed int signedInt = -10;                      // Example of a signed integer
    unsigned int unsignedInt = 10;                   // Example of an unsigned integer
    short int shortInt = 32767;                      // Example of a short integer
    long int longInt = 2147483647;                   // Example of a long integer
    long long int longLongInt = 9223372036854775807; // Example of a long long integer

    // Floating-point types
    float floatNum = 3.14f;                              // Example of a float - precision of about 7 decimal digits or size of 4 bytes
    double doubleNum = 3.14159265359;                    // Example of a double - precision of about 15 decimal digits or size of 8 bytes
    long double longDoubleNum = 3.14159265358979323846L; // Example of a long double - precision of about 18 decimal digits or size of 10-16 bytes

    cout << 0.0 / 0.0 << endl; // Output the result of dividing zero by zero, which results in NaN (Not a Number)

    // Boolean type
    bool isTrue = true;                                                             // Example of a boolean variable set to true
    bool isFalse = false;                                                           // Example of a boolean variable set to false
    cout << "isTrue: " << isTrue << endl;                                           // Output the value of isTrue
    cout << "isFalse: " << isFalse << endl;                                         // Output the value of isFalse
    cout << "Size of bool: " << sizeof(bool) << " bytes" << sizeof(isTrue) << endl; // Output the size of bool in bytes

    // they show 0 and 1 for false and true respectively when printed to the console.
    // what if we want to print true and false instead of 1 and 0? We can use the std::boolalpha manipulator to achieve this. When std::boolalpha is used, it will print true and false for boolean values instead of 1 and 0.
    cout << std::boolalpha; // Enable boolalpha to print true/false instead of 1/0
    cout << "isTrue: " << isTrue << endl;
    cout << "isFalse: " << isFalse << endl;

    // character and text types
    char character = 'A';                                         // Example of a character variable
    cout << "Character: " << character << endl;                   // Output the value of character
    cout << "Size of char: " << sizeof(char) << " bytes" << endl; // Output the size of char in bytes
    char value = 65;                                              // ASCII value for 'A'
    cout << "Value: " << value << endl;                           // Output the value of value

    // auto keyword
    auto autoInt = 42;                             // Compiler infers the type as int
    auto autoDouble = 3.14;                        // Compiler infers the type as double
    cout << "Auto Int: " << autoInt << endl;       // Output the value of autoInt
    cout << "Auto Double: " << autoDouble << endl; // Output the value of autoDouble

    // auto with modifiers
    auto autoSignedInt = -42;                                 // Compiler infers the type as signed int
    auto autoUnsignedInt = 42u;                               // Compiler infers the type as unsigned int
    auto longAutoInt = 9223372036854775807LL;                 // Compiler infers the type as long long int
    cout << "Auto Signed Int: " << autoSignedInt << endl;     // Output the value of autoSignedInt
    cout << "Auto Unsigned Int: " << autoUnsignedInt << endl; // Output the value of autoUnsignedInt
    cout << "Long Auto Int: " << longAutoInt << endl;         // Output the value of longAutoInt

    auto goal = "its a goal";
    cout << "Goal: " << goal << endl; // Output the value of goal

    // Operations on data
    // Basic Operations
    int val1 = 10;
    int val2 = 3;
    cout << "Addition: " << (val1 + val2) << endl;
    cout << "Subtraction: " << (val1 - val2) << endl;
    cout << "Multiplication: " << (val1 * val2) << endl;
    cout << "Division: " << (val1 / val2) << endl;
    cout << "Modulus: " << (val1 % val2) << endl;
    cout << "Increment: " << (++val1) << endl;        // Pre-increment
    cout << "Decrement: " << (--val2) << endl;        // Pre-decrement
    cout << "Post-Increment: " << (val1++) << endl;   // Post-increment
    cout << "Post-Decrement: " << (val2--) << endl;   // Post-decrement
    cout << "After Post-Increment: " << val1 << endl; // Value after post-increment
    cout << "After Post-Decrement: " << val2 << endl; // Value after post-decrement
    cout << "Negation: " << (-val1) << endl;          // Negation
    cout << "Absolute Value: " << abs(-val1) << endl; // Absolute value

    // precedence and associativity
    int result1 = 10 + 5 * 2;               // Multiplication has higher precedence than addition, so it is evaluated first. Result is 10 + (5 * 2) = 10 + 10 = 20
    int result2 = (10 + 5) * 2;             // Parentheses change the order of evaluation, so addition is evaluated first. Result is (10 + 5) * 2 = 15 * 2 = 30
    cout << "Result1: " << result1 << endl; // Output the value of result1
    cout << "Result2: " << result2 << endl; // Output the value of result2

    return 0; // Return statement indicating successful execution
}

/*
    This is a simple C++ program that prints "Hello, World!" to the console.
*/

// Errors
/*
Compile time errors: These occur when the code violates the syntax rules of C++. Examples include missing semicolons, undeclared variables, or incorrect use of operators.

Runtime errors: These occur during the execution of the program and can be caused by issues such as division by zero, accessing invalid memory, or dereferencing null pointers.

Logical errors: These occur when the program runs without crashing but produces incorrect results due to flawed logic in the code. Examples include incorrect calculations, wrong conditional statements, or improper use of loops.

Warning messages: These are not errors but indicate potential issues in the code that may lead to problems. Examples include unused variables, deprecated functions, or type mismatches.
*/

// Statments :- A statement in C++ is a complete instruction that performs an action. It can be a declaration, an expression, or a control flow statement. Statements are typically terminated with a semicolon (;). Examples of statements include variable declarations, assignment operations, function calls, and control structures like if-else and loops.

// function :-
int add(int a, int b)
{
    return a + b;
}

/*
C++ Execution Model :
Your C++ source code is stored on an SSD/HDD.
The compiler translates it into machine code and creates an executable file.
When you run it, the operating system loads the executable into the process’s virtual memory (backed by RAM as needed).
The CPU executes its machine instructions, using CPU registers, caches, and memory.
Function calls usually create a stack frame in the call stack, which is normally located in RAM—not “inside the CPU.”
Local variables commonly live in that stack frame, but the compiler may instead keep them in registers or optimize them away.
When the function returns, its stack frame is removed automatically.
When the program terminates, the operating system reclaims the process’s memory.


*/

/*
Difference between core c++, Standard library, and STL:
Core C++: This refers to the fundamental features and syntax of the C++ programming language itself, such as data types, control structures, functions, and classes. It is the basic building block of C++ programming.

Standard Library: This is a collection of pre-written code that provides various functionalities, such as input/output operations, string manipulation, and mathematical functions. It is part of the C++ language and can be used to simplify programming tasks.

STL (Standard Template Library): This is a specific part of the C++ Standard Library that provides a set of template classes and functions for data structures (like vectors, lists, and maps) and algorithms (like sorting and searching). It allows programmers to use generic programming techniques to create reusable code for common data structures and algorithms.
*/

// Number System
/*
Decimal: Base 10, uses digits 0-9.
Binary: Base 2, uses digits 0 and 1.
Octal: Base 8, uses digits 0-7.
Hexadecimal: Base 16, uses digits 0-9 and letters A-F (where A=10, B=11, C=12, D=13, E=14, F=15).
*/