// Classes and Encapsulation
// const object1 = {
//     name: "object!"
// }

// Instance - One object creatd by a class.

// Encapsulation - Bundling code together.

// Object Oriented Programming (OOP) vs. Functional Programming
    // Classes are the FOUNDATION of OOP 




const toDoListItems = []

// GRAB the ul by its ID (we'll insert the new list item here later!)
const newListElement = document.querySelector("#toDoList") // MIGHT want to do this in the globalspace...


// Define a class
class ToDoListItem {
    constructor(textInput){
        // "this" refers to the object being created by the constructor
        this.text = textInput;
        // you can created "default" properties without a parameter
        this.completed = false;
        //create a new list item HTML element
        const newListItem = document.createElement("li")
        // fill in that elements text
        newListItem.innerText = this.text;
        console.log(newListItem)
        // add it to the page ()
            // use the APPEND method.
            newListElement.append(newListItem)

        // SAVE that element onto this object by creating a new property.
        this.newListElement = newListItem;
        // use the render method to draw it on the page.
        this.render();
    }
    render() { // BIG instance method.
        this.newListItem.innerHTML = "";
        const newButton = document.createElement("button");
        //Use an arow function so we still have access to 'THIS'.
        newButton.addEventListener("click", () => {
            this.completed = !this.completed;
            this.render();
            console.log(this) // 'this' is the textInput, decided in the previous ToDoListItem class constructor. NOT the button, because we're using the arrow function.
        })
        if(this.completed){
            newButton.innerText = "Change to Incompleted"
            this.newListElement.style.textDecoration = "linethrough"
            // render the button with Undo
            // change the style of the item crossed out
        } else {
            newButton.innerText = "Mark Complete";
        }
    }
}

// I have an input and a button on the page
// Check
// When i fill in the input and hit the button, I have a function that console.logs what's in the input

function addNewListItem(){    
    const inputEl = document.querySelector("#newItemInput")
    const newText = inputEl.value;
    const newItem = new ToDoListItem(newText) // 'new' is... well, new! our (previous list items) are now more complicated
    toDoListItems.push(newItem);
    inputEl.value = "";
}
const buttonClick = document.querySelector("#addNewItemButton")

buttonClick.addEventListener("click", addNewListItem) 



// The function puts that new item into the array of ToDoListItems


// instantiate a class
//const newItem = new ToDoListItem("learn about classes")
//const newItem2 = new ToDoListItem("use them in a todo list")

// Create an input and a biuton, that when clicked wioth text in it, adds a new list ti

// Include and use a constructor method

// Define instance methods



// Simplified, and summarized!
// Simplified, and summarized!
// Simplified, and summarized!

class Cat {
    constructor(name) {
        this.name = name;
        this.legs =4;

    }
    meow(){
        console.log(`MEW MY NAME IS ${this.name}`)
    }
}
const morty = new Cat("morty")
morty.meow()