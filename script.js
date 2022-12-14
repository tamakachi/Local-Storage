// Information stored in localstorage is always kept in string format
// Remembering this is key to working with local storage as all data types will
// automatically be converted to string when stored this way


// Storing information in localStorage takes two parameters
// First is the key, second is the value

localStorage.setItem("name","Kent")
localStorage.setItem("age",32)
localStorage.setItem("trash","this key value pair is trash and needs to be deleted")

// Retrieving information from local storage requires the key
let username = localStorage.getItem("name")
let age = localStorage.getItem("age")


// Deleting an item from local storage
localStorage.removeItem("trash")

let trash = localStorage.getItem("trash")

// Deleting everything the app put in local storage

//localStorage.clear()

console.log(username,age,trash)

// In Chrome, local storage data can be viewed from Application Tab
// While debugging with F12


// Storing Javascript Objects in localStorage
// You need to stringify the object into JSON format when storing it
// When retrieving it you'll need to parse it back into javascript objects

const todos = [
    {text: 'Hangout with Ben', author:"Kent"},
    {text: 'Study frontend', author:"Kent"},
    {text: 'Play with the dog', author:"Kent"}    
]

localStorage.setItem("todos",JSON.stringify(todos))

// After retrieving the javascript object from local storage, parse it back
// into javascript object from string using parse

let retrievedTodos = localStorage.getItem("todos")

console.log(JSON.parse(retrievedTodos))
