// Day 16
// pair sum and majority element in an array
#include <iostream>
#include <vector>
using namespace std;
int main(){
    vector<int> arr = {2,7,11,15};
    int target;
    cin >> target;

    // pair sum Brute force
    for(int i = 0; i < arr.size(); i++){
        for(int j = i+1; j<arr.size(); j++){
            if(arr[i]+arr[j]==target){
                cout << i << " " << j << endl;
            }
        }
    }

    // pair sum optimal
    int i = 0, j = arr.size()-1;
    while(i<j){
        int psum = arr[i]+arr[j];
        if(psum==target){
            cout << i << " " << j << endl;
            break;
        }else if(psum>target){
            j--;
        }else{
            i++;
        }
    }

    // majority element Brute force
    vector<int> arr2 = {1,2,2,1,1};
    for(int i = 0; i < arr2.size(); i++){
        int count = 0;
        for(int j = 0; j < arr2.size(); j++){
            if(arr2[i]==arr2[j]){
                count++;
            }
        }
        if(count > arr2.size()/2){
            cout << arr2[i] << endl;
            break;
        }
    }

    // majority element optimal - Moore's Voting Algorithm
    int candidate = 0, count = 0;
    for(int i = 0; i<arr2.size(); i++){
        if(count==0){
            candidate = arr2[i];
        }
        count += (arr2[i]==candidate) ? 1 : -1;
    }
    cout << candidate << endl;

}