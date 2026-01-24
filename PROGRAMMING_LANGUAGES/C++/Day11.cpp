//Day 11
// Binary Number System

// 0/1

//Decimal to Binary
//42 -> repeated division with 2 and take remainder 
//42/2 - 0
// 21/2 - 1
// 10/2 - 0
// 5/2 - 1
// 2/2 - 0
// 1/2 - 1
// 101010b - 42d

// Binary to decimal
// it will multiply by two the power of increasing number +1 - 101 - 2^2+2^1+2^0 - 5

// Common numbers
// 0 - 00
// 1 - 01
// 2 - 10
// 3 - 11
// 4 - 100
// 5 - 101
// 6 - 110
// 7 - 111
// 8 - 1000
// 9 - 1001
// 10 - 1010

// one extra method :- 25 in binary 
// 16 8 4 2 1 
// 25 - 16 = 9 - 1
// 9 - 8 = 1 - 1
// 1 - 4 = 0 - 0
// 1 - 2 = 0 - 0
// 1 - 1 = 0 - 1
// 11001

// for negative
// Dec-bin

// Two's complement
// convert binary form
// prefix with 0 in binary form
// 1's complement 0->1 1->0
// add 1
// ex - -10
// 1010 
// 01010
// 10101
// 10110 -> -10

// bin - dec
// 2's complement
// 1's complement
// add+1


#include <iostream>
using namespace std;
int decimalToBinary(int n){
    int binary = 0;
    int power = 1;
    while(n>0){
        int rem = n%2;
        binary += rem*power;
        power *= 10;
        n /=2;
    }
    cout << binary;
    return 0;
}
int binaryToDecimal(int n){
    int decimal = 0;
    int power = 1;
    while(n>0){
        int rem = n%10;
        decimal += rem*power;
        power*=2;
        n /= 10;
    }
    cout << decimal;
    return 0;
}

int main(){
    int n;
    cin >> n;
    decimalToBinary(n);
    cout << "\n";
    cin >> n;
    binaryToDecimal(n);
    return 0;
}