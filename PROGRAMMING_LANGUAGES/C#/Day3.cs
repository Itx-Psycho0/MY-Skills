// Day 3
//scope
int main()
{
    Console.WriteLine("scope");
}
main();

//Comments - two types - // & /**/

//Arrays and list - store multiple items
int[] arr = new int[5];
Console.WriteLine(arr.Length);
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 4;
arr[4] = 5;
Console.WriteLine(arr[0]);
Console.WriteLine(arr[1]);
Console.WriteLine(arr[2]);
Console.WriteLine(arr[3]);
Console.WriteLine(arr[4]);

//List
//list doesn't have fixed size
List<int> list = new List<int>();
list.Add(1);
list.Add(2);
list.Add(3);
list.Add(4);
list.Add(5);
list.Remove(2);
list.Insert(0,10);
list.Clear();
Console.WriteLine(list.Count);
Console.WriteLine(list[0]);
Console.WriteLine(list[1]);
Console.WriteLine(list[2]);
Console.WriteLine(list[3]);
Console.WriteLine(list[4]);


// Loops
// while
while (condition)
{
    //code block
}
// for
for (int i = 0; i < 10; i++)
{
    //code block
}
// do while
do 
{
    //code block
}while (condition);

// forEach
foreach(int i in arr)
{
    Console.WriteLine(i);
}

//Class - The core of any obj oriented programming language, how to deifne your own types
Person player = new Person();
Console.WriteLine(player.GetHashCode());

class Person
{
    public string name = "Psycho";
    //Constructor fn
    public Person(string name)
    {
        Person.name = name;
        Console.WriteLine("Constructor");
    
    }
    public static string name = "Psycho";
    //Static fn
    public static void sayHello()
    {
        Console.WriteLine("Hello"+name);
    }
    
}

//Static - Define whether something belongs to the class itself or an instance of that class

static class p1
{
    //Everything will be static in it.
}