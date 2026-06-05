print("Hello, World!")


# Sum of n natural numbers
def sum_of_natural_numbers(n):
    return n * (n + 1) // 2

# example usage
n = 10
print(f"The sum of the first {n} natural numbers is: {sum_of_natural_numbers(n)}")


#Linear Search
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i  # Return the index of the target
    return -1  # Return -1 if the target is not found

# example usage
arr = [5, 3, 2, 8, 1]
target = 2
result = linear_search(arr, target)
if result != -1:
    print(f"Element {target} found at index: {result}")
else:    print(f"Element {target} not found in the array.") 