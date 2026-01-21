//Day 9
// Patterns

// Square Pattern
#include <iostream>
using namespace std;
int main(){
    for(int i =1; i < 5; i++){
        for(int j = 1; j < 5; j++){
            if(j == i){
                cout << 0;
            }else{
                cout << j;
            }
            
        }
        cout << "\n";
    }
    char num = 'a';
    for(int i =1; i <5; i++){
        for(int j = 0; j < 4; j++){
            cout << num << " ";
            num++;
        }
        cout << "\n";
    
    }

    // Triangle pattern
    for(int i = 0; i < 4; i++){
        for(int j = 0; j < i+1; j++){
            cout << "*";
        }
        cout << "\n";
    }
    char ch = 'a';
    for(int i = 0; i < 4; i++){
        for(int j = 0; j < i+1; j++){
            cout << ch<<" ";
            ch++;
        }
        cout << "\n";
    }
    for(int i = 0; i < 4; i++){
        
        for(int j = i+1; j >= 1; j--){
            cout << j<<" ";
        }
        cout << "\n";
    }

}