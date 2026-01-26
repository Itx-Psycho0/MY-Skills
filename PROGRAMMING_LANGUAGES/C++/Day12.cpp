// Day 12 
// Bitwise operators

// Bitwise &
// Bitwise |
// Bitwise ^
// Bitwise ~
// Bitwise <<
// Bitwise >>

// & - 0&0 - 0


#include <iostream>
using namespace std;
int main(){
    int a = 4, b = 8;
    cout << (a&b) <<"\n";
    cout << (a|b) <<"\n";
    cout << (a^b) <<"\n";
    cout << (~a) <<"\n";
    cout << (a<<2) <<"\n";
    cout << (a>>2) <<"\n";
    cout << sizeof(int) <<"\n";
    cout << sizeof(long int) <<"\n";
    cout << sizeof(short int) <<"\n";
    cout << sizeof(long long) <<"\n";
    unsigned int z = -10;
    cout << z <<"\n";
    

    int x = 10, y = 20;

    if(3>1){
      cout << x <<"\n";
    }else{
      cout << y <<"\n";
    }
    return 0;

}


/*
===========================
  Operator Precedence Table
===========================

| Precedence | Operators                     | Associativity |
|------------|-------------------------------|---------------|
| 1st        | !, + (unary), ~               | Right to Left |
| 2nd        | *, /, %                       | Left to Right |
| 3rd        | +, -                          | Left to Right |
| 4th        | <<, >>                        | Left to Right |
| 5th        | <, <=, >, >=                  | Left to Right |
| 6th        | ==, !=                        | Left to Right |
| 7th        | &                             | Left to Right |
| 8th        | ^                             | Left to Right |
| 9th        | |                             | Left to Right |
| 10th       | &&                            | Left to Right |
| 11th       | ||                            | Left to Right |
| 12th       | =, +=, -=, *=, /=, %=, &=, ^= | Right to Left |
|            | |=, <<=, >>=                  |               |

Note:
- Bitwise AND (&), OR (|), XOR (^), NOT (~), and shift operators (<<, >>) are part of this hierarchy.
- Assignment operators have the lowest precedence among these.
*/

// Scope :-
// Local and Global
// local - if else, fn, block, loop
// Global - for all access

// Data Type Modifiers:-
// change meaning of data types:
// long >= 4bytes, short <=2bytes, long long, signed(+ and - numbers), unsigned(+ve only).

