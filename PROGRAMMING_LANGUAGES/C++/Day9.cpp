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

    // Floyd's triangle pattern
    int x = 1;
    int z;
    cin >> z;
    for(int i = 0; i <z; i++){
        for(int j = 0; j < i+1; j++){
            cout << x << " ";
            x++;
        }
        cout << "\n";
    }

    // inverted triangle pattern
    int n;
    cin >> n;
    for(int i =0; i<n; i++){
        for(int j = 0; j < i; j++){
            cout << " ";
        }
        for(int j = 0; j < n-i; j++){
            cout << i+1;
        }
        cout << "\n";
    }

    // pyramid pattern
    int n2;
    cin >> n2;
    for(int i = 0; i < n2; i++){
        for(int j = 0; j < n2-i-1; j++){
            cout << " ";
        }
        for(int j = 1; j <= i+1; j++){
            cout << j;
        }
        for(int j = i; j >0; j--){
            cout << j;
        }
        cout << "\n";
    }
}