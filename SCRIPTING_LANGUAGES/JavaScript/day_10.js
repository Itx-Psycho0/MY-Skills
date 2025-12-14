// -------------- Day 10 in js --------------

// Topic :- Sets and Maps

// What is a Set?
// A set is a collection of unique values. This means a set can never have any duplicates. That property makes them useful in certain situations.

const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);

const orderSet = new Set (['pizza','pasta','risotto']);
console.log(orderSet);
// Output : Set(3) {size: 3, pizza, pasta, risotto}
console.log(mySet);
// Output : Set(3) {size: 3, 1, 2, 3}

console.log(mySet.has(1));
// Output : true
console.log(mySet.has(4));
// Output : false
console.log(mySet.size);
// Output : 3

mySet.delete(2);
console.log(mySet);
//Output: Set(2) {1, 3}

// orderSet.clear();
// console.log(orderSet);
// // Output : Set(0) {size: 0}


// Iterating Over Sets
// Sets are iterables, so you can loop over them.

for (const order of orderSet) {
  console.log(order);
}

//Use Case: Removing Duplicates from Arrays
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
const staffSet = new Set(staff);
console.log(staffSet);
// Output :Set(3) {size: 3, waiter, chef, manager}

const staffUnique = [...staffSet];
console.log(staffUnique);
// Output : (3) ['waiter', 'chef', 'manager']


//-----------------------------

const italianFoods = new Set([
    'pasta',
    'gnocchi',
    'rigatoni',
    'rigatoni',
    'garlic',
    'tomatoes,'
])
const mexicanFoods = new Set([
    'tortillas',
    'beans',
    'rice',
    'garlic',
    'tomatoes,'
]);

// intersection
const commonFoods = italianFoods.intersection(mexicanFoods);
console.log(commonFoods);
// Output : Set(2) {size: 2, garlic, tomatoes,}

//Union
const allFoods = italianFoods.union(mexicanFoods);
console.log(allFoods);
// Output : Set(8) {size: 8, pasta, gnocchi, rigatoni, garlic, tomatoes,, …}

//Difference
const italianOnly = italianFoods.difference(mexicanFoods);
console.log(italianOnly);
// Output : Set(3) {size: 3, pasta, gnocchi, rigatoni}

//symmetric-difference
const notCommon = italianFoods.symmetricDifference(mexicanFoods);
console.log(notCommon);
// Output : Set(6) {size: 6, pasta, gnocchi, rigatoni, tortillas, beans, …}

//isdisjointfrom
const isDisjoint = italianFoods.isDisjointFrom(mexicanFoods);
console.log(isDisjoint);
// Output : false


//-------------------------------------------

//Maps
//A map is not the same thing that we use in real life to find our way around. In JavaScript, a map is a data structure that we can use to map values to keys. Just like an object, data is stored in key-value pairs in maps. The big difference between objects and maps is that in maps, the keys can have any type, and this can be huge. In objects, the keys are basically always strings, but in maps, we can have any type of key. It could even be objects, arrays, or other maps.

const restaurant = new Map();
//set method
restaurant.set('name', 'Classico Italiano');
restaurant.set(1, 'Firenze, Italy');
console.log(restaurant.set(2, 'Lisbon, Portugal'));

restaurant
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close',23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');
//get method
console.log(restaurant.get('name'));
console.log(restaurant.get(true));
console.log(restaurant.get(1));
console.log(restaurant);

 //has method

 console.log(restaurant.has('categories'));
 
 //delete method
 restaurant.delete(2);
 console.log(restaurant);
 
 //size method
 console.log(restaurant.size);

 //Outputs of above examples

//  Map(3) {size: 3, name => Classico Italiano, 1 => Firenze, Italy, 2 => Lisbon, Portugal}
// Classico Italiano
// We are open :D
// Firenze, Italy
// Map(8) {size: 8, name => Classico Italiano, 1 => Firenze, Italy, 2 => Lisbon, Portugal, categories => (4) ['Italian', …], open => 11, …}
// true
// Map(7) {size: 7, name => Classico Italiano, 1 => Firenze, Italy, categories => (4) ['Italian', …], open => 11, close => 23, …}
// 7


// -------------------------------------------

 // clear
//  restaurant.clear();
//  console.log(restaurant);
 //Output : Map(0) {size: 0}


restaurant.set([[1,2],'Test'])
console.log(restaurant);
console.log(restaurant.get([[1,2]]));
// Output :- undefined
const arr = [[1,2]]
restaurant.set(arr,"test")
console.log(restaurant.get(arr));
// Output :- test

 // differences b/w ds

//  Arrays vs Sets
// Both arrays and sets are used for simple lists of values without descriptions. Use arrays when:

// You need to store values in order.
// Values may contain duplicates.
// You need to manipulate data extensively, as arrays provide many useful methods.
// Use sets when:

// You require unique values only.
// High performance is important, as operations like searching or deleting items can be up to ten times faster than in arrays.
// A common use case for sets is removing duplicate values from an array. Sets complement arrays rather than replace them.

//------------------------------------------

// Objects vs Maps
// Objects and maps are used for key-value pairs. Objects have been the traditional choice because maps were introduced later (in ES6). However, using objects solely as key-value stores has some technical disadvantages.

// Maps are better suited for simple key-value stores because:

// They offer better performance.
// Keys can be of any data type.
// They are easy to iterate over.
// Computing the size of a map is straightforward.
// Objects are easier to write and access using dot or bracket notation, and most developers are familiar with them. Therefore, many continue to use objects for simple key-value stores.

// Use maps when:

// You need to map keys to values.
// Keys are not strings, which can be powerful in some cases.
// Use objects when:

// You need functions as values (methods), as objects support the this keyword to access properties within the same object, which maps do not.
// Working with JSON data, since JSON naturally maps to objects.
// Objects remain widely used, but maps are increasingly important and more versatile than sets.

//------------------------------------------





 