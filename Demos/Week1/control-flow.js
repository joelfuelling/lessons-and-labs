// // branching
if (true) {
    console.log("is true");
}else {
    console.log("is false");
}

// looping
for (let i = 0; i < 5; i++) {
    console.log(i);
}


// Booleans in conditionals
let userIsValid; 
if (userIsValid = false); {
	console.log( "The user is valid!")
}



console.log('cat' || 'dog');
console.log(false || true);
console.log(true && false);
console.log(false && true);
console.log(10 || 'ten');
console.log(10 && 'ten');

console.log('cat' && '21' || 10 === "ten")
// is true if either (both of the first two are true), or if the 2nd is true.
// is false if either (both of the first two are false), and the 2nd is false.

console.log(true && false && false);
console.log(true || false || false);

if ("string") {
    console.log("boolean is true");
}else {
    console.log("boolean is false")
}
// Pla\y around with the input to see what changes.

const mysteryVariable = {};
if (typeof mysteryVariable === "string") {
    console.log("the variable was a string");
}else if (typeof mysteryVariable === "number"){
    console.log("the variable was a number");
}else {
    console.log("the variable is neither a number or string");
}

// BRANCHING EXERCISE!

const color = "red";
if (color === "green") {
    console.log("Go")
}else if (color === "yellow") {
    console.log("Slow")
}else if (color === "red") {
    console.log("Stop")
}else {
    console.log("Whatever")
}
// Potential edge case - What happens when varible is ALL CAPS?!
// and you want lowercase?

const bigColor = "RED";
if (color.toLowerCase() === "green") {
    console.log("Go")
}else if (color.toLowerCase() === "yellow") {
    console.log("Slow")
}else if (color.toLowerCase() === "red") {
    console.log("Stop")
}else {
    console.log("Whatever")
}

// lOOPS
// for loop - When you know you need to through every item in an array,
// or object, or how many times to run through it.
    // DONT FORGET .length when working with arrays and objects.

// While loop - When you don't know how long it will take, or how many
// itterations you need.



// YOU MUST DEFINE THE VARIABLE 1ST WITH A WHILE LOOP.
// YOU MUST DEFINE THE VARIABLE 1ST WITH A WHILE LOOP.
// YOU MUST DEFINE THE VARIABLE 1ST WITH A WHILE LOOP.

let cashMoney = 100;
while(cashMoney > 0);{
    console.log(`${cashMoney} left to go!`);
    let diceRoll = Math.random() * 6
    if(diceRoll < 4) {
        cashMoney -= 10;
    }else {
        cashMoney += 5;
    }
}