// Structs
package main

// Structs in Go
// We use structs in Go to represent structured data. It's often convenient to group different types of variables together. For example, if we want to represent a car we could do the following:

// type car struct {
// 	brand      string
// 	model      string
// 	doors      int
// 	mileage    int
// }

// This creates a new struct type called car. All cars have a brand, model, doors and mileage.

// Structs in Go are often used to represent data that you might use a dictionary or object for in other languages.

type messageTSend struct{
	phoneNumber int
	message string
}


//===================================================================

// Nested Structs in Go
// Structs can be nested to represent more complex entities:

type car struct {
  brand string
  model string
  doors int
  mileage int
  frontWheel wheel
  backWheel wheel
}

type wheel struct {
  radius int
  material string
}

// The fields of a struct can be accessed using the dot . operator.

// myCar := car{}
// myCar.frontWheel.radius = 5


type messageToSend struct {
	message   string
	sender    user
	recipient user
}

type user struct {
	name   string 
	number int
}


func canSendMessage(mToSend messageToSend) bool {
	if mToSend.sender.number > 0 && mToSend.recipient.number > 0 && mToSend.sender.name != "" && mToSend.recipient.name != "" {
	return true
	}
	return false

}

