// Questions:

// 1. Compound Interest Calculation

function calculateCompoundInterest(principal, rate, time, n) {
    // A = P (1 + r/n)^(nt)
    const amount = principal * Math.pow((1 + rate / n), n * time);
    return Math.round((amount - principal) * 100) / 100; // Rounded to two decimal places
}

// 2. Area of Triangle using Heron's formula

function calculateTriangleArea(a, b, c) {
    const s = (a + b + c) / 2; // semi-perimeter
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return Math.round(area * 100) / 100; // Rounded to two decimal places
}

// 3. Calculate Circumference and Area of Circle

function calculateCircleMetrics(radius) {
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * Math.pow(radius, 2);
    return {
        circumference: Math.round(circumference * 100) / 100, // Rounded to two decimal places
        area: Math.round(area * 100) / 100 // Rounded to two decimal places
    };
}

// 4. Find the Largest of Three Numbers

function findLargestOfThree(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}

// 5. Check if a Number is Even or Odd

function isEvenOrOdd(number) {
    return (number % 2 === 0) ? "Even" : "Odd";
}

// 6. Check if user is Eligible to Vote

function isEligibleToVote(age) {
    return (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
}

// 7. Check if a Year is a Leap Year

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// 8. Calculate Final Amount after Discount

function calculateFinalAmount(originalPrice, discountPercentage) {
    const discountAmount = (originalPrice * discountPercentage) / 100;
    const finalAmount = originalPrice - discountAmount;
    return Math.round(finalAmount * 100) / 100; // Rounded to two decimal places
}

// 9. Calculate Electricity Bill Based on Units Consumed

function calculateElectricityBill(units) {
    let billAmount = 0;

    if (units <= 50) {
        billAmount = units * 0.5;
    } else if (units <= 100) {
        billAmount = 25 + (units - 50) * 0.75;
    } else if (units <= 200) {
        billAmount = 62.5 + (units - 100) * 1.2;
    } else {
        billAmount = 182.5 + (units - 200) * 1.5;
    }

    return Math.round(billAmount * 100) / 100; // Rounded to two decimal places
}

// 10. Find the greatest among three numbers using Ternary Operator

function findGreatestUsingTernary(num1, num2, num3) {
    return (num1 >= num2 && num1 >= num3) ? num1 :
           (num2 >= num1 && num2 >= num3) ? num2 : num3;
}