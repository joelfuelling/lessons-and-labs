// // primitive data types
// // string 
// // numbers
// // booleans.

// // data structure
// // array [1, 2, 3]
// // OBJECT (hash-map) - Objects can contain many things...
// // JSON = JavaScript Object Notation
// const yourIntrepidInstructore = "a decent guy";
// // Only 1 piece of information?
// // Instead, use an object inside curly brackets!
// // NOTE - By adding quotes to the keys, it doesn't have compatability issues
// // with JSON.
// // ALSO - leave the first

// const ryanBro = {
//     "name": "Ryan",
//     "location": "Denver, CO",
//     "pets": ["grushenka", "rosie", "morty"]
// }
// ryanBro.tShirt = "blue"; // Use dot notation to alter things inside!
// console.log(ryanBro);

// // the first item is a key (or property), and th 2nd item is a value.
// // name: = key, "Ryan" = value.


// // example for a game.
// const game = {
//     title: "Guess the number!",
//     secretNum: 100
// }


// Think of a spreadsheet as an Array :0
// Create an object out of an excel sheet!

const playerInfo = {
    "name": "Rob Gronkowski",
    "team": {
        "name": "Patriots",
        "superBowls": [2002, 2003, 2005]
    },
    "position": "TE",
    "proBowls": [2011, 2012, 2014, 2015,2017]
}
// console.log(playerInfo);

// playerInfo.proBowls.forEach((year)=> {
//     console.log(`Rob G made the pro bowl in ${year}`)
// })

// How do you access 2005?

console.log(playerInfo.team.superBowls[2]);


// add something!

playerInfo.isRetired = true;


// SQUARE BRACKET NOTATION is very helpful when moving data around with 
// Objects. Or, when you're looping through an object and don't know the names.

console.log(playerInfo["Pro Bowls"]) // This will now work!


// OR - You dont' know what the name of the key is.
const whichKeyDoesTheUserWant = "position"
console.log(playerInfo.whichKeyDoesTheUserWant)

// Using bracket notation will fix it.




// NOW PUT IT IN A 'for...in' LOOP!
// the in keyword! get use to it when looking 'IN' to things.
// When iterating over object properties, you should always use for...in.

for(key in playerInfo) {
    console.log(playerInfo.key);
}
// wont work!

for(key in playerInfo) {
    console.log(playerInfo[key]);
}

for(key in playerInfo) {
    console.log(playerInfo.team[key]);
}

for(key in playerInfo) {
    console.log(playerInfo[key] && playerInfo.team[key]);
}
// These will!



const obj = {
    "35": "some value"
}
obj["35"]



console.log(Object.keys(playerInfo.proBowls));


// Note the capitals below are properly logged becase of the [key] using
// bracket notations.
const game = {
    "Title": ["alien", " civ6", " wow"],
    "Year": [1989 , 1995 , 2003 ]
}

// VERY IMPORTANT EXAMPLE!
for (let key in game) {
    console.log(`The value of the ${key} property is ${game[key]}`);
  }

