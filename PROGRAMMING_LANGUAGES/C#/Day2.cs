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



