// Classes and Encapsulation
// an "instance" just means one object created by a class
// "encapsulation" means bundling code together
// Object Oriented Programming vs. Functional
const toDoListItems = []
// Define a class
class ToDoListItem {
    constructor(textInput){
        // "this" refers to the object being created by the constructor
        this.text = textInput;
        // you can created "default" properties without a parameter
        this.completed = false;
        // create a new list item HTML Element

        // fill in that element's text with the this.text property

        // add it to the page
            // GRAB the ul by its ID
            // use the append method

        // SAVE that element onto this object by creating a new property

    }
}
const newItem = new ToDoListItem("hello I'm the text")
// Define a function to respond to the press of the button
    // It should create a new ToDoListItem()
    // It should put that item into the array
function addNewListItem(){
    // Grab the input element
    const inputEl = document.querySelector("#newItemInput")
    // use the .value property to get the text
    const newText = inputEl.value;
    // create a new toDoListItem using the class!
    const newItem = new ToDoListItem(newText)
    // put that item in the global array
    toDoListItems.push(newItem);
    // clear the input
    inputEl.value = "";
}
// Add an event listener to the button that triggers the function on click
    // Grab the button from the dom
const addNewButtonEl = document.querySelector("#addNewItemButton")
    // Use the event listener method
addNewButtonEl.addEventListener("click", addNewListItem)
// Define instance methods

// Define static methods

// Define static properties

// Use extends to implement inheritance