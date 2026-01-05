// Questions 

// 1. Print Natural numbers from 1 to N
function printNaturalNumebers(n){
    
    for(let i =1; i<=n; i++){
        console.log(i)
    }
}

// 2. Sum Up to N Terms
function sumUpToN(n) {
    result = 0
    for(let i =n; i >0; i--){
        result += i
    }
    return result
}

// 3. Factorial of a Number
function Factorial(n){
    res = 1
    for(let i = n; i>0; i--){
        res *= i
    }
    return res
}

// 4. Print All Factors of a number
function printFactors(n) {
    // Write your logic here
    res = ""
    for(let i=1; i<=n; i++){
        if (n%i===0){
            res += i + " "
        }
    }
    process.stdout.write(res)
}

// 5. Sum of Even and Odd Numbers in a Range
function sumEvenOdd(n){
    let evenSum = 0;
    let oddSum = 0;
    for(let i =1; i<=n; i++){
        if(i%2===0){
            evenSum += i
        } else {
            oddSum += i
        }
    }
    return [evenSum, oddSum]

}

// 6. Check Prime Number
function isPrime(n){
    if(n<=1){
        return false
    }
    for(let i =2; i*i<=n; i++){
        if(n%i===0){
            return false
        }
    }
    return true
}

// 7. calculatePower
function calculatePower(a,b){
    return Math.pow(a,b)
}

// 8. check strong number
function Factorial(num){
    let fact = 1;
    for(let i =1; i<=num; i++){
        fact *= i
    }
    return fact
}
function isStrongNumber(n){
    let sum = 0;
    let temp = n;
    while(temp>0){
        let digit = temp % 10;
        sum += Factorial(digit);
        temp = Math.floor(temp/10);
    }
    return sum === n? "Yes" : "No";
}