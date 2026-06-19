// Pointers
#include <iostream>
using namespace std;

int add(int a, int b); // Function declaration for the add function
void printMessage();   // Function declaration for the printMessage function
int main()
{
    // pointers are king of variable that store memory address of another variable.
    int num{10};                                           // Declare an integer variable named num and initialize it with the value 10
    int *ptr{&num};                                        // Declare a pointer variable named ptr and initialize it with the address of the variable num
    cout << "Value of num: " << num << endl;               // Output the value of num
    cout << "Address of num: " << &num << endl;            // Output the address of num
    cout << "Value of ptr: " << ptr << endl;               // Output the value of ptr, which is the address of num
    cout << "Dereferenced value of ptr: " << *ptr << endl; // Output the value pointed to by ptr, which is the value of num (10)

    // Explicitly initialize with nullptr
    int *p_number1{nullptr};
    int *p_fractional_number1{nullptr};

    // Pointers to different variables are  of the same size
    cout << "sizeof(int) : " << sizeof(int) << endl;       // 4
    cout << "sizeof(double) : " << sizeof(double) << endl; // 8
    cout << "sizeof(double*) : " << sizeof(double *) << endl;
    cout << "sizeof(int*) : " << sizeof(int *) << endl;
    cout << "sizeof(p_number1) : " << sizeof(p_number1) << endl;
    cout << "sizeof(p_fractional_number1) : " << sizeof(p_fractional_number1) << endl;

    // It doesn't matter if you put the * close to data type or to varible name
    int *p_number2{nullptr};
    int *p_number3{nullptr};
    int *p_number4{nullptr};

    int *p_number5{}, other_int_var{};
    int *p_number6{}, other_int_var6{}; // Confusing as you wonder if other_int_var6
                                        // is also a pointer to int. It is not
                                        // The structure is exactly the same for the
                                        // previous statement

    cout << "sizeof(p_number5) : " << sizeof(p_number5) << endl;
    cout << "sizeof(other_int_var) : " << sizeof(other_int_var) << endl;
    cout << "sizeof(p_number6) : " << sizeof(p_number6) << endl;
    cout << "sizeof(other_int_var6) : " << sizeof(other_int_var6) << endl;

    // It is better to separate these declarations on different lines though
    int *p_number7{};
    int other_int_var7{}; // No room for confusion this time

    // Initializing pointers and assigning them data
    // We know that pointers store addresses of variables
    int int_var{43};
    int *p_int{&int_var}; // The address of operator (&);

    cout << "Int var : " << int_var << endl;
    cout << "p_int (Address in memory)  : " << p_int << endl;

    // You can also change the address stored in a pointer any time
    int int_var1{65};
    p_int = &int_var1; // Assign a different address to the pointer
    cout << "p_int (with different address)  : " << p_int << endl;

    // Can't cross assign between pointers of different types
    int *p_int1{nullptr};
    double double_var{33};

    // p_int = &double_var; // Compiler error

    // Dereferencing a pointer :
    int *p_int2{nullptr};
    int int_data{56};
    p_int2 = &int_data;

    cout << "value : " << *p_int2 << endl; // Dereferencing a pointer

    const char *msg{"Hello, World!"};
    cout << "msg : " << msg << endl;

    //*msg = "B" // Compiler error as we are trying to change the value of a const char pointer
    cout << "msg : " << *msg << endl;

    // Dynamic memory allocation
    // How we've used pointers so far
    /*
    int number {22}; // Stack

    int * p_number = &number;

    cout << endl;
    cout << "Declaring pointer and assigning address : " << endl;
    cout << "number : " << number << endl;
    cout << "p_number : " << p_number << endl;
    cout << "&number : " << &number << endl;
    cout << "*p_number : " << *p_number <<  endl;


    int * p_number1; // Uninitialized pointer , contains junk address
    int number1 {12};
    p_number1 = &number1; // Make it point to a valid address
    cout << endl;
    cout << "Uninitialized pointer : " << endl;
    cout << "*p_number1 : " << *p_number1 << endl;
    */

    // BAD
    // Writing into uninitialized pointer through dereference
    /*
    int *p_number2; // Contains junk address : could be anything
    cout << "Writting in the 55" << endl;
    *p_number2 = 55; // Writing into junk address : BAD!
    cout << endl;
    cout << "Writing into uninitialized pointer through dereference" << endl;
    cout << "p_number2 : " << p_number2 << endl; // Reading from junk address.
    cout << "Dereferencing bad memory" << endl;
    cout << "*p_number2 : " << *p_number2 << endl;
    */

    // Initializing pointer to null
    /*
    //int *p_number3{nullptr}; // Also works
    int * p_number3 {}; // Initialized with pointer equivalent of zero : nullptr
                        // A pointer pointing nowhere
    cout << "Writting into nullptr memory" << endl;
    //*p_number3 = 33; // Writting into a pointer pointing nowhere : BAD, CRASH
    cout << "Done writting" << endl;

    cout << endl;
    cout << "Reading and writting through nullptr : " << endl;
    //cout << "p_number3 : " << p_number3 << endl;
    //cout << "*p_number3 : " << *p_number3 << endl;// Reading from nullptr
                                                            // BAD, CRASH.
                                                            */

    // Dynamic heap memory
    /*
    int *p_number4{nullptr};
    p_number4 = new int; 	// Dynamically allocate space for a single int on the heap
                            // This memory belongs to our program from now on. The system
                            // can't use it for anything else, untill we return it.
                            //After this line executes, we will have a valid memory location
                            // allocated. The size of the allocated memory will be such that it
                            // can store the type pointed to by the pointer


    *p_number4 = 77; // Writting into dynamically allocated memory
    cout << endl;
    cout << "Dynamically allocating memory : " << endl;
    cout <<"*p_number4 : " << *p_number4 << endl;

    //Return memory to the OS
    delete p_number4;
    p_number4 = nullptr;
    */

    // It is also possible to initialize the pointer with a valid
    // address up on declaration. Not with a nullptr
    // int *p_number5{new int};     // Memory location contains junk value
    // int *p_number6{new int(22)}; // use direct initialization
    // int *p_number7{new int{23}}; // use uniform initialization

    // cout << endl;
    // cout << "Initialize with valid memory address at declaration : " << endl;
    // cout << "p_number5 : " << p_number5 << endl;
    // cout << "*p_number5 : " << *p_number5 << endl; // Junk value

    // cout << "p_number6 : " << p_number6 << endl;
    // cout << "*p_number6 : " << *p_number6 << endl;

    // cout << "p_number7 : " << p_number7 << endl;
    // cout << "*p_number7 : " << *p_number7 << endl;

    // Remember to release the memory
    // delete p_number5;
    // p_number5 = nullptr;

    // delete p_number6;
    // p_number6 = nullptr;

    // delete p_number7;
    // p_number7 = nullptr;

    // // Can reuse pointers
    // p_number5 = new int(81);
    // cout << "*p_number : " << *p_number5 << endl;

    // delete p_number5;
    // p_number5 = nullptr;

    // // Calling delete twice on a pointer : BAD!
    // p_number5 = new int(99);
    // cout << "*p_number5 : " << *p_number5 << endl;

    // delete p_number5;
    // delete p_number5;

    //

    cout << "Program is ending well" << endl;

    // Dangling Pointer : A dangling pointer is a pointer that points to a memory location that has been deallocated or released. Accessing or dereferencing a dangling pointer can lead to undefined behavior, crashes, or data corruption. To avoid dangling pointers, it is important to set pointers to nullptr after deleting the memory they point to.

    // Memory leak : A memory leak occurs when a program allocates memory on the heap but fails to release it when it is no longer needed. This can lead to a gradual increase in memory usage over time, eventually causing the program to run out of memory and crash. To prevent memory leaks, it is important to ensure that every dynamically allocated memory block is properly deallocated using the delete operator when it is no longer required.

    // Dynamic arrays
    int size{5};
    int *p_array{new int[size]}; // Dynamically allocate an array of integers
    for (int i = 0; i < size; ++i)
    {
        p_array[i] = i + 1; // Initialize the array with values 1 to 5
    }
    // Don't forget to deallocate the dynamically allocated array
    delete[] p_array;
    p_array = nullptr;

    // References
    int var{10};                                                 // Declare an integer variable named var and initialize it with the value 10
    int &ref{var};                                               // Declare a reference variable named ref that refers to the variable var
    cout << "Value of var: " << var << endl;                     // Output the value of var
    cout << "Value of ref: " << ref << endl;                     // Output the value of ref, which is the same as var
    ref = 20;                                                    // Modify the value of var through the reference ref
    cout << "Value of var after modifying ref: " << var << endl; // Output the modified value of var
    cout << "Value of ref after modifying ref: " << ref << endl; // Output the modified value of ref, which is the same as var

    // refernce vs pointer
    int num1{30};     // Declare an integer variable named num1 and initialize it with the value 30
    int *ptr1{&num1}; // Declare a pointer variable named ptr1 and initialize it with the address of the variable num1
    int &ref1{num1};  // Declare a reference variable named ref1 that refers to the variable num1
    cout << "Value of num1: " << num1 << endl;
    cout << "Value of ptr1: " << ptr1 << endl;                       // Output the value of ptr1, which is the address of num1
    cout << "Value of ref1: " << ref1 << endl;                       // Output the value of ref1, which is the same as num1
    *ptr1 = 40;                                                      // Modify the value of num1 through the pointer ptr1
    cout << "Value of num1 after modifying ptr1: " << num1 << endl;  // Output the modified value of num1
    cout << "Value of ptr1 after modifying ptr1: " << *ptr1 << endl; // Output the modified value of ptr1, which is the same as num1
    cout << "Value of ref1 after modifying ptr1: " << ref1 << endl;  // Output the modified value of ref1, which is the same as num1
    ref1 = 50;                                                       // Modify the value of num1 through the reference ref1
    cout << "Value of num1 after modifying ref1: " << num1 << endl;  // Output the modified value of num1
    cout << "Value of ptr1 after modifying ref1: " << *ptr1 << endl; // Output the modified value of ptr1, which is the same as num1
    cout << "Value of ref1 after modifying ref1: " << ref1 << endl;  // Output the modified value of ref1, which is the same as num1

    // const references
    const int const_var{100};                            // Declare a constant integer variable named const_var and initialize it with the value 100
    const int &const_ref{const_var};                     // Declare a constant reference variable named const_ref that refers to the constant variable const_var
    cout << "Value of const_var: " << const_var << endl; // Output the value of const_var
    cout << "Value of const_ref: " << const_ref << endl; // Output the value of const_ref, which is the same as const_var
    // const_ref = 200; // Compiler error: Cannot modify a constant reference
    cout << "Value of const_ref after attempting to modify: " << const_ref << endl; // Output the value of const_ref

    // Character manipulation
    cout << isalpha('A') << endl; // Check if 'A' is an alphabetic character (returns 1 for true)
    cout << isdigit('5') << endl; // Check if '5' is a digit character (returns 1 for true)
    cout << isspace(' ') << endl; // Check if ' ' is a whitespace character (returns 1 for true)
    cout << toupper('a') << endl; // Convert 'a' to uppercase (returns 'A')
    cout << tolower('B') << endl; // Convert 'B' to lowercase (returns 'b')

    // one definition rule : A variable, function, or object can only be defined once in a program. If you try to define it multiple times, you will get a compilation error. However, you can declare it multiple times as long as there is only one definition.
    // but for classes, you can have multiple definitions as long as they are identical and in different translation units (source files). This is because classes are typically defined in header files that are included in multiple source files. The compiler will ensure that only one definition of the class is used during the linking phase.

    printMessage();       // Call the printMessage function to print a message
    int res = add(5, 10); // Call the add function with arguments 5 and 10, and store the result in resu

    return 0;
}

// functions : A function is a block of code that performs a specific task. It can take input parameters, perform operations, and return a value. Functions help in organizing code, promoting reusability, and improving readability. In C++, functions are defined with a return type, a name, and a parameter list. They can be called from other parts of the program to execute the defined task.

void printMessage()
{
    cout << "This is a simple function that prints a message." << endl;
}

int add(int a, int b)
{
    return a + b; // Return the sum of a and b
}