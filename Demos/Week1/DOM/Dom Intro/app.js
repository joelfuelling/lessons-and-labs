// // console.log("JS is hooked up and ready to go!")

// EVENT LISTENERS
// 1 - Grab the element that will listen for the event.

// const buttonToClick = document.querySelector("#buttonToClick")
//     Usually, the "button", or the "form" listening for the event.
// 2 - write the function you want to happen in response to the event.

// function changeHeadingColor() {
//     const h1 = document.querySelector("h1");
//     h1.style.color = "green";
// }

// Main ones include... click, submit, keypress, hover, load, touchstart

// 3 - Combine the two above steps with an EVENT LISTENER. Simple, a listener with a function that does the thing.
// buttonToClick.addEventListener("click", changeHeadingColor)

// Do it again!



const buttonToClick = document.querySelector('#button-to-click');
buttonToClick.addEventListener('click', addNewListItem) 


function addNewListItem(){
    // When the user clicks the Add Comment button...
    // 1. Grab the text from the input 
    let inputField = document.querySelector('input')
    let inputFieldValue = inputField.value; // alter the inputField variable to now contain the value of what was in the inputField (the "Comment") GOODLE found us .value
    // 2. Create a new list item with that text.
    const newListItem = document.createElement('li') // create new li element
    newListItem.innerText = inputFieldValue; // now, set the innerText of the newListItem to the inputFieldValue (see how we're building?)
    // 3. Add the new list item to the bottom of the list.
        // a. grab the unordered list from the HTML document
        // b. Use the magic method of the unordered list that adds a new element to it.
    const ul = document.querySelector('ul'); // a li element cannot exist without a ul.
    ul.append(newListItem); // append the newListItem to the new ul element in the HTML
    // 4 clear the input value after each click.
    inputField.value = ""; // set it to "", or 'null', and empty string. GREAT TRICK FOR CLEARING FIELD AT end of function, ready for the next run.
}

// EVENT DELEGATION - When you have multiple events in the same area give the event listener to the parent (ul is parent of li) so that the children will respond!

const commentList = document.querySelector('ul'); // ul is parent of the li's, its got them covered! This way, we don't need to make an event listener for each li item. ALSO, we're adding new li items with the previous listener so that would get very complicated very quick.
function crossOutListItem(evt) {
    evt.target.style.textDecoration = "line-through"
    // OR evt.target.classList.toggle("crossed-out") to toggle the strikethrough.
}

commentList.addEventListener("click", crossOutListItem); // NOTE you don't invoke it, just call it.
