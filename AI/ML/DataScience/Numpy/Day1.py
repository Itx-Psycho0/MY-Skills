# Numpy 
# Numpy is a powerful library in Python for numerical computing. It provides support for large, multi-dimensional arrays and matrices, along with a collection of mathematical functions to operate on these arrays efficiently.

# Importing Numpy
import numpy as np

# what is it means numoy rvolvs around ndarrays
# Numpy revolves around the concept of ndarrays, which stands for "n-dimensional arrays". An ndarray is a homogeneous array of fixed-size items. It can have any number of dimensions, and it is designed to be efficient for numerical operations.

# Creating a Numpy Array
# You can create a Numpy array using the np.array() function. Here's an example:
# Creating a 1D array
arr1d = np.array([1, 2, 3, 4, 5])
print("1D Array:", arr1d)
print(type(arr1d))

print("========================================")

# four attributes of numpy array
# 1. shape - it gives the dimensions of the array
print("Shape of arr1d:", arr1d.shape)
# 2. size - it gives the total number of elements in the array
print("Size of arr1d:", arr1d.size)
# 3. dtype - it gives the data type of the elements in the array
print("Data type of arr1d:", arr1d.dtype)
# 4. ndim - it gives the number of dimensions of the array
print("Number of dimensions of arr1d:", arr1d.ndim)

print("========================================")

# Creating a 2D array
arr2d = np.array([[1, 2, 3], [4, 5, 6]])
print("2D Array:\n", arr2d)

# All zeros - commonly used to initialize weight matrices in machine learning models
zeros_array = np.zeros((3, 4))  # creates a 3x4 array filled with zeros
print("All zeros array:\n", zeros_array)

# All ones - often used to create bias vectors in machine learning models
ones_array = np.ones((2, 5))  # creates a 2x5 array filled with ones
print("All ones array:\n", ones_array)

# Identity matrix - used in linear algebra and machine learning for various operations
identity_matrix = np.eye(4)  # creates a 4x4 identity matrix
print("Identity matrix:\n", identity_matrix)

# specific value - useful for initializing arrays with a specific value, such as a learning rate or a threshold
specific_value_array = np.full((3, 3), 7)  # creates a 3x3 array filled with the value 7
print("Specific value array:\n", specific_value_array)

# Range of values - used to create arrays with a sequence of numbers, which can be useful for indexing or creating time steps in machine learning models
range_array = np.arange(0, 10, 2)  # creates an array with values from 0 to 10 (exclusive) with a step of 2
print("Range of values array:", range_array)

# Evenly spaced values - used to create arrays with a specified number of evenly spaced values between a start and end point, which can be useful for plotting or creating input data for machine learning models
evenly_spaced_array = np.linspace(0, 1, 5)  # creates an array with 5 evenly spaced values between 0 and 1
print("Evenly spaced values array:", evenly_spaced_array)

print("========================================")

# Random values - used to create arrays with random values, which can be useful for initializing weights in machine learning models or creating random input data
random_array = np.random.rand(3, 3)  # creates a 3x3 array filled with random values between 0 and 1
print("Random values array:\n", random_array)

random_int_array = np.random.randint(0, 10, (4, 4))  # creates a 4x4 array filled with random integers between 0 and 10
print("Random integer values array:\n", random_int_array)

random_normal_array = np.random.randn(2, 5)  # creates a 2x5 array filled with random values from a standard normal distribution
print("Random normal values array:\n", random_normal_array)

random_seed_array = np.random.seed(42)  # sets the random seed for reproducibility
random_seed_array = np.random.randn(2, 2)  # creates a 2x2 array filled with random values from a standard normal distribution
print("Random values array with seed:\n", random_seed_array)

print("========================================")

# indexing and slicing in numpy arrays
# Indexing - you can access individual elements of a Numpy array using indexing. The indexing starts from 0. Here's an example:
arr = np.array([10, 20, 30, 40, 50])
print("Element at index 0:", arr[0])  # Output: 10
print("Element at index 2:", arr[2])  # Output: 30
print("Element at index -1:", arr[-1])  # Output: 50 (negative indexing)

