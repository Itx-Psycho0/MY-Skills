// Day 13
// Arrays
#include <iostream>
using namespace std;


//Linear Search
int Linear_Search(int arr[], int n, int key){
    for(int i = 0; i < n; i++){
        if(arr[i] == key){
            return i;
        }
    }
    return -1;
}

// Reverse an array
void reverse(int arr[], int n){
    int start = 0;
    int end = n-1;
    while(start < end){
        swap(arr[start],arr[end]);
        start++;
        end--;
    }
}




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
    // Pass by reference
    // In c++ a refernce is an alternative name for an object or function, and its address is the address of the pbject or fucntion it refers to. for sake of understanding we are calling it address here .
    //chnages in original 

    cout << smallest <<"\n";
    cout << largest <<"\n";
    cout << Linear_Search(arr,6,15) << "\n";
    reverse(arr,6);
    for(int i = 0; i < 6; i++){
        cout << "reverse array" << "\n";
        cout << arr[i] <<"\n";
    }
    
    return 0;
}