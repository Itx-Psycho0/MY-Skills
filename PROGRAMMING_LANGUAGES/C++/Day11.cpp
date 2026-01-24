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
int main(){
    int n;
    cin >> n;
    decimalToBinary(n);
    return 0;
}