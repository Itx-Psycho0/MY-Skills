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