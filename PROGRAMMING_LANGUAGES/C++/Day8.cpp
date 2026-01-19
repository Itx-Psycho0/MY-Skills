// Day 8

#include <iostream>
using namespace std;
int main(){
    int n;
    cin >> n;
    if(n>=0){
        cout << "Is +ve" <<"\n";
    }else if(n<0){
        cout << "Is -ve" <<"\n";
    }else{
        cout << "invalid output" <<"\n";
    }

    //Find lowercase and uppercase
    char ch;
    cin >> ws >> ch;
    if(ch >= 'a' && ch <= 'z'){
        cout << "Lowercase" <<"\n";
    }else if(ch >= 'A' && ch <= 'Z'){
        cout << "Uppercase" <<"\n";
    }else{
        cout << "invalid output" <<"\n";
    }
    //ternary statement - condition?stm1:stm2;
    return 0; 
}

// char is stored in integer form in memory.