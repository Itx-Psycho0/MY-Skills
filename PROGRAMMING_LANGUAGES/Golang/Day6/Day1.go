package main

import "fmt"

func main() {
	var Employee_name string
	var Employee_salary float64
	var Employee_Department string

	Employee_name = "John Doe"
	Employee_id := 12345
	Employee_salary = 50000.50
	Employee_Department = "IT"

	fmt.Println("Employee Name:", Employee_name)
	fmt.Println("Employee ID:", Employee_id)
	fmt.Println("Employee Salary:", Employee_salary)
	fmt.Println("Employee Department:", Employee_Department)

	fmt.Println("Perimeter:", perimeter(2.0, 3.0))
	fmt.Println("Area:", area(2.0, 3.0))

	// Calculate three var to store the prices of the products
	var product1Price float64 = 10.99
	var product2Price float64 = 5.49
	var product3Price float64 = 7.99

	// Calculate the total price of the products
	totalPrice := product1Price + product2Price + product3Price

	// Print the total price
	fmt.Printf("Total Price: $%.2f\n", totalPrice)

	// calculate the gst (18%) of the total price
	gst := totalPrice * 0.18

	// Calculate the final price to be paid
	finalPrice := totalPrice + gst

	// Print the final price
	fmt.Printf("Final Price (including GST): $%.2f\n", finalPrice)

	// Create a var to store the basic salary
	var basicSalary float64 = 50000.00

	// Calculate the HRA (20% of basic salary)
	hra := basicSalary * 0.20

	// Calculate the DA (10% of basic salary)
	da := basicSalary * 0.10

	fmt.Println(hra, da)

	var studentName string
	var totalMarksOffiveSubjects float64
	var percentage float64

	fmt.Scan(&studentName)
	fmt.Scan(&totalMarksOffiveSubjects)
	fmt.Scan(&percentage)

	fmt.Println("Student Name:", studentName)
	fmt.Println("Total Marks:", totalMarksOffiveSubjects)
	fmt.Println("Percentage:", percentage)

}

func perimeter(length, width float64) float64 {
	return 2 * (length + width)
}

func area(length, width float64) float64 {
	return length * width
}
