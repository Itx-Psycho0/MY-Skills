// Math in Dsa
#include <iostream>
using namespace std;
int revV2(int n){
    return 1 + revV2(n/10);
}
int revV2(int n){
    return 1 + revV2(n/10);
}
int main(){
    int n = 58964;
    
    cout << revV2(n) <<"\n";
    return 0;
    
}

