/*-----------------------------------------------------------------
Challenge: 02-addTwoNumbers
Difficulty: Basic  
Prompt:
Write a function called addTwoNumbers that accepts two numeric arguments and returns the sum of those two numbers.
If either argument is not a Number, return the value of NaN.
Examples:
addTwoNumbers(5, 10) //=> 15
addTwoNumbers(10, -2) //=> 8
addTwoNumbers(0, 0) //=> 0
addTwoNumbers('Hello', 5) //=> NaN
-----------------------------------------------------------------*/
// Your solution for 02-addTwoNumbers here:

function addTwoNumbers(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
      return a + b;
    } else {
      return NaN;
    }
  }
  
  addTwoNumbers(10, -2)


  /*-----------------------------------------------------------------
Challenge: 03-sumNumbers
Difficulty: Basic  
Prompt:
- Write a function called sumNumbers that accepts a single array of numbers and returns the sum of the numbers in the array.
- If the array is empty, return 0 (zero).
Examples:
sumNumbers([10]) //=> 10
sumNumbers([5, 10]) //=> 15
sumNumbers([2, 10, -5]) //=> 7
sumNumbers([]) //=> 0
-----------------------------------------------------------------*/
// Your solution for 03-sumNumbers here:

// You could use a traditional for loop here but it's not necessary. Also forEach is perfect because we don't
// know how many numbers will be in the array.

function sumNumbers(nums) {
    let sum = 0; // create the variable to add each num to!
    sum.forEach(function(num) { // for each num (since we don't know how many would be
        // in the array passed through)
      sum += num; //  take the current sum and add the num.
    })
    return sum
  }

  // or

  function sumNumbers(arr) {
    if(!Array.isArray(arr)) {
      return false;
    } 
    if (arr.length === 0) P{
      return 0;
    }
    let total = 0;
    arr.forEach(function(nums) {
      total += nums;
    });
    return total;
  }

  // OR AN ARROW FUNCTIONS - very clean.


function sumNumbers(arr) {
    let total = 0;
      arr.forEach((nums) => {
      total += nums;
      console.log(num);
  });
  return total;
}
  