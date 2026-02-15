package main

import (
	"fmt"
	"slices"
)

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
	for i:=range 3 {
		fmt.Println(i)
	}

	// if-else statement
	num := 10
	if num%2 == 0 {
		fmt.Println(num, "is even")
	} else {
		fmt.Println(num, "is odd")
	}

	if a := 5; a > 0 {
		fmt.Println(a, "is positive")
	} else {
		fmt.Println(a, "is negative")
	}
	fmt.Println(a)

	// ternary operator is not available in Go, use if-else instead
	// switch statement
	day := "Monday"
	switch day {
	case "Monday":
		fmt.Println("Start of the week")
	case "Friday":
		fmt.Println("End of the week")
	default:
		fmt.Println("Midweek")
	}
	
	// multiple condition switch
	switch {
	case day == "Monday" , day == "Tuesday":
		fmt.Println("Start of the week")
	case day == "Friday" , day == "Saturday":
		fmt.Println("End of the week")
	default:
		fmt.Println("Midweek")
	}

	//Type switch
	whoAmI := func(i interface{}) {
		switch t := i.(type) {
		case int:
			fmt.Println("I am an integer:", t)
		case string:
			fmt.Println("I am a string:", t)
		default:
			fmt.Println("Unknown type")
		}	
	}
	whoAmI(42)
	whoAmI("Hello")
	whoAmI(true)

	// arrays 
	var arr [5]int // fixed size array
	arr[0] = 1
	arr[1] = 2
	fmt.Println(arr)
	fmt.Println(len(arr))
	arr2 := [3]string{"Go", "Python", "Java"}
	fmt.Println(arr2)
	arr3 := [...]float64{3.14, 2.718, 1.618}
	fmt.Println(arr3)
	arr4 := [2][3]int{{1, 2, 3}, {4, 5, 6}}
	fmt.Println(arr4)

	// slices - dynamic size array
	slice := []int{1, 2, 3}
	fmt.Println(slice)
	fmt.Println(len(slice))
	fmt.Println(cap(slice))
	slice = append(slice, 4, 5)
	fmt.Println(slice)
	fmt.Println(len(slice))
	fmt.Println(cap(slice))
	slice2 := []int{6, 7, 8}
	slice = append(slice, slice2...)
	fmt.Println(slice)
	fmt.Println(len(slice))
	fmt.Println(cap(slice))

	//nil slice
	var nilSlice []int // this is a nil slice
	fmt.Println(nilSlice)
	fmt.Println(len(nilSlice))
	fmt.Println(cap(nilSlice))


	var s = make([]int, 5,10) // create slice with length 5 this is not nil slice
	fmt.Println(s)
	s = append(s, 1, 2, 3,4,5,6)
	fmt.Println(s)
	fmt.Println(len(s))
	fmt.Println(cap(s))

	//copy sliceCopy := make([]int, len(s))
	sliceCopy := make([]int, len(s))
	copy(sliceCopy, s)
	fmt.Println(sliceCopy)
	fmt.Println(len(sliceCopy))
	fmt.Println(cap(sliceCopy))

	// slice operator
	slice3 := s[2:7] // slice from index 2 to 6
	fmt.Println(slice3)
	slice4 := s[:5] // slice from start to index 4
	fmt.Println(slice4)
	slice5 := s[5:] // slice from index 5 to end
	fmt.Println(slice5)
	slice6 := s[:] // slice of entire slice
	fmt.Println(slice6)
	fmt.Println(s)

	// compare slices
	slice7 := []int{1, 2, 3}
	slice8 := []int{1, 2, 3}
	fmt.Println(slice7 == nil)
	fmt.Println(slices.Equal(slice7, slice8)) // use slices.Equal to compare slices

	// 2d slices
	matrix := [][]int{
		{1, 2, 3},
		{4, 5, 6},
		{7, 8, 9},
	}
	fmt.Println(matrix)
	fmt.Println(matrix[1][2])

	// maps - key-value pairs
	m := make(map[string]int)
	m["one"] = 1
	m["two"] = 2
	fmt.Println(m)
	fmt.Println(m["one"])
	fmt.Println(len(m))
	delete(m, "one")
	fmt.Println(m)
	_, ok := m["one"]
	fmt.Println(ok)
	_, ok = m["two"]
	fmt.Println(ok)


}