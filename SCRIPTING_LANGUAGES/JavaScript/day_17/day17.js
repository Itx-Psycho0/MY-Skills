// Modern js development

// we have modules and 3rd party package by npm, then we compress it in bundle(join all the modules into one file), then transpiling/polyfilling(means converting es6 code in to older version like es5 etc so older browser understand it. ) using BABEL so all it called build process. then all it become js bundle called production it is done by parcel or webpack(these are dev tools those help to build our applications).

// Module:- Reusable piece of code that encapsulates implementation details;
//usually a standalone file, but it doesn't have to be.

import {cost} from "./shoppingCart.js"
import addToCart from "./shoppingCart.js"
// import * as ShoppingCart from "./shoppingCart.js"
// import {cost as ct} from "./shoppingCart.js"
console.log("Importing Module")
console.log(cost)
console.log(addToCart("bread",5))

// imports is not a copy of export its a live connection. 

// top level await :- using await without async but its only work on modules.

const res = await fetch()
const data = await res.json()
console.log(data)
// its blocking the entire execution. without async


//some commands line
// ls , dir showing the folders/files in the file/folder.

// cd change directory
// clear
// mkdir make directory
// touch , edit to make file

// rm, del to del the file
// mv filename locationToMove
//rmdir remove dir, -R(recurrsive)





