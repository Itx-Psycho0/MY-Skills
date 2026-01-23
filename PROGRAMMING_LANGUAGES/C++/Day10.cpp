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



int main(){
    printHello();
    cout << printNumber() <<"\n";
    cout << sumOftwonumber(5,6) <<"\n";
    cout << sumOfNnumber(5) <<"\n";
    cout << nFactorial(5) <<"\n";
    return 0;
}


//