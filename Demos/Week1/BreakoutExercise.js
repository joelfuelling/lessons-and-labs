// 1.
function maxOfTwoNumbers(x, y) {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
  
  // or more "elegantly" using the fantastic ternary expression!
  // return  x >= y ? x : y;
}

console.log(maxOfTwoNumbers(3, 9));

// 2
const maxOfThree = function(num1, num2, num3) {
    return Math.max(maxOfThree);
}

// 3
function isCharAVowel(name) {
    if (name === "a" || name === "e" || name === "i" ||
    name === "o" || name === "u") {
        return true;
    } else {
    return false;
    }
    
}

console.log(isCharAVowel("b"));
console.log(isCharAVowel("i"));

// 4

const numArray = [3, 5, 3, 27, 10, 23, 40];

const sumArray = function(numArray) {
    let sum = 0;
    for(let i = 0; i < numArray.length; i++) {
        sum += numArray[i]
    }
    console.log(sum)
    return sum;
}
sumArray(numArray);

// 5 

const numArray2 = [3, 5, 3, 27, 10, 23, 40];

function sumArray2(numArray2) {
    let sum = 1;
    for(let i = 0; i < numArray2.length; i++) {
        sum = sum * numArray2[i]
    }
    console.log(sum)
    return sum;
}
sumArray2(numArray2);

// 6

const numArgs = function() {
    console.log(arguments.length);
    return arguments.length;  
}
numArgs(2, 4, 5, "cat");

// 7 - split, reverse, and join.

let id = "Joel"
function reverse(string) {
    console.log(string.split("").reverse().join(""));
    return string.split("").reverse().join("");
}
reverse("Fuelling");

// 8

const arr = ["bucket", "stool", "drill", "tablesaw"]
let longestArray = 0;
const longestStringInArray = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestArray) {
        longestArray = arr[i].length;
        }         
    }
    console.log(longestArray);
    return longestArray;
  }
longestStringInArray(arr);

// 9

const arr2 = ["Beethoven", "Bach", "Chopin", "Tchaikovsky"]
const num2 = 6
let arrString = [];
let longestString = 0;
function stringsLongerThan(arr2, num2) {
    for (let i = 0; i < arr2[i].length; i++) {
        if (arr2[i].length >= 0) {
            longestString = arr2[i];
            arrString.push(longestString);        
        }
        console.log(arrString);
        return arrString;
    }
}
stringsLongerThan(arr2, num2);

// Try the filter method!
