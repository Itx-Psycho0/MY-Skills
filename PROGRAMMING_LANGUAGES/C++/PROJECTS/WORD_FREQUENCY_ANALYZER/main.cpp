#include <iostream>
#include <string>
#include <unordered_map>
#include <cctype>
using namespace std;

void countFrequency(string para)
{
    unordered_map<string, int> mp;
    string word = "";

    for (char w : para)
    {
        if (w != ' ')
        {
            word += tolower(w);
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

    int highestFrequency = 0;
    string mostFrequentWord = "";

    for (const auto &[key, value] : mp)
    {
        cout << key << ":" << value << endl;
        if (value > highestFrequency)
        {
            highestFrequency = value;
            mostFrequentWord = key;
        }
    }

    cout << "Most frequent word: " << mostFrequentWord << " (Frequency: " << highestFrequency << ")" << endl;
}

int main()
{
    string input;
    cout << "Enter a paragraph of text: ";
    getline(cin, input);
    countFrequency(input);

    return 0;
}