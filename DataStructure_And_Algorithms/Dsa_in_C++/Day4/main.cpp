#include <iostream>
#include "q.h"

using namespace std;

int main()
{
    int n;
    cout << "Enter the size of the array: ";
    cin >> n;
    int arr[n];
    cout << "Enter " << n << " elements: ";
    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }
    int largest = LargestElement(arr, n);
    cout << "The largest element is: " << largest << endl;
    int smallest = SmallestNumber(arr, n);
    cout << "The smallest element is: " << smallest << endl;
    int sum = ArraySum(arr, n);
    cout << "The sum of the elements is: " << sum << endl;
    CountEvenOdd(arr, n);
    int secondLargest = SecondLargest(arr, n);
    cout << "The second largest element is: " << secondLargest << endl;
}