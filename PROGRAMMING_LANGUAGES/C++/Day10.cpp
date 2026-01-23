// Day 10
// Functions
#include <iostream>
using namespace std;
void printHello(){
    //code block
    cout << "hello" <<"\n" ;
}

int printNumber(){
    cout << "number" << "\n";
    return 5;
}

int sumOftwonumber(int a, int b){
    int s = a+b;
    return s;
    // return a+b;

}

int sumOfNnumber(int n){
    int sum = 0;
    for(int i = 1; i <= n; i++){
        sum += i;
    }
    return sum;
}

int nFactorial(int n){
    int fact = 1;
    for(int i = 1; i <= n; i++){
        fact *= i;
    }
    return fact;
}

// Function in memory
// in c++ we have stack memory and heap 
// - heap is use for dynamic allocation
// - stack use for static "
// functions goes in stack
// first was called by system is main
// then main call other fun


// Pass by value
// it is just pass the value by name variable 
// so if pass x y as param in any fn in main than they will be make a copy of itself in that fn by that fn param var name.

// Pass by refernce
// passing the original

// primitive data always pass as pass by value.

int nCr(int n, int r){
    return nFactorial(n)/(nFactorial(r)*nFactorial(n-r));
}
int nFibonacci(int n){
    if(n == 0){
        return 0;
    }
    if(n == 1){
        return 1;
    }
    return nFibonacci(n-1)+nFibonacci(n-2);
}

int main(){
    printHello();
    cout << printNumber() <<"\n";
    cout << sumOftwonumber(5,6) <<"\n";
    cout << sumOfNnumber(5) <<"\n";
    cout << nFactorial(5) <<"\n";
    cout << nCr(5,2) <<"\n";
    cout << nFibonacci(5) <<"\n";
    return 0;
}


//