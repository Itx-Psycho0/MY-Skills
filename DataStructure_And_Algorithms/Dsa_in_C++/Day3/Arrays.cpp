// Operations on Arrays in C++

#include <iostream>
#include <vector>
using namespace std;


// Searching an element in an array
int linerSearch(vector<int> arr, int ele){
    for(int i = 0; i < arr.size(); i++){
        if(arr[i]==ele){
            return i;
        }
    }
    return -1;
}


// Inserting an element in an array
// int insertElement(vector<int> arr, int ele, int pos){
//     int n = arr.size();
//     if(pos < 0 || pos > n){
//         cout << "Invalid position!" << endl;
//         return -1;
//     }
//     int idx = pos - 1; // Convert to 0-based index
//     for(int i = n-1; i>=idx; i--){
//         arr[i+1] = arr[i];
//         cout << "Shifting element: " << arr[i] << " from index " << i << " to index " << i+1 << endl;
//     }
//     arr[idx] = ele;
//     return (n+1); // Return new size of the array
// }


// Deleting an element from an array
int deleteElement(vector<int> arr, int ele){
    int n = arr.size();
    int i;
    for(i = 0; i < n; i++){
        if(arr[i] == ele){
            break;
        }
    }
    if(i == n){
        return -1; // Element not found
    }
    for(int j = i; j < n-1; j++){
        arr[j] = arr[j+1];
    }
    return (n-1); // Return new size of the array
}


// Largest Element in an array
int largestElement(vector<int> arr){
    int n = arr.size();
    int max = arr[0];
    for(int i = 1; i < n; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}





// Second LArgest Element in an array
int secondLargestElement(vector<int> arr){
    int n = arr.size();
    int max = arr[0];
    int secondMax = -1;
    for(int i = 1; i < n; i++){
        if(arr[i] > max){
            secondMax = max;
            max = arr[i];
        } else if(arr[i] > secondMax && arr[i] != max){
            secondMax = arr[i];
        }
    }
    return secondMax;
}

int checkSOrted(vector<int> arr){
    int n = arr.size();
    // for(int i = 1; i < n; i++){
    //     if(arr[i] < arr[i-1]){
    //         return 0; // Not sorted
    //     }
    // }

    for(int i = 0; i < n-1; i++){
        if(arr[i] > arr[i+1]){
            return 0; // not sorted
        }
    }
    return 1; // sorted
}




// Reverse an array
vector <int> reverseArray(vector<int> arr){
    int n = arr.size();
    int left = 0;
    int right = n-1;
    while(left < right){
        swap(arr[left], arr[right]);
        left++;
        right--;
    }
    return arr;
}


// Remove duplicates from a sorted array
vector<int> removeDuplicates(vector<int> arr){
    int n = arr.size();
    if(n == 0){
        return arr;
    }
    vector<int> uniqueArr;
    uniqueArr.push_back(arr[0]);
    for(int i = 1; i < n; i++){
        if(arr[i] != arr[i-1]){
            uniqueArr.push_back(arr[i]);
        }
    }
    return uniqueArr;

}

// Move Zeros to the end of the array
vector<int> moveZerosToEnd(vector<int> arr){
    int n = arr.size();
    int i = 0;
    for(int j = 0; j < n; j++){
        if(arr[j] != 0){
            swap(arr[i], arr[j]);
            i++;
        }
    }
    return arr;
}



// Leader of an array
vector<int> leaderOfArray(vector<int> arr){
    int n = arr.size();
    vector<int> leaders;
    int maxFromRight = arr[n-1];
    leaders.push_back(maxFromRight);
    for(int i = n-2; i >= 0; i--){
        if(arr[i] > maxFromRight){
            maxFromRight = arr[i];
            leaders.push_back(maxFromRight);
        }
    }
    return leaders;
}

// Maximum sum of subarray size k
int maxSumOfSubarray(vector<int> arr, int k){
    int n = arr.size();
    int sum = 0;
    for(int i = 0; i < k; i++){
        sum += arr[i];
    }
    int maxSum = sum;
    for(int i = k; i < n; i++){
        sum = sum - arr[i-k] + arr[i];
        if(sum > maxSum){
            maxSum = sum;
        }
    }
    return maxSum;
}





int main(){
    vector<int> arr = {5,4,3,2,1};
    int ele = 3;
    int index = linerSearch(arr, ele);
    if(index != -1){
        cout << "Element found at index: " << index << endl;
    } else {
        cout << "Element not found in the array." << endl;
    }

    // int newSize = insertElement(arr, 10, 3);
    // if(newSize != -1){
    //     cout << "New size of the array: " << newSize << endl;
    //     cout << "Updated array: ";
    //     for(int i = 0; i < newSize; i++){
    //         cout << arr[i] << " ";
    //     }        cout << endl;
    // }
    
    // int newSizeAfterDelete = deleteElement(arr, 3);
    // if(newSizeAfterDelete != -1){
    //     cout << "New size of the array after deletion: " << newSizeAfterDelete << endl;
    //     cout << "Updated array after deletion: ";
    //     for(int i = 0; i < newSizeAfterDelete; i++){
    //         cout << arr[i] << " ";
    //     }        cout << endl;
    // }

    int maxElement = largestElement(arr);
    cout << "Largest element in the array: " << maxElement << endl;
    
    int secondMaxElement = secondLargestElement(arr);
    cout << "Second largest element in the array: " << secondMaxElement << endl;
    
    int isSorted = checkSOrted(arr);
    if(isSorted == 1){
        cout << "Array is sorted." << endl;
    } else {
        cout << "Array is not sorted." << endl;
    }

    vector<int> reversedArr = reverseArray(arr);
    cout << "Reversed array: ";
    for(int i = 0; i < reversedArr.size(); i++){
        cout << reversedArr[i] << " ";
    }
    cout << endl;

    vector<int> sortedArr = {1,2,2,3,4,4,5};
    vector<int> uniqueArr = removeDuplicates(sortedArr);
    cout << "Array after removing duplicates: ";
    for(int i = 0; i < uniqueArr.size(); i++){
        cout << uniqueArr[i] << " ";
    }
    cout << endl;

    vector<int> leaders = leaderOfArray(arr);
    cout << "Leaders in the array: ";
    for(int i = 0; i < leaders.size(); i++){
        cout << leaders[i] << " ";
    }
    cout << endl;
    return 0;
}