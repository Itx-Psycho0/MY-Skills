//---------- Day 11 in js -----------------
//-----More about Array ----------

// Some array method
const arr = [1,2,3,4,5]
//slice
const arrSliced = arr.slice(1,3)
console.log(arr)
console.log(arrSliced) // [2, 3]

//splice
const arrSpliced = arr.splice(1,3)
console.log(arr) //[1, 5]
console.log(arrSpliced) // [2, 3, 4]

// reverse
const arrReversed = arr.reverse()
console.log(arrReversed) //[5, 1]
console.log(arr) //[5, 1]

const arr2 = [2,3,4]
//concat
const arrConcat = arr.concat(arr2)
console.log(arrConcat) //[5,1,2,3,4]
console.log(arr) //[5,1]

//join
const arrJoined = arr.join('-')
console.log(arrJoined) //5-1

//pop,shift,unshift,indexof, includes already know

// at 
console.log(arr.at(1)) //1

//------------------------------

const movement = [200,450,-400,3000,-650,-130,70,1300]

//forEach method --------------
movement.forEach(function(mov,i,arr){
    if(mov > 0){
        console.log(`Movement ${i+1}: You deposited ${mov}`)
    }else{
        console.log(`Movement ${i+1}: You withdraw ${Math.abs(mov)}`)
    }
})

// map, filter, reduce

const calcAvgages = ages => 
    {ages
    .map((age) => {(age <= 2 ? 2 * age : 16 + age*4) })
    .filter((age) =>{ age >= 18
    })
    .reduce((acc,age,i,arr) => acc + age/arr.length,0)
}


const avg1 = calcAvgages([5,2,4,1,15,8,3])
console.log(avg1)

// find method
const firstWithdrawal = movement.find(mov => mov < 0)
console.log(firstWithdrawal)

// findIndex Method
const firstWithdrawalIndex = movement.findIndex(mov => mov < 0)
console.log(firstWithdrawalIndex)

// findLast Method
const lastWithdrawal = movement.findLast(mov => mov < 0)
console.log(lastWithdrawal)

// findlastIndex Method
const lastWithdrawalIndex = movement.findLastIndex(mov => mov < 0)
console.log(lastWithdrawalIndex)

// some and every Method

console.log(movement.some(mov => mov === -130)) //true
console.log(movement.every(mov => mov > 0)) //false

// flat and flatMap method
const arrDeep = [[[1,2],[3]],[4,[5,6]],7,8]
console.log(arrDeep.flatMap(2)) //[1,2,3,4,5,6,7,8]
const arrflat = [[1,2,3],[4,5,6],[7,8]]
console.log(arrflat.flat()) //[1,2,3,4,5,6,7,8]


// Sorting Arrays
// String
const owners = ['Jonas','Zach','Adam','Martha']
console.log(owners.sort()) //
console.log(owners) //['Adam', 'Jonas', 'Martha', 'Zach]

// Numbers

let movements = [200,450,-400,3000,-650,-130,70,1300]
console.log(movements) //
// console.log(movements.sort()) // [-130,-400,-650,1300,200,3000,450,70]
movements.sort((a,b) => a-b)
console.log(movements) // [-650,-400,-130,70,200,450,1300,3000]
movements.sort((a,b) => b-a)
console.log(movements) // 


// Array Grouping
const groupedMovements = Object.groupBy(movements, movement => movement > 0 ? 'deposits' : 'withdrawals')
console.log(groupedMovements) //[Object: null prototype] {
//   deposits: [ 200, 450, 3000, 70, 1300 ],
//   withdrawals: [ -400, -650, -130 ]
// }



// ## Using the Array Constructor with a Single Argument

// When using the `Array` constructor with a single argument, such as `new Array(7)`, it creates a new array with seven empty elements, not an array with the number seven as its only element. This behavior can lead to unexpected results if not understood.
const x = new Array(7);


// The `fill()` method can also accept start and end indices, similar to the `slice()` method. The filling starts at the `begin` index and ends before the `end` index.

x.fill(1, 3, 5); // Fills indices 3 and 4 with 1

// The `fill()` method can be used on any array, not just empty arrays.

const arrFill = [1, 2, 3, 4, 5, 6, 7]; arrFill.fill(23, 4, 6); // Fills indices 4 and 5 with 23


// Non-Destructive Alternatives: toReversed, toSorted, toSpliced, with

console.log(movements);
const reversedMov = movements.toReversed();
console.log(reversedMov);

// toSorted (sort), toSpliced (splice)

// movements[1] = 2000;
const newMovements = movements.with(1, 2000);
console.log(newMovements);

console.log(movements);


//---------------------- Day 11 ends here --------------------
