// Exercise 1

function writeDing() {
    console.log('Ding!');
  }
  
  let timerId = setTimeout(writeDing, 3000);

// Exercise 2



const words = ['short', 'medium', 'delicious', 'nice', 'lengthy'];


words.sort((a,b) => {
    return a.length - b.length;
})
console.log(words)

// Okay, so imagine you have a bunch of toys that you want to put away in your toy box. You want to organize them by size, from the smallest to the largest.

// Now, imagine that the toys are words, like "short", "medium", "delicious", "nice", and "lengthy".

// The "sort" function is like a magical helper that helps you put the words in order by their length. So, the shortest word ("short") goes first, then the next shortest ("nice"), then the medium-sized word ("medium"), and so on, until you get to the longest word ("lengthy").

// The "function(a, b)" part is like telling the magical helper how to compare the words. It's like telling the helper to look at each pair of words and figure out which one is shorter and which one is longer, based on their length. Then, the helper moves them around in the right order.

// So, the sort function basically helps you organize the words by their length, from the shortest to the longest, just like you would with your toys!


// Exercise 3

// Filter the words array from above to create a new array
// named longWords that includes only the words with 7 or more
// characters

const longWords = words.filter((word) => { // FILTER creates a new array, no need to declare one prior to the function, or in it.
    return word.length > 6
})
console.log(longWords)

// Exercise 4

// I used chatGPT to explain the (color[i], [i]) bit below because I was baffled. BUT, we're passing functions, and I overlooked the console.log output from the log function... it makes sense after seeing it put together.

// Test with this array
const colors = ['red', 'green', 'blue', 'purple'];
// and this callback
function log(elem, idx) { // idx winds up being [i] in each iteration in the forEach below
  console.log(`Index: ${idx} / Element Value: ${elem}`);
}

function forEach(colors, log) { // forEach item in the colors array, run the log function
    for(let i = 0; i < colors.length; i++) { //Within each forEach iteration of this function, run the log callback function with the
        log(colors[i], [i]) // play around with these!
    }
}

forEach(colors, log)


