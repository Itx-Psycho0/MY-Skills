// Kadane's algorithm 
#include <iostream>
#include <vector>
using namespace std;
int main(){
    // continuous part of array called subarray
    int n;
    cin >> n;
    vector<int> arr(n);
    for(int i = 0; i < n; i++){
        cin >> arr[i];
    }
    for(int st = 0; st < n; st++){
        for(int end = st; end < n; end++){
            for(int i = st; i<=end; i++){
                cout << arr[i];
            }
            cout << " ";

        }
        cout << endl;
    }
    int maxSum = INT_MIN;
    for(int st = 0; st < n; st++){
        int sum = 0;
        for(int end = st; end<n; end++){
            sum += arr[end];  
            maxSum = max(maxSum, sum);  
        }
    }
    cout << "Using Brute Force: " << maxSum << endl;

    // Kadane's Algorithm
    int currSum = 0;
    for(int i = 0; i < n; i++){
        currSum += arr[i];
        maxSum = max(maxSum, currSum);
        if(currSum<0){
            currSum = 0;
        }
    }
    cout << "Using Kadane's Algorithm: " << maxSum << endl;
    return 0;



}