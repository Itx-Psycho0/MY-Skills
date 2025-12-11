// --------------- Day# in c++ ------------------------

// DATATYPES AND USER INPUT

// C++ data types tell the compiler what type of data a variable will store and how much memory it needs.

// C++ data types are divided into 4 major categories:

// -----------------------------------------------------------------------------------------------------------------------------------------

// 1 Primitive (Built-in) Data Types

// These are the basic data types provided by C++.

//  1. int

// Stores whole numbers (no decimals)

// Size: 4 bytes

// Range: approx –2,147,483,648 to 2,147,483,647

// #include <iostream>
// using namespace std;

// int main(){
//     int a;
//     a = 3;
//     cout << a;
//     return 0;
// }

// // ------------------------------

// // 2. float

// // Stores decimal numbers with 6–7 digits precision

// // Size: 4 bytes

// float price = 99.99f;

// // ------------------------------

// // 3. double

// // Stores decimal numbers with 15–16 digits precision

// // Size: 8 bytes

// double pi = 3.141592653589;

// // ------------------------------

// // 4. char

// // Stores a single character

// // Size: 1 byte

// char grade = 'A';

// // ------------------------------


// // 5. bool

// // Stores true / false

// bool isOnline = true;

// //6. void

// // Means no value

// // Used with functions

// void sayHello() {
//     cout << "Hello";
// }

// // ------------------------------

// //7. wchar_t

// // Stores wide characters (Unicode)

// // Size: 2 or 4 bytes (depends on compiler)

// // --------------------------------------------------------------------------------------------------------------------------------

// // Type Modifiers

// // Modifiers change the size or range of primitive types:

// // Modifiers:

// // signed

// // unsigned

// // short

// // long

// // long long

// // Examples:
// //   Type	      |    Size	       |      Range
// // short int	  |   2 bytes	   |     -32,768 to 32,767
// // unsigned int   |   4 bytes	   |      0 to 4,294,967,295
// // long long	  |   8 bytes	   |      Very large

// // Examples:

// unsigned int score = 4294967295;
// long long population = 8000000000;
// short age = 18;

// // Derived Data Types

// // These are created from primitive types.

// // 1. Array

// // Collection of elements of the same type.

// int marks[5] = {90, 80, 70, 60, 50};

// // 2. Pointer

// // Stores memory address of a variable.

// int x = 10;
// int *ptr = &x;

// // 3. Reference

// // Alias for another variable.

// int a = 5;
// int &ref = a;

// // 4. Function

// // Functions also have data types because they return data.

// int add(int a, int b) {
//     return a + b;
// }

// // User-Defined Data Types

// // These are defined by the user using C++ features.

// //1. struct

// // Group of different data types.

// struct Player {
//     string name;
//     int score;
// };

// //2. class

// // Similar to struct but supports OOP.

// class Car {
// public:
//     string model;
//     int speed;
// };

// //3. enum

// // Stores fixed set of constant values.

// // enum Status {Running, Stopped, Failed};

// //4. union

// // Stores different data types but only one at a time.

// union Data {
//     int i;
//     float f;
//     char c;
// };


// ----------------------------------------------------------------------------------------------------------------------------


// ----------------------- DAY #: C++ DATATYPES (BEGINNER NOTES) -----------------------
//
// This file contains:
// 1. Primitive data types
// 2. Type modifiers
// 3. Derived data types
// 4. User-defined data types
// Each with SUPER simple examples + output.
//
// -------------------------------------------------------------------------------------

#include <iostream>
#include <string> // for string
using namespace std;

// --------------------------- USER DEFINED TYPES (Simple Version) ---------------------------

// struct = group of variables
struct Player {
    string name;
    int score;
};

// class = similar to struct but can have functions
class Car {
public:
    string model;
    int speed;
};

// enum = fixed set of names
enum Status { Running, Stopped, Failed };

// union = stores ONLY ONE value at a time
union Data {
    int i;
    float f;
    char c;
};

// simple function returning int
int add(int a, int b) {
    return a + b;
}

// -------------------------------- MAIN PROGRAM -----------------------------------

int main() {

    cout << "=========== PRIMITIVE DATA TYPES ===========\n";

    int age = 20;                  // whole numbers
    float price = 99.99f;          // decimal numbers (less precision)
    double pi = 3.1415926535;      // bigger decimal numbers
    char grade = 'A';              // single character
    bool isOnline = true;          // true/false

    cout << "int age = " << age << endl;
    cout << "float price = " << price << endl;
    cout << "double pi = " << pi << endl;
    cout << "char grade = " << grade << endl;
    cout << "bool isOnline = " << isOnline << endl;

    cout << "\n=========== TYPE MODIFIERS ===========\n";

    unsigned int score = 4000;     // no negative numbers
    long long population = 8000000000;
    short smallNum = 123;

    cout << "unsigned int score = " << score << endl;
    cout << "long long population = " << population << endl;
    cout << "short smallNum = " << smallNum << endl;

    cout << "\n=========== DERIVED TYPES ===========\n";

    // Array = collection of same type
    int marks[5] = {90, 80, 70, 60, 50};
    cout << "marks array: ";
    for (int i = 0; i < 5; i++) {
        cout << marks[i] << " ";
    }
    cout << endl;

    // Pointer = stores address of a variable
    int x = 10;
    int* ptr = &x;
    cout << "Pointer ptr points to: " << *ptr << endl;

    // Reference = another name for same variable
    int y = 5;
    int& ref = y;
    cout << "Reference ref = " << ref << endl;

    // Function example
    cout << "add(5, 3) = " << add(5, 3) << endl;

    cout << "\n=========== USER DEFINED TYPES ===========\n";

    // struct example
    Player p1;
    p1.name = "Anurag";
    p1.score = 100;
    cout << "Player: " << p1.name << ", Score: " << p1.score << endl;

    // class example
    Car c1;
    c1.model = "BMW";
    c1.speed = 250;
    cout << "Car: " << c1.model << ", Speed: " << c1.speed << endl;

    // enum example
    Status state = Running;
    cout << "Enum value (Running = 0): " << state << endl;

    // union example
    Data d;
    d.i = 10;
    cout << "Union storing int = " << d.i << endl;
    d.f = 5.5;
    cout << "Union storing float = " << d.f << endl;
    d.c = 'Z';
    cout << "Union storing char = " << d.c << endl;

    cout << "\n=========== SIZE OF TYPES (optional) ===========\n";
    cout << "Size of int: " << sizeof(int) << " bytes" << endl;
    cout << "Size of double: " << sizeof(double) << " bytes" << endl;
    cout << "Size of Player: " << sizeof(Player) << " bytes" << endl;

    return 0;
}

// --------------------------------------------------------------------------------------------------------------------------------------------------