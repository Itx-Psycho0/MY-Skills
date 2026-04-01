package main

import (
	"fmt"
	"unicode/utf8"
)

func main() {
	fmt.Println("Hello, World!")

	// same line declaration
	averageOpenRate,displayMessage := .23,"is the average open rate of your messages"
	fmt.Println(averageOpenRate, displayMessage)

	//const
	const premiumPlanName = "Premium Plan"
	const basicPlanName = "Basic Plan"
	fmt.Println("plan:", premiumPlanName)
	fmt.Println("plan:", basicPlanName)

	//Constants must be known at compile time. They are usually declared with a static value:

const myInt = 15

//However, constants can be computed as long as the computation can happen at compile time.

//For example, this is valid:

const firstName = "Lane"
const lastName = "Wagner"
const fullName = firstName + " " + lastName

//That said, you cannot declare a constant that can only be computed at run-time like you can in JavaScript. This breaks:

// the current time can only be known when the program is running
//const currentTime = time.Now()

// formatting can be done with fmt.Sprintf, but it cannot be used in a constant declaration:

const name = "Saul Goodman"
const openRate = 30.5

	

	// don't edit above this line

msg := fmt.Sprintf("Hi %s, your open rate is %.1f percent\n",name,openRate)

// don't edit below this line

fmt.Print(msg)




const name1 = "psycho"
	fmt.Printf("constant 'name1' byte length: %d\n", len(name1))
	fmt.Printf("constant 'name1' rune length: %d\n", utf8.RuneCountInString(name1))
	fmt.Println("=====================================")
	fmt.Printf("Hi %s, so good to have you back in the arcanum\n", name)
	fmt.Println("=====================================")
const name2 = "🐻"
	fmt.Printf("constant 'name2' byte length: %d\n", len(name2))
	fmt.Printf("constant 'name2' rune length: %d\n", utf8.RuneCountInString(name2))
	fmt.Println("=====================================")
	fmt.Printf("Hi %s, so good to have you back in the arcanum\n", name)

//If you've got it right, you should notice that the emoji is only one rune, but it takes up 4 bytes.

// variables practice complete....
}