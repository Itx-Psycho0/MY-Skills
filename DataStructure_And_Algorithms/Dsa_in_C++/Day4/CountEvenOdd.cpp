#include <iostream>
using namespace std;

void CountEvenOdd(int arr[], int n)
{
    int even = 0, odd = 0;
    for (int i = 0; i < n; i++)
    {
        if (arr[i] % 2 == 0)
        {
            even++;
        }
        else
        {
            odd++;
        }
    }
    cout << "Number of even elements: " << even << endl;
    cout << "Number of odd elements: " << odd << endl;
}
