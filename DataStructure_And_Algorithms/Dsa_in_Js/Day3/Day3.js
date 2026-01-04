// Day 3 in js dsa

// Topic :- Loops

// For
for(let i =1; i<10;i++){
    console.log(i);
}
console.log("For loop ended");

// While
let j =1;
while(j<10){
    console.log(j);
    j++;
}
console.log("While loop ended");
// Do While
let k =1;
do{
    console.log(k);
    k++;
}while(k<10);
console.log("Do While loop ended");

// For in loop
let obj = {
    name: "John",
    age: 30,
    city: "New York"
  };
for(let key in obj){
    console.log(key + ": " + obj[key]);
}
console.log("For in loop ended");

// For of loop
let arr = [10,20,30,40,50];
for(let value of arr){
    console.log(value);
}
console.log("For of loop ended");

// Nested loops
for(let a =1; a<=3; a++){
    for(let b =1; b<=3; b++){
        console.log("a: " + a + ", b: " + b);
    }
}
console.log("Nested loops ended");

// Break and Continue
for(let c =1; c<=10; c++){
    if(c === 5){
        console.log("Breaking the loop at c = " + c);
        break;
    }
    console.log(c);
}
console.log("Break statement ended");

for(let d =1; d<=10; d++){
    if(d === 5){
        console.log("Continuing the loop at d = " + d);
        continue;
    }
    console.log(d);
}
console.log("Continue statement ended");
// End of Day 3