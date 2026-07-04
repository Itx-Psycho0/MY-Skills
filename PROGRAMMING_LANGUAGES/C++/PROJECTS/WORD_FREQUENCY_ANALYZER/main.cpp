#include <iostream>
#include <string>
#include <unordered_map>
using namespace std;

void countFrequency(string para)
{
    unordered_map<string, int> mp;
    string word = "";

    for (char w : para)
    {
        if (w != ' ')
        {
            word += w;
        }
        else
        {
            if (!word.empty())
            {
                mp[word]++;
                word = "";
            }
        }
    }
    if (!word.empty())
    {
        mp[word]++;
    }

    for (const auto &[key, value] : mp)
    {
        cout << key << ":" << value << endl;
    }
}

int main()
{
    string input;
    cout << "Enter a paragraph of text: ";
    getline(cin, input);
    countFrequency(input);

    return 0;
}