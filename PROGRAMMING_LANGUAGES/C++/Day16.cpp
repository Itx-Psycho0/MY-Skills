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
}