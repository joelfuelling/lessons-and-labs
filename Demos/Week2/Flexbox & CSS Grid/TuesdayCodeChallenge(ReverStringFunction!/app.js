// MOST ELEGANT SOLUTION...
function reverseUpcaseString(str) {
  // above version using an arrow function
  return str.split('').reverse().map(c => c.toUpperCase()).join('');
}

function reverseUpcaseString2(str) {
    let results = '';
    for (let i = 0; i < str.length; i++) {
      // can use square brackets to access chars in a string
      // but using the charAt() method is preferred
      results = str.charAt(i).toUpperCase() + results;
    }
    return results;
  }
  
  function reverseUpcaseString3(str) {
    // convert string to array, reverse, map and finally join it
    return str.split('').reverse().map(function(char) {
      return char.toUpperCase();
    }).join('');
  }