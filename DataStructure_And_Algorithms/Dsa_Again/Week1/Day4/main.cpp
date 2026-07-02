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

int main()
{
}