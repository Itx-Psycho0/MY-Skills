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
    cout << "conditions ended" <<"\n";

    //Loops
    // while loop
    cout << "while loop" <<"\n";
    int i;
    cin >> i;
    //cout << i <<"\n";
    while(i<6){
        cout<< i <<"\n";
        i++;
    }

    // for loop
    cout << "for loop" <<"\n";
    int j{3};
    for(int i = 1; i <= 10; i++){
        cout << j*i << "\n";
    }
    

    //Q - sum of number to n
    int z;
    cin >> z;
    int sum = 0;
    for(int i = 1; i <= z; i++){
        sum += i;
    }
    cout << sum <<"\n";

    //Q - sum of all odd numbers 1 to n
    int x;
    cin >> x;
    int sum1 = 0;
    for(int i = 1; i <= x; i++){
        if(i%2 != 0){
            sum1 += i;
        }
    }
    cout << sum1 <<"\n";

    // do while
    do{
        cout << "do while" <<"\n";
    }while(false);

    // Q - prime number or not
    int num;
    cin >> num;
    bool isPrime = true;
    for(int i = 2; i*i <= num; i++){
        if(num%i == 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        cout << "Prime" <<"\n";
    }else{
        cout << "Not Prime" <<"\n";
    }

    //break , continue

    // Nested loop
    for(int i = 1; i<=5; i++){
        for(int j = 1; j<=i; j++){
            cout << "*";
        }
        cout << "\n";
    }
    return 0; 
}

// char is stored in integer form in memory.