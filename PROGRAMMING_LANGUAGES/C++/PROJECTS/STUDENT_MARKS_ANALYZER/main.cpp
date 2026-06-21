#include <iostream>
#include <string>
#include <vector>
using namespace std;

void addStudent(vector<string> &student_Names, vector<int> &student_Marks, string name, int marks)
{
    cout << "Adding student: " << name << " with marks: " << marks << endl;
    cout << "Before adding, number of students: " << student_Names.size() << endl;
    student_Names.push_back(name);
    student_Marks.push_back(marks);
    cout << "After adding, number of students: " << student_Names.size() << endl;
}
void showStudents(vector<string> &student_Names, vector<int> &student_Marks)
{
    for (int i = 0; i < student_Names.size(); i++)
    {
        cout << "Student Name : " << student_Names[i] << endl;
        cout << "Student Marks : " << student_Marks[i] << endl;
    }
}

void FindTopper(vector<string> &student_Names, vector<int> &student_Marks)
{
    if (student_Marks.empty())
    {
        cout << "No students available to find topper." << endl;
        return;
    }
    int max_marks = student_Marks[0];
    int topper_index = 0;
    for (int i = 1; i < student_Marks.size(); i++)
    {
        if (student_Marks[i] > max_marks)
        {
            max_marks = student_Marks[i];
            topper_index = i;
        }
    }
    cout << "Topper: " << student_Names[topper_index] << " with marks: " << max_marks << endl;
}

void LowestMarks(vector<string> &student_Names, vector<int> &student_Marks)
{
    if (student_Marks.empty())
    {
        cout << "No students available to find lowest marks." << endl;
        return;
    }
    int low = student_Marks[0];
    int low_index = 0;
    for (int i = 1; i < student_Marks.size(); i++)
    {
        if (low > student_Marks[i])
        {
            low = student_Marks[i];
            low_index = i;
        }
    }
    cout << "Lowest Marks: " << student_Names[low_index] << " with marks: " << low << endl;
}

void AverageMarks(vector<int> &student_Marks)
{
    if (student_Marks.empty())
    {
        cout << "No students available to calculate average." << endl;
        return;
    }
    int sum = 0;
    for (int i = 0; i < student_Marks.size(); i++)
    {
        sum += student_Marks[i];
    }
    double avg = (double)sum / student_Marks.size();
    cout << "Average of Marks: " << avg << endl;
}

void SearchStudent(vector<string> &student_Names, string stdname, vector<int> &student_Marks, int n)
{
    for (int i = 0; i < n; i++)
    {
        if (stdname == student_Names[i])
        {
            cout << "student name : " << stdname << endl;
            cout << "Marks: " << student_Marks[i] << endl;
            return;
        }
    }
    cout << "Student not found." << endl;
}

void menu(string command, vector<string> &student_Names, vector<int> &student_Marks)
{
    if (command == "show")
    {
        showStudents(student_Names, student_Marks);
    }
    else if (command == "topper")
    {
        FindTopper(student_Names, student_Marks);
    }
    else if (command == "lowest")
    {
        LowestMarks(student_Names, student_Marks);
    }
    else if (command == "average")
    {
        AverageMarks(student_Marks);
    }
    else if (command == "search")
    {
        string stdname;
        cout << "Enter student name you want to search : ";
        cin >> stdname;
        SearchStudent(student_Names, stdname, student_Marks, student_Marks.size());
    }
    else if (command == "add")
    {
        string name;
        int marks;
        cout << "Enter student name : ";
        cin >> name;
        cout << "Enter student marks : ";
        cin >> marks;
        addStudent(student_Names, student_Marks, name, marks);
    }
    else
    {
        cout << "Invalid command" << endl;
        return;
    }
}
int main()
{
    int n;
    cout << "Enter number of students you want to add : ";
    cin >> n;
    vector<string> student_Names(n);
    vector<int> student_Marks(n);
    for (int i = 0; i < n; i++)
    {
        cout << "Enter student name : ";
        cin >> student_Names[i];
        cout << "Enter student marks : ";
        cin >> student_Marks[i];
    }

    string command;
    cout << "Enter your action what you want: THESE ARE THE COMMANDS : show, topper, lowest, average, search, add, exit" << endl;

    while (true)
    {
        cout << "Enter command: ";
        cin >> command;
        if (command == "exit")
        {
            cout << "Exiting the program." << endl;
            break;
        }
        menu(command, student_Names, student_Marks);
    }

    return 0;
}