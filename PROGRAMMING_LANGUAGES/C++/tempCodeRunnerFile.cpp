int decimalToBinary(int n){
    int binary = 0;
    int power = 1;
    while(n>0){
        int rem = n%2;
        binary += rem*power;
        power *= 10;
        n /=2;
    }
    return binary;
}