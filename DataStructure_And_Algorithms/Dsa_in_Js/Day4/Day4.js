//Day 4
// Data Structure:-
// A Ds is a specific way of organizing storing, and accessing data.

//Algorithms:-
// Is the step by step process to solving that problem.

// Big O notation:
// Big O notation helps  us understand how long an algorithm will take to run or how much memory it will need as the amount of data it handles grows.

//(O)n :- Signifies that the execution time of the algorithm grows lineaerly in proportion to the size of the input data(n).

//(O)1:- aka constant time, signifies that the execution time of an algorithm remains constant regardless of the input size.

//(O)n^2:- Indicates that the algorithm's execution time grows quadratically with the size of the input data(represented by n)

//(O)log n:- time complexity refers to an algorithm's runtime that grows logarithmically with the size of the input(represented by n). In simpler terms, as the input size increases, the time it takes for the algorithm to run increases slowly.


// Arrays
// Data Structure array is an ordered collection of elements that can accessed using a numerical index.

// Reverse String
// function reverseString(str){
//     rev= ""
//     for(let i=str.length-1;i>=0;i--){
//         rev+=str[i]
//     }
//     return rev

// }
function reverseString(str){
    return str.split("").reverse().join("")
}
console.log(reverseString("hello"))

//Palindrome
function palindrome(str){
    const rev = str.split("").reverse().join("")
    return str===rev
}
console.log(palindrome("racecar"))
console.log(palindrome("hello"))

//Palindrome int
function PalindromeInt(int){
    temp = int
    rev = 0
    while (temp>0){
        rev = rev*10 + temp%10
        temp = Math.floor(temp/10)
    }
    return rev === int
}
console.log(PalindromeInt(12321))
console.log(PalindromeInt(12345))

//Sentence Capitalization
function capitalize(str){
    const words = []
    for(let word of str.split(" ")){
        // console.log(word)
        words.push(word[0].toUpperCase() + word.slice(1))
        // console.log(words)
    }
    return words.join(" ")
}
console.log(capitalize("hello world"))

// FizzBuzz
function fizzBuzz(num){
    for(let i=1;i<=num;i++){
        if(i%3===0 && i%5===0){
            console.log("FizzBuzz")
        }else if(i%3===0){
            console.log("Fizz")
        }else if(i%5===0){
            console.log("Buzz")
        }else{
            console.log(i)
        }
    }
}
fizzBuzz(15)


//Max profit

function maxProfit(prices){
    let maxProfit = 0
    for(let i=0;i<prices.length;i++){
        for(let j=i+1;j<prices.length;j++){
            if(prices[j]-prices[i]>maxProfit){
                maxProfit = prices[j]-prices[i]
            }
        }
    }
    return maxProfit
}
console.log(maxProfit([7,1,5,3,6,4]))

//Array chunk
function chunk(arr,size){
    const chunked = []
    let i=0
    while(i<arr.length){
        chunked.push(arr.slice(i,i+size))
        i+=size
    }
    return chunked
}
console.log(chunk([1,2,3,4,5,6,7,8],3))

//Two sum
function twoSum(nums,target){
    const freq={}
    for(let i=0;i<nums.length;i++){
        const diff = target - nums[i]
        if(diff in freq){
            return [freq[diff],i]
        }
        freq[nums[i]] = i
    }
}
console.log(twoSum([2,7,11,15],9))


