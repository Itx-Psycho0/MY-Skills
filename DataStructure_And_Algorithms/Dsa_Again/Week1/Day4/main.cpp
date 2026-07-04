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

int majorityElement(vector<int> &nums)
{
    unordered_map<int, int> countMap;
    int majorityCount = nums.size() / 2;
    for (int num : nums)
    {
        countMap[num]++;
        if (countMap[num] > majorityCount)
        {
            return num;
        }
    }
    return -1; // This line should never be reached if a majority element exists
}

int majorityElementBoyerMoore(vector<int> &nums)
{
    int count = 0;
    int candidate = 0;

    for (int num : nums)
    {
        if (count == 0)
        {
            candidate = num;
        }
        count += (num == candidate) ? 1 : -1;
    }
    return candidate;
}

vector<int> intersection(vector<int> &nums1, vector<int> &nums2)
{

    unordered_set<int> set1(nums1.begin(), nums1.end());
    unordered_set<int> resultSet;

    for (int num : nums2)
    {
        if (set1.count(num))
        {
            resultSet.insert(num);
        }
    }

    return vector<int>(resultSet.begin(), resultSet.end());
}

int BinarySearch(vector<int> &nums, int target)
{
    int left = 0;
    int right = nums.size() - 1;
    while (left <= right)
    {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target)
        {
            return mid;
        }
        else if (nums[mid] < target)
        {
            left = mid + 1;
        }
        else
        {
            right = mid - 1;
        }
    }
    return -1; // Target not found
}

int SearchInsert(vector<int> &nums, int target)
{
    int left = 0;
    int right = nums.size() - 1;
    while (left <= right)
    {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target)
        {
            return mid;
        }
        else if (nums[mid] < target)
        {
            left = mid + 1;
        }
        else
        {
            right = mid - 1;
        }
    }
    return left; // Position where the target should be inserted
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