#include <iostream>
#include <vector>
using namespace std;




void printNto1(int n) {
    if (n <= 0)
        return;

    cout << n << " ";
    printNto1(n - 1);
}

void print1toN(int n){
    if (n<=0){
        return;
    }
    print1toN(n-1);
    cout << n << " ";

}


int sumOfNaturalNUmbers(int n){
    if (n <= 0) {
        return 0;
    }
    return n + sumOfNaturalNUmbers(n-1);
}

int main(){
    printNto1(5);
    cout << endl;
    print1toN(5);
    cout << endl;
    cout << sumOfNaturalNUmbers(5) << endl;
    return 0;
}