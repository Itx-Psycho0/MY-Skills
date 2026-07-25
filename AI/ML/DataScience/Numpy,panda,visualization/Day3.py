import pandas as pd
# import os

# print("Current Working Directory:", os.getcwd())
# print("Does file exist?", os.path.exists("../datasets/employees.csv"))
# Load the dataset
data = pd.read_csv('./datasets/employees.csv')

# # Display the summary statistics of the dataset
# print(data.info())

# # Missing values in the dataset
# print(data.isnull().sum())

# # Display the number of duplicate rows in the dataset
# print(data.duplicated().sum())

# # Display strange values in the dataset
# print(data.describe(include='all'))

# # Display Dataset
# print(data)

# # Display the unique values in the Department column
# print(data['Department'].unique())

# # Display the statistics summary
# print(data.describe())

# Display only employees with missing salary values
print(data[data['Salary'].isnull()]) 
# Output:    ID  Name   Age Department  Salary  Experience
#2   3  Amit  31.0      Sales     NaN         6.0

# Display only employees with missing age values
print(data[data['Age'].isnull()])
#    ID   Name  Age Department   Salary  Experience
# 1   2  Priya  NaN         HR  62000.0         5.0

# Display only employees with missing experience values
print(data[data['Experience'].isnull()])
#   ID    Name   Age Department   Salary  Experience
# 5   6  Anjali  24.0  Marketing  48000.0         NaN

# Display only Duplicate rows in the dataset
print(data[data.duplicated()])
# Empty DataFrame
# Columns: [ID, Name, Age, Department, Salary, Experience]
# Index: []

# Display only employees with negative age values
print(data[data['Age'] < 0])
#   ID   Name  Age Department   Salary  Experience
# 8   9  Karan -5.0    Finance  78000.0         8.0

# Display only employees with negative salary values
print(data[data['Salary'] < 0])
#Empty DataFrame
# Columns: [ID, Name, Age, Department, Salary, Experience]
# Index: []

# Display count of invalid age values (negative ages) in the dataset
print(len(data[data['Age'] < 0]))
# Output: 1

# Display count of missing values exist in entire dataset, not column by column
print(data.isnull().sum().sum())
# Output: 3