// primitive data type. 
// String, Boolean, Number
// Used as a single value.

// Data STRUCTURES

// ARRAYS
const drink1 = "coffee";
const drink2 = "tea";
const drink3 = "Water";
const drink4 = "milk";

// instead of that garbage, we can create an array!

let drinks = ["coffee", "tea", "water", "milk"];
Array.isArray(drinks)
const drinks3 = new Array() // NO ONE used this method...
console.log(typeof(drinks)); // this will return 'Object', because technically it is.
console.log(Array.isArray(drinks)); // To test if something is an array or not!



// push and pop!
// push and pop!
// push and pop!

// .push() will always add to the back of an array!
            // unshift() will add to the front... be careful!
            // "Easy to remember if you mentally drop the "f" in shift / unshift: shift removes elements and unshift adds them 🙂 "

drinks.push("Cola");
console.log(drinks);

// .pop() will remove the item at the back of the array.

// how to use pop to remove all...?

// drinks.pop();
// drinks.pop();
// drinks.pop();

// ... No...

// for loop maybe? 

// Since the length of the array may change, going down especially,
// drinks.length moves around so starting at 0 does no good in a traditianl loop since 1 is added right away... 
// Use the below instead.

// for(i = drinks.length-1; i >=0; i--) {
//     drinks.pop()
// }
// would work because you access the .length() only once at the start of the loop

// HOWEVER - The above is essentially a while loop so lets use that!

while (drinks.length > 0){
    drinks.pop(drinks)
}
while (drinks.length > 0){
    drinks.pop(drinks)
}

// IF YOU
// DO NOT
// KNOW THE
// LENGTH OF
// THE ARRAY ...
// Use  array[array.length - 1] to get you the last one.

drinks[0] = "Monster"
// Coffee has been changed to Monster!
// If an array is made by 'const' you can alter the vaules inside of it, but not the array variable itself.

drinks[drinks.length] = "A new beverage"
console.log(drinks)


let drinks2 = ["coffee", "tea", "water", "milk"];


// SPLICE & SLICE

// SPLICE - Modifys, changes, alters the array!

const removeDrinks = drinks2.splice(1, 2); // The remove drinks variable will start at index[1] of the drinks array, then remove the next two.
console.log(removeDrinks);
console.log(drinks2);

const addedDrinks = drinks2.splice(3, 2, "orange juice"); // Start at index[3], delete the next two, add "orange Juice".
console.log(addedDrinks);
console.log(drinks2);

// CHALLENGE!

// use splice to chang your fav movie list to...

const movies = ["Best in Show", "Alien", "Contact"]

// too... ["best in show", "alien", "The Matrix", "Gladiator"]

const removeMovies = movies.splice(2, 1, "The Matrix", "Gladiator");
console.log(removeMovies);
console.log(movies);

// THE SPLICE SAYS - Start at index 2, remove 1, add "The Matrix"
// and "Gladiator"


// SLICE

// returns a shallow copy of a portion of an array into a new array object selected from start to end ( end not included) where start and end represent the index of items in that array. The original array will not be modified



// LOOPING OVER AN ARRAY

// Traditional for loop ********** // Offers a lot of ways to modify the variables passed through.
for(let i = 0; i < movies.length; i++) {
    console.log(movies[i]);
}

// .forEach(function(var) {}) **********

// Use whatever name you want in place of movie. 
// return wouldn't work well here...

movies.forEach(function(movie){
    console.log(movie)
})

// for .. of.. 
// Not ideal for searching and finding a specific item.
// You can't change the movie variable, since it is local! You'd have to
// use an i loop.

// With a 'for.. of', we cannot modify any values... Use traditional loop!

for(let movie of movies){
    console.log(movie)
}

// PRACTICE EXERCISE
// Let's practice creating, modifying and iterating over an array!

// Create a new Node.js-based Repl in replit.com and name it JS Array Practice
// Assign an empty array to a variable named books.
// Add 'The Shining' to the books array.
// Add 'Moby Dick' to the front of books.
// console.log the second element of books.
// Update the second element by assigning to it 'Dune'.
// Insert 'Great Expectations' as a new second element (between 'Moby Dick' & 'Dune').
// Hint: splice!

// Iterate over the entire books array and console.log each book string.

const books = [];
books.push("The Shining");
books.unshift("Mody Dick"); // THIS IS SO ODD - but its "add to fron of an array"
// Unreliable way, books[0] = "the shining"
console.log(books[1]);
books[1] = "Dune";
books.splice(1, 0, "Great Expectation"); 
console.log(books);

for(let i = 0; i < books.length; i++) {
    let book = books[i]; // Nice trick!
    console.log(book); // NOW - instead of console logging books[i], it logs 'book' which is the same thing, changed on the previous line.
}

// OR...Same thing.
for (let book of books){
    console.log(book);
}

// How would you pull a key:value pair for each index?
// Replace the 'book' with [index, value], and added the .entries() to books to link the search to the arrays entries.

for (const [index, value] of books.entries()) {  
  console.log(index, value)
}

const message = "\"HI!\""
//   \" means USE the next character literally, not as a code...

// OR...Arrow function! 
// These allow you to write more dense code, which is more difficult at first, but it's good practice!
// The arrow function IMPLICITLY RETURNS what ever it's doing.

books.forEach((book)=> {
    console.log(book)
})

function booksToUpperCase(){
const excitedBooks = books.map(book=>book.toUpperCase())
console.log(excitedBooks)
// we'll get to maps later.
}
booksToUpperCase()



// SPREAD OPERATOR - More on this later.
// [...books, "Fowls of the Sky"]




// Array.prototype.includes()
// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// Expected output: true

console.log(pets.includes('at'));
// Expected output: false