# Slicing - you can access a range of elements in a Numpy array using slicing. The syntax for slicing is arr[start:stop:step]. Here's an example:
print("Elements from index 1 to 3:", arr[1:4])  # Output: [20 30 40]
print("Elements from index 0 to 4 with a step of 2:", arr[0:5:2])  # Output: [10 30 50]
print("Elements from index 2 to the end:", arr[2:])  # Output: [30 40 50]
print("Elements from the start to index 3:", arr[:4])  # Output: [10 20 30 40]
print("Elements from index 1 to index -1:", arr[1:-1])  # Output: [20 30 40]

print("========================================")

# for 2d array
arr2d = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print("Element at row 0, column 1:", arr2d[0, 1])  # Output: 2
print("Element at row 2, column 0:", arr2d[2, 0])  # Output: 7
print("Elements from row 0 to 1 and column 1 to 2:", arr2d[0:2, 1:3])  # Output: [[2 3] [5 6]]
print("Elements from row 1 to the end and all columns:", arr2d[1:, :])  # Output: [[4 5 6] [7 8 9]]
print("Elements from the start to row 1 and all columns:", arr2d[:2, :])  # Output: [[1 2 3] [4 5 6]]
print("Elements from row 0 to row 2 and column 0 to column 1:", arr2d[0:3, 0:2])  # Output: [[1 2] [4 5] [7 8]]

print("========================================")

# Boolean indexing - you can use boolean indexing to filter elements in a Numpy array based on a condition. Here's an example:
arr = np.array([10, 20, 30, 40, 50])
# Get elements greater than 25
greater_than_25 = arr[arr > 25]
print("Elements greater than 25:", greater_than_25)  # Output: [30 40 50]
# Get elements less than or equal to 30
less_than_or_equal_to_30 = arr[arr <= 30]
print("Elements less than or equal to 30:", less_than_or_equal_to_30)  # Output: [10 20 30]
# Get elements that are even
even_elements = arr[arr % 2 == 0]
print("Even elements:", even_elements)  # Output: [10 20 30 40 50]
# Get elements that are odd
odd_elements = arr[arr % 2 != 0]
print("Odd elements:", odd_elements)  # Output: [] (no odd elements in this array)


# Operator for boolean indexing
# You can use logical operators to combine multiple conditions in boolean indexing. Here's an example:
arr = np.array([10, 20, 30, 40, 50])
# Get elements greater than 20 and less than 40
between_20_and_40 = arr[(arr > 20) & (arr < 40)]
print("Elements greater than 20 and less than 40:", between_20_and_40)  # Output: [30]
# Get elements less than 20 or greater than 40
less_than_20_or_greater_than_40 = arr[(arr < 20) | (arr > 40)]
print("Elements less than 20 or greater than 40:", less_than_20_or_greater_than_40)  # Output: [10 50]
# Get elements that are not equal to 30
not_equal_to_30 = arr[arr != 30]
print("Elements not equal to 30:", not_equal_to_30)  # Output: [10 20 40 50]

print("========================================")

# Shaping and Reshaping - you can change the shape of a Numpy array using the reshape() method. Here's an example:
arr = np.array([1, 2, 3, 4, 5, 6])
# Reshape to a 2D array with 2 rows and 3 columns
reshaped_arr = arr.reshape(2, 3)
print("Reshaped array (2 rows, 3 columns):\n", reshaped_arr)
# Reshape to a 3D array with 1 layer, 2 rows, and 3 columns
reshaped_arr_3d = arr.reshape(1, 2, 3)
print("Reshaped array (1 layer, 2 rows, 3 columns):\n", reshaped_arr_3d)
# Reshape to a 1D array (flatten the array)
flattened_arr = arr.reshape(-1)
print("Flattened array:", flattened_arr)
# Reshape to a 2D array with 3 rows and 2 columns
reshaped_arr_3_rows = arr.reshape(3, 2)
print("Reshaped array (3 rows, 2 columns):\n", reshaped_arr_3_rows)
# Reshape to a 2D array with 6 rows and 1 column
reshaped_arr_6_rows = arr.reshape(6, 1)
print("Reshaped array (6 rows, 1 column):\n", reshaped_arr_6_rows)  

