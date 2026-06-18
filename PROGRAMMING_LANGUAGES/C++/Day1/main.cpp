#include <iostream>  // Preprocessor directive to include the iostream library
#include <string>    // Preprocessor directive to include the string library
#include <iomanip>   // Preprocessor directive to include the iomanip library for input/output manipulators
#include <limits>    // Preprocessor directive to include the limits library for numeric limits
#include <cmath>     // Preprocessor directive to include the cmath library for mathematical functions
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

    // Compound assignment operators
    int compoundVal = 10;
    compoundVal += 5;                                              // Equivalent to compoundVal = compoundVal + 5
    cout << "After += 5: " << compoundVal << endl;                 // Output the value of compoundVal after addition
    compoundVal -= 3;                                              // Equivalent to compoundVal = compoundVal - 3
    cout << "After -= 3: " << compoundVal << endl;                 // Output the value of compoundVal after subtraction
    compoundVal *= 2;                                              // Equivalent to compoundVal = compoundVal * 2
    cout << "After *= 2: " << compoundVal << endl;                 // Output the value of compoundVal after multiplication
    compoundVal /= 4;                                              // Equivalent to compoundVal = compoundVal / 4
    cout << "After /= 4: " << compoundVal << endl;                 // Output the value of compoundVal after division
    compoundVal %= 3;                                              // Equivalent to compoundVal = compoundVal % 3
    cout << "After %= 3: " << compoundVal << endl;                 // Output the value of compoundVal after modulus
    compoundVal &= 1;                                              // Equivalent to compoundVal = compoundVal & 1 (bitwise AND)
    cout << "After &= 1: " << compoundVal << endl;                 // Output the value of compoundVal after bitwise AND
    compoundVal |= 2;                                              // Equivalent to compoundVal = compoundVal | 2 (bitwise OR)
    cout << "After |= 2: " << compoundVal << endl;                 // Output the value of compoundVal after bitwise OR
    compoundVal ^= 3;                                              // Equivalent to compoundVal = compoundVal ^ 3 (bitwise XOR)
    cout << "After ^= 3: " << compoundVal << endl;                 // Output the value of compoundVal after bitwise XOR
    compoundVal <<= 1;                                             // Equivalent to compoundVal = compoundVal << 1 (left shift)
    cout << "After <<= 1: " << compoundVal << endl;                // Output the value of compoundVal after left shift
    compoundVal >>= 1;                                             // Equivalent to compoundVal = compoundVal >> 1 (right shift)
    cout << "After >>= 1: " << compoundVal << endl;                // Output the value of compoundVal after right shift
    cout << "Final value of compoundVal: " << compoundVal << endl; // Output the final value of compoundVal

    // Relational Operators
    int relVal1 = 10;
    int relVal2 = 20;
    cout << "Equal to: " << (relVal1 == relVal2) << endl;                 // Output the result of equality comparison
    cout << "Not equal to: " << (relVal1 != relVal2) << endl;             // Output the result of inequality comparison
    cout << "Greater than: " << (relVal1 > relVal2) << endl;              // Output the result of greater than comparison
    cout << "Less than: " << (relVal1 < relVal2) << endl;                 // Output the result of less than comparison
    cout << "Greater than or equal to: " << (relVal1 >= relVal2) << endl; // Output the result of greater than or equal to comparison
    cout << "Less than or equal to: " << (relVal1 <= relVal2) << endl;    // Output the result of less than or equal to comparison

    // Logical Operators
    bool logVal1 = true;
    bool logVal2 = false;
    cout << "Logical AND: " << (logVal1 && logVal2) << endl; // Output the result of logical AND
    cout << "Logical OR: " << (logVal1 || logVal2) << endl;  // Output the result of logical OR
    cout << "Logical NOT: " << (!logVal1) << endl;           // Output the result of logical NOT

    // Output Formatting
    cout << "Output Formatting:" << endl;

    // endl : places a new line character on the output stream.
    //        This is identical to placing '\n' on the output stream.

    cout << "Hello";
    cout << "World";

    cout << endl;

    cout << "-------------" << endl;

    cout << "Hello" << endl;
    cout << "World" << endl;

    cout << endl;

    cout << "Hello\n";
    cout << "World\n";

    //===================================================================
    cout << endl;

    // flush : flushes the output buffer to its final destination.
    cout << "This is a nice message...." << endl
         << flush;
    // After this flush, we're sure that at this line, the message has been sent
    // to the stream. This may be important in some applications.

    //===================================================================
    cout << endl;

    // setw() : Adjusts the field with for the item about to be printed.
    // The setw() manipulator only affects the next value to be printed.

    cout << "Unformatted table : " << endl;
    cout << "Daniel" << " " << "Gray" << " 25" << endl;
    cout << "Stanley" << " " << "Woods" << " 33" << endl;
    cout << "Jordan" << " " << "Parker" << " 45" << endl;
    cout << "Joe" << " " << "Ball" << " 21" << endl;
    cout << "Josh" << " " << "Carr" << " 27" << endl;
    cout << "Izaiah" << " " << "Robinson" << " 29" << endl;

    cout << endl;
    cout << "Formatted table : " << endl;

    cout << setw(10) << "Lastname" << setw(10) << "Firstname" << setw(5) << "Age" << endl;
    cout << setw(10) << "Daniel" << setw(10) << "Gray" << setw(5) << "25" << endl;
    cout << setw(10) << "Stanley" << setw(10) << "Woods" << setw(5) << "33" << endl;
    cout << setw(10) << "Jordan" << setw(10) << "Parker" << setw(5) << "45" << endl;
    cout << setw(10) << "Joe" << setw(10) << "Ball" << setw(5) << "21" << endl;
    cout << setw(10) << "Josh" << setw(10) << "Carr" << setw(5) << "27" << endl;
    cout << setw(10) << "Izaiah" << setw(10) << "Robinson" << setw(5) << "29" << endl;

    cout << endl;
    cout << "Formatted table with variables: " << endl;

    int col_width{14};

    cout << setw(col_width) << "Lastname" << setw(col_width) << "Firstname" << setw(col_width / 2) << "Age" << endl;
    cout << setw(col_width) << "Daniel" << setw(col_width) << "Gray" << setw(col_width / 2) << "25" << endl;
    cout << setw(col_width) << "Stanley" << setw(col_width) << "Woods" << setw(col_width / 2) << "33" << endl;
    cout << setw(col_width) << "Jordan" << setw(col_width) << "Parker" << setw(col_width / 2) << "45" << endl;
    cout << setw(col_width) << "Joe" << setw(col_width) << "Ball" << setw(col_width / 2) << "21" << endl;
    cout << setw(col_width) << "Josh" << setw(col_width) << "Carr" << setw(col_width / 2) << "27" << endl;
    cout << setw(col_width) << "Izaiah" << setw(col_width) << "Robinson" << setw(col_width / 2) << "29" << endl;

    //===================================================================
    cout << endl;

    // Justify : Values can be justified in their fields. There are three manipulators
    //           for adjusting the justification: left, right, and internal.

    // right justified
    cout << endl;
    cout << "Right justified table(default) :  " << endl;

    col_width = 20;

    cout << right;
    cout << setw(col_width) << "Lastname" << setw(col_width) << "Firstname" << setw(col_width / 2) << "Age" << endl;
    cout << setw(col_width) << "Daniel" << setw(col_width) << "Gray" << setw(col_width / 2) << "25" << endl;
    cout << setw(col_width) << "Stanley" << setw(col_width) << "Woods" << setw(col_width / 2) << "33" << endl;
    cout << setw(col_width) << "Jordan" << setw(col_width) << "Parker" << setw(col_width / 2) << "45" << endl;
    cout << setw(col_width) << "Joe" << setw(col_width) << "Ball" << setw(col_width / 2) << "21" << endl;
    cout << setw(col_width) << "Josh" << setw(col_width) << "Carr" << setw(col_width / 2) << "27" << endl;
    cout << setw(col_width) << "Izaiah" << setw(col_width) << "Robinson" << setw(col_width / 2) << "29" << endl;

    // Left justified
    cout << endl;
    cout << "Left justified table :  " << endl;

    col_width = 20;

    cout << left;
    cout << setw(col_width) << "Lastname" << setw(col_width) << "Firstname" << setw(col_width / 2) << "Age" << endl;
    cout << setw(col_width) << "Daniel" << setw(col_width) << "Gray" << setw(col_width / 2) << "25" << endl;
    cout << setw(col_width) << "Stanley" << setw(col_width) << "Woods" << setw(col_width / 2) << "33" << endl;
    cout << setw(col_width) << "Jordan" << setw(col_width) << "Parker" << setw(col_width / 2) << "45" << endl;
    cout << setw(col_width) << "Joe" << setw(col_width) << "Ball" << setw(col_width / 2) << "21" << endl;
    cout << setw(col_width) << "Josh" << setw(col_width) << "Carr" << setw(col_width / 2) << "27" << endl;
    cout << setw(col_width) << "Izaiah" << setw(col_width) << "Robinson" << setw(col_width / 2) << "29" << endl;

    // Internal justified : sign is left justified , data is right justified
    cout << endl;
    cout << "Internal justified : " << endl;
    cout << right;
    cout << setw(10) << -123.45 << endl;
    cout << internal;
    cout << setw(10) << -123.45 << endl;

    //===================================================================
    cout << endl;

    // setfill

    cout << endl;
    cout << "Table with fill characters :  " << endl;

    col_width = 20;

    cout << left;
    cout << setfill('*'); // The fill character
    cout << setw(col_width) << "Lastname" << setw(col_width) << "Firstname" << setw(col_width / 2) << "Age" << endl;
    cout << setw(col_width) << "Daniel" << setw(col_width) << "Gray" << setw(col_width / 2) << "25" << endl;
    cout << setw(col_width) << "Stanley" << setw(col_width) << "Woods" << setw(col_width / 2) << "33" << endl;
    cout << setw(col_width) << "Jordan" << setw(col_width) << "Parker" << setw(col_width / 2) << "45" << endl;
    cout << setw(col_width) << "Joe" << setw(col_width) << "Ball" << setw(col_width / 2) << "21" << endl;
    cout << setw(col_width) << "Josh" << setw(col_width) << "Carr" << setw(col_width / 2) << "27" << endl;
    cout << setw(col_width) << "Izaiah" << setw(col_width) << "Robinson" << setw(col_width / 2) << "29" << endl;

    //===================================================================
    cout << endl;

    // boolalpha and noboolapha : control bool output format : 1/0 or true/false

    bool condition{true};
    bool other_condition{false};

    cout << "condition : " << condition << endl;
    cout << "other_condition : " << other_condition << endl;

    cout << endl;
    cout << boolalpha;
    cout << "condition : " << condition << endl;
    cout << "other_condition : " << other_condition << endl;

    cout << endl;
    cout << noboolalpha;
    cout << "condition : " << condition << endl;
    cout << "other_condition : " << other_condition << endl;

    //===================================================================
    cout << endl;

    // showpos and noshowpos : show or hide the +  sign for positive numbers

    int pos_num{34};
    int neg_num{-45};

    cout << "pos_num : " << pos_num << endl;
    cout << "neg_num : " << neg_num << endl;

    cout << endl;
    cout << showpos;
    cout << "pos_num : " << pos_num << endl;
    cout << "neg_num : " << neg_num << endl;

    cout << endl;
    cout << noshowpos;
    cout << "pos_num : " << pos_num << endl;
    cout << "neg_num : " << neg_num << endl;

    //===================================================================
    cout << endl;

    // different number systems : dec, hex, oct

    int pos_int{717171};
    int neg_int{-47347};
    double double_var{498.32};

    cout << endl;
    cout << "default base format : " << endl;
    cout << "pos_int : " << pos_int << endl;
    cout << "neg_int : " << neg_int << endl;
    cout << "double_var : " << double_var << endl;

    cout << endl;
    cout << "pos_int in different bases : " << endl;
    cout << "pos_int (dec) : " << dec << pos_int << endl;
    cout << "pos_int (hex) : " << hex << pos_int << endl;
    cout << "pos_int (oct) : " << oct << pos_int << endl;

    cout << endl;
    cout << "neg_int in different bases : " << endl;
    cout << "neg_int (dec) : " << dec << neg_int << endl;
    cout << "neg_int (hex) : " << hex << neg_int << endl;
    cout << "neg_int (oct) : " << oct << neg_int << endl;

    cout << endl;
    cout << "double_var in different bases : " << endl;
    cout << "double_var (dec) : " << dec << double_var << endl;
    cout << "double_var (hex) : " << hex << double_var << endl;
    cout << "double_var (oct) : " << oct << double_var << endl;

    //===================================================================
    cout << endl;

    // uppercase and nouppercase

    pos_int = 717171;

    cout << "pos_int (nouppercase : default) : " << endl;
    cout << "pos_int (dec) : " << dec << pos_int << endl;
    cout << "pos_int (hex) : " << hex << pos_int << endl;
    cout << "pos_int (oct) : " << oct << pos_int << endl;

    cout << endl;
    cout << "pos_int (uppercase) : " << endl;
    cout << uppercase;
    cout << "pos_int (dec) : " << dec << pos_int << endl;
    cout << "pos_int (hex) : " << hex << pos_int << endl;
    cout << "pos_int (oct) : " << oct << pos_int << endl;

    //===================================================================
    cout << endl;

    // fixed and scientific : for floating point values

    double a1{3.1415926535897932384626433832795};
    double b1{2006.0};
    double c1{1.34e-10};

    cout << endl;
    cout << "double values (default : use scientific where necessary) : " << endl;
    cout << "a : " << a1 << endl;
    cout << "b : " << b1 << endl;
    cout << "c : " << c1 << endl;

    cout << endl;
    cout << "double values (fixed) : " << endl;
    cout << fixed;
    cout << "a : " << a1 << endl;
    cout << "b : " << b1 << endl;
    cout << "c : " << c1 << endl;

    cout << endl;
    cout << "double values (scientific) : " << endl;
    cout << scientific;
    cout << "a : " << a1 << endl;
    cout << "b : " << b1 << endl;
    cout << "c : " << c1 << endl;

    cout << endl;
    cout << "double values (back to defaults) : " << endl;
    cout.unsetf(ios::scientific | ios::fixed); // Hack
    cout << "a : " << a1 << endl;
    cout << "b : " << b1 << endl;
    cout << "c : " << c1 << endl;

    //===================================================================
    cout << endl;

    // setprecision() : the number of digits printed out for a floating point. Default is 6

    a1 = 3.1415926535897932384626433832795;

    cout << endl;
    cout << "a (default precision(6)) : " << a1 << endl;
    cout << setprecision(10);
    cout << "a (precision(10)) : " << a1 << endl;
    cout << setprecision(20);
    cout << "a (precision(20)) : " << a1 << endl;

    // If the precision is bigger than supported by the type, you'll just print garbage.

    //===================================================================
    cout << endl;

    // showpoint and noshowpoint : show trailing zeros if necessary
    // Force output of the decimal point

    double d{34.1};
    double e{101.99};
    double f{12.0};
    int g{45};

    cout << endl;
    cout << "noshowpoint (default) : " << endl;
    cout << "d : " << d << endl;
    cout << "e : " << e << endl;
    cout << "f : " << f << endl; // 12
    cout << "g : " << g << endl;

    cout << endl;
    cout << "showpoint: " << endl;
    cout << showpoint;
    cout << "d : " << d << endl;
    cout << "e : " << e << endl;
    cout << "f : " << f << endl; // 12.0
    cout << "g : " << g << endl;

    cout << "The range for short is from " << numeric_limits<short>::min() << " to "
         << numeric_limits<short>::max() << endl;

    cout << "The range for unsigned short is from " << numeric_limits<unsigned short>::min() << " to "
         << numeric_limits<unsigned short>::max() << endl;

    cout << "The range for int is from " << numeric_limits<int>::min() << " to "
         << numeric_limits<int>::max() << endl;

    cout << "The range for unsigned int is from " << numeric_limits<unsigned int>::min() << " to "
         << numeric_limits<unsigned int>::max() << endl;

    cout << "The range for long is from " << numeric_limits<long>::min() << " to "
         << numeric_limits<long>::max() << endl;

    cout << "The range for float is from " << numeric_limits<float>::min() << " to "
         << numeric_limits<float>::max() << endl;

    cout << "The range(with lowest) for float is from " << numeric_limits<float>::lowest() << " to "
         << numeric_limits<float>::max() << endl;

    cout << "The range(with lowest) for double is from " << numeric_limits<double>::lowest() << " to "
         << numeric_limits<double>::max() << endl;

    cout << "The range(with lowest) for long double is from " << numeric_limits<long double>::lowest() << " to "
         << numeric_limits<long double>::max() << endl;

    // Other facilities
    // More info : https://en.cppreference.com/w/cpp/types/numeric_limits
    cout << "int is signed : " << numeric_limits<int>::is_signed << endl;
    cout << "int digits : " << numeric_limits<int>::digits << endl;

    // Math Functions
    cout << "sqrt(16) : " << sqrt(16) << endl;
    cout << "pow(2, 3) : " << pow(2, 3) << endl;
    cout << "abs(-5) : " << abs(-5) << endl;
    cout << "ceil(3.2) : " << ceil(3.2) << endl;
    cout << "floor(3.8) : " << floor(3.8) << endl;
    cout << "round(3.5) : " << round(3.5) << endl;
    cout << "exp(1) : " << exp(1) << endl;
    cout << "log(10) : " << log(10) << endl;
    cout << "sin(0) : " << sin(0) << endl;
    cout << "cos(0) : " << cos(0) << endl;
    cout << "tan(0) : " << tan(0) << endl;
    cout << "log10(100) : " << log10(100) << endl;

    // doing basic math operation on char and short int do the weird thing they not give the expected result because they are promoted to int before the operation is performed. This is known as integer promotion. For example, if you add two char variables, they will be promoted to int before the addition is performed, which can lead to unexpected results if the values are outside the range of char.
    // Example:
    char c1_1 = 100;
    char c2 = 30;
    char c3 = c1_1 + c2;                // c1 and c2 are promoted to int before addition, resulting in 130, which is outside the range of char (-128 to 127). This can lead to unexpected results when c3 is assigned the value of 130,
    cout << "c3 : " << (int)c3 << endl; // Output the value of c3 as an int to see the actual result of the addition
    auto c4 = c1_1 + c2;                // c1 and c2 are promoted to int before addition, resulting in 130, which is stored in an int variable c4.
    cout << "c4 : " << c4 << endl;      // Output the value of c4 to see the actual result of the addition

    short int s1 = 30000;
    short int s2 = 10000;
    short int s3 = s1 + s2; // s1 and s2 are promoted to int before addition, resulting in 40000, which is outside the range of short int (-32768 to 32767). This can lead to unexpected results when s3 is assigned the value of 40000,
    cout << "s3 : " << s3 << endl;
    auto s4 = s1 + s2;             // s1 and s2 are promoted to int before addition, resulting in 40000, which is stored in an int variable s4.
    cout << "s4 : " << s4 << endl; // Output the value of s4 to see the actual result of the addition

    // Flow control statements
    // if-else statement
    int number = 10;
    if (number > 0)
    {
        cout << "The number is positive." << endl;
    }
    else if (number < 0)
    {
        cout << "The number is negative." << endl;
    }
    else
    {
        cout << "The number is zero." << endl;
    }

    // switch statement
    int day = 3;
    switch (day) // this condition always in integer not string or any other type. If you want to use string in switch statement, you can use if-else statement instead of switch statement.
    {
    case 1:
        cout << "Monday" << endl;
        break;
    case 2:
        cout << "Tuesday" << endl;
        break;
    case 3:
        cout << "Wednesday" << endl;
        break;
    case 4:
        cout << "Thursday" << endl;
        break;
    case 5:
        cout << "Friday" << endl;
        break;
    case 6:
        cout << "Saturday" << endl;
        break;
    case 7:
        cout << "Sunday" << endl;
        break;
    default:
        cout << "Invalid day" << endl;
    }

    // ternary operator
    int a1_1 = 5, b1_1 = 10;
    int max = (a1_1 > b1_1) ? a1_1 : b1_1; // If a1_1 is greater than b1_1, max is assigned the value of a1_1; otherwise, max is assigned the value of b1_1
    cout << "The maximum value is: " << max << endl;

    // Loops
    // for loop
    cout << "For loop:" << endl;
    for (int i = 0; i < 5; i++)
    {
        cout << "Iteration " << i + 1 << endl;
    }

    // while loop
    cout << "While loop:" << endl;
    int count = 0;
    while (count < 5)
    {
        cout << "Count: " << count << endl;
        count++;
    }

    // do-while loop
    cout << "Do-While loop:" << endl;
    int num = 0;
    do
    {
        cout << "Number: " << num << endl;
        num++;
    } while (num < 5);

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