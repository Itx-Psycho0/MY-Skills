import pandas as pd
# import os

# print("Current Working Directory:", os.getcwd())
# print("Does file exist?", os.path.exists("../datasets/employees.csv"))
# Load the dataset
data = pd.read_csv('./datasets/employees.csv')


# Display the first few rows of the dataset
# print(data.head())

# Display the last few rows of the dataset
# print(data.tail(5))

# Display the shape of the dataset
# print(f"Dataset shape: {data.shape}")

# Display the column names of the dataset
# print(f"Column names: {data.columns.to_list()}")

# Display the data types of each column
# print(f"Data types:\n{data.dtypes}")

# # Display the null values in the dataset
# print(f"Null values:\n{data.isnull().sum()}")

# # Display the number of entries
print(f"Number of entries: {len(data)}")

# # Display the summary statistics of the dataset
# print(f"Summary statistics:\n{data.describe(include='all')}")

# # Display datatype of each column
print(f"Data types of each column:\n{data['ID'].dtypes}")


# Display only the name column
print(f"Name Column:\n{data['Name']}")

# Display only the department column
print(f"Department Column:\n {data['Department']}")

# Display only the name and salary columns
print(f"Name and Salary Column:\n {data[['Name', 'Salary']]}")

# Display only the employees in the IT department
print(f"IT Department Employees:\n {data[data['Department'] == 'IT']}")

# Display only the employees with salary greater than 60000
print(f"Employees with Salary > 60000:\n {data[data['Salary'] > 60000]}")

# Display only the employees with age greater than 30
print(f"Employees with Age > 30:\n {data[data['Age'] > 30]}")

# Display only the employees with more than 5 years of experience
print(f"Employees with more than 5 years of experience:\n {data[data['Experience'] > 5]}")

# Display only the employees with salary greater than 60000 and in the IT department
print(f"Employees with Salary > 60000 and in IT Department:\n {data[(data['Salary'] > 60000) & (data['Department'].isin(['IT']))]}")

# Display only the employees in the Finance and HR departments
print(f"Employees in Finance and HR Departments:\n {data[data['Department'].isin(['Finance', 'HR'])]}")

# Display the employees between the ages of 25 and 30 (inclusive)
print(f"Employees between ages 25 and 30:\n {data[(data['Age'] >= 25) & (data['Age'] <= 30)]}")

# Sort the salaraies from lowest to highest
print(f"Sorted Salaries (Lowest to Highest):\n {data.sort_values(by='Salary')}")

# Sort the salaries from highest to lowest
print(f"Sorted Salaries (Highest to Lowest):\n {data.sort_values(by='Salary', ascending=False)}")

# Sort by Department and then by Salary (both in ascending order)
print(f"Sorted by Department and Salary:\n {data.sort_values(by=['Department', 'Salary'])}")

# Display who earn the highest salary
print(f"Employee with the highest salary:\n {data[data['Salary'] == data['Salary'].max()]}")

# Display who is the youngest employee
print(f"Youngest Employee:\n {data[data['Age'] == data['Age'].min()]}")

# Display which department has the most employees
print(f"Department with the most employees:\n {data['Department'].value_counts().idxmax()}")


