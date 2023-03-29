
// Write a function named planetHasWater as a function expression.

// It will have one parameter, planet, that accepts a string argument.

// Return true if the planet argument is either 'Earth' or 'Mars', otherwise return false.

// Bonus: Make the function work regardless of the casing of the planet string being passed in ('earth', 'MARS', etc.).

// Invoke the function a few times to test it:



// version 1 - // .toUpperCase after planet in the || would be more appropriate for how actual data would be stored.
function planetHasWater(planet) {
    if (planet.toLowerCase === "Earth" || planet.toLowerCase === "mars") {
        return true;
    }
    return false;
}
console.log(planetHasWater('Earth') ) //=> true
console.log(planetHasWater('Venus') ) //=> false


// version 2, with array.includes (what if instead of 2 planets, you were checking 1,000 thigns. You'd use an array
const planetsWithWater = ["Mars", "Earth"]
const planetHasWater2 = (planet) => {
    if (planetsWithWater.includes(planet)) {
        return true;
    }
    return false;
}

console.log(planetHasWater2('Earth') ) //=> true
console.log(planetHasWater2('Venus') ) //=> false
// Test the bonus...
console.log(planetHasWater2('mArS') ) //=> true

// UBER FUNCTION VERSION :) Very streamlined, not quite here yet though...

const planetHasWater3 = (planet) => {
    const planetsWithWater = ["Mars", "Earth"]
    return planetsWithWater.includes(planet.toLowerCase()) // Bonus!
}
console.log(planetHasWater3("Saturn"));



// Functions will often pass other functions through. Below (and in R,P,S), the forEach fucntion passes the (num) function through it.

const numbers = [2,5,7,3,8,4]
numbers.forEach(num => {
    if(num > 5) {
        console.log(`${num} is greater than five`)
    } else {
        console.log(`${num} is less than five`)
    }
})

// OR

function checkIfGreaterThanFive(num) {
    if(num > 5) {
        console.log(`${num} is greater than five!`)
    }
}



// Lets refactor the two above, so that the forEach passes the function through, rather than all the confitionals themselves.
const numbers2 = [2,5,7,3,8,4]

function checkIfGreaterThanFive(num) {
    if(num > 5) {
        console.log(`${num} is greater than five!`)
    }
}

numbers2.forEach(checkIfGreaterThanFive) // Ta-da!


// I can write a function
// I can give the function a parameter
// I can have the function return something
// I can INVOKE/call/run the function.
