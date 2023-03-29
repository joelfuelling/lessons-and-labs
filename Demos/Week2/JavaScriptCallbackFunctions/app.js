// A callback function is a function that's passed to another function as an argument.\
// WHEN YOU ARE PASSING A FUNCTION AS A PARAMETER you only pass the name (like an event listener)

function higherOrderFunction(callbackFunction) {
  // Sooner or later...
  callbackFunction();
}
function logDoubleTheNum(num) {
    console.log(num * 2);
}


const numbers = [1,2,3,4,5]
// Below, forEach is a 'Higer Order' function', its higher up and responsible for telling the logDoubleTheNum function to invoek.
numbers.forEach(logDoubleTheNum)

// Callbacks are common with data base connections because we might now know how long its going to take to retreive. something like the below..

db.getDataAccordingToQuery("queryString", function (dataFromDatabase) {
    dataFromDatabase.forEach(); 
})

const data = db.getData()
console.log(data)

// above, JavaScript would get caught up waiting!



// Even listeners are callback functions!

element.addEventListener("cliock", respondToClick);