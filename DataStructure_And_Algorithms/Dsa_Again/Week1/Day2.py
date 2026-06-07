# mathematics questions

# 1. Count Digit 
def count_digit(n):
    count = 0 
    while n>0:
        n//=10
        count+=1
    return count
# example usage
n = 12345
print(f"The number of digits in {n} is: {count_digit(n)}")

# 2. Palindrome Number
def is_palindrome(n):
    temp = n
    res = 0
    while temp > 0:
        digit = temp%10
        res = res*10+digit
        temp//=10
    return res == n

# example usage
n=8668
print(f"{n} is Palindrome -> {is_palindrome(n)}")

# 3. Factorial of a Number

def factorial(n):
    res = 1
    for i in range(2,n+1):
        res *=i
    return res

# example usage
n=5
print(f"Factorial of {n} is: {factorial(n)}")


# 4. Trailing Zeros in Factorial
def trailing_zeros_in_factorial(n):
    fact = factorial(n)
    count = 0
    while fact % 10 == 0:
        count += 1
        fact //= 10
    return count

# example usage
n = 100
print(f"The number of trailing zeros in {n}! is: {trailing_zeros_in_factorial(n)}")

# second method to count trailing zeros in factorial
# so i learn that trailing zeros in factorial is count of 5 in the prime factorization of n! because 2*5 = 10 and there are usually more 2s than 5s in a factorial
def count_trailing_zeros(n):
    count = 0
    while n>0:
        n//=5
        count+=n
    return count

# example usage
n = 100
print(f"The number of trailing zeros in {n}! is: {count_trailing_zeros(n)}")

# 5. GCD
def gcd(a,b):
    res = min(a,b)
    while res>0:
        if a%res == 0 and b%res == 0:
                return res
        res-=1

# example usage
a = 48
b = 18
print(f"The GCD of {a} and {b} is: {gcd(a,b)}")

# by second method - Euclidean Algorithm
def gcd_euclidean(a,b):
    while b:
        a, b = b, a % b
    return a

# example usage
a = 48
b = 18
print(f"The GCD of {a} and {b} by second method is: {gcd_euclidean(a,b)}")

# 6. LCM
def lcm(a,b):
    return (a*b)//gcd_euclidean(a,b)

# example usage
a = 48
b = 18
print(f"The LCM of {a} and {b} is: {lcm(a,b)}")

# second method to calculate LCM
def lcm_second_method(a,b):
    res = max(a,b)
    while True:
        if res%a == 0 and res%b == 0:
            return res
        res+=1

# example usage
a = 48
b = 18
print(f"The LCM of {a} and {b} by second method is: {lcm_second_method(a,b)}")

# 7  . prime number
def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

# second way
def is_prime_second_method(n):
    if n <= 1:
        return False
    if n <= 3:
        return True
    if n % 2 == 0 or n % 3 == 0:
        return False
    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return False
        i += 6
    return True

# 8. prime factors of a number

# first method - by trial division
def prime_factors(n):
    factors = []
    for i in range(2, int(n**0.5) + 1):
        while n % i == 0:
            factors.append(i)
            n //= i
    if n > 1:
        factors.append(n)
    return factors

# example usage
n = 60
print(f"The prime factors of {n} are: {prime_factors(n)}")

# second method - naive method
def prime_factors_naive(n):
    factors=[]
    for i in range(2,n+1):
        if n%i == 0 and is_prime(i):
            factors.append(i)
    return factors

# example usage
n = 60
print(f"The prime factors of {n} by second method are: {prime_factors_naive(n)}")
