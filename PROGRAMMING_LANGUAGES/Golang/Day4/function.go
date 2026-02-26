package main

import "fmt"

func concat(s1 string, s2 string) string {
	return s1 + s2
}

// don't touch below this line

func main() {
	test("Lane,", " happy birthday!")
	test("Zuck,", " hope that Metaverse thing works out")
	test("Go", " is fantastic")
	getMonthlyPrice("basic")
}

func test(s1 string, s2 string) {
	fmt.Println(concat(s1, s2))
}
func getMonthlyPrice(tier string) int {
	switch tier {
	case "basic":
		return 10000
	case "premium":
		return 15000
	case "enterprise":
		return 50000
	default:
		return 0
	}
}

// Passing variable as value to function
func monthlyBillIncrease(costPerSend, numLastMonth, numThisMonth int) int {
	var lastMonthBill int = getBillForMonth( costPerSend, numLastMonth)
	var thisMonthBill int = getBillForMonth( costPerSend, numThisMonth)
	
	
	return thisMonthBill - lastMonthBill
}

func getBillForMonth( costPerSend, messagesSent int) int {
	return costPerSend * messagesSent
}

// Ignoring return value of function
func getProductMessage(tier string) string {
	quantityMsg, priceMsg, _ := getProductInfo(tier)
	return "You get " + quantityMsg + " for " + priceMsg + "."
}

func getProductInfo(tier string) (string, string, string) {
	if tier == "basic" {
		return "1,000 texts per month", "$30 per month", "most popular"
	} else if tier == "premium" {
		return "50,000 texts per month", "$60 per month", "best value"
	} else if tier == "enterprise" {
		return "unlimited texts per month", "$100 per month", "customizable"
	} else {
		return "", "", ""
	}
}


// Named return values
func yearsUntilEvents(age int) (yearsUntilAdult, yearsUntilDrinking, yearsUntilCarRental int) {
	yearsUntilAdult = 18 - age
	if yearsUntilAdult < 0 {
		yearsUntilAdult = 0
	}
	yearsUntilDrinking = 21 - age
	if yearsUntilDrinking < 0 {
		yearsUntilDrinking = 0
	}
	yearsUntilCarRental = 25 - age
	if yearsUntilCarRental < 0 {
		yearsUntilCarRental = 0
	}
	return
}
