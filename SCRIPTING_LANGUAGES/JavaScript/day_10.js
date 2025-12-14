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