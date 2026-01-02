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