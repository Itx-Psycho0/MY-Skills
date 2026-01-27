// Day 13
// Arrays
#include <iostream>
using namespace std;
int main(){
    int marks[5];
    marks[0] = 10;
    marks[1] = 20;
    marks[2] = 30;  
    marks[3] = 40;
    marks[4] = 50;
    int markings[5] = {10,20,30,40,50};
    cout << marks[0] <<"\n";
    cout << marks[1] <<"\n";
    cout << marks[2] <<"\n";
    cout << marks[3] <<"\n";
    cout << marks[4] <<"\n";
    cout << markings <<"\n";
    cout << sizeof(marks) <<"\n";
    cout << sizeof(markings)/sizeof(int) <<"\n";
    int arr[] = {5,15,22,1,-15,24};
    int smallest = INT_MAX;
    int largest = INT_MIN;
    for(int i = 0; i < 5; i++){
        if(arr[i] < smallest){
            smallest = arr[i];
        }
        if(arr[i] > largest){
            largest = arr[i];
        }
    
    
    }
    return 0;
}