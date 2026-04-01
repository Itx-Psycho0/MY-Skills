#include <iostream>
using namespace std;



string check_Palindrome(string s, int left, int right){
    if(left>=right){
        return "Palindrome";
    }
    if(s[left]!=s[right]){
        return "Not Palindrome";
    }
    return check_Palindrome(s, left+1, right-1);

}

int sumOfDigits(int n){
    if(n<=9){
        return n;
    }
    return (n%10 + sumOfDigits(n/10));
}

int ropeCutting(int n, int a, int b, int c){
    if(n==0){
        return 1;
    }
    if(n<0){
        return 0;
    }
    return ropeCutting(n-a,a,b,c) + ropeCutting(n-b,a,b,c) + ropeCutting(n-c,a,b,c);
}

void TOH(int n, char src, char dest, char helper){
    if(n==0){
        return;
    }
    TOH(n-1, src, helper, dest);
    cout << "Move " << n << " from " << src << " to " << dest << "\n";
    TOH(n-1, helper, dest, src);
}

int main() {
    cout << "Hello, Recursion!" << endl;
    string s = "madam";
    cout << check_Palindrome(s, 0, s.length()-1) << "\n";
    cout << sumOfDigits(12345) << "\n";
    int ans = ropeCutting(5, 6, 4, 2);
    if (ans == 0){
        cout << -1 << "\n";
    }
    else{
        cout << ans << "\n";
    }
    TOH(3, 'A', 'C', 'B');
    
    return 0;
}