# Flattening - you can flatten a Numpy array using the flatten() method. Here's an example:
arr2d = np.array([[1, 2, 3], [4, 5, 6]])
flattened_arr2d = arr2d.flatten()
print("Flattened 2D array:", flattened_arr2d)

# ravel() - you can also flatten a Numpy array using the ravel() method. Here's an example:
arr2d = np.array([[1, 2, 3], [4, 5, 6]])
raveled_arr2d = arr2d.ravel()
print("Raveled 2D array:", raveled_arr2d)

# difference between flatten and ravel
# The main difference between flatten() and ravel() is that flatten() returns a copy of the original array, while ravel() returns a view of the original array whenever possible. This means that if you modify the array returned by flatten(), it will not affect the original array, but if you modify the array returned by ravel(), it may affect the original array if it is a view. Here's an example to illustrate this difference:
arr2d = np.array([[1, 2, 3], [4, 5, 6]])
flattened_arr2d = arr2d.flatten()
raveled_arr2d = arr2d.ravel()
# Modify the flattened array
flattened_arr2d[0] = 10
print("Modified flattened array:", flattened_arr2d)  # Output: [10 2 3 4 5 6]
print("Original array after modifying flattened array:\n", arr2d)  # Output: [[1 2 3] [4 5 6]] (original array is unchanged)
# Modify the raveled array
raveled_arr2d[0] = 20
print("Modified raveled array:", raveled_arr2d)  # Output: [20 2 3 4 5 6]
print("Original array after modifying raveled array:\n", arr2d)  # Output: [[20 2 3] [4 5 6]] (original array is modified because ravel() returns a view)

# Transposing - you can transpose a Numpy array using the T attribute. Here's an example:
arr2d = np.array([[1, 2, 3], [4, 5, 6]])
transposed_arr2d = arr2d.T
print("Transposed 2D array:\n", transposed_arr2d)   
# Reshaping and transposing are often used in machine learning for preparing data for training models, such as changing the shape of input data to match the expected input shape of a model or transposing weight matrices for matrix multiplication during forward and backward passes in neural networks.

print("========================================")

# Adding and Removing Dimensions - you can add or remove dimensions from a Numpy array using the np.newaxis or np.expand_dims() function. Here's an example:
arr = np.array([1, 2, 3])
# Adding a new axis to create a 2D array with 1 row and 3 columns
new_axis_arr = arr[np.newaxis, :]
print("Array with new axis (1 row, 3 columns):\n", new_axis_arr)
# Adding a new axis to create a 2D array with 3 rows and 1 column
new_axis_arr_2 = arr[:, np.newaxis]
print("Array with new axis (3 rows, 1 column):\n", new_axis_arr_2)
# Removing a dimension using np.squeeze() - this will remove any dimensions of size 1
squeezed_arr = new_axis_arr.squeeze()
print("Squeezed array (removing dimensions of size 1):", squeezed_arr)  # Output: [1 2 3] (original array is restored)
# Removing a specific dimension using np.expand_dims() - this will add a new axis at the specified position
expanded_arr = np.expand_dims(arr, axis=0)  # Add a new axis at position 0 (creating a 2D array with 1 row and 3 columns)

# what the meaning of axis 0 is that it will add a new axis at the beginning of the array, resulting in a 2D array with 1 row and 3 columns. If you were to use axis=1, it would add a new axis at the end of the array, resulting in a 2D array with 3 rows and 1 column. The choice of axis depends on how you want to structure your data for further operations in machine learning models.

print("Expanded array (new axis at position 0):\n", expanded_arr)
expanded_arr_2 = np.expand_dims(arr, axis=1)  # Add a new axis at position 1 (creating a 2D array with 3 rows and 1 column)
print("Expanded array (new axis at position 1):\n", expanded_arr_2)

print("========================================")

