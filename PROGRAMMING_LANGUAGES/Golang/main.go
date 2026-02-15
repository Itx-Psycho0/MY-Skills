package main

import "fmt"

func main(){
	fmt.Println("Hello, World!")
	// simple values - int, float, string, bool
	fmt.Println(1+1)

	var a int = 10
	var name = "Golang"
	b := 20 // type inference
	var c string // zero value is empty string
	fmt.Println(c,"empty string")
	c = "Go is awesome!"
	fmt.Println(c)
	fmt.Println(a, name, b)
	const pi = 3.14 // constant value
	fmt.Println(pi)
	const (
	e = 2.718
	g = 9.81	

	)
	fmt.Println(e, g)
	var x, y int = 5, 10
	fmt.Println(x, y)
	y,x = 5, 15 // redeclaration
	fmt.Println(x, y)
	y = 15 // reassignment
	fmt.Println(x, y)
	y = x // copy value
	fmt.Println(x, y)
	x = 20
	fmt.Println(x, y) // y remains unchanged

	// for loop -> only has for loop, no while or do-while
	for i := 0; i < 5; i++ {
		fmt.Println(i)
	}
	// as while loop
	j := 0
	for j < 5 {
		fmt.Println(j)
		if j == 2 {
			break // exit loop
		}
		j++
	}
	
}