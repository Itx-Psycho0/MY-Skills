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
// int deleteElement(vector<int> arr, int ele){
//     int n = arr.size();
//     int i;
//     for(i = 0; i < n; i++){
//         if(arr[i] == ele){
//             break;
//         }
//     }
//     if(i == n){
//         return -1; // Element not found
//     }
//     for(int j = i; j < n-1; j++){
//         arr[j] = arr[j+1];
//     }
//     return (n-1); // Return new size of the array
// }


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
    int secondMax = INT_MIN;
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



int main(){
    vector<int> arr = {1, 2, 3, 4, 5};
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
    
    return 0;
}