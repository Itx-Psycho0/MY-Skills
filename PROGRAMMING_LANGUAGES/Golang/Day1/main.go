package main

import (
	"fmt"
	"maps"
	"slices"
	"sync"
	"time"
)

func main() {
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

	// map without make
	m2 := map[string]int{
		"one": 1,
		"two": 2,
	}
	fmt.Println(m2)
	fmt.Println(m2["one"])
	fmt.Println(len(m2))
	delete(m2, "one")
	fmt.Println(m2)

	fmt.Println(maps.Equal(m,m2))


	// range
	for key, value := range m2 {
		fmt.Println(key, value)
	}
	for _, value := range m2 {
		fmt.Println(value)
	}
	for key := range m2 {
		fmt.Println(key)
	}


	// functions
	add := func(a, b int) int {
		return a + b
	}
	fmt.Println(add(1, 2))

	getLanguages := func() (string, string, string) {
		return "Go", "Python", "Java"
	}
	fmt.Println(getLanguages())

	// variadic function
	sum := func(nums ...int) int {
		total := 0
		for _, num := range nums {
			total += num
		}
		return total
	}
	fmt.Println(sum(1, 2, 3))
	fmt.Println(sum(1, 2, 3, 4, 5))

	// closures
	counter := func() func() int {
		count := 0
		return func() int {
			count++
			return count
		}
	}
	increment := counter()
	fmt.Println(increment())
	fmt.Println(increment())
	fmt.Println(increment())
	fmt.Println(increment())

	// Pointers
	var p *int // pointer to int
	fmt.Println(p)
	var num2 int = 10
	p = &num2 // & operator to get address of num2
	fmt.Println(p)
	fmt.Println(*p)
	*p = 20
	fmt.Println(num2)


	// structs
	type Person struct {
		Name string
		Age  int
		createdAt time.Time
	}
	p1 := Person{Name: "Alice", Age: 30, createdAt: time.Now()}
	fmt.Println(p1)
	fmt.Println(p1.Name)
	fmt.Println(p1.Age)
	p1.Age = 31
	fmt.Println(p1.Age)
	p2 := Person{Name: "Bob"}
	fmt.Println(p2)
	fmt.Println(p2.Name)
	fmt.Println(p2.Age)
	
	// connect functions with structs
	type Employee struct {
		Person
		Position string
	}
	e1 := Employee{Person: Person{Name: "Charlie", Age: 25}, Position: "Developer"}
	fmt.Println(e1)
	fmt.Println(e1.Name)
	fmt.Println(e1.Age)
	fmt.Println(e1.Position)
	e1.Age = 26
	fmt.Println(e1.Age)

	changePosition := func(e *Employee, newPosition string) {
		e.Position = newPosition
	}
	changePosition(&e1, "Manager")
	fmt.Println(e1.Position)


	// also connect functions with structs using function literals
	// func(e *Employee)changePosition(position string) {
	// 	e.Position = "Intern"
	// }(e1)

	// constructors
	newPerson := func(name string, age int) Person {
		return Person{Name: name, Age: age, createdAt: time.Now()}
	}
	p3 := newPerson("David", 28)
	fmt.Println(p3)
	fmt.Println(p3.Name)
	fmt.Println(p3.Age)

	// struct without name
	language := struct {
		name string
		version float64
	}{
		name: "Go",
		version: 1.18,
	}
	fmt.Println(language)
	fmt.Println(language.name)
	fmt.Println(language.version)

	
	// struct embedding
	type Manager struct {
		Employee
		Department string
	}
	m1 := Manager{Employee: Employee{Person: Person{Name: "Eve", Age: 35}, Position: "Manager"}, Department: "HR"}
	fmt.Println(m1)
	fmt.Println(m1.Name)
	fmt.Println(m1.Age)
	fmt.Println(m1.Position)
	fmt.Println(m1.Department)
	m1.Age = 36
	fmt.Println(m1.Age)

	go printNumbers()	
	time.Sleep(1 * time.Second)
	wg.Add(1)
	go printNumbers2()
	wg.Wait()


	message := make(chan string) // create a channel
	// fmt.Println(<-message) // receive message from channel
	go processChan(message)
	message <- "Hello, Channel!" // send message to channel
	
	time.Sleep(time.Second*2)
}

// interfaces
type Shape interface {
	Area() float64
	Perimeter() float64
}

type Circle struct {
	Radius float64
}

func (c Circle) Area() float64 {
	return 3.14 * c.Radius * c.Radius
}

func (c Circle) Perimeter() float64 {
	return 2 * 3.14 * c.Radius
}

// enumerated types
type Day int
const (
	Monday Day = iota
	Tuesday
	Wednesday
	Thursday
	Friday
	Saturday
	Sunday
)

func (d Day) String() string {
	return [...]string{"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"}[d]
}

// Generics
func Max[T ordered](c, b T) T {
	if c > b {
		return c
	}
	return b
}

func Min[T integer](a, b T) T {
	if a < b {
		return a
	}
	return b
}

type integer interface {
	int | int8 | int16 | int32 | int64 | uint | uint8 | uint16 | uint32 | uint64 | uintptr | float32 | float64
}

type ordered interface {
	integer | string
}


// Goroutines 
func printNumbers() {
	for i := 1; i <= 5; i++ {
		fmt.Println(i)
	}
}
//go

// WaitGroups
var wg sync.WaitGroup
func printNumbers2() {
	for i := 1; i <= 5; i++ {
		fmt.Println(i)
	}
	defer wg.Done()
}

// Channels
func processChan(message chan string) {
	fmt.Println(<-message)
}

