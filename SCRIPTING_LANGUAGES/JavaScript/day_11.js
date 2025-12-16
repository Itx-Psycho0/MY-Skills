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




