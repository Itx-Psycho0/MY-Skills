#include <iostream>
#include <string>
using namespace std;

void showStudents(string student_Names[], int marks[], int n)
{
    for (int i = 0; i < n; i++)
    {
        cout << "Student Name : " << student_Names[i] << endl;
        cout << "Student Marks : " << marks[i] << endl;
    }
}

void FindTopper(string student[], int marks[], int n)
{
    int max_marks = marks[0];
    int topper_index = 0;
    for (int i = 1; i < n; i++)
    {
        if (marks[i] > max_marks)
        {
            max_marks = marks[i];
            topper_index = i;
        }
    }
    cout << "Topper: " << student[topper_index] << " with marks: " << max_marks << endl;
}

void LowestMarks(string student[], int marks[], int n)
{
    int low = marks[0];
    int low_index = 0;
    for (int i = 1; i < n; i++)
    {
        if (low > marks[i])
        {
            low = marks[i];
            low_index = i;
        }
    }
    cout << "topperfromlast: " << student[low_index] << " with marks: " << low << endl;
}

void AverageMarks(int marks[], int n)
{
    int sum = 0;
    for (int i = 0; i < n; i++)
    {
        sum += marks[i];
    }
    int avg = sum / n;
    cout << "Average of Marks: " << avg << endl;
}

void SearchStudent(string student[], string stdname, int marks[], int n)
{
    for (int i = 0; i < n; i++)
    {
        if (stdname == student[i])
        {
            cout << "student name : " << stdname << endl;
            cout << "Marks: " << marks[i] << endl;
            return;
        }
    }
}

int main()
{
    int n;
    cout << "Enter number of students you want to add : ";
    cin >> n;
    string student_Names[n];
    int student_Marks[n];
    for (int i = 0; i < n; i++)
    {
        cout << "Enter student name : ";
        cin >> student_Names[i];
        cout << "Enter student marks : ";
        cin >> student_Marks[i];
    }

    string command;
    cout << "Enter your action what you want: THESE ARE THE COMMANDS : show, topper, lowest, average, search, exit" << endl;
    cin >> command;
    if (command == "show")
    {
        showStudents(student_Names, student_Marks, n);
    }
    else if (command == "topper")
    {
        FindTopper(student_Names, student_Marks, n);
    }
    else if (command == "lowest")
    {
        LowestMarks(student_Names, student_Marks, n);
    }
    else if (command == "average")
    {
        AverageMarks(student_Marks, n);
    }
    else if (command == "search")
    {
        string stdname;
        cout << "Enter student name you want to search : ";
        cin >> stdname;
        SearchStudent(student_Names, stdname, student_Marks, n);
    }
    else if (command == "exit")
    {
        cout << "Exiting the program." << endl;
        return 0;
    }
    else
    {
        cout << "Invalid command" << endl;
    }

    return 0;
}