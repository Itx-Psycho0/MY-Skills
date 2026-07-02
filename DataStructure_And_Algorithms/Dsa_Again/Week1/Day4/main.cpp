#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <unordered_set>
using namespace std;

bool containsDuplicate(vector<int> &nums)
{
    unordered_set<int> seen;
    for (int num : nums)
    {
        if (seen.count(num))
        {
            return true;
        }
        seen.insert(num);
    }
    return false;
}

vector<int> twoSum(vector<int> &nums, int target)
{
    unordered_map<int, int> numToIndex;
    for (int i = 0; i < nums.size(); ++i)
    {
        int complement = target - nums[i];
        if (numToIndex.count(complement))
        {
            return {numToIndex[complement], i};
        }
        numToIndex[nums[i]] = i;
    }
    return {};
}

bool isAnagram(string s, string t)
{
    if (s.length() != t.length())
    {
        return false;
    }
    unordered_map<char, int> charCount;
    for (char c : s)
    {
        charCount[c]++;
    }
    for (char c : t)
    {
        if (charCount.find(c) == charCount.end() || charCount[c] == 0)
        {
            return false;
        }
        charCount[c]--;
    }
    return true;
}

int main()
{

    cout << "Enter the number of elements in the array: ";
    int n;
    cin >> n;
    vector<int> nums(n);
    cout << "Enter the elements of the array: ";
    for (int i = 0; i < n; ++i)
    {
        cin >> nums[i];
    }
    cout << "Contains duplicate: " << (containsDuplicate(nums) ? "true" : "false") << endl;
    return 0;
}