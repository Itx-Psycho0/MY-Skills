// Questions
#include <iostream>
using namespace std;

void greet(){
    cout << "Hello World!" << endl;
}
void greetVar(string name, int age){

    cout << "Hello " << name << ", you are " << age << " years old!" << endl;
}
int add(int a, int b){
    return a+b;
}
int areaOfrectangle(int length, int width){

    cout << "Area of rectangle is: ";
    return length*width;
}
int swapValues(int a, int b){
    int temp = a;
    a=b;
    b=temp;
    cout << "After swapping: a = " << a << ", b = " << b << endl;
    return 0;
}

int convertToFahrenheit(int celsius){
    return (celsius * 9/5) + 32;
}

int simpleInterest(int p , int r, int t){
    return (p*r*t)/100;
}
int remainder(int a, int b){
    return a%b;
}
int postAndPreIncrement(int a){
    cout << "Post-increment: " << a++ << endl; // returns a, then increments
    cout << "Pre-increment: " << ++a << endl;  // increments a, then returns it
    return 0;
}


int main(){
    int age;
    cin >> age;
    string name;
    cin >> name;
    greet();
    greetVar(name, age);
    cout << add(5, 10) << endl;
    cout << areaOfrectangle(5, 10) << endl;
    swapValues(5, 10);
    cout << convertToFahrenheit(25) << endl;
    cout << simpleInterest(1000, 5, 2) << endl;
    cout << remainder(10, 3) << endl;
    postAndPreIncrement(5);

    return 0;

}