# Vectorized Operations - Numpy allows you to perform operations on entire arrays without the need for explicit loops. This is known as vectorization and it can significantly improve the performance of your code. Here's an example:
arr1 = np.array([1, 2, 3])
arr2 = np.array([4, 5, 6])
# Element-wise addition
addition = arr1 + arr2
print("Element-wise addition:", addition)  # Output: [5 7 9]
# Element-wise multiplication
multiplication = arr1 * arr2    
print("Element-wise multiplication:", multiplication)  # Output: [4 10 18]
# Element-wise exponentiation
exponentiation = arr1 ** 2
print("Element-wise exponentiation:", exponentiation)  # Output: [1 4 9]
# Element-wise comparison
comparison = arr1 > 2
print("Element-wise comparison (arr1 > 2):", comparison)  # Output: [False False  True]
# Vectorized operations are commonly used in machine learning for performing mathematical operations on large datasets, such as calculating the dot product of weight matrices and input data during forward passes in neural networks, or applying activation functions to the outputs of layers in a vectorized manner for efficient computation.

print("========================================")

# Airthmetic Operations - Numpy provides a wide range of arithmetic operations that can be performed on arrays. Here's an example:
arr1 = np.array([1, 2, 3])
arr2 = np.array([4, 5, 6])
# Addition
addition = arr1 + 10
print("Addition (arr1 + 10):", addition)  # Output: [11 12 13]
# Subtraction
subtraction = arr1 - 1
print("Subtraction (arr1 - 1):", subtraction)  # Output: [0 1 2]
# Multiplication
multiplication = arr1 * 2
print("Multiplication (arr1 * 2):", multiplication)  # Output: [2 4 6]
# Division
division = arr1 / 2
print("Division (arr1 / 2):", division)  # Output: [0.5 1.  1.5]
# Modulo
modulo = arr1 % 2
print("Modulo (arr1 % 2):", modulo)  # Output: [1 0 1]
# Floor Division
floor_division = arr1 // 2
print("Floor Division (arr1 // 2):", floor_division)  # Output: [0 1 1]
# square root
sqrt = np.sqrt(arr1)
print("Square root of arr1:", sqrt)  # Output: [1. 1.41421356 1.73205081]
# exponential
exponential = np.exp(arr1)
print("Exponential of arr1:", exponential)  # Output: [ 2.71828183  7.3890561 20.08553692]
# logarithm
logarithm = np.log(arr1)
print("Logarithm of arr1:", logarithm)  # Output: [0.         0.69314718 1.09861229]    

# Arithmetic operations are fundamental in machine learning for performing calculations on data, such as scaling features, calculating loss functions, and updating model parameters during training. Vectorized arithmetic operations can significantly speed up these calculations, especially when working with large datasets and complex models.   

print("========================================")

# Aggregate Functions - Numpy provides a variety of aggregate functions that can be used to compute summary statistics on arrays. Here's an example:
arr = np.array([1, 2, 3, 4, 5])
# Sum
sum_arr = np.sum(arr)
print("Sum of arr:", sum_arr)  # Output: 15
print("Sum of arr along axis 0:", np.sum(arr, axis=0))  # Output: 15 (since it's a 1D array, the sum is the same)
 # * meaning of axis 0 is that it will sum all the elements in the array since it's a 1D array. If it were a 2D array, axis 0 would sum along the columns (i.e., sum each column), while axis 1 would sum along the rows (i.e., sum each row).

# Mean
mean_arr = np.mean(arr)
print("Mean of arr:", mean_arr)  # Output: 3.0
# Median
median_arr = np.median(arr)
print("Median of arr:", median_arr)  # Output: 3.0
# Standard Deviation
std_arr = np.std(arr)
print("Standard Deviation of arr:", std_arr)  # Output: 1.414213562373095
# Variance
var_arr = np.var(arr)
print("Variance of arr:", var_arr)  # Output: 2.0
# Minimum
min_arr = np.min(arr)
print("Minimum of arr:", min_arr)  # Output: 1
# Maximum
max_arr = np.max(arr)
print("Maximum of arr:", max_arr)  # Output: 5
# Percentile
percentile_arr = np.percentile(arr, 50)
print("50th percentile (median) of arr:", percentile_arr)  # Output: 3.0
# Unique values
unique_arr = np.unique(arr)
print("Unique values in arr:", unique_arr)  # Output: [1 2 3 4 5]
# argmin and argmax
argmin_arr = np.argmin(arr)
print("Index of minimum value in arr:", argmin_arr)  # Output: 0
argmax_arr = np.argmax(arr)
print("Index of maximum value in arr:", argmax_arr)  # Output: 4    

