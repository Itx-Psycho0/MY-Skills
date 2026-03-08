#Revise for exam 

# Using the two-pointer approach, check whether a given string is a palindrome or not.
def is_palindrome(s):
    left, right = 0, len(s) - 1
    while left < right:
        if s[left] != s[right]:
            return False
        left += 1
        right -= 1
    return True

#Move Zeros to end of array
def move_zeros(arr):
    i=0
    for j in range(len(arr)):
        if arr[j] != 0:
            arr[i], arr[j] = arr[j], arr[i]
            i += 1
    return arr

# Remove duplicates from sorted array
def remove_duplicates(arr):
    if not arr:
        return 0
    i = 1
    for j in range(1, len(arr)):
        if arr[j]!= arr[j-1]:
            arr[i] = arr[j]
            i += 1
    return arr


# Maximum sum of subarray of size k
def max_sum_subarray(arr, k):
    max_sum = float('-inf')
    window_sum = sum(arr[:k])
    for i in range(k, len(arr)):
        window_sum += arr[i] - arr[i-k]
        max_sum = max(max_sum, window_sum)
    return max_sum


