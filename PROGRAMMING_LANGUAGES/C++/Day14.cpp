// Day 14
// Vectors
// vector<int> vec:
// vector<int> vec= {1,2,3}
//vector <int>vec(3,0)

#include <iostream>
#include <vector>
using namespace std;


int singleNumber(vector<int>& nums){
    int res = 0;
    for(int i = 0; i < nums.size(); i++){
        res ^= nums[i];  //Xor - 0-0 - 0
    }
    return res;

}


int main(){
    vector<int> vec;
    vec.push_back(1);
    vec.push_back(2);
    vec.push_back(3);
    vec.push_back(4);
    vec.push_back(5);
    vec.pop_back();
    vec.pop_back();
    vec.pop_back();
    cout << vec.front() << "\n";
    cout << vec.back() << "\n";
    cout << vec.size() << "\n";
    cout << vec.empty() << "\n";
    cout << vec.capacity() << "\n";
    cout << vec.at(1) << "\n";
    for(int i = 0; i < vec.size(); i++){
        cout << vec[i] << " ";
    }
    cout << "\n";
    //for each loop
    for(int x : vec){
        cout << x << " ";
    }
    cout << "\n";
    vector<int> vec2 = {4,1,2,1,2};
    cout << singleNumber(vec2) << "\n";
    return 0;




}


//