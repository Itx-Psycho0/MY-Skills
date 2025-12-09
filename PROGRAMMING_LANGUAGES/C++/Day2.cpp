// --- Day 2 in C++ ----

// Anatomy of c++
/*So in C++ we use main function a program that given to operating system that converted in to exe

.exe is execute by system not .cpp


--> What is mean of #include --> so its mean is pre processor directors , so we say like that we have include pre processor directors 

--> <iostream> = where a c++ code written . its control input,output stream

--> using namespaces Std:- so its like a container which have also iostream and other method thing etc, we also make our namespace , (like namespace myName;) and put any method in it aur any source code.

we can call namespaces in multiple way:-

1. using namespaces std;
-----------------------------------------------------------------------------
2. int main(){
    --> std :: cout << "Hello" << std::endl;

}
--------------------------------------------------------------------------------
3. using std::Cout
then main method
*/

// Main method
#include <iostream>
using namespace std;
int main(){
    cout << "Hi MySelf Psycho" << endl;// << pass on the value. like in cout // endl is for end line
    return 0;// its define the code value where we get "Hi MySelf Psycho" as you can see in output --> code=0 if we retrun 10 then it we shoe code=10 but for best practice and define code works we use return 0

}

// Variables:
//A container that stores data 
int score;


//Identifiers
//Its nothing just tell about the name of the variable those can we good not language keyword

//Const keyword
//is same as javascript, after intialize we cant reassign.