# Aggregate functions are commonly used in machine learning for summarizing data, such as calculating the mean and standard deviation of features for normalization, or calculating the sum of squared errors for loss functions in regression models. They can also be used for evaluating model performance, such as calculating the mean absolute error or mean squared error for regression tasks, or calculating the accuracy or F1 score for classification tasks.

# Broadcasting - Numpy allows you to perform operations on arrays of different shapes and sizes using a powerful mechanism called broadcasting. Here's an example:
arr1 = np.array([1, 2, 3])
arr2 = np.array([[4], [5], [6]])
# Broadcasting allows arr1 to be added to each row of arr2
broadcasted_addition = arr1 + arr2
print("Broadcasted addition:\n", broadcasted_addition)  # Output: [[5 6 7] [6 7 8] [7 8 9]]
# Broadcasting allows arr1 to be multiplied with each row of arr2
broadcasted_multiplication = arr1 * arr2
print("Broadcasted multiplication:\n", broadcasted_multiplication)  # Output: [[4 8 12] [5 10 15] [6 12 18]]
# Broadcasting is a powerful feature in Numpy that allows you to perform operations on arrays of different shapes and sizes without the need for explicit loops. It is commonly used in machine learning for performing element-wise operations on data, such as scaling features, applying activation functions, or calculating loss functions, while automatically handling the broadcasting of arrays to match their shapes for efficient computation.

print("========================================")

# Linear Algebra Operations - Numpy provides a variety of linear algebra operations that can be performed on arrays. Here's an example:
arr1 = np.array([[1, 2], [3, 4]])
arr2 = np.array([[5, 6], [7, 8]])
# Matrix multiplication
matrix_multiplication = np.dot(arr1, arr2)
print("Matrix multiplication:\n", matrix_multiplication)  # Output: [[19 22] [43 50]]
# Transpose
transpose_arr1 = arr1.T
print("Transpose of arr1:\n", transpose_arr1)  # Output: [[1 3] [2 4]]
# Inverse   
inverse_arr1 = np.linalg.inv(arr1)
print("Inverse of arr1:\n", inverse_arr1)  # Output: [[-2.   1. ] [ 1.5 -0.5]]
# Eigenvalues and Eigenvectors
eigenvalues, eigenvectors = np.linalg.eig(arr1)
print("Eigenvalues of arr1:", eigenvalues)  # Output: [-0.37228132  5.37228132]
print("Eigenvectors of arr1:\n", eigenvectors)  # Output: [[-0.82456484 -0.41597356] [ 0.56576746 -0.90937671]]
# Singular Value Decomposition
U, S, V = np.linalg.svd(arr1)
print("U matrix from SVD of arr1:\n", U)  # Output: [[-0.57604844 -0.81741556] [-0.81741556  0.57604844]]
print("Singular values from SVD of arr1:", S)  # Output: [5.4649857  0.36596619]    
print("V matrix from SVD of arr1:\n", V)  # Output: [[-0.57604844 -0.81741556] [-0.81741556  0.57604844]]

# three equalent ways to perform matrix multiplication
# 1. Using np.dot()
matrix_multiplication_dot = np.dot(arr1, arr2)
print("Matrix multiplication using np.dot():\n", matrix_multiplication_dot)  # Output: [[19 22] [43 50]]
# 2. Using the @ operator
matrix_multiplication_at = arr1 @ arr2
print("Matrix multiplication using @ operator:\n", matrix_multiplication_at)  # Output: [[19 22] [43 50]]
# 3. Using np.matmul()
matrix_multiplication_matmul = np.matmul(arr1, arr2)
print("Matrix multiplication using np.matmul():\n", matrix_multiplication_matmul)  # Output: [[19 22] [43 50]]

# Linear algebra operations are fundamental in machine learning for performing calculations on data, such as calculating the dot product of weight matrices and input data during forward passes in neural networks, or calculating the inverse of a matrix for solving linear equations in regression models. They are also used for dimensionality reduction techniques like Principal Component Analysis (PCA) and Singular Value Decomposition (SVD) for feature extraction and data compression.
