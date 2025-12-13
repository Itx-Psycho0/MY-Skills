// --------------- Day 4 in C++ -------------

// Topic :- Operators 

// Unary , binar, ternary

// 1. Airthmatic Operators
// +, -, %, *, /

//-->
#include <iostream>
using namespace std;
int main(){
    int cups;
    double pricePerCup, total, DiscountedPrice;

    cout << "Enter the number of cups: ";
    cin >> cups;

    cout << "Enter the price per cup: ";
    cin >> pricePerCup;

    total = cups * pricePerCup;

     // no worry we will talk about if else in next day right now you just learn syntax of if..
    if(total> 100 ){

        DiscountedPrice = total-(total * 0.5);
        cout << "Discounted Price: " << DiscountedPrice;



    }else{
        cout << "Total Price: %d " << total;
    

    }
    return 0;
    

}

// 2. Assignment Operators
// =, +=, -=, *=, /=, %=

#include <iostream>
using namespace std;
int main(){
    int TeaBags;
    cout << "Enter Your Tea bag quantity: ";
    cin >> TeaBags;

    if(TeaBags < 10){
        cout << "Your Tea Bags are less than 10" << endl;
        cout << " SO i incrased by 5" << endl;
        TeaBags += 5;
        cout << "Your TeaBags Quatity now:" <<TeaBags;

    }else{
        cout << "Your Tea Bags" << TeaBags << endl;
    }
    return 0;
}


// 3. Comparison(Relational) Operators
// ==, !=, >, <, >=, <=


