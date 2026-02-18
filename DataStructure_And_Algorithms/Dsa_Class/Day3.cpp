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

void printfun(int test){
    if(test<1){
        return;
    }else{
        cout<<test<<" ";
        printfun(test-1);
        cout<<test<<" ";
        return;
    }
}

void printNos(int n){
    if (n==0){
        return;
    }else{
        printNos(n-1);
        cout << n << " ";

    }
}

vector<int> mergeTwoSortedArrays(vector<int> arr1, vector<int> arr2){
    vector<int> merged;
    int i = 0, j = 0;
    while (i < arr1.size() && j < arr2.size()) {
        if (arr1[i] < arr2[j]) {
            merged.push_back(arr1[i]);
            i++;
        } else {
            merged.push_back(arr2[j]);
            j++;
        }
    }
    while (i < arr1.size()) {
        merged.push_back(arr1[i]);
        i++;
    }
    while (j < arr2.size()) {
        merged.push_back(arr2[j]);
        j++;
    }
    return merged;
}

vector<int>mergesortusingrecursion(vector<int> arr){
    if(arr.size() <= 1){
        return arr;
    }
    int mid = arr.size()/2;
    vector<int> left(arr.begin(), arr.begin()+mid);
    vector<int> right(arr.begin()+mid, arr.end());
    left = mergesortusingrecursion(left);
    right = mergesortusingrecursion(right);
    return mergeTwoSortedArrays(left, right);
}

vector<int> quickSort(vector<int> arr){
    if(arr.size() <= 1){
        return arr;
    }
    int pivot = arr[arr.size()/2];
    vector<int> left, right;
    for(int i = 0; i<arr.size(); i++){
        if(arr[i] < pivot){
            left.push_back(arr[i]);
        }else if(arr[i] > pivot){
            right.push_back(arr[i]);
        }
    }
    left = quickSort(left);
    right = quickSort(right);
    left.push_back(pivot);
    left.insert(left.end(), right.begin(), right.end());
    return left;
}

// vector<int> quicksortiterative(vector<int> arr){
//     vector<int> stack;
//     stack.push_back(0);
//     stack.push_back(arr.size()-1);
//     while (!stack.empty()) {
//         int end = stack.back();
//         stack.pop_back();
//         int start = stack.back();
//         stack.pop_back();
//         if (start >= end) {
//             continue;
//         }
//         int pivot = partition(arr, start, end);
//         stack.push_back(start);
//         stack.push_back(pivot - 1);
//         stack.push_back(pivot + 1);
//         stack.push_back(end);
//     }
//     return arr;
// }

int removeDuplicates(vector<int> arr){
    int i = 0;
    for(int j= 1; j<arr.size();j++){
        if(arr[i] != arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }
    return i+1;
}

vector<int> binarySearchusingRecursion(vector<int> arr, int target, int left, int right){
    if(left > right){
        return {-1}; 
    }else{
        int mid = left + (right-left)/2;
        if(arr[mid] == target){
            return {mid};
        }else if(arr[mid] < target){
            return binarySearchusingRecursion(arr, target, mid+1, right);
        }else{
            return binarySearchusingRecursion(arr, target, left, mid-1);
        }
    }
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
    printfun(5);
    cout << endl;
    printNos(5);
    cout << endl;

    vector<int> arr1 = {1,3,5,7,9};
    vector<int> a2 = {2,4,6,8,10};
    vector<int> mergedArr = mergeTwoSortedArrays(arr1, a2);
    for (int val : mergedArr) {
        cout << val << " ";
    }
    cout << endl;

    vector<int> unsortedArr = {38, 27, 43, 3, 9, 82, 10};
    vector<int> sortedArr = mergesortusingrecursion(unsortedArr);
    for (int val : sortedArr) {
        cout << val << " ";
    }
    cout << endl;


    vector<int> unsortedArr2 = {10, 7, 8, 9, 1, 5};
    vector<int> sortedArr2 = quickSort(unsortedArr2);
    for (int val : sortedArr2) {
        cout << val << " ";
    }
    cout << endl;

    vector<int> arrWithDuplicates = {1, 1, 2, 2, 3, 4, 4, 5};
    int newLength = removeDuplicates(arrWithDuplicates);
    cout << "New length: " << newLength << endl;
    return 0;

}
