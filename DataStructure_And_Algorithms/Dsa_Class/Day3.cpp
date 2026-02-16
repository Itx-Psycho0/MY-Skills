#include <iostream>
#include <vector>
using namespace std;

int MaxEle(vector<int> arr){
    int max = arr[0];
    for(int i =0; i<arr.size(); i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }    return max;
}

int sumOfnNaturalNUm(int n){
    int sum = n*(n+1)/2;
    return sum;
}

int SecondLargest(vector<int> arr){
    if(arr.size() < 2){
        return -1; // Not enough elements for second largest
    }
    int largest = arr[0];
    for (int i = 1; i < arr.size(); i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    int secondLargest = INT_MIN;
    for (int i = 0; i < arr.size(); i++) {
        if (arr[i] > secondLargest && arr[i]!= largest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

vector<int> reverseArray(vector<int> arr){
    int start = 0;
    int end = arr.size() - 1;
    while (start < end) {
        swap(arr[start], arr[end]);
        start++;
        end--;
    }
    return arr;
}

vector<int> MoveZerostoEnd(vector<int> arr){
    int i = 0; // pointer for zeros 
    int n = arr.size();
    for(int j = 0; j<n; j++){
        if(arr[j]!=0){
            swap(arr[i],arr[j]);
            i++;
        }
    }
    return arr;
}

vector<int> maximumsumofsubarrayofsizek(vector<int> arr, int k){
    vector<int> result;
    int n = arr.size();
    for(int i = 0; i<=n-k; i++){
        int sum = 0;
        for(int j = i; j<i+k; j++){
            sum += arr[j];
        }
        result.push_back(sum);
    }
    return result;
}

int main(){
    vector<int> arr = {1,2,3,4,5};
    cout<<MaxEle(arr) << endl;
    cout<<sumOfnNaturalNUm(5) << endl;
    cout<<SecondLargest(arr) << endl;
    vector<int> reversedArr = reverseArray(arr);
    for (int i = 0; i < reversedArr.size(); i++) {
        cout << reversedArr[i] << " ";
    }
    cout << endl;
    vector<int> arr2 = {0,1,0,3,12};
    vector<int> movedZerosArr = MoveZerostoEnd(arr2);
    for (int val : movedZerosArr) {
        cout << val << " ";
    }
    cout << endl;

    vector<int> maxSumArray = maximumsumofsubarrayofsizek(arr, 3);
    for (int val : maxSumArray) {
        cout << val << " ";
    }
    cout << endl;
    return 0;

}
