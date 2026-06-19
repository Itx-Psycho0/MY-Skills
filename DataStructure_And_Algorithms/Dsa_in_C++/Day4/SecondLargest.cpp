#include <iostream>
#include <climits>
using namespace std;

int SecondLargest(int arr[], int n)
{
    int l = INT_MIN;
    int sl = INT_MIN;
    if (n < 2)
    {
        return -1; // Not enough elements for second largest
    }
    for (int i = 1; i < n; i++)
    {
        if (arr[i] > l)
        {
            sl = l;
            l = arr[i];
        }
        else if (arr[i] > sl && arr[i] != l)
        {
            sl = arr[i];
        }
    }
    if (sl == l)
    {
        return -1; // No second largest element
    }
    return sl;
}