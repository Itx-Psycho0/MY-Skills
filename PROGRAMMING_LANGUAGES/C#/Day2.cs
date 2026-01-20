// Day 2

// Datatypes
int age = 2; // - 4 bytes 
float age = 2.2f; // - 4 bytes
double age = 2.2; // - 8 bytes
decimal age = 2.2; // - 16 bytes

string name = "Psycho";
Console.WriteLine($"Hello {name}");

char ch = "a";

bool isPlayer = false;

// if we use var with variable without assign datatype it will assign automatically to them
var myVar = 12;
Console.WriteLine(myVar);

// type conversion
// so there also a corecion
//like
Console.WriteLine("num"+5+6); // Output = number 56
// implicit
float y = 2.0f;
int x = (int)y;
//Convert.ToInt32()
Console.WriteLine(x); // Output = 2

// conditions
if (condition)
{
    //code block
}else if (condition)
{
    //code block
}
else
{
    //code block
}

// switch case
switch (expression)
{
    case value1: 
            // code block

        break;
    case value2:
        break;
    default:
        break;
}

// && , ||

// functions
// these are blocks of code that allow you to run the same logic wihtout copy pasted code

// static fn in class are main fns

// void fn
void Fn1(string param)
{
    // this fn doesn't return anything
    Console.WriteLine(param);
}
Fn1("hello");
int Addnum(int num1, int num2)
{
    return num1 + num2;
}
// this fn return 
Console.WriteLine(Addnum(2,3));

int Addnum(int num1, int num2, int num3)
{
    return num1 + num2 + num3;
}

Console.WriteLine(Addnum(2,3,4));
// if we change params then it make another variation of that fn.

bool IsPos(int num)
{
    if (num > 0)
    {
        return true;
    }
}
Console.WriteLine(IsPos(2));

// if we pass any var as param in fn and want to update in fn then its update copy of it not the original one, but if there is reference type , then they will be update the original one.







