#include <iostream>
#include <vector>
using namespace std;

void ReverseArray(vector<int> &arr)
{
    int s = arr.size();
    int start = 0;
    int end = s - 1;
    while (start < end)
    {
        swap(arr[start], arr[end]);
        start++;
        end--;
    }
}

int LinearSearch(vector<int> &arr, int target)
{
    int s = arr.size();
    for (int i = 0; i < s; i++)
    {
        if (arr[i] == target)
        {
            return i;
        }
    }
    return -1;
}

void moveZeroes(vector<int> &arr)
{
    int p = 0;
    for (int i = 0; i < arr.size(); i++)
    {
        if (arr[i] != 0)
        {
            swap(arr[i], arr[p]);
            p++;
        }
    }
}

int main()
{
    int n;
    cout << "Enter the size of the array: ";
    cin >> n;
    vector<int> arr(n);
    cout << "Enter the elements of the array: ";
    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }

    // ReverseArray(arr);

    // cout << "Reversed array: ";
    // for (int i = 0; i < n; i++)
    // {
    //     cout << arr[i] << " ";
    // }
    // cout << endl;

    cout << "Search the number in the array";
    int n2;
    cin >> n2;
    int findIndex = LinearSearch(arr, n2);
    cout << "element on index" << findIndex << endl;

    cout << "Move Zeroes";
    moveZeroes(arr);
    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;

    return 0;
}