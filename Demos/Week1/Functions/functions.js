// FUNCTIONS! ]

// Encapsulating modular code, it is the way.

// Functions are built not to repeat things. Taht way, you can break it
// down into small easy to read steps and not have one super long
// line of annoying to read code.

// If you envoke a function on a line of code before it's created, it will run.
// Why?
// JavaScript HOISTING  - refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code

function sayHello() {

}

// Arrow function - DOES NOT CREATE A NEW SCOPE, whereas a regular function does.
const sayHi = () => {
}


// Example
const findSmallestWord = () => {
    console.log("Hi im a function and im running!")
}
// DON'T FORGET to call/invoke the function
findSmallestWord();


// MORE IMPORTANTLY - Passing variables into a function.

const greetSpecificPerson = (personToGreet) => {
    console.log(`Hello ${personToGreet}`);
}
greetSpecificPerson("Zelda");
greetSpecificPerson("Miss Baby");
greetSpecificPerson("Cheechie");


// MATH - Arrow functions do not create a new scope, but the function is "Local" in the sense that it doesn't get hoisted, because no 'function' is defined.

const add = (num1, num2) => {
    return num1 + num2; // RETURN the result
}

// Main goal is to process something, and return something the user wants.

const result = add(4,3); // Now, we've stored the result in a variable! Lets log it.
console.log(result)

//

function canGo(lightColor) {
    if(lightColor === "green" || lightColor === "yellow") {
        return true
    } // else { 
      // you don't need else with this one, but it's here for an example.
        return false;
    // }
}
console.log(canGo("red")); 

// We can simplify the function even more since theres only one.
// We want this to return true, or false based on 1 parameter, that's it...

function canIGo(lightColor) {
    return lightColor === "green" || lightColor === "yellow" // Function will have to auto-pick true or false based on the || statement.     
}
console.log(canIGo("red")); 

